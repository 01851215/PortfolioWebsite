import { MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-white/20" style={{ fontSize: "0.8125rem" }}>
          <MapPin className="w-3.5 h-3.5" />
          <span>London, United Kingdom</span>
        </div>
        <span className="text-white/15" style={{ fontSize: "0.8125rem" }}>
          &copy; 2026 Chris Liu. All rights reserved.
        </span>
      </div>
    </footer>
  );
}