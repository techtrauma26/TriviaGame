$(document).ready(function () {

  // Variables // 
  const questions = [
    {
      question: "1. What is the capital of Madagascar?",
      answers: ["Atoll", "Nairobi", "Masern", "Antananarivo"],
      correctAnswer: "Antanarivo"
    },
    {
      question: "2. What is the capital of Mali?",
      answers: ["Amman", "Dublin", "Bamako", "Vanduz"],
      correctAnswer: "Bamako"
    },
    {
      question: "3. What is the capital of Kyrgyzstan?",
      answers: ["Masern", "Bishkek", "Baghdad", "Jakarta"],
      correctAnswer: "Bishkek"
    },
    {
      question: "4. What is the capital of Morocco?",
      answers: ["Manila", "Nairobi", "Atoll", "Rabat"],
      correctAnswer: "Rabat"
    },
  ];

  // Create Questions and radio buttons // 
  function showQ() {
    const questionAsked = $("#content");
    for (var i = 0; i < questions.length; i++) {

      questionAsked.append('<div id="question">' + questions[i].question + '</div>');

      questionAsked.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + questions[i].answers[0] + '</label></div>');
      questionAsked.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + questions[i].answers[1] + '</label></div>');
      questionAsked.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + questions[i].answers[2] + '</label></div>');
      questionAsked.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + questions[i].answers[3] + '</label></div>');
    };
  };


  // Timer Function // 
  var timerNum = 60;


  function runTime() {
    $("#timer").text("Time remaining: " + timerNum + " seconds");
     timeInterval = setInterval(decrement, 1000);

  };

  function decrement() {
    timerNum--;
    console.log(timerNum);
    $("#timer").text("Time remaining: " + timerNum + " seconds");
    if (timerNum < 0) {
      clearInterval(timeInterval)
      // stop();
      checkResults();
         $("#timer").empty();
    };
  };

  // function stop() {
  //   clearInterval();
  //   // clearInterval(setInterval(decrement, 1000));
  //   checkResults();
  // };

  // // Creating radio buttons //
  // function showQ ()   {
  //   const triviaGame = [];
  //     questions.forEach(
  //       (questionAsked, qNum) => {
  //         const answers = [];

  //         for (letter in questionAsked.answers) {
  //           answers.push(
  //             `
  //             <form>
  //             <label> 
  //             <input type="radio" name="question${qNum}" value="${letter}">
  //             ${letter} :
  //             ${questionAsked.answers[letter]}
  //             </label>
  //             <form>
  //             `
  //           );
  //         }
  //         triviaGame.push(
  //           `
  //             <div id="question"> ${questionAsked.question} </div>
  //             <div id="answers"> ${answers.join('')} </div>
  //           `
  //         );
  //       }
  //     );
  //     content.innerHTML = triviaGame.join('');
  // }

  //Click StartBtn to Start Game//
  function start() {
    $('#startBtn').click(function () {
      runTime();
      document.getElementById("startBtn").style.display = "none";
      decrement();
      showQ();
      $("#startBtn").hide;
    });
  };


  // Submit Button to show results //
  function submit() {
    $('#submitBtn').click(function () {
      stop();
      checkResults();
      document.getElementById("timer").style.display = "none";
      // showresults();
    });
  };
  function showresults(numC, numI, numU) {
    $("#yourResults").show();
    $("#timer").empty();
    $("#timer").hide();
    $("#content").hide();
    $("#submitBtn").hide();
    $("#correctA").text("# of Correct Answers: " + numC);
    $("#incorrectA").text("# of Incorrect Answers: " + numI);
    $("#unanswered").text("# of Questions Skipped : " + numU);
    stop();
  };



  function checkResults() {
    var userA;
    var numC = 0;
    var numI = 0;
    var numU = 0;
    var correctA;
    for (var i = 0; i < questions.length; i++) {
      correctA = questions[i].correctAnswer;
      userA = $('input[id=radio' + i + ']:checked + label').text();
      console.log (userA);
      console.log (correctA);
      if (userA === correctA) {
        numC++;
      } else if (userA === "") {
        numU++;
      } else if (userA !== correctA) {
        numI++;
      };
    };
    showresults(numC, numI, numU);
    
  };


  start();
  submit();

});
