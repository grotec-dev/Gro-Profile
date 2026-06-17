import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Btn } from "./shared";

/* ─── CONTACT MODAL ────────────────────────────────────────────────────────── */
export default function ContactModal({ t, open, onClose, initialState }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [service, setService] = useState("Development");
  const [currency, setCurrency] = useState("USD");
  const [budget, setBudget] = useState("$10k - $25k");
  const [description, setDescription] = useState("");
  const [timeline, setTimeline] = useState("Standard (1 – 3 months)");
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [sending, setSending] = useState(false);
  
  const [touched, setTouched] = useState({});
  const [formError, setFormError] = useState(null);

  const [prevOpen, setPrevOpen] = useState(open);
  if (open !== prevOpen) {
    setPrevOpen(open);
    if (open) {
      if (initialState.service) setService(initialState.service);
      if (initialState.description) setDescription(initialState.description);
    }
  }

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClose = () => {
    if (sending) return;
    onClose();
    setTimeout(() => {
      if (submitted) {
        setName(""); setEmail(""); setCompany(""); setRole("");
        setService("Development"); setCurrency("USD"); setBudget("$10k - $25k");
        setDescription(""); setTimeline("Standard (1 – 3 months)");
        setSubmitted(false); setSending(false); setTouched({}); setFormError(null);
      }
      setFocusedField(null);
    }, 350);
  };

  const validateField = (field, val) => {
    if (!val.trim()) return "Required field";
    if (field === 'email' && !val.includes('@')) return "Invalid email";
    return "";
  };

  const handleBlur = (field) => {
    setFocusedField(null);
    setTouched(prev => ({...prev, [field]: true}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, company: true, description: true });
    
    if (!name.trim() || !email.trim() || !company.trim() || !description.trim()) {
      setFormError("Please fill in all required fields to continue.");
      return;
    }
    
    setFormError(null);
    setSending(true);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey || serviceID === "your_service_id_here") {
      setFormError("EmailJS configuration is missing. Please check your .env file.");
      setSending(false);
      return;
    }

    const templateParams = {
      from_name: name, reply_to: email, company: company, role: role || "N/A",
      service: service, currency: currency, budget: budget, timeline: timeline, message: description,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setSubmitted(true);
    } catch (err) {
      console.error("Failed to send email:", err);
      setFormError(`Submission failed. Please try again. Error: ${err?.text || err?.message || err}`);
    } finally {
      setSending(false);
    }
  };

  const budgetOptions = currency === "USD" 
    ? ["< $10k", "$10k - $25k", "$25k - $50k", "$50k - $100k", "$100k+"]
    : ["Under ₦5M", "₦5M – ₦20M", "₦20M – ₦50M", "₦50M – ₦100M", "₦100M+"];

  const labelStyle = {
    fontFamily: "'Inter', sans-serif", fontSize: "0.625rem", fontWeight: 700,
    letterSpacing: "0.1em", textTransform: "uppercase", color: t.textSub,
    marginBottom: "0.5rem", display: "flex", justifyContent: "space-between",
  };

  const getInputBorder = (field, val) => {
    if (touched[field] && validateField(field, val)) return "#EF4444";
    return focusedField === field ? t.purple : t.border;
  };

  const inputStyle = (field, val) => ({
    fontFamily: "'Inter', sans-serif", fontSize: "1rem", width: "100%",
    background: t.bg, color: t.text, border: `1px solid ${getInputBorder(field, val)}`,
    borderRadius: 0, padding: "1rem 1.25rem", outline: "none", transition: "border-color 0.22s ease",
  });

  const selectStyle = (fieldName) => ({
    fontFamily: "'Inter', sans-serif", fontSize: "1rem", width: "100%", backgroundColor: t.bg, color: t.text,
    border: `1px solid ${focusedField === fieldName ? t.purple : t.border}`, borderRadius: 0,
    padding: "1rem 1.25rem", outline: "none", transition: "border-color 0.22s ease",
    WebkitAppearance: "none", backgroundPosition: "right 16px center",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='${t.id === "dark" ? "white" : "black"}' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat", cursor: "pointer",
  });

  return (
    <div className="gt-modal-backdrop" style={{
      visibility: open ? "visible" : "hidden", pointerEvents: open ? "all" : "none", opacity: open ? 1 : 0
    }} onClick={handleClose}>
      
      <div className="gt-modal-panel" style={{
        background: t.bgRaised, borderColor: t.border,
        transform: open ? "scale(1) translateY(0)" : "scale(0.96) translateY(1rem)",
      }} onClick={e => e.stopPropagation()}>
        
        <button onClick={handleClose} disabled={sending} className="gt-modal-close" style={{ color: t.textSub }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.5rem", fontWeight: 700, color: t.text, margin: "0 0 2rem 0", letterSpacing: "-0.02em" }}>
          {submitted ? "Project Initiated" : "Start a Project"}
        </h3>

        {submitted ? (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2.5rem 0" }}>
            <div style={{ width: "4rem", height: "4rem", borderRadius: "50%", background: t.tealDim, display: "flex", alignItems: "center", justifyContent: "center", color: t.teal, marginBottom: "1.5rem" }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.5rem", fontWeight: 700, color: t.text, marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>
              Submission Successful
            </h4>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: t.textSub, lineHeight: 1.6, maxWidth: "20rem", margin: 0 }}>
              Thank you for reaching out. Our team will review your project and reply within 24 hours.
            </p>
            <div style={{ marginTop: "2rem" }}>
              <Btn t={t} onClick={handleClose} primary>Return to Site</Btn>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {formError && (
              <div style={{ padding: "1rem", background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.3)", color: "#EF4444", fontSize: "0.8125rem", fontFamily: "'Inter', sans-serif" }}>
                {formError}
              </div>
            )}

            <div>
              <label style={labelStyle}>
                <span>Full Name <span style={{color: t.purple}}>*</span></span>
                {touched.name && validateField('name', name) && <span style={{color: "#EF4444", textTransform: "none", fontWeight: 500}}>{validateField('name', name)}</span>}
              </label>
              <input type="text" value={name} disabled={sending} onChange={(e) => setName(e.target.value)} onFocus={() => setFocusedField("name")} onBlur={() => handleBlur("name")} style={{ ...inputStyle("name", name), opacity: sending ? 0.6 : 1 }} placeholder="Enter your name" />
            </div>

            <div>
              <label style={labelStyle}>
                <span>Email Address <span style={{color: t.purple}}>*</span></span>
                {touched.email && validateField('email', email) && <span style={{color: "#EF4444", textTransform: "none", fontWeight: 500}}>{validateField('email', email)}</span>}
              </label>
              <input type="email" value={email} disabled={sending} onChange={(e) => setEmail(e.target.value)} onFocus={() => setFocusedField("email")} onBlur={() => handleBlur("email")} style={{ ...inputStyle("email", email), opacity: sending ? 0.6 : 1 }} placeholder="name@company.com" />
            </div>

            <div className="gt-modal-two-col">
              <div>
                <label style={labelStyle}>
                  <span>Company <span style={{color: t.purple}}>*</span></span>
                  {touched.company && validateField('company', company) && <span style={{color: "#EF4444", textTransform: "none", fontWeight: 500}}>{validateField('company', company)}</span>}
                </label>
                <input type="text" value={company} disabled={sending} onChange={(e) => setCompany(e.target.value)} onFocus={() => setFocusedField("company")} onBlur={() => handleBlur("company")} style={{ ...inputStyle("company", company), opacity: sending ? 0.6 : 1 }} placeholder="Company name" />
              </div>
              <div>
                <label style={labelStyle}><span>Role <span style={{color: t.textDim}}> (Optional)</span></span></label>
                <input type="text" value={role} disabled={sending} onChange={(e) => setRole(e.target.value)} onFocus={() => setFocusedField("role")} onBlur={() => handleBlur("role")} style={{ ...inputStyle("role", role), opacity: sending ? 0.6 : 1 }} placeholder="e.g. CTO, Product Manager" />
              </div>
            </div>

            <div>
              <label style={labelStyle}><span>Service Needed</span></label>
              <select value={service} disabled={sending} onChange={(e) => setService(e.target.value)} onFocus={() => setFocusedField("service")} onBlur={() => setFocusedField(null)} style={{ ...selectStyle("service"), opacity: sending ? 0.6 : 1 }}>
                <option value="Development">Custom Software Development</option>
                <option value="Design & UI/UX">Design & UI/UX</option>
                <option value="Full-Cycle Engineering">Full-Cycle Engineering</option>
                <option value="Security & Infrastructure">Security & Infrastructure</option>
                <option value="AI Business Automation">AI Business Automation</option>
                <option value="Consultative Discovery">Consultative Discovery</option>
                <option value="Community Event — DevTalks Registration">Community Event — DevTalks</option>
                <option value="Other">Other Services</option>
              </select>
            </div>

            <div>
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem"}}>
                <label style={{...labelStyle, marginBottom: 0}}><span>Budget Range</span></label>
                <div style={{display: "flex", gap: "0.5rem", fontSize: "0.625rem", fontFamily: "'Inter', sans-serif", fontWeight: 700}}>
                  <button type="button" onClick={() => setCurrency("USD")} style={{background: "none", border: "none", cursor: "pointer", color: currency === "USD" ? t.purple : t.textDim}}>USD</button>
                  <span style={{color: t.textDimmer}}>|</span>
                  <button type="button" onClick={() => setCurrency("NGN")} style={{background: "none", border: "none", cursor: "pointer", color: currency === "NGN" ? t.purple : t.textDim}}>NGN</button>
                </div>
              </div>
              <select value={budget} disabled={sending} onChange={(e) => setBudget(e.target.value)} onFocus={() => setFocusedField("budget")} onBlur={() => setFocusedField(null)} style={{ ...selectStyle("budget"), opacity: sending ? 0.6 : 1 }}>
                {budgetOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>

            <div>
              <label style={labelStyle}><span>Project Timeline</span></label>
              <select value={timeline} disabled={sending} onChange={(e) => setTimeline(e.target.value)} onFocus={() => setFocusedField("timeline")} onBlur={() => setFocusedField(null)} style={{ ...selectStyle("timeline"), opacity: sending ? 0.6 : 1 }}>
                <option value="Urgent (< 1 month)">Urgent (Less than 1 month)</option>
                <option value="Standard (1 – 3 months)">Standard (1 – 3 months)</option>
                <option value="Flexible (3+ months)">Flexible (3+ months)</option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>
                <span>Project Description <span style={{color: t.purple}}>*</span></span>
                {touched.description && validateField('description', description) && <span style={{color: "#EF4444", textTransform: "none", fontWeight: 500}}>{validateField('description', description)}</span>}
              </label>
              <textarea rows="4" value={description} disabled={sending} onChange={(e) => setDescription(e.target.value)} onFocus={() => setFocusedField("description")} onBlur={() => handleBlur("description")} style={{ ...inputStyle("description", description), resize: "vertical", minHeight: "6.25rem", opacity: sending ? 0.6 : 1 }} placeholder="Tell us what you want to build..." />
            </div>

            <div style={{ marginTop: "1rem" }}>
              <button type="submit" disabled={sending} style={{
                  width: "100%", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5625rem",
                  fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", fontWeight: 600, letterSpacing: "0.07em",
                  textTransform: "uppercase", height: "3.25rem", background: sending ? t.borderHov : t.purple,
                  color: sending ? t.textDim : "#fff", border: "none", borderRadius: 0, cursor: sending ? "not-allowed" : "pointer",
                  transition: "all 0.22s ease", opacity: sending ? 0.8 : 1,
                }}
                onMouseEnter={(e) => { if (sending) return; e.currentTarget.style.background = t.purpleL; }}
                onMouseLeave={(e) => { if (sending) return; e.currentTarget.style.background = t.purple; }}
              >
                {sending ? "Sending Inquiry..." : "Submit Inquiry"}
                {sending ? (
                  <svg width="14" height="14" viewBox="0 0 38 38" stroke="currentColor" className="animate-spin"><g fill="none" fillRule="evenodd"><g transform="translate(1 1)" strokeWidth="3"><circle strokeOpacity=".2" cx="18" cy="18" r="18"/><path d="M36 18c0-9.94-8.06-18-18-18" /></g></g></svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
