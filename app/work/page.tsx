import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Ausgewählte Ausführung. Details diskret auf Anfrage.",
};

export default function WorkPage() {
  return (
    <div className="container-pad py-20">
      <h1 className="font-serif text-4xl md:text-5xl tracking-tighter2">Selected Work</h1>
      <p className="mt-6 text-muted max-w-2xl leading-relaxed">
        Projekt-Details teilen wir diskret im Rahmen einer Zusammenarbeit.
      </p>
    </div>
  );
}