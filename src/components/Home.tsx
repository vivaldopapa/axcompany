"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "5513996286223";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site da AXCompany e gostaria de saber mais sobre as soluções de tráfego pago, branding e copywriting. Poderia me ajudar?"
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const pillars = [
  {
    number: "01",
    title: "Tração & Escala",
    accent: "#A855F7",
    accentBg: "rgba(168,85,247,0.12)",
    accentBorder: "rgba(168,85,247,0.3)",
    services: [
      {
        icon: (
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="11" r="4" stroke="#A855F7" strokeWidth="1.5"/>
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#A855F7" strokeWidth="1.5"/>
            <path d="M9 9h1.5M13.5 9H15M12 7.5v1.5M12 10.5V12" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
        title: "Gestão de Google Business / Google Ads",
        desc: "Posicionamento estratégico e anúncios para o seu restaurante aparecer no topo do mapa e das buscas exatamente quando o cliente estiver com fome.",
      },
      {
        icon: (
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="#A855F7" strokeWidth="1.5"/>
            <circle cx="12" cy="12" r="4" stroke="#38BDF8" strokeWidth="1.5"/>
            <circle cx="17.5" cy="6.5" r="1.2" fill="#A855F7"/>
            <path d="M8 12h8" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
        title: "Tráfego Meta",
        desc: "Campanhas altamente segmentadas no Instagram e Facebook para atrair novos clientes diariamente e reter quem já comprou.",
      },
    ],
  },
  {
    number: "02",
    title: "Estrutura & Conversão",
    accent: "#38BDF8",
    accentBg: "rgba(56,189,248,0.12)",
    accentBorder: "rgba(56,189,248,0.3)",
    services: [
      {
        icon: (
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
            <rect x="2" y="3" width="20" height="16" rx="2" stroke="#38BDF8" strokeWidth="1.5"/>
            <path d="M2 7h20" stroke="#A855F7" strokeWidth="1.5"/>
            <circle cx="5" cy="5" r="0.8" fill="#A855F7"/>
            <circle cx="8" cy="5" r="0.8" fill="#38BDF8"/>
            <path d="M7 12h10M7 15h6" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M2 19l4 2" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
        title: "Desenvolvimento de Site",
        desc: "Criação de páginas rápidas, modernas e focadas em conversão, prontas para receber os clientes dos anúncios.",
      },
      {
        icon: (
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
            <rect x="4" y="2" width="16" height="20" rx="2" stroke="#38BDF8" strokeWidth="1.5"/>
            <path d="M8 7h8M8 11h8M8 15h5" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M16 16l2 2 3-3" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        title: "Aprimoramento de Cardápio Digital",
        desc: "Reformulação completa do cardápio para delivery e iFood — visual mais moderno, produtos estratégicos  e textos otimizados para mais conversões.",
      },
      {
        icon: (
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
            <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 5l3 3" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
        title: "Copywriting",
        desc: "Escrita persuasiva para anúncios, roteiros e páginas, conectando o desejo do cliente à oferta do seu restaurante, hamburgueria ou pizzaria.",
      },
    ],
  },
  {
    number: "03",
    title: "Inteligência & Direcionamento",
    accent: "#22C55E",
    accentBg: "rgba(34,197,94,0.12)",
    accentBorder: "rgba(34,197,94,0.3)",
    services: [
      {
        icon: (
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="2" stroke="#22C55E" strokeWidth="1.5"/>
            <circle cx="5" cy="19" r="2" stroke="#22C55E" strokeWidth="1.5"/>
            <circle cx="19" cy="19" r="2" stroke="#22C55E" strokeWidth="1.5"/>
            <path d="M12 7v4M12 11l-5.5 6M12 11l5.5 6" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
        title: "Gestão de Redes Sociais",
        desc: "Criação de conteúdo estratégico e posicionamento visual para gerar desejo constante pelos seus pratos e construir autoridade de marca.",
      },
      {
        icon: (
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
            <path d="M3 20h18M5 20V14M9 20V10M13 20V6M17 20V3" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="17" cy="3" r="1.5" fill="#A855F7"/>
            <path d="M5 14l4-4 4 2 4-5" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        title: "Planejamento & Análises",
        desc: "Análise profunda de métricas de mercado, CRM de clientes e alinhamento de campanhas promocionais focadas na saúde financeira do negócio.",
      },
      {
        icon: (
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
            <path d="M12 2l2.09 6.26L20 9.27l-4.91 4.02L16.18 20 12 16.77 7.82 20l1.09-6.71L4 9.27l5.91-1.01L12 2z" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 7v5l3 2" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
        title: "Mentoria Ultra AX",
        desc: "O treinamento definitivo focado no gestão lucrativa das redes sociais, ifood, configurações estratégicas do google business, anúncios pagos, gestão de equipe e delivery.",
      },
    ],
  },
];

const results = [
  { value: "3x", label: "Retorno médio sobre investimento" },
  { value: "520+", label: "Clientes atendidos" },
  { value: "98%", label: "Taxa de satisfação" },
  { value: "3M+", label: "Em receita gerada" },
];

const steps = [
  { n: "01", title: "Diagnóstico", desc: "Analisamos seu negócio, concorrentes e oportunidades para construir uma estratégia personalizada." },
  { n: "02", title: "Estratégia", desc: "Desenvolvemos um plano de ação com metas claras, canais definidos e cronograma de execução." },
  { n: "03", title: "Execução", desc: "Implementamos as campanhas e conteúdos com monitoramento em tempo real e otimização contínua." },
  { n: "04", title: "Escala", desc: "Com os dados em mãos, escalamos o que funciona e eliminamos o que não gera resultado." },
];

const faqs = [
  {
    q: "Quanto tempo para ver resultados?",
    a: "Em tráfego pago, os primeiros resultados aparecem em 7 a 15 dias. Para branding e copywriting, o impacto cresce progressivamente ao longo de 30 a 90 dias.",
  },
  {
    q: "Vocês atendem qualquer segmento de mercado?",
    a: "Sim. Temos experiência em e-commerce, serviços, infoprodutos, saúde, educação e muito mais. Nossa abordagem é adaptada ao seu nicho específico.",
  },
  {
    q: "Qual o investimento mínimo em tráfego?",
    a: "Trabalhamos com clientes a partir de R$1.500/mês em verba de mídia. O ideal é alinhar o orçamento com seus objetivos durante a consultoria inicial.",
  },
  {
    q: "Vocês oferecem relatórios de desempenho?",
    a: "Sim. Entregamos relatórios detalhados com métricas, análises e recomendações — semanais ou mensais, conforme o plano contratado.",
  },
];

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen grid-bg" style={{ background: "#0A0A0F" }}>
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(10,10,15,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(124,58,237,0.2)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Image src="/logo.png" alt="AXCompany" width={120} height={48} className="object-contain" />
          <div className="hidden md:flex items-center gap-8">
            {["Serviços", "Resultados", "Como funciona", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
              Falar com especialista
            </a>
          </div>
          {/* Mobile menu */}
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              {menuOpen
                ? <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                : <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-4" style={{ background: "rgba(10,10,15,0.98)" }}>
            {["Serviços", "Resultados", "Como funciona", "FAQ"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-gray-300" onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm text-center">
              Falar com especialista
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #7C3AED, transparent)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #2563EB, transparent)" }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-32 md:pt-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-8"
            style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", color: "#A855F7" }}>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
            Estratégias que geram crescimento real
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="text-white">Acelere o seu </span>
            <span className="gradient-text">crescimento</span>
            <br />
            <span className="text-white">com </span>
            <span className="gradient-text-blue">inteligência digital</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Soluções de tráfego pago, branding estratégico e copywriting
            desenhados para transformar sua presença digital em resultado concreto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-base">
              Quero crescer agora
            </a>
            <a href="#serviços" className="btn-outline text-base">
              Conhecer os serviços
            </a>
          </div>

          <div className="mt-20 animate-float">
            <svg className="mx-auto" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path d="M12 5v14M5 12l7 7 7-7" stroke="rgba(168,85,247,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="resultados" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {results.map((r) => (
              <div key={r.label} className="glass-card p-6 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">{r.value}</div>
                <div className="text-sm text-gray-400">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="serviços" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-medium mb-3" style={{ color: "#A855F7" }}>O QUE FAZEMOS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Serviços que <span className="gradient-text">entregam resultado</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Cada solução é desenvolvida com estratégia, dados e criatividade para maximizar o retorno sobre o seu investimento.
            </p>
          </div>
          <div className="flex flex-col gap-16">
            {pillars.map((pillar) => (
              <div key={pillar.number}>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-5xl font-black" style={{ color: `${pillar.accent}22` }}>{pillar.number}</span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: pillar.accent }}>Pilar {pillar.number}</p>
                    <h3 className="text-2xl font-bold text-white">{pillar.title}</h3>
                  </div>
                  <div className="flex-1 h-px ml-4" style={{ background: `linear-gradient(90deg, ${pillar.accentBorder}, transparent)` }} />
                </div>
                <div className={`grid gap-6 ${pillar.services.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
                  {pillar.services.map((s) => (
                    <div key={s.title} className="glass-card p-8 group cursor-default transition-all duration-300">
                      <div className="mb-6 p-3 inline-block rounded-xl" style={{ background: pillar.accentBg, border: `1px solid ${pillar.accentBorder}` }}>
                        {s.icon}
                      </div>
                      <h4 className="text-lg font-bold text-white mb-3">{s.title}</h4>
                      <p className="text-gray-400 leading-relaxed text-sm">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="como-funciona" className="py-24" style={{ background: "rgba(124,58,237,0.03)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-medium mb-3" style={{ color: "#38BDF8" }}>PROCESSO</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Como <span className="gradient-text-blue">trabalhamos</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Do diagnóstico à escala, cada etapa é pensada para gerar o máximo de resultados com o menor desperdício possível.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.n} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px z-0"
                    style={{ background: "linear-gradient(90deg, rgba(124,58,237,0.4), transparent)" }} />
                )}
                <div className="glass-card p-6 relative z-10">
                  <div className="text-4xl font-black mb-4" style={{ color: "rgba(124,58,237,0.3)" }}>{step.n}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-2xl p-12 text-center relative overflow-hidden animate-pulse-glow"
            style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(37,99,235,0.2))", border: "1px solid rgba(124,58,237,0.3)" }}>
            <div className="absolute inset-0 opacity-10"
              style={{ background: "linear-gradient(135deg, #7C3AED, #2563EB)", filter: "blur(60px)" }} />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Pronto para <span className="gradient-text">escalar</span>?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
                Agende uma consultoria gratuita e descubra como podemos transformar a sua estratégia digital em crescimento real.
              </p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-base inline-block">
                Agendar consultoria gratuita
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24" style={{ background: "rgba(37,99,235,0.03)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-medium mb-3" style={{ color: "#A855F7" }}>DÚVIDAS</p>
            <h2 className="text-4xl font-bold text-white">Perguntas <span className="gradient-text">frequentes</span></h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-white pr-4">{faq.q}</span>
                  <svg
                    className="flex-shrink-0 transition-transform duration-300"
                    style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)", color: "#A855F7" }}
                    width="20" height="20" fill="none" viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-gray-400 leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t" style={{ borderColor: "rgba(124,58,237,0.2)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Image src="/logo.png" alt="AXCompany" width={100} height={40} className="object-contain" />
            <p className="text-gray-500 text-sm text-center">
              © 2024 AXCompany. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/axcompanny"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
                style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)" }}
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="#A855F7" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="4" stroke="#38BDF8" strokeWidth="1.5"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="#A855F7"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/gestaolucrativa.ads"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
                style={{ background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.2)" }}
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOATING CHAT */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {chatOpen && (
          <div
            className="rounded-2xl overflow-hidden shadow-2xl w-80"
            style={{ border: "1px solid rgba(37,211,102,0.3)", background: "#111" }}
          >
            {/* Chat header */}
            <div className="flex items-center gap-3 p-4" style={{ background: "#1a1a1a", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #7C3AED, #2563EB)" }}>
                <Image src="/logo.png" alt="AX" width={28} height={28} className="object-contain" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">AXCompany</p>
                <p className="text-xs flex items-center gap-1" style={{ color: "#25D366" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  Online agora
                </p>
              </div>
              <button className="ml-auto text-gray-400 hover:text-white" onClick={() => setChatOpen(false)}>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            {/* Chat message */}
            <div className="p-4" style={{ background: "#0e1117" }}>
              <div className="rounded-xl rounded-tl-none p-3 text-sm text-gray-200 leading-relaxed mb-4"
                style={{ background: "#1e2330", maxWidth: "90%" }}>
                <p className="font-medium text-white mb-1">Olá! 👋</p>
                <p className="text-gray-300 text-xs">
                  Sou da equipe <strong style={{ color: "#A855F7" }}>AXCompany</strong>. Estamos prontos para ajudar você a crescer digitalmente com estratégias de tráfego pago, branding e copywriting.
                </p>
                <p className="text-gray-300 text-xs mt-2">
                  Clique abaixo e fale com um especialista agora mesmo! 🚀
                </p>
                <p className="text-right text-gray-500 text-xs mt-1">agora</p>
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm text-white transition-all hover:brightness-110"
                style={{ background: "#25D366" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Iniciar conversa
              </a>
            </div>
          </div>
        )}

        {/* Toggle button */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110"
          style={{ background: "#25D366", boxShadow: "0 4px 24px rgba(37,211,102,0.4)" }}
          aria-label="Abrir WhatsApp"
        >
          {chatOpen ? (
            <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
