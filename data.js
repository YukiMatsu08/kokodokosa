const quizData = [
    // --- ドメインクイズのデータ ---
    {
        tld: ".jp",
        image: "images/jp_japan.png",
        answer: "日本",
        choices: ["日本", "パラオ", "韓国", "ブラジル"],
        note: "**J**a**p**anの略。...",
        category: "domain",          // これを全データに追加
        difficulty_label: "easy"     // これを全データに追加
    },
    
    // --- 文字クイズのデータ（新規追加分） ---
    {
        image: "images/text_thai.png",
        answer: "タイ",
        choices: ["タイ", "カンボジア", "ラオス", "ミャンマー"],
        note: "丸っこい形が特徴的なタイ文字です。",
        category: "text",            // 文字クイズ用
        difficulty_label: "normal"   // 中級
    },

    // --- 標識クイズのデータ（新規追加分） ---
    {
        image: "images/sign_france.png",
        answer: "フランス",
        choices: ["フランス", "ドイツ", "イタリア", "スペイン"],
        note: "赤い縁取りが特徴的なフランスの標識です。",
        category: "sign",            // 標識クイズ用
        difficulty_label: "hard"     // 上級
    },

    // --- 停止標識バリエーション（標識クイズ：sign） ---
{
    image: "images/sign_mexico_alto.png",
    answer: "メキシコ",
    choices: ["メキシコ", "ブラジル", "スペイン", "フランス"],
    note: "**ALTO**はスペイン語で「止まれ」。中米やメキシコで一般的です。南米の「PARE」と区別しましょう。",
    category: "sign",
    difficulty_label: "easy"     // 初級
},
{
    image: "images/sign_canada_quebec.png",
    answer: "カナダ",
    choices: ["カナダ", "フランス", "スイス", "ベルギー"],
    note: "**STOP / Arrêt** の併記はカナダのケベック州特有。英語とフランス語が共存しています。",
    category: "sign",
    difficulty_label: "normal"   // 中級
},
{
    image: "images/sign_turkey_dur.png",
    answer: "トルコ",
    choices: ["トルコ", "アラブ首長国連邦", "パキスタン", "マレーシア"],
    note: "**DUR**はトルコ語で「止まれ」。八角形に白文字のデザインは共通ですが、単語が独特です。",
    category: "sign",
    difficulty_label: "hard"     // 上級
},
{
    image: "images/sign_south_america_pare.png", // これから作成
    answer: "チリ", // 具体的な国名を1つ設定（南米PAREの代表例）
    choices: ["チリ", "メキシコ", "スペイン", "フランス"],
    note: "**PARE**はスペイン語圏の南米諸国やブラジル（ポルトガル語）で一般的です。メキシコの「ALTO」と区別しましょう。",
    category: "sign",
    difficulty_label: "easy" // 初級（文字がはっきり読めるため）
},
{
    image: "images/sign_indonesia_stop.png", // これから作成
    answer: "インドネシア",
    choices: ["インドネシア", "マレーシア", "タイ", "フィリピン"],
    note: "インドネシア語で「止まれ」を意味する**BERHENTI**の表記と、独自の書体が特徴です。",
    category: "sign",
    difficulty_label: "normal" // 中級（表記が独特）
},
{
    image: "images/sign_brazil_pare.png", // これから作成
    answer: "ブラジル",
    choices: ["ブラジル", "アルゼンチン", "コロンビア", "ポルトガル"],
    note: "ポルトガル語圏の**ブラジル**も「PARE」を使います。南米のスペイン語圏と見分けが難しい最難関問題です。",
    category: "sign",
    difficulty_label: "hard" // 上級（南米PAREのひっかけ）
},
{
    image: "images/sign_japan_stop.png",
    answer: "日本",
    choices: ["日本", "韓国", "中国", "アメリカ"],
    note: "世界的には八角形が主流ですが、日本の停止標識は珍しい**逆三角形**です。2017年からは英語の「STOP」も併記されるようになりました。",
    category: "sign",
    difficulty_label: "easy" // 日本人にとっては馴染み深いため初級
},
{
    image: "images/sign_poland_pedestrian.png",
    answer: "ポーランド",
    choices: ["ポーランド", "ドイツ", "ロシア", "フランス"],
    note: "歩行者が帽子をかぶっているように見える通称**ハットマン**。ポーランドで見られる特徴的なデザインです。",
    category: "sign",
    difficulty_label: "normal"
},
{
    image: "images/sign_spain_pedestrian.png", // これから作成
    answer: "スペイン",
    choices: ["スペイン", "ポルトガル", "フランス", "イタリア"],
    note: "スペインの横断歩道標識は、足元のゼブラゾーンが**8本の縦棒**で描かれるのが特徴です。青色が鮮やかで、歩行者の体が斜めの直線で構成されています。",
    category: "sign",
    difficulty_label: "normal" // 特徴を捉えれば判別可能
}
];