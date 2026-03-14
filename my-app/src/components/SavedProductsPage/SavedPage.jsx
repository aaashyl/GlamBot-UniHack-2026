import "./SavedPage.css";
import { useState } from "react";
import CeraveCleanser from "../../assets/CeraveHydratingCleanser.jpg";
import CetaphilCleanser from "../../assets/CetaphilGentleFoamCleanser.jpg";
import GlowRecipeToner from "../../assets/GlowRecipeWatermelonPHA.jpg";
import CeraveSerum from "../../assets/ceraveHydratingSerum.jpg";
import LaRochePoSaySunscreen from "../../assets/LaRochePosaySunscreen.jpg";
import AveneCleanser from "../../assets/AveneToleranceExtremelyGentleCleanser.jpg";

const savedProducts = [
  {
    id: 1,
    name: "Hydrating Facial Cleanser - 473ml",
    brand: "CeraVe",
    category: "Cleanser",
    price: "$16.99",
    image: CeraveCleanser,
  },
  {
    id: 2,
    name: "Gentle Foaming Cleanser - 236ml",
    brand: "Cetaphil",
    category: "Cleanser",
    price: "$8.99",
    image: CetaphilCleanser,
  },
  {
    id: 3,
    name: "Watermelon Glow Pore-Tight Toner",
    brand: "Glow Recipe",
    category: "Toner",
    price: "$42.00",
    image: GlowRecipeToner,
  },
  {
    id: 4,
    name: "Hydrating Hyaluronic Acid Serum - 30ml",
    brand: "CeraVe",
    category: "Serum",
    price: "$19.99",
    image: CeraveSerum,
  },
  {
    id: 5,
    name: "Anthelios SPF 50+ Sunscreen - Fluid",
    brand: "La Roche-Posay",
    category: "Sunscreen",
    price: "$34.00",
    image: LaRochePoSaySunscreen,
  },
  {
    id: 6,
    name: "Extremely Gentle Cleanser - 200ml",
    brand: "Avène",
    category: "Cleanser",
    price: "$12.00",
    image: AveneCleanser,
  },
];

const savedRoutines = [
  { id: 1, name: "Daily Routine" },
  { id: 2, name: "Night Routine" },
];

function SavedPage() {
  const [search, setSearch] = useState("");
  const [saved, setSaved] = useState([1, 2, 3]); // all saved by default

  const toggleSave = (id) => {
    setSaved((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const filtered = savedProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="saved-container">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-inner">
          <span className="nav-logo">GlamBot</span>
          <div className="nav-links">
            <a href="#">Discovery</a>
            <a href="#" className="nav-active">
              Saved <span className="heart">♥</span>
            </a>
             <a href="#" className="nav-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <div className="saved-content">

        {/* PAGE TITLE */}
        <div className="page-title-row">
          <span className="page-heart">♥</span>
          <h1 className="page-title">Saved</h1>
        </div>

        {/* ROUTINES SECTION */}
        <section className="section">
          <h2 className="section-heading">Routines</h2>
          <div className="routines-grid">
            {savedRoutines.map((routine) => (
              <button key={routine.id} className="routine-btn">
                {routine.name} <span className="routine-arrow">›</span>
              </button>
            ))}
          </div>
        </section>

        {/* PRODUCTS SECTION */}
        <section className="section">
          <div className="section-header">
            <h2 className="section-heading">Products</h2>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <line x1="16.5" y1="16.5" x2="22" y2="22" />
              </svg>
            </div>
          </div>
             <div className="products-grid">
              {filtered.map((product) => (
                <div key={product.id} className="product-card">
<button
  className={`card-heart-btn ${saved.includes(product.id) ? "card-heart-btn--saved" : ""}`}
  onClick={() => toggleSave(product.id)}
>
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
</button>
                  <div className="product-card-image">
                    {product.image
                      ? <img src={product.image} alt={product.name} />
                      : <div className="product-card-placeholder" />
                    }
                  </div>
                  <div className="product-card-info">
                    <p className="product-card-category">{product.category}</p>
                    <p className="product-card-name">{product.name}</p>
                    <p className="product-card-price">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
         </section>

      </div>
    </div>
  );
}

export default SavedPage;
