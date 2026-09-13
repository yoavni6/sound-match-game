// === מאגר השלבים לקטלוג ===
const gameData = {
  fart: [
    { id: 1, name: "פלוץ בסיסי", file: "sounds/basic-fart.mp3", duration: 1.2, targetVol: 60 },
    { id: 2, name: "השקט והקטלני", file: "sounds/silent-fart.mp3", duration: 2.0, targetVol: 35 },
    { id: 3, name: "הרטוב במיוחד", file: "sounds/very-wet-fart.mp3", duration: 2.5, targetVol: 75 },
    { id: 4, name: "BOSS: הגאווה הארוכה", file: "sounds/proud-long-fart.mp3", duration: 4.0, targetVol: 85 }
  ],
  burp: [
    { id: 1, name: "גרעפס בסיסי", file: "sounds/basic-burp.mp3", duration: 1.5, targetVol: 55 },
    { id: 2, name: "הנמכת הילוך", file: "sounds/downgrade-burp.mp3", duration: 2.2, targetVol: 65 },
    { id: 3, name: "גרעפס ארוך", file: "sounds/long-burp.mp3", duration: 3.0, targetVol: 75 },
    { id: 4, name: "BOSS: הפיצוץ המלכותי", file: "sounds/explosive-burp.mp3", duration: 2.0, targetVol: 95 }
  ]
};

// === מאגר שאלות הטריוויה (15 שאלות לכל קטגוריה) ===
const triviaQuestions = {
  fart: [
    { q: "כמה פעמים ביום מפליץ אדם ממוצע?", options: ["1-2 פעמים", "10-20 פעמים", "50-60 פעמים", "בכלל לא"], ans: 1 },
    { q: "איזה גז אחראי לריח הרע של הפלוץ?", options: ["חמצן", "מימן גופרתי (Sulfur)", "חנקן", "פחמן דו-חמצני"], ans: 1 },
    { q: "איזה בעל חיים מבריח טורפים בעזרת פלוצים?", options: ["נחש אלמוגים", "אריה", "פיל", "דולפין"], ans: 0 },
    { q: "איזה בעל חיים מפליץ הכי הרבה בעולם?", options: ["פרות", "טרמיטים", "פילים", "לווייתנים"], ans: 1 },
    { q: "מה המהירות הממוצעת של פלוץ בעת יציאתו?", options: ["כ-3 מטרים בשנייה", "כ-30 מטרים בשנייה", "מהירות הקול", "כ-0.1 מטרים בשנייה"], ans: 0 },
    { q: "האם פלוצים דליקים?", options: ["כן, הם מכילים מתאן ומימן", "לא, זה מיתוס", "רק בקיץ", "רק אצל צמחוניים"], ans: 0 },
    { q: "איזה מאכל מפורסם בהגברת פלוצים?", options: ["שעועית וקטניות", "מלפפון", "אורז לבן", "חזה עוף"], ans: 0 },
    { q: "איך נקרא המחקר המדעי שעוסק בגזים במערכת העיכול?", options: ["פלאטולוגיה (Flatology)", "פלוצולוגיה", "גסטרו-בלאסט", "פנאומטיקה"], ans: 0 },
    { q: "האם דגים מפליצים?", options: ["כן, דגי הרינג משתמשים בזה לתקשורת", "לא, אין להם אוויר", "רק דגי זהב", "רק כשהם מחוץ למים"], ans: 0 },
    { q: "מה קורה לגזים אם מתאפקים ולא מפליצים?", options: ["הם נספגים בדם ויכולים לצאת מהפה!", "הבטן מתפוצצת", "הם נעלמים לתמיד", "הם הופכים לשומן"], ans: 0 },
    { q: "מי כתב ספר הומוריסטי על פלוצים במאה ה-18?", options: ["בנג'מין פרנקלין", "אלברט איינשטיין", "אייזק ניוטון", "ויליאם שייקספיר"], ans: 0 },
    { q: "מהו 'Silent and Deadly' (שקט וקטלני)?", options: ["פלוץ ללא קול עם ריח חזק", "גרעפס שקט", "סוג של נחש", "טקטיקת מלחמה"], ans: 0 },
    { q: "האם אנשים מפליצים בזמן שינה?", options: ["כן, השרירים רפויים", "לא, הגוף עוצר את זה", "רק אם חולמים על אוכל", "רק ילדים"], ans: 0 },
    { q: "למה פלוץ במקלחת מריח חזק יותר?", options: ["הלחות והאדים מגבירים את קליטת הריח", "כי המים מייצרים גז", "זה סתם פסיכולוגי", "בגלל הסבון"], ans: 0 },
    { q: "האם חצי מזמן החיים שלנו אנחנו מעבירים בעיכול גזים?", options: ["כן, הגוף מייצר גזים באופן רציף", "לא, רק שעה ביום", "רק אחרי גיל 50", "רק כשאוכלים פיצה"], ans: 0 }
  ],
  burp: [
    { q: "ממה נגרם גרעפס בעיקר?", options: ["אוויר שנבלע במערכת העיכול", "אוכל שרוף", "חוסר בשינה", "ריצה מהירה"], ans: 0 },
    { q: "איזה משקה ידוע כמאיץ גרעפסים?", options: ["משקאות מוגזים (קולה, סודה)", "חלב חם", "מיץ תפוזים סחוט", "מים מינרליים"], ans: 0 },
    { q: "באיזו מדינה גרעפס בסוף הארוחה נחשב למחמאה לשף?", options: ["בסין ובבחריין", "בישראל", "באנגליה", "בארה\"ב"], ans: 0 },
    { q: "איך נקרא המונח הרפואי לגרעפס?", options: ["ארוקטציה (Eructation)", "בורפיזם", "גסטרו-פופ", "בלאסט ספיר"], ans: 0 },
    { q: "שיא גינס לגרעפס הכי חזק עומד על מעל:", options: ["109 דציבלים (כמו מקדחה!)", "50 דציבלים", "200 דציבלים", "80 דציבלים"], ans: 0 },
    { q: "איזה בעל חיים לא יכול לעשות גרעפס בכלל?", options: ["סוסים וארנבים", "פרות", "כלבים", "קופים"], ans: 0 },
    { q: "מה קורה כשאוכלים מהר מדי?", options: ["בולעים יותר אוויר ומפליצים/מגרפשים יותר", "האוכל נעלם", "אין שום השפעה", "הקיבה קטנה"], ans: 0 },
    { q: "למה תינוקות צריכים 'להוציא אוויר' (גרעפס) אחרי חלב?", options: ["כדי לשחרר ללחיצה על הקיבה ולמנוע פליטות", "כדי להירדם", "סתם מנהג", "כדי לגדול מהר"], ans: 0 },
    { q: "האם אפשר לעשות גרעפס בחלל (במיקרו-כבידה)?", options: ["לא! הגז והנוזל בקיבה לא נפרדים", "כן, כרגיל", "רק בחליפת חלל", "כן, אבל בקול חלש"], ans: 0 },
    { q: "מה מכיל הבועה שיוצאת בגרעפס?", options: ["חנקן ופחמן דו-חמצני", "חמצן טהור", "גז מזגנים", "מימן נקי"], ans: 0 },
    { q: "איזה מאכל מייצר גרעפסים חמוצים?", options: ["מאכלים שומניים או חריפים מאוד", "בננה", "לחם לבן", "מלפפון ירוק"], ans: 0 },
    { q: "כמה דציבלים זה שואב אבק ממוצע לעומת שיא הגרעפס?", options: ["שואב אבק: 70dB, שיא גרעפס: 109dB", "שואב אבק חזק יותר", "שניהם 10dB", "אין לזה מדידה"], ans: 0 },
    { q: "מהי הדרך הכי טובה למנוע גרעפסים בלתי רצויים?", options: ["לאכול לאט וללסוס היטב", "לשתות מהר", "ללעוס המון מסטיק", "לרוץ אחרי האוכל"], ans: 0 },
    { q: "האם לעיסת מסטיק מגבירה גרעפסים?", options: ["כן, כי בולעים הרבה אוויר תוך כדי", "לא, זה עוצר גרעפסים", "רק מסטיק מנטה", "רק מסטיק ללא סוכר"], ans: 0 },
    { q: "האם פרות פולטות גז חממה בעיקר דרך גרעפסים או פלוצים?", options: ["עיקר המתאן יוצא בגרעפסים (90%)", "רק בפלוצים", "50-50", "פרות לא מייצרות גז"], ans: 0 }
  ]
};

// משפטי טעינה
const funnyLoadingTexts = [
  "מנתח תדרים... ומד זיהום אוויר...",
  "בטוח שלא יצא מוצק?",
  "אחי, לא ביקשתי עם ריח!",
  "שואב אבק נכנס לפעולה...",
  "בודק מול מעבדות בגרמניה..."
];

// מצב המשחק
let currentCategory = 'fart';
let currentLevel = null;
let progress = JSON.parse(localStorage.getItem('sound_master_progress')) || { fart: [1], burp: [1] };
let highScores = JSON.parse(localStorage.getItem('sound_master_trivia_highscores')) || { fart: 0, burp: 0 };

// משתני טריוויה
let triviaIndex = 0;
let triviaScore = 0;
let triviaTimer = null;
let timeLeft = 15;
let canAnswer = true;

// הקלטה וניתוח
let isRecording = false;
let mediaRecorder = null;
let audioContext = null;
let analyser = null;
let volumeSamples = [];
let recordStartTime = 0;

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  document.getElementById(screenId).classList.remove('hidden');
}

// === לוגיקת טריוויה ===
function startTrivia(category) {
  currentCategory = category;
  triviaIndex = 0;
  triviaScore = 0;
  showScreen('screen-trivia');
  loadQuestion();
}

function restartCurrentTrivia() {
  startTrivia(currentCategory);
}

function loadQuestion() {
  clearInterval(triviaTimer);
  canAnswer = true;
  timeLeft = 15;

  const questions = triviaQuestions[currentCategory];
  const qData = questions[triviaIndex];

  document.getElementById('quiz-progress').textContent = `שאלה ${triviaIndex + 1}/${questions.length}`;
  document.getElementById('quiz-score').textContent = triviaScore;
  document.getElementById('quiz-timer').textContent = timeLeft;
  document.getElementById('quiz-question-text').textContent = qData.q;

  const container = document.getElementById('quiz-options-container');
  container.innerHTML = '';

  // 1. יצירת מערך אובייקטים המקשר בין התשובה לערך המקורי שלה
  let optionsList = qData.options.map((optText, originalIndex) => {
    return {
      text: optText,
      isCorrect: originalIndex === qData.ans
    };
  });

  // 2. ערבוב רנדומלי של התשובות (Fisher-Yates Shuffle)
  for (let i = optionsList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsList[i], optionsList[j]] = [optionsList[j], optionsList[i]];
  }

  // 3. רינדור הכפתורים למסך עם הזיהוי החדש
  optionsList.forEach((optObj, newIndex) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = optObj.text;
    btn.dataset.isCorrect = optObj.isCorrect; // שומר אם זו התשובה הנכונה
    
    btn.onclick = () => handleAnswerShuffled(optObj.isCorrect, btn);
    container.appendChild(btn);
  });

  // טיימר לשאלה
  triviaTimer = setInterval(() => {
    timeLeft--;
    document.getElementById('quiz-timer').textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(triviaTimer);
      handleAnswerShuffled(false, null); // נגמר הזמן
    }
  }, 1000);
}

function handleAnswerShuffled(isCorrect, btnElement) {
  if (!canAnswer) return;
  canAnswer = false;
  clearInterval(triviaTimer);

  const allBtns = document.querySelectorAll('.option-btn');

  // סימון התשובה הנכונה בירוק בלוח
  allBtns.forEach(btn => {
    if (btn.dataset.isCorrect === "true") {
      btn.classList.add('correct');
    }
  });

  if (isCorrect) {
    // חישוב ניקוד מבוסס זמן (עד 1,000 נקודות לשאלה)
    const pointsGained = 400 + (timeLeft * 40); 
    triviaScore += pointsGained;
    document.getElementById('quiz-score').textContent = triviaScore;
  } else if (btnElement) {
    btnElement.classList.add('wrong');
  }

  setTimeout(() => {
    triviaIndex++;
    if (triviaIndex < triviaQuestions[currentCategory].length) {
      loadQuestion();
    } else {
      finishTrivia();
    }
  }, 1500);
}

function finishTrivia() {
  showScreen('screen-trivia-result');
  document.getElementById('final-trivia-score').textContent = triviaScore;

  // בדיקת שיא אישי
  if (triviaScore > (highScores[currentCategory] || 0)) {
    highScores[currentCategory] = triviaScore;
    localStorage.setItem('sound_master_trivia_highscores', JSON.stringify(highScores));
  }

  document.getElementById('high-score-text').textContent = `🏆 שיא אישי: ${highScores[currentCategory]}`;

  const feedback = document.getElementById('trivia-feedback-text');
  if (triviaScore > 10000) feedback.textContent = "🔥 מטורף! אתה פרופסור מדופלם לגזים!";
  else if (triviaScore > 6000) feedback.textContent = "👍 תחרותי מאוד, ידע מרשים!";
  else feedback.textContent = "😅 יש עוד מה ללמוד... נסה שוב!";
}

// === לוגיקת קטלוג והקלטות (נשארה כפי שהייתה) ===
function openCatalog(category) {
  currentCategory = category;
  document.getElementById('catalog-title').textContent = category === 'fart' ? 'קטלוג פלוצים 💨' : 'קטלוג גרעפסים 🗣️';
  
  const container = document.getElementById('levels-list');
  container.innerHTML = '';

  const unlockedList = progress[category] || [1];

  gameData[category].forEach((lvl) => {
    const isUnlocked = unlockedList.includes(lvl.id);
    const div = document.createElement('div');
    div.className = `level-item ${isUnlocked ? '' : 'locked'}`;
    
    div.innerHTML = `
      <div class="level-info">
        <h4>${lvl.name}</h4>
        <p>אורך: ${lvl.duration}s</p>
      </div>
      <span>${isUnlocked ? '🔓' : '🔒'}</span>
    `;

    if (isUnlocked) {
      div.onclick = () => startChallenge(lvl);
    }

    container.appendChild(div);
  });

  showScreen('screen-catalog');
}

function startChallenge(level) {
  currentLevel = level;
  document.getElementById('challenge-title').textContent = level.name;
  showScreen('screen-challenge');
}

function playTargetSound() {
  if (!currentLevel) return;
  const audio = new Audio(currentLevel.file);
  audio.play().catch(() => alert("שים לב: הקובץ לא נמצא בתיקיית sounds/"));
}

async function toggleRecording() {
  const btn = document.getElementById('record-btn');
  const status = document.getElementById('record-status');

  if (!isRecording) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      analyser = audioContext.createAnalyser();
      const microphone = audioContext.createMediaStreamSource(stream);
      microphone.connect(analyser);

      mediaRecorder = new MediaRecorder(stream);
      volumeSamples = [];

      mediaRecorder.onstop = triggerProcessingFlow;

      mediaRecorder.start();
      recordStartTime = Date.now();
      isRecording = true;

      btn.classList.add('recording');
      btn.textContent = "🛑 עצור";
      status.textContent = "מקלטים...";

      sampleVolume();
    } catch (err) {
      alert("יש לאשר גישה למיקרופון!");
    }
  } else {
    mediaRecorder.stop();
    isRecording = false;
    btn.classList.remove('recording');
    btn.textContent = "🎙️ התחל הקלטה";
    status.textContent = "סיימת!";
  }
}

function sampleVolume() {
  if (!isRecording) return;
  const dataArray = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(dataArray);
  
  let sum = 0;
  for (let i = 0; i < dataArray.length; i++) sum += dataArray[i];
  volumeSamples.push(sum / dataArray.length);

  requestAnimationFrame(sampleVolume);
}

function triggerProcessingFlow() {
  const overlay = document.getElementById('overlay-loading');
  const loadingText = document.getElementById('funny-loading-text');
  
  overlay.classList.remove('hidden');
  loadingText.textContent = funnyLoadingTexts[Math.floor(Math.random() * funnyLoadingTexts.length)];

  setTimeout(() => {
    overlay.classList.add('hidden');
    calculateScore();
  }, 2000);
}

function calculateScore() {
  const duration = (Date.now() - recordStartTime) / 1000;
  const avgVol = volumeSamples.length > 0 
    ? volumeSamples.reduce((a, b) => a + b, 0) / volumeSamples.length 
    : 0;

  const durDiff = Math.abs(duration - currentLevel.duration);
  const durScore = Math.max(0, 50 - (durDiff * 18));

  const volDiff = Math.abs(avgVol - currentLevel.targetVol);
  const volScore = Math.max(0, 50 - (volDiff * 1.3));

  const finalScore = Math.min(100, Math.round(durScore + volScore));

  if (finalScore >= 70) {
    const nextLvlId = currentLevel.id + 1;
    if (!progress[currentCategory].includes(nextLvlId)) {
      progress[currentCategory].push(nextLvlId);
      localStorage.setItem('sound_master_progress', JSON.stringify(progress));
    }
  }

  showResult(finalScore, duration.toFixed(1), Math.round(avgVol));
}

function showResult(score, duration, avgVol) {
  document.getElementById('score-number').textContent = score;
  document.getElementById('stat-time').textContent = `${duration}s`;
  document.getElementById('stat-vol').textContent = avgVol;

  const badge = document.getElementById('result-badge');
  const feedback = document.getElementById('result-feedback');

  if (score >= 70) {
    badge.textContent = "🎉 שלב הושלם!";
    badge.style.color = "#50fa7b";
    feedback.textContent = "מטורף! פתחת את השלב הבא בקטלוג!";
  } else {
    badge.textContent = "❌ לא מספיק...";
    badge.style.color = "#ff5555";
    feedback.textContent = "צריך לפחות 70% כדי לפתוח את השלב הבא. נסה שוב!";
  }

  showScreen('screen-result');
}

function retryChallenge() {
  showScreen('screen-challenge');
}