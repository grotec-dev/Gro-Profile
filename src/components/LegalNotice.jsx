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
    fontFamily: "'Space Grotesk',sans-serif",
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
    <div style={{background: t.bg, minHeight: "100vh"}}>
      <div style={{maxWidth: "50rem", margin: "0 auto", padding: "clamp(5rem,10vw,8rem) clamp(1.25rem,4vw,2.5rem)"}}>
        <button onClick={onBack} style={{background:"none", border:"none", color:t.textSub, fontSize:"0.875rem", fontFamily:"'Inter',sans-serif", fontWeight:600, cursor:"pointer", marginBottom:"3rem", display:"flex", alignItems:"center", gap:"0.5rem", transition:"color 0.2s"}} onMouseEnter={e => e.currentTarget.style.color=t.purple} onMouseLeave={e => e.currentTarget.style.color=t.textSub}>
          ← Back to GroTec
        </button>

        <Label t={t}>Last Updated: June 13, 2026</Label>
        <h1 style={{fontFamily: "'Space Grotesk',sans-serif", fontSize: "var(--fluid-h2)", fontWeight: 700, color: t.text, marginBottom: "2rem", letterSpacing: "-0.03em"}}>Privacy Policy for GroTec</h1>

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
            <li style={{marginBottom: "0.5rem"}}>Email you about projects or updates.</li>
            <li style={{marginBottom: "0.5rem"}}>Study how people use our site to make it better.</li>
            <li style={{marginBottom: "0.5rem"}}>Keep our systems secure from fraud.</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>3. Sharing Your Information</h2>
          <p style={pStyle}>We never sell your data. We only share it when necessary:</p>
          <p style={pStyle}><strong>With Service Providers:</strong> Companies that help us with hosting, emails, and analytics.</p>
          <p style={pStyle}><strong>For Legal Reasons:</strong> If the law requires us to share it, or if we need to protect our rights and safety.</p>
          <p style={pStyle}><strong>Business Changes:</strong> If we sell our business or merge with another company, your data will go with it.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>4. Data Security</h2>
          <p style={pStyle}>We use strong security tools to protect your information from hackers and leaks. However, no internet system is 100% perfect, so we cannot guarantee complete security.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>5. Your Privacy Rights</h2>
          <p style={pStyle}>Depending on where you live, the law gives you rights over your data. You can:</p>
          <ul style={{...pStyle, paddingLeft: "1.5rem"}}>
            <li style={{marginBottom: "0.5rem"}}>Ask for a copy of your data.</li>
            <li style={{marginBottom: "0.5rem"}}>Ask us to fix wrong info.</li>
            <li style={{marginBottom: "0.5rem"}}>Ask us to delete your data.</li>
            <li style={{marginBottom: "0.5rem"}}>Unsubscribe from our emails at any time using the link at the bottom.</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>6. Children's Privacy</h2>
          <p style={pStyle}>Our services are for adults 18 and older. We do not try to collect data from kids. If we find out we accidentally collected info from someone under 18, we will delete it immediately.</p>
        </div>

        <div style={sectionStyle}>
          <h2 style={h2Style}>7. Policy Updates</h2>
          <p style={pStyle}>We may change this policy from time to time. We will update the date at the top of the page when we do. Please check back here to see how we protect your data.</p>
        </div>

        <div style={{marginBottom: "2rem"}}>
          <h2 style={h2Style}>8. Contact Us</h2>
          <p style={pStyle}>If you have questions about your privacy, email us at <a href="mailto:hello@grotec.dev" style={{color:t.purple, textDecoration:"none"}}>hello@grotec.dev</a>.</p>
        </div>
      </div>
    </div>
  );
}
