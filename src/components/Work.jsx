import { useState } from "react";
import { SectionHeader } from "./shared";

/* ─── DATA — Honest capability demonstrations (no fake clients/metrics) ───── */
const practiceAreas = [
  {
    tag: "Web & Mobile Apps",
    title: "FULL-STACK APPLICATIONS",
    desc: "We design, build, and launch complete web and mobile applications — from the user interface to the database. Whether it's a customer portal, internal dashboard, or public-facing product, we handle every layer so you get one team, one timeline, and a finished product that works.",
    highlights: [{v:"End-to-End",l:"Full Stack"},{v:"Web & Mobile",l:"Platforms"},{v:"API-Driven",l:"Architecture"}],
  },
  {
    tag: "Business Systems",
    title: "WORKFLOW & OPERATIONS TOOLS",
    desc: "We build custom tools that replace manual processes in your business — inventory trackers, booking systems, invoicing dashboards, and reporting tools. If your team is doing it on spreadsheets or WhatsApp, we can turn it into a proper system that saves time and reduces errors.",
    highlights: [{v:"Custom",l:"Built for You"},{v:"Automated",l:"Workflows"},{v:"Real-Time",l:"Dashboards"}],
  },
  {
    tag: "Platform Engineering",
    title: "SCALABLE INFRASTRUCTURE",
    desc: "We set up cloud infrastructure, automated deployments, and monitoring systems so your application runs smoothly under real-world traffic. When your business grows, your tech grows with it — no surprise crashes, no weekend emergencies.",
    highlights: [{v:"Cloud",l:"Hosted"},{v:"CI/CD",l:"Automated"},{v:"24/7",l:"Monitoring"}],
  },
];

/* ─── WORK ROW COMPONENT ────────────────────────────────────────────────────── */
const WorkRow = ({ w, i, t, open, onToggle, totalLength }) => {
  const [h, setH] = useState(false);
  return (
    <div className="scroll-fade" style={{borderBottom: i < totalLength - 1 ? `1px solid ${t.border}` : "none"}}>
      <div
        onClick={onToggle}
        onMouseEnter={() => setH(true)}
        onMouseLeave={() => setH(false)}
        className="work-row-header"
        style={{
          background: h || open ? t.bgHover : "transparent",
          "--row-border": t.border
        }}
      >
        <div className="work-row-main">
          <span className="work-row-index" style={{color: t.textDimmer}}>{String(i + 1).padStart(2, "0")}</span>
          <div className="work-row-info">
            <div className="work-row-tag" style={{color: t.purple}}>{w.tag}</div>
            <div className="work-row-title" style={{color: t.text}}>{w.title}</div>
          </div>
        </div>
        <div className="work-row-meta">
          <div className="work-row-metrics">
            {w.highlights.map((m, j) => (
              <div key={j} className="work-row-metric">
                <span className="work-row-metric-val" style={{color: t.purple}}>{m.v}</span>
                <span className="work-row-metric-lbl" style={{color: t.textDim}}>{m.l}</span>
              </div>
            ))}
          </div>
          <div className="work-row-toggle" style={{
            border: `1px solid ${open ? t.borderAccent : t.border}`,
            transform: open ? "rotate(45deg)" : "none"
          }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={open ? t.purple : t.textDim} strokeWidth="2.5">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </div>
        </div>
      </div>

      <div className="work-row-body" style={{maxHeight: open ? "18.75rem" : 0}}>
        <div className="work-row-body-inner" style={{borderTop: `1px solid ${t.border}`, background: t.bgHover}}>
          <p className="work-row-desc" style={{color: t.textSub}}>{w.desc}</p>
        </div>
      </div>
    </div>
  );
};

/* ─── CAPABILITIES IN PRACTICE SECTION ──────────────────────────────────────── */
export default function Work({t}) {
  const [active,setActive] = useState(0);
  return (
    <section id="work" style={{background:t.bg,borderTop:`1px solid ${t.border}`,padding:"var(--fluid-section) 0"}}>
      <div style={{maxWidth:"80rem",margin:"0 auto",padding:"0 clamp(1.25rem,4vw,2.5rem)"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"clamp(2rem,4.5vw,3.5rem)",flexWrap:"wrap",gap:"1.25rem"}}>
          <SectionHeader
            t={t}
            label="Capabilities in Practice"
            title={<>What we deliver.<br/>How we deliver it.</>}
          />
          <p style={{fontSize:"0.8125rem",color:t.textDim,maxWidth:"16.25rem",lineHeight:1.7,fontFamily:"'Inter',sans-serif",margin:0}}>Here's what it looks like when we put our skills to work for your business.</p>
        </div>

        <div className="work-rows" style={{border:`1px solid ${t.border}`}}>
          {practiceAreas.map((w, i) => (
            <WorkRow
              key={i}
              w={w}
              i={i}
              t={t}
              open={active === i}
              onToggle={() => setActive(active === i ? -1 : i)}
              totalLength={practiceAreas.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
