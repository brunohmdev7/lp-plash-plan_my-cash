interface PlashMarkProps {
  size?: number;
  className?: string;
}

/**
 * Símbolo da marca Plash: seta ascendente envolvendo o cifrão,
 * com a pilha de moedas — inspirado na logo principal.
 * As cores derivam de variáveis CSS, então o ícone se adapta
 * automaticamente aos modos claro e escuro.
 */
export function PlashMark({ size = 40, className }: PlashMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label="Símbolo Plash"
      className={className}
    >
      <defs>
        <linearGradient id="plash-grad" x1="8" y1="6" x2="56" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--brand-mint)" />
          <stop offset="0.55" stopColor="var(--brand-emerald)" />
          <stop offset="1" stopColor="var(--brand-forest)" />
        </linearGradient>
      </defs>

      {/* Seta ascendente que envolve o cifrão */}
      <path
        d="M14 40c-3-9 1-19 10-23 9-4 19 0 23 9"
        stroke="url(#plash-grad)"
        strokeWidth="6.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M40 17l9 1 1 9"
        stroke="url(#plash-grad)"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Cifrão */}
      <text
        x="31"
        y="33"
        textAnchor="middle"
        fontFamily="'Bricolage Grotesque', sans-serif"
        fontWeight="800"
        fontSize="22"
        fill="url(#plash-grad)"
      >
        $
      </text>

      {/* Pilha de moedas */}
      <g fill="url(#plash-grad)">
        <ellipse cx="28" cy="46" rx="13" ry="4" />
        <ellipse cx="28" cy="52" rx="13" ry="4" opacity="0.85" />
        <ellipse cx="28" cy="58" rx="13" ry="4" opacity="0.7" />
      </g>
    </svg>
  );
}
