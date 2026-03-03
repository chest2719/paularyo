import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/75 backdrop-blur">
      <div className="container-pad flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-xs tracking-[0.28em] uppercase text-muted">
            Paularyo
          </span>
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link className="text-muted hover:text-fg transition" href="/authority-systems">
            Authority Systems
          </Link>
          <Link className="text-muted hover:text-fg transition" href="/work">
            Selected Work
          </Link>
          <Link className="text-muted hover:text-fg transition" href="/about">
            Über
          </Link>
          <Link
            href="/apply"
            className="rounded-xl border border-line bg-fg px-4 py-2 text-sm text-bg shadow-soft hover:opacity-90 transition"
          >
            Zusammenarbeit anfragen
          </Link>
        </nav>
      </div>
    </header>
  );
}