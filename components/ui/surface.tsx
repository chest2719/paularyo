import { clsx } from "clsx";

export function Surface({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={clsx("rounded-2xl border border-line bg-bg shadow-soft", className)}>
      {children}
    </div>
  );
}

export function SubtlePanel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={clsx("rounded-2xl border border-line bg-white/5", className)}>
      {children}
    </div>
  );
}