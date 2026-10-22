// ==========================================================================
// FOCUS & FORCE - ترسانة التفوق الأكاديمي للبكالوريا (The BAC Mastery Arsenal)
// منظومة متكاملة من الأدوات الذكية المخصصة للتحفيز، الحفظ النشط، والمحاكاة الرسمية
// ==========================================================================

// --------------------------------------------------------------------------
// 1. قاعدة بيانات بطاقات الحفظ الذكية (Flashcards)
// --------------------------------------------------------------------------
const DEFAULT_FLASHCARDS = [
  // --- تاريخ وجغرافيا ---
  {
    id: "fc-hist-1",
    subject: "تاريخ",
    badge: "شخصيات الحرب الباردة",
    question: "من هو هاري ترومان وما هو أبرز قرار ارتبط باسمه؟",
    answer: "رئيس الولايات المتحدة الأمريكية (1945-1953)، أمر بإلقاء القنبلتين الذريتين على هيروشيما وناغازاكي (أوت 1945)، وصاحب 'مبدأ ترومان' 1947 القائم على سياسة احتواء وتطويق المد الشيوعي وتقديم مساعدات لليونان وتركيا."
  },
  {
    id: "fc-hist-2",
    subject: "تاريخ",
    badge: "شخصيات الثورة الجزائرية",
    question: "من هو مصطفى بن بولعيد؟",
    answer: "أحد مفجري الثورة التحريرية وعضو مجموعة الـ 22 ولجنة الـ 6، لُقب بـ 'أسد الأوراس' وقائد المنطقة الأولى (الأوراس). استشهد في 22 مارس 1956 بانفجار مذياع مفخخ."
  },
  {
    id: "fc-hist-3",
    subject: "تاريخ",
    badge: "تواريخ معلمية حاسمة",
    question: "ماذا يمثل تاريخ 24 فيفري 1971 في تاريخ الجزائر؟",
    answer: "تأميم المحروقات واسترجاع السيادة الكاملة على الثروات البترولية والغازية في عهد الرئيس هواري بومدين."
  },
  {
    id: "fc-hist-4",
    subject: "تاريخ",
    badge: "مصطلحات الحرب الباردة",
    question: "ما المقصود بسياسة 'ملء الفراغ'؟",
    answer: "سياسة استعمارية ابتكرتها الولايات المتحدة الأمريكية بقيادة أيزنهاور بعد تراجع النفوذ الاستعماري التقليدي (فرنسا وبريطانيا) لتعويضهما والسيطرة على المناطق الحيوية لمنع انتشار الاتحاد السوفيتي."
  },
  {
    id: "fc-geo-1",
    subject: "جغرافيا",
    badge: "مصطلحات الاقتصاد العالمي",
    question: "ما هو 'مؤشر التنمية البشرية' (IDH) وما هي أبعاده الثلاثة؟",
    answer: "مقياس تأليفي وضعه برنامج الأمم المتحدة الإنمائي (UNDP) يتراوح بين 0 و 1، يقيس مستوى رفاهية الشعوب بالاعتماد على ثلاثة أبعاد: أمد الحياة عند الولادة، نسبة التمدرس والأمية، ومتوسط الدخل الفردي الحقيقي."
  },
  {
    id: "fc-geo-2",
    subject: "جغرافيا",
    badge: "التكتلات الاقتصادية",
    question: "ما الفرق بين 'التنينات الأربعة' و'النمور الآسيوية'؟",
    answer: "التنينات (كوريا الجنوبية، تايوان، هونغ كونغ، سنغافورة): حققت نمواً صناعياً وتكنولوجياً سريعاً منذ السبعينات. النمور (ماليزيا، تايلاند، إندونيسيا، الفلبين): دول حديثة التصنيع سارت على خطى التنينات وحققت قفزة اقتصادية لاحقة."
  },

  // --- علوم إسلامية (الشريعة) ---
  {
    id: "fc-isl-1",
    subject: "علوم إسلامية",
    badge: "مقاصد الشريعة الإسلامية",
    question: "ما هي الكليات الخمس (الضروريات الخمس) بالترتيب؟",
    answer: "1. حفظ الدين\n2. حفظ النفس\n3. حفظ العقل\n4. حفظ النسل (أو العرض)\n5. حفظ المال.\nوهي الغايات العظمى التي جاء الإسلام لحفظها في مرتبة الضروريات."
  },
  {
    id: "fc-isl-2",
    subject: "علوم إسلامية",
    badge: "مصادر التشريع",
    question: "عرّف 'الإجماع' واذكر أركانه الأربعة.",
    answer: "لغة: العزم والاتفاق. اصطلاحاً: اتفاق جميع المجتهدين من أمة محمد ﷺ في عصر من العصور بعد وفاته على حكم شرعي عملي.\nأركانه: اتفاق جميع المجتهدين، أن يكونوا من أمة محمد ﷺ، أن يكون في عصر بعد وفاته، وأن يكون على حكم شرعي."
  },
  {
    id: "fc-isl-3",
    subject: "علوم إسلامية",
    badge: "الربا وأنواعه",
    question: "ما الفرق بين ربا الفضل وربا النسيئة؟",
    answer: "ربا الفضل: بيع مطعومين أو نقدين من جنس واحد مع الزيادة في أحدهما دون تأجيل (كالذهب بالذهب مع زيادة أحدهما).\nربا النسيئة: الزيادة المشروطة في الدين أو الصرف مقابل الأجل والتأخير."
  },

  // --- فلسفة ---
  {
    id: "fc-phil-1",
    subject: "فلسفة",
    badge: "أصل المفاهيم الرياضية",
    question: "ما هو موقف الاتجاه العقلاني (ديكارت، أفلاطون) في أصل الرياضيات؟",
    answer: "يرى العقلانيون أن المفاهيم الرياضية فطرية سابقة عن التجربة الحسية، نابعة من العقل الخالص. يقول ديكارت: 'الأعداد والأشكال الرياضية أفكار فطرية أودعها الله في عقولنا منذ البدء'."
  },
  {
    id: "fc-phil-2",
    subject: "فلسفة",
    badge: "الشعور واللاشعور",
    question: "ما هي الأطروحة المركزية لسيغموند فرويد في اللاشعور؟",
    answer: "يرى فرويد أن الحياة النفسية لا تقتصر على الشعور فقط، بل يحكمها جانب خفي وأوسع هو 'اللاشعور'، وفسر ذلك عبر كبت الرغبات، زلات اللسان، فلتات القلم، والأحلام، مقسماً الجهاز النفسي إلى: الهو (Id)، الأنا (Ego)، والأنا الأعلى (Superego)."
  },
  {
    id: "fc-phil-3",
    subject: "فلسفة",
    badge: "البيولوجيا والمنهج التجريبي",
    question: "ما هي العقبات التي تواجه تطبيق المنهج التجريبي على المادة الحية؟",
    answer: "1. تعقد الظاهرة الحية وتشابك أعضائها.\n2. التمايز والتغير المستمر واستحالة تكرار التجربة بنفس الشروط الدقيقة.\n3. العوائق الأخلاقية والدينية التي تمنع التشريح والإضرار بالكائن الحي."
  },

  // --- علوم طبيعية ---
  {
    id: "fc-sci-1",
    subject: "علوم طبيعية",
    badge: "تركيب البروتين",
    question: "ما هي مراحل عملية الاستنساخ ومقر حدوثها؟",
    answer: "تحدث في النواة وتمر بثلاث مراحل:\n1. الانطلاق: يرتبط أنزيم ARN بوليميراز ببداية المورثة ويفتح سلسلتي الـ ADN.\n2. الاستطالة: يتحرك الأنزيم على السلسلة الناسخة مدمجاً النيكليوتيدات الريبية الحرة المتكاملة.\n3. النهاية: يصل الأنزيم لنهاية المورثة فينفصل ويتحرر الـ ARNm المكتمل."
  },
  {
    id: "fc-sci-2",
    subject: "علوم طبيعية",
    badge: "المناعة والتخصص الوظيفي",
    question: "ما هو دور الخلايا اللمفاوية LT4 في الاستجابة المناعية؟",
    answer: "تعتبر قائدة الجهاز المناعي (مايسترو). بعد التعرف على محدد المستضد المعروض على البالعة الكبيرة رفقة HLA II، تفرز الإنترلوكين 2 (IL-2) لتحفيز نفسها وخلايا LB و LT8 على التكاثر والتمايز إلى خلايا منفذة."
  },

  // --- رياضيات وفيزياء ---
  {
    id: "fc-phys-1",
    subject: "فيزياء",
    badge: "الميكانيك وحركة الكواكب",
    question: "اذكر نص القانون الثالث لكيبلر (قانون الأدوار).",
    answer: "مربع الدور المداري (T²) لكوكب يتناسب طرداً مع مكعب نصف المحور الأكبر لمداره الإهليجي (a³)، أي: T² / a³ = ثابت (k = 4π² / GM)."
  },
  {
    id: "fc-math-1",
    subject: "رياضيات",
    badge: "التزايد المقارن",
    question: "ما هي نتائج التزايد المقارن للدوال الأسية واللوغاريتمية عند +∞؟",
    answer: "1. lim (e^x / x^n) = +∞ لما x -> +∞\n2. lim (x^n * e^(-x)) = 0 لما x -> +∞\n3. lim (ln(x) / x^n) = 0 لما x -> +∞\n(الدالة الأسية تفوق الدوال كثيرة الحدود، والدوال كثيرة الحدود تفوق الدالة اللوغاريتمية)."
  }
];

// --------------------------------------------------------------------------
// 2. مستودع مواضيع البكالوريا الرسمية (Official BAC Archives)
// --------------------------------------------------------------------------
const BAC_ARCHIVES_DATA = [
  { year: 2024, stream: "علوم تجريبية", subject: "الرياضيات", term: "الدورة العادية", url: "https://www.dzexams.com/ar/bac/mathematiques", solutions: "الحل النموذجي الوزاري متوفر" },
  { year: 2024, stream: "علوم تجريبية", subject: "العلوم الطبيعية", term: "الدورة العادية", url: "https://www.dzexams.com/ar/bac/sciences-naturelles", solutions: "الحل النموذجي الوزاري متوفر" },
  { year: 2024, stream: "علوم تجريبية", subject: "الفيزياء", term: "الدورة العادية", url: "https://www.dzexams.com/ar/bac/physique", solutions: "الحل النموذجي الوزاري متوفر" },
  { year: 2024, stream: "رياضيات", subject: "الرياضيات", term: "الدورة العادية", url: "https://www.dzexams.com/ar/bac/mathematiques", solutions: "الحل النموذجي الوزاري متوفر" },
  { year: 2024, stream: "آداب وفلسفة", subject: "الفلسفة", term: "الدورة العادية", url: "https://www.dzexams.com/ar/bac/philosophie", solutions: "الحل النموذجي الوزاري متوفر" },
  { year: 2023, stream: "علوم تجريبية", subject: "الرياضيات", term: "الدورة العادية", url: "https://www.dzexams.com/ar/bac/mathematiques", solutions: "الحل النموذجي الوزاري متوفر" },
  { year: 2023, stream: "علوم تجريبية", subject: "العلوم الطبيعية", term: "الدورة العادية", url: "https://www.dzexams.com/ar/bac/sciences-naturelles", solutions: "الحل النموذجي الوزاري متوفر" },
  { year: 2023, stream: "تسيير واقتصاد", subject: "الاقتصاد والمناجمنت", term: "الدورة العادية", url: "https://www.dzexams.com/ar/bac/economie", solutions: "الحل النموذجي الوزاري متوفر" },
  { year: 2022, stream: "تقني رياضي", subject: "التكنولوجيا (الهندسة)", term: "الدورة العادية", url: "https://www.dzexams.com/ar/bac", solutions: "الحل النموذجي الوزاري متوفر" },
  { year: 2021, stream: "آداب ولغات", subject: "اللغات الأجنبية", term: "الدورة العادية", url: "https://www.dzexams.com/ar/bac", solutions: "الحل النموذجي الوزاري متوفر" }
];

// --------------------------------------------------------------------------
// 3. نصوص التحفيظ النشط (Active Memorization)
// --------------------------------------------------------------------------
const MEMORIZATION_TOPICS = [
  {
    id: "mem-1",
    title: "مقالة أصل الرياضيات (الموقف الحسي التجريبي)",
    category: "فلسفة BAC",
    fullText: "يرى أنصار المذهب الحسي التجريبي ومنهم جون لوك ودافيد هيوم وجون ستيوارت ميل أن المفاهيم الرياضية لم تولد مع الإنسان فطرية في عقله، بل هي مستمدة كلياً من التجربة الحسية والواقع المعاش. فالطفل يتعلم العد أولاً بأصابع يديه وبالحصى، والتاريخ يؤكد أن علم الهندسة نشأ مساحياً في مصر القديمة عند محاولة قياس الأراضي بعد فيضان نهر النيل.",
    clozeText: "يرى أنصار المذهب [الحسي التجريبي] ومنهم [جون لوك] ودافيد هيوم وجون ستيوارت ميل أن المفاهيم الرياضية لم تولد مع الإنسان [فطرية] في عقله، بل هي مستمدة كلياً من [التجربة الحسية] والواقع المعاش. فالطفل يتعلم [العد] أولاً بأصابع يديه وبالحصى، والتاريخ يؤكد أن علم [الهندسة] نشأ مساحياً في [مصر القديمة] عند محاولة قياس الأراضي بعد فيضان نهر [النيل]."
  },
  {
    id: "mem-2",
    title: "مقاصد الشريعة الإسلامية ومراتبها",
    category: "علوم إسلامية BAC",
    fullText: "مقاصد الشريعة هي الغايات والأهداف والحكم التي قصدها الشارع الحكيم في تشريع الأحكام لجلب المصالح ودرء المفاسد عن العباد في العاجل والآجل. وتترتب تنازلياً إلى ثلاث مراتب: المرتبة الأولى الضروريات وهي ما لا بد منه لقيام مصالح الدين والدنيا وإذا فقدت اختل نظام الحياة وعمت الفوضى، المرتبة الثانية الحاجيات وهي ما يحتاجه الناس لرفع الحرج والمشقة والتيسير، والمرتبة الثالثة التحسينيات وهي الأخذ بمحاسن العادات ومكارم الأخلاق.",
    clozeText: "مقاصد الشريعة هي [الغايات والأهداف] والحكم التي قصدها الشارع الحكيم في تشريع الأحكام لجلب [المصالح] ودرء [المفاسد] عن العباد. وتترتب تنازلياً إلى ثلاث مراتب: المرتبة الأولى [الضروريات] وهي ما لا بد منه لقيام مصالح الدين والدنيا وإذا فقدت اختل [نظام الحياة]، المرتبة الثانية [الحاجيات] وهي ما يحتاجه الناس لرفع [الحرج والمشقة]، والمرتبة الثالثة [التحسينيات] وهي الأخذ بمحاسن العادات ومكارم [الأخلاق]."
  },
  {
    id: "mem-3",
    title: "مؤتمر الصومام 20 أوت 1956",
    category: "تاريخ BAC",
    fullText: "انعقد مؤتمر الصومام في 20 أوت 1956 بقرية إيفري أوزلاقن بوادي الصومام، برئاسة العربي بن مهيدي وأمانة عبان رمضان. وكان هدفه تقييم المرحلة الأولى من الثورة وإعادة تنظيمها سياسياً وعسكرياً. تمخض عنه تقسيم الجزائر إلى ست ولايات عسكرية، وتأسيس المجلس الوطني للثورة الجزائرية (CNRA) ولجنة التنسيق والتنفيذ (CCE)، وإقرار مبدأ أولوية العمل السياسي على العسكري والداخل على الخارج.",
    clozeText: "انعقد مؤتمر الصومام في [20 أوت 1956] بقرية إيفري بوادي الصومام، برئاسة [العربي بن مهيدي] وأمانة [عبان رمضان]. تمخض عنه تقسيم الجزائر إلى [ست ولايات عسكرية]، وتأسيس [المجلس الوطني للثورة] ولجنة [التنسيق والتنفيذ]، وإقرار مبدأ أولوية [العمل السياسي] على العسكري و[الداخل] على الخارج."
  }
];

// --------------------------------------------------------------------------
// 4. قوالب الجدول الأسبوعي النموذجي لكل شعبة
// --------------------------------------------------------------------------
const SCHEDULE_PRESETS = {
  "علوم تجريبية": [
    { day: "السبت", dawn: "حفظ الشريعة (مقاصد الشريعة)", afternoon: "مسائل دوال أسية ولوغاريتمية", evening: "مراجعة تركيب البروتين + فرنسية" },
    { day: "الأحد", dawn: "حفظ تواريخ وشخصيات التاريخ", afternoon: "تمارين الفيزياء (حركة الكواكب والأقمار)", evening: "فلسفة: قراءة وفهم مقالة الرياضيات" },
    { day: "الإثنين", dawn: "حفظ مصطلحات الجغرافيا", afternoon: "علوم: حل موضوع تجريبي في المناعة", evening: "رياضيات: متتاليات عددية" },
    { day: "الثلاثاء", dawn: "شريعة: مصادر التشريع الإسلامي", afternoon: "فيزياء: التحولات النووية ونصف العمر", evening: "لغة إنجليزية: قواعد ومصطلحات BAC" },
    { day: "الأربعاء", dawn: "حفظ مقالة فلسفية (الشعور واللاشعور)", afternoon: "رياضيات: احتمالات وتطبيقات", evening: "علوم: آليات النقل المشبكي" },
    { day: "الخميس", dawn: "تاريخ: حركات التحرر والعالم الثالث", afternoon: "فيزياء: حل بكالوريا 2023 موضوع كامل", evening: "أدب عربي: قواعد وإعراب البكالوريا" },
    { day: "الجمعة", dawn: "استرجاع عام لكافة المحفوظات", afternoon: "جلسة محاكاة بكالوريا (موضوع كامل 3 ساعات)", evening: "تقييم الأسبوع والتخطيط للأسبوع القادم" }
  ],
  "رياضيات": [
    { day: "السبت", dawn: "حفظ الشريعة والفلسفة", afternoon: "مسائل شاملة في الحساب والموافقات", evening: "فيزياء: الميكانيك والكهرباء" },
    { day: "الأحد", dawn: "حفظ التاريخ والجغرافيا", afternoon: "دوال ونهايات معمقة (خواص التقارب)", evening: "إنجليزية ولغات أجنبية" },
    { day: "الإثنين", dawn: "شريعة: الربا والمعاملات المالية", afternoon: "متتاليات وبرهان بالتراجع وتوليد", evening: "أدب عربي وبلاغة" },
    { day: "الثلاثاء", dawn: "فلسفة: مقالة المنطق والرياضيات", afternoon: "فيزياء: حركة قذيفة في حقل ثقالة منتظم", evening: "رياضيات: هندسة فضاء وأعداد مركبة" },
    { day: "الأربعاء", dawn: "تاريخ: سياسات الاستعمار الفرنسي", afternoon: "حل موضوع بكالوريا رياضيات رسمي", evening: "فرنسية: le texte historique" },
    { day: "الخميس", dawn: "جغرافيا: تكتل الاتحاد الأوروبي", afternoon: "فيزياء: اهتزازات حرة وقسرية", evening: "مراجعة القوانين والنهايات الشهيرة" },
    { day: "الجمعة", dawn: "استرجاع القوانين والمصطلحات", afternoon: "محاكاة امتحان بكالوريا رياضيات (4 ساعات)", evening: "استراحة ذهنية وجلسة هادئة" }
  ],
  "آداب وفلسفة": [
    { day: "السبت", dawn: "فلسفة: حفظ مقالة الإدراك والشعور", afternoon: "لغة عربية: تقطيع عروضي وبلاغة", evening: "حفظ التاريخ: أسباب الحرب الباردة" },
    { day: "الأحد", dawn: "حفظ الشريعة الإسلامية", afternoon: "فلسفة: كتابة مقالة بالمنهجية الجدلية", evening: "جغرافيا: رسم بياني وتعليق على جدول" },
    { day: "الإثنين", dawn: "فلسفة: مقالة الذاكرة والخيال", afternoon: "أدب: دراسة نصوص شعر المنفى والالتزام", evening: "لغة فرنسية: تلخيص نص تاريخي" },
    { day: "الثلاثاء", dawn: "تاريخ: مؤتمر الصومام والمؤسسات", afternoon: "فلسفة: استقصاء بالوضع وتدريب", evening: "لغة إنجليزية: منهجية الفقرة التعبيرية" },
    { day: "الأربعاء", dawn: "حفظ مصطلحات الشريعة والجغرافيا", afternoon: "رياضيات أدبية: متتاليات عددية وموافقات", evening: "فلسفة: تحليل نصوص فلاسفة كلاسيكيين" },
    { day: "الخميس", dawn: "مراجعة عامة لمقالات الفلسفة الثلاث", afternoon: "حل موضوع بكالوريا أدب عربي كامل", evening: "تاريخ وجغرافيا: تواريخ معلمية" },
    { day: "الجمعة", dawn: "تثبيت المحفوظات مع زميل دراسة", afternoon: "جلسة كتابة مقالة فلسفية بالوقت الرسمي", evening: "تقييم أسبوعي واسترخاء" }
  ]
};

// --------------------------------------------------------------------------
// 5. متجر الهدايا والمكافآت (Gifts & Points Shop)
// --------------------------------------------------------------------------
const GIFTS_CATALOG = [
  {
    id: "gift-1",
    cost: 80,
    title: "كتيب أسرار العشرينات في البكالوريا 🏆",
    desc: "خلاصة نصائح وتجارب المتفوقين الأوائل في البكالوريا بالجزائر بمعدل 19+.",
    badge: "دليل PDF",
    fileUrl: "#",
    contentSnippet: "سر التفوق: 1) لا تترك درساً حتى تحل عليه تمرينين بأفكار مختلفة، 2) منهجية الإجابة تسلب منك نصف النقاط إن لم تلتزم بكلمات الدليل الوزاري، 3) استيقاظ الفجر يضاعف قوة التركيز والذاكرة بـ 3 أضعاف."
  },
  {
    id: "gift-2",
    cost: 150,
    title: "حقيبة المقالات الفلسفية الذهبية المقترحة 📝",
    desc: "أهم 8 مقالات فلسفية متكررة ومصاغة وفق سلم التنقيط الوزاري الرسمي.",
    badge: "مقالات نموذجية",
    fileUrl: "#",
    contentSnippet: "تشمل: 1) أصل الرياضيات (عقلي vs تجريبي)، 2) الشعور واللاشعور، 3) الحتمية والحرية، 4) العلوم الإنسانية وصعوبة التجريب، 5) الحقيقة النسبية والمطلقة."
  },
  {
    id: "gift-3",
    cost: 250,
    title: "ملخص القوانين الذهبية للرياضيات والفيزياء ⚡",
    desc: "كل قوانين النهايات، المتتاليات، الميكانيك، والنووي في ورقتين فقط.",
    badge: "مخطط سحري",
    fileUrl: "#",
    contentSnippet: "يحتوي على جداول النهايات الشهيرة، قوانين كيبلر وقوانين نيوتن الثلاثة، معادلات التفاضلية للوشيعة والمكثفة RC و RL، وقوانين التحولات النووية."
  },
  {
    id: "gift-4",
    cost: 350,
    title: "درع حماية الستريك الفائق (Streak Shield) 🛡️",
    desc: "يحميك من فقدان أيام الستريك المتتالية إذا غبت يوماً عن المراجعة.",
    badge: "حماية خاصة",
    type: "shield"
  }
];

// --------------------------------------------------------------------------
// 6. التحديات الأسبوعية النشطة (Challenges Hub)
// --------------------------------------------------------------------------
const BAC_CHALLENGES = [
  {
    id: "chal-1",
    title: "تحدي وحش التركيز ⏳",
    desc: "أتمم 100 دقيقة دراسة بومودورو مركزة خلال اليوم.",
    reward: 40,
    target: 100,
    metric: "pomodoroMinutes",
    icon: "timer"
  },
  {
    id: "chal-2",
    title: "تحدي دقة الكويزات 🧩",
    desc: "أجب عن 10 أسئلة كويز صحيحة لكسب شارة الدقة.",
    reward: 50,
    target: 10,
    metric: "quizPoints",
    divisor: 10,
    icon: "help-circle"
  },
  {
    id: "chal-3",
    title: "تحدي بطاقات الذاكرة الخارقة 🃏",
    desc: "راجع 15 بطاقة حفظ اليوم لتثبيت المعلومات في الذاكرة طويلة المدى.",
    reward: 35,
    target: 15,
    metric: "flashcardsReviewed",
    icon: "layers"
  }
];

// --------------------------------------------------------------------------
// 7. مواضيع محاكاة البكالوريا الرسمية (BAC Exam Simulator)
// --------------------------------------------------------------------------
const BAC_SIMULATOR_DATA = {
  "علوم تجريبية": {
    durationHours: 3.5,
    subjects: [
      {
        name: "العلوم الطبيعية",
        sujet1: {
          title: "الموضوع الأول: التخصص الوظيفي للبروتينات في الدفاع عن الذات",
          ex1: "التمرين الأول (5 نقاط): استرجاع منظم للمعلومات حول آليات التعرف المزدوج للـ LTc على الخلية المستهدفة المصابة ومراحل تخريبها بواسطة البيرفورين والغرانزيم.",
          ex2: "التمرين الثاني (7 نقاط): الاستدلال العلمي حول تأثير سم بكتيري يستهدف نشاط أنزيم ARN بوليميراز ويعطل التعبير المورثي في الخلايا المناعية.",
          ex3: "التمرين الثالث (8 نقاط): مسعى علمي كامل مدعم بوثائق حول استراتيجيات الهروب المناعي لفيروس الـ VIH واستخدام الأجسام المضادة أحادية النسيلة كعلاج واعد."
        },
        sujet2: {
          title: "الموضوع الثاني: التحولات الطاقوية والتخصص الوظيفي للبروتينات في الاتصال العصبي",
          ex1: "التمرين الأول (5 نقاط): نمذجة انتقال السيالة العصبية على مستوى المشبك الكيميائي المنبه ودور قنوات الـ Ca2+ الفولطية.",
          ex2: "التمرين الثاني (7 نقاط): استدلال علمي يوضح آلية تأثير مبيد حشري على مستقبلات الأستيل كولين النيكوتينية مسبباً شللاً رخوياً.",
          ex3: "التمرين الثالث (8 نقاط): مسعى علمي حول تفاعلات المرحلة الكيموضوئية للتركيب الضوئي وأكسدة الماء وإنتاج الـ ATP والـ NADPH,H+."
        }
      },
      {
        name: "الرياضيات",
        sujet1: {
          title: "الموضوع الأول: المتتاليات العددية ودراسة دالة لوغاريتمية شاملة",
          ex1: "التمرين الأول (4 نقاط): متتالية معرفة بعلاقة تراجعية، البرهان بالتراجع، البرهان على التقارب، وحساب المجموع Sn.",
          ex2: "التمرين الثاني (4 نقاط): احتمالات: سحب كرات من كيس بدون إرجاع، المتغير العشوائي X، وحسابه الأمل والتباين.",
          ex3: "التمرين الثالث (4 نقاط): أعداد مركبة وتحويلات نقطية (دوران وتشابه مباشر).",
          ex4: "التمرين الرابع (8 نقاط): مسألة شاملة لدالة لوغاريتمية f(x) = x + ln((x-1)/(x+1))، دراسة التغيرات، نقط الانعطاف، رسم المنحنى، وحساب المساحة."
        },
        sujet2: {
          title: "الموضوع الثاني: الدوال الأسية والاحتمالات والمتتاليات",
          ex1: "التمرين الأول (4.5 نقاط): متتاليات هندسية وحسابية متداخلة واستنتاج النهاية.",
          ex2: "التمرين الثاني (4.5 نقاط): هندسة في الفضاء: معادلة المستوي، المسافة بين نقطة ومستوي، والتقاطع مع كرة.",
          ex3: "التمرين الثالث (11 نقطة): دالة أسية f(x) = (2x - 1)e^(-x) + 1، مناقشة بيانية لعدد حلول المعادلة f(x) = m، وحساب التكامل بالتجزئة."
        }
      }
    ]
  },
  "رياضيات": {
    durationHours: 4.0,
    subjects: [
      {
        name: "الرياضيات",
        sujet1: {
          title: "الموضوع الأول: الحساب والموافقات ودالة عددية أسية مركبة",
          ex1: "التمرين الأول (4 نقاط): دراسة بواقي قسمة 7^n على 9، وحل المعادلة في Z²: 7x - 9y = 5 باستخدام خوارزمية إقليدس ونظرية غوص.",
          ex2: "التمرين الثاني (4 نقاط): أعداد مركبة وتحويلات نقطية متقدمة.",
          ex3: "التمرين الثالث (4 نقاط): فضاء واحتمالات شرطية.",
          ex4: "التمرين الرابع (8 نقاط): دراسة دالة وسيطية f_m(x) وحساب التكامل وحصر المتتاليات."
        },
        sujet2: {
          title: "الموضوع الثاني: المتتاليات والدوال اللوغاريتمية والتركيب",
          ex1: "التمرين الأول (4.5 نقاط): نظرية الأعداد، القاسم المشترك الأكبر PGCD، والموافقات.",
          ex2: "التمرين الثاني (4.5 نقاط): التحويلات النقطية في المستوي المركب.",
          ex3: "التمرين الثالث (11 نقطة): مسألة دالة شاملة تتضمن قيمة متوسطة، متراجعات تكاملية، ونهايات التزايد المقارن."
        }
      }
    ]
  },
  "آداب وفلسفة": {
    durationHours: 3.5,
    subjects: [
      {
        name: "الفلسفة",
        sujet1: {
          title: "الموضوع الأول (مقارنة أو جدل): هل يمكن الفصل التام بين الإحساس والإدراك؟",
          ex1: "المطلوب: معالجة الإشكالية بالمنهجية الجدلية المعتمدة في البكالوريا مع عرض موقف المدرسة العقلية والغيشتالتية، النقد والتركيب، والخاتمة المتوازنة."
        },
        sujet2: {
          title: "الموضوع الثاني (استقصاء بالوضع): دافع عن الأطروحة القائلة: 'إن المفاهيم الرياضية مستمدة من العقل الخالص'.",
          ex1: "المطلوب: إثبات صحة الأطروحة والأخذ بحجج العقلانيين والمثاليين، نقد خصوم الأطروحة (التجريبيين)، وتأكيد مشروعية الدفاع عنها."
        }
      }
    ]
  }
};

// ==========================================================================
// 8. منطق وإدارة الأدوات التفاعلية (Hub Controller)
// ==========================================================================

let activeFlashcardIdx = 0;
let currentFilteredFlashcards = [...DEFAULT_FLASHCARDS];
let activeFlashcardFlipped = false;
let userFlashcards = JSON.parse(localStorage.getItem('bac_user_flashcards') || '[]');
let flashcardsReviewedCount = parseInt(localStorage.getItem('flashcardsReviewedCount') || '0');
let userUnlockedGifts = JSON.parse(localStorage.getItem('bac_unlocked_gifts') || '[]');
let userWeeklySchedule = JSON.parse(localStorage.getItem('bac_weekly_schedule') || 'null');
let simulatorTimerInterval = null;
let simulatorSecondsLeft = 0;
let currentArsenalCategory = 'all';

function getAllFlashcards() {
  return [...DEFAULT_FLASHCARDS, ...userFlashcards];
}

// --------------------------------------------------------------------------
// فتح النوافذ المنبثقة لكل أداة (Modal Router)
// --------------------------------------------------------------------------
function openToolModal(toolType) {
  const modal = document.getElementById('masterToolModal');
  const container = document.getElementById('masterToolModalContent');
  if (!modal || !container) return;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  switch (toolType) {
    case 'flashcards':
      renderFlashcardsView(container);
      break;
    case 'simulator':
      renderSimulatorView(container);
      break;
    case 'games':
      renderGamesView(container);
      break;
    case 'schedule':
      renderScheduleView(container);
      break;
    case 'memorize':
      renderMemorizeView(container);
      break;
    case 'streak':
      renderStreakView(container);
      break;
    case 'mentor':
      renderMentorView(container);
      break;
    case 'ai':
      renderAIView(container);
      break;
    case 'bac-archive':
      renderBacArchiveView(container);
      break;
    case 'lessons':
    case 'summaries':
      renderLessonsSummariesView(container, toolType);
      break;
    case 'gifts':
      renderGiftsView(container);
      break;
    case 'challenges':
      renderChallengesView(container);
      break;
    case 'points':
      renderPointsHubView(container);
      break;
    case 'tdl':
      renderTdlProView(container);
      break;
    default:
      container.innerHTML = `<div class="p-6 text-center text-sm font-bold">جاري تحميل الأداة...</div>`;
  }

  if (window.lucide) lucide.createIcons();
}

function closeToolModal() {
  const modal = document.getElementById('masterToolModal');
  if (modal) modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// --------------------------------------------------------------------------
// 1. واجهة بطاقات الحفظ الذكية (Flashcards Interface)
// --------------------------------------------------------------------------
function renderFlashcardsView(container) {
  currentFilteredFlashcards = getAllFlashcards();
  activeFlashcardIdx = 0;
  activeFlashcardFlipped = false;

  container.innerHTML = `
    <div class="space-y-4">
      <div class="flex items-center justify-between border-b border-[#E8C995]/30 pb-3">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-2xl bg-[#E8C995]/20 border border-[#E8C995]/40 flex items-center justify-center text-[#731E3E] dark:text-[#E8C995]">
            <i data-lucide="layers" class="w-5 h-5"></i>
          </div>
          <div>
            <h3 class="font-bold text-base text-[#451C2B] dark:text-[#FCF8F1]">بطاقات الحفظ والاسترجاع الذاتي (أنكي BAC)</h3>
            <span class="text-[11px] opacity-70">تقنية التكرار المتباعد لتثبيت المصطلحات والشخصيات والقوانين</span>
          </div>
        </div>
        <button onclick="openAddFlashcardDialog()" class="px-3.5 py-1.5 bg-[#731E3E] hover:bg-[#501426] text-[#F5EDE0] rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow">
          <i data-lucide="plus" class="w-3.5 h-3.5"></i>
          <span>أضف بطاقتك</span>
        </button>
      </div>

      <!-- تصنيفات المواد -->
      <div class="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
        <button onclick="filterFlashcardsBySubject('الكل')" class="fc-subj-btn px-3 py-1 rounded-full bg-[#731E3E] text-[#F5EDE0] font-bold transition">الكل</button>
        <button onclick="filterFlashcardsBySubject('تاريخ')" class="fc-subj-btn px-3 py-1 rounded-full bg-[#F5EDE0] dark:bg-[#25131D] border border-[#E8C995]/40 hover:bg-[#E8C995]/20 transition">تاريخ</button>
        <button onclick="filterFlashcardsBySubject('جغرافيا')" class="fc-subj-btn px-3 py-1 rounded-full bg-[#F5EDE0] dark:bg-[#25131D] border border-[#E8C995]/40 hover:bg-[#E8C995]/20 transition">جغرافيا</button>
        <button onclick="filterFlashcardsBySubject('علوم إسلامية')" class="fc-subj-btn px-3 py-1 rounded-full bg-[#F5EDE0] dark:bg-[#25131D] border border-[#E8C995]/40 hover:bg-[#E8C995]/20 transition">علوم إسلامية</button>
        <button onclick="filterFlashcardsBySubject('فلسفة')" class="fc-subj-btn px-3 py-1 rounded-full bg-[#F5EDE0] dark:bg-[#25131D] border border-[#E8C995]/40 hover:bg-[#E8C995]/20 transition">فلسفة</button>
        <button onclick="filterFlashcardsBySubject('علوم طبيعية')" class="fc-subj-btn px-3 py-1 rounded-full bg-[#F5EDE0] dark:bg-[#25131D] border border-[#E8C995]/40 hover:bg-[#E8C995]/20 transition">علوم طبيعية</button>
        <button onclick="filterFlashcardsBySubject('رياضيات')" class="fc-subj-btn px-3 py-1 rounded-full bg-[#F5EDE0] dark:bg-[#25131D] border border-[#E8C995]/40 hover:bg-[#E8C995]/20 transition">رياضيات وفيزياء</button>
      </div>

      <!-- حاوية البطاقة التفاعلية ثلاثية الأبعاد -->
      <div id="flashcardBox" onclick="flipActiveFlashcard()" class="relative w-full min-h-[220px] sm:min-h-[240px] cursor-pointer rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 shadow-lg border-2 border-[#E8C995]/40 bg-gradient-to-br from-[#FCF8F1] to-[#F5EDE0] dark:from-[#321323] dark:to-[#1f0d18] hover:border-[#731E3E] dark:hover:border-[#E8C995] select-none">
        <!-- يتم رسم محتوى البطاقة هنا -->
      </div>

      <!-- أزرار التحكم والتقييم -->
      <div class="flex flex-wrap items-center justify-between gap-2 pt-2">
        <div class="flex items-center gap-2">
          <button onclick="prevFlashcard()" class="p-2.5 rounded-xl bg-[#F5EDE0] dark:bg-[#25131D] border border-[#E8C995]/40 hover:bg-[#E8C995]/30 transition" title="البطاقة السابقة">
            <i data-lucide="chevron-right" class="w-4 h-4"></i>
          </button>
          <span id="fcCounter" class="text-xs font-mono font-bold text-[#731E3E] dark:text-[#E8C995] bg-[#E8C995]/20 px-3.5 py-1.5 rounded-xl border border-[#E8C995]/30">1 / 10</span>
          <button onclick="nextFlashcard()" class="p-2.5 rounded-xl bg-[#F5EDE0] dark:bg-[#25131D] border border-[#E8C995]/40 hover:bg-[#E8C995]/30 transition" title="البطاقة التالية">
            <i data-lucide="chevron-left" class="w-4 h-4"></i>
          </button>
        </div>

        <div class="flex items-center gap-2">
          <button onclick="rateFlashcard('hard')" class="px-3.5 py-2 bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 border border-red-300 dark:border-red-800 rounded-xl text-xs font-bold transition">
            <span>صعب 🔄</span>
          </button>
          <button onclick="rateFlashcard('easy')" class="px-4 py-2 bg-[#6C9D78] hover:bg-[#5b8765] text-white rounded-xl text-xs font-bold transition shadow">
            <span>سهل ومحفوظ (+5 نقاط) ✅</span>
          </button>
        </div>
      </div>
    </div>
  `;

  updateFlashcardDisplay();
}

function updateFlashcardDisplay() {
  const box = document.getElementById('flashcardBox');
  const counter = document.getElementById('fcCounter');
  if (!box || currentFilteredFlashcards.length === 0) {
    if (box) box.innerHTML = `<div class="m-auto text-center text-xs opacity-70">لا توجد بطاقات في هذا التصنيف حالياً. أضف بطاقتك الأولى!</div>`;
    return;
  }

  const card = currentFilteredFlashcards[activeFlashcardIdx];
  if (counter) counter.innerText = `${activeFlashcardIdx + 1} / ${currentFilteredFlashcards.length}`;

  if (!activeFlashcardFlipped) {
    box.innerHTML = `
      <div class="flex items-center justify-between">
        <span class="text-[11px] font-bold bg-[#E8C995]/25 text-[#731E3E] dark:text-[#E8C995] px-3 py-1 rounded-full border border-[#E8C995]/40">${card.badge || card.subject}</span>
        <span class="text-[11px] opacity-75 font-mono flex items-center gap-1">
          <i data-lucide="rotate-3d" class="w-3.5 h-3.5"></i> انقر للكشف عن الإجابة
        </span>
      </div>
      <div class="my-auto py-4 text-center">
        <p class="text-base sm:text-lg font-bold text-[#451C2B] dark:text-[#FCF8F1] leading-relaxed">${card.question}</p>
      </div>
      <div class="flex justify-between items-center text-[10px] opacity-60">
        <span>المادة: ${card.subject}</span>
        <span>السؤال</span>
      </div>
    `;
  } else {
    box.innerHTML = `
      <div class="flex items-center justify-between">
        <span class="text-[11px] font-bold bg-[#6C9D78]/20 text-[#6C9D78] dark:text-emerald-300 px-3 py-1 rounded-full border border-[#6C9D78]/40">الإجابة النموذجية 💡</span>
        <span class="text-[11px] text-[#6C9D78] font-mono flex items-center gap-1">
          <i data-lucide="check" class="w-3.5 h-3.5"></i> تم التحقق
        </span>
      </div>
      <div class="my-auto py-3 text-right">
        <p class="text-xs sm:text-sm text-[#451C2B] dark:text-[#F5EDE0] leading-relaxed whitespace-pre-line font-medium">${card.answer}</p>
      </div>
      <div class="flex justify-between items-center text-[10px] opacity-60">
        <span>انقر للعودة للسؤال</span>
        <span>${card.subject}</span>
      </div>
    `;
  }

  if (window.lucide) lucide.createIcons();
}

function flipActiveFlashcard() {
  activeFlashcardFlipped = !activeFlashcardFlipped;
  updateFlashcardDisplay();
}

function nextFlashcard() {
  if (currentFilteredFlashcards.length === 0) return;
  activeFlashcardIdx = (activeFlashcardIdx + 1) % currentFilteredFlashcards.length;
  activeFlashcardFlipped = false;
  updateFlashcardDisplay();
}

function prevFlashcard() {
  if (currentFilteredFlashcards.length === 0) return;
  activeFlashcardIdx = (activeFlashcardIdx - 1 + currentFilteredFlashcards.length) % currentFilteredFlashcards.length;
  activeFlashcardFlipped = false;
  updateFlashcardDisplay();
}

function rateFlashcard(type) {
  if (type === 'easy') {
    awardPoints(5, 'مراجعة بطاقة حفظ بنجاح 🃏');
    flashcardsReviewedCount++;
    localStorage.setItem('flashcardsReviewedCount', flashcardsReviewedCount.toString());
    showToast('رائع! تمت إضافة +5 نقاط إلى رصيدك 🌟');
  }
  nextFlashcard();
}

function filterFlashcardsBySubject(subj) {
  const all = getAllFlashcards();
  if (subj === 'الكل') {
    currentFilteredFlashcards = all;
  } else {
    currentFilteredFlashcards = all.filter(c => c.subject.includes(subj) || subj.includes(c.subject));
  }
  activeFlashcardIdx = 0;
  activeFlashcardFlipped = false;
  updateFlashcardDisplay();

  document.querySelectorAll('.fc-subj-btn').forEach(b => {
    if (b.innerText === subj) {
      b.classList.remove('bg-[#F5EDE0]', 'dark:bg-[#25131D]');
      b.classList.add('bg-[#731E3E]', 'text-[#F5EDE0]');
    } else {
      b.classList.add('bg-[#F5EDE0]', 'dark:bg-[#25131D]');
      b.classList.remove('bg-[#731E3E]', 'text-[#F5EDE0]');
    }
  });
}

function openAddFlashcardDialog() {
  const q = prompt('أدخل السؤال أو المصطلح الذي تريد حفظه:');
  if (!q) return;
  const a = prompt('أدخل الإجابة النموذجية أو التعريف الكامل:');
  if (!a) return;
  const s = prompt('حدد المادة (تاريخ / جغرافيا / شريعة / فلسفة / علوم / رياضيات):', 'تاريخ') || 'عام';

  const newCard = {
    id: 'fc-custom-' + Date.now(),
    subject: s,
    badge: 'بطاقتي المخصصة ✍️',
    question: q,
    answer: a
  };

  userFlashcards.push(newCard);
  localStorage.setItem('bac_user_flashcards', JSON.stringify(userFlashcards));
  currentFilteredFlashcards = getAllFlashcards();
  activeFlashcardIdx = currentFilteredFlashcards.length - 1;
  activeFlashcardFlipped = false;
  updateFlashcardDisplay();
  showToast('تمت إضافة بطاقتك الخاصة بنجاح! 🎯');
}

// --------------------------------------------------------------------------
// 2. محاكاة البكالوريا الرسمية (BAC Exam Simulator)
// --------------------------------------------------------------------------
function renderSimulatorView(container) {
  const userTrack = (profile && profile.track) ? profile.track : "علوم تجريبية";
  const trackData = BAC_SIMULATOR_DATA[userTrack] || BAC_SIMULATOR_DATA["علوم تجريبية"];
  const subjs = trackData.subjects;

  container.innerHTML = `
    <div class="space-y-5">
      <div class="flex items-center justify-between border-b border-[#E8C995]/30 pb-3">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-2xl bg-[#E8C995]/20 border border-[#E8C995]/40 flex items-center justify-center text-[#731E3E] dark:text-[#E8C995]">
            <i data-lucide="clock" class="w-5 h-5"></i>
          </div>
          <div>
            <h3 class="font-bold text-base text-[#451C2B] dark:text-[#FCF8F1]">محاكاة امتحان البكالوريا الحقيقي 🏛️</h3>
            <span class="text-[11px] opacity-70">اختبر نفسك في ظروف الامتحان الرسمي (الموضوع الأول vs الثاني + المؤقت الوزاري)</span>
          </div>
        </div>
      </div>

      <!-- إعداد جلسة المحاكاة -->
      <div id="simSetupBox" class="bg-[#F5EDE0]/60 dark:bg-[#25131D]/60 p-5 rounded-2xl border border-[#E8C995]/40 space-y-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div>
            <label class="block font-semibold mb-1 text-[#731E3E] dark:text-[#E8C995]">المادة الامتحانية</label>
            <select id="simSubjectSelect" onchange="renderSimulatorTopics()" class="w-full p-2.5 rounded-xl bg-[#FCF8F1] dark:bg-[#1f0e18] border border-[#E8C995]/40 outline-none">
              ${subjs.map((s, i) => `<option value="${i}">${s.name}</option>`).join('')}
            </select>
          </div>
          <div>
            <label class="block font-semibold mb-1 text-[#731E3E] dark:text-[#E8C995]">مدة الامتحان الرسمي</label>
            <div class="p-2.5 rounded-xl bg-[#FCF8F1] dark:bg-[#1f0e18] border border-[#E8C995]/40 font-mono">
              ${trackData.durationHours} ساعات ونصف (مع 30 دقيقة اختيار الموضوع)
            </div>
          </div>
        </div>

        <!-- اختيار بين الموضوعين -->
        <div class="space-y-2">
          <label class="block text-xs font-semibold text-[#731E3E] dark:text-[#E8C995]">اختر أحد الموضوعين للبدء:</label>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3" id="simTopicsPreview">
            <!-- يتم إدراج الموضوعين -->
          </div>
        </div>
      </div>

      <!-- مساحة الامتحان النشط -->
      <div id="simActiveBox" class="hidden space-y-4">
        <div class="bg-gradient-to-r from-[#731E3E] to-[#501426] text-[#F5EDE0] p-4 rounded-2xl border border-[#E8C995]/40 flex flex-wrap items-center justify-between gap-3 shadow-lg">
          <div class="flex items-center gap-3">
            <span class="w-3 h-3 rounded-full bg-red-400 animate-ping"></span>
            <div>
              <span class="text-xs font-bold block" id="simActiveTitle">الموضوع الأول جاري...</span>
              <span class="text-[10px] opacity-75">امتحان البكالوريا التجريبية الرسمية</span>
            </div>
          </div>

          <div class="flex items-center gap-3 font-mono">
            <span id="simTimerDisplay" class="text-2xl sm:text-3xl font-extrabold text-[#E8C995] bg-[#25131D]/80 px-4 py-1 rounded-xl border border-[#E8C995]/30">03:30:00</span>
            <button onclick="endSimulatorSession()" class="px-4 py-2 bg-red-800 hover:bg-red-900 text-white font-bold rounded-xl text-xs transition shadow">
              إنهاء وتسليم الورقة
            </button>
          </div>
        </div>

        <div id="simPaperContent" class="bg-[#FCF8F1] text-[#25131D] p-6 sm:p-8 rounded-2xl shadow-xl space-y-4 border border-[#E8C995]/50 leading-relaxed font-sans">
          <!-- محتوى ورقة الامتحان الرسمي -->
        </div>
      </div>
    </div>
  `;

  renderSimulatorTopics();
}

function renderSimulatorTopics() {
  const userTrack = (profile && profile.track) ? profile.track : "علوم تجريبية";
  const trackData = BAC_SIMULATOR_DATA[userTrack] || BAC_SIMULATOR_DATA["علوم تجريبية"];
  const subjIdx = parseInt(document.getElementById('simSubjectSelect')?.value || '0');
  const subj = trackData.subjects[subjIdx];
  const container = document.getElementById('simTopicsPreview');
  if (!container || !subj) return;

  container.innerHTML = `
    <div onclick="startSimulatorSession(1, ${subjIdx})" class="p-4 rounded-2xl bg-[#FCF8F1] dark:bg-[#1f0e18] border border-[#E8C995]/40 hover:border-[#731E3E] dark:hover:border-[#E8C995] cursor-pointer transition space-y-2 group shadow-sm">
      <div class="flex justify-between items-center">
        <span class="text-xs font-bold text-[#731E3E] dark:text-[#E8C995]">الموضوع الأول (Sujet 1) 📜</span>
        <span class="text-[10px] bg-[#E8C995]/25 px-2 py-0.5 rounded font-bold">اختيار الموضوع ↗</span>
      </div>
      <p class="text-[11px] opacity-80 line-clamp-3">${subj.sujet1.title}</p>
    </div>

    <div onclick="startSimulatorSession(2, ${subjIdx})" class="p-4 rounded-2xl bg-[#FCF8F1] dark:bg-[#1f0e18] border border-[#E8C995]/40 hover:border-[#731E3E] dark:hover:border-[#E8C995] cursor-pointer transition space-y-2 group shadow-sm">
      <div class="flex justify-between items-center">
        <span class="text-xs font-bold text-[#731E3E] dark:text-[#E8C995]">الموضوع الثاني (Sujet 2) 📜</span>
        <span class="text-[10px] bg-[#E8C995]/25 px-2 py-0.5 rounded font-bold">اختيار الموضوع ↗</span>
      </div>
      <p class="text-[11px] opacity-80 line-clamp-3">${subj.sujet2.title}</p>
    </div>
  `;
}

function startSimulatorSession(topicNum, subjIdx) {
  const userTrack = (profile && profile.track) ? profile.track : "علوم تجريبية";
  const trackData = BAC_SIMULATOR_DATA[userTrack] || BAC_SIMULATOR_DATA["علوم تجريبية"];
  const subj = trackData.subjects[subjIdx];
  const topic = topicNum === 1 ? subj.sujet1 : subj.sujet2;

  document.getElementById('simSetupBox')?.classList.add('hidden');
  const activeBox = document.getElementById('simActiveBox');
  if (activeBox) activeBox.classList.remove('hidden');

  document.getElementById('simActiveTitle').innerText = `${subj.name} - ${topic.title}`;
  simulatorSecondsLeft = Math.floor(trackData.durationHours * 3600);

  const paper = document.getElementById('simPaperContent');
  if (paper) {
    paper.innerHTML = `
      <div class="text-center border-b-2 border-gray-800 pb-4 mb-4 space-y-1">
        <span class="text-xs font-bold block">الجمهورية الجزائرية الديمقراطية الشعبية</span>
        <span class="text-xs block">وزارة التربية الوطنية - امتحان شهادة البكالوريا</span>
        <div class="flex justify-between text-xs font-bold pt-2 border-t border-gray-300 mt-2">
          <span>الشعبة: ${userTrack}</span>
          <span>اختبار مادة: ${subj.name}</span>
          <span>المدة: ${trackData.durationHours} سا</span>
        </div>
      </div>

      <div class="space-y-4 text-xs sm:text-sm">
        <h4 class="font-bold text-base text-[#731E3E] border-r-4 border-[#731E3E] pr-2">${topic.title}</h4>
        ${Object.keys(topic).filter(k => k.startsWith('ex')).map((k, i) => `
          <div class="p-3.5 bg-gray-50 rounded-xl border border-gray-200 space-y-1">
            <p class="font-medium text-gray-800 leading-relaxed">${topic[k]}</p>
          </div>
        `).join('')}
      </div>

      <div class="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 mt-4 flex items-center gap-2">
        <i data-lucide="info" class="w-4 h-4 shrink-0"></i>
        <span>استعمل أوراقك ومسوداتك واكتب الحل كاملاً، وعند الانتهاء انقر على الزر بالأعلى لكسب نقاط الإنجاز (+50 نقطة).</span>
      </div>
    `;
  }

  clearInterval(simulatorTimerInterval);
  simulatorTimerInterval = setInterval(() => {
    if (simulatorSecondsLeft > 0) {
      simulatorSecondsLeft--;
      const hrs = Math.floor(simulatorSecondsLeft / 3600);
      const mins = Math.floor((simulatorSecondsLeft % 3600) / 60);
      const secs = simulatorSecondsLeft % 60;
      const display = document.getElementById('simTimerDisplay');
      if (display) {
        display.innerText = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      }
    } else {
      endSimulatorSession();
    }
  }, 1000);

  if (window.lucide) lucide.createIcons();
}

function endSimulatorSession() {
  clearInterval(simulatorTimerInterval);
  awardPoints(50, 'إتمام محاكاة موضوع بكالوريا رسمي 🏛️');
  showToast('تهانينا على الانضباط والإصرار! تم منحك +50 نقطة إنجاز 🎓');
  closeToolModal();
}

// --------------------------------------------------------------------------
// 3. ألعاب وتحديات البكالوريا (BAC Mind Games)
// --------------------------------------------------------------------------
function renderGamesView(container) {
  container.innerHTML = `
    <div class="space-y-5">
      <div class="flex items-center justify-between border-b border-[#E8C995]/30 pb-3">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-2xl bg-[#E8C995]/20 border border-[#E8C995]/40 flex items-center justify-center text-[#731E3E] dark:text-[#E8C995]">
            <i data-lucide="gamepad-2" class="w-5 h-5"></i>
          </div>
          <div>
            <h3 class="font-bold text-base text-[#451C2B] dark:text-[#FCF8F1]">ألعاب الذاكرة وسرعة البديهة للبكالوريا 🎮</h3>
            <span class="text-[11px] opacity-70">راجع معلوماتك بأسلوب ممتع لكسر الروتين وتنشيط الدماغ</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <!-- لعبة 1: مطابقة التاريخ والحدث -->
        <div class="p-5 rounded-2xl bg-[#F5EDE0]/60 dark:bg-[#25131D]/60 border border-[#E8C995]/40 space-y-3 flex flex-col justify-between">
          <div class="space-y-2">
            <div class="w-10 h-10 rounded-xl bg-[#E8C995]/20 text-[#731E3E] dark:text-[#E8C995] flex items-center justify-center">
              <i data-lucide="sparkles" class="w-5 h-5"></i>
            </div>
            <h4 class="font-bold text-sm">سباق مطابقة التواريخ والأحداث</h4>
            <p class="text-xs opacity-75 leading-relaxed">اربط التواريخ المعلمية بأحداثها الصحيحة في أسرع وقت واكسر رقمك القياسي.</p>
          </div>
          <button onclick="startMemoryMatchGame()" class="w-full py-2.5 bg-[#731E3E] hover:bg-[#501426] text-[#F5EDE0] font-bold rounded-xl text-xs transition shadow">
            ابدأ لعبة المطابقة
          </button>
        </div>

        <!-- لعبة 2: سباق صح أو خطأ السريع -->
        <div class="p-5 rounded-2xl bg-[#F5EDE0]/60 dark:bg-[#25131D]/60 border border-[#E8C995]/40 space-y-3 flex flex-col justify-between">
          <div class="space-y-2">
            <div class="w-10 h-10 rounded-xl bg-[#E8C995]/20 text-[#731E3E] dark:text-[#E8C995] flex items-center justify-center">
              <i data-lucide="zap" class="w-5 h-5"></i>
            </div>
            <h4 class="font-bold text-sm">تحدي الـ 45 ثانية (صح أم خطأ)</h4>
            <p class="text-xs opacity-75 leading-relaxed">سلسلة معلومات سريعة في المنهاج، حدد صحتها في ثوانٍ لتحصد النقاط.</p>
          </div>
          <button onclick="startTrueFalseBlitzGame()" class="w-full py-2.5 bg-[#E8C995] hover:bg-[#F4DFBE] text-[#451C2B] font-bold rounded-xl text-xs transition shadow">
            ابدأ تحدي الـ 45 ثانية
          </button>
        </div>
      </div>

      <!-- مساحة اللعبة النشطة -->
      <div id="gamePlayArea" class="hidden p-5 rounded-2xl bg-[#FCF8F1] dark:bg-[#1f0e18] border border-[#E8C995]/40 space-y-4">
        <!-- تدرج تفاعلات الألعاب -->
      </div>
    </div>
  `;
}

// مطابقة التواريخ والأحداث
let matchGameCards = [];
let matchFlippedCards = [];
let matchMatchedPairs = 0;

function startMemoryMatchGame() {
  const area = document.getElementById('gamePlayArea');
  if (!area) return;
  area.classList.remove('hidden');

  const pairs = [
    { id: 1, text: "01 نوفمبر 1954", pairId: 1 },
    { id: 2, text: "اندلاع الثورة التحريرية", pairId: 1 },
    { id: 3, text: "08 ماي 1945", pairId: 2 },
    { id: 4, text: "مجازر 8 ماي الدامية", pairId: 2 },
    { id: 5, text: "20 أوت 1956", pairId: 3 },
    { id: 6, text: "انعقاد مؤتمر الصومام", pairId: 3 },
    { id: 7, text: "05 جويلية 1962", pairId: 4 },
    { id: 8, text: "عيد استقلال الجزائر", pairId: 4 }
  ];

  matchGameCards = pairs.sort(() => Math.random() - 0.5);
  matchFlippedCards = [];
  matchMatchedPairs = 0;

  area.innerHTML = `
    <div class="flex justify-between items-center border-b border-[#E8C995]/20 pb-3">
      <span class="text-xs font-bold text-[#731E3E] dark:text-[#E8C995]">لعبة المطابقة: طابق التاريخ مع الحدث الصحيح</span>
      <span id="matchScoreDisplay" class="text-xs font-mono font-bold text-[#6C9D78]">الأزواج: 0 / 4</span>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
      ${matchGameCards.map((c, i) => `
        <div onclick="handleCardClick(${i})" id="matchCard-${i}" class="min-h-[75px] sm:min-h-[85px] p-2.5 rounded-xl bg-[#F5EDE0] dark:bg-[#25131D] border border-[#E8C995]/40 flex items-center justify-center cursor-pointer hover:border-[#731E3E] transition select-none text-xs font-bold">
          <span>❓ انقر للكشف</span>
        </div>
      `).join('')}
    </div>
  `;
}

function handleCardClick(idx) {
  if (matchFlippedCards.length >= 2 || matchFlippedCards.includes(idx)) return;

  const cardElement = document.getElementById(`matchCard-${idx}`);
  const cardData = matchGameCards[idx];
  if (!cardElement) return;

  cardElement.innerHTML = `<span class="text-[#731E3E] dark:text-[#E8C995] leading-tight font-bold">${cardData.text}</span>`;
  cardElement.classList.add('bg-[#E8C995]/30', 'border-[#731E3E]');
  matchFlippedCards.push(idx);

  if (matchFlippedCards.length === 2) {
    const card1 = matchGameCards[matchFlippedCards[0]];
    const card2 = matchGameCards[matchFlippedCards[1]];

    if (card1.pairId === card2.pairId) {
      matchMatchedPairs++;
      document.getElementById('matchScoreDisplay').innerText = `الأزواج: ${matchMatchedPairs} / 4`;
      matchFlippedCards.forEach(i => {
        document.getElementById(`matchCard-${i}`).classList.add('bg-[#6C9D78]', 'text-white', 'border-[#6C9D78]');
      });
      matchFlippedCards = [];

      if (matchMatchedPairs === 4) {
        awardPoints(25, 'الفوز في لعبة مطابقة التواريخ 🏆');
        showToast('مبروك! طابقت كافة التواريخ بنجاح وكسبت +25 نقطة! 🎉');
      }
    } else {
      setTimeout(() => {
        matchFlippedCards.forEach(i => {
          const el = document.getElementById(`matchCard-${i}`);
          if (el) {
            el.innerHTML = `<span>❓ انقر للكشف</span>`;
            el.classList.remove('bg-[#E8C995]/30', 'border-[#731E3E]');
          }
        });
        matchFlippedCards = [];
      }, 900);
    }
  }
}

// لعبة صح أم خطأ السريعة
let tfGameTimer = null;
let tfSeconds = 45;
let tfScore = 0;
let tfCurrentQIdx = 0;

const TF_QUESTIONS = [
  { q: "انعقد مؤتمر باندونغ في أندونيسيا عام 1955.", ans: true },
  { q: "مقر عملية استنساخ الـ ARNm هو الهيولى في الخلايا حقيقية النواة.", ans: false },
  { q: "القانون الثاني لنيوتن ينص على أن مجموع القوى الخارجية يساوي الكتلة في التسارع.", ans: true },
  { q: "مبدأ ترومان تم الإعلان عنه عام 1962 في كوبا.", ans: false },
  { q: "المتتالية الهندسية التي أساسها 2 وحدها الأول 3 يكون حدها العام 3 * 2^n.", ans: true },
  { q: "الضروريات الخمس في الشريعة الإسلامية تقدم فيها النفس على الدين عند التعارض.", ans: false },
  { q: "تأميم المحروقات في الجزائر كان في 24 فيفري 1971.", ans: true }
];

function startTrueFalseBlitzGame() {
  const area = document.getElementById('gamePlayArea');
  if (!area) return;
  area.classList.remove('hidden');

  tfSeconds = 45;
  tfScore = 0;
  tfCurrentQIdx = 0;

  area.innerHTML = `
    <div class="flex justify-between items-center border-b border-[#E8C995]/20 pb-3">
      <div class="flex items-center gap-2">
        <span class="text-xs font-bold text-[#731E3E] dark:text-[#E8C995]">سباق الـ 45 ثانية</span>
        <span id="tfTimer" class="font-mono text-xs font-bold bg-[#E8C995]/20 text-[#731E3E] dark:text-[#E8C995] px-2.5 py-0.5 rounded-full">45 ثانية</span>
      </div>
      <span id="tfScoreDisplay" class="font-mono text-xs font-bold text-[#6C9D78]">النقاط: 0</span>
    </div>

    <div id="tfQuestionBox" class="p-6 rounded-2xl bg-[#F5EDE0] dark:bg-[#25131D] border border-[#E8C995]/40 text-center min-h-[110px] flex items-center justify-center">
      <p id="tfQuestionText" class="text-sm sm:text-base font-bold text-[#451C2B] dark:text-[#FCF8F1] leading-relaxed"></p>
    </div>

    <div class="grid grid-cols-2 gap-3 pt-2">
      <button onclick="handleTfAnswer(true)" class="py-3 bg-[#6C9D78] hover:bg-[#5a8665] text-white font-bold rounded-xl text-xs transition shadow flex items-center justify-center gap-1.5">
        <i data-lucide="check" class="w-4 h-4"></i> صحيح (Vrai)
      </button>
      <button onclick="handleTfAnswer(false)" class="py-3 bg-red-800 hover:bg-red-900 text-white font-bold rounded-xl text-xs transition shadow flex items-center justify-center gap-1.5">
        <i data-lucide="x" class="w-4 h-4"></i> خطأ (Faux)
      </button>
    </div>
  `;

  renderTfQuestion();

  clearInterval(tfGameTimer);
  tfGameTimer = setInterval(() => {
    if (tfSeconds > 0) {
      tfSeconds--;
      const t = document.getElementById('tfTimer');
      if (t) t.innerText = `${tfSeconds} ثانية`;
    } else {
      clearInterval(tfGameTimer);
      awardPoints(tfScore * 5, 'سباق صح أو خطأ السريع ⚡');
      showToast(`انتهى الوقت! كسبت ${tfScore * 5} نقطة من ${tfScore} إجابة صحيحة 🎯`);
      const qBox = document.getElementById('tfQuestionBox');
      if (qBox) qBox.innerHTML = `<span class="text-base font-bold text-[#6C9D78]">🎉 نتيجتك: ${tfScore} إجابات صحيحة (+${tfScore * 5} نقطة)!</span>`;
    }
  }, 1000);

  if (window.lucide) lucide.createIcons();
}

function renderTfQuestion() {
  if (tfCurrentQIdx >= TF_QUESTIONS.length) tfCurrentQIdx = 0;
  const q = TF_QUESTIONS[tfCurrentQIdx];
  const el = document.getElementById('tfQuestionText');
  if (el) el.innerText = q.q;
}

function handleTfAnswer(userAns) {
  const q = TF_QUESTIONS[tfCurrentQIdx];
  if (userAns === q.ans) {
    tfScore++;
    document.getElementById('tfScoreDisplay').innerText = `النقاط: ${tfScore}`;
  }
  tfCurrentQIdx++;
  renderTfQuestion();
}

// --------------------------------------------------------------------------
// 4. الجدول الأسبوعي التفاعلي (Weekly Schedule Planner)
// --------------------------------------------------------------------------
function renderScheduleView(container) {
  const userTrack = (profile && profile.track) ? profile.track : "علوم تجريبية";
  if (!userWeeklySchedule) {
    userWeeklySchedule = SCHEDULE_PRESETS[userTrack] || SCHEDULE_PRESETS["علوم تجريبية"];
  }

  container.innerHTML = `
    <div class="space-y-4">
      <div class="flex flex-wrap items-center justify-between border-b border-[#E8C995]/30 pb-3 gap-2">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-2xl bg-[#E8C995]/20 border border-[#E8C995]/40 flex items-center justify-center text-[#731E3E] dark:text-[#E8C995]">
            <i data-lucide="calendar" class="w-5 h-5"></i>
          </div>
          <div>
            <h3 class="font-bold text-base text-[#451C2B] dark:text-[#FCF8F1]">الجدول الأسبوعي الذكي للمراجعة 🗓️</h3>
            <span class="text-[11px] opacity-70">خطة أسبوعية متوازنة لشعبة: ${userTrack}</span>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <button onclick="resetSchedulePreset('${userTrack}')" class="px-3 py-1.5 bg-[#F5EDE0] dark:bg-[#25131D] border border-[#E8C995]/40 hover:bg-[#E8C995]/30 rounded-xl text-xs font-bold transition">
            استرجاع الجدول النموذجي
          </button>
        </div>
      </div>

      <!-- جدول الأيام -->
      <div class="overflow-x-auto">
        <table class="w-full text-right text-xs border-collapse">
          <thead>
            <tr class="bg-[#F5EDE0] dark:bg-[#25131D] border-b border-[#E8C995]/30">
              <th class="p-3 font-bold rounded-tr-xl">اليوم</th>
              <th class="p-3 font-bold">الفجر (05:00 - 06:30) 🌅</th>
              <th class="p-3 font-bold">العصر (16:30 - 18:30) ☀️</th>
              <th class="p-3 font-bold rounded-tl-xl">المساء (20:00 - 22:30) 🌙</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#E8C995]/20">
            ${userWeeklySchedule.map((row, idx) => `
              <tr class="hover:bg-[#E8C995]/10 transition">
                <td class="p-3 font-bold text-[#731E3E] dark:text-[#E8C995] whitespace-nowrap bg-[#F5EDE0]/40 dark:bg-[#25131D]/40">${row.day}</td>
                <td class="p-3 cursor-pointer hover:bg-[#E8C995]/20 transition" onclick="editScheduleCell(${idx}, 'dawn')">
                  ${row.dawn} ✏️
                </td>
                <td class="p-3 cursor-pointer hover:bg-[#E8C995]/20 transition" onclick="editScheduleCell(${idx}, 'afternoon')">
                  ${row.afternoon} ✏️
                </td>
                <td class="p-3 cursor-pointer hover:bg-[#E8C995]/20 transition" onclick="editScheduleCell(${idx}, 'evening')">
                  ${row.evening} ✏️
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <div class="p-3.5 bg-[#F5EDE0]/70 dark:bg-[#25131D]/70 rounded-xl border border-[#E8C995]/30 text-xs flex items-center justify-between">
        <span>💡 انقر على أي خانة لتعديل المادة أو التوقيت. يتم حفظ التعديلات تلقائياً.</span>
        <button onclick="printSchedule()" class="px-3.5 py-1.5 bg-[#731E3E] text-[#F5EDE0] hover:bg-[#501426] font-bold rounded-lg transition text-[11px]">
          طباعة / حفظ 🖨️
        </button>
      </div>
    </div>
  `;
}

function editScheduleCell(dayIdx, timeSlot) {
  const currentVal = userWeeklySchedule[dayIdx][timeSlot];
  const newVal = prompt('عدل النشاط أو المادة لهذه الفترة:', currentVal);
  if (newVal !== null && newVal.trim() !== '') {
    userWeeklySchedule[dayIdx][timeSlot] = newVal.trim();
    localStorage.setItem('bac_weekly_schedule', JSON.stringify(userWeeklySchedule));
    renderScheduleView(document.getElementById('masterToolModalContent'));
    showToast('تم تحديث الجدول بنجاح 🗓️');
  }
}

function resetSchedulePreset(track) {
  userWeeklySchedule = SCHEDULE_PRESETS[track] || SCHEDULE_PRESETS["علوم تجريبية"];
  localStorage.setItem('bac_weekly_schedule', JSON.stringify(userWeeklySchedule));
  renderScheduleView(document.getElementById('masterToolModalContent'));
  showToast('تمت استعادة الجدول النموذجي بنجاح.');
}

function printSchedule() {
  window.print();
}

// --------------------------------------------------------------------------
// 5. نظام التحفيظ النشط (Active Memorization)
// --------------------------------------------------------------------------
function renderMemorizeView(container) {
  container.innerHTML = `
    <div class="space-y-4">
      <div class="flex items-center justify-between border-b border-[#E8C995]/30 pb-3">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-2xl bg-[#E8C995]/20 border border-[#E8C995]/40 flex items-center justify-center text-[#731E3E] dark:text-[#E8C995]">
            <i data-lucide="brain" class="w-5 h-5"></i>
          </div>
          <div>
            <h3 class="font-bold text-base text-[#451C2B] dark:text-[#FCF8F1]">نظام التحفيظ النشط والإخفاء التدريجي 🧠</h3>
            <span class="text-[11px] opacity-70">طريقة الذاكرة الفائقة: اخفِ الكلمات واسترجعها من عقلك لتثبيت الحفظ 100%</span>
          </div>
        </div>
      </div>

      <!-- اختيار النص -->
      <div class="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        ${MEMORIZATION_TOPICS.map((t, i) => `
          <button onclick="selectMemorizeTopic(${i})" id="memTab-${i}" class="px-3.5 py-1.5 rounded-full ${i === 0 ? 'bg-[#731E3E] text-[#F5EDE0] font-bold' : 'bg-[#F5EDE0] dark:bg-[#25131D] border border-[#E8C995]/30'} whitespace-nowrap transition">
            ${t.title}
          </button>
        `).join('')}
      </div>

      <!-- بطاقة النص التفاعلي -->
      <div id="memorizeBox" class="p-6 rounded-3xl bg-[#F5EDE0]/50 dark:bg-[#25131D]/50 border border-[#E8C995]/40 space-y-4 shadow-sm">
        <!-- يتم تحميل النص التفاعلي هنا -->
      </div>
    </div>
  `;

  selectMemorizeTopic(0);
}

let activeMemTopicIdx = 0;
let memMode = 'full';

function selectMemorizeTopic(idx) {
  activeMemTopicIdx = idx;
  memMode = 'full';
  document.querySelectorAll('[id^="memTab-"]').forEach((b, i) => {
    if (i === idx) {
      b.className = 'px-3.5 py-1.5 rounded-full bg-[#731E3E] text-[#F5EDE0] font-bold whitespace-nowrap transition';
    } else {
      b.className = 'px-3.5 py-1.5 rounded-full bg-[#F5EDE0] dark:bg-[#25131D] border border-[#E8C995]/30 whitespace-nowrap transition';
    }
  });

  renderActiveMemorizeBox();
}

function renderActiveMemorizeBox() {
  const box = document.getElementById('memorizeBox');
  const t = MEMORIZATION_TOPICS[activeMemTopicIdx];
  if (!box || !t) return;

  let textHtml = '';
  if (memMode === 'full') {
    textHtml = `<p class="text-sm sm:text-base leading-loose text-[#451C2B] dark:text-[#FCF8F1] font-medium text-justify">${t.fullText}</p>`;
  } else {
    const clozeFormatted = t.clozeText.replace(/\[(.*?)\]/g, (match, word) => {
      return `<button onclick="this.classList.toggle('text-transparent'); this.classList.toggle('bg-[#E8C995]');" class="inline-block px-2 py-0.5 mx-1 rounded bg-[#E8C995]/30 border border-[#E8C995] text-transparent hover:border-[#731E3E] font-bold transition select-none cursor-pointer">${word}</button>`;
    });
    textHtml = `<p class="text-sm sm:text-base leading-loose text-[#451C2B] dark:text-[#FCF8F1] font-medium text-justify">${clozeFormatted}</p>`;
  }

  box.innerHTML = `
    <div class="flex items-center justify-between border-b border-[#E8C995]/20 pb-3">
      <span class="text-xs font-bold text-[#731E3E] dark:text-[#E8C995] bg-[#E8C995]/20 px-3 py-1 rounded-full border border-[#E8C995]/30">${t.category}</span>
      <div class="flex items-center gap-2">
        <button onclick="toggleMemMode('full')" class="px-3 py-1 rounded-lg text-xs font-bold transition ${memMode === 'full' ? 'bg-[#731E3E] text-[#F5EDE0]' : 'bg-[#F5EDE0] dark:bg-[#25131D]'}">النص الكامل 📖</button>
        <button onclick="toggleMemMode('cloze')" class="px-3 py-1 rounded-lg text-xs font-bold transition ${memMode === 'cloze' ? 'bg-[#731E3E] text-[#F5EDE0]' : 'bg-[#F5EDE0] dark:bg-[#25131D]'}">وضع الإخفاء 🙈</button>
      </div>
    </div>

    <div class="py-2">
      ${textHtml}
    </div>

    <div class="pt-3 border-t border-[#E8C995]/20 flex flex-wrap items-center justify-between gap-2 text-xs">
      <span class="opacity-70">
        ${memMode === 'cloze' ? '💡 انقر على الكلمات المخفية للتحقق من حفظك.' : 'اقرأ النص جيداً بتركيز 3 مرات ثم انتقل لوضع الإخفاء.'}
      </span>
      <button onclick="awardPoints(15, 'إتمام جلسة تحفيظ نشط 🧠'); showToast('أحسنت! أضفت +15 نقطة لرصيدك 🎉');" class="px-4 py-2 bg-[#6C9D78] hover:bg-[#5b8765] text-white font-bold rounded-xl transition shadow">
        حفظت النص كاملاً (+15 نقطة) ✅
      </button>
    </div>
  `;
}

function toggleMemMode(mode) {
  memMode = mode;
  renderActiveMemorizeBox();
}

// --------------------------------------------------------------------------
// 6. مرشد البكالوريا الذكي (Smart Mentor)
// --------------------------------------------------------------------------
function renderMentorView(container) {
  const name = (profile && profile.firstName) ? profile.firstName : "يا بطل";
  const userTrack = (profile && profile.track) ? profile.track : "علوم تجريبية";

  container.innerHTML = `
    <div class="space-y-4">
      <div class="flex items-center justify-between border-b border-[#E8C995]/30 pb-3">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-2xl bg-[#E8C995]/20 border border-[#E8C995]/40 flex items-center justify-center text-[#731E3E] dark:text-[#E8C995]">
            <i data-lucide="compass" class="w-5 h-5"></i>
          </div>
          <div>
            <h3 class="font-bold text-base text-[#451C2B] dark:text-[#FCF8F1]">مرشد البكالوريا المخصص 🎓</h3>
            <span class="text-[11px] opacity-70">توجيه أكاديمي ونفسي مبني على إحصائياتك وشعبتك</span>
          </div>
        </div>
      </div>

      <!-- رسالة المرشد المخصصة -->
      <div class="p-5 rounded-2xl bg-gradient-to-r from-[#F5EDE0] to-[#FCF8F1] dark:from-[#321323] dark:to-[#25131D] border border-[#E8C995]/40 space-y-3">
        <div class="flex items-center gap-2 text-[#731E3E] dark:text-[#E8C995] font-bold text-xs">
          <i data-lucide="sparkles" class="w-4 h-4"></i>
          <span>تشخيص المرشد لحالتك الدراسية (${name} - ${userTrack})</span>
        </div>
        <p class="text-xs sm:text-sm leading-relaxed font-medium">
          أهلاً ${name}، إحصائياتك توضح التزامك الممتاز، ولكن للوصول إلى معدل 16+ في البكالوريا، تذكر القاعدة الذهبية:
          <span class="block text-[#731E3E] dark:text-[#E8C995] font-bold mt-1">"المواد الأساسية تمنحك النجاح، والمواد الثانوية (الفلسفة، الشريعة، واللغات) هي التي تصنع رتبة الامتياز والتفوق الوطني."</span>
        </p>
      </div>

      <!-- النصائح الأربع الذهبية -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div class="p-4 rounded-xl bg-[#F5EDE0]/60 dark:bg-[#25131D]/60 border border-[#E8C995]/30 space-y-1.5">
          <h4 class="font-bold text-[#731E3E] dark:text-[#E8C995] flex items-center gap-1.5">
            <i data-lucide="target" class="w-4 h-4"></i> لا تعيد حل التمارين السهلة
          </h4>
          <p class="opacity-80 leading-relaxed">كل تمرين تحله يجب أن يضيف لك فكرة جديدة. إذا كان التمرين مكرراً تجاوزه فوراً واستثمر وقتك.</p>
        </div>

        <div class="p-4 rounded-xl bg-[#F5EDE0]/60 dark:bg-[#25131D]/60 border border-[#E8C995]/30 space-y-1.5">
          <h4 class="font-bold text-[#731E3E] dark:text-[#E8C995] flex items-center gap-1.5">
            <i data-lucide="moon" class="w-4 h-4"></i> النوم سلاحك الخفي
          </h4>
          <p class="opacity-80 leading-relaxed">الدماغ لا يقوم بتخزين المعلومات في الذاكرة طويلة المدى إلا أثناء النوم العميق. السهر الطويل يدمر استرجاع المعلومات يوم الامتحان.</p>
        </div>

        <div class="p-4 rounded-xl bg-[#F5EDE0]/60 dark:bg-[#25131D]/60 border border-[#E8C995]/30 space-y-1.5">
          <h4 class="font-bold text-[#731E3E] dark:text-[#E8C995] flex items-center gap-1.5">
            <i data-lucide="book-check" class="w-4 h-4"></i> مصطلحات الدليل الوزاري
          </h4>
          <p class="opacity-80 leading-relaxed">في التصحيح النموذجي، المصحح يبحث عن كلمات مفتاحية محددة. حفظ المنهجية الرسمية أهم من الكتابة الإنشائية الطويلة.</p>
        </div>

        <div class="p-4 rounded-xl bg-[#F5EDE0]/60 dark:bg-[#25131D]/60 border border-[#E8C995]/30 space-y-1.5">
          <h4 class="font-bold text-[#731E3E] dark:text-[#E8C995] flex items-center gap-1.5">
            <i data-lucide="shield" class="w-4 h-4"></i> الابتعاد عن المقارنات السامة
          </h4>
          <p class="opacity-80 leading-relaxed">لا تقارن بدايتك بمواسم تفوق غيرك. رحلتك فردية وهدفك الوحيد هو أن تكون اليوم أفضل من نفسك بالأمس ولو بنسبة 1%.</p>
        </div>
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// 7. مساعد الذكاء الاصطناعي للبكالوريا (BAC AI Assistant)
// --------------------------------------------------------------------------
function renderAIView(container) {
  container.innerHTML = `
    <div class="space-y-4">
      <div class="flex items-center justify-between border-b border-[#E8C995]/30 pb-3">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-2xl bg-[#E8C995]/20 border border-[#E8C995]/40 flex items-center justify-center text-[#731E3E] dark:text-[#E8C995]">
            <i data-lucide="bot" class="w-5 h-5"></i>
          </div>
          <div>
            <h3 class="font-bold text-base text-[#451C2B] dark:text-[#FCF8F1]">مساعد الذكاء الاصطناعي للبكالوريا 🤖</h3>
            <span class="text-[11px] opacity-70">توليد خطط المقالات، تبسيط القوانين، ومساعدة منهجية فورية</span>
          </div>
        </div>
      </div>

      <!-- أزرار القوالب الجاهزة السريعة -->
      <div class="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
        <button onclick="askAIPrompt('خطة مقالة فلسفية')" class="px-3.5 py-1.5 rounded-xl bg-[#F5EDE0] dark:bg-[#25131D] border border-[#E8C995]/40 hover:bg-[#E8C995]/20 whitespace-nowrap transition font-bold">
          خطة مقالة فلسفية ✍️
        </button>
        <button onclick="askAIPrompt('تفسير الاستجابة المناعية')" class="px-3.5 py-1.5 rounded-xl bg-[#F5EDE0] dark:bg-[#25131D] border border-[#E8C995]/40 hover:bg-[#E8C995]/20 whitespace-nowrap transition font-bold">
          شرح المناعة الخلطية والخلوية 🧬
        </button>
        <button onclick="askAIPrompt('منهجية حل مسألة دوال')" class="px-3.5 py-1.5 rounded-xl bg-[#F5EDE0] dark:bg-[#25131D] border border-[#E8C995]/40 hover:bg-[#E8C995]/20 whitespace-nowrap transition font-bold">
          خطوات دراسة دالة BAC 📐
        </button>
        <button onclick="askAIPrompt('نصائح إدارة الوقت')" class="px-3.5 py-1.5 rounded-xl bg-[#F5EDE0] dark:bg-[#25131D] border border-[#E8C995]/40 hover:bg-[#E8C995]/20 whitespace-nowrap transition font-bold">
          تنظيم وقت المراجعة ⏱️
        </button>
      </div>

      <!-- سجل المحادثة -->
      <div id="aiChatBox" class="p-4 sm:p-5 rounded-2xl bg-[#FCF8F1] dark:bg-[#1f0e18] border border-[#E8C995]/40 min-h-[220px] max-h-[300px] overflow-y-auto space-y-3 text-xs leading-relaxed">
        <div class="p-3 bg-[#F5EDE0] dark:bg-[#25131D] rounded-xl border border-[#E8C995]/30">
          👋 أهلاً بك! أنا مساعدك الذكي الخاص ببرنامج البكالوريا الجزائري. اختر أحد القوالب الجاهزة أو اكتب سؤالك بالأسفل للحصول على شرح منهجي فوري.
        </div>
      </div>

      <!-- صندوق إدخال السؤال -->
      <form onsubmit="handleAIChatSubmit(event)" class="flex gap-2">
        <input type="text" id="aiInputPrompt" placeholder="اكتب سؤالك (مثال: اشرح لي قانون نيوتن الثاني بأسلوب مبسط)..." required class="flex-1 p-3 rounded-xl bg-[#FCF8F1] dark:bg-[#1f0e18] border border-[#E8C995]/40 text-xs outline-none focus:border-[#731E3E]">
        <button type="submit" class="px-5 py-3 bg-[#731E3E] hover:bg-[#501426] text-[#F5EDE0] font-bold rounded-xl text-xs transition shadow flex items-center gap-1.5">
          <i data-lucide="send" class="w-4 h-4"></i>
          <span>إرسال</span>
        </button>
      </form>
    </div>
  `;
}

function askAIPrompt(type) {
  const input = document.getElementById('aiInputPrompt');
  if (input) {
    input.value = type;
    handleAIChatSubmit(new Event('submit'));
  }
}

function handleAIChatSubmit(e) {
  if (e && e.preventDefault) e.preventDefault();
  const input = document.getElementById('aiInputPrompt');
  const chatBox = document.getElementById('aiChatBox');
  if (!input || !chatBox || !input.value.trim()) return;

  const userQuery = input.value.trim();
  input.value = '';

  chatBox.innerHTML += `
    <div class="p-3 bg-[#731E3E] text-[#F5EDE0] font-medium rounded-xl text-left">
      ${userQuery}
    </div>
  `;

  let response = '';
  if (userQuery.includes('فلسف') || userQuery.includes('خطة')) {
    response = `📝 **خطة مقالة فلسفية بالمنهجية الجدلية الرسمية:**
1. **طرح المشكلة (المقدمة):** مدخل عام حول الموضوع، إبراز العناد الفلسفي بين الموقفين، وصياغة الإشكال بدقة.
2. **محاولة حل المشكلة:**
   - **الموقف الأول:** عرض الأطروحة + الحجج والبراهين + أقوال الفلاسفة.
   - **نقد الموقف الأول:** بيان المبالغة والقصور في موقفهم.
   - **الموقف الثاني (النقيض):** عرض الأطروحة المعارضة + الحجج + الأقوال.
   - **نقد الموقف الثاني:** إبراز نقاط الضعف.
   - **التركيب / التجاوز:** التوفيق بين الموقفين أو تغليب أحدهما مدعماً بحجة قوية.
3. **حل المشكلة (الخاتمة):** استنتاج نهائي متناسق مع مسار التحليل كإجابة حاسمة على الإشكال.`;
  } else if (userQuery.includes('مناع') || userQuery.includes('استجاب')) {
    response = `🧬 **الفرق المنهجي بين المناعة الخلطية والخلوية:**
- **المناعة ذات الوساطة الخلطية:** تتدخل فيها الخلايا اللمفاوية البائية (LB) التي تتمايز إلى خلايا بلازمية مفرزة للأجسام المضادة (Ac)، وتستهدف المستضدات الحرة في السوائل كالبكتيريا والسموم بتشكيل المعقدات المناعية.
- **المناعة ذات الوساطة الخلوية:** تتدخل فيها الخلايا اللمفاوية التائية (LT8) التي تتمايز إلى خلايا سامة (LTc) وتتعرف تعرفاً مزدوجاً على الخلايا المصابة (فيروسات، خلايا سرطانية) وتفرز البيرفورين لإحداث صدمة حلولية وتخريبها.`;
  } else if (userQuery.includes('دوال') || userQuery.includes('رياضيات')) {
    response = `📐 **الخطوات الذهبية لدراسة دالة عددية في البكالوريا:**
1. تعيين مجموعة التعريف Df وتحديد أطراف المجالات المفتوحة.
2. حساب النهايات عند حدود Df واستنتاج المستقيمات المقاربة (الأفقية، العمودية، والمائلة).
3. حساب المشتقة f'(x) وتحديد إشارتها بدقة، ثم تشكيل جدول التغيرات.
4. إيجاد نقاط التقاطع مع المحورين وفواصل نقط الانعطاف إن وجدت (f''(x)=0 وتغير إشارتها).
5. رسم المستقيمات المقاربة والمماسات ثم رسم المنحنى Cf باحترافية وتناسق.`;
  } else {
    response = `💡 **توجيه منهجي حول "${userQuery}":**
وفق المنهاج الرسمي للبكالوريا الجزائرية، احرص على:
1. فهم المصطلحات المفتاحية في السؤال (فسر، علل، استنتج، قارن).
2. استحضار القوانين الرياضية أو التعاريف الدقيقة المعتمدة في كتب الوزارة.
3. إدراج وحدات القياس الفيزيائية دائماً لتفادي ضياع أجزاء العلامة.`;
  }

  chatBox.innerHTML += `
    <div class="p-3 bg-[#F5EDE0] dark:bg-[#25131D] rounded-xl border border-[#E8C995]/30 whitespace-pre-line">
      ${response}
    </div>
  `;

  chatBox.scrollTop = chatBox.scrollHeight;
}

// --------------------------------------------------------------------------
// 8. أرشيف البكالوريات والملخصات والدروس
// --------------------------------------------------------------------------
function renderBacArchiveView(container) {
  container.innerHTML = `
    <div class="space-y-4">
      <div class="flex items-center justify-between border-b border-[#E8C995]/30 pb-3">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-2xl bg-[#E8C995]/20 border border-[#E8C995]/40 flex items-center justify-center text-[#731E3E] dark:text-[#E8C995]">
            <i data-lucide="graduation-cap" class="w-5 h-5"></i>
          </div>
          <div>
            <h3 class="font-bold text-base text-[#451C2B] dark:text-[#FCF8F1]">مستودع البكالوريات الجزائرية الرسمية (2015 - 2024) 🏛️</h3>
            <span class="text-[11px] opacity-70">المواضيع الأصلية مع سلالم التنقيط الوزارية المعتمدة</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs max-h-[320px] overflow-y-auto">
        ${BAC_ARCHIVES_DATA.map(item => `
          <div class="p-3.5 rounded-xl bg-[#F5EDE0]/60 dark:bg-[#25131D]/60 border border-[#E8C995]/30 flex items-center justify-between hover:border-[#731E3E] transition">
            <div class="space-y-0.5">
              <span class="font-bold block">${item.subject} (BAC ${item.year})</span>
              <span class="text-[10px] opacity-70">${item.stream} • ${item.solutions}</span>
            </div>
            <a href="${item.url}" target="_blank" rel="noreferrer" class="px-3 py-1.5 bg-[#731E3E] hover:bg-[#501426] text-[#F5EDE0] font-bold rounded-lg transition text-[11px] flex items-center gap-1 shadow">
              <span>فتح الموضوع</span>
              <i data-lucide="external-link" class="w-3 h-3"></i>
            </a>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderLessonsSummariesView(container, type) {
  const isLessons = type === 'lessons';
  container.innerHTML = `
    <div class="space-y-4">
      <div class="flex items-center justify-between border-b border-[#E8C995]/30 pb-3">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-2xl bg-[#E8C995]/20 border border-[#E8C995]/40 flex items-center justify-center text-[#731E3E] dark:text-[#E8C995]">
            <i data-lucide="${isLessons ? 'book-open' : 'newspaper'}" class="w-5 h-5"></i>
          </div>
          <div>
            <h3 class="font-bold text-base text-[#451C2B] dark:text-[#FCF8F1]">${isLessons ? 'كبسولات الدروس المركزة' : 'خرائط ذهنية وملخصات شاملة'} 📚</h3>
            <span class="text-[11px] opacity-70">${isLessons ? 'شروحات مكثفة لأهم وحدات البكالوريا' : 'ملخصات بصرية سريعة للاسترجاع السريع قبل الامتحانات'}</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div class="p-4 rounded-xl bg-[#F5EDE0]/60 dark:bg-[#25131D]/60 border border-[#E8C995]/30 space-y-2">
          <span class="text-xs font-bold text-[#731E3E] dark:text-[#E8C995]">العلوم الطبيعية والحياة</span>
          <p class="text-[11px] opacity-80 leading-relaxed">ملخص شامل لآليات تركيب البروتين، النشاط الأنزيمي، والمناعة والاتصال العصبي مع المخططات الرسمية.</p>
          <a href="https://www.dzexams.com/ar/bac/sciences-naturelles" target="_blank" class="inline-block text-[11px] font-bold text-[#731E3E] dark:text-[#E8C995] hover:underline">تحميل المخطط الشامل ↗</a>
        </div>

        <div class="p-4 rounded-xl bg-[#F5EDE0]/60 dark:bg-[#25131D]/60 border border-[#E8C995]/30 space-y-2">
          <span class="text-xs font-bold text-[#731E3E] dark:text-[#E8C995]">الفيزياء والكيمياء</span>
          <p class="text-[11px] opacity-80 leading-relaxed">جدول القوانين الكامل: المتابعة الزمنية، التحولات النووية، الظواهر الكهربائية، وحركة الكواكب.</p>
          <a href="https://www.dzexams.com/ar/bac/physique" target="_blank" class="inline-block text-[11px] font-bold text-[#731E3E] dark:text-[#E8C995] hover:underline">تحميل المخطط الشامل ↗</a>
        </div>

        <div class="p-4 rounded-xl bg-[#F5EDE0]/60 dark:bg-[#25131D]/60 border border-[#E8C995]/30 space-y-2">
          <span class="text-xs font-bold text-[#731E3E] dark:text-[#E8C995]">الرياضيات الشاملة</span>
          <p class="text-[11px] opacity-80 leading-relaxed">دليل النهايات، إزالة حالات عدم التعيين، التزايد المقارن، وقوانين المتتاليات والاحتمالات.</p>
          <a href="https://www.dzexams.com/ar/bac/mathematiques" target="_blank" class="inline-block text-[11px] font-bold text-[#731E3E] dark:text-[#E8C995] hover:underline">تحميل المخطط الشامل ↗</a>
        </div>

        <div class="p-4 rounded-xl bg-[#F5EDE0]/60 dark:bg-[#25131D]/60 border border-[#E8C995]/30 space-y-2">
          <span class="text-xs font-bold text-[#731E3E] dark:text-[#E8C995]">الفلسفة والعلوم الإسلامية</span>
          <p class="text-[11px] opacity-80 leading-relaxed">مطويات حفظ مقاصد الشريعة والربا + خطط المقالات الفلسفية الأكثر وروداً في مواضيع البكالوريا.</p>
          <a href="https://www.dzexams.com/ar/bac/philosophie" target="_blank" class="inline-block text-[11px] font-bold text-[#731E3E] dark:text-[#E8C995] hover:underline">تحميل المخطط الشامل ↗</a>
        </div>
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// 9. متجر الهدايا والمكافآت (Gifts & Points Shop)
// --------------------------------------------------------------------------
function renderGiftsView(container) {
  const currentPts = totalPoints;

  container.innerHTML = `
    <div class="space-y-4">
      <div class="flex items-center justify-between border-b border-[#E8C995]/30 pb-3">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-2xl bg-[#E8C995]/20 border border-[#E8C995]/40 flex items-center justify-center text-[#731E3E] dark:text-[#E8C995]">
            <i data-lucide="gift" class="w-5 h-5"></i>
          </div>
          <div>
            <h3 class="font-bold text-base text-[#451C2B] dark:text-[#FCF8F1]">متجر الهدايا والمكافآت الحصرية 🎁</h3>
            <span class="text-[11px] opacity-70">استبدل نقاطك المكتسبة من المذاكرة بأدلة وميزات استثنائية</span>
          </div>
        </div>

        <div class="bg-[#E8C995]/20 border border-[#E8C995]/40 px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold">
          رصيدك: <span class="text-[#731E3E] dark:text-[#E8C995] font-bold text-sm">${currentPts}</span> نقطة
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        ${GIFTS_CATALOG.map(g => {
          const isUnlocked = userUnlockedGifts.includes(g.id);
          return `
            <div class="p-4 rounded-2xl bg-[#F5EDE0]/60 dark:bg-[#25131D]/60 border ${isUnlocked ? 'border-[#6C9D78] bg-[#6C9D78]/10' : 'border-[#E8C995]/40'} space-y-3 flex flex-col justify-between">
              <div class="space-y-1.5">
                <div class="flex justify-between items-start">
                  <span class="text-xs font-bold">${g.title}</span>
                  <span class="text-[10px] bg-[#E8C995]/25 text-[#731E3E] dark:text-[#E8C995] px-2.5 py-0.5 rounded-full font-bold">${g.badge}</span>
                </div>
                <p class="text-[11px] opacity-75 leading-relaxed">${g.desc}</p>
                ${isUnlocked && g.contentSnippet ? `
                  <div class="p-2.5 bg-[#FCF8F1] dark:bg-[#1f0e18] rounded-xl border border-[#E8C995]/30 text-[10px] leading-relaxed font-mono">
                    ${g.contentSnippet}
                  </div>
                ` : ''}
              </div>

              <div class="flex justify-between items-center pt-2 border-t border-[#E8C995]/20">
                <span class="font-mono font-bold text-[#731E3E] dark:text-[#E8C995]">${g.cost} نقطة</span>
                ${isUnlocked ? `
                  <span class="text-[#6C9D78] font-bold text-xs flex items-center gap-1">
                    <i data-lucide="check-circle" class="w-3.5 h-3.5"></i> تم الفتح مسبقاً
                  </span>
                ` : `
                  <button onclick="unlockGift('${g.id}', ${g.cost})" class="px-4 py-2 ${currentPts >= g.cost ? 'bg-[#731E3E] text-[#F5EDE0] hover:bg-[#501426]' : 'bg-gray-300 dark:bg-gray-700 opacity-60 cursor-not-allowed'} font-bold rounded-xl transition shadow text-xs">
                    فتح الهدية 🔓
                  </button>
                `}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function unlockGift(giftId, cost) {
  if (totalPoints < cost) {
    showToast(`عفواً، تحتاج إلى ${cost - totalPoints} نقطة إضافية لفتح هذه الهدية. ذاكر واكسب النقاط! 🎯`);
    return;
  }

  totalPoints -= cost;
  userUnlockedGifts.push(giftId);
  localStorage.setItem('bac_unlocked_gifts', JSON.stringify(userUnlockedGifts));
  saveStatsToStorage();
  updateUI();
  renderGiftsView(document.getElementById('masterToolModalContent'));
  showToast('تهانينا! تم فتح الهدية بنجاح وتمت إضافتها لمكتبتك 🎁');
}

// --------------------------------------------------------------------------
// 10. التحديات النشطة (Challenges Hub)
// --------------------------------------------------------------------------
function renderChallengesView(container) {
  container.innerHTML = `
    <div class="space-y-4">
      <div class="flex items-center justify-between border-b border-[#E8C995]/30 pb-3">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-2xl bg-[#E8C995]/20 border border-[#E8C995]/40 flex items-center justify-center text-[#731E3E] dark:text-[#E8C995]">
            <i data-lucide="swords" class="w-5 h-5"></i>
          </div>
          <div>
            <h3 class="font-bold text-base text-[#451C2B] dark:text-[#FCF8F1]">التحديات والمهام الأسبوعية ⚔️</h3>
            <span class="text-[11px] opacity-70">أكمل التحديات واكسب نقاط مضاعفة لرفع تصنيفك ورتبتك</span>
          </div>
        </div>
      </div>

      <div class="space-y-3">
        ${BAC_CHALLENGES.map(c => {
          let currentVal = 0;
          if (c.metric === 'pomodoroMinutes') currentVal = pomodoroMinutes;
          if (c.metric === 'quizPoints') currentVal = Math.floor(quizPoints / (c.divisor || 1));
          if (c.metric === 'flashcardsReviewed') currentVal = flashcardsReviewedCount;

          const pct = Math.min(100, Math.floor((currentVal / c.target) * 100));
          const isDone = pct >= 100;

          return `
            <div class="p-4 rounded-2xl bg-[#F5EDE0]/60 dark:bg-[#25131D]/60 border border-[#E8C995]/30 space-y-3">
              <div class="flex justify-between items-start">
                <div class="flex items-center gap-2.5">
                  <div class="p-2 bg-[#E8C995]/20 rounded-xl text-[#731E3E] dark:text-[#E8C995]">
                    <i data-lucide="${c.icon}" class="w-4 h-4"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-xs">${c.title}</h4>
                    <p class="text-[11px] opacity-75">${c.desc}</p>
                  </div>
                </div>
                <span class="font-mono text-xs font-bold text-[#731E3E] dark:text-[#E8C995] bg-[#E8C995]/20 px-2.5 py-1 rounded-full">+${c.reward} نقطة</span>
              </div>

              <div class="space-y-1">
                <div class="flex justify-between text-[11px] font-mono opacity-80">
                  <span>التقدم: ${currentVal} / ${c.target}</span>
                  <span>${pct}%</span>
                </div>
                <div class="w-full h-2.5 bg-[#25131D]/20 dark:bg-[#25131D] rounded-full overflow-hidden border border-[#E8C995]/30">
                  <div class="h-full bg-[#6C9D78] rounded-full transition-all duration-500" style="width: ${pct}%"></div>
                </div>
              </div>

              ${isDone ? `
                <div class="flex justify-end">
                  <button onclick="awardPoints(${c.reward}, 'إنجاز ${c.title}'); showToast('تم استلام الجائزة بنجاح! 🏆');" class="px-3.5 py-1.5 bg-[#6C9D78] hover:bg-[#5a8665] text-white font-bold rounded-xl text-xs transition shadow">
                    استلام الجائزة 🎉
                  </button>
                </div>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// 11. الستريك ومؤشر الانضباط (Streak Tracker)
// --------------------------------------------------------------------------
function renderStreakView(container) {
  const currentStreak = parseInt(localStorage.getItem('bac_streak_days') || '3');

  container.innerHTML = `
    <div class="space-y-5 text-center">
      <div class="flex items-center justify-between border-b border-[#E8C995]/30 pb-3 text-right">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-2xl bg-[#E8C995]/20 border border-[#E8C995]/40 flex items-center justify-center text-orange-500">
            <i data-lucide="flame" class="w-5 h-5"></i>
          </div>
          <div>
            <h3 class="font-bold text-base text-[#451C2B] dark:text-[#FCF8F1]">الستريك ومؤشر الانضباط اليومي 🔥</h3>
            <span class="text-[11px] opacity-70">حافظ على شعلة المذاكرة اليومية دون انقطاع</span>
          </div>
        </div>
      </div>

      <!-- الشعلة الكبرى -->
      <div class="py-4 flex flex-col items-center justify-center space-y-2">
        <div class="relative w-24 h-24 rounded-full bg-orange-500/15 border-2 border-orange-500/40 flex items-center justify-center shadow-xl">
          <i data-lucide="flame" class="w-12 h-12 text-orange-500 animate-bounce"></i>
        </div>
        <span class="font-mono text-4xl sm:text-5xl font-extrabold text-orange-500">${currentStreak}</span>
        <span class="text-xs font-bold opacity-80">أيام متتالية من الالتزام بالمراجعة</span>
      </div>

      <!-- شبكة الأيام الأخيرة (Heatmap) -->
      <div class="p-4 rounded-2xl bg-[#F5EDE0]/60 dark:bg-[#25131D]/60 border border-[#E8C995]/30 space-y-3">
        <span class="text-xs font-bold block text-right">سجل نشاطك لآخر 21 يوماً:</span>
        <div class="grid grid-cols-7 gap-2">
          ${Array.from({ length: 21 }).map((_, i) => {
            const active = i >= 18;
            return `
              <div class="h-8 rounded-lg flex items-center justify-center text-[10px] font-mono font-bold ${active ? 'bg-orange-500 text-white shadow' : 'bg-[#FCF8F1] dark:bg-[#25131D] border border-[#E8C995]/20 opacity-60'}">
                ${i + 1}
              </div>
            `;
          }).join('')}
        </div>
        <p class="text-[10px] opacity-75 text-right">كل يوم تفتح فيه التطبيق وتذاكر جلسة واحدة تزيد الشعلة يوماً كاملاً.</p>
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// 12. مركز النقاط وتفاصيلها (Points Central)
// --------------------------------------------------------------------------
function renderPointsHubView(container) {
  container.innerHTML = `
    <div class="space-y-4">
      <div class="flex items-center justify-between border-b border-[#E8C995]/30 pb-3">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-2xl bg-[#E8C995]/20 border border-[#E8C995]/40 flex items-center justify-center text-[#731E3E] dark:text-[#E8C995]">
            <i data-lucide="award" class="w-5 h-5"></i>
          </div>
          <div>
            <h3 class="font-bold text-base text-[#451C2B] dark:text-[#FCF8F1]">سجل النقاط والأوسمة 🏆</h3>
            <span class="text-[11px] opacity-70">إحصاء دقيق لجميع مصادر النقاط في رحلتك الدراسية</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center font-mono">
        <div class="p-3 bg-[#F5EDE0]/60 dark:bg-[#25131D]/60 rounded-xl border border-[#E8C995]/30">
          <span class="block text-lg font-bold text-[#731E3E] dark:text-[#E8C995]">${totalPoints}</span>
          <span class="text-[10px] opacity-70 font-sans">إجمالي النقاط</span>
        </div>
        <div class="p-3 bg-[#F5EDE0]/60 dark:bg-[#25131D]/60 rounded-xl border border-[#E8C995]/30">
          <span class="block text-lg font-bold">${pomodoroPoints}</span>
          <span class="text-[10px] opacity-70 font-sans">نقاط بومودورو</span>
        </div>
        <div class="p-3 bg-[#F5EDE0]/60 dark:bg-[#25131D]/60 rounded-xl border border-[#E8C995]/30">
          <span class="block text-lg font-bold">${quizPoints}</span>
          <span class="text-[10px] opacity-70 font-sans">نقاط الكويزات</span>
        </div>
        <div class="p-3 bg-[#F5EDE0]/60 dark:bg-[#25131D]/60 rounded-xl border border-[#E8C995]/30">
          <span class="block text-lg font-bold text-[#6C9D78]">${meetPoints}</span>
          <span class="text-[10px] opacity-70 font-sans">نقاط Meet</span>
        </div>
      </div>

      <div class="p-4 bg-[#F5EDE0]/60 dark:bg-[#25131D]/60 rounded-2xl border border-[#E8C995]/30 text-xs space-y-2">
        <span class="font-bold text-[#731E3E] dark:text-[#E8C995] block">كيف تكسب المزيد من النقاط؟</span>
        <ul class="space-y-1.5 opacity-85 list-disc list-inside">
          <li>كل دقيقة تركيز بومودورو = +2 نقطة.</li>
          <li>كل إجابة صحيحة في كويزات البكالوريا = +10 نقاط.</li>
          <li>كل مهمة مراجعة تنجزها في TDL = +15 نقطة.</li>
          <li>جلسة محاكاة بكالوريا رسمية كاملة = +50 نقطة.</li>
          <li>مراجعة بطاقة حفظ في وضع أنكي = +5 نقاط.</li>
        </ul>
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// 13. إدارة مهام TDL المتقدمة
// --------------------------------------------------------------------------
function renderTdlProView(container) {
  container.innerHTML = `
    <div class="space-y-4">
      <div class="flex items-center justify-between border-b border-[#E8C995]/30 pb-3">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-2xl bg-[#E8C995]/20 border border-[#E8C995]/40 flex items-center justify-center text-[#731E3E] dark:text-[#E8C995]">
            <i data-lucide="check-square" class="w-5 h-5"></i>
          </div>
          <div>
            <h3 class="font-bold text-base text-[#451C2B] dark:text-[#FCF8F1]">قائمة المهام اليومية (TDL المطور) 📋</h3>
            <span class="text-[11px] opacity-70">نظم أهدافك الدراسية لكل يوم لتحافظ على تركيزك</span>
          </div>
        </div>
      </div>

      <!-- نموذج إضافة مهمة -->
      <form onsubmit="addTdlProTask(event)" class="flex gap-2">
        <input type="text" id="tdlProInput" placeholder="أضف مهمة مذاكرة محددة (مثال: حفظ مصطلحات الوحدة الأولى تاريخ)..." required class="flex-1 p-2.5 rounded-xl bg-[#FCF8F1] dark:bg-[#1f0e18] border border-[#E8C995]/40 text-xs outline-none">
        <button type="submit" class="px-4 py-2.5 bg-[#731E3E] hover:bg-[#501426] text-[#F5EDE0] font-bold rounded-xl text-xs transition shadow">
          إضافة +
        </button>
      </form>

      <!-- قائمة المهام الحالية -->
      <div id="tdlProList" class="space-y-2 text-xs max-h-[250px] overflow-y-auto">
        ${dailyTasks.map(t => `
          <div class="p-3 rounded-xl bg-[#F5EDE0]/60 dark:bg-[#25131D]/60 border ${t.done ? 'border-[#6C9D78] bg-[#6C9D78]/10 opacity-70' : 'border-[#E8C995]/30'} flex items-center justify-between transition">
            <div class="flex items-center gap-2">
              <input type="checkbox" ${t.done ? 'checked' : ''} onchange="toggleTaskDone(${t.id}); renderTdlProView(document.getElementById('masterToolModalContent'));" class="accent-[#731E3E] w-4 h-4 cursor-pointer">
              <span class="${t.done ? 'line-through opacity-70' : 'font-medium'}">${t.text}</span>
            </div>
            <button onclick="deleteTask(${t.id}); renderTdlProView(document.getElementById('masterToolModalContent'));" class="text-red-500 hover:text-red-700 p-1">✕</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function addTdlProTask(e) {
  e.preventDefault();
  const input = document.getElementById('tdlProInput');
  if (!input || !input.value.trim()) return;

  dailyTasks.unshift({
    id: Date.now(),
    text: input.value.trim(),
    priority: 'important',
    done: false
  });
  localStorage.setItem('bac-daily-tasks', JSON.stringify(dailyTasks));
  input.value = '';
  renderTdlProView(document.getElementById('masterToolModalContent'));
  updateUI();
  showToast('تمت إضافة المهمة إلى جدولك اليومي 📝');
}

// --------------------------------------------------------------------------
// 14. دالة إضافة النقاط المشتركة
// --------------------------------------------------------------------------
function awardPoints(amount, reason) {
  totalPoints = (totalPoints || 0) + amount;
  saveStatsToStorage();
  updateUI();
  if (typeof playPointSound === 'function') playPointSound();
}

// ==========================================================================
// 15. تصميم ترسانة البكالوريا المتقدمة (The Mastery Arsenal Bento Grid)
// تصميم أصلي راقٍ متناسق 100% مع هوية FOCUS & FORCE وبدون أي تشابه مع الصورة
// ==========================================================================

const ARSENAL_MODULES = [
  // --- قسم الامتحانات والتركيز (exams) ---
  {
    id: 'simulator',
    category: 'exams',
    featured: true,
    title: 'محاكاة البكالوريا الرسمية',
    badge: 'امتحان رسمي 3.5 سا 🏛️',
    desc: 'خوض امتحان تجريبي حقيقي بمواضيع رسمية (الموضوع الأول vs الثاني) مع مؤقت وزاري وسلم تنقيط.',
    icon: 'clock',
    iconColor: 'text-[#731E3E] dark:text-[#E8C995]',
    iconBg: 'bg-[#E8C995]/20',
    points: '+50 نقطة',
    actionText: 'بدء المحاكاة الرسمية',
    action: "openToolModal('simulator')"
  },
  {
    id: 'pomodoro',
    category: 'exams',
    title: 'مؤقت التركيز المخصص',
    badge: 'تقنية بومودورو ⏱️',
    desc: 'جلسات تركيز عميقة 25/5 دقيقة مبرمجة لمضاعفة استيعاب المواد الأساسية.',
    icon: 'timer',
    iconColor: 'text-[#731E3E] dark:text-[#E8C995]',
    iconBg: 'bg-[#731E3E]/10 dark:bg-[#E8C995]/15',
    points: '+2 نقطة/دقيقة',
    actionText: 'فتح المؤقت',
    action: "navigateTo('/pomodoro')"
  },
  {
    id: 'schedule',
    category: 'exams',
    title: 'الجدول الأسبوعي النموذجي',
    badge: 'تنظيم الوقت 🗓️',
    desc: 'خطة مراجعة أسبوعية متوازنة لشعبتك مقسمة لفترات الفجر، العصر، والمساء.',
    icon: 'calendar',
    iconColor: 'text-amber-700 dark:text-amber-300',
    iconBg: 'bg-amber-500/15',
    points: 'تعديل وطباعة',
    actionText: 'تعديل الجدول',
    action: "openToolModal('schedule')"
  },
  {
    id: 'tdl',
    category: 'exams',
    title: 'أهداف المراجعة اليومية (TDL)',
    badge: 'إنجاز يومي 📋',
    desc: 'جدولة مهام اليوم بدقة مع ترتيب الأولويات ومتابعة نسبة الإنجاز اليومية.',
    icon: 'check-square',
    iconColor: 'text-[#6C9D78]',
    iconBg: 'bg-[#6C9D78]/15',
    points: '+15 نقطة',
    actionText: 'إدارة المهام',
    action: "openToolModal('tdl')"
  },

  // --- قسم الحفظ والاسترجاع (memory) ---
  {
    id: 'flashcards',
    category: 'memory',
    featured: true,
    title: 'بطاقات الحفظ والاسترجاع (أنكي BAC)',
    badge: 'التكرار المتباعد 📇',
    desc: 'بطاقات تفاعلية 3D لاسترجاع شخصيات وتواريخ التاريخ، مصطلحات الجغرافيا، وقوانين المواد.',
    icon: 'layers',
    iconColor: 'text-[#731E3E] dark:text-[#E8C995]',
    iconBg: 'bg-[#E8C995]/20',
    points: '+5 نقاط/بطاقة',
    actionText: 'مراجعة البطاقات',
    action: "openToolModal('flashcards')"
  },
  {
    id: 'memorize',
    category: 'memory',
    title: 'التحفيظ النشط بالإخفاء التدريجي',
    badge: 'Active Cloze 🧠',
    desc: 'تقنية إخفاء الكلمات المفتاحية في المقالات الفلسفية ونصوص الشريعة والتاريخ.',
    icon: 'brain',
    iconColor: 'text-rose-700 dark:text-rose-300',
    iconBg: 'bg-rose-500/15',
    points: '+15 نقطة',
    actionText: 'بدء التحفيظ',
    action: "openToolModal('memorize')"
  },
  {
    id: 'quizzes',
    category: 'memory',
    title: 'كويزات وتحديات البكالوريا',
    badge: 'بنك أسئلة رسمي 🧩',
    desc: 'اختبر نفسك في أسئلة منهجية تحاكي مواضيع البكالوريا مع تصحيح فوري وشرح منهجي.',
    icon: 'help-circle',
    iconColor: 'text-indigo-700 dark:text-indigo-300',
    iconBg: 'bg-indigo-500/15',
    points: '+10 نقاط/سؤال',
    actionText: 'خوض الكويزات',
    action: "navigateTo('/quizzes')"
  },
  {
    id: 'summaries',
    category: 'memory',
    title: 'ملخصات وخرائط ذهنية شاملة',
    badge: 'مخططات بصرية 📑',
    desc: 'ملخصات مركزة ورسوم تخطيطية تسهل الاستذكار البصري السريع لكافة الشعب.',
    icon: 'newspaper',
    iconColor: 'text-teal-700 dark:text-teal-300',
    iconBg: 'bg-teal-500/15',
    points: 'ملفات جاهزة',
    actionText: 'استعراض الملخصات',
    action: "openToolModal('summaries')"
  },
  {
    id: 'lessons',
    category: 'memory',
    title: 'كبسولات الدروس والمفاهيم',
    badge: 'شروحات مكثفة 📚',
    desc: 'أهم القوانين والمعارف المحورية في الفيزياء، العلوم الطبيعية، والرياضيات.',
    icon: 'book-open',
    iconColor: 'text-sky-700 dark:text-sky-300',
    iconBg: 'bg-sky-500/15',
    points: 'دليل الوحدات',
    actionText: 'فتح الكبسولات',
    action: "openToolModal('lessons')"
  },

  // --- قسم الذكاء والتوجيه (ai) ---
  {
    id: 'ai',
    category: 'ai',
    featured: true,
    title: 'مساعد الذكاء الاصطناعي للبكالوريا',
    badge: 'مساعد فوري 24/7 🤖',
    desc: 'توليد خطط المقالات الجدلية والاستقصاء، تبسيط المفاهيم المعقدة، والتدريب على الأفعال الأدائية.',
    icon: 'bot',
    iconColor: 'text-[#731E3E] dark:text-[#E8C995]',
    iconBg: 'bg-[#E8C995]/20',
    points: 'إجابات منهجية',
    actionText: 'اسأل المساعد',
    action: "openToolModal('ai')"
  },
  {
    id: 'mentor',
    category: 'ai',
    title: 'مرشد البكالوريا التكتيكي',
    badge: 'توجيه أكاديمي 🧭',
    desc: 'تشخيص مخصص لشعبتك وإحصائياتك يقدم نصائح تفادي أخطاء التصحيح وإدارة التوتر.',
    icon: 'compass',
    iconColor: 'text-purple-700 dark:text-purple-300',
    iconBg: 'bg-purple-500/15',
    points: 'تشخيص شخصي',
    actionText: 'استشارة المرشد',
    action: "openToolModal('mentor')"
  },
  {
    id: 'bac',
    category: 'ai',
    title: 'أرشيف مواضيع البكالوريا (2015 - 2024)',
    badge: 'مستودع رسمي 📜',
    desc: 'مواضيع البكالوريا الرسمية السابقة لجميع الشعب مع الحلول النموذجية الوزارية.',
    icon: 'graduation-cap',
    iconColor: 'text-[#731E3E] dark:text-[#E8C995]',
    iconBg: 'bg-[#731E3E]/10 dark:bg-[#E8C995]/15',
    points: 'مواضيع وحلول',
    actionText: 'تصفح الأرشيف',
    action: "openToolModal('bac-archive')"
  },

  // --- قسم التحفيز والمكافآت (momentum) ---
  {
    id: 'games',
    category: 'momentum',
    title: 'ألعاب الذاكرة وسرعة البديهة',
    badge: 'تنشيط ذهني 🎮',
    desc: 'لعبة مطابقة التواريخ والشخصيات وتحدي الـ 45 ثانية لكسر الروتين ومضاعفة التركيز.',
    icon: 'gamepad-2',
    iconColor: 'text-fuchsia-700 dark:text-fuchsia-300',
    iconBg: 'bg-fuchsia-500/15',
    points: '+25 نقطة',
    actionText: 'العب وتحدى',
    action: "openToolModal('games')"
  },
  {
    id: 'streak',
    category: 'momentum',
    title: 'شعلة الستريك ومؤشر الانضباط',
    badge: 'شعلة الالتزام 🔥',
    desc: 'حافظ على وتيرة الدراسة اليومية دون انقطاع مع سجل تفاعلي لآخر 21 يوماً.',
    icon: 'flame',
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-500/15',
    points: 'شعلة يومية',
    actionText: 'سجل الستريك',
    action: "openToolModal('streak')"
  },
  {
    id: 'challenges',
    category: 'momentum',
    title: 'التحديات والمهام الأسبوعية',
    badge: 'مهمات نشطة ⚔️',
    desc: 'أكمل تحديات الأسبوع لجمع نقاط إضافية مضاعفة ورفع رتبتك الأكاديمية.',
    icon: 'swords',
    iconColor: 'text-[#731E3E] dark:text-[#E8C995]',
    iconBg: 'bg-[#E8C995]/20',
    points: 'مكافآت مضاعفة',
    actionText: 'عرض التحديات',
    action: "openToolModal('challenges')"
  },
  {
    id: 'gifts',
    category: 'momentum',
    title: 'متجر الهدايا والمكافآت',
    badge: 'استبدال النقاط 🎁',
    desc: 'استبدل نقاط مذاكرتك بكتيبات المتفوقين، حقيبة المقالات الفلسفية، ودروع الحماية.',
    icon: 'gift',
    iconColor: 'text-emerald-700 dark:text-emerald-300',
    iconBg: 'bg-emerald-500/15',
    points: 'جوائز حصرية',
    actionText: 'دخول المتجر',
    action: "openToolModal('gifts')"
  },
  {
    id: 'points',
    category: 'momentum',
    title: 'سجل النقاط وتفاصيل XP',
    badge: 'رصيدك الدراسي 🏆',
    desc: 'إحصاء دقيق لجميع مصادر النقاط المكتسبة وطرق مضاعفتها لتصدر الترتيب.',
    icon: 'award',
    iconColor: 'text-amber-700 dark:text-amber-300',
    iconBg: 'bg-amber-500/15',
    points: 'سجل XP',
    actionText: 'تفاصيل الرصيد',
    action: "openToolModal('points')"
  },
  {
    id: 'ranking',
    category: 'momentum',
    title: 'لوحة التصنيف وجدار الأوسمة',
    badge: 'رتبة الامتياز 🥇',
    desc: 'متابعة رتبتك الحالية وسجل الأوسمة المفتوحة في رحلتك نحو شهادة البكالوريا.',
    icon: 'trophy',
    iconColor: 'text-yellow-600 dark:text-yellow-400',
    iconBg: 'bg-yellow-500/15',
    points: 'جدار الشرف',
    actionText: 'مشاهدة التصنيف',
    action: "navigateTo('/ranking')"
  }
];

function filterArsenalCategory(cat) {
  currentArsenalCategory = cat;
  document.querySelectorAll('.arsenal-tab-btn').forEach(btn => {
    btn.classList.remove('bg-[#731E3E]', 'text-[#F5EDE0]', 'shadow');
    btn.classList.add('bg-[#F5EDE0]/70', 'dark:bg-[#25131D]/70', 'text-opacity-80');
  });

  const activeBtn = document.getElementById(`arsenalTab-${cat}`);
  if (activeBtn) {
    activeBtn.classList.remove('bg-[#F5EDE0]/70', 'dark:bg-[#25131D]/70', 'text-opacity-80');
    activeBtn.classList.add('bg-[#731E3E]', 'text-[#F5EDE0]', 'shadow');
  }

  renderArsenalGrid();
}

function renderArsenalGrid() {
  const grid = document.getElementById('arsenalCardsGrid');
  if (!grid) return;

  const items = currentArsenalCategory === 'all'
    ? ARSENAL_MODULES
    : ARSENAL_MODULES.filter(m => m.category === currentArsenalCategory);

  grid.innerHTML = items.map(card => {
    const isFeatured = card.featured && currentArsenalCategory === 'all';
    return `
      <div onclick="${card.action}"
        class="${isFeatured ? 'sm:col-span-2' : ''} group relative p-5 rounded-3xl bg-[#FCF8F1] dark:bg-[#341624] border border-[#E8C995]/35 hover:border-[#731E3E] dark:hover:border-[#E8C995] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-3 select-none">
        
        <div class="space-y-2.5">
          <div class="flex items-center justify-between">
            <div class="w-10 h-10 rounded-2xl ${card.iconBg} ${card.iconColor} flex items-center justify-center transition group-hover:scale-110 shadow-sm">
              <i data-lucide="${card.icon}" class="w-5 h-5"></i>
            </div>
            <span class="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#E8C995]/20 text-[#731E3E] dark:text-[#E8C995] border border-[#E8C995]/30">
              ${card.badge}
            </span>
          </div>

          <div>
            <h3 class="text-sm sm:text-base font-bold text-[#451C2B] dark:text-[#FCF8F1] group-hover:text-[#731E3E] dark:group-hover:text-[#E8C995] transition">
              ${card.title}
            </h3>
            <p class="text-xs opacity-75 leading-relaxed mt-1 line-clamp-2">
              ${card.desc}
            </p>
          </div>
        </div>

        <div class="flex items-center justify-between pt-2 border-t border-[#E8C995]/20 text-xs">
          <span class="font-mono font-bold text-[11px] text-[#6C9D78]">
            ${card.points}
          </span>
          <span class="font-bold text-[#731E3E] dark:text-[#E8C995] flex items-center gap-1 group-hover:translate-x-[-2px] transition text-[11px]">
            <span>${card.actionText}</span>
            <i data-lucide="arrow-left" class="w-3.5 h-3.5"></i>
          </span>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

// دالة التوافقية القديمة
function renderMasterHubGrid() {
  renderArsenalGrid();
}

// تشغيل التهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  renderArsenalGrid();
});
