const quizData = [
    {
        question: "Who is the creator of Mobile Legends: Bang Bang?",
        options: ["Moonton", "Tencent", "Supercell", "Riot Games"],
        answer: "Moonton"
    },
    {
        question: "Which hero is known for his ultimate skill, 'Savage'?",
        options: ["Gusion", "Lancelot", "Karina", "Fanny"],
        answer: "Gusion"
    },
    {
        question: "Which lane is typically played by marksmen in Mobile Legends?",
        options: ["Top Lane", "Mid Lane", "Bottom Lane", "Jungle"],
        answer: "Bottom Lane"
    },
    {
        question: "Which hero is known for his 'M2 World Championship' performance in 2020?",
        options: ["Esmeralda", "Ling", "Chou", "Benedetta"],
        answer: "Ling"
    },
    {
        question: "What is the name of Mobile Legends' main map where battles take place?",
        options: ["Land of Dawn", "The Celestial Palace", "The Abyss", "The Badlands"],
        answer: "Land of Dawn"
    },
    {
        question: "Which hero has the passive ability, 'Thunderbelt'?",
        options: ["Lancelot", "Chou", "Aldous", "Martis"],
        answer: "Martis"
    },
    {
        question: "Which hero is known for her ultimate skill, 'Flicker'?",
        options: ["Karrie", "Layla", "Miya", "Fanny"],
        answer: "Fanny"
    },
    {
        question: "What is the maximum level a hero can reach in Mobile Legends?",
        options: ["20", "30", "40", "50"],
        answer: "15"
    },
    {
        question: "Which hero has the nickname 'The Lightborn'?",
        options: ["Valir", "Cecilion", "Harith", "Lylia"],
        answer: "Cecilion"
    },
    {
        question: "Which item is crucial for tanks due to its ability to regenerate HP?",
        options: ["Demon Shoes", "Oracle", "Blade Armor", "Athena's Shield"],
        answer: "Athena's Shield"
    },
    {
        question: "Which hero is known for his ultimate skill, 'Divine Judgment'?",
        options: ["Lancelot", "Aldous", "Guinevere", "Martis"],
        answer: "Aldous"
    },
    {
        question: "Which hero has the passive ability, 'Lone Star'?",
        options: ["Lesley", "Irithel", "Claude", "Granger"],
        answer: "Granger"
    },
    {
        question: "Which hero is known for his ultimate skill, 'Raging Slash'?",
        options: ["Leomord", "Aldous", "Martis", "Alucard"],
        answer: "Leomord"
    },
    {
        question: "What is the role of the Support hero in Mobile Legends?",
        options: ["Deal high burst damage", "Provide healing and crowd control", "Tank and initiate fights", "Assassinate enemy carries"],
        answer: "Provide healing and crowd control"
    },
    {
        question: "Which hero has the nickname 'The Death Rock'?",
        options: ["Aldous", "Lapu-Lapu", "Roger", "Belerick"],
        answer: "Lapu-Lapu"
    },
    {
        question: "What is the name of the main jungle monster in Mobile Legends?",
        options: ["Lord", "Turtle", "Minotaur", "Abyssal Dragon"],
        answer: "Turtle"
    },
    {
        question: "Which hero is known for her ultimate skill, 'Cutting Moonlight'?",
        options: ["Selena", "Kagura", "Lunox", "Nana"],
        answer: "Kagura"
    },
    {
        question: "Which item is crucial for mages due to its ability to reduce cooldowns?",
        options: ["Calamity Reaper", "Concentrated Energy", "Ice Queen Wand", "Clock of Destiny"],
        answer: "Clock of Destiny"
    },
    {
        question: "Which hero is known for his ultimate skill, 'Blazing Duet'?",
        options: ["Vale", "Grock", "Barats", "Roger"],
        answer: "Vale"
    },
    {
        question: "What is the role of the Marksman hero in Mobile Legends?",
        options: ["Provide healing and crowd control", "Tank and initiate fights", "Assassinate enemy carries", "Deal consistent physical damage"],
        answer: "Deal consistent physical damage"
    }
];

const quiz = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');
const progressElement = document.getElementById('progress');
const resultsElement = document.getElementById('results');
const scoreElement = document.getElementById('score');
const totalElement = document.getElementById('total');

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    optionsElement.innerHTML = '';
    currentQuizData.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option');
        optionsElement.appendChild(button);
    });
    progressElement.innerText = `Question ${currentQuestion + 1} of ${quizData.length}`;
}

function checkAnswer(selectedOption) {
    const selectedAnswer = selectedOption.innerText;
    const correctAnswer = quizData[currentQuestion].answer;

    if (selectedAnswer === correctAnswer) {
        score++;
        feedbackElement.innerText = "Correct!";
    } else {
        feedbackElement.innerText = `Wrong. The correct answer is: ${correctAnswer}`;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quiz.style.display = 'none';
    resultsElement.style.display = 'block';
    scoreElement.innerText = score;
    totalElement.innerText = quizData.length;
}

function restartQuiz() {
    quiz.style.display = 'block';
    resultsElement.style.display = 'none';
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

loadQuestion();