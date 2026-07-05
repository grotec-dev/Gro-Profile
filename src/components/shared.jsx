import { useState } from "react";

/* ─── SMALL COMPONENTS ──────────────────────────────────────────────────────── */
export function Label({t, children, align="left"}) {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent: align==="center"?"center":"flex-start", gap:"0.75rem",marginBottom:"1.125rem"}}>
      <div style={{width:"1.375rem",height:"1px",background:t.purple,flexShrink:0}}/>
      <span style={{fontSize:"var(--fluid-label)",fontWeight:700,letterSpacing:"0.24em",textTransform:"uppercase",color:t.purple,fontFamily:"'Inter',sans-serif"}}>{children}</span>
    </div>
  );
}

export function SectionHeader({ t, label, title, subtitle, align = "left" }) {
  if (align === "split") {
    return (
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(20rem, 100%), 1fr))",gap:"var(--fluid-gap)",alignItems:"end",marginBottom:"clamp(2.5rem,5vw,4.5rem)"}}>
        <div>
          <Label t={t}>{label}</Label>
          <h2 style={{fontFamily: "'Cormorant Garamond',serif",fontSize: "var(--fluid-h2)",fontWeight: 700,lineHeight: 1.0,letterSpacing: "0.05em",textTransform: "uppercase",color: "#ffffff",margin: 0}}>
            {title}
          </h2>
        </div>
        {subtitle && (
          <p style={{fontSize: "var(--fluid-body)",color: t.textSub,lineHeight: 1.78,maxWidth: "32.5rem",fontFamily: "'Inter',sans-serif",margin: 0,alignSelf: "end"}}>
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
        fontFamily: "'Cormorant Garamond',serif",
        fontSize: "var(--fluid-h2)",
        fontWeight: 700,
        lineHeight: 1.0,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        color: "#ffffff",
        margin: 0,
        ...(align === "center" && { margin: "0 auto", maxWidth: "31.25rem" })
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          fontSize: "var(--fluid-body)",
          color: t.textSub,
          lineHeight: 1.78,
          fontFamily: "'Inter',sans-serif",
          marginTop: "1rem",
          maxWidth: "32.5rem",
          ...(align === "center" && { margin: "1rem auto 0" })
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
    display:"inline-flex", alignItems:"center", gap:"0.5625rem",
    fontFamily:"'Inter',sans-serif",
    fontSize: small ? "0.75rem" : "0.8125rem",
    fontWeight:600,
    letterSpacing:"0.07em",
    textTransform:"uppercase",
    textDecoration:"none",
    borderRadius:0,
    padding: small ? "0.5rem 1.125rem" : "0.8125rem 1.625rem",
    transition:"all 0.22s var(--ease-antigravity)",
    cursor:"pointer",
    border:"none",
  };
  const style = primary
    ? { ...base, background: h ? t.purpleL : t.purple, color:"#fff", boxShadow: "none", transform: h ? "translateY(-0.0625rem)" : "none" }
    : { ...base, background:"transparent", color: h ? t.text : t.textSub, border:`1px solid ${ h ? t.borderHov : t.border}`, transform: h ? "translateY(-0.0625rem)" : "none" };
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


