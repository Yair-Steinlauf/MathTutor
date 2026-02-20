// ====================================================
// i18n.js — Internationalization Module
// Handles Hebrew ↔ English language switching
// ====================================================

const translations = {
    he: {
        // Navbar
        "nav.about": "אודות",
        "nav.services": "שירותים",
        "nav.pricing": "מחירון",
        "nav.booking": "קביעת שיעור",
        "nav.contact": "צור קשר",
        "nav.lang_toggle": "English",

        // Hero
        "hero.title": "שיעורים פרטיים במתמטיקה",
        "hero.subtitle": "הכנה מקצועית לבגרות במתמטיקה — 3, 4 ו-5 יחידות",
        "hero.cta": "קבעו שיעור עכשיו",
        "hero.secondary_cta": "גלו עוד",

        // About
        "about.section_label": "אודות",
        "about.title": "למה ללמוד איתי?",
        "about.p1": "היי, אני יאיר שטיינלוף, מתגורר ברמת בית שמש א'. אני סטודנט שנה ג' למדעי המחשב ומורה פרטי למתמטיקה. המטרה שלי היא לגרום לכל תלמיד להרגיש ביטחון מלא לפני הבחינה.",
        "about.p2": "אני מאמין בהתאמה אישית — כל תלמיד מקבל תוכנית לימודים מותאמת, בקצב שנוח לו, עם דגש על הבנה עמוקה של החומר ולא רק שינון.",
        "about.p3": "שיעורים זמינים אונליין, אצלי בבית, או אצלכם בבית — הכל לנוחיותכם.",
        "about.stat3_number": "3",
        "about.stat3_label": "שנת לימוד (מדעי המחשב)",

        // Services
        "services.section_label": "שירותים",
        "services.title": "איך נלמד?",
        "services.online_title": "שיעור אונליין",
        "services.online_desc": "שיעור נוח מהבית דרך Google Meet. כל מה שצריך זה מחשב וחיבור לאינטרנט. שיתוף מסך, לוח דיגיטלי ותרגול בזמן אמת.",
        "services.online_badge": "הכי פופולרי",
        "services.teacher_home_title": "בבית המורה",
        "services.teacher_home_desc": "סביבת לימוד שקטה ומסודרת, עם כל חומרי הלימוד, לוח ואווירה שמאפשרת ריכוז מקסימלי.",
        "services.teacher_home_badge": "מומלץ",
        "services.student_home_title": "בבית התלמיד",
        "services.student_home_desc": "אני מגיע אליכם הביתה — לנוחיותכם המלאה. אידיאלי לתלמידים שמעדיפים ללמוד בסביבה המוכרת להם.",
        "services.student_home_badge": "תוספת תשלום",

        // Pricing (Unified)
        "pricing.section_label": "מחירון",
        "pricing.title": "מחירים",
        "pricing.unified_price": "₪150",
        "pricing.per_lesson": "לשיעור אקדמי (45 דקות)",
        "pricing.unified_title": "גמישות מלאה במיקום הלימוד",
        "pricing.opt_online_title": "שיעור אונליין",
        "pricing.opt_online_desc": "דרך Google Meet עם לוח דיגיטלי מובנה",
        "pricing.opt_teacher_title": "בבית המורה",
        "pricing.opt_teacher_desc": "סביבת למידה שקטה ברמת בית שמש א'",
        "pricing.opt_student_title": "בבית התלמיד (בתוספת תשלום)",
        "pricing.opt_student_desc": "הגעה אליכם הביתה בתוספת דמי נסיעה לפי מרחק",
        "pricing.cta": "לקביעת שיעור",

        // Booking
        "booking.section_label": "קביעת שיעור",
        "booking.title": "קבעו שיעור",
        "booking.subtitle": "בחרו תאריך ושעה שנוחים לכם דרך Calendly",

        // Contact
        "contact.section_label": "צור קשר",
        "contact.title": "דברו איתי",
        "contact.subtitle": "יש שאלות? אני כאן בשבילכם",
        "contact.whatsapp_label": "וואטסאפ",
        "contact.whatsapp_text": "שלחו הודעה",

        // Footer
        "footer.rights": "© 2026 כל הזכויות שמורות.",
        "footer.made_with": "נבנה עם ❤️ לתלמידים שרוצים להצליח",
    },

    en: {
        // Navbar
        "nav.about": "About",
        "nav.services": "Services",
        "nav.pricing": "Pricing",
        "nav.booking": "Book a Lesson",
        "nav.contact": "Contact",
        "nav.lang_toggle": "עברית",

        // Hero
        "hero.title": "Private Math Tutoring",
        "hero.subtitle": "Professional preparation for the Israeli Bagrut exam — 3, 4 & 5 units",
        "hero.cta": "Book a Lesson Now",
        "hero.secondary_cta": "Learn More",

        // About
        "about.section_label": "About",
        "about.title": "Why Learn With Me?",
        "about.p1": "Hi, I'm Yair Steinlauf, living in Ramat Beit Shemesh A. I am a 3rd-year Computer Science student and a private math tutor. My goal is to make every student feel fully confident before the exam.",
        "about.p2": "I believe in personalized learning — each student gets a tailored study plan, at their own pace, emphasizing deep understanding rather than memorization.",
        "about.p3": "Lessons are available online, at my home, or at your home — whatever works best for you.",
        "about.stat3_number": "3rd",
        "about.stat3_label": "Year CS Student",

        // Services
        "services.section_label": "Services",
        "services.title": "How We Learn",
        "services.online_title": "Online Lesson",
        "services.online_desc": "Comfortable lesson from home via Google Meet. All you need is a computer and internet connection. Screen sharing, digital whiteboard, and real-time practice.",
        "services.online_badge": "Most Popular",
        "services.teacher_home_title": "At Teacher's Home",
        "services.teacher_home_desc": "A quiet, organized learning environment with all study materials, whiteboard, and an atmosphere that enables maximum focus.",
        "services.teacher_home_badge": "Recommended",
        "services.student_home_title": "At Student's Home",
        "services.student_home_desc": "I come to you — for your complete convenience. Ideal for students who prefer to learn in their familiar environment.",
        "services.student_home_badge": "Additional Fee",

        // Pricing (Unified)
        "pricing.section_label": "Pricing",
        "pricing.title": "Pricing",
        "pricing.unified_price": "₪150",
        "pricing.per_lesson": "per academic hour (45 min)",
        "pricing.unified_title": "Complete Flexibility in Location",
        "pricing.opt_online_title": "Online Lesson",
        "pricing.opt_online_desc": "Via Google Meet with a built-in digital whiteboard",
        "pricing.opt_teacher_title": "At Teacher's Home",
        "pricing.opt_teacher_desc": "Quiet learning environment in Ramat Beit Shemesh A",
        "pricing.opt_student_title": "At Student's Home (Additional Fee)",
        "pricing.opt_student_desc": "I come to you, with an added travel fee based on distance",
        "pricing.cta": "Book a Lesson",

        // Booking
        "booking.section_label": "Book a Lesson",
        "booking.title": "Book a Lesson",
        "booking.subtitle": "Choose a date and time that works for you via Calendly",

        // Contact
        "contact.section_label": "Contact",
        "contact.title": "Get in Touch",
        "contact.subtitle": "Have questions? I'm here for you",
        "contact.whatsapp_label": "WhatsApp",
        "contact.whatsapp_text": "Send a Message",

        // Footer
        "footer.rights": "© 2026 All rights reserved.",
        "footer.made_with": "Built with ❤️ for students who want to succeed",
    },
};

// ---- State ----
let currentLang = localStorage.getItem("lang") || "he";

// ---- Core Functions ----

/**
 * Apply all translations for the given language.
 */
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);

    const dict = translations[lang];
    if (!dict) return;

    // Update all elements with data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    // Update placeholder attributes
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (dict[key]) {
            el.setAttribute("placeholder", dict[key]);
        }
    });

    // Set dir and lang on <html>
    const htmlEl = document.documentElement;
    if (lang === "he") {
        htmlEl.setAttribute("dir", "rtl");
        htmlEl.setAttribute("lang", "he");
        document.body.style.fontFamily = "'Heebo', sans-serif";
    } else {
        htmlEl.setAttribute("dir", "ltr");
        htmlEl.setAttribute("lang", "en");
        document.body.style.fontFamily = "'Inter', sans-serif";
    }

    // Update Bootstrap navbar alignment
    const navbar = document.querySelector(".navbar-collapse");
    if (navbar) {
        navbar.classList.toggle("me-auto", lang === "en");
        navbar.classList.toggle("ms-auto", lang === "he");
    }
}

/**
 * Toggle between Hebrew and English.
 */
function toggleLanguage() {
    const newLang = currentLang === "he" ? "en" : "he";
    setLanguage(newLang);
}

/**
 * Initialise language on page load.
 */
function initI18n() {
    setLanguage(currentLang);

    // Bind toggle button(s)
    document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            toggleLanguage();
        });
    });
}

// Auto-init when DOM is ready
document.addEventListener("DOMContentLoaded", initI18n);
