import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authority Systems",
  description: "Paularyo Framework: Positionierung, Präsenz, Conversion.",
};

export default function AuthoritySystemsPage() {
  return (
    <div className="container-pad py-20">
      <h1 className="font-serif text-4xl md:text-5xl tracking-tighter2">Authority Systems</h1>
      <p className="mt-6 text-muted max-w-2xl leading-relaxed">
        Positionierung → Präsenz → Conversion. Ruhig. Präzise. Messbar.
      </p>
    </div>
  );
}