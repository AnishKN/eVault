import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-white text-gray-950 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto w-2/4 py-20">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to eVault! These terms and conditions outline the rules
              and regulations for the use of our platform. By accessing this
              website, we assume you accept these terms and conditions. Do not
              continue to use eVault if you do not agree to all of the terms and
              conditions stated on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Definitions</h2>
            <p className="text-gray-700 leading-relaxed">
              The following terminology applies to these Terms and Conditions,
              Privacy Statement and Disclaimer Notice and all Agreements:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                <strong>"Client," "You," and "Your"</strong> refers to you, the
                person log on this website and compliant to the Company’s terms
                and conditions.
              </li>
              <li>
                <strong>
                  "The Company," "Ourselves," "We," "Our," and "Us"
                </strong>{" "}
                refers to our Company.
              </li>
              <li>
                <strong>"Party," "Parties," or "Us"</strong> refers to both the
                Client and ourselves.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              3. User Responsibilities
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By using our platform, you agree to comply with the following user
              responsibilities:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                You must provide accurate and complete registration information.
              </li>
              <li>
                You are responsible for the security of your account and
                password.
              </li>
              <li>
                You must not use the platform for any illegal or unauthorized
                purpose.
              </li>
              <li>
                You must not attempt to interfere with or disrupt the platform's
                integrity or performance.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              4. Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The content, layout, design, data, databases and graphics on this
              website are protected by United States and other international
              intellectual property laws and are owned by eVault or its
              licensors. Unless expressly permitted in writing, you agree not
              to:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Republish material from eVault.</li>
              <li>Sell, rent or sub-license material from eVault.</li>
              <li>Reproduce, duplicate or copy material from eVault.</li>
              <li>
                Redistribute content from eVault (unless content is specifically
                made for redistribution).
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              5. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              In no event shall eVault, nor any of its officers, directors and
              employees, be liable to you for anything arising out of or in any
              way connected with your use of this website, whether such
              liability is under contract, tort or otherwise, and eVault,
              including its officers, directors and employees shall not be
              liable for any indirect, consequential or special liability
              arising out of or in any way related to your use of this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You hereby indemnify to the fullest extent eVault from and against
              any and all liabilities, costs, demands, causes of action, damages
              and expenses (including reasonable attorney's fees) arising out of
              or in any way related to your breach of any of the provisions of
              these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              We may terminate or suspend access to our Service immediately,
              without prior notice or liability, for any reason whatsoever,
              including without limitation if you breach the Terms. All
              provisions of the Terms which by their nature should survive
              termination shall survive termination, including, without
              limitation, ownership provisions, warranty disclaimers, indemnity
              and limitations of liability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              eVault reserves the right, at our sole discretion, to modify or
              replace these Terms at any time. If a revision is material we will
              provide at least 30 days notice prior to any new terms taking
              effect. What constitutes a material change will be determined at
              our sole discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed and construed in accordance with the
              laws of the United States, without regard to its conflict of law
              provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              10. Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms, please contact us at
              support@evault.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
