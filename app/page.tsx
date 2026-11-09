"use client";

import { useState } from "react";

export default function Home() {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [role, setRole] = useState("");
  const [context, setContext] = useState("");
  const [task, setTask] = useState("");
  const [bans, setBans] = useState("");
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [isBuilderCopied, setIsBuilderCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  // استیت جدید برای حالت تاریک/روشن (پیش‌فرض تاریک)
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  const handleCopy = (id: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleBuilderCopy = () => {
    if (!generatedPrompt) return;
    navigator.clipboard.writeText(generatedPrompt);
    setIsBuilderCopied(true);
    setTimeout(() => setIsBuilderCopied(false), 2000);
  };

  const generatePrompt = () => {
    if (!role && !task) return;
    const promptText = `<role> ${role || "یک متخصص"} </role>
<context> ${context || "بدون زمینه خاص"} </context>
<task> ${task || "وظیفه‌ای مشخص نشده است"} </task>
<bans> ${bans || "بدون محدودیت خاص"} </bans>`;
    setGeneratedPrompt(promptText);
  };

  const prompts = [
    {
      id: 1,
      title: "تحلیل رقابتی چندبعدی",
      desc: "برای بررسی دقیق رقبا در بازار",
      text: "تو یک استراتژیست رقابتی هستی. سه رقیب اصلی [نام‌ها] را در ابعاد قیمت‌گذاری، پوزیشنینگ، کانال توزیع و شکاف محصول مقایسه کن. خروجی را در جدول Markdown بده و در پایان سه اقدام عملی پیشنهاد کن."
    },
    {
      id: 2,
      title: "بازنویسی با چارچوب متفاوت",
      desc: "برای تبدیل متن‌های معمولی به متن‌های فروشنده",
      text: "متن زیر را نه ویرایش کن، بلکه از صفر با یک چارچوب روایی متفاوت بازنویسی کن: مشکل ← هزینه بی‌توجهی ← راه‌حل ← اثبات. لحن: قاطع و بدون هایپ. حداکثر ۱۵۰ کلمه."
    },
    {
      id: 3,
      title: "استخراج داده ساختاریافته",
      desc: "برای تبدیل متن آزاد به JSON",
      text: "از متن زیر، نام شرکت، تاریخ، مبلغ و نوع تراکنش را استخراج کن. خروجی را دقیقاً در قالب JSON با کلیدهای company, date, amount, type بده. اگر فیلدی موجود نبود، مقدار null بگذار."
    }
  ];

  const filteredPrompts = prompts.filter(p => 
    p.title.includes(searchQuery) || p.desc.includes(searchQuery) || p.text.includes(searchQuery)
  );

  const faqs = [
    {
      q: "آیا هنوز باید بنویسم «گام‌به‌گام فکر کن»؟",
      a: "خیر. مدل‌های استدلالی GPT-5 خودشان زنجیره فکر را انجام می‌دهند. به‌جای آن، مسئله را دقیق توصیف کنید و زمینه کامل بدهید."
    },
    {
      q: "تفاوت Custom Instructions و پرامپت چت چیست؟",
      a: "Custom Instructions برای ترجیحات پایدار (نقش، لحن، فرمت) است؛ پرامپت چت برای وظیفه مشخص پیش رو."
    },
    {
      q: "چرا از تگ‌های XML در پرامپت استفاده کنیم؟",
      a: "مدل‌های زبانی به ساختار حساس هستند. تگ‌هایی مثل <role> و <task> به مدل کمک می‌کنند تا بخش‌های مختلف دستور را از هم تفکیک کند."
    }
  ];

  return (
    <main className={`min-h-screen font-sans selection:bg-emerald-500/30 scroll-smooth transition-colors duration-300 ${isDark ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      
      {/* Navbar */}
      <nav className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${isDark ? 'bg-gray-950/80 border-gray-800' : 'bg-white/80 border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight">ChatGPT <span className="text-emerald-500">Hub</span></div>
          
          <div className="flex items-center gap-6">
            <div className={`hidden md:flex gap-6 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              <a href="#frameworks" className="hover:text-emerald-500 transition-colors">فریم‌ورک‌ها</a>
              <a href="#builder" className="hover:text-emerald-500 transition-colors">پرامپت‌ساز</a>
              <a href="#faq" className="hover:text-emerald-500 transition-colors">سوالات</a>
            </div>
            
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${isDark ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
              aria-label="تغییر تم"
            >
              {isDark ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center pt-24 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className={`inline-block mb-4 px-4 py-1.5 rounded-full border text-sm font-medium ${isDark ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' : 'border-emerald-500/30 bg-emerald-50 text-emerald-600'}`}>
          نسخه ۲۰۲۶ - مجهز به تغییر تم
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl">
          از <span className="text-emerald-500">پرسیدن</span> تا <span className="text-emerald-500">ساختن</span>
        </h1>
        <p className={`text-lg md:text-xl max-w-2xl mb-10 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          ChatGPT فقط یک چت‌بات نیست. یک سیستم‌عامل برای کار است. 
          تکنیک‌هایی که خروجی را از "پاسخ عمومی" به "تحویل‌دادنی" تبدیل می‌کنند.
        </p>
      </section>

      {/* Frameworks Section */}
      <section id="frameworks" className={`py-20 px-6 max-w-6xl mx-auto border-t ${isDark ? 'border-gray-900' : 'border-gray-200'}`}>
        <h2 className={`text-3xl font-bold mb-12 text-center pb-4 border-b ${isDark ? 'border-gray-800' : 'border-gray-300'}`}>فریم‌ورک‌های حرفه‌ای</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`border rounded-2xl p-8 ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200 shadow-sm'}`}>
            <h3 className="text-xl font-bold text-emerald-500 mb-4">فریم‌ورک ۴ عنصری GPT-5</h3>
            <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>🎯 <strong>هدف:</strong> دقیقا چه چیزی می‌خواهید؟</li>
              <li>🌍 <strong>زمینه:</strong> مخاطب و شرایط چیست؟</li>
              <li>📦 <strong>خروجی:</strong> فرمت نهایی چگونه باشد؟</li>
              <li>🚫 <strong>مرزها:</strong> چه کارهایی نباید بکند؟</li>
            </ul>
          </div>
          <div className={`border rounded-2xl p-8 ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200 shadow-sm'}`}>
            <h3 className="text-xl font-bold text-emerald-500 mb-4">تگ‌های براکتی (XML)</h3>
            <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>از تگ‌ها برای جداسازی منطق استفاده کنید.</p>
            <pre className={`p-4 rounded-lg text-sm text-emerald-500 direction-ltr text-left overflow-x-auto ${isDark ? 'bg-gray-950' : 'bg-gray-100'}`}>
{`<role> کپی‌رایتر </role>
<context> خدمات کود آلی </context>
<task> یک هوک ۳ جمله‌ای بنویس </task>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Prompt Builder Section */}
      <section id="builder" className={`py-20 px-6 ${isDark ? 'bg-gray-900/30' : 'bg-gray-100'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">پرامپت‌ساز تعاملی</h2>
          <p className={`text-center mb-12 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>اجزای پرامپت خود را وارد کنید تا یک دستور ساختاریافته دریافت کنید.</p>
          
          <div className={`border rounded-2xl p-6 md:p-8 ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200 shadow-sm'}`}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-emerald-500 mb-2">نقش (Role)</label>
                <input type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder="مثلا: یک کپی‌رایتر سختگیر" className={`w-full border rounded-lg p-3 focus:outline-none focus:border-emerald-500 transition-colors ${isDark ? 'bg-gray-950 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'}`} />
              </div>
              <div>
                <label className="block text-sm font-medium text-emerald-500 mb-2">زمینه (Context)</label>
                <input type="text" value={context} onChange={(e) => setContext(e.target.value)} placeholder="مثلا: خدمات کود آلی" className={`w-full border rounded-lg p-3 focus:outline-none focus:border-emerald-500 transition-colors ${isDark ? 'bg-gray-950 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'}`} />
              </div>
              <div>
                <label className="block text-sm font-medium text-emerald-500 mb-2">وظیفه (Task)</label>
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="مثلا: یک هوک ۳ جمله‌ای بنویس" className={`w-full border rounded-lg p-3 focus:outline-none focus:border-emerald-500 transition-colors ${isDark ? 'bg-gray-950 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'}`} />
              </div>
              <div>
                <label className="block text-sm font-medium text-emerald-500 mb-2">محدودیت‌ها (Bans)</label>
                <input type="text" value={bans} onChange={(e) => setBans(e.target.value)} placeholder="مثلا: از کلیشه استفاده نکن" className={`w-full border rounded-lg p-3 focus:outline-none focus:border-emerald-500 transition-colors ${isDark ? 'bg-gray-950 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'}`} />
              </div>
            </div>

            <button onClick={generatePrompt} className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-lg mb-6 transition-all shadow-md">
              ⚡ ساخت پرامپت
            </button>

            {generatedPrompt && (
              <div className={`mt-6 border-t pt-6 animate-in fade-in slide-in-from-top-4 duration-300 ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
                <h3 className="text-lg font-bold mb-3">خروجی پرامپت شما:</h3>
                <pre className={`p-5 rounded-xl border text-emerald-500 text-sm leading-relaxed direction-ltr text-left overflow-x-auto mb-4 ${isDark ? 'bg-gray-950 border-gray-800' : 'bg-gray-100 border-gray-300'}`}>
                  {generatedPrompt}
                </pre>
                <button onClick={handleBuilderCopy} className={`w-full py-3 rounded-lg font-bold transition-all ${isBuilderCopied ? "bg-emerald-500 text-white shadow-md" : isDark ? "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700" : "bg-gray-200 hover:bg-gray-300 text-gray-900 border border-gray-300"}`}>
                  {isBuilderCopied ? "✅ پرامپت کپی شد!" : "📋 کپی پرامپت نهایی"}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Prompt Library Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">کتابخانه پرامپت آماده</h2>
        
        <div className="max-w-md mx-auto mb-12">
          <input 
            type="text" 
            placeholder="جستجو در پرامپت‌ها (مثلا: بازنویسی)..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full rounded-full px-6 py-3 text-center focus:outline-none focus:border-emerald-500 transition-colors border ${isDark ? 'bg-gray-900 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900 shadow-sm'}`}
          />
        </div>

        <div className="flex flex-col gap-6">
          {filteredPrompts.length > 0 ? (
            filteredPrompts.map((prompt) => (
              <div key={prompt.id} className={`border rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200 shadow-sm'}`}>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{prompt.title}</h3>
                  <p className="text-sm text-emerald-500 mb-3">{prompt.desc}</p>
                  <div className={`p-4 rounded-lg text-sm leading-relaxed border ${isDark ? 'bg-gray-950 text-gray-300 border-gray-800/50' : 'bg-gray-50 text-gray-700 border-gray-200'}`}>
                    {prompt.text}
                  </div>
                </div>
                <button onClick={() => handleCopy(prompt.id, prompt.text)} className={`shrink-0 py-3 px-6 rounded-lg font-bold transition-all w-full md:w-auto ${copiedId === prompt.id ? "bg-emerald-500 text-white shadow-md" : isDark ? "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700" : "bg-gray-200 hover:bg-gray-300 text-gray-900 border border-gray-300"}`}>
                  {copiedId === prompt.id ? "✅ کپی شد!" : "📋 کپی متن"}
                </button>
              </div>
            ))
          ) : (
            <div className={`text-center py-10 rounded-xl border ${isDark ? 'text-gray-400 bg-gray-900 border-gray-800' : 'text-gray-600 bg-white border-gray-200'}`}>
              پرامپتی با این کلمه پیدا نشد. 😔
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className={`py-20 px-6 max-w-4xl mx-auto border-t ${isDark ? 'border-gray-900' : 'border-gray-200'}`}>
        <h2 className="text-3xl font-bold mb-12 text-center">سوالات متداول</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className={`border rounded-xl overflow-hidden transition-colors ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200 shadow-sm'}`}>
              <button 
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className={`w-full flex justify-between items-center p-6 text-right font-bold hover:text-emerald-500 transition-colors`}
              >
                {faq.q}
                <span className="text-emerald-500 text-2xl">{openFaq === index ? "−" : "+"}</span>
              </button>
              {openFaq === index && (
                <div className={`px-6 pb-6 text-sm leading-relaxed border-t pt-4 animate-in fade-in duration-200 ${isDark ? 'text-gray-400 border-gray-800/50' : 'text-gray-600 border-gray-200'}`}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 text-center border-t ${isDark ? 'text-gray-500 border-gray-800' : 'text-gray-500 border-gray-200'}`}>
        <p>ساخته شده با ⚡ در Termux | تمامی حقوق محفوظ است ۲۰۲۶</p>
      </footer>
    </main>
  );
}
