import Link from "next/link";
import { Logo } from "@/components/copper/logo";
import { ModeToggle } from "@/components/copper/mode-toggle";

// In-page anchors to the landing page sections, so plain <a> links.
const NAV = [
  { href: "#products", label: "Products" },
  { href: "#plus", label: "Copper Plus" },
  { href: "#privacy", label: "Privacy" },
];

export function SiteHeader() {
  return (
    <header
      data-testid="site-header"
      className="bg-background/90 sticky top-0 z-50 border-b backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link
          href="/"
          aria-label="Copper State Labs home"
          className="shrink-0"
        >
          <Logo className="w-32 sm:w-44" />
        </Link>
        <div className="flex items-center gap-1 sm:gap-4">
          <nav aria-label="Main" className="flex items-center gap-3 sm:gap-6">
            {NAV.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-muted-foreground hover:text-primary text-sm font-semibold whitespace-nowrap transition-colors sm:text-base"
              >
                {label}
              </a>
            ))}
          </nav>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
