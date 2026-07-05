import { useState, useEffect } from "react";
import { DARK } from "./components/theme";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Community from "./components/Community";
import { CTABanner, Footer } from "./components/CTABanner";
import ContactModal from "./components/ContactModal";
import PrivacyPolicy from "./components/LegalNotice";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import PortfolioPage from "./components/PortfolioPage";
import Marquee from "./components/Marquee";
import FeaturedBuilds from "./components/FeaturedBuilds";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [page, setPage] = useState("home");
  const [contactState, setContactState] = useState({ open: false, service: "Development", description: "" });
  const t = DARK;

  const openContact = (service = "Development", description = "") => {
    const isOpen = typeof service === 'boolean' ? service : true;
    const actualService = typeof service === 'string' ? service : "Development";
    setContactState({ open: isOpen, service: actualService, description });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

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
  }, [t.bg, t.text]);

  return (
    <div style={{
      background: t.bg, color: t.text, fontFamily: "'Inter',sans-serif", minHeight: "100vh",
      transition: "background 0.3s ease, color 0.3s ease",
      "--theme-bg": t.bg, "--theme-bg-raised": t.bgRaised, "--theme-bg-hover": t.bgHover,
      "--theme-border": t.border, "--theme-border-hov": t.borderHov, "--theme-purple": t.purple,
      "--theme-teal": t.teal, "--theme-border-accent": t.borderAccent,
    }}>
      <Nav t={t} scrolled={scrolled} setPage={setPage} page={page} openContact={openContact} />
      
      {page === "home" && (
        <main id="main-content">
          <Hero t={t} setPage={setPage} openContact={openContact} />
          <Marquee t={t} />
          <FeaturedBuilds t={t} setPage={setPage} />
          <Community t={t} dark={true} onContactClick={openContact} />
          <Testimonials t={t} />
        </main>
      )}

      {page === "about" && (
        <AboutPage t={t} />
      )}

      {page === "services" && (
        <ServicesPage t={t} setPage={setPage} openContact={openContact} />
      )}

      {page === "portfolio" && (
        <PortfolioPage t={t} setPage={setPage} openContact={openContact} />
      )}

      {page === "contact" && (
        <main id="main-content">
          <ContactPage t={t} />
        </main>
      )}

      {page === "privacy" && (
        <main id="main-content">
          <PrivacyPolicy t={t} onBack={() => setPage("home")} />
        </main>
      )}

      {page !== "contact" && page !== "privacy" && (
        <CTABanner t={t} onContactClick={openContact} />
      )}
      
      <Footer setPage={setPage} />
      <ContactModal t={t} open={contactState.open} initialState={contactState} onClose={() => setContactState(prev => ({...prev, open: false}))} />
    </div>
  );
}