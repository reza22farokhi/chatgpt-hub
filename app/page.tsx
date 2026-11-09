"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className={`min-h-screen font-sans selection:bg-emerald-500/30 scroll-smooth transition-colors duration-300 ${isDark ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className={`min-h-screen font-sans selection:bg-emerald-500/30 scroll-smooth transition-colors duration-300 ${isDark ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      
      {/* Navbar */}
      <nav className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${isDark ? 'bg-gray-950/80 border-gray-800' : 'bg-white/80 border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight">ChatGPT <span className="text-emerald-500">Hub</span></div>
          
          <div className="flex items-center gap-6">
            <div className={`hidden md:flex gap-6 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              <a href="#article" className="hover:text-emerald-500 transition-colors">مقاله ویژه</a>
              <a href="#builder" className="hover:text-emerald-500 transition-colors">پرامپت‌ساز</a>
              <a href="#faq" className="hover:text-emerald-500 transition-colors">سوالات</a>
            </div>
            
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${isDark ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
            >
              {isDark ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center pt-24 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="flex flex-col items-center">
          <div className={`inline-block mb-4 px-4 py-1.5 rounded-full border text-sm font-medium ${isDark ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' : 'border-emerald-500/30 bg-emerald-50 text-emerald-600'}`}>
            نسخه ۲۰۲۶ - مجهز به مقالات تخصصی
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl">
            از <span className="text-emerald-500">پرسیدن</span> تا <span className="text-emerald-500">ساختن</span>
          </h1>
          <p className={`text-lg md:text-xl max-w-2xl mb-10 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            ChatGPT فقط یک چت‌بات نیست. یک سیستم‌عامل برای کار است. 
            تکنیک‌هایی که خروجی را از "پاسخ عمومی" به "تحویل‌دادنی" تبدیل می‌کنند.
          </p>
        </motion.div>
      </section>

      {/* Article Section */}
      <motion.section 
        id="article" 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp}
        className={`py-20 px-6 max-w-4xl mx-auto border-t ${isDark ? 'border-gray-900' : 'border-gray-200'}`}
      >
        <div className={`border rounded-2xl p-8 md:p-12 shadow-xl ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
          
          <div className="mb-8 text-center">
            <span className="text-emerald-500 font-bold tracking-wider text-sm mb-2 block">مقاله تخصصی</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">مهندسی پرامپت پیشرفته: از تئوری تا عمل</h2>
            <div className={`flex justify-center items-center gap-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              <span>نویسنده: تیم ChatGPT Hub</span>
              <span>•</span>
              <span>زمان مطالعه: ۵ دقیقه</span>
            </div>
          </div>

          <div className={`space-y-6 leading-loose ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            <p>
              اکثر کاربران از ChatGPT به عنوان یک موتور جستجوی ساده استفاده می‌کنند. اما مدل‌های زبانی بزرگ (LLMs) فراتر از این هستند. برای دریافت خروجی در سطح کارشناسی، باید از «دستور دادن» به سمت <strong>«مهندسی کردن»</strong> حرکت کنید. در این مقاله، سه تکنیک کلیدی که تفاوت را ایجاد می‌کنند را بررسی می‌کنیم.
            </p>

            <h3 className="text-2xl font-bold text-emerald-500 mt-8 mb-4">۱. زنجیره تفکر (Chain of Thought)</h3>
            <p>
              وقتی از مدل می‌خواهید یک مسئله پیچیده (مثل تحلیل یک داده مالی) را حل کند، اگر فقط پاسخ نهایی را بخواهید، ممکن است مدل دچار توهم (Hallucination) شود. راه‌حل؟ از مدل بخواهید <strong>مسیر استدلال</strong> خود را بنویسد. 
            </p>
            <div className={`p-4 rounded-lg text-sm font-mono direction-ltr text-left border-l-4 border-emerald-500 ${isDark ? 'bg-gray-950 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
              "Before providing the final answer, break down your reasoning step-by-step. Analyze the data first, then draw conclusions."
            </div>
            <p>
              این کار باعث می‌شود مدل قبل از پاسخ دادن، «فکر» کند و دقت خروجی به شدت بالا برود.
            </p>

            <h3 className="text-2xl font-bold text-emerald-500 mt-8 mb-4">۲. پرامپت‌نویسی چندشات (Few-Shot Prompting)</h3>
            <p>
              مدل‌های هوش مصنوعی شاگردان بسیار باهوشی هستند که از «الگو» یاد می‌گیرند. اگر از آن‌ها می‌خواهید یک متن را به سبک خاصی بنویسند، فقط توضیح دادن کافی نیست؛ <strong>باید نمونه بدهید</strong>.
            </p>
            <ul className={`list-disc list-inside space-y-2 ml-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <li>ورودی نمونه ۱ ← خروجی مدنظر ۱</li>
              <li>ورودی نمونه ۲ ← خروجی مدنظر ۲</li>
              <li>ورودی واقعی شما ← (مدل الگو را ادامه می‌دهد)</li>
            </ul>
            <p>
              این تکنیک ساده، بهترین راه برای کنترل لحن (Tone) و فرمت خروجی است.
            </p>

            <h3 className="text-2xl font-bold text-emerald-500 mt-8 mb-4">۳. جداسازی نقش‌ها با تگ‌های XML</h3>
            <p>
              وقتی پرامپت شما طولانی می‌شود، مدل ممکن است بین دستورات (Task) و زمینه (Context) سردرگم شود. بهترین راه‌حل، استفاده از ساختار است. همانطور که در بخش «پرامپت‌ساز» این سایت دیدید، استفاده از تگ‌هایی مانند <code>&lt;role&gt;</code> و <code>&lt;task&gt;</code> به مدل یک نقشه راه شفاف می‌دهد و احتمال خطا را به حداقل می‌رساند.
            </p>

            <div className={`mt-8 p-6 rounded-xl border ${isDark ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-emerald-50 border-emerald-100'}`}>
              <h4 className="font-bold text-lg text-emerald-500 mb-2">جمع‌بندی</h4>
              <p className="text-sm">
                هوش مصنوعی جایگزین متخصصین نمی‌شود، اما متخصصینی که از هوش مصنوعی استفاده می‌کنند، جایگزین کسانی می‌شوند که استفاده نمی‌کنند. با ترکیب زنجیره تفکر، نمونه‌دهی و ساختاردهی XML، شما نه یک «کاربر عادی»، بلکه یک «معمار پرامپت» خواهید بود.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Prompt Builder Section */}
      <motion.section 
        id="builder" 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}
        className={`py-20 px-6 ${isDark ? 'bg-gray-900/30' : 'bg-gray-100'}`}
      >
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
      </motion.section>

      {/* Prompt Library Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp}
        className="py-20 px-6 max-w-6xl mx-auto"
      >
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
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        id="faq" 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}
        className={`py-20 px-6 max-w-4xl mx-auto border-t ${isDark ? 'border-gray-900' : 'border-gray-200'}`}
      >
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
      </motion.section>

      {/* Footer */}
      <footer className={`py-8 text-center border-t ${isDark ? 'text-gray-500 border-gray-800' : 'text-gray-500 border-gray-200'}`}>
        <p>ساخته شده با ⚡ در Termux | تمامی حقوق محفوظ است ۲۰۲۶</p>
      </footer>
    </main>
  );
}
