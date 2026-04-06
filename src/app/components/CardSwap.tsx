import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import gsap from "gsap";

export const Card = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { customClass?: string }
>(({ customClass, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={`card-swap-card ${customClass ?? ""} ${rest.className ?? ""}`.trim()}
  />
));
Card.displayName = "Card";

const makeSlot = (i: number, distX: number, distY: number, total: number) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (el: HTMLElement, slot: ReturnType<typeof makeSlot>, skew: number) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

interface CardSwapProps {
  width?: number;
  height?: number;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (index: number) => void;
  skewAmount?: number;
  easing?: "elastic" | "smooth";
  children: React.ReactNode;
}

const CardSwap: React.FC<CardSwapProps> = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = "elastic",
  children,
}) => {
  const config =
    easing === "elastic"
      ? {
          ease: "elastic.out(0.6,0.9)",
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05,
        }
      : {
          ease: "power1.inOut",
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2,
        };

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(
    () => childArr.map(() => React.createRef<HTMLDivElement>()),
    [childArr.length]
  );

  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number>();
  const container = useRef<HTMLDivElement>(null);
  const animating = useRef(false);

  // Swap forward: front card drops down and goes to back
  const swapForward = useCallback(() => {
    if (order.current.length < 2 || animating.current) return;
    animating.current = true;

    const [front, ...rest] = order.current;
    const elFront = refs[front].current;
    if (!elFront) {
      animating.current = false;
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        animating.current = false;
      },
    });
    tlRef.current = tl;

    // Drop front card down
    tl.to(elFront, {
      y: "+=500",
      duration: config.durDrop,
      ease: config.ease,
    });

    // Promote remaining cards forward
    tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);
    rest.forEach((idx, i) => {
      const el = refs[idx].current;
      if (!el) return;
      const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
      tl.set(el, { zIndex: slot.zIndex }, "promote");
      tl.to(
        el,
        { x: slot.x, y: slot.y, z: slot.z, duration: config.durMove, ease: config.ease },
        `promote+=${i * 0.15}`
      );
    });

    // Send front card to back
    const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
    tl.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
    tl.call(() => gsap.set(elFront, { zIndex: backSlot.zIndex }), undefined, "return");
    tl.to(
      elFront,
      { x: backSlot.x, y: backSlot.y, z: backSlot.z, duration: config.durReturn, ease: config.ease },
      "return"
    );

    tl.call(() => {
      order.current = [...rest, front];
    });
  }, [refs, cardDistance, verticalDistance, config]);

  // Swap backward: back card comes to front
  const swapBackward = useCallback(() => {
    if (order.current.length < 2 || animating.current) return;
    animating.current = true;

    const cur = order.current;
    const back = cur[cur.length - 1];
    const rest = cur.slice(0, cur.length - 1);
    const elBack = refs[back].current;
    if (!elBack) {
      animating.current = false;
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        animating.current = false;
      },
    });
    tlRef.current = tl;

    // Move back card off-screen below
    tl.set(elBack, { y: 500, zIndex: refs.length });

    // Shift existing cards back one slot
    tl.addLabel("demote", 0);
    rest.forEach((idx, i) => {
      const el = refs[idx].current;
      if (!el) return;
      const slot = makeSlot(i + 1, cardDistance, verticalDistance, refs.length);
      tl.set(el, { zIndex: slot.zIndex }, "demote");
      tl.to(
        el,
        { x: slot.x, y: slot.y, z: slot.z, duration: config.durMove, ease: config.ease },
        `demote+=${i * 0.15}`
      );
    });

    // Bring back card to front
    const frontSlot = makeSlot(0, cardDistance, verticalDistance, refs.length);
    tl.to(
      elBack,
      {
        x: frontSlot.x,
        y: frontSlot.y,
        z: frontSlot.z,
        duration: config.durReturn,
        ease: config.ease,
      },
      "demote+=0.2"
    );
    tl.set(elBack, { zIndex: frontSlot.zIndex });

    tl.call(() => {
      order.current = [back, ...rest];
    });
  }, [refs, cardDistance, verticalDistance, config]);

  // Initial placement + auto-rotate
  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) => {
      if (r.current)
        placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount);
    });

    swapForward();
    intervalRef.current = window.setInterval(swapForward, delay);

    return () => clearInterval(intervalRef.current);
  }, [cardDistance, verticalDistance, delay, skewAmount, swapForward]);

  // Pause on hover
  useEffect(() => {
    if (!pauseOnHover || !container.current) return;
    const node = container.current;

    const pause = () => clearInterval(intervalRef.current);
    const resume = () => {
      intervalRef.current = window.setInterval(swapForward, delay);
    };

    node.addEventListener("mouseenter", pause);
    node.addEventListener("mouseleave", resume);
    return () => {
      node.removeEventListener("mouseenter", pause);
      node.removeEventListener("mouseleave", resume);
    };
  }, [pauseOnHover, delay, swapForward]);

  // Keyboard arrow keys
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        clearInterval(intervalRef.current);
        swapForward();
        intervalRef.current = window.setInterval(swapForward, delay);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        clearInterval(intervalRef.current);
        swapBackward();
        intervalRef.current = window.setInterval(swapForward, delay);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [swapForward, swapBackward, delay]);

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child as React.ReactElement<any>, {
          key: i,
          ref: refs[i],
          style: {
            width,
            height,
            ...(((child as React.ReactElement<any>).props as any).style ?? {}),
          },
          onClick: (e: React.MouseEvent) => {
            ((child as React.ReactElement<any>).props as any).onClick?.(e);
            onCardClick?.(i);
          },
        })
      : child
  );

  return (
    <div
      ref={container}
      className="card-swap-container"
      style={{ width, height }}
    >
      {rendered}
    </div>
  );
};

export default CardSwap;
