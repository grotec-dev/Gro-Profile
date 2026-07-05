import { useState } from "react";
import { SectionHeader, SvgIcon } from "./shared";

/* ─── DATA ─────────────────────────────────────────────────────────────────── */
const capabilities = [
  { n:"01", title:"Custom Code",           desc:"We build websites and mobile apps that fit your business needs. You tell us what you want, and we make it work, load fast, and look good on all screens.", icon:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" },
  { n:"02", title:"Speed & Reliability",   desc:"We design the inner parts of your software so it runs fast and never crashes, even when thousands of people are using it at the same time.", icon:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" },
  { n:"03", title:"Project Planning",      desc:"Before we write any code, we help you plan what to build. This ensures you only spend money on features that actually help your business grow.", icon:"M22 12h-4l-3 9L9 3l-3 9H2" },
  { n:"04", title:"Moving Old Systems",   desc:"If your current software is slow or keeps breaking, we can move it to new and fast servers without losing your data or stopping your business.", icon:"M5 12h14M12 5l7 7-7 7" },
  { n:"05", title:"Server Management",     desc:"We set up and take care of your hosting on Google, AWS, or Azure. We keep your website online and make sure your server costs stay low.", icon:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" },
  { n:"06", title:"Fixing Old Code",       desc:"If you have old software that is hard to update, we rebuild it piece by piece under the hood while your business keeps running normally.", icon:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
  { n:"07", title:"System Security",       desc:"We protect your websites and servers from hackers. We test your systems to find and fix any security gaps before anyone else does.", icon:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
  { n:"08", title:"Smart Automation",      desc:"We set up automated tools to handle daily repetitive tasks like email updates, customer questions, and reports so your team has time for other work.", icon:"M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1.27A7 7 0 0 1 14 22h-4a7 7 0 0 1-6.73-3H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m9 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9 18h6" },
];

/* ─── CAPABILITY CARD ──────────────────────────────────────────────────────── */
const CapabilityCard = ({ c, t }) => {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      className="scroll-fade hover-card"
      style={{
        padding: "clamp(1.5rem,3vw,2.5rem) clamp(1.25rem,2.5vw,2.25rem)",
        background: h ? t.bgHover : t.bg,
        position: "relative",
        cursor: "default",
      }}
    >
      <div style={{position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: h ? t.purple : "transparent", transition: "background 0.28s ease"}} />
      <div style={{fontSize: "var(--fluid-label)", fontWeight: 700, letterSpacing: "0.2em", color: h ? t.purple : t.textDimmer, fontFamily: "'Inter',sans-serif", marginBottom: "1.5em", transition: "color 0.22s ease"}}>{c.n}</div>
      <div style={{marginBottom: "1.5em"}}>
        <SvgIcon path={c.icon} size={22} color={h ? t.purple : t.textDim} />
      </div>
      <h3 style={{fontFamily: "'Space Grotesk',sans-serif", fontSize: "var(--fluid-h3)", fontWeight: 700, color: t.text, marginBottom: "0.5em", letterSpacing: "-0.02em"}}>{c.title}</h3>
      <p style={{fontSize: "var(--fluid-body)", color: t.textSub, lineHeight: 1.74, fontFamily: "'Inter',sans-serif", margin: 0}}>{c.desc}</p>
    </div>
  );
};

/* ─── CAPABILITIES SECTION ─────────────────────────────────────────────────── */
export default function Capabilities({t}) {
  return (
    <section id="capabilities" style={{background:t.bg,borderTop:`1px solid ${t.border}`,padding:"var(--fluid-section) 0"}}>
      <div style={{maxWidth:"80rem",margin:"0 auto",padding:"0 clamp(1.25rem,4vw,2.5rem)"}}>
        <SectionHeader
          t={t}
          align="split"
          label="Capabilities"
          title={<>What we<br/>build.</>}
          subtitle="Eight core areas of focus. Each one is something our team knows inside-out, so your project gets expert attention from start to finish."
        />
        <div className="capabilities-grid">
          {capabilities.map((c, i) => (
            <CapabilityCard key={i} c={c} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
