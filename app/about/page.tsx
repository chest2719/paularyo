import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über",
  description: "Paularyo — diskret, strukturiert, premium.",
};

export default function AboutPage() {
  return (
    <div className="container-pad py-20">
      <h1 className="font-serif text-4xl md:text-5xl tracking-tighter2">Über Paularyo</h1>
      <p className="mt-6 text-muted max-w-2xl leading-relaxed">
        Paularyo ist eine diskrete Boutique-Struktur für digitale Autorität — für Organisationen, bei denen Vertrauen
        die Währung ist.
      </p>
    </div>
  );
}