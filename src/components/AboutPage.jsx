import { useState } from "react";
import { Label } from "./shared";

const teamMembers = [
  {
    id: "michael-orji",
    name: "Michael Orji Chukwuemeka",
    role: "Frontend & Mobile Lead",
    bio: "Leads enterprise business strategy and helps African companies grow using high-performance digital tools.",
    silhouette: "classic",
  },
  {
    id: "chidalu-udeobi",
    name: "Chidalu Udeobi",
    role: "Business Analyst & Growth Lead",
    bio: "Manages day-to-day operations and ensures our software products solve real, physical business challenges.",
    silhouette: "twists",
  },
  {
    id: "ikedinachi-ogbonne",
    name: "Ikedinachi Ogbonne",
    role: "Project Manager",
    bio: "Coordinates agile engineering workflows, sets delivery timelines, and guarantees technical project execution.",
    silhouette: "structured",
  },
  {
    id: "kamsiyochukwu-ogbodo",
    name: "Kamsiyochukwu Ogbodo",
    role: "Backend & DevOps Lead",
    bio: "Architects heavy backend software systems, optimizes database designs, and deploys scalable cloud server setups.",
    silhouette: "curly",
  },
  {
    id: "francis-chimdinma",
    name: "Agbara Francis Chimdinma",
    role: "Cyber Security & Infrastructure Lead",
    bio: "Secures networks, conducts penetration tests, and manages cloud infrastructure to protect software deployments from vulnerabilities.",
    silhouette: "buzz",
  }
];

const communityChannels = [
  {
    id: "discord",
    name: "Discord Server",
    actionText: "Join Discord Server",
    url: "https://discord.gg/GmjaywcuR",
    description: "For technical resources and deep system collaboration.",
    shapeClass: "rounded-tl-[60px] md:col-span-2",
    aria: "Join our community on Discord"
  },
  {
    id: "telegram",
    name: "Telegram Channel",
    actionText: "Join Telegram Channel",
    url: "https://t.me/+wheeMpmqZ1RlOTA0",
    description: "For instant engineering updates and network announcements.",
    shapeClass: "rounded-br-[60px]",
    aria: "Join our community on Telegram"
  },
  {
    id: "whatsapp",
    name: "WhatsApp Group",
    actionText: "Join WhatsApp Group",
    url: "https://chat.whatsapp.com/FFOjQjJ650LHaWqCI34WBL",
    description: "For fast local developer chats and community connection.",
    shapeClass: "rounded-tr-[40px] rounded-bl-[40px]",
    aria: "Join our community on WhatsApp"
  }
];

const Silhouette = ({ variant, color }) => {
  switch (variant) {
    case "twists":
      // short twists/locs, close to the scalp
      return (
        <svg width="72" height="72" viewBox="0 0 84 84">
          <circle cx="42" cy="32" r="18" fill={color} />
          <line x1="33" y1="16" x2="31" y2="25" stroke={color} strokeWidth="3" strokeLinecap="round" />
          <line x1="42" y1="14" x2="41" y2="24" stroke={color} strokeWidth="3" strokeLinecap="round" />
          <line x1="51" y1="16" x2="53" y2="25" stroke={color} strokeWidth="3" strokeLinecap="round" />
          <path d="M8 72 Q42 36 76 72 L76 80 Q42 88 8 80 Z" fill={color} />
        </svg>
      );
    case "structured":
      // flat-top structured cut
      return (
        <svg width="72" height="72" viewBox="0 0 84 84">
          <rect x="24" y="14" width="36" height="32" rx="8" fill={color} />
          <path d="M8 72 Q42 36 76 72 L76 80 Q42 88 8 80 Z" fill={color} />
        </svg>
      );
    case "curly":
      // short, tight curls close to the scalp
      return (
        <svg width="72" height="72" viewBox="0 0 84 84">
          <circle cx="42" cy="33" r="18" fill={color} />
          <circle cx="29" cy="21" r="5.5" fill={color} />
          <circle cx="38" cy="16" r="5.5" fill={color} />
          <circle cx="47" cy="16" r="5.5" fill={color} />
          <circle cx="56" cy="21" r="5.5" fill={color} />
          <path d="M8 72 Q42 36 76 72 L76 80 Q42 88 8 80 Z" fill={color} />
        </svg>
      );
    case "buzz":
      // buzz cut / defined hairline, minimal
      return (
        <svg width="72" height="72" viewBox="0 0 84 84">
          <circle cx="42" cy="32" r="18" fill={color} />
          <path d="M25 24 A18 18 0 0 1 59 24" fill="none" stroke={color} strokeWidth="3" opacity="0.55" />
          <path d="M8 72 Q42 36 76 72 L76 80 Q42 88 8 80 Z" fill={color} />
        </svg>
      );
    default:
      return (
        <svg width="72" height="72" viewBox="0 0 84 84">
          <circle cx="42" cy="32" r="18" fill={color} />
          <path d="M8 72 Q42 36 76 72 L76 80 Q42 88 8 80 Z" fill={color} />
        </svg>
      );
  }
};

const BentoMemberCard = ({ m, index, t }) => {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      className={`bento-card bento-card-${index}`}
      style={{
        background: t.bg,
        border: `1px solid ${h ? t.borderHov : t.border}`,
        overflow: "hidden",
        position: "relative",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        display: "flex",
        flexDirection: "column",
        transform: h ? "scale(1.02)" : "scale(1)",
        boxShadow: h ? "0 12px 36px rgba(111, 91, 234, 0.08)" : "none",
        cursor: "default"
      }}
    >
      {/* Top half: silhouette avatar */}
      <div style={{ 
        height: "13rem", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        background: t.bg,
        borderBottom: `1px solid ${t.border}`,
        padding: "1.5rem"
      }}>
        <div 
          style={{
            width: "8rem",
            height: "8rem",
            borderRadius: "50%",
            background: t.bgRaised,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: `1px solid ${h ? t.borderHov : t.border}`,
            transition: "border-color 0.3s ease, transform 0.3s ease",
            transform: h ? "scale(1.03)" : "scale(1)",
          }}
        >
          <Silhouette variant={m.silhouette} color={h ? t.purple : t.accent} />
        </div>
      </div>

      {/* Card text content */}
      <div style={{ padding: "2rem 1.5rem", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", transform: h ? "translateY(-2px)" : "translateY(0)", transition: "transform 0.3s ease" }}>
        <div>
          <div style={{ fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: t.purple, fontFamily: "'Inter',sans-serif", marginBottom: "0.5em" }}>{m.role}</div>
          <h3 style={{ fontFamily: "'Sora',sans-serif", fontSize: "1.125rem", fontWeight: 700, color: t.text, marginBottom: "0.5em", letterSpacing: "-0.02em", margin: "0 0 0.5em 0" }}>{m.name}</h3>
          <p style={{ fontSize: "0.875rem", color: t.textSub, lineHeight: 1.74, fontFamily: "'Inter',sans-serif", margin: 0 }}>{m.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default function AboutPage({ t }) {
  const [hoveredChannel, setHoveredChannel] = useState(null);

  return (
    <main id="main-content" style={{ background: t.bg, color: t.text, minHeight: "100vh" }}>
      
      {/* SECTION 1: The Inception Header */}
      <section id="about-intro" style={{ padding: "clamp(6rem, 10vw, 8rem) 0 4rem 0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 clamp(1.25rem, 4vw, 2.5rem)" }}>
          <div style={{ maxWidth: "48rem" }}>
            <Label t={t}>Our Company</Label>
            <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", fontWeight: 600, lineHeight: 1.05, letterSpacing: "-0.02em", color: t.text, margin: "1.5rem 0" }}>
              Built for system performance.
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.125rem", color: t.textSub, lineHeight: 1.8, margin: 0 }}>
              GroTec started in 2023 with a clear mission: to build robust, custom web platforms, native mobile applications, and highly secure digital infrastructure for African enterprises. We remove the noise, focus on deep engineering, and scale businesses with clean code.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: The Corporate Hierarchy Bento Grid */}
      <section id="about-team" style={{ padding: "4rem 0", borderTop: `1px solid ${t.border}` }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 clamp(1.25rem, 4vw, 2.5rem)" }}>
          <div style={{ marginBottom: "3.5rem" }}>
            <span style={{ fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: t.purple, fontFamily: "'Inter',sans-serif" }}>Leadership</span>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "2rem", fontWeight: 600, letterSpacing: "-0.01em", color: t.text, marginTop: "0.5rem", marginBottom: "0" }}>
              The minds behind GroTec
            </h2>
          </div>

          <div className="bento-grid">
            {teamMembers.map((m, i) => (
              <BentoMemberCard key={m.id} m={m} index={i} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: The Ecosystem & Talent Engine Pipeline */}
      <section id="about-advantage" style={{ padding: "6rem 0", borderTop: `1px solid ${t.border}` }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 clamp(1.25rem, 4vw, 2.5rem)" }}>
          <div style={{ maxWidth: "48rem" }}>
            <span style={{ fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: t.purple, fontFamily: "'Inter',sans-serif" }}>Advantage</span>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, letterSpacing: "-0.02em", color: t.text, marginTop: "0.5rem", marginBottom: "1.5rem" }}>
              Our unfair advantage is our people.
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.125rem", color: t.textSub, lineHeight: 1.8, margin: 0 }}>
              We don't operate in a vacuum. GroTec sits at the center of a thriving tech ecosystem. By running active developer networks, deep-dive DevTalks, and local tech seminars, we maintain direct access to a vetted talent pipeline. When your project demands massive scale, we activate our community network to deploy additional engineered hands instantly.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: Community Links Active Funnel */}
      <section id="about-community" style={{ padding: "0 0 6rem 0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 clamp(1.25rem, 4vw, 2.5rem)" }}>
          <div className="ecosystem-grid">
            {communityChannels.map((channel) => {
              const isHovered = hoveredChannel === channel.id;
              return (
                <a
                  key={channel.id}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={channel.aria}
                  onMouseEnter={() => setHoveredChannel(channel.id)}
                  onMouseLeave={() => setHoveredChannel(null)}
                  className={`ecosystem-card ecosystem-card-${channel.id} ${channel.shapeClass}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "2.5rem 2.25rem",
                    background: t.bg,
                    border: `1px solid ${isHovered ? t.borderHov : t.border}`,
                    textDecoration: "none",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    transform: isHovered ? "scale(1.02) translateY(-2px)" : "scale(1) translateY(0)",
                    boxShadow: isHovered ? "0 10px 30px rgba(0, 0, 0, 0.4)" : "none",
                    cursor: "pointer",
                    overflow: "hidden"
                  }}
                >
                  <div>
                    <div style={{
                      fontSize: "0.625rem",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: t.purple,
                      fontFamily: "'Inter',sans-serif",
                      marginBottom: "1rem"
                    }}>
                      {channel.name}
                    </div>
                    <p style={{
                      fontSize: "0.9375rem",
                      color: t.textSub,
                      lineHeight: 1.68,
                      fontFamily: "'Inter',sans-serif",
                      margin: "0 0 2.5rem 0"
                    }}>
                      {channel.description}
                    </p>
                  </div>
                  
                  <div style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5625rem",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: isHovered ? t.text : t.textDim,
                    fontFamily: "'Inter',sans-serif",
                    transition: "color 0.2s ease"
                  }}>
                    {channel.actionText}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{
                      transform: isHovered ? "translateX(3px)" : "translateX(0)",
                      transition: "transform 0.2s ease"
                    }}>
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}
