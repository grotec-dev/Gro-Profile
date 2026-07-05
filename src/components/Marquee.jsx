export default function Marquee({ t }) {
  const items = ["FASTAPI", "NEXT.JS", "REACT NATIVE", "LINUX", "CLOUD INFRASTRUCTURE", "CYBER SECURITY"];
  // Repeat items to fill space and enable continuous wrapping
  const repeatedItems = [...items, ...items, ...items, ...items];
  
  return (
    <section id="marquee" className="marquee-container" aria-hidden="true">
      <div className="marquee-content">
        {repeatedItems.map((item, idx) => (
          <span key={idx} className="marquee-item">
            {item} <span style={{ color: t.purple, marginLeft: "2rem" }}>//</span>
          </span>
        ))}
      </div>
    </section>
  );
}
