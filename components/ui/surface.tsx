import { clsx } from "clsx";

export function Surface({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-[rgb(var(--line))] bg-[rgb(var(--bg))] shadow-[0_10px_30px_rgba(0,0,0,0.06)]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function SubtlePanel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={clsx("rounded-2xl border border-[rgb(var(--line))] bg-[rgba(0,0,0,0.015)]", className)}>
      {children}
    </div>
  );
}