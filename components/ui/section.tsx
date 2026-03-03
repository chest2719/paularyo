import { clsx } from "clsx";

export function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  return <section className={clsx("py-16 md:py-24", className)}>{children}</section>;
}

export function Divider({ className }: { className?: string }) {
  return <div className={clsx("h-px w-full bg-[rgb(var(--line))]", className)} />;
}