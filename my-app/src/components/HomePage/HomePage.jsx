import "./HomePage.css";
import { useState } from "react";
import NavigationBar from "../NavigationBar/NavigationBar";

// ── Import your product images ──
import ceraveCleanserImg     from "../../assets/CeraveHydratingCleanser.jpg";
import ceraveSerumImg        from "../../assets/ceraveHydratingSerum.jpg";
import cetaphilImg           from "../../assets/CetaphilGentleFoamCleanser.jpg";
import glowRecipeImg         from "../../assets/GlowRecipeWatermelonPHA.jpg";
import laRocheMoisturiserImg from "../../assets/LaRochePosayDoubleRepairMoisturiser.jpg";
import laRocheSunscreenImg   from "../../assets/LaRochePosaySunscreen.jpg";
import rocRetinolImg         from "../../assets/RoCRetinolCream.jpg";
import theOrdinaryImg        from "../../assets/TheOrdinaryNiancinamide.jpg";
import ultraVioletteImg      from "../../assets/UltraVioletteSPF50Sunscreen.jpg";

// ── Skincare step definitions ──
const STEPS = [
  {
    id: "toner",
    step: "Step 1",
    label: "Toner",
    explanation:
      "A toner is a fast-absorbing, water-like liquid applied after cleansing to remove leftover impurities, balance skin pH, and provide a quick hydration boost. Modern, alcohol-free formulas prep the skin for serums and moisturisers, making them ideal for adding active ingredients like hyaluronic acid or acne-fighting acids.",
    products: [
      { id: 1, name: "Watermelon Glow PHA+BHA Toner",   brand: "Glow Recipe",  size: "150ml", price: "$38.00", image: glowRecipeImg },
      { id: 2, name: "Niacinamide 10% + Zinc 1%",       brand: "The Ordinary", size: "30ml",  price: "$12.00", image: theOrdinaryImg },
      { id: 3, name: "Hydrating Hyaluronic Acid Serum", brand: "CeraVe",       size: "30ml",  price: "$24.00", image: ceraveSerumImg },
    ],
  },
  {
    id: "cleanser",
    step: "Step 2",
    label: "Cleanser",
    explanation:
      "A cleanser removes dirt, oil, makeup, and pollutants from the surface of your skin. Using one morning and night keeps pores clear and prevents breakouts. Choose a gentle, non-stripping formula suited to your skin type — foaming for oily skin, cream or micellar for dry or sensitive skin.",
    products: [
      { id: 1, name: "Hydrating Facial Cleanser",   brand: "CeraVe",         size: "473ml", price: "$18.00", image: ceraveCleanserImg },
      { id: 2, name: "Gentle Foaming Cleanser",     brand: "Cetaphil",       size: "236ml", price: "$14.00", image: cetaphilImg },
      { id: 3, name: "Anthelios SPF 50+ Invisible", brand: "La Roche-Posay", size: "50ml",  price: "$36.00", image: laRocheSunscreenImg },
    ],
  },
  {
    id: "moisturiser",
    step: "Step 3",
    label: "Moisturiser",
    explanation:
      "A moisturiser seals hydration into the skin and strengthens the skin barrier. Even oily skin needs one — skipping it can trigger excess oil production. Look for ceramides and hyaluronic acid for barrier repair, or retinol formulas at night if you're targeting fine lines (best from age 25+).",
    products: [
      { id: 1, name: "Toleriane Double Repair Moisturiser", brand: "La Roche-Posay", size: "75ml",  price: "$32.00", image: laRocheMoisturiserImg },
      { id: 2, name: "Retinol Correxion Night Cream",       brand: "RoC",            size: "30ml",  price: "$42.00", image: rocRetinolImg },
      { id: 3, name: "Hydrating Facial Cleanser",           brand: "CeraVe",         size: "473ml", price: "$18.00", image: ceraveCleanserImg },
    ],
  },
  {
    id: "sunscreen",
    step: "Step 4",
    label: "Sunscreen",
    explanation:
      "Sunscreen is the single most effective anti-ageing product you can use. UV exposure causes up to 90% of visible skin ageing. Apply SPF 50+ every morning — even on cloudy days — as the last step in your routine. Reapply every 2 hours if outdoors.",
    products: [
      { id: 1, name: "Supreme Screen SPF 50+ Hydrating", brand: "Ultra Violette",  size: "50ml", price: "$46.00", image: ultraVioletteImg },
      { id: 2, name: "Anthelios SPF 50+ Invisible",      brand: "La Roche-Posay", size: "50ml", price: "$36.00", image: laRocheSunscreenImg },
      { id: 3, name: "Niacinamide 10% + Zinc 1%",        brand: "The Ordinary",   size: "30ml", price: "$12.00", image: theOrdinaryImg },
    ],
  },
];

// ── Individual Step Section ──
function StepSection({ step, savedIds, onToggleSave }) {
  const [open, setOpen]       = useState(false);
  const [carouselIdx, setIdx] = useState(0);

  const prev = () => setIdx((i) => Math.max(0, i - 1));
  const next = () => setIdx((i) => Math.min(step.products.length - 1, i + 1));

  const visible = step.products.slice(carouselIdx, carouselIdx + 3);

  return (
    <div className="step-section">

      {/* Step heading + toggle */}
      <div className="step-heading">
        <div>
          <span className="step-label">{step.step}: {step.label}</span>
          <button
            className="step-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
          >
            What is a {step.label.toLowerCase()}?
            <span className="toggle-chevron">{open ? "∧" : "∨"}</span>
          </button>
        </div>
      </div>

      {/* Collapsible explanation */}
      {open && (
        <div className="step-explanation">
          {step.explanation}
        </div>
      )}

      {/* Horizontal product carousel */}
      <div className="carousel-row">
        <button
          className="carousel-arrow"
          onClick={prev}
          disabled={carouselIdx === 0}
        >
          ‹
        </button>

        <div className="carousel-track">
          {visible.map((product) => {
            const saved = savedIds.has(`${step.id}-${product.id}`);
            return (
              <div key={product.id} className="product-card">
                <button
                  className={`heart-btn ${saved ? "heart-btn--saved" : ""}`}
                  onClick={() => onToggleSave(`${step.id}-${product.id}`)}
                  aria-label="Save product"
                >
                  ♥
                </button>
                <div className="card-img-wrap">
                  <img src={product.image} alt={product.name} className="card-img" />
                </div>
                <div className="card-info">
                  <span className="card-option">
                    {step.label} option {carouselIdx + visible.indexOf(product) + 1}
                  </span>
                  <span className="card-name">{product.name} — {product.size}</span>
                  <span className="card-price">{product.price}</span>
                </div>
              </div>
            );
          })}
        </div>

        <button
          className="carousel-arrow"
          onClick={next}
          disabled={carouselIdx + 3 >= step.products.length}
        >
          ›
        </button>
      </div>
    </div>
  );
}

// ── Main HomePage ──
function HomePage() {
  const [saved, setSaved] = useState(new Set());

  const toggleSave = (key) => {
    setSaved((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  return (
    <div className="home-container">

      {/* NavigationBar component */}
      <NavigationBar/>

      {/* PAGE BODY */}
      <div className="main-content">
        <div className="home-content">

          <div className="home-header">
            <h1 className="home-title">Meet your skincare routine....</h1>
            <p className="home-subtitle">Select from the suggested options</p>
          </div>

          {STEPS.map((step) => (
            <StepSection
              key={step.id}
              step={step}
              savedIds={saved}
              onToggleSave={toggleSave}
            />
          ))}

          <div className="build-row">
            <button className="build-btn">
              Build Routine →
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}

export default HomePage;