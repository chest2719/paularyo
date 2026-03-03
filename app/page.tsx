import Link from "next/link";
import { Section, Divider } from "@/components/ui/section";
import { Surface, SubtlePanel } from "@/components/ui/surface";
import { Kicker, H1, H2, PLead, PMuted } from "@/components/ui/typography";

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-xl border border-line/80 bg-fg px-6 py-3 text-sm text-bg shadow-[0_18px_60px_rgba(0,0,0,0.45)] hover:opacity-90 transition"
    >
      {children}
    </Link>
  );
}

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm text-muted underline underline-offset-4 hover:text-fg transition"
    >
      {children}
    </Link>
  );
}

export default function Home() {
  return (
    <div className="container-pad">
      {/* HERO */}
      <Section className="pt-20 md:pt-28">
        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <Kicker>Paularyo</Kicker>
            <H1>Digitale Autorität. Ruhig umgesetzt.</H1>
            <PLead>
              Paularyo entwickelt präzise Positionierungs- und Conversion-Systeme für ausgewählte
              Partner im deutschsprachigen Raum.
            </PLead>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <PrimaryButton href="/apply">Zusammenarbeit anfragen</PrimaryButton>
              <TextLink href="/authority-systems">Ansatz ansehen</TextLink>
            </div>

            <p className="mt-8 text-xs text-muted">
              Wir prüfen jede Anfrage individuell.
            </p>
          </div>

          <div className="md:col-span-4">
            <Surface className="p-6">
              <Kicker>Rahmen</Kicker>
              <div className="mt-4 space-y-3">
                <PMuted>
                  Projekte beginnen ab <span className="text-fg">15.000 €</span>.
                </PMuted>
                <PMuted>
                  Begleitung ab <span className="text-fg">1.500 €/Monat</span>.
                </PMuted>
                <PMuted>Selektiv. Präzise. Minimalistisch.</PMuted>
              </div>
            </Surface>
          </div>
        </div>

        <div className="mt-16">
          <Divider className="opacity-60" />
        </div>
      </Section>

      {/* AUTHORITY */}
      <Section className="py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Kicker>Authority Systems</Kicker>
            <H2 className="mt-4">Klarheit. Präsenz. Nachfrage.</H2>
            <PMuted className="mt-5">
              Keine Effekte. Keine Lautstärke. Nur eine digitale Struktur, die Qualität sichtbar
              macht — und Anfragen sauber führt.
            </PMuted>

            <div className="mt-10">
              <TextLink href="/authority-systems">Framework im Detail</TextLink>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  t: "Positionierung",
                  d: "Botschaft, Angebot, Ton — präzise und premium.",
                },
                {
                  t: "Präsenz",
                  d: "Eine Experience, die Vertrauen aufbaut.",
                },
                {
                  t: "Conversion",
                  d: "Anfrage- und Terminlogik, klar messbar.",
                },
              ].map((x) => (
                <SubtlePanel key={x.t} className="p-6">
                  <p className="text-[11px] tracking-[0.32em] uppercase text-muted">
                    {x.t}
                  </p>
                  <p className="mt-4 text-sm leading-[1.75] text-muted">{x.d}</p>
                </SubtlePanel>
              ))}
            </div>

            <div className="mt-10">
              <Surface className="p-6">
                <ol className="divide-y divide-line/60">
                  {[
                    ["Screening", "Passung, Zielbild, Rahmen."],
                    ["Strategy", "Architektur, Inhalte, Prioritäten."],
                    ["Build", "Design & Umsetzung."],
                    ["Authority", "Iterationen & Optimierung."],
                  ].map(([t, d]) => (
                    <li key={t} className="py-4 first:pt-0 last:pb-0">
                      <div className="flex items-start justify-between gap-6">
                        <p className="text-sm text-fg">{t}</p>
                        <p className="text-sm text-muted">{d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Surface>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <Divider className="opacity-60" />
        </div>
      </Section>

      {/* CTA */}
      <Section className="pt-10 md:pt-14">
        <Surface className="p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <Kicker>Zusammenarbeit</Kicker>
              <H2 className="mt-4">Passt Ihr Vorhaben zu Paularyo?</H2>
              <PMuted className="mt-5 max-w-2xl">
                Wenn Sie eine digitale Präsenz auf Premium-Niveau aufbauen möchten, prüfen wir gern
                die Passung — ruhig, diskret, strukturiert.
              </PMuted>
            </div>
            <div className="md:col-span-4 md:flex md:justify-end">
              <PrimaryButton href="/apply">Anfrage prüfen lassen</PrimaryButton>
            </div>
          </div>
        </Surface>
      </Section>
    </div>
  );
}