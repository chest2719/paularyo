import { clsx } from "clsx";

export function Surface({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        // minimal surface: subtle border + subtle fill + soft shadow
        "rounded-2xl border border-line/70 bg-white/2 shadow-[0_18px_60px_rgba(0,0,0,0.45)]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function SubtlePanel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        // ultra-minimal panel: no heavy shadow, very slight fill
        "rounded-2xl border border-line/60 bg-white/1.5",
        className
      )}
    >
      {children}
    </div>
  );
}