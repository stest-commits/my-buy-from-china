'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation'; // 👈 引入参数读取
import Link from 'next/link';
import { Plus, Loader2, CheckCircle } from 'lucide-react';

// 1. 定义翻译字典
const translations = {
  en: {
    note_title: "Note:",
    note_text: "BuyFromChina.ca is a purchasing agent. We do not manufacture or sell products. All sales are final.",
    badge: "China's Best, Delivered to Canada.",
    title: "Request a quote",
    label_urls: "Product URLs",
    placeholder_url: "https://item.taobao.com/item.htm?id=...",
    btn_add_url: "Add another URL",
    label_name: "Recipient name",
    placeholder_name: "Your full name",
    label_email: "Email",
    placeholder_email: "you@email.com",
    label_postal: "Canadian postal code",
    placeholder_postal: "e.g. M5V 2T6",
    label_notes: "Notes",
    placeholder_notes: "Please specify size, color, or any special instructions...",
    label_price: "Reference price in CAD",
    select_default: "Select a price range",
    price_1: "Under $100",
    price_2: "$100 - $250",
    price_3: "$250 - $500",
    price_4: "$500+",
    label_size: "Estimated parcel size",
    size_s: "Small",
    size_s_desc: "Light items",
    size_m: "Medium",
    size_m_desc: "Shoes/Hoodies",
    size_l: "Large",
    size_l_desc: "Jackets/Bulk",
    agree_text: "By submitting this request, you agree to our",
    agree_link: "Terms and Conditions",
    response_time: "We typically respond within 12 hours.",
    btn_submit: "Send Request Now",
    btn_sending: "Sending...",
    success_title: "Request Sent!",
    success_desc: "We have received your request. Our team will verify the links and email you a quote within 12 hours.",
    btn_again: "Submit another request"
  },
  fr: {
    note_title: "Note :",
    note_text: "BuyFromChina.ca est un agent d'achat. Nous ne fabriquons ni ne vendons de produits. Toutes les ventes sont finales.",
    badge: "Le meilleur de la Chine, livré au Canada.",
    title: "Demander un devis",
    label_urls: "URL des produits",
    placeholder_url: "https://item.taobao.com/item.htm?id=...",
    btn_add_url: "Ajouter une autre URL",
    label_name: "Nom du destinataire",
    placeholder_name: "Votre nom complet",
    label_email: "Email",
    placeholder_email: "vous@email.com",
    label_postal: "Code postal canadien",
    placeholder_postal: "ex. M5V 2T6",
    label_notes: "Remarques",
    placeholder_notes: "Précisez la taille, la couleur ou toute instruction spéciale...",
    label_price: "Prix de référence en CAD",
    select_default: "Sélectionnez une fourchette",
    price_1: "Moins de 100 $",
    price_2: "100 $ - 250 $",
    price_3: "250 $ - 500 $",
    price_4: "500 $ +",
    label_size: "Taille estimée du colis",
    size_s: "Petit",
    size_s_desc: "Articles légers",
    size_m: "Moyen",
    size_m_desc: "Chaussures/Sweats",
    size_l: "Grand",
    size_l_desc: "Manteaux/Vrac",
    agree_text: "En soumettant, vous acceptez nos",
    agree_link: "Conditions générales",
    response_time: "Nous répondons généralement sous 12 heures.",
    btn_submit: "Envoyer la demande",
    btn_sending: "Envoi...",
    success_title: "Demande envoyée !",
    success_desc: "Nous avons reçu votre demande. Notre équipe vérifiera les liens et vous enverra un devis sous 12 heures.",
    btn_again: "Soumettre une autre demande"
  },
  zh: {
    note_title: "注意：",
    note_text: "BuyFromChina.ca 仅提供代购服务，非生产商或销售商。所有代购商品不设退换。",
    badge: "淘宝天猫，直邮加拿大",
    title: "提交报价请求",
    label_urls: "商品链接",
    placeholder_url: "粘贴淘宝/天猫链接...",
    btn_add_url: "添加更多链接",
    label_name: "收件人姓名",
    placeholder_name: "您的全名",
    label_email: "电子邮箱",
    placeholder_email: "用于接收报价单",
    label_postal: "加拿大邮编",
    placeholder_postal: "例如 M5V 2T6",
    label_notes: "备注说明",
    placeholder_notes: "请注明颜色、尺码或任何特殊要求...",
    label_price: "预估总价 (加币)",
    select_default: "选择价格范围",
    price_1: "$100 以下",
    price_2: "$100 - $250",
    price_3: "$250 - $500",
    price_4: "$500 以上",
    label_size: "预估包裹大小",
    size_s: "小包",
    size_s_desc: "饰品/轻小件",
    size_m: "中包",
    size_m_desc: "鞋服/卫衣",
    size_l: "大包",
    size_l_desc: "外套/批量采购",
    agree_text: "提交即代表您同意我们的",
    agree_link: "服务条款",
    response_time: "我们通常在 12 小时内回复。",
    btn_submit: "立即提交申请",
    btn_sending: "提交中...",
    success_title: "提交成功！",
    success_desc: "我们已收到您的请求。团队将在核实链接后，于 12 小时内向您的邮箱发送正式报价单。",
    btn_again: "提交新的请求"
  }
};

const QuoteFormContent = () => {
  // --- 🔴 记得把这里换回你自己的 Key ---
  const ACCESS_KEY = "8db64b5c-5970-44bc-abae-49c044171224"; 

  const [currentLang, setCurrentLang] = useState<'en' | 'fr' | 'zh'>('en');
  const searchParams = useSearchParams();

  // 监听语言切换
  useEffect(() => {
    const lang = searchParams.get('lang');
    if (lang === 'zh' || lang === 'fr') {
      setCurrentLang(lang);
    } else {
      setCurrentLang('en');
    }
  }, [searchParams]);

  const t = translations[currentLang];

  // 状态管理
  const [urls, setUrls] = useState(['']); 
  const [parcelSize, setParcelSize] = useState('medium');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // 表单输入状态
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    postalCode: '',
    notes: '',
    priceRange: '' // 初始化为空
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addUrlField = () => {
    setUrls([...urls, '']);
  };

  const handleUrlChange = (index: any, value: any) => {
    const newUrls = [...urls];
    newUrls[index] = value;
    setUrls(newUrls);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    const dataToSend = {
      access_key: ACCESS_KEY,
      subject: `新询价来自: ${formData.name} (${currentLang})`,
      from_name: "BuyFromChina Bot",
      message: `
        姓名: ${formData.name}
        邮箱: ${formData.email}
        邮编: ${formData.postalCode}
        包裹大小: ${parcelSize}
        预估价格: ${formData.priceRange}
        语言环境: ${currentLang}
        备注: ${formData.notes}
        --- 商品链接 ---
        ${urls.filter(u => u.trim() !== '').join('\n')}
      `,
      ...formData,
      product_urls: urls.join(', '), 
      parcel_size: parcelSize
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(dataToSend),
      });
      const result = await response.json();
      if (result.success) setIsSuccess(true);
      else alert("Error, please try again.");
    } catch (error) {
      console.error("Error:", error);
      alert("Network error.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 flex items-center justify-center">
        <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-10 text-center border border-gray-200">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.success_title}</h2>
          <p className="text-gray-700 mb-8 text-lg">
            {t.success_desc}
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-gray-900 text-white font-bold py-4 px-8 rounded-xl hover:bg-gray-800 w-full text-lg transition-all"
          >
            {t.btn_again}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 font-sans">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-md border border-gray-200 overflow-hidden">
        
        <div className="p-8 pb-4 bg-white">
            <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-6 text-red-800 leading-relaxed text-base">
              <strong>{t.note_title}</strong> {t.note_text}
            </div>
            <div className="inline-block bg-red-100 text-red-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              {t.badge}
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{t.title}</h1>
        </div>

        <hr className="border-gray-200" />

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          
          {/* Product URLs */}
          <div>
            <label className="block text-base font-bold text-gray-900 mb-3">{t.label_urls}</label>
            <div className="space-y-4 mb-4">
              {urls.map((url, index) => (
                <input
                  key={index}
                  required={index === 0}
                  type="url"
                  placeholder={t.placeholder_url}
                  value={url}
                  onChange={(e) => handleUrlChange(index, e.target.value)}
                  className="w-full border-2 border-gray-300 focus:border-red-500 rounded-xl px-5 py-4 focus:outline-none text-gray-900 placeholder:text-gray-500 text-base transition-colors"
                />
              ))}
            </div>
            <button 
              type="button" 
              onClick={addUrlField}
              className="flex items-center gap-2 text-red-700 font-bold border-2 border-red-100 bg-red-50 px-6 py-3 rounded-xl text-sm hover:bg-red-100 transition-colors"
            >
              <Plus size={18} /> {t.btn_add_url}
            </button>
          </div>

          {/* User Details */}
          <div className="space-y-6">
            <div>
              <label className="block text-base font-bold text-gray-900 mb-3">{t.label_name}</label>
              <input 
                name="name" required value={formData.name} onChange={handleInputChange}
                type="text" placeholder={t.placeholder_name} 
                className="w-full border-2 border-gray-300 focus:border-red-500 rounded-xl px-5 py-4 focus:outline-none text-gray-900 placeholder:text-gray-500 text-base" 
              />
            </div>
            <div>
              <label className="block text-base font-bold text-gray-900 mb-3">{t.label_email}</label>
              <input 
                name="email" required value={formData.email} onChange={handleInputChange}
                type="email" placeholder={t.placeholder_email} 
                className="w-full border-2 border-gray-300 focus:border-red-500 rounded-xl px-5 py-4 focus:outline-none text-gray-900 placeholder:text-gray-500 text-base" 
              />
            </div>
            <div>
              <label className="block text-base font-bold text-gray-900 mb-3">{t.label_postal}</label>
              <input 
                name="postalCode" required value={formData.postalCode} onChange={handleInputChange}
                type="text" placeholder={t.placeholder_postal} 
                className="w-full border-2 border-gray-300 focus:border-red-500 rounded-xl px-5 py-4 focus:outline-none text-gray-900 placeholder:text-gray-500 text-base" 
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-base font-bold text-gray-900 mb-3">{t.label_notes}</label>
            <textarea 
              name="notes" rows={4} value={formData.notes} onChange={handleInputChange}
              placeholder={t.placeholder_notes} 
              className="w-full border-2 border-gray-300 focus:border-red-500 rounded-xl px-5 py-4 focus:outline-none text-gray-900 placeholder:text-gray-500 text-base resize-none"
            ></textarea>
          </div>
          
           <div>
             <label className="block text-base font-bold text-gray-900 mb-3">{t.label_price}</label>
             <select 
                name="priceRange" value={formData.priceRange} onChange={handleInputChange}
                className="w-full border-2 border-gray-300 focus:border-red-500 rounded-xl px-5 py-4 focus:outline-none text-gray-900 text-base bg-white"
             >
                <option value="">{t.select_default}</option>
                <option value="Under $100">{t.price_1}</option>
                <option value="$100 - $250">{t.price_2}</option>
                <option value="$250 - $500">{t.price_3}</option>
                <option value="$500+">{t.price_4}</option>
             </select>
          </div>

          {/* Parcel Size */}
          <div>
            <label className="block text-base font-bold text-gray-900 mb-4">{t.label_size}</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['small', 'medium', 'large'].map((size) => (
                <div 
                  key={size}
                  onClick={() => setParcelSize(size)}
                  className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 cursor-pointer transition-all text-center h-32 ${
                    parcelSize === size 
                    ? 'border-blue-600 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                   <div className="font-bold text-lg uppercase text-gray-900 mb-1">
                      {size === 'small' ? t.size_s : size === 'medium' ? t.size_m : t.size_l}
                   </div>
                   <div className="text-xs text-gray-600">
                      {size === 'small' ? t.size_s_desc : size === 'medium' ? t.size_m_desc : t.size_l_desc}
                   </div>
                   {parcelSize === size && <div className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></div>}
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button & Legal Link */}
          <div className="pt-6">
             <p className="text-sm text-gray-500 mb-4 text-center">
               {t.agree_text}{' '}
               <Link href="/legal/terms" className="text-red-600 underline hover:text-red-800 font-medium">
                 {t.agree_link}
               </Link>
               . {t.response_time}
             </p>
             
             <button 
               type="submit" 
               disabled={isSubmitting}
               className="w-full bg-red-600 text-white font-bold text-xl py-5 rounded-xl shadow-lg hover:bg-red-700 transition-transform active:scale-95 flex justify-center items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
             >
               {isSubmitting ? (
                 <> <Loader2 className="animate-spin" /> {t.btn_sending} </>
               ) : (
                 t.btn_submit
               )}
             </button>
          </div>

        </form>
      </div>
    </div>
  );
};

// 2. 导出前使用 Suspense 包裹
export default function QuoteForm() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-100 flex items-center justify-center"><Loader2 className="animate-spin text-red-600" /></div>}>
      <QuoteFormContent />
    </Suspense>
  );
}
