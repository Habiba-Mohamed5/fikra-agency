import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Megaphone, Share2, Bot, Code2, Eye, MessageCircle, Users, Sparkles,
  Menu, X, Send, Phone, Mail, ChevronRight, ChevronLeft,
  ArrowUpRight, Zap, Target, Cpu, CheckCircle2, ExternalLink, TrendingUp, Languages,
} from "lucide-react";

const LinkedinIcon = (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const FacebookIcon = (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const InstagramIcon = (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;

/* =====================================================================
   EDIT ME — real contact info + numbers you must fill in
   ===================================================================== */
const CONTACT = {
  phone: "+201151438765",          // main number (also used for WhatsApp)
  phone2: "+905527529936",         // second number
  email: "habiba5143m@gmail.com",  // consultation requests are sent here
  linkedin: "https://www.linkedin.com/in/habiba-mohamed-88901328a",
  facebook: "#",
  instagram: "#",
};
// Profit per website — put the real figure for each one (e.g. "45,000 ج.م / 45,000 EGP")
const PROFIT = {
  pioneer: { ar: "45,000 ج.م", en: "45,000 EGP" },
  crusto: { ar: "32,000 ج.م", en: "32,000 EGP" },
  cardio: { ar: "60,000 ج.م", en: "60,000 EGP" },
};
const WA = CONTACT.phone.replace("+", "");
 
/* ===================================================================== */
const CYAN = "#06b6d4", PURPLE = "#8b5cf6";
const glass = "bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl";
const gradText = "bg-gradient-to-l from-cyan-400 to-violet-500 bg-clip-text text-transparent";
const btnGrad = "bg-gradient-to-l from-cyan-500 to-violet-500 text-white";
 
/* ---------- Content (AR / EN) ---------- */
const T = {
  ar: {
    brand: "فكرة",
    nav: [["about", "من نحن"], ["allin", "كل حاجة علينا"], ["services", "خدماتنا"], ["work", "أعمالنا"], ["sites", "مواقعنا"], ["contact", "تواصل"]],
    navCta: "احجز استشارة",
    h1a: "نحول بياناتك إلى ", h1b: "أرباح",
    sub: "وكالة تسويق رقمي متكاملة تدمج بين إبداع المحتوى وقوة الذكاء الاصطناعي والأتمتة لتحقيق أعلى عائد على الاستثمار.",
    badge: "اشترك معنا.. وإحنا مسؤولين عن كل حاجة",
    cta1: "احجز استشارتك المجانية", cta2: "تصفح سابقة أعمالنا",
    roi: "عائد الإنفاق الإعلاني", agent: "وكيل مبيعات ذكي", agentTxt: "تم الرد على 48 استفسارًا وتأكيد 9 طلبات اليوم.",
    aboutT: "من نحن",
    aboutS: "نحن فريق متعدد التخصصات من مسوّقين رقميين ومطورين ومهندسي ذكاء اصطناعي. ننقلك من التسويق التقليدي إلى نمو مدفوع بالبيانات والأتمتة، مع حلول رقمية متكاملة من الإعلان حتى الموقع والبوت.",
    pillars: [["فريق متعدد التخصصات", "مسوّق ومبرمج ومهندس ذكاء اصطناعي في مكان واحد."], ["من التقليدي إلى الذكي", "حملات مبنية على البيانات وأنظمة تعمل نيابةً عنك 24/7."], ["حلول رقمية متكاملة", "إعلانات، محتوى، موقع، وبوت مبيعات تحت سقف واحد."]],
    allT: "اشترك معنا.. ونحن مسؤولون عن كل شيء",
    allS: "مش هتحتاج مسوّق ولا مبرمج ولا مصمم ولا موظف مبيعات. اشتراك واحد، وفريق كامل شغّال على نمو مشروعك.",
    allIn: ["إدارة الإعلانات المدفوعة وتحسينها يوميًا", "صناعة المحتوى والتصميم وإدارة الصفحات", "موقع احترافي مصمم لزيادة المبيعات", "بوت ذكي يرد على العملاء ويقفل الطلبات", "تقارير واضحة بالأرقام بدون تعقيد", "دعم مباشر وتواصل مستمر معك"],
    allCta: "ابدأ الاشتراك",
    servT: "خدماتنا المتكاملة", servS: "كل ما تحتاجه لتنمو رقميًا، من أول إعلان حتى آخر عملية بيع.",
    serv: [["إدارة الحملات الإعلانية المدفوعة", "Media Buying & Ads", "حملات مدروسة على فيسبوك وإنستجرام وجوجل بميزانيات محسوبة وتتبع كامل للنتائج."], ["صناعة المحتوى وإدارة المنصات", "Social Media & Content", "محتوى إبداعي وخطة نشر منتظمة تبني هوية علامتك."], ["روبوتات الرد الآلي وأتمتة المبيعات", "AI Marketing Agents & Automation", "وكلاء ذكاء اصطناعي يردون ويتابعون ويحوّلون العملاء إلى مبيعات."], ["تطوير واجهات الويب للمشاريع", "Web Development", "مواقع ومتاجر سريعة ومتجاوبة مصممة لتحويل الزائر إلى عميل."]],
    workT: "معرض الأعمال والأرقام", workS: "نتائج حقيقية من حملات نفذناها لعملائنا.",
    shot: "مكان لقطة شاشة النتائج",
    cases: [
      { tag: "إكسسوارات السيارات", title: "من مبيعات بطيئة إلى إعلان فيروسي اكتسح السوق", desc: "العميل كان يعاني من ضعف التفاعل وارتفاع تكلفة الإعلان. بتغيير الاستراتيجية بالكامل والتركيز على محتوى يخطف العين (Hook قوي)، حققنا انفجاراً في المشاهدات لتصل لنصف مليون مشاهدة! النتيجة؟ المبيعات تضاعفت مرات عديدة وتخطت التوقعات بميزانية إعلانية لا تذكر.", stats: [["497,763", "مشاهدة"], ["+1,180", "تفاعل"]], img: "/images/car-accessories.webp" },
      { tag: "WA Medical Wear", title: "سيل من رسائل الشراء بلا توقف", desc: "براند أزياء طبية كان يبحث عن مشترين جادين وليس مجرد 'لايكات'. قمنا بتصميم حملات رسائل موجهة بدقة شديدة للشريحة الطبية. فجأة، تحول الإنذار إلى سيل من المحادثات الجاهزة للشراء الفوري (121، 74، 53 طلب مؤكد في دفعات متتالية)، مما أحدث نقلة نوعية في أرباحهم.", stats: [["121", "محادثة شراء"], ["74", "محادثة شراء"], ["53", "محادثة شراء"]], img: "/images/wa-medical.webp" },
      { tag: "معدات الجيم", title: "السيطرة على جمهور جديد كلياً", desc: "كيف تبيع لجمهور لا يعرفك؟ التحدي كان اختراق شريحة جديدة. أطلقنا حملة وعي بهوية بصرية مختلفة. الأرقام كانت مذهلة: من أصل 6,123 مشاهدة، كان هناك 6,051 مشاهد من خارج المتابعين! لقد استحوذنا على سوق جديد تماماً ووسعنا قاعدة عملائهم بشكل غير مسبوق.", stats: [["6,123", "إجمالي المشاهدات"], ["6,051", "من غير المتابعين"]], img: "/images/gym-equipment.webp" },
      { tag: "تطوير عقاري", title: "مضاعفة العملاء المحتملين مع خفض التكلفة", desc: "شركة عقارات فاخرة كانت تعاني من ارتفاع تكلفة العميل المحتمل (CPL). قمنا بإعادة هيكلة الحملات الإعلانية على فيسبوك وإنستجرام، لنحقق 342 عميل محتمل مؤهل بجودة عالية، مع خفض التكلفة بنسبة 40% مقارنة بالشهر السابق.", stats: [["342", "عميل محتمل (Lead)"], ["-40%", "انخفاض التكلفة (CPL)"]], img: "/images/real_estate.webp" },
      { tag: "متجر عطور", title: "قفزة هائلة في عائد الإنفاق الإعلاني (ROAS)", desc: "متجر إلكتروني للعطور الفاخرة كان يواجه صعوبة في تحقيق أرباح من الإعلانات. من خلال استراتيجيات إعادة الاستهداف الذكية، حققنا عائد إنفاق إعلاني (ROAS) يصل إلى 5.2x، أي 520% كعائد على الاستثمار الإعلاني، وقفزة هائلة في المبيعات.", stats: [["5.2x", "عائد الإنفاق (ROAS)"], ["520%", "معدل العائد"]], img: "/images/perfume.webp" },
      { tag: "تطبيق توصيل", title: "نمو صاروخي في عمليات التثبيت (Installs)", desc: "تطبيق توصيل ناشئ احتاج إلى دخول قوي للسوق. أطلقنا حملات تسويقية مبتكرة عبر تيك توك وريلز. النتيجة؟ أكثر من 50 ألف عملية تثبيت للتطبيق في شهر واحد، مع تفاعل غير مسبوق من المستخدمين النشطين.", stats: [["50,420", "تثبيت للتطبيق"], ["8.7%", "معدل التحويل"]], img: "/images/app_installs.webp" }
    ],
    sitesT: "مواقع احترافية تدفع للشراء",
    sitesS: "نصمم مواقع تقنع الزائر وتسهّل عليه الطلب، وهذه بعض أعمالنا الحية.",
    profit: "الأرباح", visit: "زيارة الموقع",
    sites: [["Pioneer Medical Wear", "متجر لزي طبي فاخر (سكرَبز) بتصميم راقٍ يشجع على الشراء."], ["Crusto | كراستو", "موقع مطعم بمنيو كامل وعربة طلبات وطلب مباشر عبر واتساب."], ["CardioOS", "منصة ويب احترافية بواجهة حديثة وتجربة استخدام سلسة."]],
    hubT: "المشاريع الابتكارية", hubS: "مفاهيم نطوّرها في مختبرنا لنقدّم لعملائنا خطوة أبعد.",
    concept: "مشروع تجريبي", hubName: "وكيل مبيعات ذكي",
    hubD: "موظف مبيعات رقمي يعمل 24/7: يجذب العملاء، يجيب عن أسئلتهم، ويقودهم حتى إتمام الشراء.",
    hubF: ["توليد العملاء المحتملين تلقائيًا", "الرد على التعليقات والرسائل فورًا", "إغلاق الصفقات دون تدخل بشري"],
    chat: [["c", "بكام الطقم الأسود؟"], ["b", "السعر 450 جنيه، والمقاسات من S إلى XXL. تحب أحجز لك؟"], ["c", "أيوه، مقاس L"], ["b", "تمام! تم تسجيل طلبك. محتاج عنوان التوصيل."]],
    ctaT: "جاهز لنقل أعمالك إلى المستوى التالي؟", ctaS: "اترك بياناتك وسنرد عليك لتحديد موعد استشارتك المجانية.",
    fName: "الاسم", fPhone: "رقم الهاتف", fMsg: "أخبرنا عن مشروعك", fSend: "أرسل طلب الاستشارة", sending: "جارٍ الإرسال...",
    okT: "تم إرسال طلبك", okD: "سنتواصل معك قريبًا.", err: "تعذر الإرسال. تواصل معنا مباشرة عبر واتساب:", waBtn: "تواصل عبر واتساب", req: "الاسم ورقم الهاتف مطلوبان.",
    rights: "جميع الحقوق محفوظة.", other: "English",
  },
  en: {
    brand: "Fikra",
    nav: [["about", "About"], ["allin", "All-inclusive"], ["services", "Services"], ["work", "Results"], ["sites", "Websites"], ["contact", "Contact"]],
    navCta: "Book a consult",
    h1a: "We turn your data into ", h1b: "profit",
    sub: "A full-service digital marketing agency blending creative content with AI and automation to deliver the highest return on your investment.",
    badge: "Subscribe once. We handle everything.",
    cta1: "Book your free consultation", cta2: "See our work",
    roi: "Return on ad spend", agent: "Smart Sales Agent", agentTxt: "Answered 48 inquiries and confirmed 9 orders today.",
    aboutT: "About us",
    aboutS: "We are a multi-disciplinary team of digital marketers, developers and AI engineers. We move you from traditional marketing to data-driven growth and automation, with full-stack digital solutions from ads to website to sales bot.",
    pillars: [["Multi-disciplinary team", "Marketer, developer and AI engineer in one place."], ["From traditional to smart", "Data-driven campaigns and systems that work for you 24/7."], ["Complete digital solutions", "Ads, content, website and sales bot under one roof."]],
    allT: "Subscribe. We take care of the rest.",
    allS: "No marketer, developer, designer or sales rep to hire. One subscription, and a full team working on your growth.",
    allIn: ["Paid ads management, optimized daily", "Content creation, design and page management", "A professional website built to increase sales", "A smart bot that answers customers and closes orders", "Clear, simple reports with real numbers", "Direct support and ongoing communication"],
    allCta: "Start your subscription",
    servT: "Our integrated services", servS: "Everything you need to grow online, from the first ad to the final sale.",
    serv: [["Paid Media Buying & Ads", "Media Buying & Ads", "Data-backed campaigns on Facebook, Instagram and Google with controlled budgets and full tracking."], ["Social Media & Content", "Social Media & Content", "Creative content and a steady publishing plan that builds your brand."], ["AI Agents & Sales Automation", "AI Marketing Agents & Automation", "AI agents that reply, follow up and turn customers into sales."], ["Web Development", "Web Development", "Fast, responsive sites and stores designed to convert visitors into buyers."]],
    workT: "Case studies & real results", workS: "Real results from campaigns we ran for our clients.",
    shot: "Results screenshot placeholder",
    cases: [
      { tag: "Car Accessories", title: "From Slow Sales to a Viral Market Takeover", desc: "The client suffered from low engagement and high ad costs. By completely revamping the strategy with a powerful hook, we exploded their reach to half a million views! The result? Sales skyrocketed beyond expectations on a minimal ad budget.", stats: [["497,763", "Views"], ["1,180+", "Interactions"]], img: "/images/car-accessories.webp" },
      { tag: "WA Medical Wear", title: "A Non-stop Flood of Purchase Messages", desc: "A medical wear brand seeking serious buyers, not just 'likes'. We crafted laser-targeted messaging campaigns for medical professionals. Suddenly, the inbox was flooded with hot, ready-to-buy chats (121, 74, 53 solid orders in waves), completely transforming their revenue.", stats: [["121", "Purchase chats"], ["74", "Purchase chats"], ["53", "Purchase chats"]], img: "/images/wa-medical.webp" },
      { tag: "Gym Equipment", title: "Total Domination of a Brand New Audience", desc: "How do you sell to people who don't know you? We launched a bold awareness campaign. The numbers were staggering: out of 6,123 views, 6,051 were non-followers! We successfully captured a completely new market share and expanded their customer base exponentially.", stats: [["6,123", "Total views"], ["6,051", "From non-followers"]], img: "/images/gym-equipment.webp" },
      { tag: "Real Estate", title: "Doubling Qualified Leads While Slashing Costs", desc: "A luxury real estate firm was struggling with high Cost Per Lead (CPL). We completely restructured their Facebook and Instagram campaigns, generating 342 highly qualified leads while reducing the CPL by 40% compared to the previous month.", stats: [["342", "Qualified Leads"], ["-40%", "Cost Per Lead (CPL)"]], img: "/images/real_estate.webp" },
      { tag: "Perfumes Store", title: "Massive Surge in Return on Ad Spend (ROAS)", desc: "An e-commerce fragrance store was struggling to make their ads profitable. Through smart retargeting strategies, we achieved a staggering 5.2x ROAS (520% return on ad spend), driving a massive surge in total revenue and order volume.", stats: [["5.2x", "Return on Ad Spend"], ["520%", "ROI"]], img: "/images/perfume.webp" },
      { tag: "Delivery App", title: "Explosive Growth in App Installs", desc: "A startup delivery app needed a strong market entry. We launched innovative marketing campaigns across TikTok and Reels. The result? Over 50,000 app installs in a single month, with unprecedented engagement from active users.", stats: [["50,420", "App Installs"], ["8.7%", "Conversion Rate"]], img: "/images/app_installs.webp" }
    ],
    sitesT: "Professional websites that drive purchases",
    sitesS: "We build sites that persuade visitors and make ordering easy. Here are some of our live projects.",
    profit: "Profit", visit: "Visit site",
    sites: [["Pioneer Medical Wear", "A luxury medical scrubs store with an elegant design that encourages buying."], ["Crusto", "A restaurant site with a full menu, cart and direct WhatsApp ordering."], ["CardioOS", "A professional web platform with a modern interface and smooth experience."]],
    hubT: "AI & Innovation Hub", hubS: "Concepts we build in our lab to take our clients one step further.",
    concept: "Concept project", hubName: "Smart Sales Agent",
    hubD: "A digital sales rep that works 24/7: attracts leads, answers questions and guides them to checkout.",
    hubF: ["Automated lead generation", "Instant replies to comments and messages", "Closes deals with no human involved"],
    chat: [["c", "How much is the black set?"], ["b", "It's 450 EGP, sizes S to XXL. Want me to book one?"], ["c", "Yes, size L"], ["b", "Done! Your order is logged. I just need a delivery address."]],
    ctaT: "Ready to take your business to the next level?", ctaS: "Leave your details and we'll get back to you to schedule your free consultation.",
    fName: "Name", fPhone: "Phone number", fMsg: "Tell us about your project", fSend: "Request consultation", sending: "Sending...",
    okT: "Request sent", okD: "We'll be in touch soon.", err: "Couldn't send. Contact us directly on WhatsApp:", waBtn: "Chat on WhatsApp", req: "Name and phone are required.",
    rights: "All rights reserved.", other: "العربية",
  },
};
 
/* ---------- Helpers ---------- */
const Reveal = ({ children, delay = 0, className = "" }: any) => {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
};
const SectionTitle = ({ title, sub }: any) => (
  <Reveal className="text-center mb-12 max-w-2xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-3 leading-snug"><span className={gradText}>{title}</span></h2>
    {sub && <p className="text-slate-400 leading-loose">{sub}</p>}
  </Reveal>
);
const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
 
/* ---------- Navbar ---------- */
function Navbar({ t, lang, setLang }: any) {
  const [open, setOpen] = useState(false);
  const go = (id: string) => { setOpen(false); scrollTo(id); };
  return (
    <header className="fixed top-3 inset-x-3 z-50">
      <nav className={`${glass} max-w-6xl mx-auto px-5 py-3 flex items-center justify-between bg-[#0B1120]/60`}>
        <button onClick={() => go("hero")} className="flex items-center gap-2 font-extrabold text-lg">
          <Sparkles size={20} color={CYAN} /><span className={gradText}>{t.brand}</span>
        </button>
        <ul className="hidden lg:flex items-center gap-6 text-sm text-slate-300">
          {t.nav.map(([id, label]: any) => <li key={id}><button onClick={() => go(id)} className="hover:text-cyan-400 transition-colors">{label}</button></li>)}
        </ul>
        <div className="flex items-center gap-2">
          <button onClick={() => setLang(lang === "ar" ? "en" : "ar")} className="flex items-center gap-1.5 text-sm px-3 py-2 rounded-xl border border-white/15 text-slate-200 hover:border-cyan-400 transition-colors">
            <Languages size={15} />{t.other}
          </button>
          <button onClick={() => go("contact")} className={`hidden sm:block text-sm font-bold px-4 py-2 rounded-xl ${btnGrad}`}>{t.navCta}</button>
          <button className="lg:hidden text-slate-200" aria-label="menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            className={`${glass} lg:hidden mt-2 p-4 flex flex-col gap-3 bg-[#0B1120]/90 max-w-6xl mx-auto`}>
            {t.nav.map(([id, label]: any) => <li key={id}><button onClick={() => go(id)} className="w-full text-start py-1 text-slate-200">{label}</button></li>)}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
 
/* ---------- Hero ---------- */
function Hero({ t }: any) {
  const reduce = useReducedMotion();
  const fl = (d: number, y: number): any => (reduce ? {} : { animate: { y: [0, -y, 0] }, transition: { duration: 5 + d, repeat: Infinity, ease: "easeInOut", delay: d } });
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-16 px-5 overflow-hidden">
      {/* Crisp geometric circles instead of blurred blobs */}
      <div className="absolute -top-64 -start-64 w-[800px] h-[800px] rounded-full opacity-[0.07] pointer-events-none" style={{ background: CYAN }} />
      <div className="absolute -bottom-80 -end-20 w-[900px] h-[900px] rounded-full opacity-[0.1] pointer-events-none" style={{ background: PURPLE }} />
      
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center w-full">
        <div>
          <motion.h1 initial={reduce ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-black leading-[1.35] mb-6">
            {t.h1a}<span className={gradText}>{t.h1b}</span>
          </motion.h1>
          <motion.p initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.7 }}
            className="text-slate-300 text-lg leading-loose max-w-xl mb-9">{t.sub}</motion.p>
          <motion.div initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="flex flex-wrap gap-4">
            <button onClick={() => scrollTo("contact")} className={`px-7 py-3.5 rounded-xl font-bold ${btnGrad} shadow-[0_0_30px_-5px_#06b6d4] hover:scale-105 active:scale-95 transition-transform`}>{t.cta1}</button>
            <button onClick={() => scrollTo("work")} className={`${glass} px-7 py-3.5 font-bold hover:border-cyan-400/60 transition-colors`}>{t.cta2}</button>
          </motion.div>
        </div>
        <div className="relative h-[380px] hidden lg:block" aria-hidden="true">
          <motion.div {...fl(0, 16)} className={`${glass} absolute top-6 end-6 w-64 p-5`}>
            <div className="flex items-center gap-2 text-cyan-400 text-sm mb-3"><Target size={16} />{t.roi}</div>
            <div className="text-4xl font-black" dir="ltr">+312%</div>
            <div className="mt-4 flex items-end gap-1.5 h-14" dir="ltr">
              {[30, 45, 38, 60, 52, 80, 96].map((h, i) => <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-cyan-500/30 to-cyan-400" style={{ height: `${h}%` }} />)}
            </div>
          </motion.div>
          <motion.div {...fl(1, 12)} className={`${glass} absolute bottom-10 start-4 w-60 p-5`}>
            <div className="flex items-center gap-2 text-violet-400 text-sm mb-2"><Bot size={16} />{t.agent}</div>
            <div className="text-sm text-slate-300 leading-relaxed">{t.agentTxt}</div>
          </motion.div>
          <motion.div {...fl(2, 10)} className="absolute top-1/2 start-1/3 w-20 h-20 rounded-2xl grid place-items-center bg-gradient-to-br from-cyan-500 to-violet-600 shadow-[0_0_50px_-5px_#8b5cf6]"><Cpu size={34} /></motion.div>
        </div>
      </div>
    </section>
  );
}
 
/* ---------- About ---------- */
function About({ t }: any) {
  const icons = [Users, Zap, Code2];
  return (
    <section id="about" className="py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title={t.aboutT} sub={t.aboutS} />
        <div className="grid md:grid-cols-3 gap-6">
          {t.pillars.map(([h, d]: any, i: number) => { const Icon = icons[i]; return (
            <Reveal key={h} delay={i * 0.08}>
              <div className={`${glass} p-7 h-full`}><Icon className="mb-4" color={CYAN} size={28} /><h3 className="font-bold text-lg mb-2">{h}</h3><p className="text-slate-400 leading-loose text-sm">{d}</p></div>
            </Reveal>); })}
        </div>
      </div>
    </section>
  );
}
 
/* ---------- All-inclusive ---------- */
function AllIn({ t }: any) {
  return (
    <section id="allin" className="py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className={`${glass} relative overflow-hidden p-8 md:p-12`}>
            <div className="absolute -top-16 -end-16 w-72 h-72 rounded-full blur-[110px] opacity-25" style={{ background: CYAN }} />
            <div className="relative text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3 leading-snug"><span className={gradText}>{t.allT}</span></h2>
              <p className="text-slate-300 leading-loose">{t.allS}</p>
            </div>
            <ul className="relative grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10">
              {t.allIn.map((x: any) => (
                <li key={x} className="flex items-start gap-3 rounded-xl bg-white/5 border border-white/10 p-4">
                  <CheckCircle2 size={20} color={CYAN} className="shrink-0 mt-0.5" /><span className="text-slate-200">{x}</span>
                </li>
              ))}
            </ul>
            <div className="relative text-center">
              <button onClick={() => scrollTo("contact")} className={`px-8 py-3.5 rounded-xl font-bold ${btnGrad} hover:scale-105 active:scale-95 transition-transform`}>{t.allCta}</button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
 
/* ---------- Services ---------- */
function Services({ t }: any) {
  const icons = [Megaphone, Share2, Bot, Code2], cols = [CYAN, PURPLE, CYAN, PURPLE];
  return (
    <section id="services" className="py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title={t.servT} sub={t.servS} />
        <div className="grid sm:grid-cols-2 gap-6">
          {t.serv.map(([h, en, d]: any, i: number) => { const Icon = icons[i], c = cols[i]; return (
            <Reveal key={en} delay={(i % 2) * 0.08}>
              <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className={`${glass} p-8 h-full hover:border-white/25 transition-colors`}>
                <div className="w-14 h-14 rounded-xl grid place-items-center mb-5" style={{ background: `${c}22`, boxShadow: `0 0 30px -8px ${c}` }}><Icon color={c} size={28} /></div>
                <h3 className="text-xl font-bold mb-1">{h}</h3>
                <p dir="ltr" className="text-xs text-slate-500 mb-3 text-start">{en}</p>
                <p className="text-slate-400 leading-loose">{d}</p>
              </motion.div>
            </Reveal>); })}
        </div>
      </div>
    </section>
  );
}
 
/* ---------- Case studies ---------- */
function Portfolio({ t, dir }: any) {
  const [i, setI] = useState(0);
  const c = t.cases[i], color = i % 2 !== 0 ? PURPLE : CYAN;
  const ICONS_MAP = [
    [Eye, MessageCircle], 
    [MessageCircle, MessageCircle, MessageCircle], 
    [Eye, Users],
    [Target, TrendingUp],
    [TrendingUp, Zap],
    [Zap, Target]
  ];
  const icons = ICONS_MAP[i] || [TrendingUp, TrendingUp, TrendingUp];
  const n = t.cases.length, next = () => setI((i + 1) % n), prev = () => setI((i - 1 + n) % n);
  const [Prev, Next] = dir === "rtl" ? [ChevronRight, ChevronLeft] : [ChevronLeft, ChevronRight];
  return (
    <section id="work" className="py-24 px-5">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title={t.workT} sub={t.workS} />
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {t.cases.map((x: any, k: number) => (
            <button key={x.tag} onClick={() => setI(k)} className={`px-4 py-2 rounded-full text-sm border transition-colors ${k === i ? "bg-white/10 border-cyan-400 text-white" : "border-white/10 text-slate-400 hover:text-white"}`}>{x.tag}</button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={i + dir} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.3 }}
            className={`${glass} grid md:grid-cols-2 gap-8 p-6 md:p-8`}>
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-black/50 border border-white/10 relative">
              <img src={c.img} alt={c.title} className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xs font-bold mb-3" style={{ color }}>{c.tag}</span>
              <h3 className="text-2xl font-extrabold mb-3 leading-snug">{c.title}</h3>
              <p className="text-slate-400 leading-loose mb-6">{c.desc}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {c.stats.map(([v, l]: any, k: number) => { const Icon = icons[k] || TrendingUp; return (
                  <div key={k} className="rounded-xl bg-white/5 border border-white/10 p-3">
                    <Icon size={16} color={color} className="mb-1" /><div className="text-xl font-black" dir="ltr">{v}</div><div className="text-xs text-slate-400">{l}</div>
                  </div>); })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center gap-3 mt-6">
          <button onClick={prev} aria-label="prev" className={`${glass} w-11 h-11 grid place-items-center hover:border-cyan-400/60`}><Prev /></button>
          <button onClick={next} aria-label="next" className={`${glass} w-11 h-11 grid place-items-center hover:border-cyan-400/60`}><Next /></button>
        </div>
      </div>
    </section>
  );
}
 
/* ---------- Websites ---------- */
const SITES = [
  { url: "https://pioneer-wear.vercel.app/", key: "pioneer", img: "/images/pioneer.webp" },
  { url: "https://crusto-seven.vercel.app/", key: "crusto", img: "/images/crusto.webp" },
  { url: "https://cardio-os-bko3.vercel.app/", key: "cardio", img: "/images/cardio.webp" },
];
function Sites({ t, lang }: any) {
  return (
    <section id="sites" className="py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title={t.sitesT} sub={t.sitesS} />
        <div className="grid md:grid-cols-3 gap-6">
          {SITES.map(({ url, key, img }: any, i) => (
            <Reveal key={key} delay={i * 0.08}>
              <div className={`${glass} p-6 h-full flex flex-col hover:border-white/25 transition-colors group`}>
                <div className="aspect-video rounded-xl overflow-hidden bg-black/50 border border-white/10 relative mb-5">
                  <img src={img} alt={t.sites[i][0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-lg font-bold mb-2" dir="ltr">{t.sites[i][0]}</h3>
                <p className="text-slate-400 text-sm leading-loose mb-5 flex-1">{t.sites[i][1]}</p>
                <div className="flex items-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-400/20 px-3 py-2 mb-4 text-sm">
                  <TrendingUp size={16} className="text-emerald-400" />
                  <span className="text-slate-300">{t.profit}:</span><span className="font-bold text-emerald-300">{(PROFIT as any)[key][lang]}</span>
                </div>
                <a href={url} target="_blank" rel="noreferrer" className={`inline-flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm ${btnGrad}`}>
                  {t.visit}<ExternalLink size={15} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
 
/* ---------- AI Hub ---------- */
function Hub({ t }: any) {
  return (
    <section id="hub" className="py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title={t.hubT} sub={t.hubS} />
        <Reveal>
          <div className={`${glass} relative overflow-hidden p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center`}>
            <div className="absolute -top-16 -start-16 w-64 h-64 rounded-full blur-[100px] opacity-25" style={{ background: PURPLE }} />
            <div className="relative">
              <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-violet-500/15 text-violet-300 border border-violet-400/30 mb-4"><Sparkles size={12} />{t.concept}</span>
              <h3 className="text-3xl font-extrabold mb-3">{t.hubName}</h3>
              <p className="text-slate-400 leading-loose mb-6">{t.hubD}</p>
              <ul className="space-y-3">
                {t.hubF.map((f: any) => <li key={f} className="flex items-center gap-3 text-slate-200"><span className="w-6 h-6 rounded-full grid place-items-center bg-cyan-500/20"><Zap size={13} color={CYAN} /></span>{f}</li>)}
              </ul>
            </div>
            <div className="relative space-y-3" aria-hidden="true">
              {t.chat.map(([who, txt]: any, k: number) => (
                <motion.div key={k} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + k * 0.35 }}
                  className={`max-w-[85%] text-sm px-4 py-2.5 rounded-2xl ${who === "b" ? "bg-gradient-to-l from-cyan-500/30 to-violet-500/30 border border-white/10" : "bg-white/10 ms-auto"}`}>{txt}</motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
 
/* ---------- Footer / CTA ---------- */
function Footer({ t, lang }: any) {
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error | invalid
  const [f, setF] = useState({ name: "", phone: "", msg: "" });
  const on = (k: string) => (e: any) => setF({ ...f, [k]: e.target.value });
  const submit = async () => {
    if (!f.name.trim() || !f.phone.trim()) return setStatus("invalid");
    setStatus("sending");
    try {
      // FormSubmit emails the request to CONTACT.email (first submission asks you to confirm the address once)
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ _subject: "New consultation request", name: f.name, phone: f.phone, message: f.msg }),
      });
      if (!res.ok) throw new Error("bad response");
      setStatus("ok");
    } catch { setStatus("error"); }
  };
  const waText = encodeURIComponent(`${f.name ? f.name + " - " : ""}${f.msg || (lang === "ar" ? "أريد استشارة مجانية" : "I'd like a free consultation")}`);
  const input = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors";
  const social = [[LinkedinIcon, "LinkedIn", CONTACT.linkedin], [FacebookIcon, "Facebook", CONTACT.facebook], [InstagramIcon, "Instagram", CONTACT.instagram]];
  return (
    <footer id="contact" className="pt-24 pb-8 px-5">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title={t.ctaT} sub={t.ctaS} />
        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className={`${glass} p-8 h-full`}>
              <div className="space-y-5 mb-8 text-slate-300">
                {[CONTACT.phone, CONTACT.phone2].map((p) => <a key={p} href={`tel:${p}`} className="flex items-center gap-3 hover:text-cyan-300"><Phone size={18} color={CYAN} /><span dir="ltr">{p}</span></a>)}
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 hover:text-cyan-300"><Mail size={18} color={CYAN} /><span dir="ltr">{CONTACT.email}</span></a>
              </div>
              <div className="flex gap-3">
                {social.map(([Icon, label, href]: any) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="w-11 h-11 rounded-xl grid place-items-center bg-white/5 border border-white/10 hover:border-violet-400 hover:text-violet-300 transition-colors"><Icon className="w-[18px] h-[18px]" /></a>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className={`${glass} p-8`}>
              {status === "ok" ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full grid place-items-center bg-cyan-500/20"><Send color={CYAN} /></div>
                  <h3 className="font-bold text-xl mb-1">{t.okT}</h3><p className="text-slate-400 text-sm">{t.okD}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <input className={input} placeholder={t.fName} value={f.name} onChange={on("name")} />
                  <input className={input} placeholder={t.fPhone} inputMode="tel" dir="ltr" value={f.phone} onChange={on("phone")} />
                  <textarea className={`${input} resize-none`} rows={4} placeholder={t.fMsg} value={f.msg} onChange={on("msg")} />
                  {status === "invalid" && <p className="text-amber-400 text-sm">{t.req}</p>}
                  {status === "error" && (
                    <p className="text-red-400 text-sm">{t.err}{" "}
                      <a className="underline" href={`https://wa.me/${WA}?text=${waText}`} target="_blank" rel="noreferrer">{t.waBtn}</a></p>
                  )}
                  <button onClick={submit} disabled={status === "sending"} className={`w-full py-3.5 rounded-xl font-bold ${btnGrad} hover:opacity-90 active:scale-[0.98] transition flex items-center justify-center gap-2 disabled:opacity-60`}>
                    {status === "sending" ? t.sending : t.fSend}<ArrowUpRight size={18} />
                  </button>
                  <a href={`https://wa.me/${WA}?text=${waText}`} target="_blank" rel="noreferrer" className="block text-center text-sm text-slate-400 hover:text-cyan-300">{t.waBtn}</a>
                </div>
              )}
            </div>
          </Reveal>
        </div>
        <p className="text-center text-slate-500 text-sm mt-16">© {new Date().getFullYear()} {t.brand}. {t.rights}</p>
      </div>
    </footer>
  );
}
 
/* ---------- App ---------- */
export default function App() {
  const [lang, setLang] = useState("ar");
  const t = (T as any)[lang], dir = lang === "ar" ? "rtl" : "ltr";
  return (
    <div dir={dir} lang={lang} className="min-h-screen text-slate-100 antialiased" style={{ background: "#0B1120", fontFamily: "'Cairo', 'Tajawal', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;800;900&display=swap');
        html{scroll-behavior:smooth} :focus-visible{outline:2px solid ${CYAN};outline-offset:2px}`}</style>
      <Navbar t={t} lang={lang} setLang={setLang} />
      <main>
        <Hero t={t} /><About t={t} /><AllIn t={t} /><Services t={t} />
        <Portfolio t={t} dir={dir} /><Sites t={t} lang={lang} /><Hub t={t} />
      </main>
      <Footer t={t} lang={lang} />
    </div>
  );
}
