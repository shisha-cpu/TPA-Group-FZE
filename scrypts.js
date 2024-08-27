document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        en: {
            home: "Home",
            about: "About",
            products: "Products",
            advantages: "Advantages",
            contacts: "Contacts",
            home_text: "We have long-term business relationships with leading global manufacturers.",
            about_title: "About Us",
            about_text: `"SpetsMarket" is a company that has been operating for over 10 years in the field of supplying equipment and spare parts for heavy machinery. We successfully cooperate with major Russian factories and constantly update the range for you.`,
            about_brands: "17 partner brands",
            about_experience: "10 years of experience",
            about_cities: "400 cities of delivery",
            products_title: "Our Product Range",
            products_text: "We cooperate with major suppliers and manufacturers of components, so we are confident in the quality of our products.",
            products_parts: "Spare parts for heavy machinery",
            products_components: "Components: pumps, distributors, reducers, and more",
            advantages_title: "Our Advantages",
            advantages_import: "Experience in import substitution",
            advantages_quality: "Own quality control department",
            advantages_support: "Support and service 24/7",
            contacts_title: "Contacts",
            contacts_moscow: "Moscow: 8-982-697-77-76",
            contacts_ekb: "Yekaterinburg: 8-982-670-08-81",
            contacts_nsk: "Novosibirsk: 8-913-017-40-00"
        },
        fr: {
            home: "Accueil",
            about: "À propos",
            products: "Produits",
            advantages: "Avantages",
            contacts: "Contacts",
            home_text: "Nous entretenons des relations commerciales de longue date avec les principaux fabricants mondiaux.",
            about_title: "À propos de nous",
            about_text: `"SpetsMarket" est une entreprise qui opère depuis plus de 10 ans dans le domaine de la fourniture d'équipements et de pièces détachées pour la machinerie lourde. Nous collaborons avec succès avec les grandes usines russes et renouvelons constamment notre gamme pour vous.`,
            about_brands: "17 marques partenaires",
            about_experience: "10 ans d'expérience",
            about_cities: "400 villes livrées",
            products_title: "Notre gamme de produits",
            products_text: "Nous collaborons avec des fournisseurs et fabricants majeurs de composants, nous sommes donc sûrs de la qualité de nos produits.",
            products_parts: "Pièces détachées pour machinerie lourde",
            products_components: "Composants : pompes, distributeurs, réducteurs, et plus encore",
            advantages_title: "Nos avantages",
            advantages_import: "Expérience en substitution d'importation",
            advantages_quality: "Propre département de contrôle qualité",
            advantages_support: "Support et service 24/7",
            contacts_title: "Contacts",
            contacts_moscow: "Moscou : 8-982-697-77-76",
            contacts_ekb: "Ekaterinbourg : 8-982-670-08-81",
            contacts_nsk: "Novossibirsk : 8-913-017-40-00"
        },
        de: {
            home: "Startseite",
            about: "Über uns",
            products: "Produkte",
            advantages: "Vorteile",
            contacts: "Kontakte",
            home_text: "Wir pflegen langjährige Geschäftsbeziehungen mit führenden globalen Herstellern.",
            about_title: "Über uns",
            about_text: `"SpetsMarket" ist ein Unternehmen, das seit über 10 Jahren im Bereich der Lieferung von Ausrüstungen und Ersatzteilen für schwere Maschinen tätig ist. Wir arbeiten erfolgreich mit großen russischen Fabriken zusammen und aktualisieren ständig das Sortiment für Sie.`,
            about_brands: "17 Partnermarken",
            about_experience: "10 Jahre Erfahrung",
            about_cities: "400 Städte beliefert",
            products_title: "Unser Produktsortiment",
            products_text: "Wir arbeiten mit führenden Lieferanten und Herstellern von Komponenten zusammen und sind daher von der Qualität unserer Produkte überzeugt.",
            products_parts: "Ersatzteile für schwere Maschinen",
            products_components: "Komponenten: Pumpen, Verteiler, Getriebe und mehr",
            advantages_title: "Unsere Vorteile",
            advantages_import: "Erfahrung im Importersatz",
            advantages_quality: "Eigenes Qualitätskontrollteam",
            advantages_support: "Support und Service 24/7",
            contacts_title: "Kontakte",
            contacts_moscow: "Moskau: 8-982-697-77-76",
            contacts_ekb: "Jekaterinburg: 8-982-670-08-81",
            contacts_nsk: "Nowosibirsk: 8-913-017-40-00"
        },
        ru: {
            home: "Главная",
            about: "О компании",
            products: "Продукция",
            advantages: "Преимущества",
            contacts: "Контакты",
            home_text: "Нас связывают многолетние деловые отношения с ведущими мировыми производителями.",
            about_title: "О компании",
            about_text: `«СпецМаркет» - компания, работающая более 10 лет в области поставок оборудования и запчастей для спецтехники. Мы успешно сотрудничаем с крупными заводами России и постоянно обновляем ассортимент для вас.`,
            about_brands: "17 брендов-партнеров",
            about_experience: "10 лет опыта",
            about_cities: "400 городов поставок",
            products_title: "Ассортимент нашего магазина",
            products_text: "Мы сотрудничаем с крупными поставщиками и производителями комплектующих, поэтому уверены в качестве своей продукции.",
            products_parts: "Запчасти для спецтехники",
            products_components: "Комплектующие: насосы, распределители, редуктора и др.",
            advantages_title: "Наши преимущества",
            advantages_import: "Опыт импортозамещения",
            advantages_quality: "Свой отдел тех. контроля",
            advantages_support: "Поддержка и сервис 24/7",
            contacts_title: "Контакты",
            contacts_moscow: "Москва: 8-982-697-77-76",
            contacts_ekb: "Екатеринбург: 8-982-670-08-81",
            contacts_nsk: "Новосибирск: 8-913-017-40-00"
        },
        ar: {
            home: "الرئيسية",
            about: "من نحن",
            products: "منتجاتنا",
            advantages: "مميزاتنا",
            contacts: "اتصل بنا",
            home_text: "لدينا علاقات تجارية طويلة الأمد مع الشركات المصنعة العالمية الرائدة.",
            about_title: "من نحن",
            about_text: `شركة "SpetsMarket" تعمل منذ أكثر من 10 سنوات في مجال توريد المعدات وقطع الغيار للآلات الثقيلة. نحن نتعاون بنجاح مع المصانع الروسية الكبرى ونقوم بتحديث النطاق باستمرار من أجلك.`,
            about_brands: "17 علامة تجارية شريكة",
            about_experience: "10 سنوات من الخبرة",
            about_cities: "400 مدينة يتم التوصيل إليها",
            products_title: "مجموعة منتجاتنا",
            products_text: "نتعاون مع الموردين والمصنعين الرئيسيين للمكونات، لذلك نحن واثقون من جودة منتجاتنا.",
            products_parts: "قطع غيار للآلات الثقيلة",
            products_components: "مكونات: مضخات، موزعات، مخفضات، وأكثر من ذلك",
            advantages_title: "مميزاتنا",
            advantages_import: "الخبرة في الاستبدال الاستيرادي",
            advantages_quality: "قسم خاص للتحكم بالجودة",
            advantages_support: "الدعم والخدمة 24/7",
            contacts_title: "اتصل بنا",
            contacts_moscow: "موسكو: 8-982-697-77-76",
            contacts_ekb: "يكاترينبورغ: 8-982-670-08-81",
            contacts_nsk: "نوفوسيبيرسك: 8-913-017-40-00"
        }
    };

    document.getElementById('language-select').addEventListener('change', function() {
        const selectedLanguage = this.value;
        const elements = document.querySelectorAll('[data-lang]');

        elements.forEach(element => {
            const key = element.getAttribute('data-lang');
            element.textContent = translations[selectedLanguage][key];
        });
    });

    // Устанавливаем начальный язык как английский
    document.getElementById('language-select').value = 'en';
    document.getElementById('language-select').dispatchEvent(new Event('change'));
});
