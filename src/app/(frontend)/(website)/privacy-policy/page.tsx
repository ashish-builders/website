import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Ashish Builders & Developers',
  description: 'Privacy Policy of Ashish Builders & Developers (ABD Group)',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>

      <p className="text-gray-600 mb-8">
        <strong>Ashish Builders & Developers (ABD Group)</strong>
        

        <span className="text-sm">Effective Date: 01/02/2026</span>
      </p>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        {/* 1. Introduction */}
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>
            Ashish Builders & Developers (“ABD Group”, “we”, “our”, “us”) respects
            your privacy and is committed to protecting your personal
            information.
          </p>
          <p className="mt-2">
            This Privacy Policy explains how we collect, use, and safeguard the
            information you provide when visiting our website{' '}
            <a
              href="https://www.ashishbuilders.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 hover:underline"
            >
              www.ashishbuilders.com
            </a>{' '}
            or when submitting enquiries through our forms, advertisements, or
            communication channels.
          </p>
        </section>

        {/* 2. Information We Collect */}
        <section>
          <h2 className="text-xl font-semibold mb-2">
            2. Information We Collect
          </h2>
          <p>We may collect the following information:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Full Name</li>
            <li>Phone Number</li>
            <li>Email Address</li>
            <li>City / Location</li>
            <li>Property preferences (such as 2 BHK, 3 BHK, etc.)</li>
            <li>Any information voluntarily submitted through enquiry forms</li>
          </ul>
          <p className="mt-3">
            We do <strong>not</strong> collect sensitive personal data such as
            health information, financial details, bank details, credit scores,
            or government identification numbers through our website forms.
          </p>
        </section>

        {/* 3. How We Use Your Information */}
        <section>
          <h2 className="text-xl font-semibold mb-2">
            3. How We Use Your Information
          </h2>
          <p>The information you provide may be used for:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Responding to your enquiries</li>
            <li>Providing project details</li>
            <li>Scheduling site visits</li>
            <li>Sharing updates about our projects</li>
            <li>Customer support and communication</li>
          </ul>
          <p className="mt-3">
            We use your information solely for real estate enquiry and
            communication purposes.
          </p>
        </section>

        {/* 4. Data Protection */}
        <section>
          <h2 className="text-xl font-semibold mb-2">
            4. Data Protection & Security
          </h2>
          <p>
            We implement reasonable security measures to protect your personal
            information from unauthorized access, misuse, or disclosure.
          </p>
          <p className="mt-2">
            However, no method of internet transmission is completely secure, and
            users are encouraged to share information responsibly.
          </p>
        </section>

        {/* 5. Sharing */}
        <section>
          <h2 className="text-xl font-semibold mb-2">
            5. Sharing of Information
          </h2>
          <p>
            We do not sell, rent, or trade your personal information to third
            parties.
          </p>
          <p className="mt-2">
            Your information may only be shared internally within ABD Group or
            with authorized representatives for the purpose of responding to
            your enquiry.
          </p>
        </section>

        {/* 6. Cookies */}
        <section>
          <h2 className="text-xl font-semibold mb-2">
            6. Cookies & Website Analytics
          </h2>
          <p>
            Our website may use cookies or basic analytics tools to improve user
            experience and understand visitor behavior.
          </p>
          <p className="mt-2">
            These tools do not collect sensitive personal information. You may
            disable cookies through your browser settings if you prefer.
          </p>
        </section>

        {/* 7. Third-party */}
        <section>
          <h2 className="text-xl font-semibold mb-2">
            7. Third-Party Platforms
          </h2>
          <p>
            If you submit your information through social media advertisements
            (such as Facebook, Instagram, or Google Ads), your data may also be
            subject to the respective platform’s privacy policies.
          </p>
        </section>

        {/* 8. Consent */}
        <section>
          <h2 className="text-xl font-semibold mb-2">8. Your Consent</h2>
          <p>
            By using our website and submitting your information, you consent to
            the terms of this Privacy Policy.
          </p>
        </section>

        {/* 9. Updates */}
        <section>
          <h2 className="text-xl font-semibold mb-2">
            9. Updates to This Policy
          </h2>
          <p>
            ABD Group reserves the right to update this Privacy Policy from time
            to time. Any changes will be posted on this page.
          </p>
        </section>

        {/* 10. Contact */}
        <section>
          <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
          <p>
            <strong>Ashish Builders & Developers (ABD Group)</strong>
          </p>
          <p>
            Website:{' '}
            <a
              href="https://www.ashishbuilders.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://www.ashishbuilders.com
            </a>
          </p>
          <p>Phone: 80579 77777</p>
          <p>Location: Kashipur, Uttarakhand</p>
        </section>
      </div>
    </main>
  )
}
 