import { useState } from "react";
import { SectionHeader, SvgIcon, Btn } from "./shared";

/* ─── COMMUNITY TRACK ITEM ──────────────────────────────────────────────────── */
const CommunityTrackItem = ({ item, i, t, totalLength }) => {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      className="scroll-fade"
      style={{padding: "1.5rem 1.75rem", display: "flex", gap: "1.125rem", alignItems: "flex-start", background: h ? t.bgHover : "transparent", borderBottom: i < totalLength - 1 ? `1px solid ${t.border}` : "none", transition: "background 0.22s ease", position: "relative"}}
    >
      <div style={{position: "absolute", left: 0, top: 0, bottom: 0, width: "2px", background: h ? t.teal : "transparent", transition: "background 0.25s ease"}} />
      <SvgIcon path={item.icon} size={17} color={h ? t.teal : t.textDim} />
      <div>
        <div style={{fontSize: "0.8125rem", fontWeight: 700, color: t.text, letterSpacing: "0.04em", marginBottom: "0.4em", fontFamily: "'Space Grotesk',sans-serif"}}>{item.tag}</div>
        <p style={{fontSize: "0.84375rem", color: t.textSub, lineHeight: 1.7, fontFamily: "'Inter',sans-serif", margin: 0}}>{item.body}</p>
      </div>
    </div>
  );
};

/* ─── COMMUNITY SECTION ─────────────────────────────────────────────────────── */
export default function Community({t, dark, onContactClick}) {
  const DEVTALKS_FORM_URL = "https://luma.com/skis9vgx";

  const tracks = [
    {tag:"For Developers",   body:"Deep dives into system design, code reviews, live workshops, and career advice. We help African engineers improve their skills and meet the right people.", icon:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18"},
    {tag:"For Businesses",   body:"Clear advice on how to choose technology partners, plan digital projects, and avoid expensive mistakes before they happen.", icon:"M22 12h-4l-3 9L9 3l-3 9H2"},
    {tag:"Open Discussion",  body:"Honest talks about the African tech industry. We discuss what works, what fails, and how we can build things that last.", icon:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"},
  ];
  return (
    <section id="community" style={{background:t.bg,borderTop:`1px solid ${t.border}`,padding:"var(--fluid-section) 0"}}>
      <div style={{maxWidth:"80rem",margin:"0 auto",padding:"0 clamp(1.25rem,4vw,2.5rem)"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(22rem, 100%), 1fr))",gap:"var(--fluid-gap)",alignItems:"start"}}>
          <div>
            <SectionHeader
              t={t}
              label="GroTec Community"
              title={<>Where builders and<br/>businesses grow.</>}
              subtitle="We built an open space for developers, business owners, and tech leaders across Africa. We host clear, helpful sessions on writing code, planning products, and running a tech business — with no hidden costs or barriers."
            />
            <div className="community-tracks" style={{border:`1px solid ${t.border}`}}>
              {tracks.map((item, i) => (
                <CommunityTrackItem key={i} item={item} i={i} t={t} totalLength={tracks.length} />
              ))}
            </div>
          </div>
          <div>
            <div style={{
              border:`2px solid ${t.purple}`,
              marginBottom:"1rem",
              background:t.bgRaised,
              position:"relative",
            }} className="scroll-fade hover-card">
              <div style={{
                position:"absolute",
                top:"-0.6875rem",
                left:"1.25rem",
                background: dark ? t.purple : t.tealDim,
                color: dark ? "#fff" : t.purpleText,
                fontSize:"0.5625rem",
                fontWeight:700,
                letterSpacing:"0.15em",
                textTransform:"uppercase",
                padding:"0.25rem 0.75rem",
                fontFamily:"'Inter',sans-serif"
              }}>
                Upcoming Event
              </div>
              <div style={{padding:"2.25rem 2rem 0"}}>
                <div style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:"clamp(1.5rem, 2.5vw, 1.75rem)",fontWeight:700,color:t.text,letterSpacing:"-0.03em",marginBottom:"0.25em"}}>DevTalks</div>
                <div style={{fontSize:"0.8125rem",fontWeight:700,color:t.text,letterSpacing:"0.02em",marginBottom:"0.375rem",fontFamily:"'Inter',sans-serif",display:"flex",alignItems:"center",gap:"0.5rem"}}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={t.purple} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  June 25, 2026
                </div>
                <div style={{fontSize:"0.8125rem",fontWeight:600,color:t.purple,letterSpacing:"0.04em",marginBottom:"1rem",fontFamily:"'Inter',sans-serif"}}>Theme: "After Code, What Next?"</div>
                <p style={{fontSize:"0.875rem",color:t.textSub,lineHeight:1.75,paddingBottom:"1.75rem",fontFamily:"'Inter',sans-serif",margin:0}}>A developer community and seminar series designed to guide developers on career growth, strategy, and what comes after learning to code.</p>
              </div>
              <div style={{padding:"1.25rem 2rem",background:t.bgHover,borderTop:`1px solid ${t.border}`,display:"flex",gap:"0.625rem"}}>
                <a
                  href={DEVTALKS_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display:"inline-flex", alignItems:"center", gap:"0.5625rem",
                    fontFamily:"'Inter',sans-serif",
                    fontSize: "0.75rem",
                    fontWeight:600,
                    letterSpacing:"0.07em",
                    textTransform:"uppercase",
                    textDecoration:"none",
                    borderRadius:0,
                    padding: "0.5rem 1.125rem",
                    transition:"all 0.22s var(--ease-antigravity)",
                    cursor:"pointer",
                    border:"none",
                    outline:"none",
                    background: t.purple,
                    color: "#fff",
                  }}
                >
                  Register
                </a>
                <Btn t={t} onClick={() => onContactClick("Community Event — DevTalks Registration", "I want to join the waitlist for future DevTalks events.")} small>Join Waitlist</Btn>
              </div>
            </div>
            <div className="mini-stats-grid">
              {[{n:"Free",l:"Always open"},  {n:"Live Q&A",l:"Every session"},{n:"Dev + Biz",l:"Dual audience"},{n:"Enugu",l:"& Online"}].map((s,i)=>(
                <div key={i} style={{padding:"1.375rem 1.375rem", background: t.bgRaised}}>
                  <div style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:"1.125rem",fontWeight:700,color:t.purple,marginBottom:"0.25em"}}>{s.n}</div>
                  <div style={{fontSize:"0.6875rem",color:t.textDim,letterSpacing:"0.06em",fontFamily:"'Inter',sans-serif"}}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
