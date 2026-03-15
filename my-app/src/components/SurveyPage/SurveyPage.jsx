import { useState } from "react";
import "./SurveyPage.css";
import background from "../../assets/background.jpg";
import { useNavigate } from 'react-router-dom';



const surveyQuestions = [
  {
    id: 1,
    question: "What is your age?",
    type: "centered",
    options: [
      { label: "15-24", desc: "Younger skin, prone to acne" },
      { label: "25-35", desc: "Adult skin, focus on prevention" },
      { label: "36-45", desc: "Maturing skin, anti-aging focus" },
      { label: "46-55", desc: "Mature skin, intensive care needs" },
      { label: "56+", desc: "Aging skin, hydration & repair focus" },
    ],
  },
  {
    id: 2,
    question: "Select your skin type:",
    type: "options",
  
    options: [
  { label: "Oily", desc: "Enlarged pores, prone to break out, shiny", icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8c6a4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6 9 4 13 4 16a8 8 0 0 0 16 0c0-3-2-7-8-14z"/>
    </svg>
  )},
  { label: "Dry", desc: "Tight, flaky, rough texture", icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8c6a4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22V12M12 12C12 7 8 4 8 4s0 4 4 8M12 12c0-5 4-8 4-8s0 4-4 8M5 17h14"/>
    </svg>
  )},
  { label: "Combination", desc: "Oily t-zone, dry cheeks", icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8c6a4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18M3 12h18M6 6l12 12M18 6 6 18"/>
    </svg>
  )},
  { label: "Sensitive", desc: "Easily irritated, redness, reacts to products", icon: (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8c6a4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3c-1 2-4 4-4 8a4 4 0 0 0 8 0c0-4-3-6-4-8z"/>
    <path d="M9 17c0 1.5.5 3 3 3s3-1.5 3-3"/>
    <path d="M7 10c-2 0-3 1-3 2.5S5 15 7 15"/>
    <path d="M17 10c2 0 3 1 3 2.5S19 15 17 15"/>
  </svg>
  )},
  { label: "Normal", desc: "Balanced, not too oily, not too dry", icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8c6a4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
    </svg>
  )},
],
  },
  {
    id: 3,
    question: "What are your main concerns?",
    type: "multi-grid",
    options: [
      { label: "Acne or breakouts", desc: "Pimples, blackheads, and congestion" },
      { label: "Dark spots", desc: "Post-acne marks and sun damage" },
      { label: "Uneven texture", desc: "Rough, bumpy or dull skin surface" },
      { label: "Large pores", desc: "Visible, enlarged or clogged pores" },
      { label: "Redness", desc: "Flushing, irritation or rosacea" },
      { label: "Fine lines/Wrinkles", desc: "Early signs of aging and loss of firmness" },
    ],
  },
  {
    id: 4,
    question: "What types of products are you looking for?",
    type: "multi-grid",
    options: [
      { label: "Cleanser", desc: "Face wash to remove dirt and oil" },
      { label: "Moisturiser", desc: "Hydrates and locks in moisture" },
      { label: "Toner", desc: "Balances skin pH after cleansing" },
      { label: "Serum", desc: "Targeted treatment for specific concerns" },
      { label: "Exfoliator", desc: "Removes dead skin cells for smoother skin" },
      { label: "Sunscreen", desc: "Protects against UV damage daily" },
    ],
  },
];

export default function SurveyPage({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const question = surveyQuestions[currentStep];
  const isMulti = question?.type === "multi-grid";
  const selected = answers[question?.id];
  const isLast = currentStep === surveyQuestions.length - 1;

  const handleSelect = (label) => {
    setAnswers((prev) => ({ ...prev, [question.id]: label }));
  };

  const handleMultiSelect = (label) => {
    setAnswers((prev) => {
      const current = prev[question.id] || [];
      const exists = current.includes(label);
      return {
        ...prev,
        [question.id]: exists
          ? current.filter((l) => l !== label)
          : [...current, label],
      };
    });
  };

  const isSelected = (label) => {
    if (isMulti) return (selected || []).includes(label);
    return selected === label;
  };

  const canProceed = isMulti
    ? (selected || []).length > 0
    : !!selected;

  const handleNext = () => {
    if (!canProceed) return;
    setCurrentStep((s) => s + 1);
  };

  const handleComplete = () => {
    if (!canProceed) return;
    if (onComplete) onComplete(answers);
    navigate('/HomePage');
  };

  return (
    <div className="survey-container">
      <img src={background} alt="background" className="survey-background" />

      <div className="survey-card">
        <h2 className="survey-heading">{question.question}</h2>

        {/* CENTERED single-column (Q1) */}
        {question.type === "centered" && (
          <div className="survey-options-centered">
            {question.options.map((opt) => (
              <div
                key={opt.label}
                className={`survey-option-centered ${isSelected(opt.label) ? "selected" : ""}`}
                onClick={() => handleSelect(opt.label)}
              >
                <span className="option-label-centered">{opt.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* STANDARD options with icon (Q2) */}
        {question.type === "options" && (
          <div className="survey-options">
            {question.options.map((opt) => (
              <div
                key={opt.label}
                className={`survey-option ${isSelected(opt.label) ? "selected" : ""}`}
                onClick={() => handleSelect(opt.label)}
              >
                <span className="option-icon">{opt.icon}</span>
                <div className="option-text">
                  <span className="option-label">{opt.label}</span>
                  <span className="option-desc">{opt.desc}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* MULTI-SELECT GRID (Q3, Q4) */}
        {question.type === "multi-grid" && (
          <>
            <p className="multi-hint">Select all that apply</p>
            <div className="survey-grid">
              {question.options.map((opt) => (
                <div
                  key={opt.label}
                  className={`grid-option ${isSelected(opt.label) ? "selected" : ""}`}
                  onClick={() => handleMultiSelect(opt.label)}
                >
                  <span className="grid-label">{opt.label}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {/* FOOTER */}
        <div className="survey-footer">
          {isLast ? (
            <button
              className={`next-button ${!canProceed ? "disabled" : ""}`}
              onClick={handleComplete}
              disabled={!canProceed}
            >
              Complete Survey →
            </button>
          ) : (
            <button
              className={`next-button ${!canProceed ? "disabled" : ""}`}
              onClick={handleNext}
              disabled={!canProceed}
            >
              Next →
            </button>
          )}

          <div className="survey-dots">
            {surveyQuestions.map((q, i) => (
              <span key={q.id} className="dot-wrapper">
                <span
                  className={`dot ${i === currentStep ? "active" : i < currentStep ? "passed" : ""}`}
                />
                {i < surveyQuestions.length - 1 && <span className="dot-line" />}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
