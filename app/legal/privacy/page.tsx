import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShoppingCart, ShieldAlert, Lock } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy - BuyFromChina.ca',
  description: 'How we collect, use, and protect your personal information.',
};

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Simple Header with Back Button */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
           <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors">
             <ArrowLeft size={20} />
             <span className="font-medium">Back to Home</span>
           </Link>
          <div className="flex items-center gap-2 font-bold text-lg text-gray-900 opacity-50">
            <span className="text-red-600"><ShoppingCart size={18} /></span>
            BuyFromChina.ca
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        
        {/* Page Title Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-500">Last updated: January 1, 2025</p>
        </div>

        {/* Important Disclaimer Box */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-10 rounded-r-lg flex items-start gap-4">
          <ShieldAlert className="text-blue-600 shrink-0 mt-1" size={24} />
          <div>
            <h3 className="text-blue-800 font-bold mb-2">Template Disclaimer</h3>
            <p className="text-blue-700 text-sm leading-relaxed">
              This document is a standard template for a purchasing agent business. Before launching, ensure this policy accurately reflects how you handle user data, especially regarding <strong>cookies, analytics, and third-party sharing</strong>.
            </p>
          </div>
        </div>

        {/* Privacy Text Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 prose prose-red max-w-none">
          
          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            At BuyFromChina.ca, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our purchasing agent services.
          </p>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
              1. Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect information necessary to process your orders and provide shipping quotes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Personal Identification:</strong> Name, email address, shipping address, and phone number.</li>
              <li><strong>Order Details:</strong> Product links (URLs), preferences (size/color), and parcel requirements.</li>
              <li><strong>Payment Information:</strong> We <strong>do not</strong> store your credit card information on our servers. All payments are processed securely through third-party payment processors (e.g., Stripe).</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the collected data for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>To generate accurate quotes in Canadian Dollars (CAD).</li>
              <li>To purchase items on your behalf from third-party sellers (e.g., Taobao).</li>
              <li>To coordinate international logistics and customs clearance.</li>
              <li>To communicate with you regarding order updates, delays, or questions.</li>
            </ul>
          </section>

           {/* Section 3 */}
           <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
              3. Information Sharing
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners.
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              However, we must share specific data with trusted third parties to fulfill your order:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Logistics Partners:</strong> Your name, address, and phone number are shared with shipping carriers (e.g., Canada Post, FedEx, DHL) to deliver your parcel.</li>
              <li><strong>Payment Processors:</strong> Your payment details are processed directly by Stripe to ensure PCI compliance.</li>
              <li><strong>Legal Compliance:</strong> We may disclose information if required by law or in response to valid requests by public authorities (e.g., customs officials).</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
              <Lock size={24} className="text-red-600"/> 4. Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information. Our website uses SSL (Secure Socket Layer) encryption to ensure secure data transmission.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
              5. Third-Party Websites
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Users may find content on our Site that links to the sites and services of our partners, suppliers, advertisers, sponsors, licensors, and other third parties (e.g., Taobao product links). We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Site.
            </p>
          </section>

           {/* Section 6 */}
           <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
              6. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
              <br /><br />
              <a href="mailto:support@buyfromchina.ca" className="text-red-600 font-bold hover:underline">support@buyfromchina.ca</a>
            </p>
          </section>

        </div>
      </main>
      
      {/* Simple Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-100">
        © {new Date().getFullYear()} BuyFromChina.ca. All rights reserved.
      </footer>
    </div>
  );
};

export default PrivacyPage;
