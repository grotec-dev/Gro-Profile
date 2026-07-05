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
              GroTec started in 2023 in Enugu, Nigeria. We wanted to build a company that does one thing: make great software for businesses. Too many companies wanted websites and apps but could not find a helper they could trust.
            </p>
            <p style={{
              fontSize: "var(--fluid-body)",
              color: t.textSub,
              lineHeight: 1.82,
              fontFamily: "'Inter',sans-serif",
              marginBottom: "1.5rem",
            }}>
              We do not use big tech words or make things complicated. We just write clean code, design simple screens, and make sure your app works on every phone and computer.
            </p>
            <p style={{
              fontSize: "var(--fluid-body)",
              color: t.textSub,
              lineHeight: 1.82,
              fontFamily: "'Inter',sans-serif",
              margin: 0,
            }}>
              Today, we are a complete team of software builders. We design the look, build the backend systems, and protect your servers. We do all the work ourselves so you get a finished product that you and your customers will love.
            </p>
          </div>

          <div className="scroll-fade" style={{
            padding: "clamp(2rem, 4vw, 3rem)",
            background: t.bg,
            border: `1px solid ${t.border}`,
          }}>
            {[
              { label: "Founded", value: "2023", detail: "Enugu, Nigeria" },
              { label: "Team Size", value: "5 Builders", detail: "Fully in-house team" },
              { label: "Focus", value: "Simple & Clean", detail: "Built to work on any screen" },
              { label: "Community", value: "DevTalks", detail: "Free learning events for everyone" },
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
