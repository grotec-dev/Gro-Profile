import { useState } from "react";
import { SectionHeader } from "./shared";

/* ─── DATA ─────────────────────────────────────────────────────────────────── */
const teamMembers = [
  {
    id: "michael-orji",
    name: "Michael Orji Chukwuemeka",
    role: "CEO / Co-founder",
    bio: "Leads the business strategy and helps African companies grow with digital tools.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    bgAsset: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    shapeClass: "rounded-tr-[80px] rounded-bl-[40px]"
  },
  {
    id: "chidalu-udeobi",
    name: "Chidalu Udeobi ",
    role: "Director / Co-founder",
    bio: "Manages daily operations and makes sure our products solve real problems.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    bgAsset: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    shapeClass: "rounded-tl-[120px] rounded-br-[60px]"
  },
  {
    id: "ikedinachi-ogbonne",
    name: "Ikedinachi Ogbonne",
    role: "Project Manager / Founder",
    bio: "Organizes the team, sets project timelines, and ensures we deliver great work on time.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    bgAsset: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80",
    shapeClass: "rounded-none"
  },
  {
    id: "kamsiyochukwu-ogbodo",
    name: "Kamsiyochukwu Ogbodo",
    role: "Engineering / Co-founder",
    bio: "Builds the backend systems, databases, and secure server environments.",
    avatar: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=600&q=80",
    bgAsset: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    shapeClass: "rounded-full"
  },
  {
    id: "francis-chimdinma",
    name: "Agbara Francis Chimdinma",
    role: "Cyber Security & Infrastructure Lead / Co-founder",
    bio: "Protects our systems from hackers, sets up network connections, and manages servers.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    bgAsset: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    shapeClass: "rounded-br-[100px]"
  }
];

/* ─── TEAM MEMBER CARD ──────────────────────────────────────────────────────── */
const TeamMemberCard = ({ m, index, t }) => {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      className={`scroll-fade bento-card bento-card-${index}`}
      style={{
        background: h ? t.bgHover : t.bgRaised,
        "--theme-border": t.border,
        "--theme-border-hov": t.borderHov,
      }}
    >
      {/* Header Area containing bgAsset and Avatar */}
      <div className="bento-card-img-container" style={{ height: "12rem", position: "relative", background: "#000" }}>
        {/* Background Asset */}
        <picture style={{ width: "100%", height: "100%", display: "block" }}>
          <img
            src={m.bgAsset}
            alt="Technology background"
            loading="lazy"
            className="bento-card-bg-img"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.45,
            }}
          />
        </picture>

        {/* Avatar Overlay */}
        <div style={{
          position: "absolute",
          bottom: "-2.25rem",
          left: "1.5rem",
          width: "5rem",
          height: "5rem",
          background: t.bgRaised,
          padding: "3px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          overflow: "hidden"
        }}
        className={m.shapeClass}
        >
          <picture style={{ width: "100%", height: "100%", display: "block", overflow: "hidden", borderRadius: "inherit" }}>
            <img
              src={m.avatar}
              alt={m.name}
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "inherit"
              }}
            />
          </picture>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="bento-card-text" style={{ padding: "3.5rem 1.5rem 2rem 1.5rem", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: t.purple, fontFamily: "'Inter',sans-serif", marginBottom: "0.5em" }}>{m.role}</div>
          <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1.125rem", fontWeight: 700, color: t.text, marginBottom: "0.5em", letterSpacing: "-0.02em", margin: "0 0 0.5em 0" }}>{m.name}</h3>
          <p style={{ fontSize: "0.875rem", color: t.textSub, lineHeight: 1.74, fontFamily: "'Inter',sans-serif", margin: 0 }}>{m.bio}</p>
        </div>
      </div>
    </div>
  );
};

/* ─── TEAM SECTION ─────────────────────────────────────────────────────────── */
export default function Team({t}) {
  return (
    <section id="team" style={{background:t.bgRaised,borderTop:`1px solid ${t.border}`,padding:"var(--fluid-section) 0"}}>
      <div style={{maxWidth:"80rem",margin:"0 auto",padding:"0 clamp(1.25rem,4vw,2.5rem)"}}>
        <SectionHeader
          t={t}
          align="split"
          label="Our Team"
          title={<>Five builders.<br/>One high standard.</>}
          subtitle="We are a small team of creators, designers, and builders. We do not use outsourcing. We write every line of code ourselves to make sure it works perfectly."
        />
        <div className="bento-grid">
          {teamMembers.map((m, i) => (
            <TeamMemberCard key={m.id} m={m} index={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
