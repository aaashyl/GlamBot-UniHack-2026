import "./RoutinePage.css";
import SignInPage from "../SignInPage/SignInPage";
import { useState } from "react";

import rhodeCleanserImg from "../../assets/rhode-cleanser.jpg";
import glowRecipeImg from "../../assets/glowreceipe.jpg";
import ordinarySerumImg from "../../assets/ordinary.jpg";
import summerFridaysImg from "../../assets/summer.jpg";

const routineSteps = [
  {
    id: 1,
    step: "Step 1: Cleanser",
    name: "Pineapple Refresh Cleanser",
    brand: "Rhode",
    price: "$52.00",
    image: rhodeCleanserImg,
    description:
      "The Rhode Pineapple Refresh Cleanser is a gentle daily cleanser designed to remove makeup, sunscreen, excess oil, and environmental impurities without stripping the skin of its natural moisture. As the first step in a skincare routine, cleansing is essential because it prepares the skin for the products that follow. This cleanser uses fruit enzymes derived from pineapple to help dissolve buildup on the skin’s surface while maintaining a soft, balanced complexion.\n\n\nIn your routine, this product should be used as the very first step both morning and night. Begin by wetting your face with lukewarm water, then massage a small amount of cleanser into the skin using circular motions. Focus on areas where oil and impurities tend to build up, such as the forehead, nose, and chin. After gently cleansing for about 30 seconds, rinse thoroughly and pat the skin dry with a clean towel.\n\nThe purpose of this step is to create a clean canvas for the rest of your routine. By removing dirt and oil, the skin becomes more receptive to toners, serums, and moisturisers applied afterwards. The formula is designed to cleanse effectively while keeping the skin barrier calm and hydrated, making it ideal for daily use and suitable for a wide range of skin types.",
    suitable: [
      "All skin types",
      "Normal skin",
      "Combination skin",
      "Oily skin",
      "Sensitive skin",
      "Morning routine",
      "Night routine",
      "Daily use"
    ],
    stores: [
      {
        name: "Rhode",
        url: "https://www.rhodeskin.com/products/pineapple-refresh-cleanser"
      },
      {
        name: "Sephora",
        url: "https://www.sephora.com"
      }
    ]
  },

  {
    id: 2,
    step: "Step 2: Toner",
    name: "Watermelon Glow PHA+BHA Toner",
    brand: "Glow Recipe",
    price: "$55.00",
    image: glowRecipeImg,
    description:
      "The Glow Recipe Watermelon Glow PHA+BHA Toner is a hydrating and gently exfoliating toner designed to refine pores, smooth skin texture, and boost hydration after cleansing. Toner is applied immediately after cleansing to rebalance the skin and prepare it for treatment products such as serums and moisturisers. This toner contains watermelon extract, which helps soothe and hydrate the skin, along with mild exfoliating acids that help remove dead skin cells from the surface.\n\nIn your routine, apply toner after cleansing by pouring a small amount onto your hands or a cotton pad and gently pressing it into the skin. Focus on evenly distributing the product across the face and neck without rubbing aggressively. This step helps replenish hydration that may have been lost during cleansing and ensures that the skin is ready to absorb active ingredients in the following steps.\n\nThe combination of PHA and BHA works to gently clear pores and improve skin clarity over time. Meanwhile, the hydrating ingredients help maintain skin comfort and prevent dryness. When used consistently, toner helps improve overall skin texture and glow while supporting a balanced skin barrier. It also allows serums applied afterwards to penetrate more effectively, making it an important transition step between cleansing and targeted treatments.",
    suitable: [
      "Normal skin",
      "Combination skin",
      "Oily skin",
      "Dull skin",
      "Morning routine",
      "Night routine"
    ],
    stores: [
      {
        name: "Glow Recipe",
        url: "https://www.glowrecipe.com/products/watermelon-glow-pha-bha-pore-tight-toner"
      },
      {
        name: "Sephora",
        url: "https://www.sephora.com"
      }
    ]
  },

  {
    id: 3,
    step: "Step 3: Serum",
    name: "Hyaluronic Acid 2% + B5",
    brand: "The Ordinary",
    price: "$17.00",
    image: ordinarySerumImg,
    description:
      "The Ordinary Hyaluronic Acid 2% + B5 is a hydrating serum designed to attract and retain moisture in the skin. Serums are typically used after toner because their lightweight formulas contain concentrated active ingredients that target specific skin concerns. Hyaluronic acid is a powerful humectant that draws water into the skin, helping to maintain hydration and improve skin elasticity.\n\nAfter applying toner, place two to three drops of the serum onto your fingertips and gently press it into slightly damp skin. Applying hyaluronic acid while the skin is still hydrated helps it bind water more effectively, resulting in plumper and smoother looking skin. Focus on evenly distributing the product across the face and neck, allowing it to absorb fully before applying moisturiser.\n\nIn a skincare routine, this step helps lock hydration into the skin and supports the skin barrier. Vitamin B5 in the formula helps enhance surface hydration while soothing the skin. When used consistently, the serum can improve skin softness, reduce the appearance of dehydration lines, and support overall skin health. Because it is lightweight and non-greasy, this serum layers easily with other products and works well in both morning and night routines.",
    suitable: [
      "Dry skin",
      "Dehydrated skin",
      "Sensitive skin",
      "All skin types",
      "Morning routine",
      "Night routine"
    ],
    stores: [
      {
        name: "The Ordinary",
        url: "https://theordinary.com/en-au/hyaluronic-acid-2-b5-serum-100425.html"
      },
      {
        name: "Sephora",
        url: "https://www.sephora.com"
      }
    ]
  },

  {
    id: 4,
    step: "Step 4: Moisturiser",
    name: "Rich Cushion Cream",
    brand: "Summer Fridays",
    price: "$90.00",
    image: summerFridaysImg,
    description:
      "Summer Fridays Rich Cushion Cream is a deeply hydrating moisturiser designed to seal in moisture and strengthen the skin barrier. Moisturiser is the final step in many skincare routines because it locks in hydration from earlier steps such as toners and serums while protecting the skin from moisture loss throughout the day or night.\n\nAfter applying serum, take a small amount of the cream and gently massage it into the face and neck. Focus on evenly distributing the product across the skin using upward motions. This step helps trap hydration from previous layers while forming a protective barrier that keeps the skin comfortable and balanced.\n\nThe formula contains nourishing ingredients designed to replenish the skin and support its natural barrier. Rich moisturisers like this are especially beneficial for maintaining long-lasting hydration and preventing dryness or irritation. Over time, consistent use can help improve skin softness, smoothness, and overall resilience.\n\nIn a routine, moisturiser ensures that the active ingredients applied earlier remain effective by preventing water loss from the skin. It also creates a smooth surface for makeup application during the day or helps the skin recover overnight when used as the final step in an evening routine.",
    suitable: [
      "Dry skin",
      "Normal skin",
      "Sensitive skin",
      "Morning routine",
      "Night routine"
    ],
    stores: [
      {
        name: "Summer Fridays",
        url: "https://summerfridays.com/products/rich-cushion-cream"
      },
      {
        name: "Mecca",
        url: "https://www.mecca.com.au"
      }
    ]
  }
];

function RoutinePage() {
  const [selected, setSelected] = useState(routineSteps[0]);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="routine-container">

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

      <div className="routine-content">

        <div className="routine-header">
        <h1 className="routine-title">Meet your skincare routine....</h1>

        <button
            className="save-routine-btn"
            onClick={() => setShowLogin(true)}
        >
            <span className="heart-icon">♥</span>
            Save My Routine
        </button>
        </div>

        <div className="routine-panel">

          {/* LEFT PANEL */}
          <div className="routine-list">
            {routineSteps.map((step) => (
              <div
                key={step.id}
                className={`routine-item ${
                  selected.id === step.id ? "routine-item--active" : ""
                }`}
                onClick={() => setSelected(step)}
              >
                <p className="routine-step">{step.step}</p>

                <div className="routine-card">
                  <img
                    src={step.image}
                    alt={step.name}
                    className="routine-image"
                    />
                  <p className="routine-name">{step.name}</p>
                  <p className="routine-brand">{step.brand}</p>
                  <p className="routine-price">{step.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT PANEL */}
          <div className="routine-detail">

            <div className="detail-header">
              <h2>About this product</h2>
              <button className="price-btn">{selected.price}</button>
            </div>

            <div className="detail-description">
              {selected.description.split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="detail-box">
              <h3>Suitable for</h3>
              <div className="detail-tags">
                {selected.suitable?.map((item) => (
                    <span key={item} className="detail-tag">
                    {item}
                    </span>
                ))}
                </div>
            </div>

            <div className="detail-box">
            <h3>Available at</h3>

            <div className="store-tags">
                {selected.stores?.map((store) => (
                <a
                    key={store.name}
                    href={store.url}
                    target="_blank"
                    rel="noreferrer"
                    className="store-tag"
                >
                    {store.name}
                </a>
                ))}
            </div>
            </div>

          </div>
        </div>

      </div>
            {/* SIGN IN OVERLAY */}
      {showLogin && (
        <div className="overlay" onClick={() => setShowLogin(false)}>
          <div className="overlay-card" onClick={(e) => e.stopPropagation()}>
            <button className="overlay-close" onClick={() => setShowLogin(false)}>✕</button>
            <SignInPage hideNavbar={true} />
          </div>
        </div>
      )}

    </div>
  );
}

export default RoutinePage;