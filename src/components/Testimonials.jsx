import { useState } from "react";

/* ─── DEPLOYMENT DATA ────────────────────────────────────────────────────────── */
const deployments = [
  {
    index: "01",
    system: "AXIOM CORE STATE MACHINE",
    context: "Distributed State Registry System",
    environment: "0G Galileo Testnet Infrastructure",
    deliverable:
      "Architected and deployed a decentralized state registry engine capable of handling high-throughput cryptographic verification.",
    outcome: "Successful integration with 0G Testnet nodes.",
    credit: "Kamsiyochukwu Ogbodo",
    role: "Backend Lead",
    year: "2024",
  },
  {
    index: "02",
    system: "TRACKSKILL WORKFLOW ENGINE",
    context: "Internal Agile Management System",
    environment: "GroTec Ecosystem",
    deliverable:
      "Engineered an internal technical project manager dashboard featuring direct public repository synchronization and Git automation hooks.",
    outcome:
      "Fully deployed tool actively tracking developer skill velocity across our talent pipeline.",
    credit: "Ikedinachi Ogbonne",
    role: "Project Manager",
    year: "2024",
  },
];

/* ─── LOG ROW ────────────────────────────────────────────────────────────────── */
const LogRow = ({ d }) => {
  const [h, setH] = useState(false);

  return (
    <article
      className="log-row"
      tabIndex={0}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      onFocus={() => setH(true)}
      onBlur={() => setH(false)}
      style={{
        borderTop: `1px solid ${h ? "#3A3A48" : "#2A2A36"}`,
        padding: "2.5rem 0",
        background: h ? "#1D1D27" : "transparent",
        paddingLeft: h ? "1.5rem" : "0",
        paddingRight: h ? "1.5rem" : "0",
        marginLeft: h ? "-1.5rem" : "0",
        marginRight: h ? "-1.5rem" : "0",
        transition:
          "background 0.3s ease, padding 0.3s ease, margin 0.3s ease, border-color 0.3s ease",
        cursor: "default",
        outline: "none",
      }}
    >
      {/* TOP ROW: Index + System Name + Year */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "2rem",
          marginBottom: "1.25rem",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          {/* Index */}
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.625rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#3A3A48",
              flexShrink: 0,
            }}
          >
            {d.index}
          </span>

          {/* System Name */}
          <h3
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              color: h ? "#F7F7FA" : "#D7D0FF",
              margin: 0,
              lineHeight: 1,
              transition: "color 0.3s",
            }}
          >
            {d.system}
          </h3>
        </div>

        {/* Year tag */}
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.625rem",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#3A3A48",
            flexShrink: 0,
            marginTop: "0.25rem",
          }}
        >
          {d.year}
        </span>
      </div>

      {/* CONTEXT TAGS */}
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          flexWrap: "wrap",
          marginBottom: "1.25rem",
        }}
      >
        {[d.context, d.environment].map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.6875rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#6b6b78",
              border: "1px solid #27272a",
              padding: "0.25rem 0.75rem",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* DELIVERABLE */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.9375rem",
          color: "#A5A5B3",
          lineHeight: 1.78,
          marginBottom: "1.25rem",
          maxWidth: "52rem",
        }}
      >
        {d.deliverable}
      </p>

      {/* OUTCOME + CREDIT */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {/* Outcome Metric */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
          <span
            style={{
              width: "0.5rem",
              height: "0.5rem",
              background: "#F7F7FA",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8125rem",
              color: "#F7F7FA",
              fontWeight: 500,
            }}
          >
            {d.outcome}
          </span>
        </div>

        {/* Lead Credit */}
        <div style={{ textAlign: "right" }}>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#A5A5B3",
              letterSpacing: "0.04em",
            }}
          >
            {d.credit}
          </div>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.625rem",
              color: "#3A3A48",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginTop: "0.125rem",
            }}
          >
            {d.role}
          </div>
        </div>
      </div>
    </article>
  );
};

/* ─── IMPACT LOG SECTION ─────────────────────────────────────────────────────── */
export default function Testimonials({ t }) {
  return (
    <section
      id="deployment-log"
      style={{
        background: "#0D0D12",
        borderTop: "1px solid #2A2A36",
        padding: "var(--fluid-section) 0",
      }}
    >
      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "0 clamp(1.25rem, 4vw, 2.5rem)",
        }}
      >
        {/* ── Section Header ── */}
        <div style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
          <div
            style={{
              fontSize: "0.625rem",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#6b6b78",
              fontFamily: "'Inter', sans-serif",
              marginBottom: "1.25rem",
            }}
          >
            Impact Log
          </div>
          <h2
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              color: "#F7F7FA",
              margin: "0 0 1.25rem 0",
              lineHeight: 1.0,
            }}
          >
            System Deployments &amp; Impact.
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "#A5A5B3",
              lineHeight: 1.75,
              maxWidth: "42rem",
              margin: 0,
            }}
          >
            Verifiable software architecture and technical project execution
            delivered by our studio since 2023.
          </p>
        </div>

        {/* ── Log Matrix ── */}
        <div>
          {deployments.map((d) => (
            <LogRow key={d.index} d={d} />
          ))}
          {/* Closing border */}
          <div style={{ borderTop: "1px solid #2A2A36" }} />
        </div>

        {/* ── Ecosystem Validation Blockquote ── */}
        <blockquote
          style={{
            margin: "clamp(3rem, 6vw, 4.5rem) 0 0 0",
            padding: "2rem 0 2rem 2rem",
            borderLeft: "2px solid #27272a",
          }}
        >
          <p
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(1.0625rem, 2vw, 1.375rem)",
              fontWeight: 500,
              color: "#A5A5B3",
              lineHeight: 1.7,
              maxWidth: "48rem",
              margin: "0 0 1rem 0",
            }}
          >
            &ldquo;Every deployment is backed by our live developer ecosystem,
            ensuring instant scalability and secure, production-ready code
            execution from day one.&rdquo;
          </p>
          <cite
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.6875rem",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#3A3A48",
              fontStyle: "normal",
            }}
          >
            GroTec Studio — Engineering Doctrine
          </cite>
        </blockquote>
      </div>
    </section>
  );
}
