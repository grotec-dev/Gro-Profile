import { useState } from "react";
import { Label } from "./shared";

const servicesList = [
  {
    id: "product-consulting",
    title: "Technical Product Consulting",
    description: "Before writing a single line of code, we consult on product architecture. We help you define user workflows, map feature requirements, and build a technical blueprint of exactly what needs to be constructed to solve your business problem.",
    techLabel: "Focus Areas",
    tags: ["Product Architecture", "Requirements Engineering", "Workflow Mapping"],
    shapeClass: "rounded-tl-[80px] border-zinc-80px",
    layoutClass: "ecosystem-card-discord md:col-span-2"
  },
  {
    id: "brand-design",
    title: "Premium Brand Design",
    description: "We craft high-end, minimalist visual identities that command authority. From typography system design to interface design tokens, we build digital assets that position your business as an industry leader.",
    techLabel: "Design Focus",
    tags: ["Brand Identity", "UI/UX Systems", "Design Tokens"],
    shapeClass: "rounded-tr-[60px] border-zinc-80px",
    layoutClass: "ecosystem-card-telegram"
  },
  {
    id: "application-engineering",
    title: "Full-Stack Application Engineering",
    description: "We design and engineer fast web platforms and native mobile apps. We write clean, optimized code that loads instantly and grows seamlessly with your business numbers.",
    techLabel: "Tech Stack Tags",
    tags: ["Next.js", "React Native", "FastAPI", "TypeScript"],
    shapeClass: "rounded-none border-zinc-800",
    layoutClass: "ecosystem-card-discord md:col-span-2"
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Penetration Testing",
    description: "Led by our dedicated security team, we protect your apps from hackers, find system weak points before they are exploited, and ensure your data remains completely locked down.",
    techLabel: "Security Focus",
    tags: ["Penetration Testing", "Network Security", "Threat Auditing"],
    shapeClass: "rounded-br-[100px] border-zinc-800",
    layoutClass: "ecosystem-card-telegram"
  },
  {
    id: "business-strategy",
    title: "Go-To-Market Business Strategy",
    description: "A great application is useless without users. We design data-driven marketing, customer acquisition funnels, and business launch strategies to ensure your technical asset successfully captures market share.",
    techLabel: "Growth Focus",
    tags: ["Growth Marketing", "Acquisition Funnels", "Launch Strategy"],
    shapeClass: "rounded-bl-[60px] border-zinc-800",
    layoutClass: "ecosystem-card-whatsapp"
  },
  {
    id: "infrastructure",
    title: "Infrastructure & Cloud DevOps",
    description: "We set up automated deployment pipelines, maintain cloud servers, and manage secure database architectures to eliminate application downtime.",
    techLabel: "Tools Stack",
    tags: ["Linux", "Docker", "Cloud Deployment", "CI/CD Pipelines"],
    shapeClass: "rounded-br-[40px] border-zinc-800",
    layoutClass: "ecosystem-card-discord md:col-span-2"
  }
];

const ServiceBentoCard = ({ s, onHover, isHovered }) => {
  return (
    <article
      onMouseEnter={onHover}
      onMouseLeave={() => onHover(null)}
      className={`ecosystem-card ${s.shapeClass} ${s.layoutClass}`}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "3rem 2.25rem",
        background: "#121212",
        border: `1px solid ${isHovered ? "#ffffff" : "#27272a"}`,
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        transform: isHovered ? "scale(1.01) translateY(-2px)" : "scale(1) translateY(0)",
        boxShadow: isHovered ? "0 10px 30px rgba(0, 0, 0, 0.7)" : "none",
        cursor: "default",
        minHeight: "22rem"
      }}
    >
      <div>
        <h3 className="tracking-wide" style={{
          fontFamily: "'Space Grotesk',sans-serif",
          fontSize: "1.5rem",
          fontWeight: 700,
          color: "#ffffff",
          marginBottom: "1.25rem"
        }}>
          {s.title}
        </h3>
        <p style={{
          fontSize: "0.9375rem",
          color: "#a3a3a3",
          lineHeight: 1.7,
          fontFamily: "'Inter',sans-serif",
          margin: "0 0 2rem 0"
        }}>
          {s.description}
        </p>
      </div>

      <div>
        <div style={{
          fontSize: "0.5625rem",
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#6b5ce7",
          fontFamily: "'Inter',sans-serif",
          marginBottom: "0.625rem"
        }}>
          {s.techLabel}
        </div>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.625rem",
          opacity: isHovered ? 1 : 0.55,
          transition: "opacity 0.3s ease"
        }}>
          {s.tags.map((tag, idx) => (
            <span key={idx} style={{
              fontSize: "0.75rem",
              fontWeight: 500,
              fontFamily: "'Inter',sans-serif",
              color: "#ffffff",
              background: "#0b0b0b",
              padding: "0.25rem 0.625rem",
              border: "1px solid #27272a"
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default function ServicesPage({ t, setPage, openContact }) {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredBtn, setHoveredBtn] = useState(false);

  return (
    <main id="main-content" style={{ background: "#0b0b0b", color: "#ffffff", minHeight: "100vh", marginBottom: 0, paddingBottom: 0 }}>
      
      {/* SECTION 1: Intro Editorial Header */}
      <section id="services-hero" style={{ padding: "clamp(8rem, 12vw, 10rem) 0 5rem 0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 clamp(1.25rem, 4vw, 2.5rem)" }}>
          <div style={{ maxWidth: "52rem" }}>
            <Label t={t}>Capabilities</Label>
            <h1 className="tracking-wide" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", fontWeight: 900, lineHeight: 0.96, color: "#ffffff", textTransform: "uppercase", margin: "2rem 0" }}>
              Engineered engines for digital growth.
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.125rem", color: "#a3a3a3", lineHeight: 1.8, margin: 0 }}>
              We combine deep technical software engineering with premium brand design, product architecture, and go-to-market business strategy. We handle your system from initial concept to market scale.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Capabilities Showcase Bento Grid */}
      <section id="grid-catalog" style={{ padding: "5rem 0", borderTop: "1px solid #222222" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 clamp(1.25rem, 4vw, 2.5rem)" }}>
          <div className="ecosystem-grid" style={{ gap: "2rem" }}>
            {servicesList.map((s) => (
              <ServiceBentoCard
                key={s.id}
                s={s}
                onHover={(id) => setHoveredCard(id ? s.id : null)}
                isHovered={hoveredCard === s.id}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Call to Action Conversion Zone */}
      <section id="services-cta" style={{ padding: "4rem 0 4.5rem", background: "#090909", borderTop: "1px solid #222222", marginBottom: 0 }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 clamp(1.25rem, 4vw, 2.5rem)", textAlign: "center" }}>
          <div style={{ maxWidth: "45rem", margin: "0 auto" }}>
            <span style={{ fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6b5ce7", fontFamily: "'Inter',sans-serif" }}>CTA</span>
            <h2 className="tracking-wide" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem, 3.5vw, 2.5rem)", fontWeight: 900, color: "#ffffff", marginTop: "0.5rem", marginBottom: "1.5rem", textTransform: "uppercase" }}>
              Backed By Our Developer Network.
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.125rem", color: "#a3a3a3", lineHeight: 1.8, marginBottom: "3rem" }}>
              Because we run an active community ecosystem, we have a pipeline of skilled specialists ready to jump on your build. We can scale our engineering horsepower up or down based on your project requirements.
            </p>
            <button
              onClick={() => openContact(true)}
              onMouseEnter={() => setHoveredBtn(true)}
              onMouseLeave={() => setHoveredBtn(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5625rem",
                fontFamily: "'Inter',sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                borderRadius: 0,
                padding: "1.125rem 2.5rem",
                border: "none",
                cursor: "pointer",
                background: "#ffffff",
                color: "#000000",
                transform: hoveredBtn ? "scale(1.03) translateY(-1px)" : "scale(1) translateY(0)",
                boxShadow: hoveredBtn ? "0 8px 24px rgba(255,255,255,0.15)" : "none",
                transition: "all 0.25s ease"
              }}
            >
              Let's Build Together
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
