const translations = {
    az: {
        siteTitle: "Müəllim üçün Hədiyyə!",
        heroTitle: "Ən yaxşı müəllim hədiyyələri burada!",
        heroText: "Sevinci paylaşmaq üçün unikal hədiyyələr yaradin.",
        navAbout: "Haqqımızda",
        navServices: "Xidmətlər",
        navContact: "Əlaqə",
        aboutTitle: "Haqqımızda",
        aboutText: "Sevgi və diqqətlə hazırlanmış xüsusi hədiyyələr təklif edirik.",
        servicesTitle: "Xidmətlərimiz",
        contactTitle: "Bizimlə Əlaqə",
    },
    ru: { /* mövcud tərcümə */ },
    en: { /* mövcud tərcümə */ },
};

document.querySelectorAll(".language-switcher button").forEach(button => {
    button.addEventListener("click", () => {
        const lang = button.dataset.lang;
        const t = translations[lang];
        document.getElementById("site-title").textContent = t.siteTitle;
        document.getElementById("hero-title").textContent = t.heroTitle;
        // digər elementlər yenilənir...
    });
});