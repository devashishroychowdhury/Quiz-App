const quizdb = [
    {
        id: 1,
        question: "Which of these following are used for styling ?",
        answer: "CSS"
    },
    {
        id: 2,
        question: "Which of these following is not an programming language ?",
        answer: "HTML"
    },
    {
        id: 3,
        question: "Client Side code is written with the help of which language ?",
        answer: "JavaScript"
    },
    {
        id: 4,
        question: "Server Side Scripting is written with which of the following ?",
        answer: "PHP"
    }
]

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark")
})

let correct_option = document.querySelector('.correct-ans');
let wrong_option = document.querySelector('.wrong-ans');
let question = document.querySelector('.questions').innerHTML = quizdb[0].question;

console.log(question)
let error = document.querySelector('.error')


let button = document.getElementById("submit");

button.addEventListener("click", () => {

    try {
        let selectedValue = document.querySelector('input[name="check"]:checked').value;
        console.log(selectedValue)


        for (i = 0; i <= quizdb.length - 1; i++) {

            if (selectedValue == quizdb[0].answer) {
                correct_option.classList.add('show')
                wrong_option.classList.remove('show')
            }
            else {
                console.log(selectedValue + "is not a appropriate option")
                wrong_option.classList.add('show')
                correct_option.classList.remove('show')
            }

            if (selectedValue == quizdb[1].answer) {
                correct_option.classList.add('show')
                wrong_option.classList.remove('show')
            }
            else {
                console.log(selectedValue + "is not a appropriate option")
                wrong_option.classList.add('show')
                correct_option.classList.remove('show')
            }

            if (selectedValue == quizdb[2].answer) {
                correct_option.classList.add('show')
                wrong_option.classList.remove('show')
            }
            else {

                console.log(selectedValue + "is not a appropriate option")
                wrong_option.classList.add('show')
                correct_option.classList.remove('show')
            }

            if (selectedValue == quizdb[3].answer) {
                correct_option.classList.add('show')
                wrong_option.classList.remove('show')
            }
            else {
                console.log(selectedValue + "is not a appropriate option")
                wrong_option.classList.add('show')
                correct_option.classList.remove('show')
            }
        }
    }
    catch (e) {
        console.log(e)
    }
})

let nextbtn = document.querySelector('#next').addEventListener('click', () => {
    let question = document.querySelector('.questions')

    let currentQuestion = question.innerHTML;
    let currentIndex = quizdb.findIndex(item => item.question === currentQuestion);

    if (currentIndex >= 0 && currentIndex < quizdb.length - 1) {
        let nextQuestion = quizdb[currentIndex + 1].question;
        question.innerHTML = nextQuestion;
    }
});


