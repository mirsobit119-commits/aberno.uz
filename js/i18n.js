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
    "Aberno xaritada": ["Aberno на карте", "Aberno on the map"],

    /* ---------- Katalog asosidagi ma'lumotlar ---------- */
    "Spredlar": ["Спреды", "Spreads"],
    "Smaylo": ["Смайло", "Smaylo"],
    "Smaylo:": ["Смайло:", "Smaylo:"],
    "Slivochniy zavtrak": ["Сливочный завтрак", "Creamy Breakfast"],
    "Telefon": ["Телефон", "Phone"],
    "Telegram va Instagram": ["Telegram и Instagram", "Telegram and Instagram"],
    "tagacha mahsulot pozitsiyasi (SKU)": ["товарных позиций (SKU)", "products (SKU)"],
    "oylik ishlab chiqarish quvvati": ["производственная мощность в месяц", "monthly production capacity"],
    "t": ["т", "t"],
    "xalqaro va milliy sertifikat": ["международных и национальных сертификата", "international and national certificates"],
    "Margarin, spred va eritilgan yog'": ["Маргарин, спреды и топлёный жир", "Margarine, spreads and melted fat"],
    "Margaritto va Smaylo brendlari ostida uy xo'jaligi, novvoyxona va qandolatchilik sexlari uchun mahsulotlar. 2021 yildan beri ishlab chiqaramiz.": ["Продукция под брендами Margaritto и Смайло для дома, пекарен и кондитерских цехов. Производим с 2021 года.", "Products under the Margaritto and Smaylo brands for households, bakeries and confectioneries. Made since 2021."],
    "Margaritto — universal, qatlamli xamir va krem margarinlari": ["Margaritto — универсальный маргарин, для слоёного теста и для кремов", "Margaritto — universal, puff-pastry and cream margarines"],
    "Smaylo va «Slivochniy zavtrak» — o'simlik spredlari": ["Смайло и «Сливочный завтрак» — растительные спреды", "Smaylo and Creamy Breakfast — vegetable spreads"],
    "Chakana (200–500 g) va sanoat (2,5–20 kg) qadoqlari": ["Розничная (200–500 г) и промышленная (2,5–20 кг) фасовка", "Retail (200–500 g) and industrial (2.5–20 kg) packs"],
    "Margaritto margarinlari": ["Маргарины Margaritto", "Margaritto margarines"],
    "Smaylo spredlari": ["Спреды Смайло", "Smaylo spreads"],
    "Qandolatchilik va HoReCa": ["Для кондитеров и HoReCa", "Bakery & HoReCa"],
    "Toshkent sh., Yashnobod tumani, Uysozlar ko'chasi, 72": ["г. Ташкент, Яшнабадский р-н, ул. Уйсозлар, 72", "72 Uysozlar St., Yashnobod district, Tashkent"],

    /* Biz haqimizda */
    "Aberno Butters Group — 2021 yildan beri margarin, spred va eritilgan yog' ishlab chiqaruvchi O'zbekiston korxonasi.": ["Aberno Butters Group — узбекский производитель маргарина, спредов и топлёного жира с 2021 года.", "Aberno Butters Group is an Uzbek producer of margarine, spreads and melted fat since 2021."],
    "yildan beri": ["год основания", "year founded"],
    "Aberno Butters Group 2021 yildan beri yog' va moy-yog' mahsulotlari ishlab chiqaradi. Bugun assortimentimiz 30 tagacha mahsulot pozitsiyasini (SKU) o'z ichiga oladi va biz uni kengaytirish uchun doimiy ravishda yangi mahsulotlar ishlab chiqmoqdamiz.": ["Aberno Butters Group занимается производством жировой и масложировой продукции с 2021 года. Сегодня наш ассортимент включает до 30 товарных позиций (SKU), и мы постоянно разрабатываем новые продукты, чтобы ещё больше расширять ассортимент.", "Aberno Butters Group has been producing fat and oil-fat products since 2021. Today our range includes up to 30 products (SKU), and we keep developing new ones to expand it further."],
    "Kompaniya tarkibida salfetka xom ashyosi va salfetkalar yo'nalishi ham faoliyat yuritadi.": ["В составе компании также работает направление сырья для салфеток и салфеток.", "The company also runs a napkin base paper and napkins division."],
    "Margaritto va Smaylo brendlari": ["Бренды Margaritto и Смайло", "Margaritto and Smaylo brands"],
    "ISO 22000:2018 va HACCP bo'yicha oziq-ovqat xavfsizligi tizimi": ["Система безопасности пищевой продукции ISO 22000:2018 и HACCP", "ISO 22000:2018 and HACCP food safety system"],
    "Halol sertifikatiga ega mahsulotlar": ["Продукция с сертификатом Халяль", "Halal-certified products"],
    "Ishlab chiqarish quvvati": ["Производственная мощность", "Production capacity"],
    "(2000 kg/soat)": ["(2000 кг/ч)", "(2,000 kg/h)"],
    "(1300 kg/soat)": ["(1300 кг/ч)", "(1,300 kg/h)"],
    "Oyiga margarin va spred ishlab chiqarish quvvati": ["Маргарин / спред в месяц — производственная мощность", "Monthly margarine and spread capacity"],
    "Amaldagi oylik ishlab chiqarish hajmi": ["Фактическое производство в месяц", "Actual monthly output"],
    "Missiya va qadriyatlar": ["Миссия и ценности", "Mission and values"],
    "Bizning missiyamiz": ["Наша миссия", "Our mission"],
    "Jamiyatimiz biznesi muvaffaqiyatiga hissa qo'shamiz va oilalarga quvonch hamda ishonch baxsh etadigan sifatli mahsulotlar yaratamiz.": ["Мы вносим вклад в успех бизнеса нашего общества и создаём качественные продукты, которые приносят радость и уверенность семьям.", "We contribute to the success of business in our society and create quality products that bring joy and confidence to families."],
    "Halollik": ["Честность", "Honesty"],
    "Mijozlar, hamkorlar va jamoa oldida ochiq, halol va va'dalarimizga sodiq bo'lish.": ["Быть открытыми, честными и верными своим обещаниям перед клиентами, партнёрами и командой.", "Being open, honest and true to our promises to customers, partners and the team."],
    "Mas'uliyat": ["Ответственность", "Responsibility"],
    "Har bir xodimning o'z ishi sifati va natijasi uchun shaxsiy mas'uliyati.": ["Личная ответственность каждого сотрудника за качество и результаты своей работы.", "Every employee's personal responsibility for the quality and results of their work."],
    "Intizom": ["Дисциплина", "Discipline"],
    "Standartlar, qoidalar va xavfsizlik talablariga doimiy rioya qilish.": ["Постоянное соблюдение стандартов, правил и требований безопасности.", "Consistent compliance with standards, rules and safety requirements."],
    "Rivojlanish": ["Развитие", "Growth"],
    "Jamoaviy ruhda o'rganish, takliflar almashish va kompaniya bilan birga o'sish.": ["Обучение в командном духе, обмен предложениями и совместное развитие вместе с компанией.", "Learning as a team, sharing ideas and growing together with the company."],
    "Birdamlik": ["Единство (командность)", "Unity (teamwork)"],
    "Jamoa a'zolari bir-birini qo'llab-quvvatlaydi.": ["Команда поддерживает друг друга.", "Team members support each other."],
    "Sifat": ["Качество", "Quality"],
    "Sertifikatlarimiz": ["Наши сертификаты", "Our certificates"],
    "Mahsulotlarimiz xalqaro va milliy standartlar talablariga muvofiq ishlab chiqariladi.": ["Наша продукция производится в соответствии с требованиями международных и национальных стандартов.", "Our products are made in line with international and national standards."],
    "Halol sertifikati — World Halal Trust": ["Сертификат Халяль — World Halal Trust", "Halal certificate — World Halal Trust"],
    "ISO 22000:2018 va HACCP — oziq-ovqat xavfsizligi menejmenti tizimi": ["ISO 22000:2018 и HACCP — система менеджмента безопасности пищевой продукции", "ISO 22000:2018 and HACCP — food safety management system"],
    "Muvofiqlik sertifikati — O'zbekiston milliy sertifikatlash tizimi": ["Сертификат соответствия — Национальная система сертификации Узбекистана", "Certificate of conformity — National Certification System of Uzbekistan"],
    "Sanitariya-epidemiologiya xulosasi": ["Санитарно-эпидемиологическое заключение", "Sanitary and epidemiological approval"],

    /* Mahsulotlar */
    "Margaritto va Smaylo brendlari ostida margarin, spred va eritilgan yog' — chakana (200–500 g) hamda sanoat (2,5–20 kg) qadoqlarida.": ["Маргарин, спреды и топлёный жир под брендами Margaritto и Смайло — в розничной (200–500 г) и промышленной (2,5–20 кг) фасовке.", "Margarine, spreads and melted fat under the Margaritto and Smaylo brands — in retail (200–500 g) and industrial (2.5–20 kg) packs."],
    "Aberno mahsulotlari: Margaritto margarinlari, Smaylo spredlari, eritilgan yog' hamda salfetkalar. Chakana, ulgurji va eksport uchun.": ["Продукция Aberno: маргарины Margaritto, спреды Смайло, топлёный жир и салфетки. Для розницы, опта и экспорта.", "Aberno products: Margaritto margarines, Smaylo spreads, melted fat and napkins. For retail, wholesale and export."],
    "Chakana qadoq": ["Розничная фасовка", "Retail packs"],
    "O'simlik-qaymoqli spred": ["Растительно-сливочный спред", "Vegetable-cream spread"],
    "O'simlik spredi": ["Растительный спред", "Vegetable spread"],
    "Eritilgan o'simlik yog'i": ["Топлёный растительный жир", "Melted vegetable fat"],
    "Quti o'lchami": ["Размер коробки", "Box size"],
    "Nima tayyorlash mumkin:": ["Что можно приготовить:", "What you can make:"],
    "Margaritto universal 80%": ["Margaritto «Универсальный» 80%", "Margaritto Universal 80%"],
    "Qaymoq ta'mli universal margarin — turli qandolat mahsulotlari uchun. Un mahsulotlari, qumoq xamir, non va xamirturushli xamir uchun mos; asosan uy pishiriqlarida ishlatiladi.": ["Универсальный маргарин со сливочным вкусом для различных кондитерских изделий. Подходит для мучных изделий, песочного теста, хлеба и изделий из дрожжевого теста; в основном используется в домашней выпечке.", "Universal margarine with a creamy taste for all kinds of confectionery. Suitable for flour products, shortcrust, bread and yeast dough; mainly used in home baking."],
    "Margaritto qatlamli xamir uchun 80%": ["Margaritto «Слоёнка» 80%", "Margaritto Puff Pastry 80%"],
    "Qatlamli xamir mahsulotlari uchun maxsus ishlab chiqilgan. Qatlamlar aniq va yaxshi ajraladi, mahsulot hajmli chiqadi. Asosan uy pishiriqlarida ishlatiladi.": ["Специально разработан для изделий из слоёного теста: чёткие, хорошо разделённые слои и хороший объём. В основном используется в домашней выпечке.", "Specially developed for puff pastry: crisp, well-separated layers and good volume. Mainly used in home baking."],
    "Smaylo 82,5%": ["Смайло 82,5%", "Smaylo 82.5%"],
    "Ajoyib ta'mga ega o'simlik-qaymoqli spred — saryog'ga munosib muqobil. Buterbrodlar, garnirlar, pechenye, pryanik, keks hamda non-bulka mahsulotlari uchun.": ["Растительно-сливочный спред с отличным вкусом — прекрасная альтернатива сливочному маслу. Для бутербродов, гарниров, печенья, пряников, кексов и хлебобулочных изделий.", "A vegetable-cream spread with excellent taste — a great alternative to butter. For sandwiches, side dishes, cookies, gingerbread, muffins and bakery products."],
    "Smaylo «Dasturxoningiz uchun» 72%": ["Смайло «Для вашего стола» 72%", "Smaylo “For Your Table” 72%"],
    "Ajoyib ta'mli o'simlik-yog' mahsuloti. Buterbrodlar, sut mahsulotlari va garnirlarga qo'shimcha, sabzavot va go'sht qovurish, pechenye, pryanik, keks hamda non va bulkalar uchun.": ["Растительно-жировой продукт с отличными вкусовыми качествами. Для бутербродов, добавления в молочные продукты и гарниры, жарки овощей и мяса, печенья, пряников, кексов, хлеба и булочек.", "A vegetable-fat product with excellent taste. For sandwiches, dairy dishes and sides, frying vegetables and meat, cookies, gingerbread, muffins, bread and buns."],
    "Margaritto 82% qaymoq ta'mli": ["Margaritto 82% — сливочный вкус", "Margaritto 82% creamy taste"],
    "Qandolat va xamirturushli xamir asosidagi non-bulka mahsulotlari uchun maxsus. Mahsulot hajmli chiqadi, yaxshi ko'tariladi va uzoqroq yangi saqlanadi.": ["Специально для кондитерских и хлебобулочных изделий на дрожжевом тесте. Изделия получаются объёмными, хорошо поднимаются и дольше сохраняют свежесть.", "Designed for confectionery and yeast-dough bakery. Products rise well, gain volume and stay fresh longer."],
    "Margaritto 72% qaymoq ta'mli": ["Margaritto 72% — сливочный вкус", "Margaritto 72% creamy taste"],
    "To'yingan qaymoq ta'mli margarin — turli qandolat mahsulotlari, un mahsulotlari, non va xamirturushli xamir pishiriqlari uchun.": ["Маргарин с насыщенным сливочным вкусом для кондитерских и мучных изделий, хлеба и выпечки из дрожжевого теста.", "Margarine with a rich creamy taste for confectionery, flour products, bread and yeast-dough baking."],
    "Margaritto 72% kremlar uchun": ["Margaritto 72% для кремов", "Margaritto 72% for creams"],
    "Kremlar uchun maxsus: ochroq oq rang, nozik qaymoq ta'mi va hidi. Krem shaklini uzoq saqlaydi. 1000 kg dan ortiq buyurtmada plombir ta'mi bilan ishlab chiqarish mumkin.": ["Специально для кремов: более светлый белый цвет, нежный сливочный вкус и аромат. Крем дольше держит форму. При заказе от 1000 кг возможен вкус пломбира.", "Made for creams: lighter white colour, delicate creamy taste and aroma. Creams hold their shape longer. Plombir (ice-cream) flavour available for orders from 1,000 kg."],
    "Margaritto 80% kremlar uchun": ["Margaritto 80% для кремов", "Margaritto 80% for creams"],
    "Premium qandolat kremlari uchun. 72% li krem margariniga nisbatan kattaroq hajm va uzoqroq barqarorlik beradi. 1000 kg dan ortiq buyurtmada plombir ta'mi mumkin.": ["Для премиальных кондитерских кремов. По сравнению с маргарином 72% даёт больший объём и более длительную стабильность. При заказе от 1000 кг возможен вкус пломбира.", "For premium confectionery creams. Compared with the 72% cream margarine it gives more volume and longer stability. Plombir flavour available for orders from 1,000 kg."],
    "Margaritto qatlamli xamir uchun 80% (10 kg)": ["Margaritto для слоёного теста 80% (10 кг)", "Margaritto Puff Pastry 80% (10 kg)"],
    "Qatlamli xamir uchun sanoat qadog'i — asosan somsa ishlab chiqaruvchilar uchun, eritib yoki eritmasdan ishlatiladi. Boshqa qandolat mahsulotlari uchun tavsiya etilmaydi.": ["Промышленная фасовка для слоёного теста — в основном для производителей самсы, с плавлением и без. Для других кондитерских изделий не рекомендуется.", "Industrial pack for puff pastry — mainly for samsa producers, used melted or unmelted. Not recommended for other confectionery."],
    "Margaritto «Toplyonka» 99%": ["Margaritto «Топлёнка» 99%", "Margaritto Melted Fat 99%"],
    "Xamirturushli va qumoq xamir hamda qandolat mahsulotlari uchun. Margaringa nisbatan sifatliroq va hajmliroq natija beradi; frityurda qovurish va tovuq taomlari uchun ham mos.": ["Для дрожжевого и песочного теста и кондитерских изделий. По сравнению с маргарином даёт более высокое качество и объём; подходит для фритюра и блюд из курицы.", "For yeast dough, shortcrust and confectionery. Gives higher quality and more volume than margarine; also suitable for deep-frying and chicken dishes."],
    "Smaylo 72% (2,5 kg)": ["Смайло 72% (2,5 кг)", "Smaylo 72% (2.5 kg)"],
    "«Slivochniy zavtrak» 72%": ["«Сливочный завтрак» 72%", "“Creamy Breakfast” 72%"],
    "Jumbo rulon (tissue qog'oz), stol, qutili va HoReCa salfetkalari. Assortiment va narxlar bo'yicha so'rov yuboring — menejerimiz batafsil ma'lumot beradi.": ["Джамбо-рулоны (бумага tissue), столовые, коробочные салфетки и салфетки для HoReCa. Отправьте запрос по ассортименту и ценам — менеджер расскажет подробнее.", "Jumbo rolls (tissue paper), table, boxed and HoReCa napkins. Send a request about the range and prices — our manager will give you details."],

    "Katalogni yuklab olish": ["Скачать каталог", "Download catalogue"],
    "PDF · 5 MB · rus tilida": ["PDF · 5 МБ · на русском", "PDF · 5 MB · in Russian"],

    /* Gigiyena mahsulotlari (Bulut, PanDoozy) */
    "Margaritto va Smaylo yog' mahsulotlari hamda Bulut va PanDoozy gigiyena mahsulotlari — chakana, ulgurji va HoReCa uchun.": ["Масложировая продукция Margaritto и Смайло, гигиеническая продукция Bulut и PanDoozy — для розницы, опта и HoReCa.", "Margaritto and Smaylo fat products, plus Bulut and PanDoozy hygiene products — for retail, wholesale and HoReCa."],
    "Margarin va spredlar": ["Маргарин и спреды", "Margarine and spreads"],
    "Salfetka va gigiyena mahsulotlari": ["Салфетки и гигиеническая продукция", "Napkins and hygiene products"],
    "Yog' mahsulotlari katalogi": ["Каталог масложировой продукции", "Fats catalogue"],
    "PDF · rus tilida": ["PDF · на русском", "PDF · in Russian"],
    "Bulut va PanDoozy gigiyena mahsulotlari": ["Гигиеническая продукция Bulut и PanDoozy", "Bulut and PanDoozy hygiene products"],
    "Qog'oz salfetkalar, qog'oz sochiqlar, nam va qutili salfetkalar, tualet qog'ozi hamda HoReCa dispenserlari.": ["Бумажные салфетки, бумажные полотенца, влажные и коробочные салфетки, туалетная бумага и диспенсеры для HoReCa.", "Paper napkins, paper towels, wet wipes, boxed tissues, toilet paper and HoReCa dispensers."],
    "Gigiyena mahsulotlari turlari": ["Виды гигиенической продукции", "Hygiene product categories"],
    "Qog'oz salfetkalar": ["Бумажные салфетки", "Paper napkins"],
    "Qog'oz sochiqlar": ["Бумажные полотенца", "Paper towels"],
    "Nam salfetkalar": ["Влажные салфетки", "Wet wipes"],
    "Qutili salfetkalar": ["Коробочные салфетки", "Boxed tissues"],
    "Tualet qog'ozi": ["Туалетная бумага", "Toilet paper"],
    "Dispenserlar": ["Диспенсеры", "Dispensers"],
    "Qog'oz salfetka": ["Бумажные салфетки", "Paper napkins"],
    "Dispenser salfetkasi": ["Салфетки для диспенсера", "Dispenser napkins"],
    "Qog'oz sochiq": ["Бумажные полотенца", "Paper towels"],
    "Nam salfetka": ["Влажные салфетки", "Wet wipes"],
    "Qutili salfetka": ["Коробочные салфетки", "Boxed tissues"],
    "Dispenser": ["Диспенсер", "Dispenser"],
    "Soni": ["Кол-во", "Quantity"],
    "O'lcham": ["Размер", "Size"],
    "Tarkib": ["Состав", "Composition"],
    "Dizayn": ["Дизайн", "Designs"],
    "Hid": ["Аромат", "Scent"],
    "100% tsellyuloza": ["100% целлюлоза", "100% cellulose"],
    "Makulatura": ["Макулатура", "Recycled paper"],
    "Viskoza 20%, poliefir 80%": ["Вискоза 20%, полиэфир 80%", "Viscose 20%, polyester 80%"],
    "Oq, qizil, yashil, sariq": ["Белый, красный, зелёный, жёлтый", "White, red, green, yellow"],
    "2 xil (sariq va pushti)": ["2 вида (жёлтый и розовый)", "2 kinds (yellow and pink)"],
    "Bulut qog'oz salfetkalari": ["Бумажные салфетки Bulut", "Bulut paper napkins"],
    "Bulut Longer salfetkalari": ["Салфетки Bulut Longer", "Bulut Longer napkins"],
    "Bulut dekorativ salfetkalari": ["Декоративные салфетки Bulut", "Bulut decorative napkins"],
    "Bulut rangli dekorativ salfetkalar": ["Цветные декоративные салфетки Bulut", "Bulut coloured decorative napkins"],
    "PanDoozy salfetkalari": ["Салфетки PanDoozy в удобной упаковке", "PanDoozy napkins"],
    "Bulut dispenser salfetkalari (Z)": ["Салфетки Bulut для диспенсера (Z)", "Bulut dispenser napkins (Z)"],
    "Bulut dispenser salfetkalari (V)": ["Салфетки Bulut для диспенсера (V)", "Bulut dispenser napkins (V)"],
    "Bulut dispenser salfetkalari": ["Салфетки Bulut для диспенсера", "Bulut dispenser napkins"],
    "Bulut BIG qog'oz sochiq": ["Бумажные полотенца Bulut BIG", "Bulut BIG paper towels"],
    "Bulut qog'oz sochiq (2 rulon)": ["Бумажные полотенца Bulut (2 рулона)", "Bulut paper towels (2 rolls)"],
    "Bulut Premium nam salfetkalari": ["Премиум влажные салфетки Bulut", "Bulut Premium wet wipes"],
    "Bulut nam salfetkalari": ["Влажные салфетки Bulut", "Bulut wet wipes"],
    "Bulut bolalar nam salfetkalari": ["Детские влажные салфетки Bulut", "Bulut baby wet wipes"],
    "Bulut zal uchun to'plam": ["Набор Bulut для зала", "Bulut table set"],
    "Quruq va nam salfetka hamda tish kovlagich — bitta qadoqda.": ["Сухая и влажная салфетка и зубочистка — в одной упаковке.", "A dry napkin, a wet wipe and a toothpick in one pack."],
    "Bulut Premium qutili salfetkalar": ["Премиум коробочные салфетки Bulut", "Bulut Premium boxed tissues"],
    "Bulut avtomobil uchun qutili salfetkalar": ["Коробочные салфетки Bulut для авто", "Bulut car tissues"],
    "Bulut universal qutili salfetkalar (kub)": ["Универсальные коробочные салфетки Bulut (куб)", "Bulut universal cube tissues"],
    "Bulut tualet qog'ozi (vtulkali)": ["Туалетная бумага Bulut с втулкой", "Bulut toilet paper with core"],
    "Bulut tualet qog'ozi (vtulkasiz)": ["Туалетная бумага Bulut без втулки", "Bulut coreless toilet paper"],
    "Bulut tualet qog'ozi": ["Туалетная бумага Bulut", "Bulut toilet paper"],
    "Bulut tualet qog'ozi (shaffof qadoq)": ["Туалетная бумага Bulut (прозрачная упаковка)", "Bulut toilet paper (clear pack)"],
    "Bulut tualet qog'ozi (8 rulon)": ["Туалетная бумага Bulut (8 рулонов)", "Bulut toilet paper (8 rolls)"],
    "Bulut Aroma tualet qog'ozi": ["Туалетная бумага Bulut Арома", "Bulut Aroma toilet paper"],
    "Bulut tualet qog'ozi (60 rulon)": ["Туалетная бумага Bulut (60 рулонов)", "Bulut toilet paper (60 rolls)"],
    "Bulut Mega Rolls (dispenser uchun)": ["Туалетная бумага Mega Rolls для диспенсера", "Bulut Mega Rolls for dispensers"],
    "PanDoozy tualet qog'ozi (vtulkasiz)": ["Туалетная бумага PanDoozy без втулки", "PanDoozy coreless toilet paper"],
    "PanDoozy tualet qog'ozi (vtulkali)": ["Туалетная бумага PanDoozy с втулкой", "PanDoozy toilet paper with core"],
    "HoReCa V dispenseri": ["Диспенсер HoReCa V", "HoReCa V dispenser"],
    "HoReCa Z dispenseri": ["Диспенсер HoReCa Z", "HoReCa Z dispenser"],
    "HoReCa L dispenseri": ["Диспенсер HoReCa L", "HoReCa L dispenser"],
    "MEGA Rolls uchun Premium dispenser": ["Диспенсер Премиум для MEGA Rolls", "Premium dispenser for MEGA Rolls"],
    "Bulut V dispenser salfetkalari uchun.": ["Для салфеток Bulut для диспенсера V.", "For Bulut V dispenser napkins."],
    "Bulut Z dispenser salfetkalari uchun.": ["Для салфеток Bulut для диспенсера Z.", "For Bulut Z dispenser napkins."],
    "Kafe va restoranlar uchun salfetka dispenseri.": ["Диспенсер для салфеток для кафе и ресторанов.", "Napkin dispenser for cafés and restaurants."],
    "Mega Rolls tualet qog'ozi uchun.": ["Для туалетной бумаги Mega Rolls.", "For Mega Rolls toilet paper."],
    "Oziq-ovqat": ["Продукты питания", "Food"],
    "10 kg quti: 1 kg × 10 yoki 2 kg × 5": ["коробка 10 кг: 1 кг × 10 или 2 кг × 5", "10 kg box: 1 kg × 10 or 2 kg × 5"],
    "10 / 20 kg quti yoki chelak": ["коробка или ведро 10 / 20 кг", "10 / 20 kg box or bucket"],
    "Salfetkalar va gigiyena mahsulotlari": ["Салфетки и гигиеническая продукция", "Napkins and hygiene products"],
    "Bulut va PanDoozy brendlari ostida uy, ofis va HoReCa uchun gigiyena mahsulotlari. Salfetka xom ashyosi boshqa ishlab chiqaruvchilarga ham yetkaziladi.": ["Гигиеническая продукция под брендами Bulut и PanDoozy для дома, офиса и HoReCa. Сырьё для салфеток также поставляется другим производителям.", "Hygiene products under the Bulut and PanDoozy brands for home, office and HoReCa. Napkin base paper is also supplied to other manufacturers."],
    "Qog'oz, dekorativ va dispenser salfetkalari": ["Бумажные, декоративные салфетки и салфетки для диспенсера", "Paper, decorative and dispenser napkins"],
    "Nam, qutili va avtomobil salfetkalari": ["Влажные, коробочные и автомобильные салфетки", "Wet, boxed and car tissues"],
    "Qog'oz sochiq, tualet qog'ozi va HoReCa dispenserlari": ["Бумажные полотенца, туалетная бумага и диспенсеры HoReCa", "Paper towels, toilet paper and HoReCa dispensers"],
    "(Bulut)": ["(Bulut)", "(Bulut)"],

    /* Qadoq va o'lchamlar */
    "200 g / 500 g briket": ["брикеты 200 г / 500 г", "200 g / 500 g packs"],
    "500 g pergament briket": ["пергаментный брикет 500 г", "500 g parchment pack"],
    "2,5 kg pergament briket": ["пергаментный брикет 2,5 кг", "2.5 kg parchment pack"],
    "2,5 kg briket": ["брикет 2,5 кг", "2.5 kg pack"],
    "10 kg quti (5 × 2 kg plastina)": ["коробка 10 кг (5 пластов × 2 кг)", "10 kg box (5 × 2 kg sheets)"],
    "10 kg quti yoki 10 kg chelak": ["коробка 10 кг или ведро 10 кг", "10 kg box or 10 kg bucket"],
    "200 g × 30 = 6 kg": ["200 г × 30 = 6 кг", "200 g × 30 = 6 kg"],
    "500 g × 12 = 6 kg": ["500 г × 12 = 6 кг", "500 g × 12 = 6 kg"],
    "500 g × 10 = 5 kg": ["500 г × 10 = 5 кг", "500 g × 10 = 5 kg"],
    "500 g × 20 = 10 kg": ["500 г × 20 = 10 кг", "500 g × 20 = 10 kg"],
    "2,5 kg × 2 = 5 kg": ["2,5 кг × 2 = 5 кг", "2.5 kg × 2 = 5 kg"],
    "200 g: 8×20×35 sm": ["200 г: 8×20×35 см", "200 g: 8×20×35 cm"],
    "500 g: 13×21×25 sm": ["500 г: 13×21×25 см", "500 g: 13×21×25 cm"],
    "200 g: 13×21×25 sm": ["200 г: 13×21×25 см", "200 g: 13×21×25 cm"],
    "500 g: 9,5×19×32 sm": ["500 г: 9,5×19×32 см", "500 g: 9.5×19×32 cm"],
    "13,5×25,5×35,5 sm": ["13,5×25,5×35,5 см", "13.5×25.5×35.5 cm"],
    "10 kg: 14,5×22×36,5 sm": ["10 кг: 14,5×22×36,5 см", "10 kg: 14.5×22×36.5 cm"],
    "20 kg: 22×25×39 sm": ["20 кг: 22×25×39 см", "20 kg: 22×25×39 cm"],
    "12,5×31×38 sm": ["12,5×31×38 см", "12.5×31×38 cm"],
    "14,5×22×36,5 sm": ["14,5×22×36,5 см", "14.5×22×36.5 cm"],
    "10×20×31 sm": ["10×20×31 см", "10×20×31 cm"],

    /* Nima tayyorlash mumkin */
    "Non va bulochkalar": ["Хлеб и булочки", "Bread and buns"],
    "Qumoq xamir va tortlar": ["Песочное тесто и торты", "Shortcrust and cakes"],
    "Napoleon va Medovik": ["Наполеон и Медовик", "Napoleon and honey cake"],
    "Pechenye va somsa": ["Печенье и самса", "Cookies and samsa"],
    "Somsa": ["Самса", "Samsa"],
    "Qatlamli xamir": ["Слоёное тесто", "Puff pastry"],
    "Kruassan": ["Круассан", "Croissants"],
    "Kremli trubochkalar va Napoleon": ["Кремовые трубочки и торт «Наполеон»", "Cream horns and Napoleon cake"],
    "Nonushta uchun": ["Для завтрака", "For breakfast"],
    "Non-bulka mahsulotlari": ["Хлебобулочные изделия", "Bakery products"],
    "Qumoq xamir va pishiriqlar": ["Песочное тесто и выпечка", "Shortcrust and pastries"],
    "Qovurish va taom tayyorlash": ["Жарка и приготовление блюд", "Frying and cooking"]
  };

  const LANGS = ["uz", "ru", "en"];
  const STORAGE_KEY = "aberno-lang";
  const ATTRS = ["placeholder", "aria-label", "title"];
  const norm = (s) => s.replace(/\s+/g, " ").trim();

  // Ruscha son bilan kelishish: 1 рулон, 2 рулона, 5 рулонов
  const ruPlural = (n, one, few, many) => {
    const m10 = n % 10, m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return one;
    if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
    return many;
  };
  const enNum = (s) => s.replace(/,/g, ".");

  // Takrorlanuvchi qiymatlar uchun qoidalar: [regex, ruscha, inglizcha]
  const RULES = [
    [/^(\d+) dona$/, (m) => `${m[1]} шт`, (m) => `${m[1]} pcs`],
    [/^(\d+) rulon$/, (m) => `${m[1]} ${ruPlural(+m[1], "рулон", "рулона", "рулонов")}`, (m) => `${m[1]} ${m[1] === "1" ? "roll" : "rolls"}`],
    [/^([\d,]+)×([\d,]+) sm$/, (m) => `${m[1]}×${m[2]} см`, (m) => `${enNum(m[1])}×${enNum(m[2])} cm`],
    [/^(\d+) xil dizayn$/, (m) => `${m[1]} ${ruPlural(+m[1], "дизайн", "дизайна", "дизайнов")}`, (m) => `${m[1]} designs`]
  ];
  const ruleFor = (s) => {
    for (const r of RULES) { const m = s.match(r[0]); if (m) return [r, m]; }
    return null;
  };
  const known = (s) => Boolean(T[norm(s)] || ruleFor(norm(s)));

  const tr = (orig, lang) => {
    if (lang === "uz") return orig;
    const key = norm(orig);
    const entry = T[key];
    if (entry) return entry[lang === "ru" ? 0 : 1];
    const hit = ruleFor(key);
    if (hit) return hit[0][lang === "ru" ? 1 : 2](hit[1]);
    return orig;
  };

  /* ---------- Tarjima qilinadigan joylarni bir marta yig'ish ---------- */
  const textNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (node.parentElement.closest("script, style")) continue;
    if (known(node.nodeValue)) textNodes.push({ node, orig: node.nodeValue });
  }

  const attrItems = [];
  ATTRS.forEach((attr) =>
    document.querySelectorAll(`[${attr}]`).forEach((el) => {
      const v = el.getAttribute(attr);
      if (known(v)) attrItems.push({ el, attr, orig: v });
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
