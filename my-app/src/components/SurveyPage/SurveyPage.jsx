import { useState } from "react";
import "./SurveyPage.css";
import background from "../../assets/background.jpg";
import { Link } from 'react-router-dom';

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
      { label: "Oily", desc: "Enlarged pores, prone to break out, shiny", icon: "💧" },
      { label: "Dry", desc: "Tight, flaky, rough texture", icon: "🌵" },
      { label: "Combination", desc: "Oily t-zone, dry cheeks", icon: "⚖️" },
      { label: "Normal", desc: "Balanced, not too oily, not too dry", icon: "⭐" },
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
  const [completed, setCompleted] = useState(false);

  const question = surveyQuestions[currentStep];
  const isMulti = question?.type === "multi-grid";
  const selected = answers[question?.id];
  const isLast = currentStep === surveyQuestions.length - 1;

  // Single select
  const handleSelect = (label) => {
    setAnswers((prev) => ({ ...prev, [question.id]: label }));
  };

  // Multi select — toggles items in an array
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
    if (isLast) {
      setCompleted(true);
      if (onComplete) onComplete(answers);
    } else {
      setCurrentStep((s) => s + 1);
    }
  };

  return (
    <div className="survey-container">
      <img src={background} alt="background" className="survey-background" />

      <div className="survey-card">
        {completed ? (
          <div className="survey-completed">
            <div className="completed-icon">✨</div>
            <h2 className="survey-heading">Your profile is ready!</h2>
            <p className="completed-subtitle">
              We're curating your personalised skincare routine and product
              recommendations based on your answers.
            </p>
          </div>
        ) : (
          <>
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

            {/* FOOTER: button centered, dots below */}
            <div className="survey-footer">
              <button
                className={`next-button ${!canProceed ? "disabled" : ""}`}
                onClick={handleNext}
                disabled={!canProceed}
              >
                {isLast ? "Finish" : "Next"} →
              </button>

              <div className="survey-dots">
                {surveyQuestions.map((q, i) => (
                  <span key={q.id} className="dot-wrapper">
                    <span
                      className={`dot ${i === currentStep ? "active" : i < currentStep ? "passed" : ""}`}
                    />
                    {i < surveyQuestions.length - 1 && <span className="dot-line" />}
                  </span>
                ))}
                <NavLink to="/HomePage">
                    <button className="start-button">
                        Complete Survey
                    </button>
                </NavLink>
              </div>
            </div>s
          </>
        )}
      </div>
    </div>
  );
}

//export default SurveyPage;