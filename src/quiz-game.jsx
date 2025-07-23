import React, { useState, useEffect } from "react";

function QuizGame() {
  const [quizGame, setQuizGame] = useState(true);
  const [attempt, setAttempt] = useState(2);
  const [correctWrongDisplay, setCorrectWrongDisplay] = useState(""); // set correct-wrong display to an empty string 
  let [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Index of the first question

  const questionsData = [
    {
      question: "1. How many trophies does a Real Madrid have?",
      answers: ["15", "5", "25"]
    
    } ,
    {
      question: "2. What is the tallest mountain in the world?",
      answers: ["Ronaldo", "Crouch", "Everest"]
    } ,
    {
      question:  "3. What is the hardest natural substance on Earth?",
        answers: ["Gold", "Diamond", "Steel"]
    },
    {
      question: "4. Who won the most World Cups?",
    answers: ["Messi", "Pele", "Maradona", ]
    },
      {
         question: "5. What is the chemical symbol for water?",
        answers: ["Wo", "H2O", "Co"]
     },
       {
       question:   "6. Which planet is known as biggest?"  ,
      answers: ["Jupiter", "Mars", "Venus"]
       },
      {

         question: "7. What is the tallest animal on Earth?" ,
         answers: ["Elephant", "Giraffe", "Lion"]
     
        }  ,
   
      
      {
      question: "8. In which year did the Bafana Banfana win?",
      answers: ["1912", "1905", "None"]
    },
    
    {
     
      question: "9. Who painted the Mona Lisa?",
      answers: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso"]
    },
      {
     
        question: "10. What is the main ingredient in guacamole?",
       answers: ["Tomatoes", "Avocado", "Onions"]
    },
   
    {
       question: "11. Who was the first person to be on the moon?",
          answers: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin"]
   
        },
    {
        question: "12. Which country is famous for the football?",
      answers: ["Canada", "Brazil", "Japan"]
    },
    
    {
      question: "13. What is the square root of 64?",
      answers: ["6", "8", "10"]
    },
    {
      question: "14. Which bird is known for its ability to mimic human speech?",
      answers: ["Crow", "Parrot", "Parrot"]
    },
    {
      question: "15. Who is the author of Harry Potter series?",
      answers: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin"]
    },
   
    {
       question: "16. What is the largest ocean on Earth?",
      answers: ["Indian Ocean", "Atlantic Ocean", "Pacific Ocean"]
    },
    {
      question: "17. What is the capital of France?",
         answers: ["Berlin", "London", "Paris"]
    }
    
  ]; // questions-answers

  const correctAnswers = [
    "15", 
      "Everest", 
    "Diamond", 
    " Pele",
    "H2O",
    "Mars",
      "Giraffe",
    "never",
    "Leonardo da Vinci",
    "Avocado",
     "Neil Armstrong",
    "Brazil",
    "8",
    "Parrot",
    " J.K. Rowling",
    "Pacific Ocean",
    "Paris"
  ]; // correct answers

  let  [allCorrectAnswers, setAllCorrectAnswers] = useState(0)

  // This will check if the player has run out of attempts
// If attempts are 0 and the game is still on, it will show "You lost!" and stop the game
  useEffect(() => {
    if (quizGame && attempt === 0) {
      setCorrectWrongDisplay("You lost!");
      setQuizGame(false); // if attempts equal 0 correctWrongDisplay will be You lost!
    }
  }, [attempt, quizGame]); // This will run whenever 'attempt' or 'quizGame' change
// This runs when a player clicks on an answer button
  function handleClick(e) {
    const selectedAnswer = e.target.textContent; // This refers to the button  pressed
    if (selectedAnswer === correctAnswers[currentQuestionIndex]) { // check pressed button equal to the correct answer 
       setCorrectWrongDisplay("Correct"); // set the display to Correct
      setAllCorrectAnswers(c => c + 1)
         setQuizGame(false);
    } else {
      setAttempt(prevAttempt => prevAttempt - 1); // If the pressed button is not equal to the correct answer, subtract one from the attempts
      setCorrectWrongDisplay("Wrong answer!"); // and display will be Wrong answer!
       }
  }

  // This function resets the whole quiz
  function reset() {
    setCorrectWrongDisplay(""); // if you pressed the reset button correct-wrong display will be empty
    setAttempt(2); // Attempts set back to 2
    setQuizGame(true);
    setAllCorrectAnswers(allCorrectAnswers = 0)
    setCurrentQuestionIndex(currentQuestionIndex = 0)
  }
// This function moves to the next question

  function nextQuestion() {
    if (currentQuestionIndex < questionsData.length - 1) { // Check if there are any more questions
     setCurrentQuestionIndex(prevIndex => prevIndex + 1); // if the question is correct this will update next question to the display
       setCorrectWrongDisplay(""); // after next question pop up correct-wrong button will disappear because we set it to an empty string
    setQuizGame(true) 
    } else {
      setCorrectWrongDisplay("No more question") // If there are no more questions, you can give some feedback or reset to the initial state
    }
  }

  return (
    
    <div>
      <p className="question-data-display">{questionsData[currentQuestionIndex].question}</p>
      <p className="attempts-display">{`Attempts: ${attempt}`}</p>
      <p className="correct-wrong-display" style={{ color: correctWrongDisplay === "Correct" ? "green" : "red" }}>{correctWrongDisplay}</p>
      <p className="correct-answers">Correct answers: {allCorrectAnswers}</p>
      <div className="buttons-container">
      {quizGame &&
        questionsData [currentQuestionIndex].answers.map((answer, index) => (
          
          <button className="button-answers" key={index} onClick={handleClick}>
            {`${answer}` // iterates through the questions and answers in questionData
            }
          </button>
        )
        )}
        </div>
     
      <div className="reset-nextquestion-container">
        <button className="reset-button" onClick={reset}>reset</button>
        {correctWrongDisplay === "Correct" && ( // If the answer is correct, the next question will be displayed
          <button className="nextquestion-button" onClick={nextQuestion}>Next question</button>
        )}
    </div>
    </div>
  );
}

export default QuizGame;
