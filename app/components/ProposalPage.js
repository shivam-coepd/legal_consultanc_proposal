"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "919154829627";

export default function ProposalPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    budget: "",
    timeline: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      budget: "",
      timeline: "",
      service: "",
      message: "",
    });
    setSubmitError(null);
    setSubmitSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        console.error("Error data:", data);
        throw new Error(data.error || "Something went wrong.");
      }

      setSubmitSuccess(true);
    } catch (err) {
      console.error("Submit Error:", err);
      setSubmitError(
        err instanceof Error && err.message
          ? err.message
          : "Failed to send. Please try again or email us directly at shivam.coepd@gmail.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="notice">Confidential website development proposal • Prepared by APT Digital Express</div>

      <header className="nav">
        <img src="/apt_logo.png" alt="APT Digital Express Logo" width="120" height="140" />
        <nav>
          <a href="#strategy">Strategy</a>
          <a href="#scope">Scope</a>
          <a href="#timeline">Timeline</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="button button-gold small" href="#contact">Discuss Project</a>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">WordPress Website Development Proposal</p>
            <h1>A credible digital presence for your <em>legal consultancy.</em></h1>
            <p className="hero-lead">A professional, conversion-focused WordPress website designed to build trust, explain your expertise clearly and generate qualified consultation enquiries.</p>
            <div className="actions">
              <a className="button button-gold" href="#contact">Share Your Requirement</a>
              <a className="button button-outline" href="#scope">Explore Scope</a>
            </div>
            <div className="hero-meta">
              <div><b>15–25</b><span>Working days</span></div>
              <div><b>100%</b><span>Responsive</span></div>
              <div><b>30 days</b><span>Post-launch support</span></div>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="legal-card">
              <span className="seal">§</span>
              <p>Proposed for</p>
              <h2>[Legal Consultancy Name]</h2>
              <hr />
              <small>Website strategy • UI/UX • WordPress development • Lead generation</small>
            </div>
            <div className="orbit one"></div>
            <div className="orbit two"></div>
          </div>
        </section>

        <section className="section intro" id="strategy">
          <div>
            <p className="eyebrow dark">Executive Summary</p>
            <h2>Turn expertise into trust—and trust into consultations.</h2>
          </div>
          <div>
            <p>Legal services are built on credibility. Your website should immediately reassure potential clients, simplify complex services and provide a clear path to request professional guidance.</p>
            <p>APT Digital Express proposes a modern WordPress website that balances authority with accessibility while supporting visibility, lead capture and long-term business growth.</p>
          </div>
        </section>

        <section className="section soft">
          <div className="section-heading">
            <p className="eyebrow dark">Business Objectives</p>
            <h2>Designed around measurable business needs</h2>
          </div>
          <div className="objectives">
            <article className="objective"><span>01</span><h3>Build authority</h3><p>Present qualifications, expertise and services through a polished, credible experience.</p></article>
            <article className="objective"><span>02</span><h3>Explain services</h3><p>Help visitors quickly understand relevant practice areas and how you can assist.</p></article>
            <article className="objective"><span>03</span><h3>Generate enquiries</h3><p>Use focused calls to action, consultation forms and direct contact options.</p></article>
            <article className="objective"><span>04</span><h3>Improve visibility</h3><p>Establish an SEO-ready technical and content foundation for Google search.</p></article>
          </div>
        </section>

        <section className="section" id="scope">
          <div className="section-heading split">
            <div>
              <p className="eyebrow dark">Recommended Structure</p>
              <h2>A complete, consultation-focused website</h2>
            </div>
            <p>Every page guides visitors from understanding your expertise to confidently requesting a consultation.</p>
          </div>
          <div className="page-grid">
            <article className="page-card"><span>01</span><div><h3>Home</h3><p>Premium hero, service overview, trust indicators, consultation process, FAQs and calls to action.</p></div></article>
            <article className="page-card"><span>02</span><div><h3>About Us</h3><p>Consultancy story, mission, values, qualifications, memberships and client-focused approach.</p></div></article>
            <article className="page-card"><span>03</span><div><h3>Practice Areas</h3><p>Corporate, property, employment, contracts, compliance and other legal services.</p></div></article>
            <article className="page-card"><span>04</span><div><h3>Service Pages</h3><p>Client concerns, your approach, consultation process and frequently asked questions.</p></div></article>
            <article className="page-card"><span>05</span><div><h3>Our Team</h3><p>Professional profiles featuring qualifications, expertise, experience and photographs.</p></div></article>
            <article className="page-card"><span>06</span><div><h3>Book a Consultation</h3><p>Service selection, preferred date, consultation mode and contact details.</p></div></article>
            <article className="page-card"><span>07</span><div><h3>Contact</h3><p>Office details, map, enquiry form, WhatsApp and click-to-call facilities.</p></div></article>
            <article className="page-card"><span>08</span><div><h3>Legal Pages</h3><p>Privacy Policy, Terms, Disclaimer, Cookie Policy and advertising disclaimer.</p></div></article>
          </div>
        </section>

        <section className="section navy">
          <div className="section-heading split light">
            <div>
              <p className="eyebrow">WordPress Features</p>
              <h2>Everything needed for a secure, professional launch</h2>
            </div>
            <p>Focused on credibility, consultation enquiries, performance and simple administration.</p>
          </div>
          <div className="scope-grid">
            <div className="scope-item"><i>✓</i><span>Custom responsive WordPress design</span></div>
            <div className="scope-item"><i>✓</i><span>Mobile, tablet and desktop optimization</span></div>
            <div className="scope-item"><i>✓</i><span>Easy-to-manage WordPress dashboard</span></div>
            <div className="scope-item"><i>✓</i><span>Elementor or Gutenberg page builder</span></div>
            <div className="scope-item"><i>✓</i><span>Consultation and enquiry forms</span></div>
            <div className="scope-item"><i>✓</i><span>WhatsApp and click-to-call integration</span></div>
            <div className="scope-item"><i>✓</i><span>Google Maps integration</span></div>
            <div className="scope-item"><i>✓</i><span>Social media integration</span></div>
            <div className="scope-item"><i>✓</i><span>Basic on-page SEO setup</span></div>
            <div className="scope-item"><i>✓</i><span>Analytics and Search Console</span></div>
            <div className="scope-item"><i>✓</i><span>XML sitemap and submission</span></div>
            <div className="scope-item"><i>✓</i><span>Speed and image optimization</span></div>
            <div className="scope-item"><i>✓</i><span>SSL and basic security setup</span></div>
            <div className="scope-item"><i>✓</i><span>Spam protection and notifications</span></div>
            <div className="scope-item"><i>✓</i><span>Website backup configuration</span></div>
            <div className="scope-item"><i>✓</i><span>Cookie consent banner</span></div>
          </div>
          <div className="optional">
            <b>Optional Add-ons</b>
            <span>Multilingual website</span>
            <span>Online appointment booking</span>
            <span>Consultation payment integration</span>
            <span>Live chat</span>
          </div>
        </section>

        <section className="section soft" id="timeline">
          <div className="section-heading centered">
            <p className="eyebrow dark">Delivery Roadmap</p>
            <h2>From discovery to launch in 15–25 working days</h2>
          </div>
          <div className="timeline">
            <div className="timeline-step"><b>01</b><h3>Discovery & content</h3><span>2–3 days</span></div>
            <div className="timeline-step"><b>02</b><h3>Sitemap & direction</h3><span>2–3 days</span></div>
            <div className="timeline-step"><b>03</b><h3>Design & development</h3><span>7–12 days</span></div>
            <div className="timeline-step"><b>04</b><h3>Content & optimization</h3><span>3–5 days</span></div>
            <div className="timeline-step"><b>05</b><h3>Testing & revisions</h3><span>3–4 days</span></div>
            <div className="timeline-step"><b>06</b><h3>Deployment & training</h3><span>1–2 days</span></div>
          </div>
          <p className="timeline-note">Timeline begins after receiving approved content, brand assets and required access.</p>
        </section>

        <section className="section terms">
          <article>
            <p className="eyebrow dark">Project Deliverables</p>
            <h2>A professional website ready for client enquiries.</h2>
          </article>
          <article className="term-card">
            <h3>Included</h3>
            <ul>
              <li>Fully functional responsive WordPress website</li>
              <li>Consultation and contact forms</li>
              <li>Basic technical and on-page SEO</li>
              <li>Analytics, security and backup setup</li>
              <li>Two rounds of reasonable revisions</li>
              <li>Administrator login and basic WordPress training</li>
              <li>30 days of post-launch technical support</li>
            </ul>
            <h3>Separate or excluded</h3>
            <ul>
              <li>Domain, hosting, paid plugins and stock images</li>
              <li>Third-party subscriptions and external service charges</li>
              <li>Additional custom features and ongoing maintenance</li>
              <li>Professional legal content drafting unless separately agreed</li>
            </ul>
          </article>
        </section>

        <section className="section disclaimer">
          <p className="eyebrow dark">Legal & Content Disclaimer</p>
          <h2>Accuracy and professional compliance come first.</h2>
          <div className="disclaimer-grid">
            <p>All legal content, qualifications, claims and disclosures must be reviewed and approved by the client or a qualified legal professional.</p>
            <p>The website will not guarantee legal outcomes, and its information will not automatically create a lawyer-client relationship.</p>
            <p>The client remains responsible for applicable Bar Council, professional advertising, privacy and data-protection compliance.</p>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-wrap">
            <div className="contact-copy">
              <p className="eyebrow">Tell Us About Your Project</p>
              <h2>Let’s build a legal brand clients can trust.</h2>
              <p>Share your requirements, expected budget and preferred project timeline. Your details will be sent directly to APT Digital Express on WhatsApp.</p>
              <ul className="contact-points">
                <li>Quick requirement review</li>
                <li>Customized scope and quotation</li>
                <li>Clear delivery roadmap</li>
                <li>No obligation to proceed</li>
              </ul>
            </div>
            <div className="form-card">
              {submitSuccess ? (
                <div className="success-card">
                  <h3>Thank you! Your enquiry has been submitted.</h3>
                  <p>Your project details were received successfully. We will review them and contact you soon.</p>
                  <button className="button button-gold" type="button" onClick={handleReset}>
                    Send another query
                  </button>
                </div>
              ) : (
                <form id="contactForm" onSubmit={handleSubmit}>
                  <h3>Request a Consultation</h3>
                  <p>Complete the form and submit your query.</p>
                  <div className="form-grid">
                    <div className="field">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        required
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="company">Consultancy / Company *</label>
                      <input
                        id="company"
                        name="company"
                        required
                        placeholder="Business name"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 00000 00000"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="email">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="budget">Approximate Budget *</label>
                      <select
                        id="budget"
                        name="budget"
                        required
                        value={formData.budget}
                        onChange={handleChange}
                      >
                        <option value="">Select budget</option>
                        <option>Below ₹25,000</option>
                        <option>₹25,000–₹40,000</option>
                        <option>₹40,000–₹60,000</option>
                        <option>₹60,000–₹1,00,000</option>
                        <option>Above ₹1,00,000</option>
                        <option>Need a recommendation</option>
                      </select>
                    </div>
                    <div className="field">
                      <label htmlFor="timeline">How Soon Do You Want to Start? *</label>
                      <select
                        id="timeline"
                        name="timeline"
                        required
                        value={formData.timeline}
                        onChange={handleChange}
                      >
                        <option value="">Select timeline</option>
                        <option>Immediately</option>
                        <option>Within 7 days</option>
                        <option>Within 15 days</option>
                        <option>Within 30 days</option>
                        <option>Within 2–3 months</option>
                        <option>Just exploring</option>
                      </select>
                    </div>
                    <div className="field full">
                      <label htmlFor="service">Services Required *</label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select requirement</option>
                        <option>New WordPress Website</option>
                        <option>Existing Website Redesign</option>
                        <option>Website + SEO</option>
                        <option>Website + Digital Marketing</option>
                        <option>Complete Digital Solution</option>
                      </select>
                    </div>
                    <div className="field full">
                      <label htmlFor="message">Project Requirements</label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Briefly describe your required pages, services, target audience or any special features"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="field full">
                      <button className="button whatsapp-submit" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Enquiry"}
                      </button>
                      <p className="privacy-note">By submitting, you agree to share these details with APT Digital Express for this project enquiry.</p>
                      {submitError ? (
                        <div className="form-status show" role="alert" aria-live="polite">
                          {submitError}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div><b>APT Digital Express</b><span>We optimize. We engage. We grow.</span></div>
        <div><b>Nilesh G</b><span>Digital Marketing Manager</span></div>
        <div>
          <b>Get in touch</b>
          <a href="mailto:sales@aptdigital.in">sales@aptdigital.in</a>
          <a href={"https://wa.me/" + WHATSAPP_NUMBER} target="_blank" rel="noopener noreferrer">+91 91548 29627</a>
        </div>
      </footer>
      <a
        className="floating-wa"
        href={"https://wa.me/" + WHATSAPP_NUMBER + "?text=Hello%20APT%20Digital%20Express%2C%20I%20want%20to%20discuss%20a%20legal%20consultancy%20website."}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        WA
      </a>
    </>
  );
}
