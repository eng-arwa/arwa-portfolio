import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Download,
  ExternalLink,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";

type Lang = "en" | "ar";

const assetBase = import.meta.env.BASE_URL;
const cvUrl = `${assetBase}assets/AltaCV_Template__2__d1bbd174.pdf`;
const heroImage = `${assetBase}assets/arwa-tech-abstract_c201b54c.png`;

const content = {
  en: {
    nav: ["About", "Work", "Experience", "Contact"],
    available: "AVAILABLE FOR SELECT PROJECTS",
    heroTitle: "Frontend systems with a sharper edge.",
    heroIntro:
      "I’m Arwa — an Angular specialist turning complex product ideas into fast, clear and dependable web experiences.",
    viewWork: "View selected work",
    aboutMe: "A frontend engineer who thinks in systems.",
    aboutBody:
      "I build enterprise interfaces from first architecture to final pixel. My sweet spot is the space between thoughtful UX, maintainable code and the kind of performance users feel immediately.",
    location: "Sana’a, Yemen · Working globally",
    principlesLabel: "What I bring",
    principles: [
      ["01", "Architectural clarity", "Scalable Angular foundations, clean state management and secure role-based flows."],
      ["02", "Product-minded craft", "Pixel-aware implementation that respects the original intent behind every screen."],
      ["03", "Built to last", "Performance-first decisions, reusable components and ownership from brief to delivery."],
    ],
    selectedWork: "Selected work",
    workIntro: "A closer look at systems I’ve shaped, shipped and made easier to use.",
    projects: [
      {
        number: "01",
        type: "ENTERPRISE SYSTEM · KITSYS",
        title: "Helpdesk & Security Management",
        desc: "Architected internal platforms from scratch with full-scale UI, secure RBAC and a workflow designed around real operational teams.",
        tags: ["Angular 16+", "NGRX", "RBAC", "REST APIs"],
        accent: "yellow",
      },
      {
        number: "02",
        type: "CLIENT PROJECT · 2023",
        title: "Offers & Marketing Management",
        desc: "A multi-tenant platform for merchants to manage discount codes, dashboards and a complex commission calculation engine.",
        tags: ["Angular", "Multi-tenant", "Dashboards", "Logic engine"],
        accent: "mint",
      },
      {
        number: "03",
        type: "PERSONAL PROJECT · 2023",
        title: "E-Commerce & Task Tracking",
        desc: "Real-time systems with role-based permissions and secure payment-flow simulations — designed as a practical product playground.",
        tags: ["WebSocket", "Permissions", "Payments", "Real-time"],
        accent: "lilac",
      },
    ],
    experience: "Experience",
    experienceIntro: "From responsive business websites to enterprise systems used across the region.",
    roles: [
      {
        date: "2023 — PRESENT",
        role: "Frontend Developer · Angular Lead",
        company: "Kitsys Company",
        place: "Sana’a, Yemen",
        bullets: [
          "Led the architecture and delivery of Helpdesk and Security Management systems from scratch.",
          "Spearheaded frontend work across Supplier Portal, Customer Portal and Onboarding systems.",
          "Improved responsiveness and scalability with Lazy Loading and OnPush Change Detection.",
        ],
      },
      {
        date: "JUN 2023 — DEC 2023",
        role: "Angular Developer",
        company: "SmartMind · Contractor for Elm KSA",
        place: "Sana’a, Yemen",
        bullets: [
          "Developed high-performance modules for Tageem and Ajer platforms in collaboration with Elm Saudi Company.",
          "Built consistent, reusable UI components using Angular Material and PrimeNG.",
        ],
      },
      {
        date: "SEP 2022 — 2023",
        role: "Frontend Developer",
        company: "Unicom Group",
        place: "Sana’a, Yemen",
        bullets: [
          "Translated complex Figma wireframes into interactive web applications using JavaScript and jQuery.",
          "Specialized in responsive design and SEO-optimized business websites.",
        ],
      },
    ],
    toolkit: "Toolkit",
    toolkitIntro: "The tools I reach for when the brief needs to become a reliable product.",
    skills: ["Angular 16+", "TypeScript", "JavaScript ES6", "RxJS", "NGRX", "HTML5 / CSS3 / Sass", "PrimeNG / Material", "Bootstrap", "RESTful APIs", "WebSocket", "Git / GitHub", "Webpack / Gulp", "Figma to Code", "Node.js", "Flutter / Dart", "SQL Server / MySQL"],
    education: "Education",
    educationTitle: "Bachelor in Information Technology",
    educationSchool: "National University",
    educationDate: "2017 — 2021 · Excellent Grade with Honors",
    softSkills: "Soft skills",
    softSkillsList: ["Agile / Scrum", "Team leadership", "Problem solving", "Task ownership", "Continuous learning"],
    contactEyebrow: "LET’S MAKE THE COMPLEX FEEL SIMPLE",
    contactTitle: "Have a product that needs a sharper frontend?",
    contactBody: "Tell me what you’re building. I’m open to select collaborations, frontend leadership and ambitious products that value craft.",
    startConversation: "Start a conversation",
    downloadCv: "Download CV",
    footerNote: "Designed & built with intention.",
  },
  ar: {
    nav: ["نبذة", "الأعمال", "الخبرة", "تواصل"],
    available: "متاحة لمشاريع مختارة",
    heroTitle: "واجهات أمامية بوضوح أكبر وأثر أقوى.",
    heroIntro:
      "أنا أروى — متخصصة في Angular، أحوّل الأفكار المعقدة إلى تجارب ويب سريعة، واضحة وموثوقة.",
    viewWork: "استعرضي أعمالي",
    aboutMe: "مهندسة واجهات تفكّر بمنطق الأنظمة.",
    aboutBody:
      "أبني واجهات المؤسسات بدءًا من المعمارية الأولى وحتى آخر تفصيلة بصرية. أبرع في المساحة التي تلتقي فيها تجربة المستخدم المدروسة مع الكود القابل للصيانة والأداء الذي يشعر به المستخدم فورًا.",
    location: "صنعاء، اليمن · أعمل مع فرق حول العالم",
    principlesLabel: "ما أقدمه",
    principles: [
      ["01", "معمارية واضحة", "أسس Angular قابلة للتوسع، إدارة حالة نظيفة وتدفقات آمنة مبنية على الصلاحيات."],
      ["02", "حسّ المنتج", "تنفيذ يهتم بالتفاصيل ويحافظ على الفكرة الأصلية خلف كل شاشة."],
      ["03", "بناء يدوم", "قرارات تضع الأداء أولًا، مكونات قابلة لإعادة الاستخدام وملكية كاملة من الفكرة إلى التسليم."],
    ],
    selectedWork: "أعمال مختارة",
    workIntro: "نظرة أقرب على أنظمة صممتها وطورتها وجعلت استخدامها أسهل.",
    projects: [
      {
        number: "01",
        type: "نظام مؤسسي · Kitsys",
        title: "إدارة الدعم والأمن",
        desc: "صممت وطورت منصات داخلية من الصفر بواجهة متكاملة، وصلاحيات آمنة وتجربة عمل مبنية حول احتياجات الفرق التشغيلية.",
        tags: ["Angular 16+", "NGRX", "RBAC", "REST APIs"],
        accent: "yellow",
      },
      {
        number: "02",
        type: "مشروع عميل · 2023",
        title: "إدارة العروض والتسويق",
        desc: "منصة متعددة المستأجرين للتجار لإدارة أكواد الخصم ولوحات البيانات ومحرك معقد لحساب العمولات.",
        tags: ["Angular", "Multi-tenant", "Dashboards", "Logic engine"],
        accent: "mint",
      },
      {
        number: "03",
        type: "مشروع شخصي · 2023",
        title: "التجارة الإلكترونية وتتبع المهام",
        desc: "أنظمة لحظية بصلاحيات مبنية على الأدوار ومحاكاة لتدفقات الدفع الآمنة — مساحة عملية لتجربة بناء المنتجات.",
        tags: ["WebSocket", "Permissions", "Payments", "Real-time"],
        accent: "lilac",
      },
    ],
    experience: "الخبرة",
    experienceIntro: "من مواقع الأعمال المتجاوبة إلى أنظمة المؤسسات المستخدمة على مستوى المنطقة.",
    roles: [
      {
        date: "2023 — الآن",
        role: "مطوّرة واجهات أمامية · قائدة Angular",
        company: "Kitsys Company",
        place: "صنعاء، اليمن",
        bullets: [
          "قدت معمارية وتسليم أنظمة الدعم والأمن من الصفر.",
          "قدت تطوير الواجهة الأمامية لبوابات الموردين والعملاء وأنظمة تهيئة المستخدمين.",
          "حسّنت الاستجابة وقابلية التوسع باستخدام Lazy Loading وOnPush Change Detection.",
        ],
      },
      {
        date: "يونيو 2023 — ديسمبر 2023",
        role: "مطوّرة Angular",
        company: "SmartMind · متعاقدة مع Elm KSA",
        place: "صنعاء، اليمن",
        bullets: [
          "طورت وحدات عالية الأداء لمنصتي تقييم وأجير بالتعاون مع شركة علم السعودية.",
          "بنيت مكونات واجهة متسقة وقابلة لإعادة الاستخدام باستخدام Angular Material وPrimeNG.",
        ],
      },
      {
        date: "سبتمبر 2022 — 2023",
        role: "مطوّرة واجهات أمامية",
        company: "Unicom Group",
        place: "صنعاء، اليمن",
        bullets: [
          "حوّلت مخططات Figma المعقدة إلى تطبيقات ويب تفاعلية باستخدام JavaScript وjQuery.",
          "تخصصت في التصميم المتجاوب ومواقع الأعمال المحسّنة لمحركات البحث.",
        ],
      },
    ],
    toolkit: "الأدوات",
    toolkitIntro: "الأدوات التي أستخدمها لتحويل الموجز إلى منتج موثوق.",
    skills: ["Angular 16+", "TypeScript", "JavaScript ES6", "RxJS", "NGRX", "HTML5 / CSS3 / Sass", "PrimeNG / Material", "Bootstrap", "RESTful APIs", "WebSocket", "Git / GitHub", "Webpack / Gulp", "Figma to Code", "Node.js", "Flutter / Dart", "SQL Server / MySQL"],
    education: "التعليم",
    educationTitle: "بكالوريوس تكنولوجيا المعلومات",
    educationSchool: "الجامعة الوطنية",
    educationDate: "2017 — 2021 · تقدير ممتاز مع مرتبة الشرف",
    softSkills: "المهارات الشخصية",
    softSkillsList: ["Agile / Scrum", "قيادة الفرق", "حل المشكلات", "تحمل المسؤولية", "التعلم المستمر"],
    contactEyebrow: "لنجعل التعقيد يبدو بسيطًا",
    contactTitle: "هل لديك منتج يحتاج واجهة أمامية أكثر حدة؟",
    contactBody: "أخبرني بما تعمل عليه. أرحب بالتعاونات المختارة، وقيادة الواجهات الأمامية، والمنتجات الطموحة التي تقدر جودة التنفيذ.",
    startConversation: "ابدأ محادثة",
    downloadCv: "تحميل السيرة الذاتية",
    footerNote: "صُمم ونُفذ بعناية.",
  },
} as const;

function SectionKicker({ children }: { children: React.ReactNode }) {
  return <span className="section-kicker">{children}</span>;
}

function Home() {
  const [lang, setLang] = useState<Lang>("ar");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[lang];
  const isArabic = lang === "ar";

  const switchLanguage = () => setLang(isArabic ? "en" : "ar");
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main dir={isArabic ? "rtl" : "ltr"} className="portfolio-shell">
      <nav className="site-nav" aria-label="Primary navigation">
        <button className="brand-mark" onClick={() => scrollTo("top")} aria-label="Back to top">
          <span>AA</span><i>/</i>
        </button>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {t.nav.map((item, index) => (
            <button key={item} onClick={() => scrollTo(["about", "work", "experience", "contact"][index])}>
              {item}
            </button>
          ))}
        </div>
        <div className="nav-actions">
          <button className="language-toggle" onClick={switchLanguage} aria-label="Switch language">
            <span className={isArabic ? "active" : ""}>ع</span><span className="language-line" /><span className={!isArabic ? "active" : ""}>EN</span>
          </button>
          <a className="nav-cta" href={cvUrl} download>
            {t.downloadCv}<Download size={15} strokeWidth={1.8} />
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      <section id="top" className="hero-section">
        <div className="hero-image" style={{ backgroundImage: `linear-gradient(90deg, rgba(15,16,18,.98) 0%, rgba(15,16,18,.91) 39%, rgba(15,16,18,.12) 100%), url(${heroImage})` }} />
        <div className="hero-grid-lines" />
        <div className="hero-content page-width">
          <div className="hero-copy">
            <div className="eyebrow-row"><span className="status-dot" /> <span>{t.available}</span></div>
            <h1>{t.heroTitle}</h1>
            <p className="hero-intro">{t.heroIntro}</p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => scrollTo("work")}>{t.viewWork}<ArrowUpRight size={17} /></button>
              <a className="text-link" href="mailto:arwaahmedhaider@gmail.com">{t.startConversation}<span>↗</span></a>
            </div>
          </div>
          <div className="hero-aside">
            <div className="orbit-card">
              <div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" />
              <div className="orbit-core"><Code2 size={25} strokeWidth={1.4} /><span>ng</span></div>
              <span className="orbit-label orbit-label-top">{isArabic ? "واجهات" : "FRONTEND"}</span>
              <span className="orbit-label orbit-label-bottom">{isArabic ? "الأنظمة" : "SYSTEMS"}</span>
            </div>
            <div className="hero-aside-note"><span>01</span><p>{isArabic ? "أبني واجهات تُشعر الناس بالثقة." : "I build interfaces that make people feel confident."}</p></div>
          </div>
        </div>
        <div className="hero-bottom page-width">
          <span>{isArabic ? "مرري للاستكشاف" : "SCROLL TO EXPLORE"}</span><ArrowDown size={17} />
          <div className="hero-meta"><span>YEMEN / 15°21'N</span><span>2026 ©</span></div>
        </div>
      </section>

      <section id="about" className="about-section page-width section-pad">
        <div className="section-topline"><SectionKicker>01 / {t.nav[0]}</SectionKicker><span className="topline-rule" /></div>
        <div className="about-layout">
          <div className="about-title-block"><h2>{t.aboutMe}</h2></div>
          <div className="about-body-block"><p className="large-copy">{t.aboutBody}</p><div className="location-line"><MapPin size={15} /> {t.location}</div></div>
        </div>
        <div className="principles-grid">
          {t.principles.map(([number, title, body]) => <article key={number} className="principle-card"><span className="principle-number">{number}</span><h3>{title}</h3><p>{body}</p><span className="card-arrow">↗</span></article>)}
        </div>
      </section>

      <section id="work" className="work-section section-pad">
        <div className="page-width">
          <div className="section-topline"><SectionKicker>02 / {t.nav[1]}</SectionKicker><span className="topline-rule" /><span className="section-index">03 CASE STUDIES</span></div>
          <div className="section-heading-row"><div><h2>{t.selectedWork}</h2><p>{t.workIntro}</p></div><Layers3 className="section-heading-icon" size={44} strokeWidth={1} /></div>
          <div className="projects-grid">
            {t.projects.map((project) => <article key={project.number} className={`project-card ${project.accent}`}>
              <div className="project-card-top"><span>{project.number}</span><span>{project.type}</span></div>
              <div className="project-visual"><div className="visual-window"><div className="window-bar"><i /><i /><i /><span>{project.number === "01" ? "secure-workspace" : project.number === "02" ? "merchant-hub" : "live-board"}</span></div><div className="visual-content"><div className="visual-sidebar"><b /><b /><b /><b /></div><div className="visual-main"><span className="visual-line wide" /><span className="visual-line" /><div className="visual-blocks"><i /><i /><i /></div><div className="visual-table"><b /><b /><b /><b /></div></div></div></div><span className="visual-corner">{project.number === "01" ? "RBAC" : project.number === "02" ? "B2B" : "REAL-TIME"}</span></div>
              <div className="project-card-bottom"><h3>{project.title}</h3><p>{project.desc}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a href="#contact" onClick={(event) => { event.preventDefault(); scrollTo("contact"); }} className="project-link">{isArabic ? "ناقشي المشروع" : "Discuss project"}<ArrowUpRight size={17} /></a></div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section section-pad page-width">
        <div className="section-topline"><SectionKicker>03 / {t.nav[2]}</SectionKicker><span className="topline-rule" /></div>
        <div className="section-heading-row experience-heading"><div><h2>{t.experience}</h2><p>{t.experienceIntro}</p></div><BriefcaseBusiness className="section-heading-icon" size={44} strokeWidth={1} /></div>
        <div className="experience-layout">
          <div className="experience-list">{t.roles.map((role, index) => <article key={role.company} className="role-row"><div className="role-marker"><span>{String(index + 1).padStart(2, "0")}</span><i /></div><div className="role-date">{role.date}</div><div className="role-main"><h3>{role.role}</h3><div className="role-company">{role.company}</div><div className="role-place"><MapPin size={13} />{role.place}</div><ul>{role.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></div></article>)}</div>
          <aside className="education-card"><SectionKicker>{t.education}</SectionKicker><div className="education-icon"><Sparkles size={20} /></div><h3>{t.educationTitle}</h3><p>{t.educationSchool}</p><span>{t.educationDate}</span><div className="education-divider" /><SectionKicker>{t.softSkills}</SectionKicker><div className="soft-skills-list">{t.softSkillsList.map(skill => <span key={skill}><Check size={13} />{skill}</span>)}</div></aside>
        </div>
      </section>

      <section className="toolkit-section section-pad">
        <div className="page-width">
          <div className="section-topline"><SectionKicker>04 / {t.toolkit}</SectionKicker><span className="topline-rule" /></div>
          <div className="toolkit-layout"><div><h2>{t.toolkit}</h2><p>{t.toolkitIntro}</p></div><div className="skills-cloud">{t.skills.map((skill, index) => <span key={skill} className={index % 5 === 0 ? "highlight" : ""}>{skill}</span>)}</div></div>
          <div className="toolkit-footer"><span><Terminal size={16} /> ANGULAR · TYPESCRIPT · PRODUCT THINKING</span><span>16 CORE TOOLS</span></div>
        </div>
      </section>

      <section id="contact" className="contact-section section-pad page-width">
        <div className="contact-card"><div className="contact-glow" /><div className="contact-content"><SectionKicker>{t.contactEyebrow}</SectionKicker><h2>{t.contactTitle}</h2><p>{t.contactBody}</p><a className="button button-light" href="mailto:arwaahmedhaider@gmail.com">{t.startConversation}<ArrowUpRight size={17} /></a></div><div className="contact-mark"><div className="contact-mark-circle">AA<span>/</span></div><span>{isArabic ? "متاحة الآن" : "OPEN TO WORK"}</span></div></div>
      </section>

      <footer className="site-footer page-width"><div className="footer-brand"><span>AA</span><i>/</i><p>{t.footerNote}</p></div><div className="footer-links"><a href="mailto:arwaahmedhaider@gmail.com"><Mail size={15} /> Email</a><a href="https://www.linkedin.com/in/arwa-ahmed-8b779b230" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a><a href="https://github.com/eng-arwa" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a><a href="tel:+967771297549"><Phone size={15} /> +967 771 297 549</a></div><span className="footer-year">2026 / AA</span></footer>
    </main>
  );
}

export default Home;
