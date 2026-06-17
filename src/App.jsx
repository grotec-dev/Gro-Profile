import { useState, useEffect } from "react";
import { DARK, LIGHT } from "./components/theme";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import Work from "./components/Work";
import ProductsInDevelopment from "./components/ProductsInDevelopment";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";
import Community from "./components/Community";
import Team from "./components/Team";
import { CTABanner, Footer } from "./components/CTABanner";
import ContactModal from "./components/ContactModal";
import PrivacyPolicy from "./components/LegalNotice";

export default function App() {
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [page, setPage] = useState("home");
  const [contactState, setContactState] = useState({ open: false, service: "Development", description: "" });
  const t = dark ? DARK : LIGHT;

  const openContact = (service = "Development", description = "") => {
    setContactState({ open: true, service, description });
  };

  useEffect(() => {
    if (page !== "home") return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: "0px 0px -40px 0px"
    });

    const elements = document.querySelectorAll(".scroll-fade");
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [page]);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    document.body.style.background = t.bg;
    document.body.style.color = t.text;
  }, [dark, t.bg, t.text]);

  if (page === "privacy") {
    return <PrivacyPolicy t={t} onBack={() => setPage("home")} />;
  }

  return (
    <div style={{
      background: t.bg, color: t.text, fontFamily: "'Inter',sans-serif", minHeight: "100vh",
      transition: "background 0.3s ease, color 0.3s ease",
      "--theme-bg": t.bg, "--theme-bg-raised": t.bgRaised, "--theme-bg-hover": t.bgHover,
      "--theme-border": t.border, "--theme-border-hov": t.borderHov, "--theme-purple": t.purple,
      "--theme-teal": t.teal, "--theme-border-accent": t.borderAccent,
    }}>
      <Nav t={t} dark={dark} setDark={setDark} scrolled={scrolled} onContactClick={openContact} setPage={setPage} />
      <Hero t={t} onContactClick={openContact} />
      <Capabilities t={t} />
      <Work t={t} />
      <ProductsInDevelopment t={t} onContactClick={openContact} />
      <Testimonials t={t} />
      <Community t={t} dark={dark} onContactClick={openContact} />
      <AboutUs t={t} />
      <Team t={t} />
      <CTABanner t={t} onContactClick={openContact} />
      <Footer t={t} dark={dark} setPage={setPage} />
      <ContactModal t={t} open={contactState.open} initialState={contactState} onClose={() => setContactState(prev => ({...prev, open: false}))} />
    </div>
  );
}