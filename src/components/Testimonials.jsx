import { useState } from "react";
import { SectionHeader } from "./shared";

/* ─── DATA — Draft testimonials with visible draft badges ──────────────────── */
const testimonials = [
  /* TODO: HIGH PRIORITY — Replace with real client testimonial — remove draft badge when real quote is added */
  {
    quote: "They took the time to understand what our business actually needed before writing a single line of code. The final product was exactly what we asked for, delivered on time.",
    author: "Client",
    role: "Web Development Project",
    isDraft: true,
  },
  /* TODO: HIGH PRIORITY — Replace with real client testimonial — remove draft badge when real quote is added */
  {
    quote: "What stood out was how clearly they communicated throughout the project. No confusing jargon — just honest updates and good work.",
    author: "Client",
    role: "Mobile App Project",
    isDraft: true,
  },
];

/* ─── TESTIMONIAL CARD ──────────────────────────────────────────────────────── */
const TestimonialCard = ({ q, t }) => {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      className="scroll-fade hover-card"
      style={{
        padding: "clamp(2rem, 4vw, 3rem) clamp(1.5rem, 3.5vw, 2.75rem)",
        background: h ? t.bgHover : t.bg,
        position: "relative",
      }}
    >
      {/* Draft badge — visible to site visitors */}
      {q.isDraft && (
        <div style={{
          position: "absolute",
          top: "1rem",
          right: "1.25rem",
          background: t.tealDim,
          color: t.teal,
          fontSize: "0.5625rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          padding: "0.25rem 0.625rem",
          fontFamily: "'Inter',sans-serif",
        }}>
          Draft — Pending Client Approval
        </div>
      )}

      <div style={{position: "absolute", top: 0, left: 0, width: "2px", height: h ? "100%" : 0, background: t.purple, transition: "height 0.35s var(--ease-antigravity)"}} />
      <div style={{fontFamily: "Georgia,'Times New Roman',serif", fontSize: "3rem", lineHeight: 1, color: t.purple, marginBottom: "0.25em", opacity: 0.6}}>"</div>
      <p style={{fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", color: t.textSub, lineHeight: 1.82, fontStyle: "italic", fontFamily: "'Inter',sans-serif", marginBottom: "2em"}}>{q.quote}</p>
      <div style={{display: "flex", alignItems: "center", gap: "0.875rem", paddingTop: "1.5rem", borderTop: `1px solid ${t.border}`}}>
        <div style={{width: "2.5rem", height: "2.5rem", background: t.bgHover, border: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: t.purple, flexShrink: 0}}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        </div>
        <div>
          <div style={{fontSize: "0.875rem", fontWeight: 700, color: t.text, fontFamily: "'Space Grotesk',sans-serif"}}>{q.author}</div>
          <div style={{fontSize: "0.75rem", color: t.textDim, marginTop: "0.25em", letterSpacing: "0.04em", fontFamily: "'Inter',sans-serif"}}>{q.role}</div>
        </div>
      </div>
    </div>
  );
};

/* ─── TESTIMONIALS SECTION ──────────────────────────────────────────────────── */
export default function Testimonials({t}) {
  return (
    <section style={{background:t.bgRaised,borderTop:`1px solid ${t.border}`,padding:"var(--fluid-section) 0"}}>
      <div style={{maxWidth:"80rem",margin:"0 auto",padding:"0 clamp(1.25rem,4vw,2.5rem)"}}>
        <SectionHeader
          t={t}
          align="center"
          label="Client Voices"
          title="What our clients say."
        />
        <div className="testimonials-grid">
          {testimonials.map((q, i) => (
            <TestimonialCard key={i} q={q} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
