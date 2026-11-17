import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './PrivacyPolicyPage.css';

/**
 * Privacy Policy Page.
 * Plain, readable language with no em dashes.
 * Unverified organizational practices are marked with clear placeholders.
 */
export default function PrivacyPolicyPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Privacy Policy | Chresthos Empowerment Foundation';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      <Navbar onDonateClick={() => navigate('/donate')} />

      <main className="privacy-main" id="main-content">
        {/* Top Dotted World Map Background */}
        <div className="privacy-top-map" aria-hidden="true">
          <img
            src="/assets/top-dotted-world-map.png"
            alt=""
            className="privacy-map-img"
          />
        </div>

        <div className="privacy-page-container">
          <header className="privacy-page-header">
            <span className="privacy-page-kicker">Information and Transparency</span>
            <h1 className="privacy-page-heading">Privacy Policy</h1>
            <p className="privacy-page-subheading">
              Last updated: [LAST UPDATED DATE: please fill in date]
            </p>
          </header>

          <article className="privacy-page-card">
            {/* Section 1 */}
            <section className="privacy-section">
              <h2>1. Who We Are and Contact Details</h2>
              <p>
                This Privacy Policy describes how personal information is handled by [BUSINESS NAME: Chresthos Empowerment Foundation] (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
              </p>
              <div className="privacy-placeholder-box">
                <p><strong>Organization:</strong> [BUSINESS NAME: Chresthos Empowerment Foundation]</p>
                <p><strong>Physical Address:</strong> [PHYSICAL ADDRESS: Sparklight estate, Block H, Plot 2, Ibafo. Opposite MFM Ibadan expressway, Ogun State, Nigeria]</p>
                <p><strong>Contact Email:</strong> [CONTACT EMAIL: chesthosef@gmail.com]</p>
                <p><strong>Phone:</strong> [PHONE NUMBER: +2348110603135]</p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="privacy-section">
              <h2>2. What Information We Collect</h2>
              <p>
                The only personal information collected directly through this website is provided voluntarily by visitors using the Contact form. The form collects the following fields:
              </p>
              <ul className="privacy-list">
                <li><strong>Full Name:</strong> Entered in the &quot;Full name&quot; text input.</li>
                <li><strong>Email Address:</strong> Entered in the &quot;Email Address&quot; input.</li>
                <li><strong>Phone Number (Optional):</strong> Entered in the &quot;Phone number&quot; input.</li>
                <li><strong>Message:</strong> Entered in the &quot;Message&quot; textarea.</li>
              </ul>
              <p>
                The website does not require user registration or account creation, and does not collect payment card information directly on this site.
              </p>
            </section>

            {/* Section 3 */}
            <section className="privacy-section">
              <h2>3. How We Use That Information</h2>
              <p>
                Information submitted through the Contact form is used to read, process, and respond to your messages, inquiries, volunteer interest, or partnership questions.
              </p>
              <p>
                [PLACEHOLDER: please confirm whether form submissions are used for any other purpose, such as follow-up communications or record-keeping].
              </p>
            </section>

            {/* Section 4 */}
            <section className="privacy-section">
              <h2>4. Cookies and Local Storage</h2>
              <p>
                This website does not use tracking, advertising, or profiling cookies.
              </p>
              <p>
                When you visit the site, a cookie notice banner asks you to Accept or Decline. Your selection is stored in your web browser&apos;s local storage under the key <code>cookie_consent_choice</code> with the value &quot;accepted&quot; or &quot;declined&quot;. This ensures the banner is not displayed on future visits from the same browser. No personal information is stored in this local storage item.
              </p>
              <p>
                Please note that third-party services integrated on our pages (such as YouTube) may set their own cookies in your browser as described in Section 5.
              </p>
            </section>

            {/* Section 5 */}
            <section className="privacy-section">
              <h2>5. Third-Party Services</h2>
              <p>
                When you browse our website, your web browser may contact third-party servers to load assets, display media, or process form submissions:
              </p>
              <ul className="privacy-list">
                <li>
                  <strong>Google Fonts:</strong> The website loads fonts from <code>fonts.googleapis.com</code> and <code>fonts.gstatic.com</code>. Your browser connects directly to Google servers to download these font files.
                </li>
                <li>
                  <strong>Boxicons (unpkg):</strong> The website loads icon styles from the <code>unpkg.com</code> content delivery network. Your browser connects to unpkg servers to download these styles.
                </li>
                <li>
                  <strong>YouTube Embeds:</strong> The website embeds outreach videos hosted on YouTube (<code>youtube.com</code>). When you view a page with an embedded video or play a video, your browser connects to YouTube/Google servers. YouTube may set its own cookies and local storage in your browser according to Google&apos;s privacy policy.
                </li>
                <li>
                  <strong>Contact Form Webhook:</strong> Form submissions are sent via an HTTP POST request to a Google Apps Script web endpoint.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="privacy-section">
              <h2>6. Data Sharing and Retention</h2>
              <p>
                When you submit the contact form, the data is delivered over HTTPS to the Google Apps Script endpoint.
              </p>
              <p>
                [PLACEHOLDER: please confirm who has access to the spreadsheet responses, where they are hosted, and whether form data is shared with any external partners].
              </p>
              <p>
                [PLACEHOLDER: please confirm how long form response records are retained before being deleted or archived].
              </p>
            </section>

            {/* Section 7 */}
            <section className="privacy-section">
              <h2>7. Your Rights (Nigeria Data Protection Act 2023)</h2>
              <p>
                Under the Nigeria Data Protection Act 2023 (NDPA 2023), individuals have rights concerning their personal data, including the right to request access to personal data held about them, request correction of inaccurate data, and request deletion where applicable.
              </p>
              <p>
                To request information about or ask for deletion of details you submitted through our contact form, please contact [CONTACT EMAIL: please fill in email].
              </p>
              <p>
                [PLACEHOLDER: please verify the exact wording and procedures for exercising rights under the NDPA 2023].
              </p>
            </section>

            {/* Section 8 */}
            <section className="privacy-section">
              <h2>8. Children&apos;s Privacy</h2>
              <p>
                Our organization focuses on empowering children and young people. However, the website contact form is not intended for unsupervised use by young children without parental or guardian knowledge.
              </p>
              <p>
                [PLACEHOLDER: please confirm organizational policy regarding children&apos;s personal data, parental consent procedures, and media consent for outreach photographs and videos].
              </p>
            </section>

            {/* Section 9 */}
            <section className="privacy-section">
              <h2>9. Security</h2>
              <p>
                The website is served over HTTPS to help ensure that communication between your browser and the site is encrypted in transit. Contact form submissions are also transmitted via HTTPS.
              </p>
              <p>
                [PLACEHOLDER: please confirm what internal administrative access controls are in place for the Google account or spreadsheet receiving form submissions].
              </p>
            </section>

            {/* Section 10 */}
            <section className="privacy-section">
              <h2>10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect operational or legal updates. When changes are made, the &quot;Last updated&quot; date at the top of this page will be revised.
              </p>
              <p>
                [PLACEHOLDER: please confirm how visitors will be notified of material changes, e.g., notice on the website].
              </p>
            </section>

            {/* Section 11 */}
            <section className="privacy-section">
              <h2>11. Contact</h2>
              <p>
                If you have questions about this policy or our data practices, please reach out to us:
              </p>
              <div className="privacy-placeholder-box">
                <p><strong>Email:</strong> [CONTACT EMAIL: chesthosef@gmail.com]</p>
                <p><strong>Phone:</strong> [PHONE NUMBER: +2348110603135]</p>
                <p><strong>Address:</strong> [PHYSICAL ADDRESS: Sparklight estate, Block H, Plot 2, Ibafo. Opposite MFM Ibadan expressway, Ogun State, Nigeria]</p>
              </div>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
