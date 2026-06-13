export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="26" height="26" viewBox="0 0 22 22" aria-hidden="true">
        <rect width="22" height="22" rx="5" fill="#1E3A5F" />
        <path d="M5 6 L9.4 16 L11.2 16 L7 6 Z" fill="#0EA5E9" />
        <path d="M7 6 L11.2 16 L13 16 L17 6 L14.6 6 L12.1 12.4 L9.4 6 Z" fill="#FFFFFF" />
      </svg>
      <span className="font-serif text-[22px] font-bold tracking-tight text-navy">Vula</span>
    </span>
  );
}
