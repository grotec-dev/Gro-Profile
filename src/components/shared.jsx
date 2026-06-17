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
          <h2 style={{fontFamily: "'Space Grotesk',sans-serif",fontSize: "var(--fluid-h2)",fontWeight: 700,lineHeight: 1.08,letterSpacing: "-0.03em",color: t.text,margin: 0}}>
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
        fontFamily: "'Space Grotesk',sans-serif",
        fontSize: "var(--fluid-h2)",
        fontWeight: 700,
        lineHeight: 1.08,
        letterSpacing: "-0.03em",
        color: t.text,
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
    outline:"none",
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

/* ─── THEME TOGGLE ──────────────────────────────────────────────────────────── */
export function ThemeToggle({t, dark, setDark}) {
  const [h,setH]=useState(false);
  return (
    <button
      onClick={()=>setDark(!dark)}
      onMouseEnter={()=>setH(true)}
      onMouseLeave={()=>setH(false)}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        display:"flex", alignItems:"center", justifyContent:"center",
        width:"2.25rem", height:"2.25rem",
        background: h ? t.bgHover : "transparent",
        border:`1px solid ${h ? t.borderHov : t.border}`,
        borderRadius:0,
        cursor:"pointer",
        transition:"all 0.2s ease",
        color: t.textSub,
        flexShrink:0,
      }}
    >
      {dark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      ) : (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </button>
  );
}
