const quizData = [
    {
        question: "Siapa nama Ains Ooal Gown Leader Guild NAZARICK sebelum ia mengganti namanya?",
        a: "Momon",
        b: "Ains",
        c: "Momonga",
        d: "Overlord",
        correct: "c",
    },
    {
        question: "Apa nama pedang pertama kazuma?",
        a: "Excalibur",
        b: "Gram",
        c: "Dark Repulser",
        d: "Chuncunmaru",
        correct: "d",
    },
    {
        question: "Siapa yang menjadi Leader Guild Log Horizon?",
        a: "Shiroe",
        b: "Nyanta",
        c: "Naotsugu",
        d: "Akatsuki",
        correct: "a",
    },
    {
        question: "Siapa maid berambut biru yang selalu melindungi subaru?",
        a: "Ram",
        b: "Emilia",
        c: "Puck",
        d: "Rem",
        correct: "d",
    },
    {
        question: "Siapa orang pertama yang dipercaya Naofumi?",
        a: "Filo",
        b: "Raphtalia",
        c: "Myne",
        d: "Melty",
        correct: "b",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h3>Kamu menjawab ${score}/${quizData.length} Jawaban yang benar</h3>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})