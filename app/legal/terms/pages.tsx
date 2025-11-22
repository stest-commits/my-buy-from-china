import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShoppingCart, ShieldAlert } from 'lucide-react';

export const metadata = {
  title: 'Terms and Conditions - BuyFromChina.ca',
  description: 'Read the Terms and Conditions for using BuyFromChina.ca services.',
};

const TermsPage = () => {
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
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Terms and Conditions</h1>
          <p className="text-gray-500">Last updated: January 1, 2025</p>
        </div>

        {/* Important Disclaimer Box */}
        <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-10 rounded-r-lg flex items-start gap-4">
          <ShieldAlert className="text-red-600 shrink-0 mt-1" size={24} />
          <div>
            <h3 className="text-red-800 font-bold mb-2">Important Legal Disclaimer</h3>
            <p className="text-red-700 text-sm leading-relaxed">
              The following terms are a placeholder template for a purchasing agent service. 
              <strong>This is not legal advice.</strong> You must consult with a legal professional to draft terms that comply with Canadian laws and accurately reflect your business operations before launching publicly.
            </p>
          </div>
        </div>

        {/* Legal Text Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 prose prose-red max-w-none">
          
          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the https://buyfromchina.ca website (the "Service") operated by BuyFromChina.ca ("us", "we", or "our").
          </p>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">1. Nature of Service</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              BuyFromChina.ca acts solely as a <strong>purchasing agent and logistics coordinator</strong>. We are an intermediary service that helps Canadian residents purchase items from third-party sellers on platforms based in China (e.g., Taobao, Tmall).
            </p>
            <p className="text-gray-700 leading-relaxed">
              We do not manufacture, design, hold inventory of, or directly sell the products listed on third-party websites. We are not a retailer or distributor.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">2. Orders and Payments</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>By submitting a quote request, you are asking us to purchase items on your behalf.</li>
              <li>Quotes provided in Canadian Dollars (CAD) include the product cost, domestic shipping within China, international shipping to Canada, our service fee, and estimated taxes/duties (if applicable and stated).</li>
              <li>Full payment must be received via our secure payment processors (e.g., Stripe) before we purchase any items.</li>
              <li>We reserve the right to refuse service or cancel orders at our sole discretion, for any reason, including suspected fraud or restricted items.</li>
            </ul>
          </section>

           {/* Section 3 */}
           <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">3. Shipping, Customs, and Duties</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We coordinate shipping through third-party logistics carriers. Shipping times are estimates and are not guaranteed. We are not responsible for delays caused by carriers, weather, or customs clearance processes.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-800">
              <strong className="block text-gray-900 mb-2">Importer of Record:</strong>
              <p className="text-gray-700 m-0">
                You, the customer, are the "Importer of Record." You are solely responsible for ensuring the items you order can lawfully be imported into Canada. <strong>You are responsible for payment of all Canadian customs duties, taxes (GST/HST/PST), and brokerage fees</strong> that may be assessed by the Canada Border Services Agency (CBSA) upon arrival.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">4. Returns, Refunds, and Cancellations</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Due to the nature of international cross-border purchasing:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 font-medium">
              <li><strong>All sales are final once the order has been purchased from the seller in China.</strong></li>
              <li>We do not offer returns, exchanges, or refunds for "buyer's remorse," wrong sizes ordered, or minor color variations.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              If an item arrives significantly damaged or is completely incorrect due to our error, please contact support within 48 hours of delivery for case-by-case review.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">5. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              In no event shall BuyFromChina.ca, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service or any products purchased through the Service. We do not warrant the quality, safety, or legality of products sourced from third-party sellers.
            </p>
          </section>

           {/* Section 6 */}
           <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">6. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms, please contact us at support@buyfromchina.ca.
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

export default TermsPage;
