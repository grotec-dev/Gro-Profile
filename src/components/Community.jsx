import { useState } from "react";
import { SectionHeader } from "./shared";

const communityChannels = [
  {
    id: "discord",
    name: "Discord Server",
    actionText: "Join Discord",
    url: "https://discord.gg/GmjaywcuR",
    description: "For deep tech talks, project collaboration, and resource sharing.",
    shapeClass: "rounded-tl-[60px] md:col-span-2", // Wider block for visual asymmetry
    aria: "Join our community on Discord"
  },
  {
    id: "telegram",
    name: "Telegram Channel",
    actionText: "Join Telegram",
    url: "https://t.me/+wheeMpmqZ1RlOTA0",
    description: "For instant tech announcements, job updates, and quick networking.",
    shapeClass: "rounded-br-[60px]",
    aria: "Join our community on Telegram"
  },
  {
    id: "whatsapp",
    name: "WhatsApp Group",
    actionText: "Join WhatsApp",
    url: "https://chat.whatsapp.com/FFOjQjJ650LHaWqCI34WBL",
    description: "For everyday local community chats and direct tech connections.",
    shapeClass: "rounded-tr-[40px] rounded-bl-[40px]",
    aria: "Join our community on WhatsApp"
  }
];

export default function Community({ t }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="community-hook" style={{ background: t.bg, borderTop: `1px solid ${t.border}`, padding: "var(--fluid-section) 0" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 clamp(1.25rem, 4vw, 2.5rem)" }}>
        <SectionHeader
          t={t}
          align="split"
          label="Powered by a Thriving Community"
          title={<>Choose your platform.<br />Connect with creators.</>}
          subtitle="We don't just build apps; we run a massive network of developers, designers, and creators through DevTalks and local tech seminars. This gives us instant access to top-tier tech talent to scale your project seamlessly."
        />

        <div className="ecosystem-grid" style={{ marginTop: "3.5rem" }}>
          {communityChannels.map((channel) => {
            const isHovered = hoveredCard === channel.id;
            return (
              <a
                key={channel.id}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={channel.aria}
                onMouseEnter={() => setHoveredCard(channel.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`ecosystem-card ecosystem-card-${channel.id} ${channel.shapeClass}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "2.5rem 2.25rem",
                  background: isHovered ? t.bgHover : t.bgRaised,
                  border: `1px solid ${isHovered ? t.purple : t.border}`,
                  textDecoration: "none",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: isHovered ? "scale(1.02) translateY(-2px)" : "scale(1) translateY(0)",
                  boxShadow: isHovered ? "0 10px 30px rgba(0, 0, 0, 0.15)" : "none",
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
                  color: isHovered ? t.text : t.textSub,
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
  );
}
