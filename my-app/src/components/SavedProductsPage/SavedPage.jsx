import "./SavedPage.css";
import { useState } from "react";

const savedProducts = [
  {
    id: 1,
    name: "Rich Cushion Cream - 50ml",
    brand: "Summer Fridays",
    category: "Moisturizer",
    price: "$90.00",
    image: null,
  },
  {
    id: 2,
    name: "Extremely Gentle No Rinse Cleanser - 200ml",
    brand: "Avène",
    category: "Cleanser",
    price: "$35.00",
    image: null,
  },
  {
    id: 3,
    name: "Moisturising Cream - 454g",
    brand: "CeraVe",
    category: "Moisturizer",
    price: "$35.00",
    image: null,
  },
];

const savedRoutines = [
  { id: 1, name: "Daily Routine" },
  { id: 2, name: "Night Routine" },
];

function SavedPage() {
  const [search, setSearch] = useState("");

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
            <a href="#">Routines</a>
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
