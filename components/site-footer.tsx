import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="container-pad py-10 text-sm text-muted flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="text-xs tracking-[0.28em] uppercase">Paularyo</div>
        <div className="flex gap-6">
          <Link className="hover:text-fg transition" href="/about">Über</Link>
          <Link className="hover:text-fg transition" href="/impressum">Impressum</Link>
          <Link className="hover:text-fg transition" href="/datenschutz">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}