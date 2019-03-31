const questions = [{
    question: "Will my code work?",
    answers: {
      a: "Absolutely",
      b: "Maybe",
      c: "Doubtful",
      d: "Not in this lifetime"
    },
    correctAnswer: "a"
  },
  {
    question: "Will my code work?",
    answers: {
      a: "Absoultey",
      b: "Maybe",
      c: "Doubtful",
      d: "Not in this lifetime"
    },
    correctAnswer: "c"
  },
  {
    question: "Will my code work?",
    answers: {
      a: "Absoultey",
      b: "Maybe",
      c: "Doubtful",
      d: "Not in this lifetime"
    },
    correctAnswer: "b"
  },
  {
    question: "Will my code work?",
    answers: {
      a: "Absoultey",
      b: "Maybe",
      c: "Doubtful",
      d: "Not in this lifetime"
    },
    correctAnswer: "d"
  },
];
const content = document.getElementById("trivia");
const results = document.getElementById("yourResults");
const submitBtn = document.getElementById("submit");


// ASSEMBLE LAYOUT OF THE GAME \\
function start() {

  const triviaGame = [];

  questions.forEach(
    (questionAsked, qNum) => {
      const answers = [];
      for (letter in questionAsked.answers) {
        answers.push(
          `<label> 
        <input type="radio" name="question${qNum}" value="${letter}">
            ${letter} :
            ${questionAsked.answers[letter]}
          </label>`
        );
      }
      triviaGame.push(
        `<div class="question"> ${questionAsked.question} </div>
      <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );
  content.innerHTML = triviaGame.join('');
}

// CHECK PLAYER'S ANSWERS & DISPLAY RESULTS \\
function checkResults() {}









// SHOW LAYOUT OF THE GAME \\
start();








// SHOW PLAYER'S RESULTS ON CLICK OF SUBMIT BUTTON (EVENTLISTENER) \\
submitBtn.addEventListener("click", checkResults);