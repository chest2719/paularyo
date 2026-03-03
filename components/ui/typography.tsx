import { clsx } from "clsx";

export function Kicker({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={clsx("text-xs tracking-[0.28em] uppercase text-[rgb(var(--muted))]", className)}>
      {children}
    </p>
  );
}

export function H1({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h1
      className={clsx(
        "mt-6 font-light tracking-[-0.035em] leading-[1.05] text-5xl md:text-6xl text-[rgb(var(--fg))]",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={clsx(
        "font-light tracking-[-0.03em] leading-tight text-3xl md:text-4xl text-[rgb(var(--fg))]",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function PLead({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={clsx("mt-8 text-lg leading-relaxed text-[rgb(var(--muted))]", className)}>
      {children}
    </p>
  );
}

export function PMuted({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={clsx("text-sm leading-relaxed text-[rgb(var(--muted))]", className)}>
      {children}
    </p>
  );
}