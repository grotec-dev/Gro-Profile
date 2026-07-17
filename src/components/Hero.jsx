import { useState, useEffect } from "react";
import { Label, Btn } from "./shared";

/* ─── HERO ──────────────────────────────────────────────────────────────────── */
export default function Hero({t, setPage, openContact}) {
  const [vis,setVis] = useState(false);
  useEffect(()=>{const id=setTimeout(()=>setVis(true),80);return()=>clearTimeout(id);},[]);

  const fade = (delay, y=14) => ({
    opacity: vis ? 1 : 0,
    transform: vis ? `translateY(0px)` : `translateY(${y}px)`,
    transition: `opacity 0.75s ${delay}s var(--ease-antigravity), transform 0.75s ${delay}s var(--ease-antigravity)`,
  });

  return (
    <section id="hero" style={{minHeight:"92vh",display:"flex",flexDirection:"column",justifyContent:"center",background:t.bg,padding:"clamp(5rem,12vw,9rem) 0 clamp(3rem,6vw,5rem)",position:"relative",overflow:"hidden"}}>

      <div style={{maxWidth:"80rem",margin:"0 auto",padding:"0 clamp(1.25rem, 4vw, 2.5rem)",width:"100%",position:"relative",zIndex:2}}>
        <div style={{...fade(0.05),marginBottom:"clamp(1.5rem, 3vw, 2.25rem)"}}>
          <Label t={t}>Enugu · Nigeria · Africa & Beyond</Label>
        </div>

        <div style={{...fade(0.14),marginBottom:0,maxWidth:"52rem"}}>
          <h1 style={{fontFamily:"'Sora',sans-serif",fontSize:"var(--fluid-h1)",fontWeight:600,lineHeight:1.08,letterSpacing:"-0.02em",color:t.text,margin:0}}>
            We design and build digital products, web systems, and mobile experiences for growing businesses.
          </h1>
        </div>

        <div style={{...fade(0.22),marginTop:"clamp(1.5rem,3vw,2rem)",marginBottom:"clamp(2.5rem,4.5vw,3.5rem)",maxWidth:"36rem"}}>
          <p style={{fontFamily:"'Inter',sans-serif",fontSize:"1.0625rem",color:t.textSub,lineHeight:1.65,margin:0}}>
            GroTec is a multidisciplinary engineering studio. We handle strategy, brand systems, and production-grade software — under one roof, since 2023.
          </p>
        </div>

        <div style={{...fade(0.30),display:"flex",gap:"0.75rem",flexWrap:"wrap",alignItems:"center",marginBottom:"clamp(3.5rem,6vw,5.5rem)"}}>
          <Btn t={t} primary onClick={() => openContact(true)}>
            Book a Call
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Btn>

          <Btn t={t} onClick={() => setPage("portfolio")}>
            View Work
          </Btn>
        </div>

        <div className="mini-stats-grid" style={{...fade(0.36)}}>
          {[["2023","Founded"],["8","Core Services"],["5","Engineers"],["2","Own Products"]].map(([n,l],i)=>(
            <div key={i} style={{padding:"1.5rem 1rem", background: t.bg}}>
              <div style={{fontFamily:"'Sora',sans-serif",fontSize:"var(--fluid-stat)",fontWeight:600,color:t.text,letterSpacing:"-0.01em",lineHeight:1}}>{n}</div>
              <div style={{fontSize:"var(--fluid-label)",color:t.textDim,marginTop:"0.375rem",letterSpacing:"0.08em",textTransform:"uppercase",fontFamily:"'Inter',sans-serif"}}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
