import { clsx } from "clsx";

export function Kicker({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={clsx(
        "text-[11px] tracking-[0.34em] uppercase text-muted",
        className
      )}
    >
      {children}
    </p>
  );
}

export function H1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={clsx(
        // smaller + more controlled, no huge shout
        "mt-6 font-serif font-light tracking-tighter2 leading-[1.03] text-[40px] sm:text-5xl md:text-6xl text-fg",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function H2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={clsx(
        "font-serif font-light tracking-tighter2 leading-tight text-3xl md:text-[40px] text-fg",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function PLead({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={clsx(
        // slightly smaller, more elegant
        "mt-8 text-[17px] leading-[1.75] text-muted",
        className
      )}
    >
      {children}
    </p>
  );
}

export function PMuted({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={clsx(
        "text-sm leading-[1.75] text-muted",
        className
      )}
    >
      {children}
    </p>
  );
}