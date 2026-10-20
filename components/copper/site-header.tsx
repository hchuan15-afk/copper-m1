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
      {/* Phones: logo and theme toggle on top, links on a second row. */}
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-2 sm:flex-nowrap sm:py-3">
        <Link href="/" aria-label="Copper State Labs home" className="shrink-0">
          <Logo className="w-36 sm:w-44" />
        </Link>
        <nav
          aria-label="Main"
          className="order-last flex w-full items-center justify-center gap-6 pb-1 sm:order-none sm:ml-auto sm:w-auto sm:pb-0"
        >
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
    </header>
  );
}
