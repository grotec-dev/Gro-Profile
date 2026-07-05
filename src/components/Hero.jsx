import { useState, useEffect } from "react";
import { Label, Btn } from "./shared";

/* ─── HERO ──────────────────────────────────────────────────────────────────── */
export default function Hero({t, setPage, openContact}) {
  const [vis,setVis] = useState(false);
  useEffect(()=>{const id=setTimeout(()=>setVis(true),80);return()=>clearTimeout(id);},[]);

  const fade = (delay, y=18) => ({
    opacity: vis ? 1 : 0,
    transform: vis ? `translateY(0px)` : `translateY(${y}px)`,
    transition: `opacity 0.75s ${delay}s var(--ease-antigravity), transform 0.75s ${delay}s var(--ease-antigravity)`,
  });

  return (
    <section id="hero" style={{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",background:t.bg,padding:"clamp(5rem,12vw,9rem) 0 clamp(3rem,6vw,5rem)",position:"relative",overflow:"hidden"}}>


      <div style={{maxWidth:"80rem",margin:"0 auto",padding:"0 clamp(1.25rem, 4vw, 2.5rem)",width:"100%",position:"relative",zIndex:2}}>
        <div style={{...fade(0.05),marginBottom:"clamp(1.5rem, 3vw, 2.5rem)"}}>
          <Label t={t}>Enugu · Nigeria · Africa & Beyond</Label>
        </div>

        <div style={{...fade(0.14),marginBottom:0,maxWidth:"65rem"}}>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(2.75rem, 7.5vw, 6.5rem)",fontWeight:700,lineHeight:0.95,letterSpacing:"0.04em",color:"#ffffff",margin:0,textTransform:"uppercase"}}>
            We build high-performance apps for African enterprises.
          </h1>
        </div>

        <div style={{...fade(0.20),height:"1px",background:t.border,margin:"clamp(1.5rem,3vw,2.25rem) 0 clamp(1.5rem,3vw,2.25rem)",maxWidth:"65rem"}}/>

        <div style={{...fade(0.26),marginBottom:"clamp(2rem,4vw,3rem)",maxWidth:"42.5rem"}}>
          <p style={{fontFamily:"'Inter',sans-serif",fontSize:"1.125rem",color:t.textSub,lineHeight:1.6,margin:0}}>
            Premium custom software, mobile apps, and secure systems built by a dedicated team of tech experts since 2023.
          </p>
        </div>

        <div style={{...fade(0.32),display:"flex",gap:"0.75rem",flexWrap:"wrap",alignItems:"center",marginBottom:"clamp(3.5rem,6vw,5.5rem)"}}>
          <button
            onClick={() => openContact(true)}
            className="cursor-pointer select-none"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5625rem",
              fontFamily: "'Inter',sans-serif", fontSize: "0.8125rem", fontWeight: 600,
              letterSpacing: "0.07em", textTransform: "uppercase", borderRadius: 0,
              padding: "1rem 2rem", border: "none",
              background: t.purple, color: "#fff",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            Partner With Us
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
          
          <Btn t={t} onClick={(e) => {
            e.preventDefault();
            const el = document.querySelector("#community-hook");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}>
            Explore Our Ecosystem
          </Btn>
        </div>

        <div className="mini-stats-grid" style={{...fade(0.38)}}>
          {[["Est. 2023","Year Founded"],["8","Services"],["5","Software Builders"],["2","Own Products"]].map(([n,l],i)=>(
            <div key={i} style={{padding:"1.75rem 1rem", background: t.bg}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"var(--fluid-stat)",fontWeight:700,color:"#ffffff",letterSpacing:"0.03em",lineHeight:1}}>{n}</div>
              <div style={{fontSize:"var(--fluid-label)",color:t.textDim,marginTop:"0.375rem",letterSpacing:"0.1em",textTransform:"uppercase",fontFamily:"'Inter',sans-serif"}}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
