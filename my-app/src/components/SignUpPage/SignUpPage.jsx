import "./SignUpPage.css";
import { useState } from "react";

function SignUpPage() {
    const [emailFeedback, setEmailFeedback] = useState("");
    const [passwordFeedback, setPasswordFeedback] = useState("");
    const [emailOptions, setEmailOptions] = useState([]);
    const [emailValue, setEmailValue] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [passwordValue, setPasswordValue] = useState("");

    const commonDomains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"];

    const validateForm = (e) => {
        e.preventDefault();
        let isValid = true;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailValue)) {
            setEmailFeedback("Email must be filled out");
            isValid = false;
        } else {
            setEmailFeedback("");
        }

        if (passwordValue.length < 8) {
            setPasswordFeedback("Password must be at least 8 characters long");
            isValid = false;
        } else {
            setPasswordFeedback("");
        }

        if (isValid) {
            window.location.href = "/WelcomePage/WelcomePage";
        }
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmailValue(value);

        const atIndex = value.indexOf("@");
        if (atIndex !== -1) {
            const typedDomain = value.substring(atIndex + 1);
            const filtered = commonDomains.filter(domain => domain.startsWith(typedDomain));
            setEmailOptions(filtered);
        } else {
            setEmailOptions([]); // Hide options if no "@" is present
        }
    };

    const selectDomain = (domain) => {
        const atIndex = emailValue.indexOf('@');
        setEmailValue(emailValue.substring(0, atIndex + 1) + domain);
        setEmailOptions([]);
    };

    return (
        <div className="signin-container">


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
      <main className="signin-content">
        <h1>Sign In</h1>
        <p>Save your skincare routines forever!</p>

        <form className="signin-form" onSubmit={validateForm}>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email:"
                value={emailValue}
                onChange={(e) => {
                    handleEmailChange(e);
                    setEmailFeedback("");
                }}
            />
            {emailOptions.length > 0 && (
                <ul>
                {emailOptions.map((domain) => (
                    <li key={domain} onClick={() => selectDomain(domain)}>
                        {emailValue.substring(0, emailValue.indexOf('@') + 1) + domain}
                    </li>
                ))}
            </ul>

            )}
            
            <span className="email-feedback">{emailFeedback}</span>

            <label htmlFor="password">Password</label>
            <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password:"
            value={passwordValue}
            onChange={(e) => {
                setPasswordValue(e.target.value);
                setPasswordFeedback("");
            }}
            />

            <span className="password-feedback">{passwordFeedback}</span>
            <a href="#" className="forgot-password">Forgot password?</a>

            <label className="remember-me">
                <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
            </label>

            <p id="signup-now">New to GlamBot? <a href="#" className="signUP-btn">Sign up now</a></p>
            <button className="signin-btn" type="submit">Sign In</button>

        </form>
      </main>
    </div>
    );
}

export default SignUpPage;