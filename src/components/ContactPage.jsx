import { useState } from "react";
import emailjs from "@emailjs/browser";

/* ─── HOVER LINK ─────────────────────────────────────────────────────────── */
const HoverLink = ({ href, label, external = true }) => {
  const [h, setH] = useState(false);
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        color: h ? "#F7F7FA" : "#A5A5B3",
        textDecoration: "none",
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.9375rem",
        fontWeight: 500,
        transition: "color 0.2s ease-out",
        outline: "none",
      }}
    >
      {label}
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        style={{ opacity: h ? 1 : 0, transition: "opacity 0.2s ease-out", flexShrink: 0 }}
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </a>
  );
};

/* ─── COMMUNITY GATE ─────────────────────────────────────────────────────── */
const CommunityGate = ({ href, label, icon }) => {
  const [h, setH] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.875rem",
        padding: "1rem 0",
        borderBottom: "1px solid #2A2A36",
        color: h ? "#F7F7FA" : "#A5A5B3",
        textDecoration: "none",
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.9375rem",
        fontWeight: 500,
        transition: "color 0.2s ease-out",
        outline: "none",
      }}
    >
      <span style={{
        width: "2rem",
        height: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: `1px solid ${h ? "#6b6b78" : "#2A2A36"}`,
        flexShrink: 0,
        transition: "border-color 0.2s ease-out",
      }}>
        {icon}
      </span>
      {label}
      <svg
        width="11"
        height="11"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        style={{ marginLeft: "auto", opacity: h ? 1 : 0.3, transition: "opacity 0.2s" }}
      >
        <path d="M7 17L17 7M17 7H7M17 7V17" />
      </svg>
    </a>
  );
};

/* ─── SECTION LABEL ──────────────────────────────────────────────────────── */
const SectionLabel = ({ children }) => (
  <div style={{
    fontSize: "0.625rem",
    fontWeight: 700,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#6b6b78",
    fontFamily: "'Inter', sans-serif",
    marginBottom: "1.5rem",
    paddingBottom: "0.75rem",
    borderBottom: "1px solid #2A2A36",
  }}>
    {children}
  </div>
);

/* ─── SERVICES LIST ──────────────────────────────────────────────────────── */
const SERVICES = [
  "Technical Product Consulting",
  "Premium Brand Design",
  "Application Engineering",
  "Cybersecurity & Auditing",
  "Go-To-Market Strategy",
  "Infrastructure & DevOps",
];

/* ─── SUBMIT BUTTON ──────────────────────────────────────────────────────── */
function SubmitBtn({ sending }) {
  const [h, setH] = useState(false);
  return (
    <button
      type="submit"
      disabled={sending}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.75rem",
        width: "100%",
        padding: "1.125rem 2rem",
        background: sending ? "#2A2A36" : (h ? "#8172F0" : "#6F5BEA"),
        color: sending ? "#6b6b78" : "#F7F7FA",
        border: "none",
        borderRadius: "999px",
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.9375rem",
        fontWeight: 500,
        letterSpacing: "0",
        textTransform: "none",
        cursor: sending ? "not-allowed" : "pointer",
        transform: h && !sending ? "scale(1.01)" : "scale(1)",
        transition: "transform 0.2s cubic-bezier(0.16,1,0.3,1), background 0.2s",
        outline: "none",
      }}
    >
      {sending ? "Transmitting..." : "Submit System Brief"}
      {!sending && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      )}
    </button>
  );
}

/* ─── CONTACT PAGE ───────────────────────────────────────────────────────── */
export default function ContactPage() {
  const [name, setName]               = useState("");
  const [email, setEmail]             = useState("");
  const [selected, setSelected]       = useState([]);
  const [description, setDescription] = useState("");
  const [sending, setSending]         = useState(false);
  const [submitted, setSubmitted]     = useState(false);
  const [formError, setFormError]     = useState("");
  const [focused, setFocused]         = useState(null);
  const [touched, setTouched]         = useState({});

  const validate = (field, val) => {
    if (field === "name" && !val.trim()) return "Name is required";
    if (field === "email") {
      if (!val.trim()) return "Email is required";
      if (!/\S+@\S+\.\S+/.test(val)) return "Invalid email address";
    }
    return "";
  };

  const toggleService = (s) =>
    setSelected((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true });
    if (validate("name", name) || validate("email", email)) {
      setFormError("Please complete the required fields.");
      return;
    }
    setSending(true);
    setFormError("");
    try {
      await emailjs.send(
        "service_7f6uukl",
        "template_grotec",
        {
          from_name: name,
          from_email: email,
          service_type: selected.join(", ") || "Not specified",
          project_description: description,
        },
        "a9QxWk9lS4K1K2K3K"
      );
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  };

  const fieldBase = {
    width: "100%",
    background: "transparent",
    color: "#F7F7FA",
    border: "none",
    borderBottom: "1px solid #2A2A36",
    borderRadius: 0,
    padding: "1rem 0",
    fontFamily: "'Inter', sans-serif",
    fontSize: "1rem",
    outline: "none",
    transition: "border-color 0.3s",
    caretColor: "#F7F7FA",
  };

  const fieldStyle = (f, val) => ({
    ...fieldBase,
    borderBottomColor:
      focused === f
        ? "#F7F7FA"
        : touched[f] && validate(f, val)
        ? "#EF4444"
        : "#2A2A36",
    opacity: sending ? 0.5 : 1,
  });

  return (
    <main
      id="main-content"
      style={{ minHeight: "100vh", background: "#0D0D12", padding: "clamp(6rem, 12vw, 9rem) 0 6rem" }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 clamp(1.25rem, 4vw, 2.5rem)" }}>

        {/* ── INTAKE HEADER ── */}
        <div style={{ marginBottom: "clamp(4rem, 8vw, 6rem)", maxWidth: "52rem" }}>
          <div style={{
            fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.22em",
            textTransform: "uppercase", color: "#6b6b78",
            fontFamily: "'Inter', sans-serif", marginBottom: "1.5rem",
          }}>
            Contact / Initiate
          </div>
          <h1 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "#F7F7FA",
            lineHeight: 1.05,
            margin: "0 0 2rem 0",
          }}>
            Initiate Build.
          </h1>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1rem",
            color: "#A5A5B3",
            lineHeight: 1.8,
            maxWidth: "40rem",
            margin: 0,
          }}>
            Let&apos;s align your product architecture, brand design, or market strategy. Tell us what you are building, and we will get back to you within 24 hours.
          </p>
        </div>

        {/* ── DIVIDER ── */}
        <div style={{ height: "1px", background: "#2A2A36", marginBottom: "clamp(4rem, 8vw, 6rem)" }} />

        {/* ── SPLIT LAYOUT ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(22rem, 100%), 1fr))",
          gap: "clamp(4rem, 8vw, 7rem)",
          alignItems: "start",
        }}>

          {/* ════ LEFT COLUMN ════ */}
          <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>

            {/* Direct Channels */}
            <div>
              <SectionLabel>Direct Channels</SectionLabel>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}>
                <HoverLink href="mailto:gro.tec@grotec.dev" label="gro.tec@grotec.dev" external={false} />
                <HoverLink href="https://x.com/Grotecdev" label="X (Twitter)" />
                <HoverLink href="https://linkedin.com/company/grotec" label="LinkedIn" />
                <HoverLink href="https://instagram.com/grotec.dev" label="Instagram" />
              </div>
            </div>

            {/* Immediate Commons */}
            <div>
              <SectionLabel>Immediate Commons</SectionLabel>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                color: "#6b6b78",
                lineHeight: 1.7,
                margin: "0 0 1.5rem 0",
              }}>
                Want a quick text conversation with our team or community? Jump straight into our active entry gates:
              </p>
              <div>
                <CommunityGate
                  href="https://discord.gg/GmjaywcuR"
                  label="Discord"
                  icon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                    </svg>
                  }
                />
                <CommunityGate
                  href="https://t.me/+wheeMpmqZ1RlOTA0"
                  label="Telegram"
                  icon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  }
                />
                <CommunityGate
                  href="https://chat.whatsapp.com/FFOjQjJ650LHaWqCI34WBL"
                  label="WhatsApp"
                  icon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                    </svg>
                  }
                />
              </div>
            </div>

          </div>

          {/* ════ RIGHT COLUMN: INTAKE FORM ════ */}
          <div>
            {submitted ? (
              <div style={{ padding: "4rem 0" }}>
                <div style={{
                  width: "3rem", height: "3rem",
                  border: "1px solid #2A2A36",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "2rem",
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F7F7FA" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  color: "#F7F7FA",
                  marginBottom: "1rem",
                }}>
                  Brief Received.
                </h2>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#A5A5B3", lineHeight: 1.7, maxWidth: "28rem", margin: 0 }}>
                  Thank you. We have logged your system brief and will reach out within 24 hours to align on scope and next steps.
                </p>
              </div>
            ) : (
              <form
                id="sprinble-intake"
                onSubmit={handleSubmit}
                noValidate
                style={{ display: "flex", flexDirection: "column" }}
              >
                {formError && (
                  <div style={{
                    padding: "0.875rem 1rem",
                    border: "1px solid rgba(239,68,68,0.4)",
                    color: "#EF4444",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8125rem",
                    marginBottom: "2rem",
                  }}>
                    {formError}
                  </div>
                )}

                {/* Name */}
                <div style={{ marginBottom: "2.5rem" }}>
                  <label htmlFor="intake-name" style={{
                    display: "block", fontFamily: "'Inter', sans-serif",
                    fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.18em",
                    textTransform: "uppercase", color: "#6b6b78", marginBottom: "0.5rem",
                  }}>
                    Name / Company <span style={{ color: "#EF4444" }}>*</span>
                  </label>
                  {touched.name && validate("name", name) && (
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#EF4444", display: "block", marginBottom: "0.25rem" }}>
                      {validate("name", name)}
                    </span>
                  )}
                  <input
                    id="intake-name"
                    type="text"
                    value={name}
                    placeholder="Your name or company name"
                    disabled={sending}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={() => setFocused("name")}
                    onBlur={() => { setFocused(null); setTouched((p) => ({ ...p, name: true })); }}
                    style={fieldStyle("name", name)}
                  />
                </div>

                {/* Email */}
                <div style={{ marginBottom: "2.5rem" }}>
                  <label htmlFor="intake-email" style={{
                    display: "block", fontFamily: "'Inter', sans-serif",
                    fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.18em",
                    textTransform: "uppercase", color: "#6b6b78", marginBottom: "0.5rem",
                  }}>
                    Email Address <span style={{ color: "#EF4444" }}>*</span>
                  </label>
                  {touched.email && validate("email", email) && (
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#EF4444", display: "block", marginBottom: "0.25rem" }}>
                      {validate("email", email)}
                    </span>
                  )}
                  <input
                    id="intake-email"
                    type="email"
                    value={email}
                    placeholder="you@company.com"
                    disabled={sending}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocused("email")}
                    onBlur={() => { setFocused(null); setTouched((p) => ({ ...p, email: true })); }}
                    style={fieldStyle("email", email)}
                  />
                </div>

                {/* Service Checkboxes */}
                <div style={{ marginBottom: "2.5rem" }}>
                  <label style={{
                    display: "block", fontFamily: "'Inter', sans-serif",
                    fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.18em",
                    textTransform: "uppercase", color: "#6b6b78", marginBottom: "1.25rem",
                  }}>
                    What do you need us to handle? <span style={{ textTransform: "none", letterSpacing: "0", fontWeight: 500, color: "#6b6b78" }}>(optional)</span>
                  </label>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(14rem, 100%), 1fr))",
                  }}>
                    {SERVICES.map((s) => {
                      const checked = selected.includes(s);
                      return (
                        <label
                          key={s}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                            padding: "0.875rem 0",
                            borderBottom: "1px solid #2A2A36",
                            cursor: "pointer",
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.875rem",
                            color: checked ? "#F7F7FA" : "#A5A5B3",
                            transition: "color 0.2s",
                            userSelect: "none",
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleService(s)}
                            style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
                            aria-label={s}
                          />
                          <span style={{
                            width: "1.125rem",
                            height: "1.125rem",
                            borderRadius: "0.25rem",
                            border: `1px solid ${checked ? "#6F5BEA" : "#3A3A48"}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            transition: "border-color 0.2s, background 0.2s",
                            background: checked ? "#6F5BEA" : "transparent",
                          }}>
                            {checked && (
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#F7F7FA" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            )}
                          </span>
                          {s}
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Description */}
                <div style={{ marginBottom: "3rem" }}>
                  <label htmlFor="intake-description" style={{
                    display: "block", fontFamily: "'Inter', sans-serif",
                    fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.18em",
                    textTransform: "uppercase", color: "#6b6b78", marginBottom: "0.5rem",
                  }}>
                    Project Scope, Timelines &amp; Goals <span style={{ textTransform: "none", letterSpacing: "0", fontWeight: 500, color: "#6b6b78" }}>(optional)</span>
                  </label>
                  <textarea
                    id="intake-description"
                    rows={5}
                    value={description}
                    placeholder="Tell us about the project scope, timelines, and goals..."
                    disabled={sending}
                    onChange={(e) => setDescription(e.target.value)}
                    onFocus={() => setFocused("description")}
                    onBlur={() => setFocused(null)}
                    style={{
                      ...fieldBase,
                      borderBottomColor: focused === "description" ? "#F7F7FA" : "#2A2A36",
                      resize: "vertical",
                      opacity: sending ? 0.5 : 1,
                      minHeight: "8rem",
                    }}
                  />
                </div>

                <SubmitBtn sending={sending} />

              </form>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}
