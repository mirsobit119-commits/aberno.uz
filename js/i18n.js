/* =========================================================
   ABERNO — ko'p tillilik (UZ / RU / EN)
   Asosiy til — o'zbekcha (HTML'dagi matn). Lug'at kaliti — o'zbekcha matn,
   qiymati — [ruscha, inglizcha]. Lug'atda yo'q matn o'zgarmay qoladi.
   ========================================================= */
(function () {
  "use strict";

  const T = {
    /* ---------- Sahifa sarlavhalari va meta ---------- */
    "Aberno — salfetka va yog' mahsulotlari ishlab chiqaruvchi": ["Aberno — производитель салфеток и масложировой продукции", "Aberno — napkin and dairy fat products manufacturer"],
    "Aberno — salfetka xom ashyosi, salfetkalar, margarin va saryog' ishlab chiqaruvchi O'zbekiston korxonasi. Eksport, viloyat dilerlari va Toshkent bo'yicha distribyutsiya.": ["Aberno — узбекский производитель сырья для салфеток, салфеток, маргарина и сливочного масла. Экспорт, дилеры в регионах и дистрибуция по Ташкенту.", "Aberno is an Uzbek manufacturer of napkin base paper, napkins, margarine and butter. Export, regional dealers and distribution in Tashkent."],
    "Biz haqimizda — Aberno": ["О компании — Aberno", "About us — Aberno"],
    "Aberno korxonasi haqida: ishlab chiqarish quvvatlari, sifat nazorati, missiya va rivojlanish tarixi.": ["О компании Aberno: производственные мощности, контроль качества, миссия и история развития.", "About Aberno: production capacity, quality control, mission and history."],
    "Mahsulotlar — Aberno": ["Продукция — Aberno", "Products — Aberno"],
    "Aberno mahsulotlari: salfetka xom ashyosi (jumbo rulon), salfetkalar, margarin va saryog'. Ulgurji va eksport uchun.": ["Продукция Aberno: сырьё для салфеток (джамбо-рулоны), салфетки, маргарин и сливочное масло. Опт и экспорт.", "Aberno products: napkin base paper (jumbo rolls), napkins, margarine and butter. For wholesale and export."],
    "Eksport — Aberno": ["Экспорт — Aberno", "Export — Aberno"],
    "Aberno salfetka xom ashyosi (jumbo rulon) va salfetkalarni eksport qiladi. Eksport shartlari, geografiya va hamkorlik bosqichlari.": ["Aberno экспортирует сырьё для салфеток (джамбо-рулоны) и салфетки. Условия экспорта, география и этапы сотрудничества.", "Aberno exports napkin base paper (jumbo rolls) and napkins. Export terms, geography and partnership steps."],
    "Hamkorlik va dilerlar — Aberno": ["Сотрудничество и дилеры — Aberno", "Partnership & dealers — Aberno"],
    "Aberno viloyat dilerlari ro'yxati, Toshkent shahridagi distribyutsiya va diler bo'lish shartlari.": ["Список региональных дилеров Aberno, дистрибуция в Ташкенте и условия дилерства.", "Aberno regional dealers, distribution in Tashkent and dealership terms."],
    "Aloqa — Aberno": ["Контакты — Aberno", "Contacts — Aberno"],
    "Aberno bilan bog'lanish: ulgurji buyurtma, dilerlik, eksport va Toshkent bo'yicha yetkazib berish.": ["Связаться с Aberno: оптовые заказы, дилерство, экспорт и доставка по Ташкенту.", "Contact Aberno: wholesale orders, dealership, export and delivery in Tashkent."],

    /* ---------- Umumiy: topbar, header, footer ---------- */
    "Du–Sha: 09:00–18:00": ["Пн–Сб: 09:00–18:00", "Mon–Sat: 09:00–18:00"],
    "ISHLAB CHIQARISH": ["ПРОИЗВОДСТВО", "MANUFACTURING"],
    "Bosh sahifa": ["Главная", "Home"],
    "Biz haqimizda": ["О компании", "About us"],
    "Mahsulotlar": ["Продукция", "Products"],
    "Eksport": ["Экспорт", "Export"],
    "Hamkorlik": ["Сотрудничество", "Partnership"],
    "Aloqa": ["Контакты", "Contacts"],
    "Hamkor bo'lish": ["Стать партнёром", "Become a partner"],
    "Asosiy menyu": ["Главное меню", "Main menu"],
    "Menyu": ["Меню", "Menu"],
    "Yuqoriga": ["Наверх", "Back to top"],
    "Sahifalar": ["Страницы", "Pages"],
    "Salfetka xom ashyosi, salfetkalar, margarin va saryog' ishlab chiqaruvchi O'zbekiston korxonasi.": ["Узбекский производитель сырья для салфеток, салфеток, маргарина и сливочного масла.", "Uzbek manufacturer of napkin base paper, napkins, margarine and butter."],
    "O'zbekiston, Toshkent sh.": ["Узбекистан, г. Ташкент", "Tashkent, Uzbekistan"],
    "Aberno. Barcha huquqlar himoyalangan.": ["Aberno. Все права защищены.", "Aberno. All rights reserved."],

    /* ---------- Umumiy so'zlar ---------- */
    "Salfetka xom ashyosi": ["Сырьё для салфеток", "Napkin base paper"],
    "Salfetkalar": ["Салфетки", "Napkins"],
    "Margarin": ["Маргарин", "Margarine"],
    "Saryog'": ["Сливочное масло", "Butter"],
    "Batafsil": ["Подробнее", "Learn more"],
    "Ulgurji buyurtma": ["Оптовый заказ", "Wholesale order"],
    "So'rov yuborish": ["Отправить запрос", "Send a request"],
    "Zavod narxi": ["Заводская цена", "Factory price"],
    "Mahsulotlarimiz": ["Наша продукция", "Our products"],
    "Shartnoma": ["Договор", "Contract"],
    "Kompaniya": ["Компания", "Company"],

    /* ---------- Bosh sahifa ---------- */
    "O'zbekiston ishlab chiqaruvchisi": ["Производитель из Узбекистана", "Made in Uzbekistan"],
    "Gigiyena va oziq-ovqat uchun": ["Для гигиены и питания —", "For hygiene and food —"],
    "ishonchli sifat": ["надёжное качество", "reliable quality"],
    "Aberno — salfetka xom ashyosi, salfetkalar, margarin va saryog' ishlab chiqaradigan korxona. Mahsulotlarimiz O'zbekistonning barcha viloyatlarida va xorijiy bozorlarda.": ["Aberno — предприятие по производству сырья для салфеток, салфеток, маргарина и сливочного масла. Наша продукция представлена во всех регионах Узбекистана и на зарубежных рынках.", "Aberno produces napkin base paper, napkins, margarine and butter. Our products are available in every region of Uzbekistan and in foreign markets."],
    "Mahsulotlarni ko'rish": ["Смотреть продукцию", "View products"],
    "mahsulot yo'nalishi": ["товарных направления", "product lines"],
    "hududda dilerlik tarmog'i": ["регионов в дилерской сети", "regions in the dealer network"],
    "eksport davlatlari": ["стран экспорта", "export countries"],
    "Toshkentdagi savdo nuqtalari": ["торговых точек в Ташкенте", "retail outlets in Tashkent"],
    "Faoliyat yo'nalishlari": ["Направления деятельности", "What we do"],
    "Ikki yirik yo'nalish — bitta sifat standarti": ["Два крупных направления — один стандарт качества", "Two major lines — one quality standard"],
    "Korxonamiz gigiyena mahsulotlari va oziq-ovqat yog'lari ishlab chiqarishni bir tizimda boshqaradi: xom ashyodan tayyor mahsulotgacha.": ["Мы управляем производством гигиенической продукции и пищевых жиров в единой системе — от сырья до готового продукта.", "We run hygiene and food-fat production as one system — from raw material to finished product."],
    "Gigiyena": ["Гигиена", "Hygiene"],
    "Salfetka xom ashyosi va salfetkalar": ["Сырьё для салфеток и салфетки", "Napkin base paper and napkins"],
    "Tissue qog'oz asosi (jumbo rulonlar) ishlab chiqaramiz va undan turli formatdagi salfetkalar tayyorlaymiz. Xom ashyo boshqa ishlab chiqaruvchilarga ham yetkaziladi.": ["Производим основу из бумаги tissue (джамбо-рулоны) и изготавливаем из неё салфетки разных форматов. Сырьё также поставляется другим производителям.", "We produce tissue base paper (jumbo rolls) and convert it into napkins of various formats. The base paper is also supplied to other manufacturers."],
    "Jumbo rulon — salfetka xom ashyosi": ["Джамбо-рулон — сырьё для салфеток", "Jumbo roll — napkin base paper"],
    "Stol salfetkalari, qutili va cho'ntak salfetkalari": ["Столовые, в коробках и карманные салфетки", "Table, boxed and pocket napkins"],
    "HoReCa uchun salfetkalar": ["Салфетки для HoReCa", "Napkins for HoReCa"],
    "Oziq-ovqat": ["Продукты питания", "Food"],
    "Margarin va saryog'": ["Маргарин и сливочное масло", "Margarine and butter"],
    "Uy xo'jaligi, novvoyxona va qandolatchilik sexlari uchun margarin hamda tabiiy saryog'. Qadoqlash — chakana va ulgurji formatlarda.": ["Маргарин и натуральное сливочное масло для дома, пекарен и кондитерских цехов. Фасовка — в розничных и оптовых форматах.", "Margarine and natural butter for households, bakeries and confectioneries. Packed in retail and wholesale formats."],
    "Saryog' — turli yog'lilik darajasida": ["Сливочное масло разной жирности", "Butter with various fat contents"],
    "Stol margarini va qandolatchilik margarini": ["Столовый и кондитерский маргарин", "Table and bakery margarine"],
    "HoReCa va sanoat uchun yirik qadoq": ["Крупная фасовка для HoReCa и промышленности", "Bulk packs for HoReCa and industry"],
    "Savdo tizimi": ["Система продаж", "Sales network"],
    "Mahsulotimiz sizga qanday yetib boradi": ["Как наша продукция доходит до вас", "How our products reach you"],
    "Uch bosqichli savdo tarmog'i orqali mahsulotlarimiz xalqaro bozordan tortib mahalla do'konigacha yetkaziladi.": ["Благодаря трёхуровневой сети продаж наша продукция доходит от международного рынка до магазина у дома.", "Our three-channel sales network delivers products from international markets to the corner shop."],
    "Salfetka xom ashyosi va tayyor mahsulotlarni qo'shni va xorijiy davlatlarga eksport qilamiz.": ["Экспортируем сырьё для салфеток и готовую продукцию в соседние и зарубежные страны.", "We export napkin base paper and finished products to neighbouring and foreign countries."],
    "Eksport haqida": ["Об экспорте", "About export"],
    "Viloyat dilerlari": ["Региональные дилеры", "Regional dealers"],
    "O'zbekistonning barcha viloyatlarida rasmiy dilerlarimiz orqali ulgurji savdo yo'lga qo'yilgan.": ["Оптовая торговля налажена через официальных дилеров во всех регионах Узбекистана.", "Wholesale trade runs through our official dealers in every region of Uzbekistan."],
    "Dilerlar ro'yxati": ["Список дилеров", "Dealer list"],
    "Toshkent distribyutsiyasi": ["Дистрибуция в Ташкенте", "Tashkent distribution"],
    "Toshkent shahrida korxonaning o'z distribyutorlik jamoasi do'kon va HoReCa nuqtalariga to'g'ridan-to'g'ri yetkazadi.": ["В Ташкенте собственная дистрибьюторская команда компании доставляет продукцию напрямую в магазины и заведения HoReCa.", "In Tashkent, our own distribution team delivers directly to shops and HoReCa venues."],
    "Afzalliklarimiz": ["Наши преимущества", "Our advantages"],
    "Nega aynan Aberno?": ["Почему именно Aberno?", "Why Aberno?"],
    "O'z ishlab chiqarishimiz": ["Собственное производство", "Own production"],
    "Xom ashyodan tayyor mahsulotgacha — barcha jarayon bitta korxonada.": ["От сырья до готового продукта — весь процесс на одном предприятии.", "From raw material to finished product — the whole process under one roof."],
    "Sifat nazorati": ["Контроль качества", "Quality control"],
    "Har bir partiya laboratoriyada tekshiriladi va sertifikat bilan yetkaziladi.": ["Каждая партия проверяется в лаборатории и поставляется с сертификатом.", "Every batch is lab-tested and shipped with a certificate."],
    "Vositachilarsiz, to'g'ridan-to'g'ri ishlab chiqaruvchidan raqobatbardosh narx.": ["Конкурентная цена напрямую от производителя, без посредников.", "Competitive prices direct from the manufacturer, no middlemen."],
    "Barqaror yetkazish": ["Стабильные поставки", "Reliable supply"],
    "Keng dilerlik tarmog'i va o'z logistikamiz tufayli o'z vaqtida yetkazamiz.": ["Широкая дилерская сеть и собственная логистика обеспечивают своевременную доставку.", "A wide dealer network and our own logistics ensure on-time delivery."],
    "Hamkorlikka tayyormisiz?": ["Готовы к сотрудничеству?", "Ready to partner with us?"],
    "Dilerlik, eksport yoki ulgurji xarid bo'yicha so'rov qoldiring — menejerimiz 1 ish kuni ichida bog'lanadi.": ["Оставьте запрос по дилерству, экспорту или оптовой закупке — менеджер свяжется с вами в течение 1 рабочего дня.", "Send a request about dealership, export or wholesale — our manager will contact you within 1 business day."],
    "Qo'ng'iroq qilish": ["Позвонить", "Call us"],

    /* ---------- Biz haqimizda ---------- */
    "Aberno — gigiyena va oziq-ovqat mahsulotlarini ishlab chiqaruvchi, O'zbekiston bozori va eksportga ishlaydigan korxona.": ["Aberno — производитель гигиенической и пищевой продукции для рынка Узбекистана и на экспорт.", "Aberno manufactures hygiene and food products for the Uzbek market and for export."],
    "2 ta": ["2", "2"],
    "ishlab chiqarish yo'nalishi": ["производственных направления", "production lines"],
    "Xom ashyodan tayyor mahsulotgacha": ["От сырья до готового продукта", "From raw material to finished product"],
    "Aberno korxonasi ikki yo'nalishda ishlab chiqarish faoliyatini yuritadi:": ["Компания Aberno ведёт производство по двум направлениям:", "Aberno operates two production lines:"],
    "tissue qog'oz (salfetka xom ashyosi) va salfetkalar": ["бумага tissue (сырьё для салфеток) и салфетки", "tissue paper (napkin base paper) and napkins"],
    "hamda": ["а также", "as well as"],
    "margarin va saryog'": ["маргарин и сливочное масло", "margarine and butter"],
    "Biz xom ashyoni o'zimiz ishlab chiqaramiz, shu sababli tayyor mahsulot sifati va narxini to'liq nazorat qilamiz. Salfetka xom ashyosi boshqa ishlab chiqaruvchilarga ham sotiladi va eksport qilinadi.": ["Мы сами производим сырьё, поэтому полностью контролируем качество и цену готовой продукции. Сырьё для салфеток также продаётся другим производителям и экспортируется.", "We produce our own raw material, so we fully control the quality and price of the finished product. Our napkin base paper is also sold to other manufacturers and exported."],
    "Zamonaviy uskunalar va avtomatlashtirilgan liniyalar": ["Современное оборудование и автоматизированные линии", "Modern equipment and automated lines"],
    "Har bir partiya bo'yicha laboratoriya nazorati": ["Лабораторный контроль каждой партии", "Laboratory control of every batch"],
    "O'z omborxonalari va logistika tizimi": ["Собственные склады и логистика", "Own warehouses and logistics"],
    "Qadriyatlarimiz": ["Наши ценности", "Our values"],
    "Bizni nima harakatlantiradi": ["Что нами движет", "What drives us"],
    "Missiya": ["Миссия", "Mission"],
    "Har bir oila va biznesni sifatli, xavfsiz va hamyonbop mahsulotlar bilan ta'minlash.": ["Обеспечивать каждую семью и бизнес качественной, безопасной и доступной продукцией.", "To provide every family and business with quality, safe and affordable products."],
    "Vizyon": ["Видение", "Vision"],
    "O'zbekistonda va Markaziy Osiyoda gigiyena hamda yog' mahsulotlari bo'yicha yetakchi brendga aylanish.": ["Стать ведущим брендом гигиенической и масложировой продукции в Узбекистане и Центральной Азии.", "To become the leading hygiene and dairy-fat brand in Uzbekistan and Central Asia."],
    "Dilerlar va mijozlar bilan uzoq muddatli, ochiq va halol munosabatlar.": ["Долгосрочные, открытые и честные отношения с дилерами и клиентами.", "Long-term, open and honest relationships with dealers and customers."],
    "laboratoriya nazorati": ["лабораторный контроль", "laboratory control"],
    "Ishlab chiqarish": ["Производство", "Production"],
    "Sifat — har bir bosqichda": ["Качество — на каждом этапе", "Quality at every stage"],
    "Yog' mahsulotlari sexida xom ashyo qabul qilishdan tortib qadoqlashgacha bo'lgan jarayon sanitariya me'yorlari asosida tashkil etilgan. Tissue qog'oz liniyasida esa qog'ozning zichligi, qatlamlar soni va mustahkamligi doimiy o'lchab boriladi.": ["В цехе масложировой продукции весь процесс — от приёмки сырья до фасовки — организован по санитарным нормам. На линии бумаги tissue постоянно измеряются плотность, слойность и прочность бумаги.", "In the fats shop, every step from raw-material intake to packing follows sanitary standards. On the tissue line, paper density, ply count and strength are measured continuously."],
    "Kiruvchi xom ashyo nazorati": ["Входной контроль сырья", "Incoming raw-material inspection"],
    "Ishlab chiqarish jarayonidagi nazorat": ["Контроль в процессе производства", "In-process control"],
    "Tayyor mahsulot sertifikatlanishi": ["Сертификация готовой продукции", "Finished-product certification"],
    "Rivojlanish yo'li": ["Путь развития", "Our journey"],
    "Bizning tariximiz": ["Наша история", "Our history"],
    "Korxona bosqichma-bosqich o'sib, bugun ichki bozor va eksportga ishlaydigan ishlab chiqaruvchiga aylandi.": ["Шаг за шагом предприятие выросло в производителя, работающего на внутренний рынок и на экспорт.", "Step by step, the company has grown into a manufacturer serving both the domestic market and export."],
    "1-BOSQICH": ["ЭТАП 1", "STAGE 1"],
    "2-BOSQICH": ["ЭТАП 2", "STAGE 2"],
    "3-BOSQICH": ["ЭТАП 3", "STAGE 3"],
    "BUGUN": ["СЕГОДНЯ", "TODAY"],
    "Korxona tashkil etildi": ["Основание предприятия", "Company founded"],
    "Salfetka ishlab chiqarish liniyasi ishga tushirildi.": ["Запущена линия по производству салфеток.", "The napkin production line was launched."],
    "Xom ashyo ishlab chiqarish": ["Производство сырья", "Raw-material production"],
    "Tissue qog'oz (jumbo rulon) ishlab chiqarish yo'lga qo'yildi.": ["Налажено производство бумаги tissue (джамбо-рулонов).", "Production of tissue paper (jumbo rolls) began."],
    "Yog' mahsulotlari sexi": ["Цех масложировой продукции", "Fats production shop"],
    "Margarin va saryog' ishlab chiqarish boshlandi.": ["Начато производство маргарина и сливочного масла.", "Margarine and butter production started."],
    "Eksport va keng tarmoq": ["Экспорт и широкая сеть", "Export and a wide network"],
    "Viloyatlarda dilerlik tarmog'i, Toshkentda o'z distribyutsiyasi va xorijga eksport.": ["Дилерская сеть в регионах, собственная дистрибуция в Ташкенте и экспорт за рубеж.", "A dealer network in the regions, our own distribution in Tashkent and export abroad."],
    "Korxonamiz bilan tanishing": ["Познакомьтесь с нашим предприятием", "Get to know our company"],
    "Ishlab chiqarishni ko'rish yoki hamkorlikni muhokama qilish uchun biz bilan bog'laning.": ["Свяжитесь с нами, чтобы увидеть производство или обсудить сотрудничество.", "Contact us to visit our production or discuss a partnership."],
    "Bog'lanish": ["Связаться", "Get in touch"],

    /* ---------- Mahsulotlar ---------- */
    "Salfetka xom ashyosi, salfetkalar, margarin va saryog' — chakana, ulgurji va eksport uchun turli qadoqlarda.": ["Сырьё для салфеток, салфетки, маргарин и сливочное масло — в разной фасовке для розницы, опта и экспорта.", "Napkin base paper, napkins, margarine and butter — in various packs for retail, wholesale and export."],
    "Mahsulot turlari": ["Виды продукции", "Product categories"],
    "Barchasi": ["Все", "All"],
    "Eksport mahsulotlari": ["Экспортная продукция", "Export products"],
    "Xom ashyo": ["Сырьё", "Raw material"],
    "Jumbo rulon — 1 qatlamli": ["Джамбо-рулон — 1 слой", "Jumbo roll — 1-ply"],
    "Salfetka va boshqa tissue mahsulotlari ishlab chiqarish uchun asosiy xom ashyo.": ["Основное сырьё для производства салфеток и другой продукции tissue.", "The main raw material for napkins and other tissue products."],
    "Zichlik": ["Плотность", "Density"],
    "16–18 g/m²": ["16–18 г/м²", "16–18 g/m²"],
    "Rang": ["Цвет", "Colour"],
    "Oq": ["Белый", "White"],
    "Kenglik": ["Ширина", "Width"],
    "Buyurtma bo'yicha": ["Под заказ", "Made to order"],
    "Narx so'rash": ["Узнать цену", "Request a price"],
    "Jumbo rulon — 2 qatlamli": ["Джамбо-рулон — 2 слоя", "Jumbo roll — 2-ply"],
    "Yumshoq va mustahkam, premium salfetka hamda qutili salfetkalar uchun.": ["Мягкий и прочный — для премиальных салфеток и салфеток в коробках.", "Soft and strong — for premium and boxed napkins."],
    "2 × 14–16 g/m²": ["2 × 14–16 г/м²", "2 × 14–16 g/m²"],
    "Rulon og'irligi": ["Вес рулона", "Roll weight"],
    "Salfetka": ["Салфетки", "Napkins"],
    "Stol salfetkalari": ["Столовые салфетки", "Table napkins"],
    "Uy, kafe va restoranlar uchun kundalik stol salfetkalari.": ["Повседневные столовые салфетки для дома, кафе и ресторанов.", "Everyday table napkins for homes, cafés and restaurants."],
    "O'lcham": ["Размер", "Size"],
    "24×24 / 33×33 sm": ["24×24 / 33×33 см", "24×24 / 33×33 cm"],
    "Qatlam": ["Слойность", "Ply"],
    "Qadoq": ["Упаковка", "Pack"],
    "50–100 dona": ["50–100 шт.", "50–100 pcs"],
    "Qutili salfetkalar": ["Салфетки в коробках", "Boxed tissues"],
    "Karton qutidagi yumshoq kosmetik salfetkalar — uy va ofis uchun.": ["Мягкие косметические салфетки в картонной коробке — для дома и офиса.", "Soft facial tissues in a cardboard box — for home and office."],
    "Qutida": ["В коробке", "Per box"],
    "100–200 dona": ["100–200 шт.", "100–200 pcs"],
    "Blokda": ["В блоке", "Per case"],
    "HoReCa salfetkalari": ["Салфетки для HoReCa", "HoReCa napkins"],
    "Restoran, kafe va oshxonalar uchun yirik ulgurji qadoqdagi salfetkalar.": ["Салфетки в крупной оптовой упаковке для ресторанов, кафе и столовых.", "Napkins in bulk wholesale packs for restaurants, cafés and canteens."],
    "Format": ["Формат", "Format"],
    "Stol / dispenser": ["Столовые / для диспенсера", "Table / dispenser"],
    "Katta blok": ["Крупный блок", "Large case"],
    "Brending": ["Брендирование", "Branding"],
    "Logotip bilan mumkin": ["Возможно с логотипом", "Custom logo available"],
    "Saryog' 82,5%": ["Сливочное масло 82,5%", "Butter 82.5%"],
    "Tabiiy qaymoqdan tayyorlangan, yuqori yog'lilikdagi klassik saryog'.": ["Классическое сливочное масло высокой жирности из натуральных сливок.", "Classic high-fat butter made from natural cream."],
    "Yog'lilik": ["Жирность", "Fat content"],
    "180 g / 500 g": ["180 г / 500 г", "180 g / 500 g"],
    "Saqlash": ["Хранение", "Storage"],
    "Saryog' 72,5%": ["Сливочное масло 72,5%", "Butter 72.5%"],
    "Kundalik iste'mol va pishiriqlar uchun an'anaviy saryog'.": ["Традиционное сливочное масло для каждого дня и выпечки.", "Traditional butter for everyday use and baking."],
    "180 g / 5 kg": ["180 г / 5 кг", "180 g / 5 kg"],
    "Stol margarini": ["Столовый маргарин", "Table margarine"],
    "Nonga surtish va taom tayyorlash uchun yumshoq margarin, idishda.": ["Мягкий маргарин в ванночке — для бутербродов и приготовления блюд.", "Soft margarine in a tub — for spreading and cooking."],
    "250 g / 500 g idish": ["250 г / 500 г, ванночка", "250 g / 500 g tub"],
    "Qandolatchilik margarini": ["Кондитерский маргарин", "Bakery margarine"],
    "Novvoyxona va qandolatchilik sexlari uchun — xamir, krem va qatlama uchun.": ["Для пекарен и кондитерских цехов — для теста, кремов и слоёной выпечки.", "For bakeries and confectioneries — for dough, creams and laminated pastry."],
    "10 kg / 20 kg quti": ["10 кг / 20 кг, короб", "10 kg / 20 kg box"],
    "Kerakli mahsulotni topa olmadingizmi?": ["Не нашли нужный продукт?", "Can't find what you need?"],
    "Individual qadoq, o'lcham yoki o'z brendingiz ostida ishlab chiqarish (private label) bo'yicha so'rov qoldiring.": ["Оставьте запрос на индивидуальную упаковку, размер или производство под вашим брендом (private label).", "Send a request for custom packaging, sizes or production under your own brand (private label)."],

    /* ---------- Eksport ---------- */
    "Salfetka xom ashyosi va tayyor mahsulotlarimizni xorijiy hamkorlarga barqaror hajmda va raqobatbardosh narxda yetkazib beramiz.": ["Поставляем сырьё для салфеток и готовую продукцию зарубежным партнёрам стабильными объёмами и по конкурентной цене.", "We supply napkin base paper and finished products to foreign partners in steady volumes at competitive prices."],
    "Eksport yo'nalishi": ["Экспортное направление", "Export"],
    "Ishlab chiqaruvchidan to'g'ridan-to'g'ri": ["Напрямую от производителя", "Direct from the manufacturer"],
    "Aberno o'zi ishlab chiqargan tissue qog'oz (jumbo rulon) va salfetkalarni eksport qiladi. Xom ashyo va tayyor mahsulot bir korxonada ishlab chiqarilgani uchun sifat barqaror, narx esa vositachilarsiz shakllanadi.": ["Aberno экспортирует бумагу tissue (джамбо-рулоны) и салфетки собственного производства. Сырьё и готовая продукция выпускаются на одном предприятии, поэтому качество стабильно, а цена формируется без посредников.", "Aberno exports tissue paper (jumbo rolls) and napkins of its own production. Because raw material and finished goods are made at one plant, quality is consistent and prices carry no middleman margin."],
    "Jumbo rulonlar — salfetka ishlab chiqaruvchilar uchun": ["Джамбо-рулоны — для производителей салфеток", "Jumbo rolls — for napkin converters"],
    "Tayyor salfetkalar — distribyutor va savdo tarmoqlari uchun": ["Готовые салфетки — для дистрибьюторов и торговых сетей", "Finished napkins — for distributors and retail chains"],
    "Hamkor brendi ostida ishlab chiqarish (private label)": ["Производство под брендом партнёра (private label)", "Production under the partner's brand (private label)"],
    "Eksport uchun zarur hujjatlar to'liq tayyorlanadi": ["Полный пакет экспортных документов", "Full set of export documents"],
    "Eksport so'rovi": ["Экспортный запрос", "Export inquiry"],
    "yetkazish shartlari": ["условия поставки", "delivery terms"],
    "Geografiya": ["География", "Geography"],
    "Eksport bozorlari": ["Экспортные рынки", "Export markets"],
    "Mahsulotlarimiz Markaziy Osiyo va qo'shni davlatlar bozorlariga yetkaziladi. Yangi bozorlardagi hamkorlar bilan ishlashga ochiqmiz.": ["Наша продукция поставляется на рынки Центральной Азии и соседних стран. Мы открыты к сотрудничеству с партнёрами на новых рынках.", "Our products reach Central Asia and neighbouring markets. We are open to partners in new markets."],
    "Qozog'iston": ["Казахстан", "Kazakhstan"],
    "Qirg'iziston": ["Кыргызстан", "Kyrgyzstan"],
    "Tojikiston": ["Таджикистан", "Tajikistan"],
    "Turkmaniston": ["Туркменистан", "Turkmenistan"],
    "Afg'oniston": ["Афганистан", "Afghanistan"],
    "Rossiya": ["Россия", "Russia"],
    "Afzalliklar": ["Преимущества", "Advantages"],
    "Nega eksport hamkorlari bizni tanlaydi": ["Почему экспортные партнёры выбирают нас", "Why export partners choose us"],
    "Barqaror hajm": ["Стабильные объёмы", "Steady volumes"],
    "O'z ishlab chiqarish quvvatimiz muntazam partiyalarni kafolatlaydi.": ["Собственные мощности гарантируют регулярные поставки.", "Our own capacity guarantees regular shipments."],
    "To'liq hujjatlar": ["Полный пакет документов", "Complete paperwork"],
    "Sifat sertifikati, kelib chiqish sertifikati va boshqa eksport hujjatlari.": ["Сертификат качества, сертификат происхождения и другие экспортные документы.", "Quality certificate, certificate of origin and other export documents."],
    "Moslashuvchan buyurtma": ["Гибкие заказы", "Flexible orders"],
    "Rulon kengligi, zichlik, qadoq va brending — hamkor talabiga ko'ra.": ["Ширина рулона, плотность, упаковка и брендирование — по требованию партнёра.", "Roll width, density, packaging and branding — to the partner's specification."],
    "Jarayon": ["Процесс", "Process"],
    "Hamkorlik bosqichlari": ["Этапы сотрудничества", "How we work together"],
    "So'rov": ["Запрос", "Inquiry"],
    "Mahsulot, hajm va yetkazish manzilini ko'rsatib so'rov yuborasiz.": ["Вы отправляете запрос с указанием продукта, объёма и адреса доставки.", "You send an inquiry with the product, volume and delivery address."],
    "Taklif va namuna": ["Предложение и образец", "Offer and sample"],
    "Tijorat taklifi tayyorlaymiz, kerak bo'lsa namuna jo'natamiz.": ["Готовим коммерческое предложение и при необходимости отправляем образец.", "We prepare a commercial offer and send a sample if needed."],
    "Narx, to'lov va yetkazish shartlari kelishilib, shartnoma imzolanadi.": ["Согласовываем цену, оплату и условия поставки, подписываем договор.", "Price, payment and delivery terms are agreed and the contract is signed."],
    "Yetkazish": ["Поставка", "Delivery"],
    "Mahsulot hujjatlari bilan birga kelishilgan manzilga jo'natiladi.": ["Продукция отправляется с документами по согласованному адресу.", "Goods are shipped with documents to the agreed address."],
    "Eksport bo'yicha tijorat taklifi oling": ["Получите коммерческое предложение по экспорту", "Get an export quotation"],
    "Export department: info@aberno.uz — rus va ingliz tillarida ham javob beramiz.": ["Экспортный отдел: info@aberno.uz — отвечаем также на русском и английском.", "Export department: info@aberno.uz — we also reply in Russian and English."],

    /* ---------- Hamkorlik / dilerlar ---------- */
    "Hamkorlik va dilerlar": ["Сотрудничество и дилеры", "Partnership and dealers"],
    "Viloyatlarda rasmiy dilerlarimiz, Toshkent shahrida esa korxonaning o'z distribyutorlik jamoasi orqali ishlaymiz.": ["В регионах мы работаем через официальных дилеров, а в Ташкенте — через собственную дистрибьюторскую команду.", "In the regions we work through official dealers, and in Tashkent through our own distribution team."],
    "Viloyatlar": ["Регионы", "Regions"],
    "Rasmiy dilerlarimiz": ["Наши официальные дилеры", "Our official dealers"],
    "O'z hududingizni tanlang va rasmiy diler bilan bog'laning. Ulgurji xarid viloyatlarda faqat dilerlar orqali amalga oshiriladi.": ["Выберите свой регион и свяжитесь с официальным дилером. Оптовые закупки в регионах осуществляются только через дилеров.", "Choose your region and contact the official dealer. Wholesale purchases in the regions are made only through dealers."],
    "Viloyat nomini yozing…": ["Введите название региона…", "Type a region name…"],
    "Viloyat qidirish": ["Поиск региона", "Search regions"],
    "Diler": ["Дилер", "Dealer"],
    "Diler:": ["Дилер:", "Dealer:"],
    "[nomi]": ["[название]", "[name]"],
    "Tel:": ["Тел.:", "Phone:"],
    "Manzil:": ["Адрес:", "Address:"],
    "Qoraqalpog'iston Resp.": ["Респ. Каракалпакстан", "Republic of Karakalpakstan"],
    "Andijon viloyati": ["Андижанская обл.", "Andijan region"],
    "Buxoro viloyati": ["Бухарская обл.", "Bukhara region"],
    "Farg'ona viloyati": ["Ферганская обл.", "Fergana region"],
    "Jizzax viloyati": ["Джизакская обл.", "Jizzakh region"],
    "Xorazm viloyati": ["Хорезмская обл.", "Khorezm region"],
    "Namangan viloyati": ["Наманганская обл.", "Namangan region"],
    "Navoiy viloyati": ["Навоийская обл.", "Navoi region"],
    "Qashqadaryo viloyati": ["Кашкадарьинская обл.", "Kashkadarya region"],
    "Samarqand viloyati": ["Самаркандская обл.", "Samarkand region"],
    "Sirdaryo viloyati": ["Сырдарьинская обл.", "Syrdarya region"],
    "Surxondaryo viloyati": ["Сурхандарьинская обл.", "Surkhandarya region"],
    "Toshkent viloyati": ["Ташкентская обл.", "Tashkent region"],
    "Toshkent shahri": ["г. Ташкент", "Tashkent city"],
    "Nukus sh.": ["г. Нукус", "Nukus"],
    "Andijon sh.": ["г. Андижан", "Andijan"],
    "Buxoro sh.": ["г. Бухара", "Bukhara"],
    "Farg'ona sh.": ["г. Фергана", "Fergana"],
    "Jizzax sh.": ["г. Джизак", "Jizzakh"],
    "Urganch sh.": ["г. Ургенч", "Urgench"],
    "Namangan sh.": ["г. Наманган", "Namangan"],
    "Navoiy sh.": ["г. Навои", "Navoi"],
    "Qarshi sh.": ["г. Карши", "Karshi"],
    "Samarqand sh.": ["г. Самарканд", "Samarkand"],
    "Guliston sh.": ["г. Гулистан", "Gulistan"],
    "Termiz sh.": ["г. Термез", "Termez"],
    "Nurafshon sh.": ["г. Нурафшан", "Nurafshan"],
    "O'z distribyutsiya": ["Своя дистрибуция", "Own distribution"],
    "Toshkent shahrida korxonaning o'z distribyutorlik jamoasi ishlaydi.": ["В Ташкенте работает собственная дистрибьюторская команда компании.", "In Tashkent, the company's own distribution team operates."],
    "O'z distribyutorlik jamoamiz": ["Наша дистрибьюторская команда", "Our own distribution team"],
    "Toshkent shahrida mahsulotlarimiz vositachilarsiz — korxonaning o'z savdo agentlari va yetkazib berish xizmati orqali sotiladi. Bu eng yangi mahsulot va zavod narxini kafolatlaydi.": ["В Ташкенте наша продукция продаётся без посредников — через собственных торговых агентов и службу доставки компании. Это гарантирует самую свежую продукцию и заводскую цену.", "In Tashkent our products are sold without middlemen — through the company's own sales agents and delivery service. This guarantees the freshest products at factory prices."],
    "Do'konlar, minimarketlar va supermarketlar": ["Магазины, минимаркеты и супермаркеты", "Shops, minimarkets and supermarkets"],
    "Kafe, restoran va oshxonalar (HoReCa)": ["Кафе, рестораны и столовые (HoReCa)", "Cafés, restaurants and canteens (HoReCa)"],
    "Novvoyxona va qandolatchilik sexlari": ["Пекарни и кондитерские цеха", "Bakeries and confectioneries"],
    "Ofis va korporativ mijozlar": ["Офисы и корпоративные клиенты", "Offices and corporate clients"],
    "Savdo agentini chaqirish": ["Вызвать торгового агента", "Request a sales agent"],
    "Tezkor yetkazish": ["Быстрая доставка", "Fast delivery"],
    "Buyurtma kelishilgan kunda o'z transportimizda yetkaziladi.": ["Заказ доставляется нашим транспортом в согласованный день.", "Orders are delivered by our own vehicles on the agreed day."],
    "Shaxsiy agent": ["Персональный агент", "Personal agent"],
    "Har bir savdo nuqtasiga biriktirilgan savdo agenti.": ["За каждой торговой точкой закреплён торговый агент.", "Each outlet has a dedicated sales agent."],
    "Vositachi ustamasisiz to'g'ridan-to'g'ri narx.": ["Прямая цена без наценки посредников.", "Direct prices with no middleman markup."],
    "Merchandising": ["Мерчандайзинг", "Merchandising"],
    "Mahsulotni javonda to'g'ri joylashtirishda yordam.": ["Помощь в правильной выкладке товара на полке.", "Help with proper shelf placement."],
    "Diler bo'ling": ["Станьте дилером", "Become a dealer"],
    "Aberno dileri bo'lish": ["Как стать дилером Aberno", "Becoming an Aberno dealer"],
    "Hududingizda rasmiy diler bo'lib, tanilgan mahsulotlar bilan barqaror daromadga ega bo'ling.": ["Станьте официальным дилером в своём регионе и получайте стабильный доход с известной продукцией.", "Become the official dealer in your region and earn a steady income with well-known products."],
    "Ariza": ["Заявка", "Application"],
    "Sayt orqali yoki telefon orqali ariza qoldirasiz.": ["Вы оставляете заявку на сайте или по телефону.", "You apply via the website or by phone."],
    "Uchrashuv": ["Встреча", "Meeting"],
    "Menejerimiz shartlar va hudud bo'yicha siz bilan uchrashadi.": ["Наш менеджер встречается с вами, чтобы обсудить условия и регион.", "Our manager meets you to discuss terms and territory."],
    "Dilerlik shartnomasi imzolanadi va narxlar kelishiladi.": ["Подписывается дилерский договор и согласовываются цены.", "The dealer agreement is signed and prices are agreed."],
    "Birinchi partiya": ["Первая партия", "First shipment"],
    "Birinchi yetkazish va marketing materiallari bilan boshlaysiz.": ["Вы начинаете с первой поставки и маркетинговых материалов.", "You start with the first delivery and marketing materials."],
    "Dilerga nima beramiz": ["Что мы даём дилеру", "What we offer dealers"],
    "Maxsus dilerlik narxlari va chegirmalar": ["Специальные дилерские цены и скидки", "Special dealer prices and discounts"],
    "Hudud bo'yicha eksklyuziv huquq (kelishuv asosida)": ["Эксклюзивные права на регион (по договорённости)", "Exclusive territorial rights (by agreement)"],
    "Reklama va POS-materiallar": ["Реклама и POS-материалы", "Advertising and POS materials"],
    "Muntazam va o'z vaqtida yetkazib berish": ["Регулярные и своевременные поставки", "Regular, on-time deliveries"],
    "Dilerdan kutadiganlarimiz": ["Что мы ждём от дилера", "What we expect from dealers"],
    "Omborxona va yuk tashish imkoniyati": ["Склад и возможность перевозки грузов", "A warehouse and transport capacity"],
    "Hududdagi savdo nuqtalari bilan aloqa": ["Связи с торговыми точками в регионе", "Relationships with outlets in the region"],
    "Ro'yxatdan o'tgan yuridik shaxs yoki YaTT": ["Зарегистрированное юрлицо или ИП", "A registered company or sole proprietor"],
    "Minimal oylik buyurtma hajmi": ["Минимальный ежемесячный объём заказа", "A minimum monthly order volume"],
    "Hududingizda diler bo'ling": ["Станьте дилером в своём регионе", "Become a dealer in your region"],
    "Ariza qoldiring — 1 ish kuni ichida siz bilan bog'lanamiz.": ["Оставьте заявку — мы свяжемся с вами в течение 1 рабочего дня.", "Apply now — we'll contact you within 1 business day."],
    "Ariza qoldirish": ["Оставить заявку", "Apply"],

    /* ---------- Aloqa ---------- */
    "Biz bilan bog'laning": ["Свяжитесь с нами", "Contact us"],
    "Ulgurji buyurtma, dilerlik, eksport yoki Toshkent bo'yicha yetkazib berish — savolingizni yozing, 1 ish kuni ichida javob beramiz.": ["Оптовый заказ, дилерство, экспорт или доставка по Ташкенту — напишите нам, и мы ответим в течение 1 рабочего дня.", "Wholesale orders, dealership, export or delivery in Tashkent — write to us and we'll reply within 1 business day."],
    "Manzil": ["Адрес", "Address"],
    "O'zbekiston, Toshkent sh., [ko'cha, uy]": ["Узбекистан, г. Ташкент, [улица, дом]", "[street, building], Tashkent, Uzbekistan"],
    "Savdo bo'limi": ["Отдел продаж", "Sales department"],
    "Eksport bo'limi": ["Экспортный отдел", "Export department"],
    "Elektron pochta": ["Электронная почта", "Email"],
    "Ish vaqti": ["Время работы", "Working hours"],
    "Dushanba – Shanba, 09:00 – 18:00": ["Понедельник – суббота, 09:00 – 18:00", "Monday – Saturday, 09:00 – 18:00"],
    "Rahmat! So'rovingiz qabul qilindi. Menejerimiz tez orada siz bilan bog'lanadi.": ["Спасибо! Ваш запрос принят. Менеджер скоро свяжется с вами.", "Thank you! Your request has been received. Our manager will contact you shortly."],
    "Ismingiz *": ["Ваше имя *", "Your name *"],
    "Ismingizni kiriting": ["Введите ваше имя", "Please enter your name"],
    "Telefon *": ["Телефон *", "Phone *"],
    "To'g'ri telefon raqam kiriting": ["Введите корректный номер телефона", "Please enter a valid phone number"],
    "Hudud / davlat": ["Регион / страна", "Region / country"],
    "Masalan: Samarqand": ["Например: Самарканд", "e.g. Samarkand"],
    "Mavzu *": ["Тема *", "Subject *"],
    "Tanlang…": ["Выберите…", "Select…"],
    "Diler bo'lish": ["Стать дилером", "Become a dealer"],
    "Toshkent — savdo agenti": ["Ташкент — торговый агент", "Tashkent — sales agent"],
    "Boshqa": ["Другое", "Other"],
    "Mavzuni tanlang": ["Выберите тему", "Please choose a subject"],
    "Xabar": ["Сообщение", "Message"],
    "Qaysi mahsulot, qancha hajm va boshqa tafsilotlar…": ["Какой продукт, какой объём и другие детали…", "Which product, what volume and other details…"],
    "Yuborish": ["Отправить", "Send"],
    "* — majburiy maydonlar": ["* — обязательные поля", "* — required fields"],
    "Aberno xaritada": ["Aberno на карте", "Aberno on the map"]
  };

  const LANGS = ["uz", "ru", "en"];
  const STORAGE_KEY = "aberno-lang";
  const ATTRS = ["placeholder", "aria-label", "title"];
  const norm = (s) => s.replace(/\s+/g, " ").trim();
  const tr = (orig, lang) => {
    if (lang === "uz") return orig;
    const entry = T[norm(orig)];
    return entry ? entry[lang === "ru" ? 0 : 1] : orig;
  };

  /* ---------- Tarjima qilinadigan joylarni bir marta yig'ish ---------- */
  const textNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (node.parentElement.closest("script, style")) continue;
    if (T[norm(node.nodeValue)]) textNodes.push({ node, orig: node.nodeValue });
  }

  const attrItems = [];
  ATTRS.forEach((attr) =>
    document.querySelectorAll(`[${attr}]`).forEach((el) => {
      const v = el.getAttribute(attr);
      if (T[norm(v)]) attrItems.push({ el, attr, orig: v });
    })
  );

  const origTitle = document.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  const origDesc = metaDesc ? metaDesc.content : "";

  /* ---------- Tilni qo'llash ---------- */
  function apply(lang) {
    if (!LANGS.includes(lang)) lang = "uz";

    textNodes.forEach(({ node, orig }) => {
      if (lang === "uz") { node.nodeValue = orig; return; }
      // Atrofdagi bo'sh joylarni saqlaymiz
      const lead = orig.match(/^\s*/)[0];
      const trail = orig.match(/\s*$/)[0];
      node.nodeValue = lead + tr(orig, lang) + trail;
    });
    attrItems.forEach(({ el, attr, orig }) => el.setAttribute(attr, tr(orig, lang)));

    document.title = tr(origTitle, lang);
    if (metaDesc) metaDesc.content = tr(origDesc, lang);
    document.documentElement.lang = lang;

    document.querySelectorAll(".lang button").forEach((b) =>
      b.classList.toggle("is-active", b.textContent.trim().toLowerCase() === lang)
    );

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* saqlab bo'lmasa ham ishlayveradi */ }
  }

  document.querySelectorAll(".lang button").forEach((b) => {
    b.type = "button";
    b.addEventListener("click", () => apply(b.textContent.trim().toLowerCase()));
  });

  let saved = "uz";
  try { saved = localStorage.getItem(STORAGE_KEY) || "uz"; } catch (e) { /* standart — uz */ }
  if (saved !== "uz") apply(saved);

  window.AbernoI18n = { apply };
})();
