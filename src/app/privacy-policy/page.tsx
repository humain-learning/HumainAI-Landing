import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 border-b border-gray-200 pb-8">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Privacy Policy
          </h1>
          <div className="space-y-1 text-sm text-gray-600">
            <p>Last Updated: November 12, 2025</p>
            <p>Effective Date: November 12, 2025</p>
          </div>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed text-gray-700">
            Welcome to <strong>Humain Learning</strong> (operated by Eduxa
            Consulting). Your privacy is important to us. This Privacy Policy
            explains how we collect, use, store, and protect your personal
            information when you visit humainlearning.ai, participate in our
            learning programs, or interact with our services.
          </p>

          {/* Section 1 */}
          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              1. Who We Are
            </h2>
            <p className="leading-relaxed text-gray-700">
              Humain Learning ("we," "our," or "us") is an education and
              technology organization based in India that provides AI literacy
              and future skills programs for students, educators, and schools.
            </p>
            <p className="mt-4 leading-relaxed text-gray-700">
              Our mission is to help learners use AI responsibly and
              creatively. In doing so, we collect limited personal data to
              ensure a safe, personalized, and meaningful learning experience.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              2. Information We Collect
            </h2>
            <p className="leading-relaxed text-gray-700">
              We collect the following types of information when you use our
              website or participate in our programs:
            </p>

            <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">
              A. Information You Provide
            </h3>
            <ul className="ml-6 list-disc space-y-2 text-gray-700">
              <li>
                <strong>Personal details:</strong> Name, age, gender, school
                name, email address, phone number, and parent/guardian contact
                information.
              </li>
              <li>
                <strong>Enrollment details:</strong> Course preferences,
                payment information, and communication preferences.
              </li>
              <li>
                <strong>Submissions:</strong> Assignments, feedback, or forms
                you fill out during your learning journey.
              </li>
              <li>
                <strong>Support requests:</strong> Information shared during
                customer support interactions (chat, email, or call).
              </li>
            </ul>

            <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">
              B. Automatically Collected Information
            </h3>
            <p className="leading-relaxed text-gray-700">
              When you visit our website or LMS:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-gray-700">
              <li>IP address, browser type, and device information.</li>
              <li>
                Pages visited, session duration, and referral sources (via
                analytics tools).
              </li>
              <li>
                Cookies or similar technologies to improve your browsing
                experience.
              </li>
            </ul>

            <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">
              C. Information from Third Parties
            </h3>
            <p className="leading-relaxed text-gray-700">
              If you sign up through a school, partner organization, or social
              media platform, we may receive limited data (such as your name
              and email) to verify and manage your account.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              3. How We Use Your Information
            </h2>
            <p className="leading-relaxed text-gray-700">
              We use your personal data to:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-gray-700">
              <li>Deliver and personalize your learning experience.</li>
              <li>
                Communicate important updates, assignments, and reminders.
              </li>
              <li>Process payments and manage subscriptions.</li>
              <li>Improve our website, products, and course design.</li>
              <li>Respond to inquiries or provide technical support.</li>
              <li>Comply with legal and regulatory requirements.</li>
            </ul>
            <p className="mt-4 leading-relaxed text-gray-700">
              We may also use anonymized data (with all personal identifiers
              removed) for research, analytics, and reporting on AI learning
              outcomes.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              4. Children's Privacy
            </h2>
            <ul className="ml-6 list-disc space-y-2 text-gray-700">
              <li>Our programs are designed for students aged 13–18 years.</li>
              <li>
                Students under 18 must enroll with parent or school consent.
              </li>
              <li>
                We do not knowingly collect personal data from children below
                13 years without verified parental consent.
              </li>
              <li>
                Parents or guardians may request access, correction, or
                deletion of their child's data by writing to{' '}
                <a
                  href="mailto:data@humainlearning.ai"
                  className="text-blue-600 hover:underline"
                >
                  data@humainlearning.ai
                </a>
                .
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              5. Data Storage and Security
            </h2>
            <p className="leading-relaxed text-gray-700">
              We use industry-standard security measures to protect your data,
              including:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-gray-700">
              <li>SSL encryption for data transmission.</li>
              <li>
                Secure servers hosted on reputed cloud providers (such as
                AWS/Google Cloud).
              </li>
              <li>Restricted access for authorized personnel only.</li>
            </ul>
            <p className="mt-4 leading-relaxed text-gray-700">
              We retain personal data only as long as necessary to provide our
              services or comply with legal obligations.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              6. Sharing of Information
            </h2>
            <p className="leading-relaxed text-gray-700">
              We do not sell or rent your personal data.
            </p>
            <p className="mt-4 leading-relaxed text-gray-700">
              We may share limited data only with:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-gray-700">
              <li>
                <strong>Service providers</strong> (LMS platforms, payment
                gateways, cloud hosting, analytics tools) strictly for service
                delivery.
              </li>
              <li>
                <strong>Partner institutions</strong> (schools, universities,
                or certifying bodies) to verify participation and issue
                certificates.
              </li>
              <li>
                <strong>Legal authorities</strong> when required by law or to
                prevent misuse or fraud.
              </li>
            </ul>
            <p className="mt-4 leading-relaxed text-gray-700">
              All partners are bound by confidentiality and data protection
              agreements.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              7. Your Rights
            </h2>
            <p className="leading-relaxed text-gray-700">
              Depending on your location, you may have the right to:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-gray-700">
              <li>Access, correct, or delete your data.</li>
              <li>Withdraw consent at any time.</li>
              <li>Request information about how your data is used.</li>
              <li>
                File a complaint with the Data Protection Board of India or
                relevant authority.
              </li>
            </ul>
            <p className="mt-4 leading-relaxed text-gray-700">
              To exercise these rights, email us at{' '}
              <a
                href="mailto:data@humainlearning.ai"
                className="text-blue-600 hover:underline"
              >
                data@humainlearning.ai
              </a>
              .
            </p>
          </section>

          {/* Section 8 */}
          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              8. Cookies and Tracking
            </h2>
            <p className="leading-relaxed text-gray-700">
              We use cookies and analytics tools (such as Google Analytics) to:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-gray-700">
              <li>Understand visitor behavior.</li>
              <li>Improve user experience and performance.</li>
              <li>Measure effectiveness of marketing campaigns.</li>
            </ul>
            <p className="mt-4 leading-relaxed text-gray-700">
              You can disable cookies in your browser settings, though some
              features may not function properly.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              9. International Data Transfer
            </h2>
            <p className="leading-relaxed text-gray-700">
              As we serve learners globally, your information may be processed
              in data centers located outside India. In such cases, we ensure
              that adequate security and compliance measures (aligned with GDPR
              and DPDP standards) are in place.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              10. Updates to This Policy
            </h2>
            <p className="leading-relaxed text-gray-700">
              We may update this Privacy Policy periodically. Any changes will
              be posted on this page with the "Last Updated" date revised
              accordingly. We encourage you to review this page regularly.
            </p>
          </section>

          {/* Section 11 - Contact */}
          <section className="mt-12 rounded-lg bg-gray-50 p-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              11. Contact Us
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              For any questions, requests, or concerns regarding this Privacy
              Policy or your personal data, please contact us at:
            </p>
            <div className="space-y-2 text-gray-700">
              <p>
                📧{' '}
                <a
                  href="mailto:data@humainlearning.ai"
                  className="text-blue-600 hover:underline"
                >
                  data@humainlearning.ai
                </a>
              </p>
              <p>📍 Eduxa Consulting (Humain Learning)</p>
              <p className="ml-6">Gurugram, Haryana, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}