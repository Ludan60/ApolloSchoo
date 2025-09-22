// ترجمة جميع النصوص في الموقع
const translations = {
    ar: {
        // التنقل
        "home": "الرئيسية",
        "features": "المميزات",
        "curricula": "المناهج",
        "whyApollo": "لماذا أبولو؟",
        "community": "مجتمعنا",
        "contact": "تواصل معنا",
        "watchSamples": "شاهد نماذج",
        "freeTrial": "تجربة مجانية",
        "registerNow": "سجل الآن",
        "registerNowAria": "سجل الآن",
        
        // الهيرو
        "heroTitle": "مستقبل أولادك <span class='highlight-text'> ما لازم يضيع بعد الحرب! </span>",
        "heroText": "آلاف الأسر السودانية نزحوا بعد الصراع… ولسه قلقانين على تعليم أولادهم. مع مدرسة <span class='text-warning fw-bold'>أبولو العالمية</span> تقدري تضمني لأولادك تعليم عالي الجودة من بيتك بمنهج عالمي ومعتمد.",
        
        // المميزات
        "featuresTitle": "لماذا نحن الأفضل؟",
        "featuresSubtitle": "اكتشف مميزاتنا الفريدة",
        "certifiedTeachers": {
            "title": "معلمون معتمدون",
            "description": "فريق من المعلمين المؤهلين دولياً"
        },
        "interactivePlatform": {
            "title": "منصة تفاعلية",
            "description": "تقنيات حديثة تجعل التعلم ممتعاً"
        },
        "performanceTracking": {
            "title": "متابعة الأداء",
            "description": "تقارير دورية لمتابعة التقدم"
        },
        "technicalSupport": {
            "title": "دعم فني",
            "description": "متاح على مدار الساعة"
        },
        "enrichmentActivities": {
            "title": "أنشطة إثرائية",
            "description": "لتنمية مهارات طفلك"
        },
        
        // المجتمع
        "communityTitle": "انضم إلى مجتمعنا",
        "communitySubtitle": "مجموعات مجانية للتعلم والتفاعل",
        "apolloFriends": {
            "title": "نادي أصدقاء أبولو",
            "description": "مجموعة مجانية لتعلم الإنجليزية والتفاعل مع الطلاب",
            "button": "انضم الآن"
        },
        "apolloCode": {
            "title": "أبولو كود",
            "description": "مجموعة متخصصة في تعليم البرمجة للأطفال",
            "button": "انضم الآن"
        },
        "socialNutritionist": {
            "title": "الاخصائية الاجتماعية واخصائية التغذية",
            "description": "نصائح وإرشادات غذائية لأطفال أصحاء",
            "button": "انضم الآن"
        },
        
        // المناهج
        "curriculaTitle": "مناهجنا التعليمية",
        "curriculaSubtitle": "نقدم لكم أفضل المناهج التعليمية",
        "curriculumCambridge": {
            "title": "منهج كامبردج",
            "description": "يفتح لأطفالكم أبواب التميز الأكاديمي العالمي"
        },
        "curriculumJollyPhonics": {
            "title": "جولي فونيكس",
            "description": "لتعلّم القراءة والكتابة بالإنجليزية بخطوات ممتعة وسهلة"
        },
        "curriculumNoorAlBayan": {
            "title": "طريقة نور البيان",
            "description": "لحفظ وتجويد القرآن بطريقة شيقة وقريبة من قلوب الأطفال"
        },
        "curriculumSudanese": {
            "title": "المنهج السوداني",
            "description": "حفاظاً على هويتهم وانتمائهم لجذورهم"
        },
        
        // لماذا أبولو
        "whyApolloTitle": "لماذا نختار أبولو؟",
        "whyApolloSubtitle": "أسباب تجعل أبولو الخيار الأمثل لأبنائكم",
        "whyApolloCard1": {
            "title": "معلمون مؤهلون",
            "description": "فريق من المعلمين المتخصصين ذوي الخبرة في التعليم عن بعد"
        },
        "whyApolloCard2": {
            "title": "منهج متكامل",
            "title2": "بين التعليم العالمي والهوية السودانية",
            "description": "نوازن بين المناهج العالمية المعتمدة والهوية العربية والإسلامية"
        },
        "whyApolloCard3": {
            "title": "تعليم تفاعلي",
            "description": "حصص مباشرة وأنشطة تفاعلية لجذب انتباه الطلاب"
        },
        "whyApolloCard4": {
            "title": "متابعة مستمرة",
            "description": "تقارير دورية لمتابعة تقدم الطالب"
        },
        "whyApolloCard5": {
            "title": "مرونة في المواعيد",
            "description": "تناسب ظروف العائلات في مختلف المناطق الزمنية"
        },
        "whyApolloCard6": {
            "title": "دعم فني متكامل",
            "description": "فريق دعم فني على مدار الساعة لحل أي مشكلات تقنية"
        },
        "whyApolloCard7": {
            "title": "أنشطة لاصفية",
            "description": "ورش عمل وأنشطة ترفيهية وتعليمية"
        },
        "whyApolloCard8": {
            "title": "أسعار تنافسية",
            "description": "باقات دراسية تناسب مختلف الإمكانيات المادية"
        },
        
        // التسجيل
        "registrationTitle": "سجل الآن",
        "registrationSubtitle": "ابدأ رحلة التعلم مع أبولو",
        "studentName": "اسم الطالب الكامل *",
        "countryLabel": "الدولة *",
        "chooseCountry": "اختر الدولة",
        "grade": "الصف الدراسي *",
        "chooseGrade": "اختر الصف",
        "parentName": "اسم ولي الأمر",
        "email": "البريد الإلكتروني",
        "whatsapp": "رقم الواتساب",
        "submit": "إرسال",
        "studentNameError": "يرجى إدخال اسم الطالب",
        "countryError": "يرجى اختيار الدولة",
        "gradeError": "يرجى اختيار الصف",
        "emailError": "يرجى إدخال بريد إلكتروني صحيح",
        
        // الصفوف الدراسية
        "classesHeroTitle": "تجربة مجانية - نماذج من الحصص",
        "classesHeroSubtitle": "شاهد نماذج من حصصنا التفاعلية مصنفة حسب الصفوف الدراسية",
        "classesAll": "الكل",
        "classesCTATitle": "هل ترغب في المزيد من المحتوى التعليمي؟",
        "classesCTASubtitle": "انضم إلى مدرسة أبولو واحصل على وصول كامل لجميع دروسنا ودوراتنا التعليمية",
        "classesRegisterNow": "سجل الآن",
        "classesFilesTitle": "ملفات مهمة للامهات",
        "classesFilesSubtitle": "يمكنك تحميل الملفات المهمة والمفيدة للتعامل مع أطفالك",
        "classesFile1Title": "خطوات ليوم منظم للامهات",
        "classesDownloadFile": "تحميل الملف",
        
        // الفوتر
        "footerAbout": "مدرسة أبولو للتعليم الإلكتروني تقدم تجربة تعليمية متكاملة تجمع بين الجودة والمرونة لضمان مستقبل أفضل لأطفالنا",
        "followFacebook": "تابعنا على فيسبوك",
        "quickLinks": "روابط سريعة",
        "platform": "المنصة التعليمية",
        "platformDescription": "انضم إلى منصتنا التعليمية التفاعلية واحصل على تجربة تعلم فريدة",
        "viewPlatform": "عرض المنصة",
        "copyright": "مدرسة أبولو جميع الحقوق محفوظة",
        "apollo": "أبولو",
        "contactUs": "اتصل بنا",
        
        // Comparison Table
        "comparison": {
            "criterion": "المعيار",
            "traditional": "التعليم التقليدي",
            "apollo": "أبولو للتعليم الإلكتروني",
            "timeFlexibility": "مرونة الوقت",
            "fixedTimes": "مواعيد محددة",
            "fullFlexibility": "مرونة كاملة",
            "performanceTracking": "متابعة الأداء",
            "quarterlyReports": "تقارير فصلية",
            "dailyFollowUp": "متابعة يومية",
            "cost": "التكلفة",
            "highCost": "تكلفة عالية",
            "reasonableCost": "تكلفة معقولة",
            "mediaDiversity": "تنوع الوسائط",
            "limited": "محدود",
            "diverseInteractive": "متنوع وتفاعلي",
            "individualSupport": "الدعم الفردي",
            "limitedSupport": "محدود",
            "personalSupport": "دعم شخصي"
        },
        
        // Country names
        "country": {
            "egypt": "🇪🇬 مصر",
            "sudan": "🇸🇩 السودان",
            "saudi": "🇸🇦 السعودية",
            "uae": "🇦🇪 الإمارات",
            "qatar": "🇶🇦 قطر",
            "kuwait": "🇰🇼 الكويت"
        },
        
    },
    en: {
        // Navigation
        "home": "Home",
        "features": "Features",
        "curricula": "Curricula",
        "whyApollo": "Why Apollo?",
        "community": "Community",
        "contact": "Contact",
        "watchSamples": "Watch Samples",
        "freeTrial": "Free Trial",
        "registerNow": "Register Now",
        "registerNowAria": "Register Now",
        
        // Hero
        "heroTitle": "Your children's future<span class='highlight-text'> should not be lost because of the war! </span>",
        "heroText": "Thousands of Sudanese families have been displaced by the conflict and remain concerned about their children's education. With <span class='text-warning fw-bold'>Apollo International School</span>, you can provide your children with high-quality education from home through an accredited international curriculum.",
        
        // Features
        "featuresTitle": "Why Are We The Best?",
        "featuresSubtitle": "Discover our unique features",
        "certifiedTeachers": {
            "title": "Certified Teachers",
            "description": "A team of internationally qualified teachers"
        },
        "interactivePlatform": {
            "title": "Interactive Platform",
            "description": "Modern technologies make learning fun"
        },
        "performanceTracking": {
            "title": "Performance Tracking",
            "description": "Periodic reports to monitor progress"
        },
        "technicalSupport": {
            "title": "Technical Support",
            "description": "Available 24/7"
        },
        "enrichmentActivities": {
            "title": "Enrichment Activities",
            "description": "To develop your child's skills"
        },
        
        // Community
        "communityTitle": "Join Our Community",
        "communitySubtitle": "Free groups for learning and interaction",
        "apolloFriends": {
            "title": "Apollo Friends Club",
            "description": "A free group for learning English and interacting with students",
            "button": "Join Now"
        },
        "apolloCode": {
            "title": "Apollo Code",
            "description": "A specialized group for teaching programming to children",
            "button": "Join Now"
        },
        "socialNutritionist": {
            "title": "Social Worker & Nutritionist",
            "description": "Nutritional advice and guidance for healthy children",
            "button": "Join Now"
        },
        
        // المناهج
        "curriculaTitle": "Our Curricula",
        "curriculaSubtitle": "We offer the best educational curricula",
        "curriculumCambridge": {
            "title": "Cambridge Curriculum",
            "description": "Opens the doors of academic excellence for your children"
        },
        "curriculumJollyPhonics": {
            "title": "Jolly Phonics",
            "description": "For learning to read and write English in fun and easy steps"
        },
        "curriculumNoorAlBayan": {
            "title": "Noor Al Bayan Method",
            "description": "For memorizing and perfecting the Quran in an engaging way"
        },
        "curriculumSudanese": {
            "title": "Sudanese Curriculum",
            "description": "Preserving their identity and connection to their roots"
        },
        
        // لماذا أبولو
        "whyApolloTitle": "Why Choose Apollo?",
        "whyApolloSubtitle": "Reasons that make Apollo the ideal choice for your children",
        "whyApolloCard1": {
            "title": "Qualified Teachers",
            "description": "A team of specialized teachers with experience in distance education"
        },
        "whyApolloCard2": {
            "title": "Integrated Curriculum",
            "title2": "Between Global Education and Sudanese Identity",
            "description": "We balance between accredited international curricula and Arab-Islamic identity"
        },
        "whyApolloCard3": {
            "title": "Interactive Learning",
            "description": "Live classes and interactive activities to engage students"
        },
        "whyApolloCard4": {
            "title": "Continuous Monitoring",
            "description": "Regular reports to track student progress"
        },
        "whyApolloCard5": {
            "title": "Flexible Schedule",
            "description": "Suitable for families in different time zones"
        },
        "whyApolloCard6": {
            "title": "Comprehensive Technical Support",
            "description": "24/7 technical support team to solve any technical issues"
        },
        "whyApolloCard7": {
            "title": "Extracurricular Activities",
            "description": "Workshops, recreational and educational activities"
        },
        "whyApolloCard8": {
            "title": "Competitive Prices",
            "description": "Study packages to suit different financial capabilities"
        },
        
        // Registration
        "registrationTitle": "Register Now",
        "registrationSubtitle": "Start your learning journey with Apollo",
        "studentName": "Full Student Name *",
        "countryLabel": "Country *",
        "chooseCountry": "Choose Country",
        "grade": "Grade Level *",
        "chooseGrade": "Choose Grade",
        "parentName": "Parent/Guardian Name",
        "email": "Email Address",
        "whatsapp": "WhatsApp Number",
        "submit": "Submit",
        "studentNameError": "Please enter student name",
        "countryError": "Please select a country",
        "gradeError": "Please select a grade",
        "emailError": "Please enter a valid email address",
        
        // Classes Page
        "classesHeroTitle": "Free Trial - Class Samples",
        "classesHeroSubtitle": "Watch samples of our interactive classes categorized by grade levels",
        "classesAll": "All",
        "classesCTATitle": "Do you want more educational content?",
        "classesCTASubtitle": "Join Apollo School and get full access to all our lessons and courses",
        "classesRegisterNow": "Register Now",
        "classesFilesTitle": "Important Files for Mothers",
        "classesFilesSubtitle": "You can download important and useful files to deal with your children",
        "classesFile1Title": "Steps for an Organized Day for Mothers",
        "classesDownloadFile": "Download File",
        
        // Footer
        "footerAbout": "Apollo E-Learning School provides an integrated educational experience that combines quality and flexibility to ensure a better future for our children",
        "followFacebook": "Follow us on Facebook",
        "quickLinks": "Quick Links",
        "platform": "Educational Platform",
        "platformDescription": "Join our interactive educational platform for a unique learning experience",
        "viewPlatform": "View Platform",
        "copyright": "Apollo School. All rights reserved",
        "apollo": "Apollo",
        "contactUs": "Contact Us",
        
        // Comparison Table
        "comparison": {
            "criterion": "Criterion",
            "traditional": "Traditional Education",
            "apollo": "Apollo E-Learning",
            "timeFlexibility": "Time Flexibility",
            "fixedTimes": "Fixed schedules",
            "fullFlexibility": "Full flexibility",
            "performanceTracking": "Performance Tracking",
            "quarterlyReports": "Quarterly reports",
            "dailyFollowUp": "Daily follow-up",
            "cost": "Cost",
            "highCost": "High cost",
            "reasonableCost": "Reasonable cost",
            "mediaDiversity": "Media Diversity",
            "limited": "Limited",
            "diverseInteractive": "Diverse and interactive",
            "individualSupport": "Individual Support",
            "limitedSupport": "Limited",
            "personalSupport": "Personal support"
        },
        
        // Country names
        "country": {
            "egypt": "🇪🇬 Egypt",
            "sudan": "🇸🇩 Sudan",
            "saudi": "🇸🇦 Saudi Arabia",
            "uae": "🇦🇪 UAE",
            "qatar": "🇶🇦 Qatar",
            "kuwait": "🇰🇼 Kuwait"
        },
        
    }
};

// اللغة الافتراضية
let currentLanguage = 'ar';

// وظيفة تبديل اللغة
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // حفظ اللغة المفضلة
    localStorage.setItem('preferredLanguage', lang);
    
    // تحديث النصوص
    updateAllTexts();
    
    // تحديث اتجاه الصفحة
    updatePageDirection();
    
    // تحديث أزرار اللغة النشطة
    updateLanguageButtons();
}

// تحديث جميع النصوص بناءً على اللغة الحالية
function updateAllTexts() {
    // تحديث عناصر التنقل
    updateNavigation();
    
    // تحديث قسم الهيرو
    updateHeroSection();
    
    // تحديث قسم المميزات
    updateFeaturesSection();
    
    // تحديث قسم المجتمع
    updateCommunitySection();
    
    // تحديث قسم المناهج
    updateCurriculaSection();
    
    // تحديث قسم لماذا أبولو
    updateWhyApolloSection();
    
    // تحديث قسم التسجيل
    updateRegistrationSection();
    
    // تحديث الفوتر
    updateFooter();
    
    // تحديث خيارات الدولة
    updateCountrySelect();
    
    // تحديث زر التسجيل الثابت
    updateFixedRegisterButton();
    
    // تحديث صفحة الصفوف الدراسية
    updateClassesSection();
}

// تحديث اتجاه الصفحة (RTL/LTR)
function updatePageDirection() {
    const html = document.documentElement;
    const body = document.body;
    const navbar = document.getElementById('header');
    const navbarBrand = document.querySelector('.navbar-brand');
    
    if (currentLanguage === 'ar') {
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'ar');
        body.classList.remove('ltr-direction');
        body.classList.add('rtl-direction');
        
        // Update navbar direction
        if (navbar) {
            navbar.setAttribute('dir', 'rtl');
        }
        
        // Update logo positioning for RTL
        if (navbarBrand) {
            navbarBrand.classList.add('order-0');
            navbarBrand.classList.remove('order-1');
        }
        
        // Update Bootstrap for RTL
        updateBootstrapRTL(true);
    } else {
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', 'en');
        body.classList.remove('rtl-direction');
        body.classList.add('ltr-direction');
        
        // Update navbar direction
        if (navbar) {
            navbar.setAttribute('dir', 'ltr');
        }
        
        // Update logo positioning for LTR
        if (navbarBrand) {
            navbarBrand.classList.add('order-0');
            navbarBrand.classList.remove('order-1');
        }
        
        // Update Bootstrap for LTR
        updateBootstrapRTL(false);
    }
    
    // Update spacing for icons and text
    updateIconSpacing();
}

// Function to update icon spacing based on direction
function updateIconSpacing() {
    const isRTL = document.documentElement.dir === 'rtl' || 
                 document.documentElement.getAttribute('dir') === 'rtl' ||
                 document.body.classList.contains('rtl-direction');
    
    // Update all buttons with icons, but exclude those that are already being handled by translation functions
    document.querySelectorAll('.btn i[class*="bi-"]').forEach(icon => {
        const parent = icon.parentElement;
        // Skip if this icon is inside a button that will be updated by translation functions
        if (parent.hasAttribute('data-translate') || 
            parent.textContent.includes('Free') || 
            parent.textContent.includes('تجربة') ||
            parent.textContent.includes('شاهد')) {
            return;
        }
        
        if (isRTL) {
            icon.classList.remove('ms-2');
            icon.classList.add('me-2');
        } else {
            icon.classList.remove('me-2');
            icon.classList.add('ms-2');
        }
    });
    
    // Update toast headers
    document.querySelectorAll('.toast-header i[class*="bi-"]').forEach(icon => {
        if (isRTL) {
            icon.classList.remove('ms-2');
            icon.classList.add('me-2');
        } else {
            icon.classList.remove('me-2');
            icon.classList.add('ms-2');
        }
    });
    
    // Hide any checkboxes that might appear in English version
    if (!isRTL) {
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.style.display = 'none';
        });
        
        // Hide any form-check elements in English
        document.querySelectorAll('.form-check-input').forEach(input => {
            input.style.display = 'none';
        });
    }
}

// تحديث Bootstrap RTL/LTR (لاحظ أن هذا يتطلب إعادة تحميل الصفحة للتغييرات الكاملة)
function updateBootstrapRTL(isRTL) {
    // لسوء الحظ، تغيير CSS لـ Bootstrap يتطلب إعادة تحميل الصفحة
    // ولكن يمكننا إضافة بعض التعديلات للتخطيط
    const containers = document.querySelectorAll('.container, .container-fluid');
    containers.forEach(container => {
        if (isRTL) {
            container.style.direction = 'rtl';
            container.style.textAlign = 'right';
        } else {
            container.style.direction = 'ltr';
            container.style.textAlign = 'left';
        }
    });
}

// تحديث أزرار اللغة النشطة
function updateLanguageButtons() {
    const buttons = document.querySelectorAll('[data-lang]');
    buttons.forEach(button => {
        if (button.getAttribute('data-lang') === currentLanguage) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// وظائف التحديث التفصيلية لكل قسم
function updateNavigation() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    if (navLinks.length >= 6) {
        navLinks[0].textContent = translations[currentLanguage].home;
        navLinks[1].textContent = translations[currentLanguage].features;
        navLinks[2].textContent = translations[currentLanguage].curricula;
        navLinks[3].textContent = translations[currentLanguage].whyApollo;
        navLinks[4].textContent = translations[currentLanguage].community;
        navLinks[5].textContent = translations[currentLanguage].contact;
    }
    
    // تحديث أزرار CTA
    const watchButtons = document.querySelectorAll('[href="#"]');
    watchButtons.forEach(button => {
        // Skip buttons that have data-translate attributes as they will be handled by specific functions
        if (button.hasAttribute('data-translate')) {
            return;
        }
        
        if (button.textContent.includes('شاهد') || button.textContent.includes('Watch')) {
            button.innerHTML = `<i class="bi bi-play-circle me-2"></i>${translations[currentLanguage].watchSamples}`;
        } else if (button.textContent.includes('تجربة') || button.textContent.includes('Trial') || button.textContent.includes('Free Trial')) {
            // Use me-2 for both languages to ensure proper spacing between icon and text
            const iconClass = 'me-2';
            button.innerHTML = `<i class="bi bi-play-circle ${iconClass}"></i><span>${translations[currentLanguage].freeTrial}</span>`;
        }
    });

    // تحديث أزرار تجربة مجانية باستخدام data-translate
    const freeTrialButtons = document.querySelectorAll('[data-translate="freeTrial"]');
    freeTrialButtons.forEach(button => {
        // Use me-2 for icon and ms-2 for text in LTR to ensure proper spacing
        const iconClass = 'me-2';
        const textClass = currentLanguage === 'ar' ? '' : ' ms-2';
        button.innerHTML = `<i class="bi bi-play-circle ${iconClass}"></i><span class="text${textClass}">${translations[currentLanguage].freeTrial}</span>`;
    });
}

function updateHeroSection() {
    const heroTitle = document.querySelector('.hero-section h1');
    const heroText = document.getElementById('typing-text');
    
    if (heroTitle) {
        heroTitle.innerHTML = translations[currentLanguage].heroTitle;
    }
    
    if (heroText) {
        heroText.innerHTML = translations[currentLanguage].heroText;
    }
    
    const registerButtons = document.querySelectorAll('.hero-buttons a');
    if (registerButtons[0]) {
        // Use me-2 for icon and ms-2 for text in LTR to ensure proper spacing
        const iconClass = 'me-2';
        const textClass = currentLanguage === 'ar' ? '' : ' ms-2';
        registerButtons[0].innerHTML = `<i class="bi bi-person-plus ${iconClass}"></i><span class="text${textClass}">${translations[currentLanguage].registerNow}</span>`;
    }
}

function updateFeaturesSection() {
    const sectionTitle = document.querySelector('#features h2');
    const sectionSubtitle = document.querySelector('#features .lead');
    
    if (sectionTitle) {
        sectionTitle.textContent = translations[currentLanguage].featuresTitle;
    }
    
    if (sectionSubtitle) {
        sectionSubtitle.textContent = translations[currentLanguage].featuresSubtitle;
    }
    
    // تحديث عناصر المميزات
    const featureCards = document.querySelectorAll('.feature-card');
    if (featureCards.length >= 5) {
        featureCards[0].querySelector('h4').textContent = translations[currentLanguage].certifiedTeachers.title;
        featureCards[0].querySelector('p').textContent = translations[currentLanguage].certifiedTeachers.description;
        
        featureCards[1].querySelector('h4').textContent = translations[currentLanguage].interactivePlatform.title;
        featureCards[1].querySelector('p').textContent = translations[currentLanguage].interactivePlatform.description;
        
        featureCards[2].querySelector('h4').textContent = translations[currentLanguage].performanceTracking.title;
        featureCards[2].querySelector('p').textContent = translations[currentLanguage].performanceTracking.description;
        
        featureCards[3].querySelector('h4').textContent = translations[currentLanguage].technicalSupport.title;
        featureCards[3].querySelector('p').textContent = translations[currentLanguage].technicalSupport.description;
        
        featureCards[4].querySelector('h4').textContent = translations[currentLanguage].enrichmentActivities.title;
        featureCards[4].querySelector('p').textContent = translations[currentLanguage].enrichmentActivities.description;
    }
}

function updateCommunitySection() {
    const sectionTitle = document.querySelector('#groups h2');
    const sectionSubtitle = document.querySelector('#groups .lead');
    
    if (sectionTitle) {
        sectionTitle.textContent = translations[currentLanguage].communityTitle;
    }
    
    if (sectionSubtitle) {
        sectionSubtitle.textContent = translations[currentLanguage].communitySubtitle;
    }
    
    // تحديث بطاقة Apollo Friends فقط (الباقي ليس به data-translate)
    const apolloFriendsCard = document.querySelector('#groups .col-md-4:first-child');
    if (apolloFriendsCard) {
        apolloFriendsCard.querySelector('h3').textContent = translations[currentLanguage].apolloFriends.title;
        apolloFriendsCard.querySelector('p').textContent = translations[currentLanguage].apolloFriends.description;
        apolloFriendsCard.querySelector('a span').textContent = translations[currentLanguage].apolloFriends.button;
    }
    
    const apolloCodeCard = document.querySelector('#groups .col-md-4:nth-child(2)');
    if (apolloCodeCard) {
        apolloCodeCard.querySelector('h3').textContent = translations[currentLanguage].apolloCode.title;
        apolloCodeCard.querySelector('p').textContent = translations[currentLanguage].apolloCode.description;
        apolloCodeCard.querySelector('a span').textContent = translations[currentLanguage].apolloCode.button;
    }
    
    const socialNutritionistCard = document.querySelector('#groups .col-md-4:nth-child(3)');
    if (socialNutritionistCard) {
        socialNutritionistCard.querySelector('h3').textContent = translations[currentLanguage].socialNutritionist.title;
        socialNutritionistCard.querySelector('p').textContent = translations[currentLanguage].socialNutritionist.description;
        socialNutritionistCard.querySelector('a span').textContent = translations[currentLanguage].socialNutritionist.button;
    }
}

function updateCurriculaSection() {
    const sectionTitle = document.querySelector('#curricula h2');
    const sectionSubtitle = document.querySelector('#curricula .lead');
    
    if (sectionTitle) {
        sectionTitle.textContent = translations[currentLanguage].curriculaTitle;
    }
    
    if (sectionSubtitle) {
        sectionSubtitle.textContent = translations[currentLanguage].curriculaSubtitle;
    }
    
    // تحديث عناصر المناهج
    const curriculumCards = document.querySelectorAll('.curriculum-card');
    if (curriculumCards.length >= 4) {
        curriculumCards[0].querySelector('h4').textContent = translations[currentLanguage].curriculumCambridge.title;
        curriculumCards[0].querySelector('p').textContent = translations[currentLanguage].curriculumCambridge.description;
        
        curriculumCards[1].querySelector('h4').textContent = translations[currentLanguage].curriculumJollyPhonics.title;
        curriculumCards[1].querySelector('p').textContent = translations[currentLanguage].curriculumJollyPhonics.description;
        
        curriculumCards[2].querySelector('h4').textContent = translations[currentLanguage].curriculumNoorAlBayan.title;
        curriculumCards[2].querySelector('p').textContent = translations[currentLanguage].curriculumNoorAlBayan.description;
        
        curriculumCards[3].querySelector('h4').textContent = translations[currentLanguage].curriculumSudanese.title;
        curriculumCards[3].querySelector('p').textContent = translations[currentLanguage].curriculumSudanese.description;
    }
}

function updateWhyApolloSection() {
    const sectionTitle = document.querySelector('#why-apollo h2');
    const sectionSubtitle = document.querySelector('#why-apollo .lead');
    
    if (sectionTitle) {
        sectionTitle.textContent = translations[currentLanguage].whyApolloTitle;
    }
    
    if (sectionSubtitle) {
        sectionSubtitle.textContent = translations[currentLanguage].whyApolloSubtitle;
    }
    
    // Update comparison table
    const table = document.querySelector('.comparison-table');
    if (table) {
        // Update table headers
        const headers = table.querySelectorAll('th[data-translate]');
        headers.forEach(header => {
            const key = header.getAttribute('data-translate');
            const keys = key.split('.');
            let translation = translations[currentLanguage];
            
            // Navigate nested object
            for (const k of keys) {
                if (translation && translation[k] !== undefined) {
                    translation = translation[k];
                } else {
                    translation = '';
                    break;
                }
            }
            
            if (translation) {
                header.textContent = translation;
            }
        });
        
        // Update table cells
        const cells = table.querySelectorAll('td[data-translate], th[data-translate], td span[data-translate], th span[data-translate]');
        cells.forEach(cell => {
            // Skip headers that were already updated
            if (cell.tagName === 'TH' && cell.closest('thead')) return;
            
            // Handle both direct elements and nested spans
            const isSpan = cell.tagName === 'SPAN';
            const element = isSpan ? cell : cell;
            const parent = isSpan ? cell.parentElement : cell;
            
            const key = element.getAttribute('data-translate');
            if (!key) return;
            
            const keys = key.split('.');
            let translation = translations[currentLanguage];
            
            // Navigate nested object to get the translation
            for (const k of keys) {
                if (translation && translation[k] !== undefined) {
                    translation = translation[k];
                } else {
                    translation = '';
                    break;
                }
            }
            
            if (translation) {
                if (isSpan) {
                    // For spans, just update the text content
                    element.textContent = translation;
                } else {
                    // For table cells, preserve any icon elements
                    const icon = parent.querySelector('i');
                    if (icon) {
                        parent.innerHTML = '';
                        parent.appendChild(icon);
                        parent.appendChild(document.createTextNode(' ' + translation));
                    } else {
                        parent.textContent = translation;
                    }
                }
            }
        });
    }
    
    // Update why Apollo cards
    const whyApolloCards = document.querySelectorAll('.why-apollo-card');
    if (whyApolloCards.length >= 8) {
        whyApolloCards[0].querySelector('h4').textContent = translations[currentLanguage].whyApolloCard1.title;
        whyApolloCards[0].querySelector('p').textContent = translations[currentLanguage].whyApolloCard1.description;
        
        whyApolloCards[1].querySelector('h4').textContent = translations[currentLanguage].whyApolloCard2.title;
        whyApolloCards[1].querySelector('h5').textContent = translations[currentLanguage].whyApolloCard2.title2;
        whyApolloCards[1].querySelector('p').textContent = translations[currentLanguage].whyApolloCard2.description;
        
        whyApolloCards[2].querySelector('h4').textContent = translations[currentLanguage].whyApolloCard3.title;
        whyApolloCards[2].querySelector('p').textContent = translations[currentLanguage].whyApolloCard3.description;
        
        whyApolloCards[3].querySelector('h4').textContent = translations[currentLanguage].whyApolloCard4.title;
        whyApolloCards[3].querySelector('p').textContent = translations[currentLanguage].whyApolloCard4.description;
        
        whyApolloCards[4].querySelector('h4').textContent = translations[currentLanguage].whyApolloCard5.title;
        whyApolloCards[4].querySelector('p').textContent = translations[currentLanguage].whyApolloCard5.description;
        
        whyApolloCards[5].querySelector('h4').textContent = translations[currentLanguage].whyApolloCard6.title;
        whyApolloCards[5].querySelector('p').textContent = translations[currentLanguage].whyApolloCard6.description;
        
        whyApolloCards[6].querySelector('h4').textContent = translations[currentLanguage].whyApolloCard7.title;
        whyApolloCards[6].querySelector('p').textContent = translations[currentLanguage].whyApolloCard7.description;
        
        whyApolloCards[7].querySelector('h4').textContent = translations[currentLanguage].whyApolloCard8.title;
        whyApolloCards[7].querySelector('p').textContent = translations[currentLanguage].whyApolloCard8.description;
    }
}

function updateRegistrationSection() {
    const sectionTitle = document.querySelector('#registration h2');
    const sectionSubtitle = document.querySelector('#registration .lead');
    
    if (sectionTitle) {
        sectionTitle.textContent = translations[currentLanguage].registrationTitle;
    }
    
    if (sectionSubtitle) {
        sectionSubtitle.textContent = translations[currentLanguage].registrationSubtitle;
    }
    
    // تحديث تسميات الحقول
    const form = document.getElementById('registrationForm');
    if (form) {
        const labels = form.querySelectorAll('label');
        const placeholders = form.querySelectorAll('option, input::placeholder');
        
        labels[0].textContent = translations[currentLanguage].studentName;
        labels[1].textContent = translations[currentLanguage].countryLabel;
        labels[2].textContent = translations[currentLanguage].grade;
        labels[3].textContent = translations[currentLanguage].parentName;
        labels[4].textContent = translations[currentLanguage].email;
        labels[5].textContent = translations[currentLanguage].whatsapp;
        
        // تحديث خيارات Select
        const countrySelect = document.getElementById('country');
        if (countrySelect && countrySelect.firstElementChild) {
            countrySelect.firstElementChild.textContent = translations[currentLanguage].chooseCountry;
        }
        
        const gradeSelect = document.getElementById('grade');
        if (gradeSelect && gradeSelect.firstElementChild) {
            gradeSelect.firstElementChild.textContent = translations[currentLanguage].chooseGrade;
        }
        
        // تحديث رسائل التحقق من الصحة
        const errorMessages = form.querySelectorAll('.invalid-feedback');
        if (errorMessages.length >= 4) {
            errorMessages[0].textContent = translations[currentLanguage].studentNameError;
            errorMessages[1].textContent = translations[currentLanguage].countryError;
            errorMessages[2].textContent = translations[currentLanguage].gradeError;
            errorMessages[3].textContent = translations[currentLanguage].emailError;
        }
        
        // تحديث زر الإرسال
        const submitButton = form.querySelector('button[type="submit"]');
        if (submitButton) {
            submitButton.textContent = translations[currentLanguage].submit;
        }
    }
}

function updateFooter() {
    // Update Apollo title
    const apolloTitle = document.querySelector('.footer-about h2');
    if (apolloTitle) {
        apolloTitle.textContent = translations[currentLanguage].apollo;
    }
    
    // Update about text
    const aboutText = document.querySelector('.footer-about p');
    if (aboutText) {
        aboutText.textContent = translations[currentLanguage].footerAbout;
    }
    
    // Update Facebook button
    const facebookButton = document.querySelector('.footer-about .btn-cta span');
    if (facebookButton) {
        facebookButton.textContent = translations[currentLanguage].followFacebook;
    }
    
    // Update section titles
    const sectionTitles = document.querySelectorAll('footer h5');
    if (sectionTitles.length >= 2) {
        sectionTitles[0].textContent = translations[currentLanguage].quickLinks; // Quick Links
        sectionTitles[1].textContent = translations[currentLanguage].platform; // Educational Platform
    }
    
    // Update platform description
    const platformDesc = document.querySelector('.footer p[data-translate="platformDescription"]');
    if (platformDesc) {
        platformDesc.textContent = translations[currentLanguage].platformDescription;
    }
    
    // Update platform button
    const platformButton = document.querySelector('.footer .btn-primary span');
    if (platformButton) {
        platformButton.textContent = translations[currentLanguage].viewPlatform;
    }
    
    // Update copyright text
    const copyright = document.querySelector('.footer .text-center p');
    if (copyright) {
        copyright.textContent = translations[currentLanguage].copyright;
    }
    
    // Update all navigation links in the footer
    const navLinks = document.querySelectorAll('footer .list-unstyled a[data-translate]');
    navLinks.forEach(link => {
        const key = link.getAttribute('data-translate');
        if (key && translations[currentLanguage][key]) {
            link.textContent = translations[currentLanguage][key];
        }
    });
    
    // Update button icon spacing in footer
    const footerButtons = document.querySelectorAll('footer .btn i[class*="bi-"]');
    footerButtons.forEach(icon => {
        const parent = icon.parentElement;
        if (parent && parent.classList.contains('btn')) {
            // Ensure proper spacing for footer buttons
            icon.classList.remove('ms-2');
            icon.classList.add('me-2');
            
            // Add spacing to text in LTR
            const textSpan = parent.querySelector('span');
            if (textSpan) {
                textSpan.classList.remove('ms-2');
                if (currentLanguage === 'en') {
                    textSpan.classList.add('ms-2');
                }
            }
        }
    });
}

// Function to update country select options
function updateCountrySelect() {
    const countrySelect = document.getElementById('country');
    if (!countrySelect) return;
    
    // Get all country options except the first one (placeholder)
    const countryOptions = countrySelect.querySelectorAll('option:not([value=""])');
    
    // Update each option's text content with the translated value
    countryOptions.forEach(option => {
        const countryKey = option.getAttribute('data-translate');
        if (countryKey) {
            const keys = countryKey.split('.');
            let translation = translations[currentLanguage];
            
            // Navigate nested object to get the translation
            for (const k of keys) {
                if (translation && translation[k] !== undefined) {
                    translation = translation[k];
                } else {
                    translation = option.textContent; // Fallback to original text
                    break;
                }
            }
            
            // Ensure translation is a string and set it
            translation = String(translation || option.textContent);
            option.textContent = translation;
        }
    });
}

// Function to update fixed register button
function updateFixedRegisterButton() {
    const registerButton = document.querySelector('.fixed-register-btn');
    if (registerButton) {
        // Update the aria-label
        const ariaLabel = translations[currentLanguage].registerNowAria;
        registerButton.setAttribute('aria-label', ariaLabel);
        
        // Update the button text using data-translate
        const textSpan = registerButton.querySelector('span[data-translate]');
        if (textSpan) {
            const icon = registerButton.querySelector('i');
            if (icon) {
                icon.className = 'bi bi-person-plus-fill me-2';
            }
            textSpan.textContent = translations[currentLanguage].registerNow;
        }
    }
}

// Function to update classes page sections
function updateClassesSection() {
    // Update Hero Section
    const classesHeroTitle = document.querySelector('[data-translate="classesHeroTitle"]');
    if (classesHeroTitle) {
        classesHeroTitle.textContent = translations[currentLanguage].classesHeroTitle;
    }
    
    const classesHeroSubtitle = document.querySelector('[data-translate="classesHeroSubtitle"]');
    if (classesHeroSubtitle) {
        classesHeroSubtitle.textContent = translations[currentLanguage].classesHeroSubtitle;
    }
    
    // Update filter buttons
    const classesAllButton = document.querySelector('[data-filter="all"][data-translate="classesAll"]');
    if (classesAllButton) {
        classesAllButton.textContent = translations[currentLanguage].classesAll;
    }
    
    // Update CTA Section
    const classesCTATitle = document.querySelector('[data-translate="classesCTATitle"]');
    if (classesCTATitle) {
        classesCTATitle.textContent = translations[currentLanguage].classesCTATitle;
    }
    
    const classesCTASubtitle = document.querySelector('[data-translate="classesCTASubtitle"]');
    if (classesCTASubtitle) {
        classesCTASubtitle.textContent = translations[currentLanguage].classesCTASubtitle;
    }
    
    const classesRegisterNow = document.querySelector('[data-translate="classesRegisterNow"]');
    if (classesRegisterNow) {
        classesRegisterNow.textContent = translations[currentLanguage].classesRegisterNow;
    }
    
    // Update Files Section
    const classesFilesTitle = document.querySelector('[data-translate="classesFilesTitle"]');
    if (classesFilesTitle) {
        classesFilesTitle.textContent = translations[currentLanguage].classesFilesTitle;
    }
    
    const classesFilesSubtitle = document.querySelector('[data-translate="classesFilesSubtitle"]');
    if (classesFilesSubtitle) {
        classesFilesSubtitle.textContent = translations[currentLanguage].classesFilesSubtitle;
    }
    
    const classesFile1Title = document.querySelector('[data-translate="classesFile1Title"]');
    if (classesFile1Title) {
        classesFile1Title.textContent = translations[currentLanguage].classesFile1Title;
    }
    
    const classesDownloadFile = document.querySelector('[data-translate="classesDownloadFile"]');
    if (classesDownloadFile) {
        classesDownloadFile.textContent = translations[currentLanguage].classesDownloadFile;
    }
}

// تهيئة اللغة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // التحقق من اللغة المحفوظة مسبقًا
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }
    
    // إضافة مستمعين لأزرار تبديل اللغة
    const languageButtons = document.querySelectorAll('[data-lang]');
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
    
    // تطبيق اللغة عند تحميل الصفحة
    updateAllTexts();
    updatePageDirection();
    updateLanguageButtons();
});