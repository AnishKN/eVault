import React from "react";

function PrivacyPolicy() {
  return (
    <>
      <div className="bg-white text-gray-950 dark:bg-gray-900 dark:text-white">
        <div class="container mx-auto w-2/4  py-20">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to eVault! Your privacy is important to us. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website or use our services.
                Please read this policy carefully to understand our views and
                practices regarding your personal data and how we will treat it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                2. Information We Collect
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may collect and process the following information about you:
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  <strong>Personal Identification Information:</strong> Name,
                  email address, phone number, etc.
                </li>
                <li>
                  <strong>Technical Data:</strong> IP address, browser type and
                  version, time zone setting, browser plug-in types and
                  versions, operating system and platform, and other technology
                  on the devices you use to access this website.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you use our
                  website, products, and services.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We use the information we collect in the following ways:
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  To provide, operate, and maintain our website and services.
                </li>
                <li>
                  To improve, personalize, and expand our website and services.
                </li>
                <li>
                  To understand and analyze how you use our website and
                  services.
                </li>
                <li>
                  To develop new products, services, features, and
                  functionality.
                </li>
                <li>
                  To communicate with you, either directly or through one of our
                  partners, including for customer service, to provide you with
                  updates and other information relating to the website, and for
                  marketing and promotional purposes.
                </li>
                <li>To process your transactions and manage your orders.</li>
                <li>To send you emails.</li>
                <li>To find and prevent fraud.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We do not sell, trade, or otherwise transfer to outside parties
                your Personally Identifiable Information unless we provide users
                with advance notice. This does not include website hosting
                partners and other parties who assist us in operating our
                website, conducting our business, or serving our users, so long
                as those parties agree to keep this information confidential. We
                may also release information when it's release is appropriate to
                comply with the law, enforce our site policies, or protect ours
                or others' rights, property or safety.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We use administrative, technical, and physical security measures
                to help protect your personal information. While we have taken
                reasonable steps to secure the personal information you provide
                to us, please be aware that despite our efforts, no security
                measures are perfect or impenetrable, and no method of data
                transmission can be guaranteed against any interception or other
                type of misuse.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                6. Your Data Protection Rights
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Depending on your location, you may have the following rights
                regarding your personal data:
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  The right to access – You have the right to request copies of
                  your personal data.
                </li>
                <li>
                  The right to rectification – You have the right to request
                  that we correct any information you believe is inaccurate or
                  complete information you believe is incomplete.
                </li>
                <li>
                  The right to erasure – You have the right to request that we
                  erase your personal data, under certain conditions.
                </li>
                <li>
                  The right to restrict processing – You have the right to
                  request that we restrict the processing of your personal data,
                  under certain conditions.
                </li>
                <li>
                  The right to object to processing – You have the right to
                  object to our processing of your personal data, under certain
                  conditions.
                </li>
                <li>
                  The right to data portability – You have the right to request
                  that we transfer the data that we have collected to another
                  organization, or directly to you, under certain conditions.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
