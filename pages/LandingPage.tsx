import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Logo } from "@/components/Logo";
import { PlashMark } from "@/components/PlashMark";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import iconGraph from "@/assets/icons/icon-graph.png";
import iconTarget from "@/assets/icons/icon-target.png";
import iconBell from "@/assets/icons/icon-bell.png";
import iconSecurity from "@/assets/icons/icon-security.png";

/** Helper para definir o atraso escalonado da animação de revelação. */
const revealDelay = (ms: number): CSSProperties =>
  ({ "--reveal-delay": `${ms}ms` } as CSSProperties);

/** Aplica o ícone como máscara, permitindo colori-lo via CSS por tema. */
const iconMask = (url: string): CSSProperties =>
  ({ WebkitMaskImage: `url(${url})`, maskImage: `url(${url})` } as CSSProperties);

const features = [
  {
    icon: iconGraph,
    title: "Visão completa do seu dinheiro",
    text: "Conecte contas e cartões e acompanhe entradas, saídas e saldo em tempo real, num painel claro e organizado.",
  },
  {
    icon: iconTarget,
    title: "Metas que você realmente alcança",
    text: "Defina objetivos — reserva de emergência, viagem, investimento — e veja o progresso evoluir mês a mês.",
  },
  {
    icon: iconBell,
    title: "Alertas inteligentes",
    text: "Receba avisos de contas a vencer, gastos fora do padrão e limites de orçamento antes de estourar.",
  },
  {
    icon: iconSecurity,
    title: "Segurança em primeiro lugar",
    text: "Seus dados são protegidos com criptografia de ponta a ponta. Você no controle, sempre.",
  },
];

const steps = [
  { n: "01", title: "Crie sua conta", text: "Cadastro gratuito em menos de 2 minutos." },
  { n: "02", title: "Registre suas finanças", text: "Importe ou adicione receitas, despesas e metas." },
  { n: "03", title: "Planeje e prospere", text: "Acompanhe relatórios e tome decisões com confiança." },
];

export function LandingPage() {
  useScrollReveal();

  return (
    <div className="page">
      <div className="bg-orbs" aria-hidden="true">
        <span className="orb orb--1" />
        <span className="orb orb--2" />
      </div>

      <Navbar />

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero__content">
            <h1 className="hero__title">
              Organize, planeje e faça seu dinheiro <span className="grad-text">crescer</span>.
            </h1>
            <p className="hero__lead">
              <strong>Plash</strong> é o aplicativo de gerenciamento
              financeiro pessoal que reúne suas contas, gastos, metas e investimentos
              em um só lugar — simples, visual e no seu bolso.
            </p>
            <div className="hero__cta">
              <Link to="/auth/login" className="btn btn--primary btn--lg">
                Entrar na plataforma
              </Link>
              <a href="#recursos" className="btn btn--ghost btn--lg">
                Conhecer recursos
              </a>
            </div>
            <ul className="hero__proof">
              <li><strong>+120 mil</strong> usuários organizando o orçamento</li>
              <li><strong>4,9★</strong> de avaliação média</li>
            </ul>
          </div>

          <div className="hero__art" aria-hidden="true">
            <div className="phone">
              <div className="phone__notch" />
              <div className="phone__screen">
                <div className="mini-card mini-card--balance">
                  <span className="mini-card__label">Saldo do mês</span>
                  <span className="mini-card__value">R$ 8.420,00</span>
                  <span className="mini-card__trend">▲ 12% vs. mês anterior</span>
                </div>
                <div className="mini-bars">
                  <span style={{ height: "40%" }} />
                  <span style={{ height: "68%" }} />
                  <span style={{ height: "52%" }} />
                  <span style={{ height: "88%" }} />
                  <span style={{ height: "60%" }} />
                  <span style={{ height: "95%" }} />
                </div>
                <div className="mini-goal">
                  <div className="mini-goal__head">
                    <span>Meta: Viagem ✈️</span>
                    <span>72%</span>
                  </div>
                  <div className="mini-goal__bar"><i style={{ width: "72%" }} /></div>
                </div>
              </div>
            </div>
            <div className="float-chip float-chip--a"><PlashMark size={22} /> + R$ 350 economizados</div>
            <div className="float-chip float-chip--b">🎯 Meta concluída</div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="recursos" className="section">
          <div className="section__head" data-reveal>
            <h2>Tudo o que sua vida financeira precisa</h2>
            <p>Ferramentas pensadas para quem quer clareza e controle, sem planilhas complicadas.</p>
          </div>
          <div className="features">
            {features.map((f, i) => (
              <article key={f.title} className="feature-card" data-reveal style={revealDelay(i * 90)}>
                <span className="feature-card__icon">
                  <i className="icon-mask" style={iconMask(f.icon)} aria-hidden="true" />
                </span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="como-funciona" className="section">
          <div className="section__head" data-reveal>
            <h2>Comece em 3 passos</h2>
            <p>Do cadastro ao controle total das suas finanças.</p>
          </div>
          <div className="steps">
            {steps.map((s, i) => (
              <div key={s.n} className="step" data-reveal style={revealDelay(i * 120)}>
                <span className="step__n">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING / CTA */}
        <section id="precos" className="section">
          <div className="cta-banner" data-reveal>
            <Logo height={88} />
            <h2>Pronto para planejar o seu dinheiro?</h2>
            <p>Crie sua conta gratuita e dê o primeiro passo rumo à tranquilidade financeira.</p>
            <Link to="/auth/login" className="btn btn--primary btn--lg">
              Entrar na plataforma
            </Link>
            <span className="cta-banner__note">Grátis para começar • Sem cartão de crédito</span>
          </div>
        </section>
      </main>

      <footer className="footer">
        <Logo height={64} />
        <p>Plash — Plan My Cash · Gerenciamento financeiro pessoal © {new Date().getFullYear()}</p>
        <div className="footer__links">
          <Link to="/auth/login">Entrar</Link>
          <a href="#recursos">Recursos</a>
          <a href="#precos">Preços</a>
        </div>
      </footer>
    </div>
  );
}
