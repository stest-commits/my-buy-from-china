'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';

// 1. 定义 FAQ 数据 (你可以随时修改这里的文字)
const faqData = [
  {
    category: "General Service",
    items: [
      {
        q: "What exactly does BuyFromChina.ca do?",
        a: "We are a purchasing agent service. You find items on Chinese marketplaces like Taobao, Tmall, or 1688, send us the links, and we buy them for you. We handle the payment to the seller, receive the items at our China warehouse, inspect them, repackage them, and ship them directly to your door in Canada."
      },
      {
        q: "Why can't I buy directly from Taobao?",
        a: "Most Taobao sellers do not speak English, do not accept Canadian credit cards, and do not ship internationally. We bridge this gap by handling the communication, payment, and logistics."
      }
    ]
  },
  {
    category: "Orders & Payments",
    items: [
      {
        q: "What is included in the quote?",
        a: "Our quote is 'All-In'. It includes the product cost, domestic shipping (to our warehouse), international shipping to Canada, our service fee, and estimated taxes/duties. You pay once, and there are no surprise fees upon delivery."
      },
      {
        q: "What payment methods do you accept?",
        a: "We use Stripe to process payments, which means we accept all major credit cards (Visa, Mastercard, Amex) as well as Apple Pay and Google Pay. Transactions are processed securely in Canadian Dollars (CAD)."
      },
      {
        q: "Can I cancel my order?",
        a: "You can cancel your order for a full refund *before* we purchase the items from the seller. Once the items are purchased, cancellations are subject to the seller's return policy and may incur restocking fees."
      }
    ]
  },
  {
    category: "Shipping & Delivery",
    items: [
      {
        q: "How long does shipping take?",
        a: "Typically, the entire process takes 2-3 weeks. This includes 3-5 days for domestic shipping in China (seller to us) and 7-14 days for international air freight to Canada."
      },
      {
        q: "Do I need to pay customs duties?",
        a: "In most cases, we try to include estimated duties in your initial quote. However, as the Importer of Record, you are legally responsible for any additional customs duties or taxes assessed by the Canada Border Services Agency (CBSA) if they exceed our estimates."
      },
      {
        q: "Do you ship to the USA?",
        a: "Currently, we specialize in shipping to Canada only to ensure the best logistics and customs experience."
      }
    ]
  }
];

// 单个问题组件 (手风琴效果)
const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-5 text-left focus:outline-none group"
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-red-600' : 'text-gray-900 group-hover:text-red-600'}`}>
          {question}
        </span>
        <span className="ml-4 flex-shrink-0 text-gray-400">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-600 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-20">
      
      {/* Header Area */}
      <div className="bg-white border-b border-gray-100 py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 bg-red-50 rounded-full text-red-600 mb-6">
            <HelpCircle size={32} />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-500">
            Everything you need to know about shipping from China to Canada.
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-12">
        {faqData.map((section, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
              {section.category}
            </h2>
            <div>
              {section.items.map((item, i) => (
                <FAQItem key={i} question={item.q} answer={item.a} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-gray-400 mb-8">
            Can't find the answer you're looking for? Please chat to our friendly team.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl transition-colors flex items-center gap-2">
                <MessageCircle size={20} />
                Contact Support
              </button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FAQPage;
