import { useState } from "react";
import { Label } from "./shared";

const teamMembers = [
  {
    id: "michael-orji",
    name: "Michael Orji Chukwuemeka",
    role: "CEO / Co-founder",
    bio: "Leads enterprise business strategy and helps African companies grow using high-performance digital tools.",
    shapeClass: "rounded-tr-[80px] rounded-bl-[40px] border border-zinc-80px",
    frameStyle: "Wide structural card layout."
  },
  {
    id: "chidalu-udeobi",
    name: "Chidalu Udeobi",
    role: "Director / Co-founder",
    bio: "Manages day-to-day operations and ensures our software products solve real, physical business challenges.",
    shapeClass: "rounded-tl-[120px] rounded-br-[60px]",
    frameStyle: "Standard vertical card layout."
  },
  {
    id: "ikedinachi-ogbonne",
    name: "Ikedinachi Ogbonne",
    role: "Project Manager / Founder",
    bio: "Coordinates agile engineering workflows, sets delivery timelines, and guarantees technical project execution.",
    shapeClass: "border border-zinc-800 rounded-none",
    frameStyle: "Standard vertical card layout."
  },
  {
    id: "kamsiyochukwu-ogbodo",
    name: "Kamsiyochukwu Ogbodo",
    role: "Engineering / Co-founder",
    bio: "Architects heavy backend software systems, optimizes database designs, and deploys scalable cloud server setups.",
    shapeClass: "rounded-full aspect-square border border-zinc-800",
    frameStyle: "Contrasting layout frame."
  },
  {
    id: "francis-chimdinma",
    name: "Agbara Francis Chimdinma",
    role: "Cyber Security & Infrastructure Lead / Co-founder",
    bio: "Secures networks, conducts penetration tests, and manages cloud infrastructure to protect software deployments from vulnerabilities.",
    shapeClass: "rounded-br-[100px]",
    frameStyle: "Wide structural base card layout."
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

const BentoMemberCard = ({ m, index }) => {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      className={`bento-card bento-card-${index}`}
      style={{
        background: "#0a0a0c",
        border: `1px solid ${h ? "#ffffff" : "#27272a"}`,
        overflow: "hidden",
        position: "relative",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        display: "flex",
        flexDirection: "column",
        transform: h ? "scale(1.02)" : "scale(1)",
        boxShadow: h ? "0 12px 36px rgba(255, 255, 255, 0.04)" : "none",
        cursor: "default"
      }}
    >
      {/* Top half: Styled mockup vector placeholder box matching shapeClass */}
      <div style={{ 
        height: "13rem", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        background: "#000000",
        borderBottom: "1px solid #1a1a1e",
        padding: "1.5rem"
      }}>
        <div 
          className={m.shapeClass}
          style={{
            width: "8rem",
            height: "8rem",
            background: "#121214",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "0.875rem",
            position: "relative",
            overflow: "hidden",
            transition: "border-color 0.3s ease",
            borderColor: h ? "#ffffff" : "#27272a",
          }}
        >
          {/* Subtle grid pattern */}
          <div style={{ position: "absolute", inset: 0, opacity: 0.08, backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "12px 12px" }} />
          
          {/* Mock UI window headers */}
          <div style={{ display: "flex", gap: "5px", zIndex: 2 }}>
            <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#27272a" }} />
            <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#27272a" }} />
            <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#27272a" }} />
          </div>
          
          {/* Mock layout code lines */}
          <div style={{ display: "flex", flexDirection: "column", gap: "5px", zIndex: 2 }}>
            <div style={{ height: "6px", width: "70%", background: "#27272a", borderRadius: "1px" }} />
            <div style={{ height: "4px", width: "45%", background: "#1a1a1e", borderRadius: "1px" }} />
            <div style={{ height: "4px", width: "55%", background: "#1a1a1e", borderRadius: "1px" }} />
          </div>
        </div>
      </div>

      {/* Card text content */}
      <div style={{ padding: "2rem 1.5rem", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", transform: h ? "translateY(-2px)" : "translateY(0)", transition: "transform 0.3s ease" }}>
        <div>
          <div style={{ fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6b5ce7", fontFamily: "'Inter',sans-serif", marginBottom: "0.5em" }}>{m.role}</div>
          <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1.125rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5em", letterSpacing: "-0.02em", margin: "0 0 0.5em 0" }}>{m.name}</h3>
          <p style={{ fontSize: "0.875rem", color: "#a3a3a3", lineHeight: 1.74, fontFamily: "'Inter',sans-serif", margin: 0 }}>{m.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default function AboutPage({ t }) {
  const [hoveredChannel, setHoveredChannel] = useState(null);

  return (
    <main id="main-content" style={{ background: "#000000", color: "#ffffff", minHeight: "100vh" }}>
      
      {/* SECTION 1: The Inception Header */}
      <section id="about-intro" style={{ padding: "clamp(6rem, 10vw, 8rem) 0 4rem 0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 clamp(1.25rem, 4vw, 2.5rem)" }}>
          <div style={{ maxWidth: "48rem" }}>
            <Label t={t}>Our Company</Label>
            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", fontWeight: 900, lineHeight: 0.96, letterSpacing: "-0.04em", color: "#ffffff", textTransform: "uppercase", margin: "1.5rem 0" }}>
              Built for system performance.
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.125rem", color: "#a3a3a3", lineHeight: 1.8, margin: 0 }}>
              GroTec started in 2023 with a clear mission: to build robust, custom web platforms, native mobile applications, and highly secure digital infrastructure for African enterprises. We remove the noise, focus on deep engineering, and scale businesses with clean code.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: The Corporate Hierarchy Bento Grid */}
      <section id="about-team" style={{ padding: "4rem 0", borderTop: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 clamp(1.25rem, 4vw, 2.5rem)" }}>
          <div style={{ marginBottom: "3.5rem" }}>
            <span style={{ fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6b5ce7", fontFamily: "'Inter',sans-serif" }}>Leadership</span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#ffffff", marginTop: "0.5rem", marginBottom: "0", textTransform: "uppercase" }}>
              The Minds Behind GroTec
            </h2>
          </div>

          <div className="bento-grid">
            {teamMembers.map((m, i) => (
              <BentoMemberCard key={m.id} m={m} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: The Ecosystem & Talent Engine Pipeline */}
      <section id="about-advantage" style={{ padding: "6rem 0", borderTop: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 clamp(1.25rem, 4vw, 2.5rem)" }}>
          <div style={{ maxWidth: "48rem" }}>
            <span style={{ fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6b5ce7", fontFamily: "'Inter',sans-serif" }}>Advantage</span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "#ffffff", marginTop: "0.5rem", marginBottom: "1.5rem", textTransform: "uppercase" }}>
              Our unfair advantage is our people.
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.125rem", color: "#a3a3a3", lineHeight: 1.8, margin: 0 }}>
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
                    background: "#000000",
                    border: `1px solid ${isHovered ? "#ffffff" : "#222222"}`,
                    textDecoration: "none",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    transform: isHovered ? "scale(1.02) translateY(-2px)" : "scale(1) translateY(0)",
                    boxShadow: isHovered ? "0 10px 30px rgba(0, 0, 0, 0.7)" : "none",
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
                      color: "#6b5ce7",
                      fontFamily: "'Inter',sans-serif",
                      marginBottom: "1rem"
                    }}>
                      {channel.name}
                    </div>
                    <p style={{
                      fontSize: "0.9375rem",
                      color: "#a3a3a3",
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
                    color: isHovered ? "#ffffff" : "#a3a3a3",
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
