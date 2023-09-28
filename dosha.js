const quiz = document.querySelector('#quiz');

quiz.addEventListener('click', event => {
  // Get the radio button input element that was clicked.
  const radioButton = event.target;

  // Get the index of the question in the `questions` array.
  const questionIndex = radioButton.getAttribute('data-question');

  // Deselect all other radio buttons in the same question.
  const otherRadioButtons = quiz.querySelectorAll(`input[name="${radioButton.name}"]`);
  for (const otherRadioButton of otherRadioButtons) {
    if (otherRadioButton !== radioButton) {
      otherRadioButton.checked = false;
    }
  }
});

const submitButton = document.querySelector('#submit-button');

// Create a list of questions
const questions = [
  {
    header: "Vata",
    question: "Do you consider yourself to be very efficient?",
    answers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ],
  },
  {
    header: "Vata",
    question: "In your activities, do you tend to be extremely precise and orderly?",
    answers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ],
  },
  {
    header: "Vata",
    question: "Do you have a placid, calm disposition - you're not easily ruffled?",
    answers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ],
  },
  {
    header: "Vata",
    question: "Can you skip meals easily without any significant discomfort?",
    answers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ],
  },
  {
    header: "Vata",
    question: "Do you have a tendency toward excess mucus, phlegm, chronic congestion, asthma or sinus problems?",
    answers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ],
  },
  {
    header: "Vata",
    question: "Must you get at least eight hours sleep in order to be comfortable the next day?",
    answers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ],
  },
  {
    header: "Vata",
    question: "Do you sleep very deeply?",
    answers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ],
  },
  {
    header: "Vata",
    question: "Are you calm by nature and not easily angered?",
    answers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ],
  },
  {
    header: "Vata",
    question: "Don't you learn as quickly as some people, but you have excellent retention and a long memory?",
    answers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ],
  },
  {
    header: "Vata",
    question: "Do you have a tendency toward becoming plump - you store extra fat easily?",
    answers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ],
  },
  {
    header: "Vata",
    question: "Does weather that is cool and damp bother you?",
    answers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ],
  },
  {
    header: "Pitta",
    question: "Do you consider yourself to be very efficient?",
    answers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ],
  },
  {
    header: "Pitta",
    question: "In your activities, do you tend to be extremely precise and orderly?",
    answers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ],
  },
  {
    header: "Pitta",
    question: "Are you strong-minded and have a somewhat forceful manner?",
    answers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ],
  },
  {
    header: "Pitta",
    question: "Do you feel uncomfortable or become easily fatigued in hot weather- more so than most other people?",
    answers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ],
  },
  {
    header: "Pitta",
    question: "Do you tend to perspire easily?",
    answers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ],
  },
  {
    header: "Pitta",
    question: "Even though you might not always show it, do you become irritable or angry quite easily?",
    answers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ],
  },
  {
    header: "Pitta",
    question: "If you skip a meal, or a meal is delayed, do you become uncomfortable?",
    answers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ],
  },
  {
    header: "Pitta",
    question: "One or more of the following characteristics describes my hair: early graying or balding, thin, fine, straight hair, blonde, red or sandy coloured hair?",
    answers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ],
  },
  {
    header: "Pitta",
    question: "Do you have a strong appetite; if you want to, you can eat quite a large quantity?",
    answers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ],
  },
  {
    header: "Pitta",
    question: "Many people consider you stubborn?",
    answers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ],
  },
  {
    header: "Pitta",
    question: "Do you become impatient very easily?",
    answers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ],
  },
  {
    header: "Kapha",
    question: "Do you perform activity very quickly?",
    answers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ],
  },
  {
    header: "Kapha",
    question: "Are you not good at memorising things and then remembering them later?",
    answers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ],
  },
  {
    header: "Kapha",
    question: "Are you enthusiastic and vivacious by nature?",
    answers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ],
  },
  {
    header: "Kapha",
    question: "Do you have a thin physique - you don\'t gain weight very easily?",
    answers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ],
  },
  {
    header: "Kapha",
    question: "Do you learn new things very easily?",
    answers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ],
  },
  {
    header: "Kapha",
    question: "My characteristic gait while walking is light and quick.",
    answers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ],
  },
  {
    header: "Kapha",
    question: "Do you tend to have difficulties making decisions?",
    answers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ],
  },
  {
    header: "Kapha",
    question: "Do you tend to develop gas or become constipated easily?",
    answers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ],
  },
  {
    header: "Kapha",
    question: "Do you tend to have cold hands and feet?",
    answers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ],
  },
  {
    header: "Kapha",
    question: "Do you become tired easily?",
    answers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ],
  }

  // ... Add more questions here
];

for (let i = 0; i < questions.length; i++) {
  questions[i].name = `${questions[i].header}${i + 1}`;
}
// console.log({questions});
// Generate the quiz questions
let currentHeader = '';
let currentDiv = '';
for (const question of questions) {
  if (question.header !== currentHeader) {
    const headerDiv = document.createElement('div');
    headerDiv.setAttribute('id', question.header+'-section');
    quiz.appendChild(headerDiv);
    const questionHeader = document.createElement('h2');
    questionHeader.textContent = question.header;
    headerDiv.appendChild(questionHeader);
    const answerLegend = document.createElement('p');
    answerLegend.textContent = '1-2 = Does not apply, 3-4 = Applies sometimes, 5-6 = Applies most';
    headerDiv.appendChild(answerLegend);    
    currentHeader = question.header;
  }

  const questionElement = document.createElement('li');
  questionElement.classList.add('question');

  const questionText = document.createElement('p');
  questionText.textContent = question.question;
  questionElement.appendChild(questionText);



  for (const answer of question.answers) {
    const answerRadio = document.createElement('input');
    answerRadio.type = 'radio';
    answerRadio.name = question.name;
    answerRadio.value = answer;

    const answerLabel = document.createElement('label');
    answerLabel.textContent = answer;
    answerLabel.appendChild(answerRadio);

    questionElement.appendChild(answerLabel);
  }
  const currentDiv = document.getElementById(question.header+'-section');
  currentDiv.appendChild(questionElement);
}

// Get the elements.
const vataSection = document.querySelector("#Vata-section");
const pittaSection = document.querySelector("#Pitta-section");
const kaphaSection = document.querySelector("#Kapha-section");
const resultsContainer = document.querySelector("#results-container");

// Calculate the totals and display the results.
function calculateTotalsAndDisplayResults() {
  // Get the values of the radio buttons in each section.
  const vataAnswers = vataSection.querySelectorAll("input[type='radio']:checked");
  const pittaAnswers = pittaSection.querySelectorAll("input[type='radio']:checked");
  const kaphaAnswers = kaphaSection.querySelectorAll("input[type='radio']:checked");

  console.log({vataAnswers});

  // Calculate the total for each section.
  let vataTotal = 0;
  for (let i = 0; i < vataAnswers.length; i++) {
    vataTotal += parseInt(vataAnswers[i].value);
  }

  let pittaTotal = 0;
  for (let i = 0; i < pittaAnswers.length; i++) {
    pittaTotal += parseInt(pittaAnswers[i].value);
  }

  let kaphaTotal = 0;
  for (let i = 0; i < kaphaAnswers.length; i++) {
    kaphaTotal += parseInt(kaphaAnswers[i].value);
  }

  // Display the total for each section.
  resultsContainer.innerHTML = `
    <h2>Results</h2>
    <ul>
      <li>Vata: ${vataTotal}</li>
      <li>Pitta: ${pittaTotal}</li>
      <li>Kapha: ${kaphaTotal}</li>
    </ul>
  `;
}

// Add an event listener to the submit button.
submitButton.addEventListener("click", function() {
  // Calculate the totals and display the results.
  calculateTotalsAndDisplayResults();
});

// Calculate the totals and display the results when the page loads.
window.addEventListener("load", function() {
  calculateTotalsAndDisplayResults();
});
