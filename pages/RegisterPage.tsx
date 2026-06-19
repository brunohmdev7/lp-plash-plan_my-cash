import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <path
        d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <path
        d="M9.9 5.2A9.9 9.9 0 0 1 12 5c6.4 0 10 7 10 7a16.8 16.8 0 0 1-3.2 4M6.6 6.6A16.7 16.7 0 0 0 2 12s3.6 7 10 7a9.8 9.8 0 0 0 4.4-1M3 3l18 18M9.9 9.9a3 3 0 0 0 4.2 4.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="auth">
      <div className="bg-orbs" aria-hidden="true">
        <span className="orb orb--1" />
        <span className="orb orb--2" />
      </div>

      <div className="auth__top">
        <Link to="/" className="auth__back" aria-label="Voltar ao início">
          <Logo height={46} />
        </Link>
        <ThemeToggle />
      </div>

      <main className="auth__card">
        <h1>Crie sua conta</h1>
        <p className="auth__sub">
          Comece a planejar seu dinheiro com o <strong>Plash</strong>, é grátis.
        </p>

        {submitted ? (
          <div className="auth__notice">
            Cadastro simulado com sucesso! Conecte aqui a sua API de cadastro.
          </div>
        ) : null}

        <form className="auth__form" onSubmit={handleSubmit}>
          <label className="field">
            <span>Nome completo</span>
            <input type="text" name="name" placeholder="Seu nome" required />
          </label>
          <label className="field">
            <span>E-mail</span>
            <input type="email" name="email" placeholder="voce@email.com" required />
          </label>
          <label className="field">
            <span>Senha</span>
            <div className="field__password">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                minLength={8}
                required
              />
              <button
                type="button"
                className="field__toggle"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                title={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
          </label>

          <label className="checkbox">
            <input type="checkbox" name="terms" required /> Aceito os termos de uso e a
            política de privacidade
          </label>

          <button type="submit" className="btn btn--primary btn--lg btn--block">
            Criar conta gratuita
          </button>
        </form>

        <p className="auth__foot">
          Já tem conta? <Link to="/auth/login" className="auth__link">Entrar</Link>
        </p>
      </main>
    </div>
  );
}
