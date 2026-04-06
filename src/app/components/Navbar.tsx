import PillNav from "../../components/PillNav";
import "../../components/PillNav.css";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Work", href: "#work" },
  { label: "Cases", href: "#cases" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// Simple SVG data URI for "CL" logo
const logoSvg = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><rect width="36" height="36" rx="18" fill="#09090b"/><text x="18" y="23" text-anchor="middle" fill="white" font-family="system-ui,sans-serif" font-size="14" font-weight="600">CL</text></svg>'
)}`;

export function Navbar() {
  return (
    <PillNav
      logo={logoSvg}
      logoAlt="Chris Liu"
      items={navItems}
      baseColor="#ffffff"
      pillColor="#09090b"
      hoveredPillTextColor="#ffffff"
      pillTextColor="#ffffff"
      initialLoadAnimation={true}
    />
  );
}
