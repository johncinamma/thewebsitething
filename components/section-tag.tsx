export function SectionTag({
  code,
  label,
  className = '',
}: {
  code: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="font-mono-tac text-xs text-gold tracking-[0.3em]">{code}</span>
      <span className="h-px w-8 bg-gold/40" />
      <span className="font-mono-tac text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
    </div>
  );
}