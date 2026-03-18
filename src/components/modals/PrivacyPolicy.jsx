import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="w-full p-4 container m-auto">
      <h1 className="text-4xl font-bold text-green-600"></h1>

      <div className="px-8 py-6 bg-white-50 text-gray-800">
        <h1 className="text-3xl font-bold text-left mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-600 text-left mb-8">Effective Date: <span className="font-semibold">December 10, 2024</span></p>

        <p className="mb-4">
          <strong>Mandal Solutions, LLC.</strong> ("Company," "we," "us," or "our") values your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our software-as-a-service (SaaS) platform (the "Platform") and related services. By accessing or using the Platform, you agree to the terms of this Privacy Policy.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            We collect information to provide, improve, and personalize our services. The types of information we may collect include:
          </p>
          <div className="ml-4">
            <h3 className="font-medium mb-2">1.1 Personal Information</h3>
            <ul className="list-disc ml-6 mb-4">
              <li>Account Registration: Name, email address, phone number, job title, and company name.</li>
              {/* <li>Payment Information: Billing address, credit card details, and other payment-related data.</li> */}
            </ul>
            <h3 className="font-medium mb-2">1.2 Candidate Information</h3>
            <ul className="list-disc ml-6 mb-4">
              <li>Resumes, cover letters, job applications, LinkedIn profiles, and other documents or data uploaded by users.</li>
              <li>Contact information, work history, and educational background.</li>
            </ul>
            <h3 className="font-medium mb-2">1.3 Usage Data</h3>
            <ul className="list-disc ml-6 mb-4">
              <li>IP address, browser type, operating system, pages visited, time spent on the Platform, and other diagnostic data.</li>
            </ul>
            <h3 className="font-medium mb-2">1.4 Cookies and Tracking Technologies</h3>
            <ul className="list-disc ml-6">
              <li>Cookies, web beacons, and similar tracking technologies to enhance user experience and track user behavior on the Platform.</li>
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p>We use the information we collect for purposes such as:</p>
          <ul className="list-disc ml-6">
            <li>Providing, maintaining, and improving the Platform.</li>
            {/* <li>Managing user accounts and processing payments.</li> */}
            <li>Communicating with users about updates, promotions, and service announcements.</li>
            <li>Complying with legal obligations and protecting against fraudulent or unauthorized activity.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">3. How We Share Your Information</h2>
          <p>We do not sell your personal information. However, we may share your information in the following ways:</p>
          <div className="ml-4">
            <h3 className="font-medium mb-2">3.1 With Your Consent</h3>
            <p>Sharing candidate data with employers or recruiters based on user authorization.</p>
            <h3 className="font-medium mb-2">3.2 Service Providers</h3>
            <p>
              Third-party vendors who perform services on our behalf, such as hosting providers, and analytics services.
            </p>
            <h3 className="font-medium mb-2">3.3 Legal Requirements</h3>
            <p>
              When required by law, subpoena, or legal process, or to protect our rights, property, or safety.
            </p>
            <h3 className="font-medium mb-2">3.4 Business Transfers</h3>
            <p>
              In the event of a merger, acquisition, or sale of company assets, your information may be transferred to the new entity.
            </p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">4. Data Retention</h2>
          <p>
            We retain your information as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce agreements.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">6. Your Rights and Choices</h2>
          <div className="ml-4">
            <h3 className="font-medium mb-2">6.1 Access and Update</h3>
            <p>You can access and update your account information through the Platform.</p>
            <h3 className="font-medium mb-2">6.2 Opt-Out</h3>
            <p>
              You may opt out of receiving marketing communications by following the unsubscribe instructions in our emails.
            </p>
            <h3 className="font-medium mb-2">6.3 Data Deletion</h3>
            <p>
              You can request deletion of your personal data by contacting us at privacy@mandalsolution.com.
            </p>
            <h3 className="font-medium mb-2">6.4 California Privacy Rights</h3>
            <p>
              If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA). Please refer to the California Privacy Notice.
            </p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">7. Third-Party Links</h2>
          <p>
            The Platform may contain links to third-party websites. We are not responsible for the privacy practices of these third-party sites. We encourage you to review their privacy policies.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">8. Children's Privacy</h2>
          <p>
            The Platform is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected data from a child, please contact us immediately.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">9. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new Privacy Policy on our Platform with an updated "Effective Date."
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">10. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our practices, please contact us at:
          </p>
          <ul className="list-none ml-6">
            <li>Mandal Solutions, LLC.</li>
            <li>3321 S Walnut Creek Pkwy</li>
            <li>Apt C</li>
            <li>Raleigh, NC 27606</li>
          </ul>
        </section>

        <p className="text-sm mt-6">
          By using our Platform, you agree to the terms of this Privacy Policy. Thank you for trusting Mandal Solutions with your information.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
