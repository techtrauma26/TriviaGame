$(document).ready(function () {

      const questions = [{
          question: "Will my code work?",
          answers: [
            "Absolutely",
            "Maybe",
            "Doubtful",
            "Not in this lifetime"
          ],
          correctAnswer: "a"
        },
        {
          question: "Will my code work?",
          answers: [
            "Absolutely",
            "Maybe",
            "Doubtful",
            "Not in this lifetime"
          ],
          correctAnswer: "c"
        },
        {
          question: "Will my code work?",
          answers: [
            "Absolutely",
            "Maybe",
            "Doubtful",
            "Not in this lifetime"
          ],
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
      var playerAnswer = [];

      var correct = 0;
      var incorrect = 0;
      var missed = 0;

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
      runTime();
      }

      function submitAns() {
        $("#submit").on("click", function (z) {
          (this).preventDefault();
          playerChoice.length = 0;

          
          // var playerSelection = $("#yourResults input:radio[name=choices]:checked").val().trim();
          var playerSelection = $("#yourResults input:radio[name=choices]:checked").val().trim();
          playerAnswer.push(playerSelection);
          console.log(playerAnswer );
        });
      };


        var timerNum = 100;
        var timeInterval ;
        function runTime() {
          timeInterval = setInterval(decrement, 1000);

        function decrement() {
          timerNum--;
        };
          
        if (timerNum === 0) {

          stop();
          checkResults();
          alert("Time Up!");
        }
        
        $("#timer").html("Time remaining: " + timerNum + " seconds");
    

      };



   
      runTime();

  



      // CHECK PLAYER'S ANSWERS & DISPLAY RESULTS \\
    function checkResults() {
 
      const answerContainer = content.querySelectorAll(".answers");
 
    let correct = 0;

 
    questions.forEach(
      (questionAsked, qNum) => {
       
      const results = answerContainers[qNum];
      const selector = `input[name=question${qNum}]:checked`;
      const userPicks = (answerContainer.querySelector(selector) || {}).value;

      if (userPicks === questionAsked.correctAnswer) {
        correct++;
      } else {
        incorrect++;
           
      }
    });


  results.innerHTML = `${correct} out of ${questions.length}`;
  }






     






      // SHOW LAYOUT OF THE GAME \\
      start();







      // SHOW PLAYER'S RESULTS ON CLICK OF SUBMIT BUTTON (EVENTLISTENER) \\
      submitBtn.addEventListener("click", checkResults);
     
      








})