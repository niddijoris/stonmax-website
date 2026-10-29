(function () {
  const PL_2PK = [
    ['1.9–2.3', '1 / 1.2', 'Ø12 × 4', 600000],
    ['2.4–3.3', '1 / 1.2', 'Ø12 × 4', 650000],
    ['3.4–3.9', '1 / 1.2', 'Ø12 × 4', 700000],
    ['4.0–4.4', '1', 'Ø12 × 4', 800000], ['4.0–4.4', '1.2', 'Ø12 × 4', 850000],
    ['4.5–4.9', '1', 'Ø12 × 4', 850000], ['4.5–4.9', '1.2', 'Ø12 × 4', 900000],
    ['5.0–5.3', '1', 'Ø12 × 5', 1050000], ['5.4–5.9', '1', 'Ø12 × 5', 1100000],
    ['5.0–5.3', '1.2', 'Ø12 × 6', 1100000], ['5.4–5.9', '1.2', 'Ø12 × 6', 1150000],
    ['6.0–6.3', '1', 'Ø14 × 6', 1250000], ['6.4–6.6', '1', 'Ø14 × 6', 1300000],
    ['6.0–6.3', '1.2', 'Ø14 × 7', 1350000], ['6.4–6.6', '1.2', 'Ø14 × 7', 1400000],
    ['6.7–6.8', '1', 'Ø16 × 6', 1500000], ['6.9–7.1', '1', 'Ø16 × 6', 1600000], ['7.2–7.3', '1', 'Ø16 × 6', 1650000],
    ['6.7–6.8', '1.2', 'Ø16 × 7', 1600000], ['6.9–7.1', '1.2', 'Ø16 × 7', 1700000], ['7.2–7.3', '1.2', 'Ø16 × 7', 1750000]
  ];
  const PL_PB = [
    [7.4, 'D34', 1826000], [7.5, 'D34', 1850000], [7.6, 'D34', 1874000], [7.7, 'D34', 1898000],
    [7.8, 'D34', 1922000], [7.9, 'D34', 1946000], [8.0, 'D34', 1970000], [8.1, 'D34', 2075000],
    [8.2, 'D34', 2100000], [8.3, 'D34', 2125000], [8.4, 'D40', 2150000], [8.5, 'D40', 2175000],
    [8.6, 'D40', 2200000], [8.7, 'D40', 2225000], [8.8, 'D40', 2250000], [8.9, 'D40', 2275000]
  ];
  const GRADES = [
    ['M100', 'B7,5', 'F50', 'W2', 390000, 'Tayyorgarlik qatlami, betonli asos'],
    ['M150', 'B10', 'F50', 'W2', 410000, 'Yo‘lka, bordyur osti, to‘shama'],
    ['M200', 'B15', 'F100', 'W4', 430000, 'Pol, maydoncha, lentali poydevor'],
    ['M250', 'B20', 'F100', 'W4', 460000, 'Poydevor, devor, zinapoya'],
    ['M300', 'B22,5', 'F150', 'W6', 480000, 'Monolit poydevor va plita'],
    ['M350', 'B25', 'F200', 'W8', 510000, 'Karkas: ustun, to‘sin, rigel'],
    ['M400', 'B30', 'F200', 'W8', 550000, 'Ko‘p qavatli monolit, ko‘prik elementlari'],
    ['M450', 'B35', 'F300', 'W10', 580000, 'Gidrotexnik va yuqori yuklama'],
    ['M500', 'B40', 'F300', 'W12', 620000, 'Maxsus inshootlar, to‘g‘onlar']
  ];
  const range = (s) => { const p = s.split('–').map(Number); return [p[0], p[1] ?? p[0]]; };

  const PRODUCTS = [
    {
      id: '2pk', cat: 'plita', code: '2PK', unit: 'dona', name: '2PK bo‘shliqli temir-beton plitalar',
      short: 'Qavatlararo va tom yopmasi uchun ko‘p bo‘shliqli plitalar. Uzunligi 1,9 dan 7,3 m gacha, kengligi 1 va 1,2 m.',
      desc: [
        '2PK — ichida dumaloq bo‘shliqlari bo‘lgan 220 mm qalinlikdagi temir-beton yopma plitasi. Bo‘shliqlar plita vaznini kamaytiradi, issiqlik va tovush izolyatsiyasini yaxshilaydi, kommunikatsiya o‘tkazishga imkon beradi.',
        'Plitalar A400 sinfidagi bo‘ylama armatura bilan armaturalanadi, armatura diametri va soni uzunlikka qarab Ø12 dan Ø16 gacha oshib boradi. Har bir partiya zavod laboratoriyasida mustahkamlik va geometriya bo‘yicha tekshiriladi.'
      ],
      uses: ['Turar-joy va xususiy uylar qavatlari', 'Tom yopmasi', 'Sanoat va savdo binolari', 'Yerto‘la va garaj yopmalari'],
      specs: [['Qalinlik', '220 mm'], ['Uzunlik', '1,9–7,3 m'], ['Kenglik', '1,0 / 1,2 m'], ['Hisobiy yuklama', '8 kPa (≈800 kg/m²)'], ['Armatura', 'A400, Ø12–Ø16'], ['Marka', 'A400-C9'], ['Tayanish', 'g‘isht devorga ≥ 120 mm'], ['Standart', 'GOST 9561-2016']],
      cols: ['Uzunlik, m', 'Kenglik, m', 'Armatura', 'Narx, so‘m'],
      variants: PL_2PK.map(r => ({ label: '2PK ' + r[0] + ' × ' + r[1], cells: [r[0], r[1], r[2]], price: r[3], lmin: range(r[0])[0], lmax: range(r[0])[1], w: r[1] }))
    },
    {
      id: 'pb', cat: 'plita', code: 'PB', unit: 'dona', name: 'PB qolipsiz plitalar (7,4–8,9 m)',
      short: 'Katta oraliqlar uchun qolipsiz usulda quyilgan oldindan zo‘riqtirilgan plitalar. Kenglik 1,2 m.',
      desc: [
        'PB plitalar uzluksiz qolipsiz quyish (ekstruziya) liniyasida ishlab chiqariladi: sirti tekis, geometriyasi aniq, uzunligi kerakli o‘lchamda kesiladi.',
        'Oldindan zo‘riqtirilgan armatura uzun oraliqlarni (7,4–8,9 m) oraliq tayanchlarsiz yopishga imkon beradi — keng zal, savdo maydoni va avtoturargohlar uchun qulay.'
      ],
      uses: ['Keng oraliqli zallar', 'Savdo va ofis binolari', 'Ko‘p qavatli karkas binolar', 'Avtoturargohlar'],
      specs: [['Qalinlik', '220 mm'], ['Uzunlik', '7,4–8,9 m'], ['Kenglik', '1,2 m'], ['Hisobiy yuklama', '8 kPa (≈800 kg/m²)'], ['Armatura', 'D34 / D40 (8,4 m dan)'], ['Marka', 'PB1400-C9'], ['Ishlab chiqarish', 'Qolipsiz quyish']],
      cols: ['Uzunlik, m', 'Kenglik, m', 'Armatura', 'Narx, so‘m'],
      variants: PL_PB.map(r => ({ label: 'PB ' + r[0].toFixed(1) + ' × 1.2', cells: [r[0].toFixed(1), '1.2', r[1]], price: r[2], lmin: r[0], lmax: r[0] + 0.09, w: '1.2' }))
    },
    {
      id: 'beton', cat: 'beton', code: 'M100–M500', unit: 'm³', name: 'Tayyor suyuq beton M100–M500',
      short: 'Zavodda dozalangan tayyor beton qorishmasi. 0–15 km yetkazish narxga kiritilgan, 24/7 avtomikserlarda.',
      desc: [
        'Tayyor beton qorishmasi avtomatlashtirilgan qorishma uzelida sement, yuvilgan qum, fraksiyalangan shag‘al va suvni aniq dozalash orqali tayyorlanadi. Kerak bo‘lganda plastifikator va qishki qo‘shimchalar qo‘shiladi.',
        'Har bir reysga yo‘l varaqasi va sifat pasporti beriladi. Laboratoriya har partiyadan nazorat kubiklarini oladi va 7 hamda 28 kunlik mustahkamlik bayonnomasini taqdim etadi.'
      ],
      uses: ['Poydevor va yerto‘la', 'Monolit karkas: ustun, to‘sin, plita', 'Pol va maydonchalar', 'Gidrotexnik inshootlar (M400+)'],
      specs: [['Markalar', 'M100–M500 (B7,5–B40)'], ['Sovuqbardoshlik', 'F50–F300'], ['Suv o‘tkazmaslik', 'W2–W12'], ['Harakatchanlik', 'P3–P4'], ['Yetkazish', '0–15 km narxga kiritilgan'], ['Rejim', '24/7'], ['Standart', 'GOST 7473-2010']],
      cols: ['Marka', 'Sinf', 'F / W', 'Qo‘llanishi', 'Narx, so‘m/m³'],
      variants: GRADES.map(g => ({ label: g[0] + ' / ' + g[1], cells: [g[0], g[1], g[2] + ' / ' + g[3], g[5]], price: g[4], mark: g[0], cls: g[1], frost: g[2], water: g[3] }))
    },
    {
      id: 'kolodets', cat: 'buyum', code: 'KS', unit: 'dona', name: 'Quduq halqalari (kolodets)',
      short: 'Kanalizatsiya, suv va septik quduqlari uchun temir-beton halqalar. 4 xil o‘lcham.',
      desc: [
        'Halqalar vibropresslash usulida armatura karkasi bilan quyiladi — devorlari zich, tuproq bosimi va yer osti suvlariga chidamli.',
        'Halqalar ketma-ket o‘rnatilib kerakli chuqurlikdagi quduq hosil qiladi; ustidan qopqoq plitasi yoki cho‘yan lyukli qopqoq qo‘yiladi.'
      ],
      uses: ['Kanalizatsiya quduqlari', 'Ichimlik suvi quduqlari', 'Septik va filtr quduqlar', 'Kommunikatsiya kameralari'],
      specs: [['Material', 'Temir-beton'], ['O‘lchamlar', '50–100 / 100–150 sm'], ['Ishlab chiqarish', 'Vibropresslash'], ['Standart', 'GOST 8020-2016']],
      cols: ['Mahsulot', 'O‘lcham', 'Narx, so‘m'],
      variants: [['100–150 sm', 500000], ['100–100 sm', 400000], ['50–150 sm', 350000], ['50–100 sm', 300000]].map(r => ({ label: 'Kolodets ' + r[0], cells: ['Kolodets', r[0]], price: r[1] }))
    },
    {
      id: 'qopqoq', cat: 'buyum', code: 'PP', unit: 'dona', name: 'Quduq qopqoqlari',
      short: 'Halqalar ustiga qo‘yiladigan beton qopqoq plitalari — oddiy va cho‘yan lyukli.',
      desc: [
        'Qopqoq plitasi quduqni yopib, ustidagi yuklamani halqalarga taqsimlaydi. Cho‘yan lyukli variant — tez-tez ochiladigan va yo‘l qismida joylashgan quduqlar uchun.',
        '180×180 va 130×130 sm o‘lchamlar mos ravishda katta va o‘rta diametrli halqalarga mo‘ljallangan.'
      ],
      uses: ['Kanalizatsiya va suv quduqlari', 'Yo‘l va hovli qismidagi quduqlar', 'Septiklar'],
      specs: [['O‘lchamlar', '180×180 / 130×130 sm'], ['Turi', 'Oddiy / cho‘yan lyukli'], ['Material', 'Temir-beton'], ['Standart', 'GOST 8020-2016']],
      cols: ['Mahsulot', 'O‘lcham', 'Narx, so‘m'],
      variants: [['Qopqoq', '180–180 sm', 500000], ['Qopqoq', '130–130 sm', 400000], ['Qopqoq cho‘yanli', '180–180 sm', 1000000], ['Qopqoq cho‘yanli', '130–130 sm', 900000]].map(r => ({ label: r[0] + ' ' + r[1], cells: [r[0], r[1]], price: r[2] }))
    },
    {
      id: 'lotok', cat: 'buyum', code: 'LT', unit: 'dona', name: 'Beton lotoklar (ariq)',
      short: 'Sug‘orish ariqlari, drenaj va yomg‘ir suvlarini oqizish uchun beton lotoklar. 2, 3 va 4–6 m.',
      desc: [
        'Lotoklar ochiq kanal shaklidagi temir-beton elementlar bo‘lib, suvni yo‘qotishsiz va eroziyasiz oqizadi. Farg‘ona vodiysida sug‘orish tarmoqlari uchun eng ko‘p so‘raladigan mahsulot.',
        'Uzun (4–6 m) lotoklar montaj choklarini kamaytiradi, qisqalari esa burilish va past joylar uchun qulay.'
      ],
      uses: ['Sug‘orish ariqlari', 'Drenaj va kollektorlar', 'Yo‘l bo‘yi suv oqizish', 'Hovli va maydonlar'],
      specs: [['Uzunlik', '2 / 3 / 4–6 m'], ['Material', 'Temir-beton'], ['Montaj', 'Kran yoki manipulyator']],
      cols: ['Mahsulot', 'Uzunlik', 'Narx, so‘m'],
      variants: [['6–4 m', 700000], ['3 m', 400000], ['2 m', 250000]].map(r => ({ label: 'Lotok ' + r[0], cells: ['Lotok', r[0]], price: r[1] }))
    },
    {
      id: 'stolba', cat: 'buyum', code: 'SV', unit: 'dona', name: 'Temir-beton ustunlar (stolba)',
      short: 'Elektr uzatish liniyalari va yoritish uchun vibratsiyalangan ustunlar — 9,5 va 10,5 m.',
      desc: [
        'Ustunlar 0,4–10 kV havo liniyalari, ko‘cha yoritish va aloqa tarmoqlari uchun mo‘ljallangan SV tipidagi temir-beton tayanchlardir.',
        'Vibratsiyalash texnologiyasi betonni zichlaydi, ustun sirtini atmosfera ta‘siri va zangdan himoya qiladi; xizmat muddati metall ustunlardan uzoqroq.'
      ],
      uses: ['0,4–10 kV elektr liniyalari', 'Ko‘cha yoritish', 'Aloqa liniyalari', 'Qishloq elektr tarmoqlari'],
      specs: [['Uzunlik', '9,5 / 10,5 m'], ['Tipi', 'SV-95 / SV-105'], ['Texnologiya', 'Vibratsiyalash'], ['Material', 'Oldindan zo‘riqtirilgan temir-beton']],
      cols: ['Mahsulot', 'Uzunlik', 'Narx, so‘m'],
      variants: [['10,5 m', 1000000], ['9,5 m', 900000]].map(r => ({ label: 'Stolba ' + r[0], cells: ['Stolba', r[0]], price: r[1] }))
    },
    {
      id: 'shlakoblok', cat: 'buyum', code: 'SB', unit: 'dona', name: 'Shlakoblok',
      short: 'Devor terish uchun vibropresslangan bloklar. Arzon, tez teriladi, 40 × 25 sm format.',
      desc: [
        'Shlakoblok sement, qum va to‘ldiruvchi aralashmasidan vibropressda quyiladi. Bitta blok bir necha g‘isht o‘rnini bosadi — devor terish tezligi va qorishma sarfi kamayadi.',
        'Xo‘jalik binolari, devor-to‘siqlar, garaj va bir qavatli uylar uchun keng qo‘llaniladi.'
      ],
      uses: ['Devor va to‘siqlar', 'Garaj va xo‘jalik binolari', 'Bir qavatli uylar', 'Ichki to‘siq devorlar'],
      specs: [['Format', '40 × 25 sm'], ['Ishlab chiqarish', 'Vibropresslash'], ['Sotuv', 'Dona / poddon']],
      cols: ['Mahsulot', 'O‘lcham', 'Narx, so‘m'],
      variants: [{ label: 'Shlakoblok 40–25 sm', cells: ['Shlakoblok', '0,4–0,25'], price: 3000 }]
    },
    {
      id: 'quruq', cat: 'quruq', code: 'QQ', unit: 'qop', name: 'Quruq qorishmalar va yelimlar',
      short: 'Plitka yelimi, suvoq va g‘isht terish qorishmalari. 25 kg qoplarda.',
      desc: ['Sement va gips asosidagi quruq qorishmalar — suv qo‘shib aralashtirish bilan ishga tayyor. Fraksiyasi elangan, tarkibi barqaror.', 'Narxlar hajm va turiga qarab menejer bilan kelishiladi.'],
      uses: ['Plitka yotqizish', 'Devor suvoqi', 'G‘isht va blok terish', 'Pol tekislash'],
      specs: [['Qadoq', '25 kg'], ['Yopishish', '≥ 0,8 MPa (yelim)'], ['Saqlash', '12 oy']],
      cols: [], variants: []
    },
    {
      id: 'inert', cat: 'inert', code: '5–16', unit: 't / m³', name: 'Qum va tosh mahsulotlari',
      short: 'Maydalangan tosh, 5–16 mm shag‘al, mitiy (yuvilgan) va suxoy (quruq) pesok.',
      desc: ['Inert materiallar zavodning o‘z beton ishlab chiqarishida ishlatiladigan xomashyo bilan bir xil sifatda yetkaziladi: yuvilgan, fraksiyalangan, changi past.', 'Samosvalda tonna yoki m³ bo‘yicha yetkaziladi; narx hajm va masofaga qarab kelishiladi.'],
      uses: ['Beton va qorishma tayyorlash', 'Yo‘l va maydon asosi', 'Drenaj', 'Quruq qorishmalar'],
      specs: [['Fraksiya', '5–16 mm, maydalangan tosh'], ['Qum', 'Mitiy (yuvilgan) / suxoy'], ['Yetkazish', 'Samosval']],
      cols: [], variants: []
    },
    {
      id: 'albaster', cat: 'quruq', code: 'G-5', unit: 'qop', name: 'Albaster (qurilish gipsi)',
      short: 'Mayda, tez qotuvchi gips: ichki suvoq, qoliplash va dekor uchun.',
      desc: ['Albaster — kuydirilgan gipsdan olinadigan tez qotuvchi bog‘lovchi. Ichki devorlarni tekislash, yoriqlarni yopish va dekor elementlarini quyish uchun ishlatiladi.', 'Narx qop soni bo‘yicha kelishiladi.'],
      uses: ['Ichki suvoq', 'Yoriq va teshiklarni yopish', 'Dekor va qoliplash'],
      specs: [['Marka', 'G-5'], ['Qotish', '6–10 daqiqa'], ['Qadoq', '25 kg']],
      cols: [], variants: []
    }
  ];


  const POSTS = [
    { id: 'beton-markasi', title: 'Qaysi beton markasi kerak: M200, M300 yoki M350?', tag: 'Beton', date: '2026-10-18', read: 5, products: ['beton'],
      excerpt: 'Poydevor, pol va karkas uchun marka tanlashning oddiy qoidalari — ortiqcha to‘lamaslik va mustahkamlikni yo‘qotmaslik uchun.',
      body: 'Beton markasi (M) — 28 kunlik qotishdan keyin 1 sm² ga to‘g‘ri keladigan siqilishga mustahkamlik, kgs hisobida. Sinf (B) esa xuddi shu mustahkamlikning kafolatlangan qiymati, MPa hisobida. Loyihada odatda sinf yoziladi, zavodda esa marka bo‘yicha buyurtma beriladi.\n\n## Poydevor uchun\nBir-ikki qavatli xususiy uy uchun lentali poydevorga M250–M300 yetarli. Yer osti suvlari yuqori bo‘lgan joylarda suv o‘tkazmaslik W6 dan past bo‘lmagan M300 ni tanlang.\n\n## Pol va maydonchalar\nHovli, garaj va ombor poli uchun M200–M250. Og‘ir texnika yuradigan maydonlar uchun M300.\n\n## Karkas: ustun, to‘sin, monolit plita\nKo‘p qavatli monolit karkas uchun M350 (B25) va undan yuqori. Bu yerda loyihachi ko‘rsatgan sinfdan pasaytirish mumkin emas.\n\n## Maslahat\nBuyurtmada markadan tashqari harakatchanlikni (P3–P4) va qishda sovuqqa qarshi qo‘shimchani ham ko‘rsating. Stonmax har reysga sifat pasporti beradi.' },
    { id: '2pk-uzunlik', title: '2PK plita uzunligini qanday hisoblash kerak', tag: 'Plitalar', date: '2026-10-09', read: 4, products: ['2pk', 'pb'],
      excerpt: 'Devorlar orasidagi masofaga tayanish qismini qo‘shish — va 7,3 m dan uzun oraliqlar uchun PB plitaga o‘tish.',
      body: 'Plita uzunligi devorlar orasidagi toza oraliq emas. Plita har ikki tomondan devorga tayanishi kerak.\n\n## Formula\nPlita uzunligi = toza oraliq + 2 × tayanish. G‘isht devorda tayanish kamida 120 mm, blok devorda 150 mm. Masalan, oraliq 5,7 m bo‘lsa: 5,7 + 0,24 = 5,94 m — demak 2PK 6.0 tanlanadi.\n\n## Kenglik\nXona enini plita kengligiga (1,0 yoki 1,2 m) bo‘ling va yuqoriga yaxlitlang. Qolgan tor joy monolit beton bilan to‘ldiriladi.\n\n## 7,3 m dan uzun oraliqlar\nOddiy 2PK plitalar 7,3 m gacha. Undan uzun oraliqlar uchun 1,2 m kenglikdagi PB qolipsiz plitalar (7,4–8,9 m) ishlatiladi.\n\n## Montaj\nPlitalar kran yoki manipulyator bilan o‘rnatiladi. Ustiga armo-poyas va choklarni qorishma bilan to‘ldirish majburiy.' },
    { id: 'qishki-beton', title: 'Qishda beton quyish: nimalarga e’tibor berish kerak', tag: 'Texnologiya', date: '2026-09-28', read: 4, products: ['beton'],
      excerpt: 'Harorat +5 °C dan tushganda beton sekin qotadi. Qo‘shimchalar, isitish va parvarish bo‘yicha amaliy tavsiyalar.',
      body: 'Beton qotishi uchun suv kerak. Harorat 0 °C dan tushsa, suv muzlab, beton tuzilmasini buzadi.\n\n## Sovuqqa qarshi qo‘shimchalar\nZavod buyurtma bo‘yicha qorishmaga qishki qo‘shimcha qo‘shadi. Bu −15 °C gacha quyish imkonini beradi, lekin parvarishni bekor qilmaydi.\n\n## Qolip va armaturani tayyorlash\nQolip ichidagi qor va muzni tozalang. Muzlagan asosga beton quymang.\n\n## Parvarish\nQuyilgan betonni plyonka va issiqlik saqlovchi material bilan yoping. Birinchi 3–7 kun ayniqsa muhim.\n\n## Buyurtma vaqti\nKunning iliq soatlarini tanlang va mikserlar orasidagi intervalni qisqartiring — Stonmax katta hajmlarda 20 daqiqalik grafik tuzadi.' },
    { id: 'lotok-ornatish', title: 'Beton lotoklarni to‘g‘ri o‘rnatish', tag: 'Beton buyumlar', date: '2026-09-15', read: 3, products: ['lotok'],
      excerpt: 'Sug‘orish ariqlari uchun lotok tanlash, nishablik va choklarni berkitish — suv yo‘qotishsiz ishlashi uchun.',
      body: 'Beton lotoklar ochiq ariqqa nisbatan suvni yo‘qotishsiz va eroziyasiz oqizadi.\n\n## Uzunlik tanlash\nTo‘g‘ri uchastkalarda 4–6 m lotoklar choklar sonini kamaytiradi. Burilish va past joylarda 2–3 m lotoklar qulay.\n\n## Asos va nishablik\nLotok zichlangan shag‘al yoki qum to‘shamaga o‘rnatiladi. Nishablik kamida 0,5–1 %.\n\n## Choklar\nLotoklar orasidagi choklar sement qorishmasi yoki germetik bilan to‘ldiriladi.' }
  ];
  const CATS = [
    { id: 'all', name: 'Barchasi' },
    { id: 'plita', name: 'Temir-beton plitalar' },
    { id: 'beton', name: 'Suyuq beton' },
    { id: 'buyum', name: 'Beton buyumlar' },
    { id: 'inert', name: 'Inert materiallar' },
    { id: 'quruq', name: 'Quruq qorishmalar' }
  ];

  const LS = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  const fmt = (n) => new Intl.NumberFormat('ru-RU').format(Math.round(n)).replace(/ /g, ' ');

  const api = {
    contact: { phone: '+998 55 810 00 05', phoneHref: 'tel:+998558100005', telegram: '@stonmax', telegramHref: 'https://t.me/stonmax', address: 'Farg‘ona vil., Qo‘qon sh., sanoat zonasi', hours: '24/7, dam olishsiz', email: 'savdo@stonmax.uz' },
    socials: [
      { id: 'instagram', name: 'Instagram', href: 'https://instagram.com/stonmax.uz' },
      { id: 'facebook', name: 'Facebook', href: 'https://facebook.com/stonmaxuz' },
      { id: 'telegram', name: 'Telegram', href: 'https://t.me/stonmax' },
      { id: 'youtube', name: 'YouTube', href: 'https://youtube.com/@stonmax' }
    ],
    CATS, fmt,
    statuses: ['Yangi', 'Aloqada', 'Taklif yuborildi', 'Yutildi', 'Yo‘qotildi'],
    price(pid, i) {
      const p = api.rawProducts().find(x => x.id === pid); if (!p || !p.variants[i]) return null;
      const o = LS.get('stonmax_prices', {});
      return (o[pid] && o[pid][i] != null) ? o[pid][i] : p.variants[i].price;
    },
    rawProducts() {
      const ov = LS.get('stonmax_prod_ov', {}), del = LS.get('stonmax_prod_del', []);
      const base = PRODUCTS.filter(p => !del.includes(p.id)).map(p => ov[p.id] || p);
      const extra = Object.keys(ov).filter(id => !PRODUCTS.some(p => p.id === id) && !del.includes(id)).map(id => ov[id]);
      return base.concat(extra);
    },
    isBase(id) { return PRODUCTS.some(p => p.id === id); },
    saveProduct(p) {
      const ov = LS.get('stonmax_prod_ov', {}); ov[p.id] = p; LS.set('stonmax_prod_ov', ov);
      const del = LS.get('stonmax_prod_del', []).filter(x => x !== p.id); LS.set('stonmax_prod_del', del);
      api.resetPrices(p.id);
    },
    deleteProduct(id) {
      const ov = LS.get('stonmax_prod_ov', {});
      if (api.isBase(id)) { const del = LS.get('stonmax_prod_del', []); if (!del.includes(id)) del.push(id); LS.set('stonmax_prod_del', del); }
      else { delete ov[id]; LS.set('stonmax_prod_ov', ov); }
    },
    restoreCatalog() { LS.set('stonmax_prod_ov', {}); LS.set('stonmax_prod_del', []); api.resetPrices(); },
    posts() { return LS.get('stonmax_posts', null) || POSTS; },
    savePost(p) { const all = api.posts().slice(); const i = all.findIndex(x => x.id === p.id); if (i >= 0) all[i] = p; else all.unshift(p); LS.set('stonmax_posts', all); },
    deletePost(id) { LS.set('stonmax_posts', api.posts().filter(p => p.id !== id)); },
    restorePosts() { LS.set('stonmax_posts', null); },
    products() {
      return api.rawProducts().map(p => {
        const variants = p.variants.map((v, i) => Object.assign({}, v, { price: api.price(p.id, i) }));
        const from = variants.length ? Math.min.apply(null, variants.map(v => v.price)) : null;
        return Object.assign({}, p, { variants, from, catName: (CATS.find(c => c.id === p.cat) || {}).name });
      });
    },
    basePrice(pid, i) { const p = api.rawProducts().find(x => x.id === pid); return p && p.variants[i] ? p.variants[i].price : null; },
    product(id) { return api.products().find(p => p.id === id); },
    setPrice(pid, i, val) { const o = LS.get('stonmax_prices', {}); o[pid] = o[pid] || {}; o[pid][i] = val; LS.set('stonmax_prices', o); },
    resetPrices(pid) { const o = LS.get('stonmax_prices', {}); if (pid) delete o[pid]; else for (const k in o) delete o[k]; LS.set('stonmax_prices', o); },
    leads() { return LS.get('stonmax_leads', []); },
    addLead(l) {
      const all = api.leads();
      const lead = Object.assign({ id: 'SM-' + String(1001 + all.length), at: new Date().toISOString(), status: 'Yangi', amo: api.amo().connected ? 'Yuborildi' : 'Navbatda', source: 'stonmax.uz' }, l);
      all.unshift(lead); LS.set('stonmax_leads', all); return lead;
    },
    updateLead(id, patch) { const all = api.leads().map(l => l.id === id ? Object.assign({}, l, patch) : l); LS.set('stonmax_leads', all); },
    amo() { return LS.get('stonmax_amo', { subdomain: '', clientId: '', secret: '', redirect: 'https://stonmax.uz/api/amocrm/callback', pipeline: 'Sotuv — sayt', stage: 'Yangi so‘rov', autoSend: true, task: true, tgNotify: true, connected: false }); },
    setAmo(c) { LS.set('stonmax_amo', c); },
    theme() { return LS.get('stonmax_theme', 'dark'); },
    setTheme(t) { LS.set('stonmax_theme', t); },
    amoPayload(lead) {
      if (!lead) return '';
      return JSON.stringify([{
        name: 'Sayt: ' + (lead.product || 'So‘rov') + ' — ' + lead.name,
        price: lead.estimate || 0,
        pipeline_id: '{{PIPELINE_ID}}',
        status_id: '{{STAGE_ID}}',
        custom_fields_values: [
          { field_code: 'PRODUCT', values: [{ value: lead.product || '' }] },
          { field_code: 'QTY', values: [{ value: lead.qty || '' }] },
          { field_code: 'ADDRESS', values: [{ value: lead.address || '' }] },
          { field_code: 'TELEGRAM', values: [{ value: lead.telegram || '' }] },
          { field_code: 'UTM_SOURCE', values: [{ value: lead.source }] }
        ],
        _embedded: {
          tags: [{ name: 'stonmax.uz' }, { name: lead.category || 'umumiy' }],
          contacts: [{ first_name: lead.name, custom_fields_values: [{ field_code: 'PHONE', values: [{ value: lead.phone, enum_code: 'WORK' }] }] }]
        }
      }], null, 2);
    },
    seedDemo() {
      const cur = api.leads();
      if (cur.filter(l => l.demo).length >= 30) return;
      const real = cur.filter(l => !l.demo);
      const d = (h) => new Date(Date.now() - h * 3600e3).toISOString();
      const demo = [
        { name: 'Akmal Yusupov', phone: '+998 90 312 44 18', product: '2PK bo‘shliqli temir-beton plitalar', category: 'plita', qty: '24 dona, 6.0×1.2', address: 'Qo‘qon, Turkiston ko‘ch.', telegram: '@akmal_qurilish', status: 'Yangi', amo: 'Yuborildi', at: d(2), estimate: 32400000 },
        { name: 'Farg‘ona Invest Qurilish', phone: '+998 91 655 02 30', product: 'Tayyor suyuq beton M100–M500', category: 'beton', qty: '86 m³ M300', address: 'Farg‘ona sh.', telegram: '', status: 'Taklif yuborildi', amo: 'Yuborildi', at: d(7), estimate: 41280000 },
        { name: 'Dilshod Rahimov', phone: '+998 93 102 77 61', product: 'Beton lotoklar (ariq)', category: 'buyum', qty: '40 dona, 3 m', address: 'Uchko‘prik t.', telegram: '@dilshod_r', status: 'Aloqada', amo: 'Yuborildi', at: d(20), estimate: 16000000 },
        { name: 'Sardor Ergashev', phone: '+998 97 440 19 05', product: 'Quduq halqalari (kolodets)', category: 'buyum', qty: '6 dona', address: 'Beshariq t.', telegram: '', status: 'Yutildi', amo: 'Yuborildi', at: d(30), estimate: 2700000 },
        { name: 'Rishton Keramika MCHJ', phone: '+998 95 220 61 12', product: 'Tayyor suyuq beton M100–M500', category: 'beton', qty: '30 m³ M250', address: 'Rishton t.', telegram: '@rk_snab', status: 'Yangi', amo: 'Navbatda', at: d(50), estimate: 13800000 },
        { name: 'Bobur Toshpo‘latov', phone: '+998 99 801 33 47', product: 'Temir-beton ustunlar (stolba)', category: 'buyum', qty: '12 dona, 10.5 m', address: 'Bag‘dod t.', telegram: '', status: 'Yo‘qotildi', amo: 'Yuborildi', at: d(80), estimate: 12000000 },
        { name: 'Nodira Qodirova', phone: '+998 90 777 08 21', product: 'Shlakoblok', category: 'buyum', qty: '2 500 dona', address: 'Yaypan', telegram: '@nodira_q', status: 'Aloqada', amo: 'Yuborildi', at: d(110), estimate: 7500000 }
      ];
      const names = ['Jasur Aliyev', 'Qo‘qon Qurilish Servis', 'Ulug‘bek Karimov', 'Bekzod Sobirov', 'Mavluda Ismoilova', 'Yaypan Agro MCHJ', 'Shohruh Nazarov', 'Beshariq Suv Qurilish', 'Otabek Haydarov', 'Farhod Usmonov', 'Barno Yo‘ldosheva', 'Elyor Mamatov'];
      const picks = [['2PK bo‘shliqli temir-beton plitalar', 'plita', '12 dona 6.0×1.2', 13800000], ['Tayyor suyuq beton M100–M500', 'beton', '24 m³ M300', 11520000], ['Beton lotoklar (ariq)', 'buyum', '30 dona 3 m', 12000000], ['PB qolipsiz plitalar (7,4–8,9 m)', 'plita', '8 dona 8.0×1.2', 15760000], ['Quduq halqalari (kolodets)', 'buyum', '4 dona', 1800000], ['Qum va tosh mahsulotlari', 'inert', '40 t 5–16 mm', 0], ['Tayyor suyuq beton M100–M500', 'beton', '60 m³ M350', 30600000], ['Shlakoblok', 'buyum', '3 000 dona', 9000000], ['Quruq qorishmalar va yelimlar', 'quruq', '80 qop', 0]];
      const towns = ['Qo‘qon', 'Uchko‘prik t.', 'Yaypan', 'Beshariq t.', 'Rishton t.', 'Bag‘dod t.'];
      const sts = ['Yutildi', 'Yutildi', 'Aloqada', 'Taklif yuborildi', 'Yo‘qotildi', 'Yutildi', 'Aloqada'];
      const gen = [];
      for (let k = 0; k < 38; k++) {
        const pk = picks[(k * 7 + 3) % picks.length], h = 60 + k * 17 + (k % 5) * 5;
        gen.push({ name: names[k % names.length], phone: '+998 9' + (k % 10) + ' ' + String(100 + k * 23).slice(-3) + ' ' + String(10 + k * 3).slice(-2) + ' ' + String(40 + k).slice(-2), product: pk[0], category: pk[1], qty: pk[2], address: towns[k % towns.length], telegram: k % 3 ? '' : '@client' + k, status: h < 120 ? 'Yangi' : sts[k % sts.length], amo: 'Yuborildi', at: d(h), estimate: pk[3] * (0.6 + (k % 4) * 0.25) });
      }
      const all = demo.concat(gen).map((l, i) => Object.assign({ id: 'SM-' + (1100 - i), source: i % 4 === 0 ? 'Telegram' : i % 3 === 0 ? 'Instagram' : 'stonmax.uz', demo: true }, l));
      LS.set('stonmax_leads', real.concat(all));
    }
  };
  window.STONMAX = api;
})();
