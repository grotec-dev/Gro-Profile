import { useState } from "react";
import { SectionHeader } from "./shared";

export default function FeaturedBuilds({ t, setPage }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const builds = [
    {
      id: "axiom-core",
      title: "Axiom Core",
      subtitle: "A decentralized state registry system built with FastAPI.",
      role: "System Architecture & API",
      layoutClass: "project-card-wide",
      shapeClass: "project-leaf-shape",
      bgAsset: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "trackskill",
      title: "TrackSkill",
      subtitle: "A technical project management and skill tracking platform.",
      role: "Frontend & UI Design",
      layoutClass: "project-card-tall",
      shapeClass: "project-sharp-shape",
      bgAsset: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <section id="work-preview" style={{ background: t.bgRaised, borderTop: `1px solid ${t.border}`, padding: "var(--fluid-section) 0" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 clamp(1.25rem, 4vw, 2.5rem)" }}>
        <SectionHeader
          t={t}
          align="left"
          label="Featured Builds"
          title="Digital solutions we have designed and launched."
          subtitle="Explore some of our key corporate applications built to solve complex organizational challenges."
        />
        
        <div className="project-bento-grid" style={{ marginTop: "3rem" }}>
          {builds.map((build) => {
            const isHovered = hoveredCard === build.id;
            return (
              <div
                key={build.id}
                onMouseEnter={() => setHoveredCard(build.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setPage("portfolio")}
                className={`scroll-fade ${build.layoutClass}`}
                style={{
                  background: t.bg,
                  border: `1px solid ${isHovered ? t.purple : t.border}`,
                  overflow: "hidden",
                  position: "relative",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: isHovered ? "scale(1.015)" : "scale(1)",
                  boxShadow: isHovered ? "0 12px 36px rgba(0, 0, 0, 0.12)" : "none",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "24rem"
                }}
              >
                {/* Background image overlay */}
                <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#000" }}>
                  <img
                    src={build.bgAsset}
                    alt={build.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: isHovered ? 0.35 : 0.25,
                      transition: "transform 0.5s ease, opacity 0.5s ease",
                      transform: isHovered ? "scale(1.06)" : "scale(1)",
                    }}
                  />
                </div>

                {/* Content Overlay */}
                <div
                  className={build.shapeClass}
                  style={{
                    position: "relative",
                    zIndex: 2,
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "2.5rem 2rem",
                    background: "rgba(0,0,0,0.1)",
                    borderRadius: "inherit"
                  }}
                >
                  <div>
                    <span style={{
                      fontSize: "0.625rem",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: t.purple,
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      {build.role}
                    </span>
                    <h3 style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: "#fff",
                      marginTop: "0.5rem",
                      marginBottom: "0.5rem",
                      letterSpacing: "-0.03em"
                    }}>
                      {build.title}
                    </h3>
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.75)",
                      lineHeight: 1.6,
                      maxWidth: "28rem",
                      margin: 0
                    }}>
                      {build.subtitle}
                    </p>
                  </div>

                  <div style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: t.purple,
                    fontFamily: "'Inter', sans-serif",
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? "translateY(0)" : "translateY(4px)",
                    transition: "opacity 0.25s ease, transform 0.25s ease"
                  }}>
                    View Case Study
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
