import { clsx } from "clsx";

export function Kicker({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={clsx("text-xs tracking-[0.32em] uppercase text-muted", className)}>
      {children}
    </p>
  );
}

export function H1({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h1
      className={clsx(
        "mt-6 font-serif font-light tracking-tighter2 leading-[1.02] text-5xl md:text-6xl text-fg",
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
        "font-serif font-light tracking-tighter2 leading-tight text-3xl md:text-4xl text-fg",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function PLead({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={clsx("mt-8 text-lg leading-relaxed text-muted", className)}>
      {children}
    </p>
  );
}

export function PMuted({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={clsx("text-sm leading-relaxed text-muted", className)}>
      {children}
    </p>
  );
}