const translations = {
    az: {
        siteTitle: "Müəllim üçün Hədiyyə!",
        navAbout: "Haqqımızda",
        navServices: "Xidmətlər",
        navContact: "Əlaqə",
        aboutTitle: "Haqqımızda",
        aboutText: "Bu sayt müəllimlər üçün hədiyyələrə həsr olunub.",
        servicesTitle: "Xidmətlərimiz",
        service1Title: "Fərdi Hədiyyələr",
        service1Text: "Müəllimlər üçün unikal hədiyyələr hazırlayın.",
        service2Title: "Tez Çatdırılma",
        service2Text: "İstənilən bölgəyə operativ çatdırılma.",
        service3Title: "Məsləhət Xidməti",
        service3Text: "Ən yaxşı hədiyyəni seçməyiniz üçün kömək edirik.",
        contactTitle: "Əlaqə",
        contactSubmit: "Göndər",
        footerText: "Bütün hüquqlar qorunur."
    },
    ru: {
        siteTitle: "Подарок для Учителя!",
        navAbout: "О Нас",
        navServices: "Услуги",
        navContact: "Контакты",
        aboutTitle: "О Нас",
        aboutText: "Это демо-сайт, посвященный подаркам для учителей.",
        servicesTitle: "Наши Услуги",
        service1Title: "Персонализированные Подарки",
        service1Text: "Создавайте уникальные подарки для учителей.",
        service2Title: "Быстрая Доставка",
        service2Text: "Оперативная доставка в любой регион.",
        service3Title: "Консультации",
        service3Text: "Мы поможем вам выбрать лучший подарок.",
        contactTitle: "Контакты",
        contactSubmit: "Отправить",
        footerText: "Все права защищены."
    },
    en: {
        siteTitle: "Gift for Teacher!",
        navAbout: "About Us",
        navServices: "Services",
        navContact: "Contact",
        aboutTitle: "About Us",
        aboutText: "This is a demo site dedicated to teacher gifts.",
        servicesTitle: "Our Services",
        service1Title: "Personalized Gifts",
        service1Text: "Create unique gifts for teachers.",
        service2Title: "Fast Delivery",
        service2Text: "Quick delivery to any region.",
        service3Title: "Consultations",
        service3Text: "We help you choose the best gift.",
        contactTitle: "Contact",
        contactSubmit: "Send",
        footerText: "All rights reserved."
    }
};

document.querySelectorAll(".language-switcher button").forEach((button) => {
    button.addEventListener("click", () => {
        const lang = button.dataset.lang;
        const t = translations[lang];

        document.getElementById("site-title").textContent = t.siteTitle;
        document.getElementById("nav-about").textContent = t.navAbout;
        document.getElementById("nav-services").textContent = t.navServices;
        document.getElementById("nav-contact").textContent = t.navContact;
        document.getElementById("about-title").textContent = t.aboutTitle;
        document.getElementById("about-text").textContent = t.aboutText;
        document.getElementById("services-title").textContent = t.servicesTitle;
        document.getElementById("service1-title").textContent = t.service1Title;
        document.getElementById("service1-text").textContent = t.service1Text;
        document.getElementById("service2-title").textContent = t.service2Title;
        document.getElementById("service2-text").textContent = t.service2Text;
        document.getElementById("service3-title").textContent = t.service3Title;
        document.getElementById("service3-text").textContent = t.service3Text;
        document.getElementById("contact-title").textContent = t.contactTitle;
        document.getElementById("contact-submit").textContent = t.contactSubmit;
        document.getElementById("footer-text").textContent = t.footerText;
    });
});