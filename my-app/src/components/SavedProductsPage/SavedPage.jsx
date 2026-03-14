import "./SavedPage.css";
import { useState } from "react";

const savedProducts = [
  {
    id: 1,
    name: "Hydrating Serum",
    brand: "CeraVe",
    category: "Serum",
    description: "A lightweight hydrating serum with hyaluronic acid that draws moisture into the skin and helps retain it for a smooth, plump complexion.",
    tags: ["Hydrating", "Sensitive Skin", "Fragrance-Free"],
  },
  {
    id: 2,
    name: "SPF 50 Sunscreen",
    brand: "La Roche-Posay",
    category: "SPF",
    description: "Broad-spectrum mineral sunscreen suitable for all skin types. Lightweight, non-greasy formula that blends seamlessly.",
    tags: ["SPF", "Mineral", "Daily Use"],
  },
  {
    id: 3,
    name: "Gentle Foaming Cleanser",
    brand: "Cetaphil",
    category: "Cleanser",
    description: "A soap-free, non-comedogenic cleanser that removes dirt and oil without stripping the skin's natural moisture barrier.",
    tags: ["Cleanser", "Gentle", "Non-Comedogenic"],
  },
  {
    id: 4,
    name: "Retinol Night Cream",
    brand: "RoC",
    category: "Moisturiser",
    description: "An anti-aging night cream with retinol that helps reduce fine lines and wrinkles while you sleep, leaving skin visibly smoother.",
    tags: ["Anti-Aging", "Night", "Retinol"],
  },
];

function SavedPage() {
  const [selected, setSelected] = useState(savedProducts[0]);
  const [search, setSearch] = useState("");

  const filtered = savedProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase())
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

      {/* MAIN CONTENT */}
      <div className="saved-content">
        <div className="saved-header">
          <h1 className="saved-title">Saved Products</h1>
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

        <div className="saved-panel">
          {/* LEFT: Product List */}
          <div className="product-list">
            {filtered.map((product) => (
              <div
                key={product.id}
                className={`product-item ${selected?.id === product.id ? "product-item--active" : ""}`}
                onClick={() => setSelected(product)}
              >
                <div className="product-item-image" />
                <div className="product-item-info">
                  <span className="product-item-name">{product.name}</span>
                  <span className="product-item-brand">{product.brand}</span>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <p className="no-results">No products found.</p>
            )}
          </div>

          {/* RIGHT: Product Detail */}
          <div className="product-detail">
            {selected ? (
              <>
                <div className="detail-image-placeholder" />
                <div className="detail-info">
                  <p className="detail-category">{selected.category}</p>
                  <h2 className="detail-name">{selected.name}</h2>
                  <p className="detail-brand">{selected.brand}</p>
                  <p className="detail-description">{selected.description}</p>
                  <div className="detail-tags">
                    {selected.tags.map((tag) => (
                      <span key={tag} className="detail-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <p className="detail-empty">Select a product to view details.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavedPage;
