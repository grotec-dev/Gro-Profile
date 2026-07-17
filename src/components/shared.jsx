import { useState } from "react";

/* ─── SMALL COMPONENTS ──────────────────────────────────────────────────────── */
export function Label({t, children, align="left"}) {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent: align==="center"?"center":"flex-start", gap:"0.625rem",marginBottom:"1rem"}}>
      <div style={{width:"1.125rem",height:"1px",background:t.purple,flexShrink:0}}/>
      <span style={{fontSize:"var(--fluid-label)",fontWeight:600,letterSpacing:"0.16em",textTransform:"uppercase",color:t.purpleText,fontFamily:"'JetBrains Mono',monospace"}}>{children}</span>
    </div>
  );
}

export function SectionHeader({ t, label, title, subtitle, align = "left" }) {
  if (align === "split") {
    return (
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(20rem, 100%), 1fr))",gap:"var(--fluid-gap)",alignItems:"end",marginBottom:"clamp(2.5rem,5vw,4.5rem)"}}>
        <div>
          <Label t={t}>{label}</Label>
          <h2 style={{fontFamily: "'Sora',sans-serif",fontSize: "var(--fluid-h2)",fontWeight: 600,lineHeight: 1.15,letterSpacing: "-0.01em",color: t.text,margin: 0}}>
            {title}
          </h2>
        </div>
        {subtitle && (
          <p style={{fontSize: "var(--fluid-body)",color: t.textSub,lineHeight: 1.7,maxWidth: "32.5rem",fontFamily: "'Inter',sans-serif",margin: 0,alignSelf: "end"}}>
            {subtitle}
          </p>
        )}
      </div>
    );
  }

  return (
    <div style={{ textAlign: align, marginBottom: "clamp(2rem,4.5vw,3.5rem)" }}>
      <Label t={t} align={align}>{label}</Label>
      <h2 style={{
        fontFamily: "'Sora',sans-serif",
        fontSize: "var(--fluid-h2)",
        fontWeight: 600,
        lineHeight: 1.15,
        letterSpacing: "-0.01em",
        color: t.text,
        margin: 0,
        ...(align === "center" && { margin: "0 auto", maxWidth: "34rem" })
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          fontSize: "var(--fluid-body)",
          color: t.textSub,
          lineHeight: 1.7,
          fontFamily: "'Inter',sans-serif",
          marginTop: "0.875rem",
          maxWidth: "32.5rem",
          ...(align === "center" && { margin: "0.875rem auto 0" })
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Btn({t, href, children, primary=false, small=false, onClick}) {
  const [h,setH] = useState(false);
  const base = {
    display:"inline-flex", alignItems:"center", gap:"0.5rem",
    fontFamily:"'Inter',sans-serif",
    fontSize: small ? "0.8125rem" : "0.875rem",
    fontWeight:500,
    letterSpacing:"0",
    textTransform:"none",
    textDecoration:"none",
    borderRadius:"999px",
    padding: small ? "0.5625rem 1.125rem" : "0.8125rem 1.625rem",
    transition:"all 0.22s var(--ease-antigravity)",
    cursor:"pointer",
    border:"none",
  };
  const style = primary
    ? { ...base, background: h ? t.purpleL : t.purple, color:"#fff", boxShadow: h ? "0 0.5rem 1.5rem rgba(111,91,234,0.28)" : "none", transform: h ? "translateY(-0.0625rem)" : "none" }
    : { ...base, background: h ? t.bgHover : "transparent", color: h ? t.text : t.textSub, border:`1px solid ${ h ? t.borderHov : t.border}`, transform: h ? "translateY(-0.0625rem)" : "none" };
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };
  return <a href={href || "#"} onClick={handleClick} style={style} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>{children}</a>;
}

export function SvgIcon({path, size=20, color, sw=1.6}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d={path}/>
    </svg>
  );
}
