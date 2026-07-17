import { useState } from "react";
import { Label } from "./shared";

const AxiomMockup = ({ isHovered, t }) => (
  <div style={{
    width: "100%",
    height: "100%",
    background: t.bg,
    display: "flex",
    flexDirection: "column",
    padding: "1.25rem",
    position: "relative",
    overflow: "hidden",
    opacity: isHovered ? 1 : 0.65,
    filter: isHovered ? "saturate(1) contrast(1.1)" : "saturate(0.5) contrast(0.9)",
    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
  }}>
    <div style={{ position: "absolute", inset: 0, opacity: 0.06, backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "14px 14px" }} />
    
    {/* Console Header */}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${t.border}`, paddingBottom: "0.625rem", marginBottom: "1rem", zIndex: 2 }}>
      <div style={{ display: "flex", gap: "6px" }}>
        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ef4444" }} />
        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#eab308" }} />
        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e" }} />
      </div>
      <div style={{ fontSize: "0.625rem", fontFamily: "monospace", color: t.textSub }}>0G-GALILEO-TESTNET // STATUS: ACTIVE</div>
    </div>

    {/* Metric Graphs */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "0.75rem", flex: 1, zIndex: 2 }}>
      <div style={{ background: t.bgRaised, border: `1px solid ${t.border}`, padding: "0.75rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ fontSize: "0.5625rem", fontFamily: "monospace", color: t.textSub }}>SYNC_SPEED</div>
        <div style={{ fontSize: "1.125rem", fontFamily: "'Sora',sans-serif", fontWeight: 700, color: t.teal }}>1.24 ms</div>
        <div style={{ height: "4px", background: t.border }}>
          <div style={{ width: "85%", height: "100%", background: t.teal }} />
        </div>
      </div>
      
      <div style={{ background: t.bgRaised, border: `1px solid ${t.border}`, padding: "0.75rem", display: "flex", flexDirection: "column", gap: "6px" }}>
        <div style={{ fontSize: "0.5625rem", fontFamily: "monospace", color: t.textSub }}>LATEST_BLOCKS</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.5rem", fontFamily: "monospace", color: t.textSub }}>
            <span>#4,821,093</span>
            <span style={{ color: t.purple }}>SUCCESS</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.5rem", fontFamily: "monospace", color: t.textSub }}>
            <span>#4,821,092</span>
            <span style={{ color: t.purple }}>SUCCESS</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.5rem", fontFamily: "monospace", color: t.textSub }}>
            <span>#4,821,091</span>
            <span style={{ color: t.purple }}>SUCCESS</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TrackSkillMockup = ({ isHovered, t }) => (
  <div style={{
    width: "100%",
    height: "100%",
    background: t.bg,
    display: "flex",
    flexDirection: "column",
    padding: "1.25rem",
    position: "relative",
    overflow: "hidden",
    opacity: isHovered ? 1 : 0.65,
    filter: isHovered ? "saturate(1) contrast(1.1)" : "saturate(0.5) contrast(0.9)",
    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
  }}>
    <div style={{ position: "absolute", inset: 0, opacity: 0.06, backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "14px 14px" }} />
    
    {/* Kanban Header */}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${t.border}`, paddingBottom: "0.625rem", marginBottom: "1rem", zIndex: 2 }}>
      <div style={{ fontSize: "0.6875rem", fontWeight: 700, fontFamily: "'Sora',sans-serif", color: t.text }}>Sprint 14 Kanban</div>
      <div style={{ display: "flex", gap: "4px" }}>
        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: t.border }} />
        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: t.border }} />
      </div>
    </div>

    {/* Kanban Columns */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.5rem", flex: 1, zIndex: 2 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <div style={{ fontSize: "0.5rem", fontWeight: 600, color: t.textSub, letterSpacing: "0.05em", textTransform: "uppercase" }}>Todo</div>
        <div style={{ background: t.bgRaised, border: `1px solid ${t.border}`, padding: "6px", display: "flex", flexDirection: "column", gap: "4px" }}>
          <div style={{ height: "4px", width: "80%", background: t.borderHov, borderRadius: "1px" }} />
          <div style={{ height: "2px", width: "45%", background: t.border, borderRadius: "1px" }} />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <div style={{ fontSize: "0.5rem", fontWeight: 600, color: t.textSub, letterSpacing: "0.05em", textTransform: "uppercase" }}>In Progress</div>
        <div style={{ background: t.bgRaised, border: `1px solid ${t.purple}`, padding: "6px", display: "flex", flexDirection: "column", gap: "4px" }}>
          <div style={{ height: "4px", width: "70%", background: t.text, borderRadius: "1px" }} />
          <div style={{ height: "2px", width: "35%", background: t.purple, borderRadius: "1px" }} />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <div style={{ fontSize: "0.5rem", fontWeight: 600, color: t.textSub, letterSpacing: "0.05em", textTransform: "uppercase" }}>Done</div>
        <div style={{ background: t.bgRaised, border: `1px solid ${t.border}`, padding: "6px", display: "flex", flexDirection: "column", gap: "4px" }}>
          <div style={{ height: "4px", width: "90%", background: t.borderHov, borderRadius: "1px" }} />
          <div style={{ height: "2px", width: "50%", background: "#22c55e", borderRadius: "1px" }} />
        </div>
      </div>
    </div>
  </div>
);

const CaseStudyCard = ({ id, headline, subtitle, metric, tags, frameClass, credits, isAxiom, openContact, t }) => {
  const [h, setH] = useState(false);

  return (
    <article
      id={id}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: t.bgRaised,
        border: `1px solid ${h ? t.borderHov : t.border}`,
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        transform: h ? "scale(1.01) translateY(-2px)" : "scale(1) translateY(0)",
        boxShadow: h ? "0 15px 40px rgba(0,0,0,0.5)" : "none",
        cursor: "pointer",
        overflow: "hidden",
        width: "100%",
        padding: "clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 4vw, 2.5rem)"
      }}
      className={frameClass}
      onClick={() => openContact("Development", `Inquiry regarding: ${headline}`)}
    >
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(22rem, 100%), 1fr))",
        gap: "var(--fluid-gap)",
        alignItems: "center"
      }}>
        {isAxiom ? (
          <>
            {/* Left Content */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div>
                <h3 style={{ fontFamily: "'Sora',sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2rem)", fontWeight: 700, letterSpacing: "-0.03em", color: t.text, margin: "0 0 0.5rem 0", lineHeight: 1.1 }}>
                  {headline}
                </h3>
                <p style={{ fontSize: "1.05rem", color: t.text, lineHeight: 1.5, fontFamily: "'Inter',sans-serif", margin: 0, fontWeight: 500 }}>
                  {subtitle}
                </p>
              </div>

              <div style={{ borderLeft: "2px solid #6F5BEA", paddingLeft: "1rem" }}>
                <p style={{ fontSize: "0.875rem", color: t.textSub, lineHeight: 1.6, fontFamily: "'Inter',sans-serif", margin: 0 }}>
                  {metric}
                </p>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem" }}>
                {tags.map((tag, idx) => (
                  <span key={idx} style={{ fontSize: "0.75rem", fontWeight: 600, color: t.text, border: `1px solid ${t.border}`, padding: "0.25rem 0.625rem", background: t.bg }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ fontSize: "0.75rem", color: t.textSub, fontFamily: "'Inter',sans-serif" }}>
                {credits}
              </div>
            </div>

            {/* Right Asset Placeholder */}
            <div style={{ height: "16rem", border: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "center", background: t.bg, overflow: "hidden" }}>
              <AxiomMockup isHovered={h} t={t} />
            </div>
          </>
        ) : (
          <>
            {/* Left Asset Placeholder (Rendered first on desktop) */}
            <div className="gt-nav-d" style={{ height: "16rem", border: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "center", background: t.bg, overflow: "hidden" }}>
              <TrackSkillMockup isHovered={h} t={t} />
            </div>

            {/* Right Content */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div>
                <h3 style={{ fontFamily: "'Sora',sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2rem)", fontWeight: 700, letterSpacing: "-0.03em", color: t.text, margin: "0 0 0.5rem 0", lineHeight: 1.1 }}>
                  {headline}
                </h3>
                <p style={{ fontSize: "1.05rem", color: t.text, lineHeight: 1.5, fontFamily: "'Inter',sans-serif", margin: 0, fontWeight: 500 }}>
                  {subtitle}
                </p>
              </div>

              <div style={{ borderLeft: "2px solid #00c9a7", paddingLeft: "1rem" }}>
                <p style={{ fontSize: "0.875rem", color: t.textSub, lineHeight: 1.6, fontFamily: "'Inter',sans-serif", margin: 0 }}>
                  {metric}
                </p>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem" }}>
                {tags.map((tag, idx) => (
                  <span key={idx} style={{ fontSize: "0.75rem", fontWeight: 600, color: t.text, border: `1px solid ${t.border}`, padding: "0.25rem 0.625rem", background: t.bg }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ fontSize: "0.75rem", color: t.textSub, fontFamily: "'Inter',sans-serif" }}>
                {credits}
              </div>
            </div>
            
            {/* Mobile Asset Fallback (To show at bottom when layout wraps on small screens) */}
            <div className="gt-nav-m" style={{ height: "16rem", border: `1px solid ${t.border}`, display: "none", alignItems: "center", justifyContent: "center", background: t.bg, overflow: "hidden" }}>
              <TrackSkillMockup isHovered={h} t={t} />
            </div>
          </>
        )}
      </div>
    </article>
  );
};

export default function PortfolioPage({ t, setPage, openContact }) {
  const [hoveredBtn, setHoveredBtn] = useState(false);

  return (
    <main id="main-content" style={{ background: t.bg, color: t.text, minHeight: "100vh" }}>
      
      {/* SECTION 1: The Portfolio Intro Header */}
      <section id="portfolio-hero" style={{ padding: "clamp(6rem, 10vw, 8rem) 0 4rem 0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 clamp(1.25rem, 4vw, 2.5rem)" }}>
          <div style={{ maxWidth: "48rem" }}>
            <Label t={t}>Case Studies</Label>
            <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", fontWeight: 600, lineHeight: 1.05, letterSpacing: "-0.02em", color: t.text, margin: "1.5rem 0" }}>
              Proven system architecture.
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.125rem", color: t.textSub, lineHeight: 1.8, margin: 0 }}>
              We design and deploy real-world software. Explore our featured case studies, built with strict engineering discipline since 2023.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Vertical Case Study Stack */}
      <section id="case-studies-catalog" style={{ padding: "4rem 0", borderTop: `1px solid ${t.border}` }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 clamp(1.25rem, 4vw, 2.5rem)", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          
          <CaseStudyCard
            id="case-study-axiom"
            headline="Axiom Core — Decentralized State Registry"
            subtitle="A high-throughput state machine and native Web3 engine built for the 0G Galileo Testnet."
            metric="Deployed native Web3 integration with real-time state synchronization."
            tags={["FastAPI", "Web3 Integration", "0G Testnet", "Python"]}
            frameClass="rounded-tl-[80px] rounded-br-[40px]"
            credits="Engineered by Kamsiyochukwu Ogbodo (Backend) & Team."
            isAxiom={true}
            openContact={openContact}
            t={t}
          />

          <CaseStudyCard
            id="case-study-trackskill"
            headline="TrackSkill — Agile Technical Project Management Platform"
            subtitle="An enterprise platform built to track developer workflows, manage internal repositories, and scale engineering skills."
            metric="Features direct public repository tracking and team agility metrics."
            tags={["Next.js", "React", "Tailwind CSS", "Git Automation"]}
            frameClass="rounded-tr-[60px] rounded-bl-[60px]"
            credits="Managed by Ikedinachi Ogbonne (Project Manager) & Team."
            isAxiom={false}
            openContact={openContact}
            t={t}
          />

        </div>
      </section>

      {/* SECTION 4: Pipeline CTA Section */}
      <section id="portfolio-cta" style={{ padding: "6rem 0", borderTop: `1px solid ${t.border}` }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 clamp(1.25rem, 4vw, 2.5rem)", textAlign: "center" }}>
          <div style={{ maxWidth: "45rem", margin: "0 auto" }}>
            <span style={{ fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: t.purple, fontFamily: "'Inter',sans-serif" }}>Initiate</span>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(2rem, 3.5vw, 2.5rem)", fontWeight: 600, letterSpacing: "-0.02em", color: t.text, marginTop: "0.5rem", marginBottom: "1.5rem" }}>
              Ready to build your system?
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.125rem", color: t.textSub, lineHeight: 1.8, marginBottom: "3rem" }}>
              Whether you need a custom decentralized backend or a high-performance web application, our dedicated engineering studio and active talent network are built to scale your infrastructure.
            </p>
            <button
              onClick={() => openContact()}
              onMouseEnter={() => setHoveredBtn(true)}
              onMouseLeave={() => setHoveredBtn(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5625rem",
                fontFamily: "'Inter',sans-serif",
                fontSize: "0.875rem",
                fontWeight: 500,
                letterSpacing: "0",
                textTransform: "none",
                borderRadius: "999px",
                padding: "1rem 2.25rem",
                border: "none",
                cursor: "pointer",
                background: hoveredBtn ? t.purpleL : t.purple,
                color: "#fff",
                transform: hoveredBtn ? "translateY(-1px)" : "none",
                boxShadow: hoveredBtn ? "0 8px 24px rgba(111,91,234,0.28)" : "none",
                transition: "all 0.22s var(--ease-antigravity)"
              }}
            >
              Initiate build
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
