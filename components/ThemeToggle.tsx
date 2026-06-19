import { useTheme } from "@/contexts/ThemeContext";

/** Ícone de sol (modo claro) */
function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.2" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5" />
        <path d="M5.1 5.1l1.8 1.8M17.1 17.1l1.8 1.8M18.9 5.1l-1.8 1.8M6.9 17.1l-1.8 1.8" />
      </g>
    </svg>
  );
}

/** Ícone de lua (modo escuro) */
function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <path
        d="M20 14.2A8 8 0 0 1 9.8 4a8 8 0 1 0 10.2 10.2z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      title={isDark ? "Modo claro" : "Modo escuro"}
    >
      <span className="theme-toggle__icon" data-active={!isDark}>
        <SunIcon />
      </span>
      <span className="theme-toggle__icon" data-active={isDark}>
        <MoonIcon />
      </span>
    </button>
  );
}
