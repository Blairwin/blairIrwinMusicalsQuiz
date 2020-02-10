// ****DOCUMENT READY****
$(document).ready(function() {

  // if (condition) {
  //   //  block of code to be executed if the condition is true
  // } 

  
  

  // if ('button' === button(text(answer1))) {
  //   $('button').on('click', function () {
  //     $('h1').text(question2);
  //     $('button').text(answer1);
  //   }
  //   )
  


  // $('button').on('click', function (event) {
  //   $('h1').text(question2);
  //   $('button').text(answer1);
  //   // $('button').append(`'button'(answer2)`); 
  // });


// *****QUESTION OBJECT*****
const question = {
  question1: { 
    questionID: 1,
    content: "Would seeing something familiar/hummable make you happy?",
    yes: 2,
    no: 3
  },
  question2: { 
    questionID: 2,
    content: "Do you prefer pop music to music from musicals?",
    yes: 5, /*result screen*/
    no: 6 /*result screen*/
  },
  question3: {
    questionID: 3,
    content: "Do you want to see a Canadian Cast?",
    yes: 7, /*result screen*/
    no: 4
  },
  question4: {
    questionID: 4,
    content: "Would seeing a celebrity in the star role make you happy?",
    yes: 8, /*result screen*/
    no: 9 /*result screen*/
  }
};

// the variables below are holding the values of the first question, based on the first yes / no button clicks
let nextYes = 2;
let nextNo = 3;


// Updates screen with new question and next screen information.
const nextScreen = function(screenID) {
  for(let currentQuestion in question) {
    const currentQuestionObject = question[currentQuestion];
    if (currentQuestionObject.questionID === screenID) {
        $('h2').text(currentQuestionObject.content);
        nextYes = currentQuestionObject.yes;
        nextNo = currentQuestionObject.no;
    } 
  }
};

$('.noButton').on('click', function () {
  nextScreen(nextNo);
});

$('.yesButton').on('click', function () {
  nextScreen(nextYes);
});



  // *****ANSWERSCREEN OBJECT*****
  const answerScreen = {
    screen4: {
      h3: "Summer!",
      photo: "./assets/Summer.jpg",
      showDescription: "Summer: The Donna Summer Musical takes us through Donna Summer’s tumultuous life, tempestuous loves and mega-watt musical hits. Spend the night in her electrifying universe.", 
    },
    screen5: {
      h3: "Les Miserables!",
      photo: "./assets/lesMiz.png",
      showDescription: 'By popular demand, Cameron Mackintosh’s acclaimed production of Alain Boublil and Claude-Michel Schönberg’s Tony Award-winning musical phenomenon, Les Misérables returns to Toronto. Set against the backdrop of 19th-century France, Les Misérables tells an unforgettable story of heartbreak, passion, and the resilience of the human spirit. Featuring the beloved songs "I Dreamed A Dream", "On My Own", "Stars", "Bring Him Home", “One Day More", and many more, this epic and uplifting story has become one of the most celebrated musicals in theatrical history.With its glorious new staging and dazzlingly reimagined scenery inspired by the paintings of Victor Hugo, this breathtaking new production has left both audiences and critics awestruck, hailed as the "Les Miz for the 21st Century."',
    },
    screen7: {
      h3: "Come From Away!",
      photo: "./assets/CFA.jpg",
      showDescription: "Come From Away is the breathtaking new musical that Toronto has embraced with open arms and has audiences leaving the theatre night after night claiming they are “proud to be Canadian!” It’s been called the “edge of the world.” The weather is wild, but the locals never lack for warmth. And it’s here, in Newfoundland, where a remote town became the epicenter of a remarkable true story filled with unusual characters, unexpected camaraderie and uncommon generosity.",
    },
    screen9: {
      h3: "The Boyfriend!",
      photo: "./assets/Boyfriend.jpg",
      showDescription: "The Boy Friend will star beloved stage and screen actor Kelsey Grammer as Lord Brockhurst, making his Canadian stage debut in this new production. Sandy Wilson's all-singing all-dancing love letter to 1920s musical comedies comes to Toronto direct from a critically acclaimed, sell-out season at the prolific Menier Chocolate Factory in London and prior to a West End transfer. Set in Madame Dubonnet's finishing school in the south of France, perfect young ladies burst into song at the least provocation, and forbidden boy friends are forever popping through the French windows to sing and dance with them. Since its premiere in 1953, this light-hearted soufflé of a show has delighted audiences worldwide and has become one of the most well-loved British musicals of all time.",
    },
    screen10: {
      h3: "Hamilton!",
      photo: "./assets/hamilton.jpg",
      showDescription: "Hamilton is the story of America's Founding Father Alexander Hamilton, an immigrant from the West Indies who became George Washington's right-hand man during the Revolutionary War and was the new nation’s first Treasury Secretary.  Featuring a score that blends hip-hop, jazz, blues, rap, R&B, and Broadway, Hamilton is the story of America then, as told by America now.",
    }
  };


  function startPlay() {
    $('li').hide();
    $('h1').replaceWith('<h2>' + (question.question1.content) + '</h2>');
    $('.yesButton').show();
    $('.noButton').show();
    $('.startButton').hide();
  };

  $('.startButton').on('click', function () {
    startPlay();
  });

 








  // // *****NEXTSCREEN FUNCTION*****
  // const nextScreen = function (question, answer1, answer2) {
  //   $('h1').text(question);
  //   $('.yes').text(answer1);
  //   $('.no').text(answer2);
  // };


  // *****FIRST BUTTON CLICK FUNCTION*****
  // $('button').on('click', function () {
  //   $('li').hide();
  //   $('h1').replaceWith('<h2>' + (question.question1) + '</h2>'); 
  //   $('.yesButton').show();
  //   $('.noButton').show();
  //   $('.startButton').hide();
  // });


  // $('button.no').on('click'), function () {
  //   console.log(yay);
  //   nextScreen(question3, answer.answer1, answer.answer2);
  // }
    // $('h1').replaceWith(function () {
    //   return '<h2>' + $(this).text(question.question1) + '</h2>';
    // },
    // $('h2').text(question.question1),
  

  
    



  // $(this).replaceWith("<div>" + $(this).text() + "</div>");

  // if ($('.yes').on('click')) {
  //   $('h1').text(question2)
  // } else $('h1').text(question3);

  // console.log(nextScreen(question4, answer1, answer2));
  





  

// if ($('.yesButton').on('click') && $('h2') === (question.question1)) {
//   nextYes();
// } else {
//     nextNo()
//   };



// function answerScreenResults() {
//   $('.answers').show();
// };

// if ($('.yesButton').on('click' === (question.question3))){
//   answerScreenResults();
// }else {
//   $('.answers').hide();
// }


  // if (condition) {
  //   //  block of code to be executed if the condition is true
  // } 



// // const change = document.getElementById('.question')

// // *****ANSWER OBJECT*****
// const answer = {
//   answer1: "yes",
//   answer2: "no",
// };



  // function nameOfFunction() {
  //   // block of statements to execute
  // }

});
