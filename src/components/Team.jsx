import { useState } from "react";
import { SectionHeader } from "./shared";

/* ─── DATA ─────────────────────────────────────────────────────────────────── */
const founders = [
  {
    name:     "Ogbonne Ikedinachi Franklin",
    role:     "Founder",
    title:    "Project Manager & Systems Architect",
    initials: "OIF",
    bio:      "Franklin runs our strategy and makes sure all projects cross the finish line. He guides every project from start to finish, keeping us on deadline, on budget, and building to a high standard.",
  },
  {
    name:     "Orji Chukwuemeka Michael",
    role:     "Co-Founder",
    title:    "Frontend & Mobile Engineer",
    initials: "OCM",
    bio:      "Michael designs and builds the apps and websites people actually use. He leads our frontend team with a strict focus on speed, accessibility, and making sure everything works on every device.",
  },
  {
    name:     "Ogbodo Kamsiyochukwu Stephen",
    role:     "Co-Founder",
    title:    "Backend Engineer & DevOps",
    initials: "OKS",
    bio:      "Stephen builds and maintains our servers and backend systems. He handles the infrastructure — designing data flows and automated setups that keep everything running smoothly under heavy use.",
  },
  {
    name:     "Udeobi Chidalu Moses",
    role:     "Co-Founder",
    title:    "Business Analyst & Growth Strategist",
    initials: "UCM",
    bio:      "Chidalu turns market research into clear business plans. He leads our product planning to make sure every system we build actually helps your business grow and make money.",
  },
];

/* ─── TEAM MEMBER CARD ──────────────────────────────────────────────────────── */
const TeamMemberCard = ({ m, t }) => {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      className="scroll-fade hover-card"
      style={{
        background: h ? t.bgHover : t.bgRaised,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div style={{height: "2px", background: h ? t.purple : t.border, transition: "background 0.3s ease"}} />
      <div style={{padding: "clamp(1.5rem, 3vw, 2.25rem)", display: "flex", gap: "1.75rem", alignItems: "flex-start", flexWrap: "wrap"}}>
        {/* TODO: Replace with <img> when team photos are available */}
        <div style={{
          flexShrink: 0,
          width: "5rem",
          height: "5rem",
          background: h ? `${t.teal}18` : t.bgHover,
          border: `1px solid ${h ? t.teal : t.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s ease",
          overflow: "hidden",
          position: "relative",
        }}>
          <span style={{fontFamily: "'Inter',sans-serif", fontSize: "1.125rem", fontWeight: 700, color: h ? t.teal : t.textDim, letterSpacing: "0.04em", transition: "color 0.3s ease"}}>{m.initials}</span>
        </div>
        <div style={{flex: 1, minWidth: "12rem"}}>
          <div style={{fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: t.purple, fontFamily: "'Inter',sans-serif", marginBottom: "0.5em"}}>{m.role}</div>
          <div style={{fontFamily: "'Space Grotesk',sans-serif", fontSize: "1.0625rem", fontWeight: 700, color: t.text, marginBottom: "0.25em", letterSpacing: "-0.02em"}}>{m.name}</div>
          <div style={{fontSize: "0.75rem", color: t.textDim, letterSpacing: "0.06em", fontFamily: "'Inter',sans-serif", marginBottom: "0.8em"}}>{m.title}</div>
          <p style={{fontSize: "0.84375rem", color: t.textSub, lineHeight: 1.74, fontFamily: "'Inter',sans-serif", margin: 0}}>{m.bio}</p>
        </div>
      </div>
    </div>
  );
};

/* ─── FOUNDING TEAM SECTION ─────────────────────────────────────────────────── */
export default function Team({t}) {
  return (
    <section id="team" style={{background:t.bgRaised,borderTop:`1px solid ${t.border}`,padding:"var(--fluid-section) 0"}}>
      <div style={{maxWidth:"80rem",margin:"0 auto",padding:"0 clamp(1.25rem,4vw,2.5rem)"}}>
        <SectionHeader
          t={t}
          align="split"
          label="The Founding Team"
          title={<>Four engineers.<br/>One standard.</>}
          subtitle="We are builders, not consultants. Each founder brings a specific skill. Together, we cover everything from business strategy to cloud servers."
        />
        <div className="founders-grid">
          {founders.map((m, i) => (
            <TeamMemberCard key={i} m={m} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
