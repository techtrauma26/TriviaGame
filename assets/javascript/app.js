$(document).ready(function () {

      const questions = [{
          question: "What is the capital of Madagascar?",
          answers: {
            a: "Atoll",
            b: "Nairobi",
            c: "Masern",
            d: "Antananarivo"
          },
          correctAnswer: "d"
        },
        {
          question: "What is the capital of Mali?",
          answers: {
            a: "Amman",
            b: "Dublin",
            c: "Bamako",
            d: "Vanduz"
          },
          correctAnswer: "c"
        },
        {
          question: "What is the capital of Kyrgyzstan?",
          answers: {
            a: "Masern",
            b: "Bishkek",
            c: "Baghdad",
            d: "Jakarta"
          },
          correctAnswer: "b"
        },
        {
          question: "What is the capital of Morocco?",
          answers: {
            a: "Manila",
            b: "Nairobi",
            c: "Atoll",
            d: "Rabat"
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

      start();

      submitBtn.addEventListener("click", checkResults);
     
      








})