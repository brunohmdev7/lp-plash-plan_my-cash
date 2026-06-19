import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="nav">
      <Link to="/" className="nav__brand" aria-label="Plash — início">
        <Logo height={50} />
      </Link>

      <nav className="nav__links" aria-label="Navegação principal">
        <a href="#recursos">Recursos</a>
        <a href="#como-funciona">Como funciona</a>
        <a href="#precos">Preços</a>
      </nav>

      <div className="nav__actions">
        <ThemeToggle />
        <Link to="/auth/login" className="btn btn--primary nav__login">
          Entrar na plataforma
        </Link>
      </div>
    </header>
  );
}
