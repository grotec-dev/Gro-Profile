import { useState } from "react";
import { SectionHeader, Btn } from "./shared";
import logoLight from "../assets/grotec-logo-light.png";
import logoDark from "../assets/grotec-logo-dark.png";

/* ─── SOCIAL LINK ───────────────────────────────────────────────────────────── */
const SocialLink = ({ s, t }) => {
  const [h, setH] = useState(false);
  return (
    <a href={s.href} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{width: "2.125rem", height: "2.125rem", border: `1px solid ${h ? t.borderHov : t.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: h ? t.purple : t.textDim, textDecoration: "none", transition: "all 0.2s ease", background: h ? t.bgHover : "transparent", borderRadius: 0}}
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
              {href:"https://github.com/grotec-dev",     path:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",  fill:true},
              {href:"https://instagram.com/grotec.dev", path:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z", fill:true},
              {href:"https://x.com/Grotecdev",          path:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z", fill:true},
              {href:"mailto:hello@grotec.dev",       path:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6", fill:false},
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
const FooterLink = ({ l, href, t, onClick }) => {
  const [h, setH] = useState(false);
  const isExternal = href.startsWith("http") || href.startsWith("mailto");
  return (
    <a href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}
      onClick={onClick}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{fontSize: "0.84375rem", color: h ? t.text : t.textSub, textDecoration: "none", transition: "color 0.18s ease", fontFamily: "'Inter',sans-serif", cursor: "pointer"}}
    >
      {l}
    </a>
  );
};

/* ─── FOOTER ────────────────────────────────────────────────────────────────── */
export function Footer({t, dark, setPage}) {
  const cols = [
    {h:"Services",  items:[["Custom Development","#capabilities"],["System Architecture","#capabilities"],["Product Strategy","#capabilities"],["Cloud & DevOps","#capabilities"],["Security & Infrastructure","#capabilities"],["AI Business Automation","#capabilities"]]},
    {h:"Company",   items:[["Capabilities","#capabilities"],["Our Work","#work"],["Community","#community"],["Our Team","#team"],["About Us","#about"],["Privacy Policy", "#privacy"],["Contact","mailto:hello@grotec.dev"]]},
    {h:"Connect",   items:[["GitHub","https://github.com/grotec-dev"],["Instagram","https://instagram.com/grotec.dev"],["X / Twitter","https://x.com/Grotecdev"],["Email Us","mailto:hello@grotec.dev"]]},
  ];
  return (
    <footer style={{background: dark ? "#090705" : "#F0EBE4",borderTop:`1px solid ${t.border}`}}>
      <div style={{maxWidth:"80rem",margin:"0 auto",padding:"clamp(2.5rem,6vw,4rem) clamp(1.25rem,4vw,2.5rem) 2.5rem"}}>
        <div className="gt-footer" style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:"clamp(1.5rem,4vw,3rem)",marginBottom:"clamp(2rem,4vw,3.5rem)"}}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:"0.625rem",marginBottom:"1.25rem"}}>
              <img src={dark ? logoDark : logoLight} alt="GroTec" style={{height:"2rem",display:"block"}}/>
            </div>
            <p style={{fontSize:"0.84375rem",color:t.textSub,lineHeight:1.78,maxWidth:"15rem",marginBottom:"1.75rem",fontFamily:"'Inter',sans-serif"}}>A technology agency from Enugu, Nigeria. We build digital products for growing businesses in Africa and around the world.</p>
            <div style={{fontSize:"0.6875rem",color:t.textDimmer,letterSpacing:"0.1em",textTransform:"uppercase",fontFamily:"'Inter',sans-serif"}}>Grow · Build · Together</div>
          </div>
          <div className="gt-footer-links">
            {cols.map((col,i)=>(
              <div key={i}>
                <div style={{fontSize:"0.625rem",fontWeight:700,letterSpacing:"0.18em",textTransform:"uppercase",color:t.textDim,marginBottom:"1.125rem",paddingBottom:"0.875rem",borderBottom:`1px solid ${t.border}`,fontFamily:"'Inter',sans-serif"}}>{col.h}</div>
                <div style={{display:"flex",flexDirection:"column",gap:"0.75rem"}}>
                  {col.items.map(([l, href], j) => (
                    <FooterLink key={j} l={l} href={href} t={t} onClick={
                      l === "Privacy Policy" ? (e) => { e.preventDefault(); setPage("privacy"); window.scrollTo(0,0); }
                      : l === "About Us" ? (e) => { e.preventDefault(); const el = document.querySelector("#about"); if (el) el.scrollIntoView({behavior:"smooth"}); }
                      : undefined
                    } />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{paddingTop:"1.75rem",borderTop:`1px solid ${t.border}`,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"0.75rem"}}>
          <span style={{fontSize:"0.6875rem",color:t.textDimmer,letterSpacing:"0.06em",fontFamily:"'Inter',sans-serif"}}>© {new Date().getFullYear()} GroTec. All rights reserved. Registered in Nigeria.</span>
          <span style={{fontSize:"0.6875rem",color:t.textDimmer,letterSpacing:"0.1em",textTransform:"uppercase",fontFamily:"'Inter',sans-serif"}}>Enugu, Nigeria · Built for Africa · Remote-Friendly Worldwide</span>
        </div>
      </div>
    </footer>
  );
}
