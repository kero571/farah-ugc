export function Eyebrow({ children, center = false }) {
  return (
    <p className={`mb-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[.16em] text-crimson ${center ? "justify-center" : ""}`}>
      <span className="h-0.5 w-7 bg-coral" aria-hidden="true" />
      {children}
      {center && <span className="h-0.5 w-7 bg-coral" aria-hidden="true" />}
    </p>
  );
}

export default function SectionHeading({ eyebrow, children, id, center = false, className = "" }) {
  return (
    <div className={`mb-9 lg:mb-12 ${center ? "text-center" : ""} ${className}`}>
      <Eyebrow center={center}>{eyebrow}</Eyebrow>
      <h2 id={id} className={`h2 ${center ? "mx-auto max-w-3xl" : "max-w-3xl"}`}>{children}</h2>
    </div>
  );
}

export function Em({ children }) {
  return <em className="text-coral">{children}</em>;
}
