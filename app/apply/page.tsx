import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zusammenarbeit",
  description: "Anfrage stellen — wir prüfen jede Anfrage individuell.",
};

export default function ApplyPage() {
  return (
    <div className="container-pad py-20">
      <h1 className="font-serif text-4xl md:text-5xl tracking-tighter2">Zusammenarbeit anfragen</h1>
      <p className="mt-6 text-muted max-w-2xl leading-relaxed">
        Kurzer Rahmen-Check. Wenn es passt, gehen wir strukturiert weiter.
      </p>
      <p className="mt-10 text-sm text-muted">
        (Formular/Automation bauen wir als nächsten Schritt.)
      </p>
    </div>
  );
}