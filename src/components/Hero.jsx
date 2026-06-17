import { useState, useEffect } from "react";
import { Label, Btn } from "./shared";

/* ─── HERO ──────────────────────────────────────────────────────────────────── */
export default function Hero({t, onContactClick}) {
  const [vis,setVis] = useState(false);
  useEffect(()=>{const id=setTimeout(()=>setVis(true),80);return()=>clearTimeout(id);},[]);

  const fade = (delay, y=18) => ({
    opacity: vis ? 1 : 0,
    transform: vis ? `translateY(0px)` : `translateY(${y}px)`,
    transition: `opacity 0.75s ${delay}s var(--ease-antigravity), transform 0.75s ${delay}s var(--ease-antigravity)`,
  });

  return (
    <section id="top" style={{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",background:t.bg,padding:"clamp(5rem,12vw,9rem) 0 clamp(3rem,6vw,5rem)",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,pointerEvents:"none"}}>
        <div style={{position:"absolute",top:0,bottom:0,left:"50%",width:"1px",background:t.border,opacity:0.5}}/>
        <div style={{position:"absolute",top:0,bottom:0,left:"25%",width:"1px",background:t.border,opacity:0.3}}/>
        <div style={{position:"absolute",top:0,bottom:0,left:"75%",width:"1px",background:t.border,opacity:0.3}}/>
        <div style={{position:"absolute",left:0,right:0,top:"40%",height:"1px",background:t.border,opacity:0.3}}/>
      </div>

      <div style={{maxWidth:"80rem",margin:"0 auto",padding:"0 clamp(1.25rem, 4vw, 2.5rem)",width:"100%",position:"relative",zIndex:2}}>
        <div style={{...fade(0.05),marginBottom:"clamp(1.5rem, 3vw, 2.5rem)"}}>
          <Label t={t}>Enugu · Nigeria · Africa & Beyond</Label>
        </div>

        <div style={{...fade(0.14),marginBottom:0}}>
          <h1 style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:"var(--fluid-h1)",fontWeight:700,lineHeight:0.92,letterSpacing:"-0.045em",color:t.text,margin:0}}>
            GRO<span style={{color:t.purple}}>TEC</span>
          </h1>
        </div>

        <div style={{...fade(0.20),height:"1px",background:t.border,margin:"clamp(1rem,2vw,1.75rem) 0 clamp(1.25rem,2.5vw,2rem)",maxWidth:"53.75rem"}}/>

        <div style={{...fade(0.26),marginBottom:"clamp(1.25rem,2.5vw,2.25rem)"}}>
          <p style={{fontFamily:"'Space Grotesk',sans-serif",fontWeight:500,fontSize:"clamp(0.7rem,1.4vw,1rem)",letterSpacing:"0.22em",textTransform:"uppercase",color:t.textSub,margin:0,maxWidth:"42.5rem", textAlign: "justify", hyphens: "auto", WebkitHyphens: "auto"}}>
            We build apps, websites, and digital tools for businesses across Nigeria and Africa.
          </p>
        </div>

        <div style={{...fade(0.32),maxWidth:"40rem",marginBottom:"clamp(2rem,5vw,3.25rem)"}}>
          <p style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:"var(--fluid-h2)",fontWeight:700,lineHeight:1.18,letterSpacing:"-0.028em",color:t.text,margin:0, textAlign: "justify", hyphens: "auto", WebkitHyphens: "auto"}}>
            Your idea. Built properly.<br/>
            <span style={{color:t.purple}}>Ready for real customers.</span>
          </p>
        </div>

        <div style={{...fade(0.38),display:"flex",gap:"0.75rem",flexWrap:"wrap",alignItems:"center",marginBottom:"clamp(3rem,6vw,5rem)"}}>
          <Btn t={t} onClick={() => onContactClick("Development", "")} primary>
            Let's Build Something
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Btn>
          <Btn t={t} href="#capabilities">View Capabilities</Btn>
        </div>

        {/* TODO: Confirm these stats are accurate — replace any that are not verifiable */}
        <div className="mini-stats-grid" style={{...fade(0.44)}}>
          {[["Est. 2024","Year Founded"],["8","Capabilities"],["4","Founding Engineers"],["2","Products in R&D"]].map(([n,l],i)=>(
            <div key={i} style={{padding:"1.75rem 1rem", background: t.bg}}>
              <div style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:"var(--fluid-stat)",fontWeight:700,color:t.purple,letterSpacing:"-0.03em",lineHeight:1}}>{n}</div>
              <div style={{fontSize:"var(--fluid-label)",color:t.textDim,marginTop:"0.375rem",letterSpacing:"0.1em",textTransform:"uppercase",fontFamily:"'Inter',sans-serif"}}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
