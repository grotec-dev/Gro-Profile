import { useState } from "react";
import { SectionHeader, Btn } from "./shared";

/* ─── DATA — Real GroTec products in development ───────────────────────────── */
const productsInDevelopment = [
  {
    name: "IJDRIVES",
    desc: "A multi-modal Nigerian transport marketplace covering road, sea, air, and rail. IJDrives helps everyday people plan and book transport without relying on informal middlemen — making travel safer, cheaper, and easier to organise.",
    /* TODO: Confirm progress percentage — currently an estimate */
    progress: 40,
    tag: "Transport Marketplace",
  },
  {
    name: "HUGO",
    desc: "A housing platform that helps people find apartments and houses directly from landlords, without paying inflated agent fees. Hugo cuts out the middlemen so renters in Nigeria can find good homes at fair prices.",
    /* TODO: Confirm progress percentage — currently an estimate */
    progress: 25,
    tag: "Housing Platform",
  },
];

/* ─── PRODUCT CARD ──────────────────────────────────────────────────────────── */
const ProductCard = ({ p, t, onContactClick }) => {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      className="scroll-fade hover-card"
      style={{
        border: `1px solid ${h ? t.borderHov : t.border}`,
        background: t.bg,
        padding: 0,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "15.625rem",
        overflow: "hidden",
      }}
    >
      {/* TODO: Replace with real screenshot/mockup of the product */}
      <div style={{
        width: "100%",
        height: "10rem",
        background: `linear-gradient(135deg, ${t.bgHover} 0%, ${t.purple}15 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: `1px solid ${t.border}`,
      }}>
        <span style={{
          fontFamily: "'Space Grotesk',sans-serif",
          fontSize: "1.5rem",
          fontWeight: 700,
          color: t.textDim,
          letterSpacing: "-0.02em",
          opacity: 0.5,
        }}>
          {p.name}
        </span>
      </div>

      <div style={{ padding: "clamp(1.5rem, 3vw, 2.25rem)" }}>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
            <span style={{ fontSize: "var(--fluid-label)", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: t.purple, fontFamily: "'Inter',sans-serif" }}>
              {p.tag}
            </span>
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "0.8125rem", fontWeight: 700, color: t.textSub }}>
              {/* TODO: Confirm this progress percentage is accurate */}
              ~{p.progress}% Complete
            </span>
          </div>
          <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "var(--fluid-h3)", fontWeight: 700, color: t.text, letterSpacing: "-0.02em", marginBottom: "0.5em" }}>
            {p.name}
          </h3>
          <p style={{ fontSize: "var(--fluid-body)", color: t.textSub, lineHeight: 1.7, fontFamily: "'Inter',sans-serif", margin: 0, marginBottom: "1.5em" }}>
            {p.desc}
          </p>
        </div>

        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
            <Btn t={t} small onClick={() => onContactClick("Development", `I'm interested in early access to ${p.name}.`)}>Get Early Access</Btn>
          </div>
          <div style={{
            width: "100%",
            height: "0.375rem",
            background: t.bgHover,
            border: `1px solid ${t.border}`,
            borderRadius: 0,
            overflow: "hidden",
            position: "relative",
          }}>
            <div style={{
              width: `${p.progress}%`,
              height: "100%",
              background: h ? t.purple : t.textSub,
              transition: "width 1s var(--ease-swift), background-color 0.25s ease",
            }} />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── PRODUCTS IN DEVELOPMENT SECTION ───────────────────────────────────────── */
export default function ProductsInDevelopment({ t, onContactClick }) {
  return (
    <section id="products" style={{ background: t.bgRaised, borderTop: `1px solid ${t.border}`, padding: "var(--fluid-section) 0" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 clamp(1.25rem, 4vw, 2.5rem)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "clamp(2rem, 4.5vw, 3.5rem)", flexWrap: "wrap", gap: "1.25rem" }}>
          <SectionHeader
            t={t}
            label="In the Lab"
            title={<>Products we're building<br />right now.</>}
          />
          <p style={{ fontSize: "0.8125rem", color: t.textDim, maxWidth: "16.25rem", lineHeight: 1.7, fontFamily: "'Inter',sans-serif", margin: 0 }}>
            These are real products our team is actively developing. Drop your details to get early access when they launch.
          </p>
        </div>

        <div className="products-grid">
          {productsInDevelopment.map((p, i) => (
            <ProductCard key={i} p={p} t={t} onContactClick={onContactClick} />
          ))}
        </div>
      </div>
    </section>
  );
}
