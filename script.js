// 変数の定義
let currentQuizData = [];
let currentQuestionIndex = 0;
let score = 0;
let currentMode = '';

/**
 * クイズ開始（タイトル画面から直接呼ばれる）
 * @param {string} genre - 'domain', 'text' など
 * @param {number} limit - 10 または 0 (全問)
 */
function startQuiz(genre, limit) {
    currentMode = genre;
    
    // 指定されたカテゴリーのみ抽出[cite: 3]
    let filteredData = quizData.filter(item => item.category === genre);

    // シャッフル[cite: 4]
    filteredData.sort(() => Math.random() - 0.5);

    // 問題数の制限（limitが0より大きい場合のみ切り出し）[cite: 4]
    currentQuizData = limit > 0 ? filteredData.slice(0, limit) : filteredData;

    if (currentQuizData.length === 0) {
        alert("クイズデータが見つかりません。");
        return;
    }

    // モード表示名の設定
    const modeNames = { 
        'domain': 'ドメイン', 
        'text': '文字', 
        'sign-stop': '一時停止', 
        'sign-crossing': '横断歩道' 
    };
    const limitLabel = limit > 0 ? `(${limit}問)` : "(全問)";
    document.getElementById('current-mode-display').textContent = `${modeNames[genre]} ${limitLabel}`;

    // 画面の切り替え（クイズ画面へ直行）[cite: 1, 4]
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('quiz-container').classList.add('active');

    // 初期化して開始
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('current-score').textContent = `正答: ${score}`;
    loadQuestion();
}

// ② 問題の表示
// ② 問題の表示
function loadQuestion() {
    // 表示のリセット
    document.getElementById('quiz-msg').textContent = '';
    document.getElementById('quiz-note').textContent = '';

    const question = currentQuizData[currentQuestionIndex];
    const quizImage = document.getElementById('quiz-question-image');
    const questionText = document.getElementById('app-question');

    // 画像とテキストの表示制御
    if (question.image) {
        quizImage.src = question.image;
        quizImage.style.display = 'block';
        questionText.textContent = (currentMode === 'domain' && question.tld) 
            ? `ドメイン: ${question.tld}` 
            : "この画像から国を特定せよ";
    }

    // --- ここから選択肢のシャッフル処理を追加 ---
    // 元の配列（question.choices）を壊さないようにコピーしてシャッフル
    const shuffledChoices = [...question.choices].sort(() => Math.random() - 0.5);

    // シャッフルされた選択肢をボタンにセット[cite: 1, 2]
    for (let i = 0; i < 4; i++) {
        const btn = document.getElementById(`quiz-choice${i}`);
        btn.textContent = shuffledChoices[i]; // シャッフル後の配列を使用
        btn.disabled = false;
        btn.className = 'choice-button';
    }
}

function quitAndResults() {
    if (confirm("そこまでの成績で結果を表示しますか？")) {
        // currentQuizData を現在解いた問題までに切り取って結果表示へ送る
        // currentQuestionIndex が現在取り組んでいる問題の番号
        currentQuizData = currentQuizData.slice(0, currentQuestionIndex);
        
        // 1問も解いていない場合はタイトルへリロード
        if (currentQuizData.length === 0) {
            location.reload();
        } else {
            showResult();
        }
    }
}

// ③ 答え合わせ
function checkAnswer(choiceIndex) {
    const question = currentQuizData[currentQuestionIndex];
    const msgArea = document.getElementById("quiz-msg");
    const noteArea = document.getElementById("quiz-note");
    const selectedText = document.getElementById("quiz-choice" + choiceIndex).textContent;

    // ボタンの無効化
    for (let i = 0; i < 4; i++) {
        document.getElementById("quiz-choice" + i).disabled = true;
    }

    // 正誤判定
    if (selectedText === question.answer) {
        msgArea.textContent = "正解！";
        score++;
        document.getElementById('current-score').textContent = `正答: ${score}`;
    } else {
        msgArea.textContent = "残念！正解は " + question.answer;
    }

    // 解説の表示（**を太字に変換）[cite: 3]
    if (question.note) {
        noteArea.innerHTML = question.note.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    }

    // 1.5秒後に次へ
    setTimeout(goToNext, 1500);
}

// ④ 次へ
function goToNext() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// ⑤ 結果表示
function showResult() {
    // メインエリアを書き換え
    document.querySelector(".quiz-main").innerHTML = `
        <div style="text-align: center; padding-top: 50px;">
            <div id="app-question">結果発表</div>
            <div style="font-size: 2rem; margin: 20px 0;">
                <span style="color: #007bc3; font-weight: bold;">${score}</span> / ${currentQuizData.length}
            </div>
            <button class="choice-button" onclick="location.reload()">タイトルに戻る</button>
        </div>
    `;

    // サブエリア（解説一覧）の生成[cite: 3]
    let resultHTML = `
        <div style="overflow-y: auto; max-height: 500px; padding: 10px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem;">
                <tr style="border-bottom: 2px solid #007bc3;">
                    <th style="text-align: left; padding: 8px;">正解</th>
                    <th style="text-align: left; padding: 8px;">解説</th>
                </tr>
    `;

    currentQuizData.forEach(item => {
        resultHTML += `
            <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 8px; font-weight: bold; white-space: nowrap;">${item.answer}</td>
                <td style="padding: 8px;">${(item.note || "").replace(/\*\*(.*?)\*\*/g, '$1')}</td>
            </tr>
        `;
    });

    resultHTML += `</table></div>`;
    document.querySelector(".quiz-sub").innerHTML = resultHTML;
}