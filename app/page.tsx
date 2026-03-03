import Link from "next/link";
import { Section, Divider } from "@/components/ui/section";
import { Surface, SubtlePanel } from "@/components/ui/surface";
import { Kicker, H1, H2, PLead, PMuted } from "@/components/ui/typography";

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-xl border border-line bg-fg px-6 py-3 text-sm text-bg shadow-soft hover:opacity-90 transition"
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
            <H1>Digitale Autorität für Organisationen mit hohem Anspruch.</H1>
            <PLead>
              Paularyo entwickelt präzise Positionierungs- und Conversion-Systeme für ausgewählte Partner im
              deutschsprachigen Raum.
            </PLead>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <PrimaryButton href="/apply">Zusammenarbeit anfragen</PrimaryButton>
              <TextLink href="/authority-systems">Vorgehen ansehen</TextLink>
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
                  <span className="text-fg">Projekte</span> beginnen ab{" "}
                  <span className="text-fg">15.000 €</span>.
                </PMuted>
                <PMuted>
                  <span className="text-fg">Begleitung</span> ab{" "}
                  <span className="text-fg">1.500 €/Monat</span>.
                </PMuted>
                <PMuted>Selektiv. Präzise. Ruhig umgesetzt — ohne Lautstärke.</PMuted>
              </div>
            </Surface>
          </div>
        </div>

        <div className="mt-16">
          <Divider />
        </div>
      </Section>

      {/* PRINCIPLES */}
      <Section>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Kicker>Prinzipien</Kicker>
            <H2 className="mt-4">Controlled Luxury.</H2>
            <PMuted className="mt-5">
              Wir gestalten digitale Wahrnehmung so, dass Qualität sichtbar wird — durch Klarheit, Struktur und eine
              ruhige Premium-Experience.
            </PMuted>
          </div>

          <div className="md:col-span-7">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  t: "Positionierung",
                  d: "Botschaft, Angebot, Tonalität — präzise, verständlich, premium.",
                },
                {
                  t: "Präsenz",
                  d: "Design & Experience, die Vertrauen aufbaut, ohne Effekte zu jagen.",
                },
                {
                  t: "Conversion",
                  d: "Anfrage- und Terminlogik, die qualifizierte Nachfrage strukturiert erhöht.",
                },
              ].map((x) => (
                <SubtlePanel key={x.t} className="p-6">
                  <p className="text-xs tracking-[0.26em] uppercase text-muted">{x.t}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{x.d}</p>
                </SubtlePanel>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <Divider />
        </div>
      </Section>

      {/* PROCESS */}
      <Section>
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <Kicker>Vorgehen</Kicker>
            <H2 className="mt-4">Diskret. Strukturiert. Messbar.</H2>
            <PMuted className="mt-5">
              Kein Agentur-Feuerwerk. Wir arbeiten wie ein strategischer Partner: sauberer Rahmen, klare Entscheidungen,
              präzise Umsetzung.
            </PMuted>
          </div>

          <div className="md:col-span-7">
            <Surface className="p-6">
              <ol className="divide-y divide-line">
                {[
                  ["Screening", "15 Minuten zur Passung, Zielbild und Rahmenbedingungen."],
                  ["Strategy", "Positionierung, Seitenarchitektur, Prioritäten & Inhalte."],
                  ["Build", "Design & Umsetzung mit ruhiger Premium-Experience."],
                  ["Authority", "Iterationen, Landingpages, Optimierung, Tracking."],
                ].map(([t, d], idx) => (
                  <li key={t} className="py-5 first:pt-0 last:pb-0">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-8 text-xs text-muted">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <p className="text-sm text-fg">{t}</p>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </Surface>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <PrimaryButton href="/apply">Zusammenarbeit anfragen</PrimaryButton>
              <TextLink href="/authority-systems">Authority Systems im Detail</TextLink>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <Divider />
        </div>
      </Section>

      {/* SELECTED WORK */}
      <Section>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Kicker>Selected Work</Kicker>
            <H2 className="mt-4">Ausgewählte Ausführung.</H2>
            <PMuted className="mt-5 max-w-2xl">
              Projekt-Details teilen wir diskret im Rahmen einer Zusammenarbeit. Hier zeigen wir exemplarisch Struktur,
              Tonalität und Ausführung.
            </PMuted>
          </div>
          <TextLink href="/work">ansehen</TextLink>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            ["Authority Website", "Ruhige Premium-Struktur mit klarer Botschaft und Führung."],
            ["Landingpage Framework", "Service-Seiten mit Conversion-Logik und klarer Navigation."],
            ["Tracking & System", "Messbarkeit, Events, klare Signale statt Vermutungen."],
          ].map(([t, d]) => (
            <Surface key={t} className="p-6">
              <div className="h-28 rounded-xl border border-line bg-white/5" />
              <p className="mt-5 text-sm text-fg">{t}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
            </Surface>
          ))}
        </div>

        <div className="mt-16">
          <Divider />
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
                Wenn Sie eine digitale Präsenz auf Premium-Niveau aufbauen möchten, prüfen wir gern die Passung —
                ruhig, diskret, strukturiert.
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