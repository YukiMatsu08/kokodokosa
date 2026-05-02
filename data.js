const quizData = [
    // --- ドメインクイズ (11問) ---
    {
        tld: ".jp",
        image: "images/jp_japan.jpg",
        answer: "日本",
        choices: ["日本", "パラオ", "韓国", "ブラジル"],
        note: "**J**a**p**anの略。漢字の看板や日本の道路標識、自動販売機などが映っています。",
        category: "domain",
        difficulty_label: "easy"
    },
{
        tld: ".tw",
        image: "images/tw_taiwan.jpg",
        answer: "台湾",
        choices: ["台湾", "中国", "香港", "タイ"],
        note: ".twはTaiwanの略。画像に映っている「九份茶屋」の看板や、提灯が並ぶ独特の街並みが大きなヒントになります。",
        category: "domain",
        difficulty_label: "easy"
    },
    {
        tld: ".sg",
        image: "images/sg_singapore.jpg",
        answer: "シンガポール",
        choices: ["シンガポール", "マレーシア", "香港", "フィリピン"],
        note: ".sgはSingaporeの略。マリーナベイ・サンズのような近代的な建築物が背景に映っています。",
        category: "domain",
        difficulty_label: "easy"
    },
    {
        tld: ".ru",
        image: "images/ru_russia.jpg",
        answer: "ロシア",
        choices: ["ロシア", "ウクライナ", "ベラルーシ", "カザフスタン"],
        note: ".ruはRussiaの略。雪景色とキリル文字の看板がロシアらしさを象徴しています。",
        category: "domain",
        difficulty_label: "easy"
    },
    {
        tld: ".nz",
        image: "images/nz_new_zealand.jpg",
        answer: "ニュージーランド",
        choices: ["ニュージーランド", "オーストラリア", "イギリス", "スイス"],
        note: ".nzはNew Zealandの略。南アルプス山脈のような壮大な自然風景が特徴です。",
        category: "domain",
        difficulty_label: "easy"
    },
    {
        tld: ".mx",
        image: "images/mx_mexico.jpg",
        answer: "メキシコ",
        choices: ["メキシコ", "スペイン", "ペルー", "ブラジル"],
        note: ".mxはMexicoの略。カラフルな建物やサボテン、唐辛子などの装飾がヒントになります。",
        category: "domain",
        difficulty_label: "easy"
    },
    {
        tld: ".mk",
        image: "images/mk_north_macedonia.jpg",
        answer: "北マケドニア",
        choices: ["北マケドニア", "ブルガリア", "ギリシャ", "セルビア"],
        note: ".mkはMakedonija（現地語読み）の略。東欧の落ち着いた街並みが背景です。",
        category: "domain",
        difficulty_label: "hard"
    },
    {
        tld: ".kr",
        image: "images/kr_south_korea.jpg",
        answer: "韓国",
        choices: ["韓国", "日本", "中国", "台湾"],
        note: ".krはKoreaの略。「명동（明洞）」などのハングル文字の看板が決定的な識別点です。",
        category: "domain",
        difficulty_label: "easy"
    },
    {
        tld: ".it",
        image: "images/it_italy.jpg",
        answer: "イタリア",
        choices: ["イタリア", "フランス", "スペイン", "ギリシャ"],
        note: ".itはItaly의 略。「RISTORANTE」などのイタリア語の看板や歴史的な街並みがヒントです。",
        category: "domain",
        difficulty_label: "easy"
    },
    {
        tld: ".is",
        image: "images/is_iceland.jpg",
        answer: "アイスランド",
        choices: ["アイスランド", "アイルランド", "イスラエル", "ノルウェー"],
        note: ".isはIsland（現地語読み）の略。火山岩の台地や氷河に関する看板が映っています。",
        category: "domain",
        difficulty_label: "normal"
    },

    {
        tld: ".ar",
        image: "images/ar_argentina.jpg",
        answer: "アルゼンチン",
        choices: ["アルゼンチン", "チリ", "ブラジル", "ウルグアイ"],
        note: ".arはArgentinaの略。南米の広大な風景や、独特な標識の背面（道路構造）がヒントになります。",
        category: "domain",
        difficulty_label: "normal"
    },
    {
        tld: ".au",
        image: "images/au_australia.jpg",
        answer: "オーストラリア",
        choices: ["オーストラリア", "ニュージーランド", "南アフリカ", "イギリス"],
        note: ".auはAustraliaの略。赤土の路肩や、特有の道路標識がヒントになることが多いです。",
        category: "domain",
        difficulty_label: "easy"
    },
    {
        tld: ".be",
        image: "images/be_belgium.jpg",
        answer: "ベルギー",
        choices: ["ベルギー", "オランダ", "フランス", "ドイツ"],
        note: ".beはBelgiqueの略。ヨーロッパ標準の街並みですが、看板の言語や家の形に特徴があります。",
        category: "domain",
        difficulty_label: "normal"
    },
    {
        tld: ".br",
        image: "images/br_brazil.jpg",
        answer: "ブラジル",
        choices: ["ブラジル", "ポルトガル", "メキシコ", "コロンビア"],
        note: ".brはBrazilの略。道路の背面が黒い標識や、ポルトガル語の看板が特徴です。",
        category: "domain",
        difficulty_label: "normal"
    },
    {
        tld: ".ca",
        image: "images/ca_canada.jpg",
        answer: "カナダ",
        choices: ["カナダ", "アメリカ", "イギリス", "フランス"],
        note: ".caはCanadaの略。アメリカに似ていますが、速度制限がkm/h表記であることなどが違いです。",
        category: "domain",
        difficulty_label: "easy"
    },
    {
        tld: ".ch",
        image: "images/ch_switzerland.jpg",
        answer: "スイス",
        choices: ["スイス", "ドイツ", "オーストリア", "フランス"],
        note: ".chはConfederatio Helvetica（ラテン語）の略。美しい山々や、正方形に近い形の歩行者標識が特徴です。",
        category: "domain",
        difficulty_label: "normal"
    },
    {
        tld: ".co",
        image: "images/co_colombia.jpg",
        answer: "コロンビア",
        choices: ["コロンビア", "メキシコ", "ペルー", "エクアドル"],
        note: ".coはColombiaの略。黄色いナンバープレートの車が映っていれば、コロンビアの可能性が高いです。",
        category: "domain",
        difficulty_label: "normal"
    },
    {
        tld: ".de",
        image: "images/de_germany.jpg",
        answer: "ドイツ",
        choices: ["ドイツ", "オーストリア", "スイス", "デンマーク"],
        note: ".deはDeutschlandの略。街中のボラード（車止め）や、特有の看板デザインがヒントになります。",
        category: "domain",
        difficulty_label: "normal"
    },
    {
        tld: ".in",
        image: "images/in_india.jpg",
        answer: "インド",
        choices: ["インド", "バングラデシュ", "パキスタン", "タイ"],
        note: ".inはIndiaの略。独特の文字や、道路の右側走行（イギリス式）などが識別点です。",
        category: "domain",
        difficulty_label: "easy"
    },
    {
        tld: ".vn",
        image: "images/vn_vietnam.jpg",
        answer: "ベトナム",
        choices: ["ベトナム", "タイ", "カンボジア", "フィリピン"],
        note: ".vnはViet Namの略。バイクの多さや、特有の電柱の形が風景のヒントになります。",
        category: "domain",
        difficulty_label: "easy"
    },
   {
        "tld": ".za",
        "image": "images/za_south_africa.jpg",
        "answer": "南アフリカ",
        "choices": ["南アフリカ", "オーストラリア", "ナイジェリア", "ケニア"],
        "note": ".zaはZuid-Afrika（オランダ語）の略。路肩の黄色い線や、特定の道路標識が南アフリカの特徴です。",
        "category": "domain",
        "difficulty_label": "hard"
    },
    {
        "tld": ".th",
        "image": "images/th_thailand.jpg",
        "answer": "タイ",
        "choices": ["タイ", "ラオス", "カンボジア", "ベトナム"],
        "note": "**.th**ailandの略。左側通行で、独特なタイ文字の看板や、電柱に絡まった大量の電線が特徴的です。",
        "category": "domain",
        "difficulty_label": "normal"
    },
    {
        "tld": ".nl",
        "image": "images/nl_netherlands.jpg",
        "answer": "オランダ",
        "choices": ["オランダ", "ベルギー", "デンマーク", "ドイツ"],
        "note": "**.n**ether**l**andsの略。車のナンバープレートが前後とも「黄色」であることや、自転車専用道が多いのが目印です。",
        "category": "domain",
        "difficulty_label": "normal"
    },
    {
        "tld": ".uk",
        "image": "images/uk_united_kingdom.jpg",
        "answer": "イギリス",
        "choices": ["イギリス", "アイルランド", "オーストラリア", "アメリカ"],
        "note": "**.u**nited **k**ingdomの略。左側通行で、ナンバープレートが前は白・後ろは黄色。道路の端にある二重の黄色い線（駐車禁止）もヒントです。",
        "category": "domain",
        "difficulty_label": "normal"
    },
    {
        "tld": ".kg",
        "image": "images/kg_kyrgyzstan.jpg",
        "answer": "キルギス",
        "choices": ["キルギス", "カザフスタン", "モンゴル", "ロシア"],
        "note": "**.k**yr**g**yzstanの略。Googleストリートビュー車の屋根に積まれた赤い細長い重り（ルーフラック）が最大の特徴です。",
        "category": "domain",
        "difficulty_label": "hard"
    },
    {
        "tld": ".bt",
        "image": "images/bt_bhutan.jpg",
        "answer": "ブータン",
        "choices": ["ブータン", "ネパール", "チベット", "インド"],
        "note": "**.b**hu**t**anの略。伝統的な装飾が施された家屋の窓枠や、ヒマラヤ山脈の険しい山道が映っています。",
        "category": "domain",
        "difficulty_label": "hard"
    },
    {
        "tld": ".ke",
        "image": "images/ke_kenya.jpg",
        "answer": "ケニア",
        "choices": ["ケニア", "ナイジェリア", "ガーナ", "南アフリカ"],
        "note": "**.ke**nyaの略。Googleカーの前面に「シュノーケル」と呼ばれる吸気管が見えるのがケニア特有のメタ要素です。",
        "category": "domain",
        "difficulty_label": "hard"
    },
    {
        "tld": ".mn",
        "image": "images/mn_mongolia.jpg",
        "answer": "モンゴル",
        "choices": ["モンゴル", "カザフスタン", "キルギス", "中国"],
        "note": "**.m**o**n**goliaの略。見渡す限りの大草原（ステップ）や、Googleカーに積まれたテント等の荷物がヒントです。",
        "category": "domain",
        "difficulty_label": "hard"
    },
    {
        "tld": ".gh",
        "image": "images/gh_ghana.jpg",
        "answer": "ガーナ",
        "choices": ["ガーナ", "ナイジェリア", "セネガル", "ケニア"],
        "note": "**.gh**anaの略。Googleカーのルーフラックの1箇所に、黒いビニールテープが巻かれているのが有名な判別法です。",
        "category": "domain",
        "difficulty_label": "hard"
    },
    {
        "tld": ".fo",
        "image": "images/fo_faroe_islands.jpg",
        "answer": "フェロー諸島",
        "choices": ["フェロー諸島", "アイスランド", "ノルウェー", "グリーンランド"],
        "note": "**.f**ar**o**eの略。デンマーク領。木がほとんど生えていない緑の断崖絶壁と、霧がかりやすい気候が特徴です。",
        "category": "domain",
        "difficulty_label": "hard"
    },
    {
        "tld": ".ls",
        "image": "images/ls_lesotho.jpg",
        "answer": "レソト",
        "choices": ["レソト", "エワティニ", "南アフリカ", "ボツワナ"],
        "note": "**.l**e**s**othoの略。南アフリカの中にある内陸国。非常に標高が高く、岩だらけの山岳地帯と独特の円形小屋が並びます。",
        "category": "domain",
        "difficulty_label": "hard"
    },


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

    // --- 標識クイズ (10問) ---
   
    {
        image: "images/sign_mexico_alto.jpg",
        answer: "メキシコ",
        choices: ["メキシコ", "ブラジル", "スペイン", "フランス"],
        note: "**ALTO**はスペイン語で「止まれ」。中米やメキシコで一般的です。",
        category: "sign",
        difficulty_label: "easy"
    },
    {
        image: "images/sign_canada_quebec.jpg",
        answer: "カナダ",
        choices: ["カナダ", "フランス", "スイス", "ベルギー"],
        note: "**STOP / Arrêt** の併記はカナダのケベック州特有です。",
        category: "sign",
        difficulty_label: "normal"
    },
    {
        image: "images/sign_turkey_dur.jpg",
        answer: "トルコ",
        choices: ["トルコ", "アラブ首長国連邦", "パキスタン", "マレーシア"],
        note: "**DUR**はトルコ語で「止まれ」。八角形に白文字のデザインです。",
        category: "sign",
        difficulty_label: "hard"
    },

    {
        image: "images/sign_indonesia_stop.jpg",
        answer: "インドネシア",
        choices: ["インドネシア", "マレーシア", "タイ", "フィリピン"],
        note: "インドネシア語で「止まれ」を意味する**BERHENTI**の表記が特徴です。",
        category: "sign",
        difficulty_label: "normal"
    },
    {
        image: "images/sign_brazil_pare.jpg",
        answer: "ブラジル",
        choices: ["ブラジル", "アルゼンチン", "コロンビア", "ポルトガル"],
        note: "ポルトガル語圏のブラジルも「PARE」を使います。",
        category: "sign",
        difficulty_label: "hard"
    },
    {
        image: "images/sign_japan_stop.jpg",
        answer: "日本",
        choices: ["日本", "韓国", "中国", "アメリカ"],
        note: "日本の停止標識は珍しい**逆三角形**です。",
        category: "sign",
        difficulty_label: "easy"
    },
    {
        image: "images/sign_poland_pedestrian.jpg",
        answer: "ポーランド",
        choices: ["ポーランド", "ドイツ", "ロシア", "フランス"],
        note: "歩行者が帽子をかぶっているように見える通称**ハットマン**標識です。",
        category: "sign",
        difficulty_label: "normal"
    },
    {
        image: "images/sign_spain_pedestrian.jpg",
        answer: "スペイン",
        choices: ["スペイン", "ポルトガル", "フランス", "イタリア"],
        note: "足元のゼブラゾーンが**8本の縦棒**で描かれるのがスペインの特徴です。",
        category: "sign",
        difficulty_label: "normal"
    },
    {
        image: "images/sign_ireland_pedestrian.jpg", // ファイル名を sign_ 形式に修正
        answer: "アイルランド",
        choices: ["アイルランド", "イギリス", "アイスランド", "ノルウェー"],
        note: "アイルランドの横断歩道標識は、黄色いひし形が使われるのが大きな特徴です。中の人は帽子を被っておらず、頭が単純な丸で描かれています。",
        category: "sign",
        difficulty_label: "normal"
    },
    {
        image: "images/sign_austria_pedestrian.jpg",
        answer: "オーストリア",
        choices: ["オーストリア", "ドイツ", "スイス", "スロベニア"],
        note: "",
        category: "sign",
        difficulty_label: "normal"
    },
    {
        image: "images/sign_belgium_pedestrian.jpg",
        answer: "ベルギー",
        choices: ["ベルギー", "オランダ", "ルクセンブルク", "フランス"],
        note: "",
        category: "sign",
        difficulty_label: "normal"
    },
    {
        image: "images/sign_czech_pedestrian.jpg",
        answer: "チェコ",
        choices: ["チェコ", "スロバキア", "ポーランド", "ハンガリー"],
        note: "",
        category: "sign",
        difficulty_label: "normal"
    },
    {
        image: "images/sign_denmark_pedestrian.jpg",
        answer: "デンマーク",
        choices: ["デンマーク", "ノルウェー", "スウェーデン", "アイスランド"],
        note: "",
        category: "sign",
        difficulty_label: "easy"
    },
    {
        image: "images/sign_estonia_pedestrian.jpg",
        answer: "エストニア",
        choices: ["エストニア", "ラトビア", "リトアニア", "フィンランド"],
        note: "",
        category: "sign",
        difficulty_label: "hard"
    },
    {
        image: "images/sign_finland_pedestrian.jpg",
        answer: "フィンランド",
        choices: ["フィンランド", "エストニア", "スウェーデン", "ロシア"],
        note: "",
        category: "sign",
        difficulty_label: "normal"
    },
    {
        image: "images/sign_france_pedestrian.jpg",
        answer: "フランス",
        choices: ["フランス", "スペイン", "イタリア", "ベルギー"],
        note: "",
        category: "sign",
        difficulty_label: "normal"
    },
    {
        image: "images/sign_germany_pedestrian.jpg",
        answer: "ドイツ",
        choices: ["ドイツ", "オーストリア", "ポーランド", "チェコ"],
        note: "",
        category: "sign",
        difficulty_label: "normal"
    },
    {
        image: "images/sign_greece_pedestrian.jpg",
        answer: "ギリシャ",
        choices: ["ギリシャ", "イタリア", "トルコ", "キプロス"],
        note: "",
        category: "sign",
        difficulty_label: "hard"
    },
    {
        image: "images/sign_hungary_pedestrian.jpg",
        answer: "ハンガリー",
        choices: ["ハンガリー", "ルーマニア", "セルビア", "オーストリア"],
        note: "",
        category: "sign",
        difficulty_label: "hard"
    },
    {
        image: "images/sign_iceland_pedestrian.jpg",
        answer: "アイスランド",
        choices: ["アイスランド", "デンマーク", "フィンランド", "ノルウェー"],
        note: "",
        category: "sign",
        difficulty_label: "easy"
    },
    {
        image: "images/sign_ireland_pedestrian.jpg",
        answer: "アイルランド",
        choices: ["アイルランド", "イギリス", "フランス", "イタリア"],
        note: "",
        category: "sign",
        difficulty_label: "easy"
    },
    {
        image: "images/italy_pedestrian.jpg",
        answer: "イタリア",
        choices: ["イタリア", "フランス", "ギリシャ", "アルバニア"],
        note: "",
        category: "sign",
        difficulty_label: "normal"
    },
    {
        image: "images/sign_latvia_pedestrian.jpg",
        answer: "ラトビア",
        choices: ["ラトビア", "エストニア", "リトアニア", "ポーランド"],
        note: "",
        category: "sign",
        difficulty_label: "hard"
    }
];