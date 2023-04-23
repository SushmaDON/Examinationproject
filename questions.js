

let questions = [
  {
    question: "What is the value of pi (π)?",
    options: ["3.14", "2.71", "1.62", "4.16"],
    correctAnswer: 0,
  },
  {
    question: "What is the square root of 16?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 2,
  },
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    correctAnswer: 1,
  },
  {
    question: "Which of the following is a prime number?",
    options: ["12", "15", "21", "29"],
    correctAnswer: 3,
  },
  {
    question: "What is the largest organ in the human body?",
    options: ["Liver", "Heart", "Lungs", "Skin"],
    correctAnswer: 3,
  },
  {
    question: "Which of the following is not a primary color?",
    options: ["Red", "Blue", "Yellow", "Green"],
    correctAnswer: 3,
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yuan", "Yen", "Dollar", "Euro"],
    correctAnswer: 1,
  },
  {
    question: "What is the freezing point of water in Celsius?",
    options: ["0", "32", "100", "212"],
    correctAnswer: 0,
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Hg", "Fe"],
    correctAnswer: 0,
  },
  {
    question: "What is the square of 9?",
    options: ["18", "27", "36", "81"],
    correctAnswer: 3,
  },



  {
    question: "What is the time complexity of searching an element in a balanced binary search tree?",
    options: ["O(log n)", "O(n)", "O(n log n)", "O(n^2)"],
    correctAnswer: 0,
  },
  {
    question: "Which algorithm is used to find the shortest path in a weighted graph with positive edge weights?",
    options: ["Dijkstra's algorithm", "Bellman-Ford algorithm", "Floyd-Warshall algorithm", "Prim's algorithm"],
    correctAnswer: 0,
  },
  {
    question: "What is the time complexity of QuickSort algorithm in the best case?",
    options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
    correctAnswer: 1,
  },
  {
    question: "What is the maximum number of nodes that a B-tree of order 5 and height 3 can have?",
    options: ["62", "160", "312", "624"],
    correctAnswer: 3,
  },
  {
    question: "What is the purpose of a DNS server in a computer network?",
    options: ["To translate IP addresses to domain names", "To route packets between different networks", "To authenticate users in a network", "To encrypt network traffic"],
    correctAnswer: 0,
  },
  {
    question: "Which layer of OSI model is responsible for end-to-end communication and error recovery?",
    options: ["Transport layer", "Data link layer", "Network layer", "Presentation layer"],
    correctAnswer: 0,
  },
  {
    question: "What is the primary difference between TCP and UDP protocols?",
    options: ["TCP is connection-oriented, while UDP is connectionless", "TCP is faster than UDP", "TCP does not guarantee packet delivery, while UDP does", "TCP is used for multimedia streaming, while UDP is used for web browsing"],
    correctAnswer: 0,
  },
  {
    question: "Which encryption algorithm is used in SSL/TLS for secure communication over the internet?",
    options: ["RSA", "AES", "DES", "MD5"],
    correctAnswer: 0,
  },
  {
    question: "What is the role of ARP in computer networks?",
    options: ["To translate IP addresses to MAC addresses", "To route packets between different networks", "To authenticate users in a network", "To encrypt network traffic"],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of a router in a computer network?",
    options: ["To connect devices within a local area network (LAN)", "To connect multiple local area networks (LANs)", "To connect devices to the internet", "To connect devices wirelessly"],
    correctAnswer: 1,
  },
  {
    question: "Which of the following is a data communication protocol used to access and retrieve emails from a remote server?",
    options: ["POP3", "FTP", "HTTP", "SMTP"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is a programming language used for building dynamic web pages?",
    options: ["Java", "HTML", "CSS", "JavaScript"],
    correctAnswer: 3,
  },
  {
    question: "Which of the following is a commonly used data structure for implementing a LIFO (Last In, First Out) behavior?",
    options: ["Queue", "Stack", "Linked List", "Tree"],
    correctAnswer: 1,
  },
  {
    question: "Which of the following is a technique used to prevent unauthorized access to a computer system or network?",
    options: ["Firewall", "Antivirus", "Encryption", "Authentication"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is a type of network topology where all nodes are connected to a single central node?",
    options: ["Mesh", "Star", "Ring", "Bus"],
    correctAnswer: 1,
  }
];


let responses = {}; // Object to store responses

let currentQuestionIndex = 0; // Track current question index

function loadQuestion(questionIndex) {
  currentQuestionIndex = questionIndex;
  
  const question = questions[questionIndex];

  // Set the question title and text in the article section
  const article = document.querySelector('article');
  article.innerHTML = `<h1>Question ${questionIndex + 1}</h1>
                       <p>${question.question}</p>`;

  // Create and add the answer options as radio buttons
  const options = question.options;
  let answerHtml = '';
  for (let i = 0; i < options.length; i++) {
    const option = options[i];
    answerHtml += `<input type="radio" name="answer" value="${option}"
                     ${responses[questionIndex] === option ? 'checked' : ''}>
                   ${option}<br>`;
  }
  article.insertAdjacentHTML('beforeend', answerHtml);

  // Create a "Save & Next" button
  const saveNextBtn = document.createElement('button');
  saveNextBtn.textContent = 'Save & Next';
  article.appendChild(saveNextBtn);

  // Add event listener to the "Save & Next" button
  saveNextBtn.addEventListener('click', () => {
    // Get the selected answer, or set response to null if no answer is selected
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const response = selectedAnswer ? selectedAnswer.value : null;

    // Save the response in the responses object
    responses[questionIndex] = response;

    // Move to the next question or submit the exam if it's the last question
    if (questionIndex < questions.length - 1) {
      loadQuestion(questionIndex + 1);
    } else {
      loadQuestion(0); // Go back to the first question after the last question
    }
  });

  // Update the selected question in the navigation section
  const navButtons = document.querySelectorAll('nav ul li button');
  for (let i = 0; i < navButtons.length; i++) {
    const navButton = navButtons[i];
    if (i === questionIndex) {
      navButton.classList.add('selected');
    } else {
      navButton.classList.remove('selected');
    }
  }
}

function submission() {
  // Calculate total marks
  let totalMarks = 0;
  for (let i = 0; i < questions.length; i++) {
    const response = responses[i];
    if (response === questions[i].options[questions[i].correctAnswer]) {
      totalMarks += 4; // Add 4 marks for correct response
    } else if (response === undefined || response === '') {
      // No deduction for unattempted question
    } else {
      totalMarks -= 1; // Deduct 1 mark for incorrect response
    }
  }

  // Show alert with results
  alert(`Exam submitted!`);

  // Store responses and total marks in sessionStorage for retrieval in separate HTML page
  sessionStorage.setItem('responses', JSON.stringify(responses));
  sessionStorage.setItem('totalMarks', totalMarks);

  // Redirect to separate HTML page to display scores
  window.location.href = 'scores.html';
}




// Load the first question initially
loadQuestion(0);