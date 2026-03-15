import "./ProductDiscoveryPage.css";
import { useState } from "react";

// Image imports
import ceraveCleanserImg       from "../../assets/CeraveHydratingCleanser.jpg";
import ceraveSerumImg          from "../../assets/ceraveHydratingSerum.jpg";
import cetaphilImg             from "../../assets/CetaphilGentleFoamCleanser.jpg";
import glowRecipeImg           from "../../assets/GlowRecipeWatermelonPHA.jpg";
import laRocheMoisturiserImg   from "../../assets/LaRochePosayDoubleRepairMoisturiser.jpg";
import laRocheSunscreenImg     from "../../assets/LaRochePosaySunscreen.jpg";
import rocRetinolImg           from "../../assets/RoCRetinolCream.jpg";
import theOrdinaryImg          from "../../assets/TheOrdinaryNiancinamide.jpg";
import ultraVioletteImg        from "../../assets/UltraVioletteSPF50Sunscreen.jpg";
import NavigationBar from "../NavigationBar/NavigationBar";

const discoverProducts = [
  {
    id: 1,
    name: "Hydrating Facial Cleanser",
    brand: "CeraVe",
    category: "Cleanser",
    price: "$18",
    rating: 4.8,
    image: ceraveCleanserImg,
    ageRange: "13+",
    ageNote: "A perfect first cleanser for teens and adults of all ages",
    about:
      "A non-foaming, soap-free cleanser that removes dirt and makeup without disrupting the skin barrier. Packed with ceramides and hyaluronic acid to keep skin soft and hydrated after every wash.",
    skinTypes: [
      { label: "Dry Skin",          compatible: true  },
      { label: "Normal Skin",       compatible: true  },
      { label: "Sensitive Skin",    compatible: true  },
      { label: "Combination Skin",  compatible: true },
      { label: "Oily Skin",         compatible: false },
      { label: "Acne-Prone",        compatible: false },
    ],
    pros: [
      "Maintains moisture barrier",
      "Fragrance-free & gentle",
      "Non-comedogenic",
      "Affordable & widely available",
    ],
    cons: [
      "Too rich for oily skin",
      "Doesn't remove heavy makeup",
      "Not ideal for acne-prone skin",
    ],
    tags: ["Hydrating", "Sensitive Skin", "Fragrance-Free"],
    reviews: [
      { name: "Aisha M.", date: "March 10, 2026",   stars: 5, text: "My skin has never felt so calm. Redness reduced within a week!" },
      { name: "Lena T.",  date: "February 28, 2026", stars: 4, text: "Really gentle and affordable. Great for my dry skin." },
    ],
  },
  {
    id: 2,
    name: "Hydrating Hyaluronic Acid Serum",
    brand: "CeraVe",
    category: "Serum",
    price: "$24",
    rating: 4.7,
    image: ceraveSerumImg,
    ageRange: "16+",
    ageNote: "Great from teens onward — an easy first serum for any skin type",
    about:
      "A lightweight serum with three forms of hyaluronic acid that draws moisture into the skin at multiple depths. MVE® delivery technology releases ceramides over time to maintain a healthy barrier.",
    skinTypes: [
      { label: "Dry Skin",       compatible: true },
      { label: "Normal Skin",    compatible: true },
      { label: "Sensitive Skin", compatible: true },
      { label: "Combination Skin",  compatible: true },
      { label: "Oily Skin",      compatible: true },
      { label: "Acne-Prone",     compatible: true },
    ],
    pros: [
      "All skin types welcome",
      "Fragrance-free",
      "Lightweight — layers well",
      "Contains ceramides",
    ],
    cons: [
      "No brightening or exfoliating action",
      "Needs a moisturiser on top",
      "Results subtle for very dehydrated skin",
    ],
    tags: ["Hydrating", "Hyaluronic Acid", "All Skin Types", "Fragrance-Free"],
    reviews: [
      { name: "Sophie R.", date: "March 6, 2026",   stars: 5, text: "My skin feels so plump and bouncy since using this daily!" },
      { name: "James K.",  date: "February 18, 2026", stars: 4, text: "Great value for a hyaluronic acid serum. Layers perfectly under moisturiser." },
    ],
  },
  {
    id: 3,
    name: "Anthelios SPF 50+ Invisible Fluid",
    brand: "La Roche-Posay",
    category: "Sunscreen",
    price: "$36",
    rating: 4.9,
    image: laRocheSunscreenImg,
    ageRange: "15+",
    ageNote: "Daily SPF from mid-teens onward is the #1 anti-ageing step you can take",
    about:
      "Broad-spectrum SPF 50+ with ultra-high UVA/UVB protection. Invisible fluid formula leaves zero white cast and is non-perfumed. Dermatologist-tested and water-resistant.",
    skinTypes: [
      { label: "Dry Skin",       compatible: true },
      { label: "Normal Skin",    compatible: true },
      { label: "Sensitive Skin", compatible: true },
      { label: "Combination Skin",  compatible: true },
      { label: "Oily Skin",      compatible: true },
      { label: "Acne-Prone",     compatible: true },
    ],
    pros: [
      "No white cast",
      "Suits all skin types",
      "Non-perfumed formula",
      "Water-resistant",
    ],
    cons: [
      "Higher price point",
      "Shake before use",
      "Can pill under heavy foundation",
    ],
    tags: ["SPF 50+", "Broad Spectrum", "Daily Use", "All Skin Types"],
    reviews: [
      { name: "Mei L.",    date: "March 12, 2026", stars: 5, text: "Best SPF I've tried. No white cast and sits perfectly under foundation." },
      { name: "Carlos D.", date: "March 1, 2026",  stars: 5, text: "I never wore SPF — this changed everything. Feels like nothing on my skin." },
    ],
  },
  {
    id: 4,
    name: "Gentle Foaming Cleanser",
    brand: "Cetaphil",
    category: "Cleanser",
    price: "$14",
    rating: 4.6,
    image: cetaphilImg,
    ageRange: "13+",
    ageNote: "Great for teens and young adults managing oily or breakout-prone skin",
    about:
      "A soap-free, non-comedogenic foaming cleanser that removes excess oil and impurities without stripping the skin. Gentle enough for twice-daily use on normal, dry, and combination skin.",
    skinTypes: [
      { label: "Dry Skin",       compatible: false },
      { label: "Normal Skin",    compatible: true  },
      { label: "Sensitive Skin", compatible: true  },
      { label: "Combination Skin",  compatible: true },
      { label: "Oily Skin",      compatible: true  },
      { label: "Acne-Prone",     compatible: true  },
    ],
    pros: [
      "Controls oil without over-drying",
      "Non-comedogenic",
      "Very affordable",
      "Fragrance-free",
    ],
    cons: [
      "Too stripping for dry skin",
      "Minimal moisturising benefits",
      "No active ingredients",
    ],
    tags: ["Cleanser", "Oily Skin", "Acne-Prone", "Non-Comedogenic"],
    reviews: [
      { name: "Jake R.",  date: "March 5, 2026",     stars: 4, text: "Keeps my oily skin in check without that tight, dry feeling." },
      { name: "Priya N.", date: "February 20, 2026", stars: 5, text: "My go-to since high school. Never breaks me out." },
    ],
  },
  {
    id: 5,
    name: "Retinol Correxion Night Cream",
    brand: "RoC",
    category: "Moisturiser",
    price: "$42",
    rating: 4.5,
    image: rocRetinolImg,
    ageRange: "25–50",
    ageNote: "Best from age 25 when fine lines begin. Not recommended under 25 or during pregnancy",
    about:
      "An anti-ageing night cream with encapsulated retinol that gradually releases to minimise irritation. Visibly reduces fine lines in as little as 4 weeks while you sleep.",
    skinTypes: [
      { label: "Dry Skin",       compatible: true  },
      { label: "Normal Skin",    compatible: true  },
      { label: "Sensitive Skin", compatible: false },
      { label: "Combination Skin",  compatible: true },
      { label: "Oily Skin",      compatible: false },
      { label: "Acne-Prone",     compatible: false },
    ],
    pros: [
      "Clinically proven retinol",
      "Reduces fine lines in 4 weeks",
      "Encapsulated for less irritation",
      "Rich, nourishing texture",
    ],
    cons: [
      "Not for sensitive or acne-prone skin",
      "Not safe during pregnancy",
      "Causes initial purging",
      "Must pair with SPF during the day",
    ],
    tags: ["Anti-Ageing", "Night", "Retinol", "Ages 25–50", "Dry Skin"],
    reviews: [
      { name: "Sophie R.", date: "March 8, 2026",     stars: 5, text: "After 6 weeks my crow's feet are noticeably softer. Love this!" },
      { name: "Tom W.",    date: "February 14, 2026", stars: 4, text: "Took 2 weeks of purging but my skin looks so much smoother now." },
    ],
  },
  {
    id: 6,
    name: "Niacinamide 10% + Zinc 1%",
    brand: "The Ordinary",
    category: "Serum",
    price: "$12",
    rating: 4.7,
    image: theOrdinaryImg,
    ageRange: "16–35",
    ageNote: "Perfect for teens and young adults battling oiliness, large pores, and breakouts",
    about:
      "A high-strength niacinamide serum that visibly minimises pores, controls sebum, and brightens uneven skin tone. Zinc supports a clearer complexion. Exceptional value.",
    skinTypes: [
      { label: "Dry Skin",       compatible: false },
      { label: "Normal Skin",    compatible: true  },
      { label: "Sensitive Skin", compatible: false },
      { label: "Combination Skin",  compatible: true },
      { label: "Oily Skin",      compatible: true  },
      { label: "Acne-Prone",     compatible: true  },
    ],
    pros: [
      "Minimises pores visibly",
      "Controls excess oil",
      "Brightens skin tone",
      "Extremely affordable",
    ],
    cons: [
      "Can pill under other serums",
      "Too strong for sensitive skin",
      "Doesn't hydrate dry skin",
    ],
    tags: ["Pore-Minimising", "Oil Control", "Acne-Prone", "Brightening"],
    reviews: [
      { name: "Emma K.", date: "March 10, 2026",     stars: 5, text: "My pores look so much smaller after 3 weeks. Incredible for the price!" },
      { name: "Liam S.", date: "February 25, 2026",  stars: 4, text: "Great for oily skin — shine is gone by midday." },
    ],
  },
  {
    id: 7,
    name: "Watermelon Glow PHA+BHA Toner",
    brand: "Glow Recipe",
    category: "Toner",
    price: "$38",
    rating: 4.6,
    image: glowRecipeImg,
    ageRange: "18–40",
    ageNote: "Great for young adults wanting gentle exfoliation without harsh acids",
    about:
      "A gentle exfoliating toner using PHA and BHA to smooth texture and resurface skin. Watermelon extract and hyaluronic acid maintain hydration while minimising pores. No harsh alcohol.",
    skinTypes: [
      { label: "Dry Skin",       compatible: false },
      { label: "Normal Skin",    compatible: true  },
      { label: "Sensitive Skin", compatible: false },
      { label: "Combination Skin",  compatible: true },
      { label: "Oily Skin",      compatible: true  },
      { label: "Acne-Prone",     compatible: true  },
    ],
    pros: [
      "Gentle exfoliation",
      "Hydrating — not drying",
      "Minimises pore appearance",
      "Lovely gel texture",
    ],
    cons: [
      "Pricey for a toner",
      "Contains fragrance",
      "Not for sensitive skin",
    ],
    tags: ["Exfoliating", "Toner", "Oily Skin", "Acne-Prone", "BHA"],
    reviews: [
      { name: "Sophie R.", date: "March 5, 2026",     stars: 5, text: "My skin looks so dewy and glassy the morning after. Obsessed!" },
      { name: "James K.",  date: "February 14, 2026", stars: 4, text: "Really smoothed out my texture. The scent is strong but nice." },
    ],
  },
  {
    id: 8,
    name: "Toleriane Double Repair Moisturiser",
    brand: "La Roche-Posay",
    category: "Moisturiser",
    price: "$32",
    rating: 4.7,
    image: laRocheMoisturiserImg,
    ageRange: "18–45",
    ageNote: "Great for adults whose barrier needs repair — especially after using actives or retinol",
    about:
      "An oil-free moisturiser that restores the skin barrier in one hour. Contains ceramides, niacinamide, and glycerin for deep hydration without greasiness. Tested on sensitive and post-procedure skin.",
    skinTypes: [
      { label: "Dry Skin",       compatible: true },
      { label: "Normal Skin",    compatible: true },
      { label: "Sensitive Skin", compatible: true },
      { label: "Combination Skin",  compatible: true },
      { label: "Oily Skin",      compatible: true },
      { label: "Acne-Prone",     compatible: true },
    ],
    pros: [
      "Restores barrier quickly",
      "Oil-free & lightweight",
      "Dermatologist-tested",
      "Works under SPF & makeup",
    ],
    cons: [
      "Pump can clog over time",
      "Not rich enough for very dry skin",
      "No active ingredients",
    ],
    tags: ["Barrier Repair", "All Skin Types", "Oil-Free", "Sensitive Skin"],
    reviews: [
      { name: "Priya N.", date: "March 8, 2026",    stars: 5, text: "Perfect under makeup. Stays matte and hydrated all day." },
      { name: "Tom W.",   date: "January 30, 2026", stars: 4, text: "Good workhorse moisturiser. Wish it came in a larger size." },
    ],
  },
  {
    id: 9,
    name: "Supreme Screen SPF 50+ Hydrating",
    brand: "Ultra Violette",
    category: "Sunscreen",
    price: "$46",
    rating: 4.9,
    image: ultraVioletteImg,
    ageRange: "18+",
    ageNote: "Especially loved by adults with dry or normal skin who want SPF + hydration in one step",
    about:
      "An Australian-made SPF50+ hydrating skinscreen that doubles as a moisturiser. Broad-spectrum UVA+UVB protection with a dewy, skin-loving finish. No white cast, reef-safe, and water resistant.",
    skinTypes: [
      { label: "Dry Skin",       compatible: true  },
      { label: "Normal Skin",    compatible: true  },
      { label: "Sensitive Skin", compatible: false },
      { label: "Combination Skin",  compatible: true },
      { label: "Oily Skin",      compatible: false },
      { label: "Acne-Prone",     compatible: false },
    ],
    pros: [
      "Hydrating SPF in one step",
      "Zero white cast",
      "Reef-safe Australian formula",
      "Dewy, glowy finish",
    ],
    cons: [
      "Higher price point",
      "Too dewy for oily skin",
      "Sells out quickly",
    ],
    tags: ["SPF 50+", "Hydrating", "Dry Skin", "Australian Made"],
    reviews: [
      { name: "Mei L.",    date: "March 12, 2026", stars: 5, text: "Genuinely the best SPF I've tried. Skin looks so healthy and glowy." },
      { name: "Carlos D.", date: "March 1, 2026",  stars: 5, text: "Replaced my moisturiser AND sunscreen in one product. Love it." },
    ],
  },
];

function StarRow({ rating }) {
  const full  = Math.round(rating);
  const empty = 5 - full;
  return (
    <span className="star-row">
      {"★".repeat(full)}{"☆".repeat(empty)}
      <span className="star-num">{rating}</span>
    </span>
  );
}

function ProductDiscovery() {
  const [selected, setSelected] = useState(discoverProducts[0]);
  const [search, setSearch]     = useState("");

  const filtered = discoverProducts.filter((p) => {
    const q = search.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  return (
    <>
      <NavigationBar />
      <div className="saved-container">

        {/* MAIN CONTENT */}
        <div className="saved-content">
          <div className="saved-header">
            <h1 className="saved-title">Discover Products</h1>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search by name, brand, skin type..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <line x1="16.5" y1="16.5" x2="22" y2="22" />
              </svg>
            </div>
          </div>

          <div className="saved-panel">

          {/* LEFT: Product List */}
          <div className="product-list">
            {filtered.map((product) => (
              <div
                key={product.id}
                className={`product-item ${selected?.id === product.id ? "product-item--active" : ""}`}
                onClick={() => setSelected(product)}
              >
                <div className="product-item-image">
                  <img src={product.image} alt={product.name} className="product-img" />
                </div>
                <div className="product-item-info">
                  <span className="product-item-name">{product.name}</span>
                  <span className="product-item-brand">{product.brand}</span>
                  <span className="product-item-category">{product.category} · {product.price}</span>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <p className="no-results">No products found for "{search}"</p>
            )}
          </div>

            {/* RIGHT: Product Detail */}
            <div className="product-detail">
              {selected ? (
                <div className="detail-scroll">

                {/* Hero image */}
                <div className="detail-hero">
                  <img src={selected.image} alt={selected.name} className="detail-hero-img" />
                  <div className="detail-rating-badge">
                    <StarRow rating={selected.rating} />
                  </div>
                </div>

                  <div className="detail-info">
                    <p className="detail-category">{selected.category}</p>
                    <h2 className="detail-name">{selected.name}</h2>
                    <p className="detail-brand">{selected.brand} · <strong>{selected.price}</strong></p>

                    {/* Age range banner */}
                    <div className="age-banner">
                      <span className="age-icon">🎂</span>
                      <div>
                        <span className="age-range">Best for ages {selected.ageRange}</span>
                        <p className="age-note">{selected.ageNote}</p>
                      </div>
                    </div>

                    {/* About */}
                    <p className="detail-description">{selected.about}</p>

                    {/* Skin type compatibility */}
                    <div className="skin-section">
                      <p className="skin-section-title">Skin Type Compatibility</p>
                      <div className="skin-grid">
                        {selected.skinTypes.map((st) => (
                          <div
                            key={st.label}
                            className={`skin-badge ${st.compatible ? "skin-badge--yes" : "skin-badge--no"}`}
                          >
                            <span className="skin-dot">{st.compatible ? "✓" : "✕"}</span>
                            {st.label}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pros & Cons */}
                    <div className="pros-cons-row">
                      <div className="pros-box">
                        <p className="pros-cons-title">👍 Pros</p>
                        <ul className="pros-cons-list">
                          {selected.pros.map((p) => (
                            <li key={p}><span className="check">✓</span>{p}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="cons-box">
                        <p className="pros-cons-title">👎 Cons</p>
                        <ul className="pros-cons-list">
                          {selected.cons.map((c) => (
                            <li key={c}><span className="cross">✕</span>{c}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="detail-tags">
                      {selected.tags.map((tag) => (
                        <span key={tag} className="detail-tag">{tag}</span>
                      ))}
                    </div>

                    {/* Reviews */}
                    <p className="reviews-title">Customer Reviews</p>
                    {selected.reviews.map((r) => (
                      <div key={r.name} className="review-card">
                        <div className="review-header">
                          <div>
                            <span className="reviewer-name">{r.name}</span>
                            <span className="review-date">{r.date}</span>
                          </div>
                          <span className="review-stars">★ {r.stars}</span>
                        </div>
                        <p className="review-text">{r.text}</p>
                      </div>
                    ))}

                  </div>
                </div>
              ) : (
                <p className="detail-empty">Select a product to view details.</p>
              )}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDiscovery;