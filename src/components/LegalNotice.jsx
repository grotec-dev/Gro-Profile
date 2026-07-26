import { useEffect } from "react";
import { Label } from "./shared";

/* ─── PRIVACY POLICY PAGE ───────────────────────────────────────────────────── */
export default function PrivacyPolicy({t, onBack}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionStyle = {
    paddingBottom: "2rem",
    marginBottom: "2rem",
    borderBottom: `1px solid ${t.border}`
  };

  const h2Style = {
    fontFamily: "'Sora',sans-serif",
    fontSize: "1.125rem",
    fontWeight: 700,
    color: t.text,
    marginTop: "2.5rem",
    marginBottom: "1rem"
  };

  const pStyle = {
    fontFamily: "'Inter',sans-serif",
    fontSize: "var(--fluid-body)",
    color: t.textSub,
    lineHeight: 1.82,
    marginBottom: "1rem"
  };

  return (
    <main id="main-content" style={{background: t.bg, minHeight: "100vh"}}>
      <div style={{maxWidth: "50rem", margin: "0 auto", padding: "clamp(5rem,10vw,8rem) clamp(1.25rem,4vw,2.5rem)"}}>
        <button onClick={onBack} style={{background:"none", border:"none", color:t.textSub, fontSize:"0.875rem", fontFamily:"'Inter',sans-serif", fontWeight:600, cursor:"pointer", marginBottom:"3rem", display:"flex", alignItems:"center", gap:"0.5rem", transition:"color 0.2s"}} onMouseEnter={e => e.currentTarget.style.color=t.purple} onMouseLeave={e => e.currentTarget.style.color=t.textSub}>
          ← Back to GroTec
        </button>

        <Label t={t}>Last Updated: June 13, 2026</Label>
        <h1 style={{fontFamily: "'Sora',sans-serif", fontSize: "var(--fluid-h2)", fontWeight: 700, color: t.text, marginBottom: "2rem", letterSpacing: "-0.03em"}}>Privacy Policy for GroTec</h1>

        <div style={sectionStyle}>
          <p style={pStyle}>Welcome to GroTec. We run a digital agency, tech studio, and community. We care about your privacy and want to be clear about how we protect your data.</p>
          <p style={pStyle}>This policy explains what information we collect and how we use it when you use our website, work with our studio, or join our events like DevTalks. If you do not agree with this, please do not use our services.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>1. Information We Collect</h2>
          <p style={pStyle}>We collect different types of info depending on how you interact with us:</p>
          <p style={pStyle}><strong>Personal Data:</strong> Info you give us when signing up for events or reaching out. This includes your name, email, phone number, social links, and event registration details.</p>
          <p style={pStyle}><strong>Technical Data:</strong> Info our servers collect automatically when you visit us. This includes your IP address, browser type, and data on how you use our site.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>2. How We Use Your Information</h2>
          <p style={pStyle}>We use your data to build great products and run our community. Specifically, we use it to:</p>
          <ul style={{...pStyle, paddingLeft: "1.5rem"}}>
            <li style={{marginBottom: "0.5rem"}}>Provide our agency services.</li>
            <li style={{marginBottom: "0.5rem"}}>Run DevTalks events.</li>
            <li style={{marginBottom: "0.5rem"}}>Send updates on our work.</li>
            <li style={{marginBottom: "0.5rem"}}>Improve our website.</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>3. Sharing Your Information</h2>
          <p style={pStyle}>We do not sell your personal data. We only share it when necessary:</p>
          <p style={pStyle}><strong>Service Providers:</strong> We use tools like Luma for event management, EmailJS for contact forms, and web analytics providers. These companies only get the data they need to do their jobs.</p>
          <p style={pStyle}><strong>Legal Requirements:</strong> We may share data if required by law or to protect our rights.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>4. Data Security</h2>
          <p style={pStyle}>We use standard security measures to protect your data. However, no database or transmission over the internet is 100% secure — so we cannot promise absolute security.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>5. Your Privacy Rights</h2>
          <p style={pStyle}>Depending on where you live, you have rights over your data. This includes the right to:</p>
          <ul style={{...pStyle, paddingLeft: "1.5rem"}}>
            <li style={{marginBottom: "0.5rem"}}>Ask what data we have about you.</li>
            <li style={{marginBottom: "0.5rem"}}>Request updates to incorrect data.</li>
            <li style={{marginBottom: "0.5rem"}}>Ask us to delete your data.</li>
            <li style={{marginBottom: "0.5rem"}}>Object to how we use your data.</li>
          </ul>
          <p style={pStyle}>To use these rights, email us at <a href="mailto:gro.tec@grotec.dev" style={{color:t.purple, textDecoration:"none"}}>gro.tec@grotec.dev</a>.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>6. Children's Privacy</h2>
          <p style={pStyle}>Our services are not for children under 16. We do not knowingly collect data from children. If you learn that a child has shared data with us, please let us know.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>7. Policy Updates</h2>
          <p style={pStyle}>We may change this policy from time to time. We will update the date at the top of the page when we do. Please check back here to see how we protect your data.</p>
        </div>

        <div style={{marginBottom: "2rem"}}>
          <h2 style={h2Style}>8. Contact Us</h2>
          <p style={pStyle}>If you have questions about your privacy, email us at <a href="mailto:gro.tec@grotec.dev" style={{color:t.purple, textDecoration:"none"}}>gro.tec@grotec.dev</a>.</p>
        </div>
      </div>
    </main>
  );
}
