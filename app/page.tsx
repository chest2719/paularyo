export default function Home() {
  return (
    <div className="container-pad py-24">

      {/* Hero */}
      <section className="max-w-3xl">
        <p className="text-xs tracking-[0.25em] uppercase text-[rgb(var(--muted))]">
          Paularyo
        </p>

        <h1 className="mt-6 text-5xl md:text-6xl font-light tracking-[-0.03em] leading-tight">
          Digitale Autorität für Organisationen mit hohem Anspruch.
        </h1>

        <p className="mt-8 text-lg text-[rgb(var(--muted))] leading-relaxed">
          Paularyo entwickelt präzise Positionierungs- und Conversion-Systeme 
          für ausgewählte Partner im deutschsprachigen Raum.
        </p>

        <div className="mt-10 flex gap-6 items-center">
          <a
            href="/apply"
            className="rounded-xl border border-[rgb(var(--line))] bg-[rgb(var(--fg))] px-6 py-3 text-sm text-[rgb(var(--bg))] shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:opacity-90 transition"
          >
            Zusammenarbeit anfragen
          </a>

          <a
            href="/authority-systems"
            className="text-sm text-[rgb(var(--muted))] underline underline-offset-4 hover:text-[rgb(var(--fg))] transition"
          >
            Vorgehen ansehen
          </a>
        </div>

        <p className="mt-8 text-xs text-[rgb(var(--muted))]">
          Wir prüfen jede Anfrage individuell.
        </p>
      </section>

    </div>
  );
}