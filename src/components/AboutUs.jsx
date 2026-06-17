import { SectionHeader } from "./shared";

/* ─── ABOUT US / ORIGIN STORY ───────────────────────────────────────────────── */
export default function AboutUs({t}) {
  return (
    <section id="about" style={{background:t.bgRaised,borderTop:`1px solid ${t.border}`,padding:"var(--fluid-section) 0"}}>
      <div style={{maxWidth:"80rem",margin:"0 auto",padding:"0 clamp(1.25rem,4vw,2.5rem)"}}>
        <SectionHeader
          t={t}
          align="split"
          label="About Us"
          title={<>How GroTec<br/>started.</>}
          subtitle="The story behind the company — who we are, why we started, and how we've grown."
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(22rem, 100%), 1fr))",
          gap: "var(--fluid-gap)",
          alignItems: "start",
        }}>
          {/*
            ──────────────────────────────────────────────────────────────────
            TODO: FILL IN WITH REAL ORIGIN STORY

            Replace this placeholder block with the real GroTec origin story.
            Suggested content to include:
            - Who founded GroTec and when
            - What problem they saw and wanted to solve
            - How the founders met / came together
            - What the early days looked like
            - How the company has grown to include employed technical staff
              beyond the founding team
            - What drives the team today

            Write it in the same plain, honest tone used across the rest of
            the site. Keep paragraphs short (2-3 sentences each).
            ──────────────────────────────────────────────────────────────────
          */}
          <div className="scroll-fade" style={{
            padding: "clamp(2rem, 4vw, 3rem)",
            background: t.bg,
            border: `1px solid ${t.border}`,
          }}>
            <p style={{
              fontSize: "var(--fluid-body)",
              color: t.textSub,
              lineHeight: 1.82,
              fontFamily: "'Inter',sans-serif",
              marginBottom: "1.5rem",
            }}>
              {/* TODO: Replace with real founding story paragraph 1 */}
              GroTec was founded in Enugu, Nigeria by four engineers who saw a gap in the market — too many businesses needed quality technology but couldn't find reliable, honest partners to build it.
            </p>
            <p style={{
              fontSize: "var(--fluid-body)",
              color: t.textSub,
              lineHeight: 1.82,
              fontFamily: "'Inter',sans-serif",
              marginBottom: "1.5rem",
            }}>
              {/* TODO: Replace with real founding story paragraph 2 */}
              What started as a shared commitment to building things properly has grown into a team of engineers, designers, and specialists who deliver real results for businesses across Nigeria and beyond.
            </p>
            <p style={{
              fontSize: "var(--fluid-body)",
              color: t.textSub,
              lineHeight: 1.82,
              fontFamily: "'Inter',sans-serif",
              margin: 0,
            }}>
              {/* TODO: Replace with real founding story paragraph 3 */}
              Today, GroTec is more than its founders. We employ technical staff across security, infrastructure, and AI — because delivering great work means having the right people for every part of the job.
            </p>
          </div>

          <div className="scroll-fade" style={{
            padding: "clamp(2rem, 4vw, 3rem)",
            background: t.bg,
            border: `1px solid ${t.border}`,
          }}>
            {/* TODO: Replace these values with real, verified numbers */}
            {[
              { label: "Founded", value: "2024", detail: "Enugu, Nigeria" },
              { label: "Team Size", value: "Growing", detail: "Founders + employed staff" },
              { label: "Focus", value: "Africa-First", detail: "Built for Nigerian & African businesses" },
              { label: "Community", value: "DevTalks", detail: "Free events for developers & business owners" },
            ].map((item, i) => (
              <div key={i} style={{
                padding: "1.25rem 0",
                borderBottom: i < 3 ? `1px solid ${t.border}` : "none",
              }}>
                <div style={{
                  fontSize: "var(--fluid-label)",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: t.purple,
                  fontFamily: "'Inter',sans-serif",
                  marginBottom: "0.5em",
                }}>
                  {item.label}
                </div>
                <div style={{
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontSize: "var(--fluid-h3)",
                  fontWeight: 700,
                  color: t.text,
                  letterSpacing: "-0.02em",
                  marginBottom: "0.25em",
                }}>
                  {item.value}
                </div>
                <div style={{
                  fontSize: "0.8125rem",
                  color: t.textDim,
                  fontFamily: "'Inter',sans-serif",
                }}>
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
