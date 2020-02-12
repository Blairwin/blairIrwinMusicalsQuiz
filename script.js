// ****DOCUMENT READY****
$(document).ready(function() {


  // ***When the first "let's decide" button is pushed, the code starts and the following function is executed***

  function startPlay() {
    $('li').hide();
    $('h1').replaceWith(`<h2>${question.question1.content}</h2>`);
    $('.yesButton').show();
    $('.noButton').show();
    $('.startButton').hide();
    $('.icons').hide();
  };

  $('.startButton').on('click', function () {
    startPlay();
  });


// ***Question object, used to update the question and tell you where to go next, depending on which yes/no button is pushed***
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

// ***the variables below are holding the values (which question to go to next) of the results of the first question, based on the first yes/no button clicks***
let nextYes = 2;
let nextNo = 3;

// ***Constant number for when the screen changes to a results screen, rather than a question screen***
const whereResultScreenStarts = 5;

// ***This function starts by checking to see if you are at a results screen, if you are not, it updates the screen with new question and next screen information. If you ARE at a results screen, it loads***


const nextScreen = function(screenID) {
  if (screenID >= whereResultScreenStarts) {
    for(let currentScreen in resultScreen) {
      const resultScreenObject = resultScreen[currentScreen];
      if (resultScreenObject.resultID === screenID) {
        $('.opener').hide();
        $('.result').show();
        $('h2').replaceWith(`<h2 class="resultH2">${resultScreenObject.h2}</h2>`);
        $('.showPhoto').replaceWith(`<img class="resultPhoto" src="${resultScreenObject.photo}">`);
        $('.showContent').replaceWith(`<div> <p class="resultContent">${resultScreenObject.showDescription}</p></div>`);
        $('.icons').show();
      } 
    }
    }else {
      for (let currentQuestion in question) {
        const currentQuestionObject = question[currentQuestion];
        if (currentQuestionObject.questionID === screenID) {
          $('h2').text(currentQuestionObject.content);
          nextYes = currentQuestionObject.yes;
          nextNo = currentQuestionObject.no;
        }
      }
    }
  };

  // ***takes the player to the next screen, depending on their (yes/no) answer***
  $('.noButton').on('click', function() {
    nextScreen(nextNo);
  });

  $('.yesButton').on('click', function() {
    nextScreen(nextYes);
  });



  // ***resultScreen values to be displayed according to which screen is chosen by the player through the game***

  const resultScreen = {
    screen5: {
      resultID: 5,
      h2: `Check out <span class="italic">Summer</span>!`,
      photo: `./assets/Summer.jpg" alt="a showposter in blues of Summer with Donna Summer on it`,
      showDescription: "Summer: The Donna Summer Musical takes us through Donna Summer’s tumultuous life, tempestuous loves and mega-watt musical hits. Spend the night in her electrifying universe.", 
    },
    screen6: {
      resultID: 6,
      h2: `Check out <span class="italic">Les Miserables</span>!`,
      photo: `./assets/lesMiz.png" alt="a Les Miserables showposter in black, white, red, and blue with classic Young Cosette on it`,
      showDescription: 'Set against the backdrop of 19th-century France, Les Misérables tells an unforgettable story of heartbreak, passion, and the resilience of the human spirit."',
    },
    screen7: {
      resultID: 7,
      h2: `Check out <span class="italic">Come From Away</span>!`,
      photo: `./assets/CFA.jpg" alt="a showposter in bright blues and yellows of Come From Away with the words the hit musical based on the remarkable true story below the title`,
      showDescription: "It’s been called the “edge of the world.” The weather is wild, but the locals never lack for warmth. And it’s here, in Newfoundland, where a remote town became the epicenter of a remarkable true story filled with unusual characters, unexpected camaraderie and uncommon generosity.",
    },
    screen8: {
      resultID: 8,
      h2: `Check out <span class="italic">The Boyfriend</span>!`,
      photo: `./assets/Boyfriend.jpg" alt="a showposter in light blues of The Boyfriend with a couple on a speedboat`,
      showDescription: "The Boy Friend will star beloved stage and screen actor Kelsey Grammer. One of the most well-loved British musicals of all time, The Boyfriend is Sandy Wilson's all-singing all-dancing love letter to 1920s musical comedies.",
    },
    screen9: {
      resultID: 9,
      h2: `Check out <span class="italic">Hamilton</span>!`,
      photo: `./assets/hamilton.jpg" alt="a showposter in gold and black of Hamilton with Alexander Hamilton on a star`,
      showDescription: "Hamilton is the story of America's Founding Father Alexander Hamilton, an immigrant from the West Indies who became George Washington's right-hand man during the Revolutionary War and was the new nation’s first Treasury Secretary.  Featuring a score that blends hip-hop, jazz, blues, rap, R&B, and Broadway, Hamilton is the story of America then, as told by America now.",
    }
  };
});