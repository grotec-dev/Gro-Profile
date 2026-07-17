import { useState } from "react";
import { SectionHeader, Btn } from "./shared";
import logoLight from "../assets/grotec-logo-light.png";
import logoDark from "../assets/grotec-logo-dark.png";

/* ─── SOCIAL LINK ───────────────────────────────────────────────────────────── */
const SocialLink = ({ s, t }) => {
  const [h, setH] = useState(false);
  return (
    <a href={s.href} target="_blank" rel="noopener noreferrer"
      aria-label={s.label}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{width: "2.125rem", height: "2.125rem", border: `1px solid ${h ? t.borderHov : t.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: h ? t.purple : t.textDim, textDecoration: "none", transition: "all 0.2s ease", background: h ? t.bgHover : "transparent", borderRadius: "var(--radius-sm)"}}
    >
      {s.fill
        ? <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d={s.path} /></svg>
        : <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={s.path} /></svg>
      }
    </a>
  );
};

/* ─── CTA BANNER ────────────────────────────────────────────────────────────── */
export function CTABanner({t, onContactClick}) {
  return (
    <section id="contact" style={{background:t.bg,borderTop:`1px solid ${t.border}`,padding:"var(--fluid-section) 0"}}>
      <div style={{maxWidth:"80rem",margin:"0 auto",padding:"0 clamp(1.25rem,4vw,2.5rem)"}} className="scroll-fade">
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(22rem, 100%), 1fr))",gap:"2.5rem",alignItems:"end"}}>
          <SectionHeader
            t={t}
            label="Start a Project"
            title="Ready to build something your customers will love?"
          />
          <div style={{display:"flex",flexDirection:"column",gap:"0.75rem",alignItems:"flex-end"}}>
            <Btn t={t} onClick={() => onContactClick("Development", "")} primary>
               Let's Build Something
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Btn>
            <span style={{fontSize:"0.75rem",color:t.textDim,letterSpacing:"0.04em",fontFamily:"'Inter',sans-serif"}}>hello@grotec.dev</span>
          </div>
        </div>

        <div style={{marginTop:"4.5rem",paddingTop:"2rem",borderTop:`1px solid ${t.border}`,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem"}}>
          <span style={{fontSize:"0.6875rem",color:t.textDimmer,letterSpacing:"0.1em",textTransform:"uppercase",fontFamily:"'Inter',sans-serif"}}>
            Enugu, Nigeria · Built for Africa · Remote-Friendly Worldwide
          </span>
          <div style={{display:"flex",gap:"0.375rem"}}>
            {[
              {href:"https://github.com/grotec-dev",     path:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",  fill:true, label:"GroTec on GitHub"},
              {href:"https://instagram.com/grotec.dev", path:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z", fill:true, label:"GroTec on Instagram"},
              {href:"https://x.com/Grotecdev",          path:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z", fill:true, label:"GroTec on X"},
              {href:"mailto:hello@grotec.dev",       path:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6", fill:false, label:"Email GroTec"},
            ].map((s, i) => (
              <SocialLink key={i} s={s} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER LINK ───────────────────────────────────────────────────────────── */
const FooterLink = ({ l, href, onClick }) => {
  const [h, setH] = useState(false);
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        fontSize: "0.875rem",
        color: h ? "#F7F7FA" : "#A5A5B3",
        textDecoration: "none",
        transition: "color 0.2s ease-out",
        fontFamily: "'Inter', sans-serif",
        cursor: "pointer",
        outline: "none"
      }}
      className="footer-nav-link transition-colors duration-200"
    >
      {l}
    </a>
  );
};

/* ─── INITIATE ACTION LINK ─────────────────────────────────────────────────── */
const ActionLink = ({ onClick }) => {
  const [h, setH] = useState(false);
  return (
    <span
      role="button"
      tabIndex={0}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onClick(); }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      className="cursor-pointer select-none"
      style={{
        display: "inline-block",
        fontSize: "1rem",
        fontWeight: 700,
        color: "#F7F7FA",
        textDecoration: "none",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        userSelect: "none"
      }}
    >
      Initiate Build →
      <span style={{
        position: "absolute",
        bottom: "-4px",
        left: 0,
        width: "100%",
        height: "1px",
        background: "#F7F7FA",
        transform: h ? "scaleX(1) translateX(3px)" : "scaleX(0) translateX(0)",
        transformOrigin: "left",
        transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)"
      }} />
    </span>
  );
};

/* ─── FOOTER ────────────────────────────────────────────────────────────────── */
export function Footer({ setPage, openContact }) {
  const colHeaderStyle = {
    fontSize: "0.6875rem",
    fontWeight: 700,
    color: "#F7F7FA",
    fontFamily: "'Sora', sans-serif",
    textTransform: "uppercase",
    letterSpacing: "0.15em"
  };

  return (
    <footer
      className="bg-[#0D0D12] border-t border-zinc-900 w-full h-auto min-h-0"
      role="contentinfo"
      style={{ background: "#0D0D12", borderTop: "1px solid #2A2A36" }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "clamp(4rem, 8vw, 6rem) clamp(1.25rem, 4vw, 2.5rem) clamp(4rem, 6vw, 4rem)" }}>
        
        {/* Generous 4-Column Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(15rem, 100%), 1fr))", gap: "3.5rem", marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
          
          {/* COLUMN 1: BRAND & COMPANY */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); setPage("home"); }}
              style={{ display: "inline-block", lineHeight: 0, outline: "none" }}
              aria-label="GroTec — Return to home"
            >
              <img
                src={logoDark}
                alt="GroTec"
                loading="lazy"
                style={{
                  height: "2rem",
                  width: "auto",
                  display: "block",
                  filter: "brightness(1)",
                  maxWidth: "10rem",
                }}
              />
            </a>
            <p style={{ fontSize: "0.875rem", color: "#A5A5B3", lineHeight: 1.7, fontFamily: "'Inter', sans-serif", margin: "0 0 0.5rem 0", maxWidth: "16rem" }}>
              Architecting elite software systems, brand design, and secure infrastructure. Established 2023.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div style={colHeaderStyle}>Company</div>
              <FooterLink l="About Us" href="#about" onClick={(e) => { e.preventDefault(); setPage("about"); }} />
              <FooterLink l="Join the Team" href="#" onClick={(e) => { e.preventDefault(); }} />
            </div>
          </div>

          {/* COLUMN 2: SERVICES */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={colHeaderStyle}>Services</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <FooterLink l="Application Engineering" href="#services" onClick={(e) => { e.preventDefault(); setPage("services"); }} />
              <FooterLink l="Brand Design" href="#services" onClick={(e) => { e.preventDefault(); setPage("services"); }} />
              <FooterLink l="Technical Consulting" href="#services" onClick={(e) => { e.preventDefault(); setPage("services"); }} />
              <FooterLink l="Cloud DevOps & Security" href="#services" onClick={(e) => { e.preventDefault(); setPage("services"); }} />
            </div>
          </div>

          {/* COLUMN 3: PRODUCTS */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={colHeaderStyle}>Products</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <FooterLink l="Axiom Core" href="#portfolio" onClick={(e) => { e.preventDefault(); setPage("portfolio"); }} />
              <FooterLink l="TrackSkill" href="#portfolio" onClick={(e) => { e.preventDefault(); setPage("portfolio"); }} />
            </div>
          </div>

          {/* COLUMN 4: FOLLOW US */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={colHeaderStyle}>Follow Us</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <FooterLink l="X (Twitter)" href="https://x.com/Grotecdev" />
              <FooterLink l="LinkedIn" href="https://linkedin.com" />
              <FooterLink l="Instagram" href="https://instagram.com/grotec.dev" />
            </div>
            <div style={{ marginTop: "0.5rem" }}>
              <ActionLink onClick={openContact} />
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: LEGALITY & SEMANTICS */}
        <div
          className="border-t border-zinc-900 mt-12 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{ borderTop: "1px solid #2A2A36", marginTop: "3rem", paddingTop: "2rem" }}
        >
          <span
            className="text-sm text-zinc-500"
            style={{ fontSize: "0.75rem", color: "#A5A5B3", fontFamily: "'Inter', sans-serif" }}
          >
            © 2026 GroTec Studio. All rights reserved.
          </span>
          <span
            className="text-sm text-zinc-500"
            style={{ fontSize: "0.75rem", color: "#A5A5B3", fontFamily: "'Inter', sans-serif" }}
          >
            Engineered in Nigeria.
          </span>
        </div>

      </div>
    </footer>
  );
}
