import { useState } from "react";
import { Btn } from "./shared";
import logoDark from "../assets/grotec-logo-dark.png";

/* ─── NAVIGATION ────────────────────────────────────────────────────────────── */
export default function Nav({t, scrolled, setPage, page, openContact}) {
  const [open,setOpen] = useState(false);
  const [hLink,setHLink] = useState(null);
  const links = [["home","Home"],["about","About"],["services","Services"],["portfolio","Portfolio"],["contact","Contact"]];

  const handleNavClick = (e, targetPage) => {
    e.preventDefault();
    setPage(targetPage);
    setOpen(false);
  };

  return (
    <header role="banner" style={{
      position:"fixed", top:0, left:0, right:0, zIndex:200,
      background: scrolled ? t.navBg : "transparent",
      borderBottom: `1px solid ${scrolled ? t.border : "transparent"}`,
      backdropFilter: scrolled ? "blur(4px)" : "none",
      transition:"background 0.3s ease, border-color 0.3s ease",
    }}>
      <nav style={{maxWidth:"80rem",margin:"0 auto",padding:"0 clamp(1.25rem, 4vw, 2.5rem)",height:"4rem",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"1.5rem"}}>
        <a href="#top" onClick={(e) => handleNavClick(e, 'home')} style={{display:"flex",alignItems:"center",gap:"0.625rem",textDecoration:"none",flexShrink:0}}>
          <picture>
            <img 
              src={logoDark} 
              alt="GroTec logo" 
              style={{height:"2rem",display:"block"}}
              fetchPriority="high"
              loading="eager"
            />
          </picture>
        </a>

        <div className="gt-nav-d" style={{display:"flex",alignItems:"center",gap:"2rem"}}>
          {links.map(([href,label])=>(
            <a key={href} href={href} onClick={(e) => handleNavClick(e, href)}
              style={{fontSize:"0.875rem",fontWeight:500,letterSpacing:"0",textTransform:"none",color: page===href || hLink===href ? t.text : t.textSub,textDecoration:"none",transition:"color 0.18s ease",fontFamily:"'Inter',sans-serif"}}
              onMouseEnter={()=>setHLink(href)} onMouseLeave={()=>setHLink(null)}
            >{label}</a>
          ))}
        </div>

        <div style={{display:"flex",alignItems:"center",gap:"0.625rem",flexShrink:0}}>
          <div className="gt-nav-d">
            <button 
              onClick={() => openContact(true)} 
              className="cursor-pointer select-none"
              style={{
                display:"inline-flex", alignItems:"center", gap:"0.5625rem",
                fontFamily:"'Inter',sans-serif", fontSize:"0.875rem", fontWeight:500,
                letterSpacing:"0", textTransform:"none", borderRadius:"999px",
                padding:"0.75rem 1.5rem", transition:"all 0.22s ease",
                border:"none", background:"#6F5BEA", color:"#fff"
              }}
            >
              Start a Project
            </button>
          </div>
          <button className="gt-nav-m" onClick={()=>setOpen(!open)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            style={{display:"none",background:"none",border:`1px solid ${t.border}`,cursor:"pointer",width:"2.25rem",height:"2.25rem",alignItems:"center",justifyContent:"center",flexShrink:0}}>
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={t.textSub} strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={t.textSub} strokeWidth="2"><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></svg>
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div style={{background:t.bg,borderTop:`1px solid ${t.border}`,padding:"1.25rem clamp(1.25rem, 4vw, 2.5rem) 1.75rem"}}>
          {links.map(([href,label])=>(
            <a key={href} href={href} onClick={(e) => handleNavClick(e, href)}
              style={{display:"block",padding:"0.875rem 0",fontSize:"0.9375rem",fontWeight:500,letterSpacing:"0",textTransform:"none",color: page===href ? t.text : t.textSub,textDecoration:"none",borderBottom:`1px solid ${t.border}`,fontFamily:"'Inter',sans-serif"}}>
              {label}
            </a>
          ))}
          <div style={{marginTop:"1.25rem"}}>
            <button 
              onClick={() => { setOpen(false); openContact(true); }} 
              className="cursor-pointer select-none"
              style={{
                display:"inline-flex", alignItems:"center", gap:"0.5625rem",
                fontFamily:"'Inter',sans-serif", fontSize:"0.875rem", fontWeight:500,
                letterSpacing:"0", textTransform:"none", borderRadius:"999px",
                padding:"0.75rem 1.5rem", transition:"all 0.22s ease",
                border:"none", background:"#6F5BEA", color:"#fff", width:"100%", justifyContent:"center"
              }}
            >
              Start a Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
