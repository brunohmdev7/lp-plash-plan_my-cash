import logoUrl from "@/assets/images/logo-plash.png";

interface LogoProps {
  /** Altura da logo em px. A largura é proporcional automaticamente. */
  height?: number;
}

export function Logo({ height = 48 }: LogoProps) {
  return (
    <img
      src={logoUrl}
      alt="Plash — plan my cash"
      height={height}
      className="logo-img"
      style={{ height }}
    />
  );
}
