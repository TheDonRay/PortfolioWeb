// EmailPage.js
import React, { useState } from "react";
import "../Styles/Email.css";

function EmailPage() {
  const [copied, setCopied] = useState(false);
  const email = "rayatchowdhury2005@gmail.com"; // Replace with your actual email

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="email-page-container">
      <div className="email-card">
        {/* Decorative background circles */}
        <div className="bg-circle-top"></div>
        <div className="bg-circle-bottom"></div>

        {/* Envelope Icon */}
        <div className="envelope-icon">📧</div>

        <h1 className="email-title">Let's Connect!</h1>

        <p className="email-description">
          If you’d like to connect, discuss ideas, or explore potential
          collaborations, feel free to reach out to me via email or on Instagram
          at @rayyatttz
        </p>

        {/* Email Display Box */}
        <div className="email-box">
          <div className="email-label">Email Address</div>
          <a href={`mailto:${email}`} className="email-link">
            {email}
            <span className="email-icon">✉️</span>
          </a>
        </div>

        {/* Action Buttons */}
        <div className="button-container">
          <button className="copy-btn" onClick={copyToClipboard}>
            {copied ? (
              <>
                <span>✓</span> Copied!
              </>
            ) : (
              <>
                <span>📋</span> Copy Email
              </>
            )}
          </button>
        </div>

        {/* Footer Text */}
        <div className="email-footer">
          <p className="footer-text">
            💬 I typically respond within 24-48 hours
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmailPage;
