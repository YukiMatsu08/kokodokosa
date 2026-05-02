const quizData = [
// --- ドメインクイズ (domain) ---
    { tld: ".it", image: "images/domain/domain_Italy.png", answer: "イタリア", choices: ["イタリア", "フランス", "スペイン", "ギリシャ"], note: "Italyの略。地中海沿いの街並みが特徴的です。[cite: 1]", category: "domain", difficulty_label: "easy" },
    { tld: ".jp", image: "images/domain/domain_Japan.png", answer: "日本", choices: ["日本", "韓国", "台湾", "中国"], note: "Japanの略。道路標識や左側通行が大きなヒントです。[cite: 1]", category: "domain", difficulty_label: "easy" },
    { tld: ".kr", image: "images/domain/domain_SouthKorea.png", answer: "韓国", choices: ["韓国", "日本", "中国", "台湾"], note: "Koreaの略。ハングルの看板で見分けがつきます。[cite: 1]", category: "domain", difficulty_label: "easy" },
    { tld: ".mk", image: "images/domain/domain_NorthMacedonia.png", answer: "北マケドニア", choices: ["北マケドニア", "ギリシャ", "アルバニア", "ブルガリア"], note: "Macedoniaの略です。", category: "domain", difficulty_label: "hard" },
    { tld: ".mx", image: "images/domain/domain_Mexico.png", answer: "メキシコ", choices: ["メキシコ", "スペイン", "コロンビア", "アメリカ"], note: "Mexicoの略。特有の植生や乾燥した風景が特徴です。", category: "domain", difficulty_label: "normal" },
    { tld: ".nz", image: "images/domain/domain_NewZealand.png", answer: "ニュージーランド", choices: ["ニュージーランド", "オーストラリア", "イギリス", "カナダ"], note: "New Zealandの略。黄色いセンターラインがないことが多いです。", category: "domain", difficulty_label: "normal" },
    { tld: ".ru", image: "images/domain/domain_Russia.png", answer: "ロシア", choices: ["ロシア", "ウクライナ", "ポーランド", "カザフスタン"], note: "Russiaの略。キリル文字の看板が目印です。", category: "domain", difficulty_label: "normal" },
    { tld: ".sg", image: "images/domain/domain_Singapore.png", answer: "シンガポール", choices: ["シンガポール", "マレーシア", "香港", "タイ"], note: "Singaporeの略。非常に整備された都市風景が特徴です。[cite: 1]", category: "domain", difficulty_label: "easy" },
    { tld: ".tw", image: "images/domain/domain_Taiwan.png", answer: "台湾", choices: ["台湾", "中国", "日本", "タイ"], note: "Taiwanの略。繁体字の看板とバイクの多さがヒントです。[cite: 1]", category: "domain", difficulty_label: "easy" },
    { tld: ".uk", image: "images/domain/domain_UnitedKingdom.png", answer: "イギリス", choices: ["イギリス", "アイルランド", "オーストラリア", "アメリカ"], note: "United Kingdomの略。車のナンバープレート（後部が黄色）が特徴です。", category: "domain", difficulty_label: "normal" },
    { tld: ".vn", image: "images/domain/domain_Vietnam.png", answer: "ベトナム", choices: ["ベトナム", "タイ", "カンボジア", "ラオス"], note: "Vietnamの略。独特の形をした家の造りが特徴です。", category: "domain", difficulty_label: "normal" },
    { tld: ".za", image: "images/domain/domain_SouthAfrica.png", answer: "南アフリカ", choices: ["南アフリカ", "イギリス", "オーストラリア", "ナイジェリア"], note: "Zuid-Afrika（オランダ語由来）の略。外側が白い道路の区画線が特徴です。", category: "domain", difficulty_label: "normal" },
    { tld: ".ar", image: "images/domain/domain_Argentina.png", answer: "アルゼンチン", choices: ["アルゼンチン", "チリ", "ウルグアイ", "スペイン"], note: "Argentinaの略。標識の裏が黒いことが多いです。", category: "domain", difficulty_label: "normal" },
    { tld: ".au", image: "images/domain/domain_Australia.png", answer: "オーストラリア", choices: ["オーストラリア", "ニュージーランド", "南アフリカ", "アメリカ"], note: "Australiaの略。非常に長い直線道路やユーカリの木が特徴です。", category: "domain", difficulty_label: "normal" },
    { tld: ".be", image: "images/domain/domain_Belgium.png", answer: "ベルギー", choices: ["ベルギー", "フランス", "オランダ", "ドイツ"], note: "Belgiumの略。街灯の形が独特なことが多いです。", category: "domain", difficulty_label: "normal" },
    { tld: ".br", image: "images/domain/domain_Brazil.png", answer: "ブラジル", choices: ["ブラジル", "ポルトガル", "アルゼンチン", "コロンビア"], note: "Brazilの略。標識の裏が黒く、背面に「×」の補強があることが特徴です。", category: "domain", difficulty_label: "normal" },
    { tld: ".ca", image: "images/domain/domain_Canada.png", answer: "カナダ", choices: ["カナダ", "アメリカ", "イギリス", "フランス"], note: "Canadaの略。アメリカに似ていますが、速度制限がkm/h表記です。", category: "domain", difficulty_label: "normal" },
    { tld: ".ch", image: "images/domain/domain_Switzerland.png", answer: "スイス", choices: ["スイス", "ドイツ", "オーストリア", "イタリア"], note: "Confoederatio Helvetica（ラテン語）の略。低い位置にある標識が特徴です。", category: "domain", difficulty_label: "normal" },
    { tld: ".co", image: "images/domain/domain_Colombia.png", answer: "コロンビア", choices: ["コロンビア", "ベネズエラ", "メキシコ", "エクアドル"], note: "Colombiaの略。黄色いナンバープレートが大きな目印になります。", category: "domain", difficulty_label: "normal" },
    { tld: ".de", image: "images/domain/domain_Germany.png", answer: "ドイツ", choices: ["ドイツ", "オーストリア", "スイス", "オランダ"], note: "Deutschlandの略。プライバシー保護のため、一部地域以外はぼかしが多いです。", category: "domain", difficulty_label: "normal" },
    { tld: ".es", image: "images/domain/domain_Spain.png", answer: "スペイン", choices: ["スペイン", "ポルトガル", "イタリア", "メキシコ"], note: "Españaの略。道路脇のガードレールの端が四角い特徴があります。", category: "domain", difficulty_label: "normal" },
    { tld: ".fr", image: "images/domain/domain_France.png", answer: "フランス", choices: ["フランス", "スペイン", "イタリア", "ベルギー"], note: "Franceの略。青い縁取りのない町名看板が特徴です。", category: "domain", difficulty_label: "normal" },
    { tld: ".id", image: "images/domain/domain_Indonesia.png", answer: "インドネシア", choices: ["インドネシア", "マレーシア", "フィリピン", "タイ"], note: "Indonesiaの略。電柱に黒と白の縞模様が塗られていることが多いです。", category: "domain", difficulty_label: "normal" },
    { tld: ".in", image: "images/domain/domain_India.png", answer: "インド", choices: ["インド", "パキスタン", "バングラデシュ", "スリランカ"], note: "Indiaの略。独特な言語の看板と、左側通行が特徴です。", category: "domain", difficulty_label: "normal" },
    { tld: ".is", image: "images/domain/domain_Iceland.png", answer: "アイスランド", choices: ["アイスランド", "ノルウェー", "アイルランド", "グリーンランド"], note: "Islandの略。木がほとんど生えていない火山岩の風景が特徴です。", category: "domain", difficulty_label: "normal" },


    // --- 文字クイズ (30問) ---
    {
        image: "images/text_korea.jpg",
        answer: "韓国",
        choices: ["韓国", "日本", "中国", "台湾"],
        note: "丸（○）や直線（ー）の組み合わせが特徴的な**ハングル**です。",
        category: "text",
        difficulty_label: "easy"
    },
    {
        image: "images/text_japan_katakana.jpg",
        answer: "日本",
        choices: ["日本", "韓国", "中国", "ベトナム"],
        note: "カタカナやひらがなが混ざっていれば**日本**です。",
        category: "text",
        difficulty_label: "easy"
    },
    {
        image: "images/text_russia.jpg",
        answer: "ロシア",
        choices: ["ロシア", "ギリシャ", "ブルガリア", "ウクライナ"],
        note: "Д, П, Щといった**キリル文字**です。ロシアは「ы」という文字が使われるのが特徴です。",
        category: "text",
        difficulty_label: "normal"
    },
    {
        image: "images/text_israel.jpg",
        answer: "イスラエル",
        choices: ["イスラエル", "ギリシャ", "エジプト", "ヨルダン"],
        note: "四角いフォルムの**ヘブライ文字**です。右から左へ読みます。",
        category: "text",
        difficulty_label: "normal"
    },
    {
        image: "images/text_cambodia.jpg",
        answer: "カンボジア",
        choices: ["カンボジア", "タイ", "ラオス", "ミャンマー"],
        note: "タイ文字に似ていますが、より複雑で「ひげ」のような装飾が多いのが**クメール文字**です。",
        category: "text",
        difficulty_label: "hard"
    },
    {
        image: "images/text_greece.jpg",
        answer: "ギリシャ",
        choices: ["ギリシャ", "ロシア", "ブルガリア", "キプロス"],
        note: "ΣやΩといった独特の文字があれば**ギリシャ**です。",
        category: "text",
        difficulty_label: "normal"
    },
    {
        image: "images/text_china.jpg",
        answer: "中国",
        choices: ["中国", "日本", "韓国", "台湾"],
        note: "簡略化された漢字（**簡体字**）が使われています。",
        category: "text",
        difficulty_label: "easy"
    },
    {
        image: "images/text_usa.jpg",
        answer: "アメリカ",
        choices: ["アメリカ", "イギリス", "カナダ", "オーストラリア"],
        note: "英語ですが、看板の雰囲気が典型的なアメリカスタイルです。",
        category: "text",
        difficulty_label: "easy"
    },
    {
        image: "images/text_thailand.jpg",
        answer: "タイ",
        choices: ["タイ", "ラオス", "カンボジア", "ミャンマー"],
        note: "丸っこいフォントで、上部に小さな丸（ループ）があるのが**タイ文字**の特徴です。",
        category: "text",
        difficulty_label: "normal"
    },
    {
        image: "images/text_saudi_arabia.jpg",
        answer: "サウジアラビア",
        choices: ["サウジアラビア", "エジプト", "イラン", "パキスタン"],
        note: "右から左に読む**アラビア文字**です。",
        category: "text",
        difficulty_label: "normal"
    },
    {
        image: "images/text_bhutan.jpg",
        answer: "ブータン",
        choices: ["ブータン", "ネパール", "インド", "チベット"],
        note: "横棒から文字がぶら下がっているような形が**ゾンカ文字**です。",
        category: "text",
        difficulty_label: "hard"
    },
    {
        image: "images/text_ethiopia.jpg",
        answer: "エチオピア",
        choices: ["エチオピア", "ケニア", "タンザニア", "ウガンダ"],
        note: "独特な曲線と点、そして「目」のような形が特徴の**ゲエズ文字**です。",
        category: "text",
        difficulty_label: "hard"
    },
    {
        image: "images/text_vietnam.jpg",
        answer: "ベトナム",
        choices: ["ベトナム", "中国", "タイ", "カンボジア"],
        note: "アルファベットに独特な声調記号が付くのが**クオック・グー**の特徴です。",
        category: "text",
        difficulty_label: "easy"
    },
    {
        image: "images/text_germany.jpg",
        answer: "ドイツ",
        choices: ["ドイツ", "オーストリア", "スイス", "オランダ"],
        note: "アルファベットですが、「**ß**」や「Ä, Ö, Ü」があればドイツ語圏の可能性が高いです。",
        category: "text",
        difficulty_label: "easy"
    },
    {
        image: "images/text_taiwan.jpg",
        answer: "台湾",
        choices: ["台湾", "中国", "日本", "韓国"],
        note: "簡略化されていない**繁体字**（正体字）が使われています。",
        category: "text",
        difficulty_label: "normal"
    },
    {
        image: "images/text_france.jpg",
        answer: "フランス",
        choices: ["フランス", "イギリス", "ドイツ", "イタリア"],
        note: "フランス語特有のアクサン（◌́ ◌̀ ◌̂）や「ç」が使われます。",
        category: "text",
        difficulty_label: "easy"
    },

    {
        image: "images/text_italy.jpg",
        answer: "イタリア",
        choices: ["イタリア", "フランス", "スペイン", "ポルトガル"],
        note: "イタリア語特有のアクセント記号（à, è, ì, ò, ù）が使われます。",
        category: "text",
        difficulty_label: "easy"
    },
    {
        image: "images/text_canada.jpg",
        answer: "カナダ",
        choices: ["カナダ", "アメリカ", "イギリス", "オーストラリア"],
        note: "英語とフランス語の両方が使われるのが特徴です。",
        category: "text",
        difficulty_label: "easy"
    },
    {
        image: "images/text_poland.jpg",
        answer: "ポーランド",
        choices: ["ポーランド", "チェコ", "ハンガリー", "ルーマニア"],
        note: "アルファベットに「ą」「ę」「ł」などの独特な記号が付きます。",
        category: "text",
        difficulty_label: "normal"
    },
    {
        image: "images/text_indonesia.jpg",
        answer: "インドネシア",
        choices: ["インドネシア", "マレーシア", "フィリピン", "ベトナム"],
        note: "アルファベットですが、典型的な東南アジアスタイルの看板です。",
        category: "text",
        difficulty_label: "normal"
    },
    {
        image: "images/text_laos.jpg",
        answer: "ラオス",
        choices: ["ラオス", "タイ", "カンボジア", "ミャンマー"],
        note: "タイ文字に似ていますが、より丸みがあるのが**ラオス文字**の特徴です。",
        category: "text",
        difficulty_label: "hard"
    },
    {
        image: "images/text_nepal.jpg",
        answer: "ネパール",
        choices: ["ネパール", "インド", "ブータン", "チベット"],
        note: "ゾンカ文字よりも角ばっているのが**ネパール文字**の特徴です。",
        category: "text",
        difficulty_label: "hard"
    },
    {
    image: "images/text_spain.jpg",
    answer: "スペイン",
    choices: ["スペイン", "メキシコ", "イタリア", "フランス"],
    note: "「ñ」という文字や、文頭に付く逆さまの感嘆符（¡）がスペイン語の大きな特徴です。",
    category: "text",
    difficulty_label: "easy"
},
{
    image: "images/text_turkey.jpg",
    answer: "トルコ",
    choices: ["トルコ", "アゼルバイジャン", "ハンガリー", "ギリシャ"],
    note: "アルファベットですが、「I」の点がない「ı」や、下にひげの付いた「ş」「ç」があるのがトルコ語の特徴です。",
    category: "text",
    difficulty_label: "normal"
},
{
    image: "images/text_denmark.jpg",
    answer: "デンマーク",
    choices: ["デンマーク", "スウェーデン", "ドイツ", "オランダ"],
    note: "アルファベットですが、Oに斜線の入った「ø」や、AとEが合体した「æ」は北欧（特にデンマークとノルウェー）に特有の文字です。",
    category: "text",
    difficulty_label: "normal"
},
{
    image: "images/text_georgia.jpg",
    answer: "ジョージア",
    choices: ["ジョージア", "アルメニア", "ギリシャ", "ロシア"],
    note: "世界でもジョージアでしか使われていない、独自の丸まった「**ジョージア文字**」です。",
    category: "text",
    difficulty_label: "hard"
},
    
{
    image: "images/text_srilanka.jpg",
    answer: "スリランカ",
    choices: ["スリランカ", "インド", "ミャンマー", "タイ"],
    note: "非常に丸っこい、独自の曲線を持つ「**シンハラ文字**」です。スリランカの公用語の一つです。",
    category: "text",
    difficulty_label: "hard"
}
,
{
    image: "images/text_armenia.jpg",
    answer: "アルメニア",
    choices: ["アルメニア", "ジョージア", "ロシア", "ギリシャ"],
    note: "世界でもアルメニアでしか使われていない、独自の丸みを帯びつつも角張った「**アルメニア文字**」です。",
    category: "text",
    difficulty_label: "hard"
}
,

   
  // --- 標識：横断歩道 (sign-crossing) 完全修正版 ---
    { image: "images/sign/crossing/sign_crossing_Ireland.jpg", answer: "アイルランド", choices: ["アイルランド", "イギリス", "フランス", "アイスランド"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Israel.jpg", answer: "イスラエル", choices: ["イスラエル", "ヨルダン", "ギリシャ", "エジプト"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Italy.jpg", answer: "イタリア", choices: ["イタリア", "フランス", "スペイン", "ギリシャ"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Jamaica.jpg", answer: "ジャマイカ", choices: ["ジャマイカ", "キューバ", "バハマ", "メキシコ"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Kosovo.jpg", answer: "コソボ", choices: ["コソボ", "アルバニア", "セルビア", "北マケドニア"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Kuwait.jpg", answer: "クウェート", choices: ["クウェート", "カタール", "サウジアラビア", "UAE"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Latvia.jpg", answer: "ラトビア", choices: ["ラトビア", "エストニア", "リトアニア", "ロシア"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Luxembourg.jpg", answer: "ルクセンブルク", choices: ["ルクセンブルク", "ベルギー", "フランス", "ドイツ"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Mexico.jpg", answer: "メキシコ", choices: ["メキシコ", "アメリカ", "コロンビア", "スペイン"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_MK.jpg", answer: "北マケドニア", choices: ["北マケドニア", "ギリシャ", "ブルガリア", "セルビア"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Mongolia.jpg", answer: "モンゴル", choices: ["モンゴル", "中国", "ロシア", "カザフスタン"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Nepal.jpg", answer: "ネパール", choices: ["ネパール", "インド", "ブータン", "パキスタン"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Netherlands.jpg", answer: "オランダ", choices: ["オランダ", "ベルギー", "ドイツ", "デンマーク"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Norway.jpg", answer: "ノルウェー", choices: ["ノルウェー", "スウェーデン", "デンマーク", "フィンランド"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Oman.jpg", answer: "オマーン", choices: ["オマーン", "UAE", "サウジアラビア", "イエメン"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Pakistan.jpg", answer: "パキスタン", choices: ["パキスタン", "インド", "イラン", "アフガニスタン"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Philippines.jpg", answer: "フィリピン", choices: ["フィリピン", "インドネシア", "マレーシア", "ベトナム"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Poland.jpg", answer: "ポーランド", choices: ["ポーランド", "ドイツ", "チェコ", "ウクライナ"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Portugal.jpg", answer: "ポルトガル", choices: ["ポルトガル", "スペイン", "フランス", "イタリア"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Qatar.jpg", answer: "カタール", choices: ["カタール", "UAE", "クウェート", "バーレーン"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Slovakia.jpg", answer: "スロバキア", choices: ["スロバキア", "チェコ", "ハンガリー", "オーストリア"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Slovenia.jpg", answer: "スロベニア", choices: ["スロベニア", "イタリア", "クロアチア", "オーストリア"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_SouthAfrica.jpg", answer: "南アフリカ", choices: ["南アフリカ", "ナミビア", "ボツワナ", "ジンバブエ"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Spain.jpg", answer: "スペイン", choices: ["スペイン", "ポルトガル", "フランス", "モロッコ"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Sweden.jpg", answer: "スウェーデン", choices: ["スウェーデン", "ノルウェー", "フィンランド", "デンマーク"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Switzerland.jpg", answer: "スイス", choices: ["スイス", "ドイツ", "フランス", "イタリア"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Thailand.jpg", answer: "タイ", choices: ["タイ", "ラオス", "カンボジア", "マレーシア"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_UAE.jpg", answer: "アラブ首長国連邦", choices: ["アラブ首長国連邦", "オマーン", "サウジアラビア", "カタール"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Uganda.jpg", answer: "ウガンダ", choices: ["ウガンダ", "ケニア", "ルワンダ", "タンザニア"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_UnitedKingdom.jpg", answer: "イギリス", choices: ["イギリス", "アイルランド", "オーストラリア", "アメリカ"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Ukraine.jpg", answer: "ウクライナ", choices: ["ウクライナ", "ロシア", "ポーランド", "ベラルーシ"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Venezuela.jpg", answer: "ベネズエラ", choices: ["ベネズエラ", "コロンビア", "ブラジル", "ガイアナ"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Vietnam.jpg", answer: "ベトナム", choices: ["ベトナム", "中国", "ラオス", "カンボジア"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Albania.jpg", answer: "アルバニア", choices: ["アルバニア", "ギリシャ", "コソボ", "イタリア"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Argentina.jpg", answer: "アルゼンチン", choices: ["アルゼンチン", "チリ", "ウルグアイ", "ブラジル"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Bangladesh.jpg", answer: "バングラデシュ", choices: ["バングラデシュ", "インド", "ミャンマー", "ネパール"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Brazil.jpg", answer: "ブラジル", choices: ["ブラジル", "アルゼンチン", "コロンビア", "パラグアイ"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Cambodia.jpg", answer: "カンボジア", choices: ["カンボジア", "タイ", "ベトナム", "ラオス"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Chile.jpg", answer: "チリ", choices: ["チリ", "アルゼンチン", "ブラジル", "コロンビア"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Croatia.jpg", answer: "クロアチア", choices: ["クロアチア", "スロベニア", "セルビア", "イタリア"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Cyprus.jpg", answer: "キプロス", choices: ["キプロス", "ギリシャ", "トルコ", "エジプト"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Czechia.jpg", answer: "チェコ", choices: ["チェコ", "スロバキア", "ドイツ", "ポーランド"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Egypt.jpg", answer: "エジプト", choices: ["エジプト", "ヨルダン", "サウジアラビア", "リビア"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Estonia.jpg", answer: "エストニア", choices: ["エストニア", "ラトビア", "リトアニア", "ロシア"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Finland.jpg", answer: "フィンランド", choices: ["フィンランド", "スウェーデン", "エストニア", "ノルウェー"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_France.jpg", answer: "フランス", choices: ["フランス", "スペイン", "イタリア", "ベルギー"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Germany.jpg", answer: "ドイツ", choices: ["ドイツ", "オーストリア", "チェコ", "オランダ"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Hungary.jpg", answer: "ハンガリー", choices: ["ハンガリー", "ルーマニア", "スロバキア", "オーストリア"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_India.jpg", answer: "インド", choices: ["インド", "パキスタン", "バングラデシュ", "スリランカ"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Indonesia.jpg", answer: "インドネシア", choices: ["インドネシア", "マレーシア", "フィリピン", "タイ"], note: "", category: "sign-crossing", difficulty_label: "normal" },
    { image: "images/sign/crossing/sign_crossing_Iran.jpg", answer: "イラン", choices: ["イラン", "イラク", "トルコ", "パキスタン"], note: "", category: "sign-crossing", difficulty_label: "normal" },

    // --- 標識：一時停止 (sign-stop) ---
    { image: "images/sign/stop/sign_stop_Denmark.jpg", answer: "デンマーク", choices: ["デンマーク", "ノルウェー", "スウェーデン", "ドイツ"], note: "デンマークの一時停止標識です。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Egypt.jpg", answer: "エジプト", choices: ["エジプト", "サウジアラビア", "ヨルダン", "モロッコ"], note: "アラビア語で「قف（キフ）」と書かれています。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Estonia.jpg", answer: "エストニア", choices: ["エストニア", "ラトビア", "リトアニア", "フィンランド"], note: "エストニアの一時停止標識です。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Ethiopia.jpg", answer: "エチオピア", choices: ["エチオピア", "ケニア", "タイ", "ラオス"], note: "アムハラ語が特徴的なエチオピアの標識です。", category: "sign-stop", difficulty_label: "hard" },
    { image: "images/sign/stop/sign_stop_Finland.jpg", answer: "フィンランド", choices: ["フィンランド", "スウェーデン", "エストニア", "ノルウェー"], note: "フィンランドの一時停止標識です。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Hongkong.jpg", answer: "香港", choices: ["香港", "中国", "台湾", "シンガポール"], note: "「停 STOP」のように英語と漢字が併記されています。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Hungary.jpg", answer: "ハンガリー", choices: ["ハンガリー", "ルーマニア", "スロバキア", "オーストリア"], note: "ハンガリーの一時停止標識です。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Iceland.jpg", answer: "アイスランド", choices: ["アイスランド", "アイルランド", "デンマーク", "ノルウェー"], note: "アイスランドの一時停止標識です。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Indiabengali.jpg", answer: "インド", choices: ["インド", "バングラデシュ", "パキスタン", "スリランカ"], note: "ベンガル文字が併記されているインドの標識です。", category: "sign-stop", difficulty_label: "hard" },
    { image: "images/sign/stop/sign_stop_Indian.jpg", answer: "インド", choices: ["インド", "パキスタン", "ネパール", "スリランカ"], note: "ヒンディー語併記のインドの標識です。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Indonesia.jpg", answer: "インドネシア", choices: ["インドネシア", "マレーシア", "フィリピン", "ベトナム"], note: "インドネシアの一時停止標識です。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Ireland.jpg", answer: "アイルランド", choices: ["アイルランド", "イギリス", "フランス", "アメリカ"], note: "アイルランドの一時停止標識です。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Israel.jpg", answer: "イスラエル", choices: ["イスラエル", "ヨルダン", "ギリシャ", "エジプト"], note: "手のひらのマークが描かれています。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Jamaica.jpg", answer: "ジャマイカ", choices: ["ジャマイカ", "キューバ", "バハマ", "メキシコ"], note: "ジャマイカの一時停止標識です。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Japan.jpg", answer: "日本", choices: ["日本", "韓国", "中国", "台湾"], note: "世界でも珍しい逆三角形の標識です。", category: "sign-stop", difficulty_label: "easy" },
    { image: "images/sign/stop/sign_stop_Laos.jpg", answer: "ラオス", choices: ["ラオス", "タイ", "カンボジア", "ベトナム"], note: "ラオス文字が使われています。", category: "sign-stop", difficulty_label: "hard" },
    { image: "images/sign/stop/sign_stop_Libya.jpg", answer: "リビア", choices: ["リビア", "エジプト", "チュニジア", "モロッコ"], note: "アラビア語のみの表記が特徴です。", category: "sign-stop", difficulty_label: "hard" },
    { image: "images/sign/stop/sign_stop_Malaysia.jpg", answer: "マレーシア", choices: ["マレーシア", "インドネシア", "タイ", "フィリピン"], note: "「BERHENTI」はマレー語で止まれを意味します。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Malaysia2.jpg", answer: "マレーシア", choices: ["マレーシア", "インドネシア", "シンガポール", "ブルネイ"], note: "別パターンのマレーシア標識です。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Mexico.jpg", answer: "メキシコ", choices: ["メキシコ", "スペイン", "アルゼンチン", "コロンビア"], note: "スペイン語の「ALTO」が使われています。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Mongol.jpg", answer: "モンゴル", choices: ["モンゴル", "ロシア", "中国", "カザフスタン"], note: "キリル文字で「ЗОГС」と書かれています。", category: "sign-stop", difficulty_label: "hard" },
    { image: "images/sign/stop/sign_stop_Nigeria.jpg", answer: "ナイジェリア", choices: ["ナイジェリア", "ガーナ", "ケニア", "南アフリカ"], note: "ナイジェリアの一時停止標識です。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Norwegian.jpg", answer: "ノルウェー", choices: ["ノルウェー", "スウェーデン", "デンマーク", "フィンランド"], note: "ノルウェーの一時停止標識です。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Oman.jpg", answer: "オマーン", choices: ["オマーン", "UAE", "カタール", "サウジアラビア"], note: "英語とアラビア語が併記されています。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Peru.jpg", answer: "ペルー", choices: ["ペルー", "コロンビア", "メキシコ", "チリ"], note: "スペイン語の「PARE」です。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Philippines.jpg", answer: "フィリピン", choices: ["フィリピン", "インドネシア", "ベトナム", "マレーシア"], note: "フィリピンの一時停止標識です。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Puertorico.jpg", answer: "プエルトリコ", choices: ["プエルトリコ", "メキシコ", "スペイン", "アメリカ"], note: "アメリカ領ですがスペイン語の「PARE」を使います。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Saudiarabia.jpg", answer: "サウジアラビア", choices: ["サウジアラビア", "エジプト", "オマーン", "UAE"], note: "英語とアラビア語が併記されています。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Slovenia.jpg", answer: "スロベニア", choices: ["スロベニア", "イタリア", "クロアチア", "オーストリア"], note: "スロベニアの一時停止標識です。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Spain.jpg", answer: "スペイン", choices: ["スペイン", "ポルトガル", "フランス", "メキシコ"], note: "スペインは「PARE」ではなく英語の「STOP」を使う地域があります。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Sweden.jpg", answer: "スウェーデン", choices: ["スウェーデン", "ノルウェー", "フィンランド", "デンマーク"], note: "スウェーデンの一時停止標識です。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Thailand.jpg", answer: "タイ", choices: ["タイ", "ラオス", "カンボジア", "ベトナム"], note: "タイ文字で「หยุด」と書かれています。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Tunisia.jpg", answer: "チュニジア", choices: ["チュニジア", "リビア", "モロッコ", "フランス"], note: "アラビア語とフランス語の併記が一般的です。", category: "sign-stop", difficulty_label: "hard" },
    { image: "images/sign/stop/sign_stop_Uganda.jpg", answer: "ウガンダ", choices: ["ウガンダ", "ケニア", "ルワンダ", "エチオピア"], note: "ウガンダの一時停止標識です。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Ukraine.jpg", answer: "ウクライナ", choices: ["ウクライナ", "ロシア", "ポーランド", "ベラルーシ"], note: "キリル文字ではなく「STOP」を使うことが増えています。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Venezuela.jpg", answer: "ベネズエラ", choices: ["ベネズエラ", "コロンビア", "ペルー", "ブラジル"], note: "スペイン語の「PARE」です。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Argentina.jpg", answer: "アルゼンチン", choices: ["アルゼンチン", "チリ", "ウルグアイ", "スペイン"], note: "スペイン語の「PARE」です。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Australia.jpg", answer: "オーストラリア", choices: ["オーストラリア", "ニュージーランド", "イギリス", "アメリカ"], note: "オーストラリアの一時停止標識です。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Bhutan.jpg", answer: "ブータン", choices: ["ブータン", "ネパール", "インド", "チベット"], note: "ゾンカ文字が特徴的です。", category: "sign-stop", difficulty_label: "hard" },
    { image: "images/sign/stop/sign_stop_Brazil.jpg", answer: "ブラジル", choices: ["ブラジル", "ポルトガル", "アルゼンチン", "メキシコ"], note: "ポルトガル語の「PARE」です。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Brunei.jpg", answer: "ブルネイ", choices: ["ブルネイ", "マレーシア", "インドネシア", "タイ"], note: "ジャウィ文字併記のマレー語が特徴です。", category: "sign-stop", difficulty_label: "hard" },
    { image: "images/sign/stop/sign_stop_Cambodia.jpg", answer: "カンボジア", choices: ["カンボジア", "ラオス", "ベトナム", "タイ"], note: "クメール文字が使われています。", category: "sign-stop", difficulty_label: "hard" },
    { image: "images/sign/stop/sign_stop_Canada.jpg", answer: "カナダ", choices: ["カナダ", "アメリカ", "フランス", "イギリス"], note: "ケベック州以外では「STOP」が一般的です。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Canadaquebec.jpg", answer: "カナダ", choices: ["カナダ", "フランス", "ベルギー", "スイス"], note: "ケベック州ではフランス語の「ARRÊT」が使われます。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_Chile.jpg", answer: "チリ", choices: ["チリ", "アルゼンチン", "ペルー", "スペイン"], note: "スペイン語の「PARE」です。", category: "sign-stop", difficulty_label: "normal" },
    { image: "images/sign/stop/sign_stop_China.jpg", answer: "中国", choices: ["中国", "台湾", "日本", "香港"], note: "漢字で「停」と書かれています。", category: "sign-stop", difficulty_label: "easy" },
    { image: "images/sign/stop/sign_stop_Colombia.jpg", answer: "コロンビア", choices: ["コロンビア", "ベネズエラ", "メキシコ", "エクアドル"], note: "スペイン語の「PARE」です。", category: "sign-stop", difficulty_label: "normal" }
];