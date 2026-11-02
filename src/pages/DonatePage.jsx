import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Copy } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './DonatePage.css';

export default function DonatePage() {
  const navigate = useNavigate();
  const [showThanks, setShowThanks] = useState(false);
  const [accountCopied, setAccountCopied] = useState(false);

  const copyAccountNumber = async () => {
    try {
      await navigator.clipboard.writeText('0000000000');
      setAccountCopied(true);
      window.setTimeout(() => setAccountCopied(false), 1800);
    } catch {
      setAccountCopied(false);
    }
  };

  return (
    <div className="donate-page">
      <Navbar onDonateClick={() => navigate('/donate')} />

      <main className="donate-main" id="main-content">
        <div className="donate-map donate-map-1" aria-hidden="true">
          <img src="/assets/top-dotted-world-map.png" alt="" />
        </div>
        <div className="donate-map donate-map-2" aria-hidden="true">
          <img src="/assets/world-map-dots.png" alt="" />
        </div>

        <section className="donate-content" aria-labelledby="donate-title">
          <img
            className="donate-child-image"
            src="/assets/donate-child.png"
            alt="A smiling child raising a hand in a peace sign"
          />

          <div className="donate-copy">
            <h1 id="donate-title">Some children are trusting their futures with you</h1>
            <p className="donate-intro">
              Your support can help children access education, development opportunities,
              and the resources they need to build a brighter future. Every contribution
              brings us one step closer to a world where every child can thrive.
            </p>

            <div className="donate-transfer-panel">
              <div className="donate-panel-heading">
                <h2>Bank transfer</h2>
              </div>
              <dl className="donate-bank-details">
                <div>
                  <dt>Recipient&apos;s bank</dt>
                  <dd>Zenith Bank</dd>
                </div>
                <div>
                  <dt>Account number</dt>
                  <dd className="donate-account-value">
                    <span>0000000000</span>
                    <button
                      className="donate-copy-button"
                      type="button"
                      onClick={copyAccountNumber}
                      aria-label={accountCopied ? 'Account number copied' : 'Copy account number'}
                      title={accountCopied ? 'Copied' : 'Copy account number'}
                    >
                      {accountCopied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
                    </button>
                  </dd>
                  <span className="donate-copy-status" role="status" aria-live="polite">
                    {accountCopied ? 'Copied' : ''}
                  </span>
                </div>
              </dl>
              <button
                className="donate-confirm-button"
                type="button"
                onClick={() => setShowThanks(true)}
              >
                I&apos;ve made a donation
              </button>
              {showThanks && (
                <p className="donate-thanks-message" role="status">
                  Thank you for supporting children and families in our community.
                </p>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}