// 変数の定義
let currentQuizMode = '';
let currentDifficulty = '';
let currentQuizData = [];
let currentQuestionIndex = 0;
let score = 0;


// ① タイトル画面 → 準備画面への遷移
// --- 画面遷移関数 ---
function showSetup(mode) {
    hideAllScreens();
    currentQuizMode = mode;
    const modeNames = { 'domain': 'ドメインクイズ', 'text': '文字クイズ', 'sign': '標識クイズ' };
    document.getElementById("setup-mode-name").innerText = `${modeNames[mode]} 準備`;
    document.getElementById("setup-screen").classList.add("active");
}

// ② 準備画面 → クイズ画面への遷移
function startQuiz(difficulty) {
    currentDifficulty = difficulty;
    hideAllScreens();
    document.getElementById("current-mode-display").innerText = currentQuizMode;
    document.getElementById("quiz-container").classList.add("active");
    setupQuiz();
    loadQuestion();
}

function showTitle() {
    hideAllScreens();
    document.getElementById("title-screen").classList.add("active");
}

function hideAllScreens() {
    const screens = document.querySelectorAll(".screen");
    screens.forEach(s => s.classList.remove("active"));
}

// --- クイズのセットアップ（既存機能をモード・難易度対応に修正） ---
function setupQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    let filteredData = quizData.filter(data =>
        data.category === currentQuizMode && data.difficulty_label === currentDifficulty
    );
    for (let i = filteredData.length - 1; i > 0; i--) {
        const r = Math.floor(Math.random() * (i + 1));
        [filteredData[i], filteredData[r]] = [filteredData[r], filteredData[i]];
    }
    currentQuizData = filteredData.slice(0, 10);
}

function loadQuestion() {
    const data = currentQuizData[currentQuestionIndex];
    const imgElement = document.getElementById("quiz-question-image");
    imgElement.src = data.image;

    // --- 根本修正：データ内の choices（4択）をそのままコピーしてシャッフルする ---
    const choices = [...data.choices]; // 元のデータを壊さないようコピー
    choices.sort(() => Math.random() - 0.5); // シャッフル

    for (let i = 0; i < 4; i++) {
        const btn = document.getElementById(`quiz-choice${i}`);
        btn.innerText = choices[i];
        btn.disabled = false;
        btn.style.backgroundColor = "";
    }
    // -----------------------------------------------------------

    document.getElementById("quiz-msg").innerText = "";
    document.getElementById("quiz-note").innerText = "";
}

function checkAnswer(choiceIndex) {
    const quizItem = currentQuizData[currentQuestionIndex];
    const msgArea = document.getElementById("quiz-msg");
    const noteArea = document.getElementById("quiz-note");

    // 押されたボタンのテキストを取得
    const selectedText = document.getElementById("quiz-choice" + choiceIndex).textContent;

    for (let i = 0; i < 4; i++) {
        document.getElementById("quiz-choice" + i).disabled = true;
    }

    // 番号ではなく「テキスト」で正解と比較する
    if (selectedText === quizItem.answer) {
        msgArea.textContent = "正解！";
        score++;
    } else {
        msgArea.textContent = "残念！正解は " + quizItem.answer;
    }

    let formattedNote = quizItem.note.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    noteArea.innerHTML = formattedNote;

    setTimeout(goToNext, 1500);
}

// 結果画面の表示（外枠 quiz-container は維持し、中身だけを書き換える）
function goToNext() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuizData.length) {
        loadQuestion();
    } else {
        // 1. 左側の容れ物：スコアを上下左右の中央に配置
        document.querySelector(".quiz-main").innerHTML = `
            <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%; text-align: center;">
                <div id="app-question">結果発表</div>
                <div id="quiz-tld" style="font-size: 1.5rem; padding: 30px; line-height: 1.6;">
                    スコア<br>
                    <span style="font-size: 3rem; color: #007bc3; font-weight: bold;">${score}</span> / ${currentQuizData.length}
                </div>
                <button class="choice-button" onclick="location.reload()">もう一度遊ぶ</button>
            </div>
        `;

        // --- 修正後の goToNext 内のリザルトテーブル部分 ---
        document.querySelector(".quiz-sub").innerHTML = `
    <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem; text-align: left;">
        <thead>
            <tr style="border-bottom: 2px solid #007bc3;">
                <th style="padding: 8px;">#</th>
                ${currentQuizMode === 'domain' ? '<th style="padding: 8px;">ドメイン</th>' : ''}
                <th style="padding: 8px;">国</th>
                <th style="padding: 8px;">解説</th>
            </tr>
        </thead>
        <tbody>
            ${currentQuizData.map((item, index) => `
                <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 8px;">${index + 1}</td>
                    ${currentQuizMode === 'domain' ? `<td style="padding: 8px; font-weight: bold; color: #007bc3;">${item.tld}</td>` : ''}
                    <td style="padding: 8px;">${item.answer}</td>
                    <td style="padding: 8px; font-size: 0.75rem;">${item.note.replace(/\*\*(.*?)\*\*/g, '$1')}</td>
                </tr>
            `).join('')}
        </tbody>
    </table>
`;
    }
}

setupQuiz();
loadQuestion();
