import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { quizzes } from "@/entities/Quiz";

export default function Question() {
    const router = useRouter();
    const { quizId, id } = router.query;

    const [score, setScore] = useState(0); // Keep track of the score
    const [selectedAnswer, setSelectedAnswer] = useState(null); // Track selected answer
    const [feedback, setFeedback] = useState(""); // Store feedback message
    const [isAnswered, setIsAnswered] = useState(false); // Track if question is answered

    if (!quizId || !id) return <p>Loading...</p>; // Ensure the query params are loaded

    let currentQuiz = quizzes.find(quiz => quiz.quizId === quizId); // Find the correct quiz
    const questionId = Number(id);
    const currentQuestion = currentQuiz?.quizQuestions[questionId];

    // Handle answer selection and give feedback
    const handleAnswerSelection = (answer) => {
        setSelectedAnswer(answer);
        setIsAnswered(true); // Mark the question as answered
        
        if (answer === currentQuestion.rightAnswer) {
            setScore((prevScore) => prevScore + 1); // Increment score for correct answer
            setFeedback("Correct!"); // Show feedback for correct answer
        } else {
            setFeedback(`Incorrect. The correct answer is ${currentQuestion.rightAnswer}.`); // Show feedback for incorrect answer
        }
    };

    // Navigate to the next question or results
    const handleNext = () => {
        setIsAnswered(false); // Reset answer state for the next question
        setSelectedAnswer(null); // Clear selected answer
        setFeedback(""); // Clear feedback message

        if (questionId < currentQuiz.quizQuestions.length - 1) {
            router.push(`/quiz/${quizId}/question/${questionId + 1}`);
        } else {
            router.push(`/quiz/${quizId}/results?score=${score}`);
        }
    };

    return (
        <div
        className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 `}
        >
            <h1>{currentQuiz.quizName}</h1>
            
            {/* Display current question out of total */}
            <h4>Question {questionId + 1} of {currentQuiz.quizQuestions.length}</h4>
            
            {/* Display current score */}
            <h4>Current Score: {score}</h4>

            <h3>{currentQuestion.question}</h3>

            <div>
                {currentQuestion.answers.map((answer, index) => (
                    <div key={index}>
                        <input
                            type="radio"
                            id={`answer${index}`}
                            name="answers"
                            value={answer}
                            onChange={() => handleAnswerSelection(answer)} // Select answer
                            checked={selectedAnswer === answer}
                            disabled={isAnswered} // Disable after answer is selected
                        />
                        <label htmlFor={`answer${index}`}>{answer}</label><br />
                    </div>
                ))}
            </div>

            <button onClick={handleNext} disabled={!isAnswered}>
                {questionId < currentQuiz.quizQuestions.length - 1 ? "Next Question" : "Finish Test"}
            </button>

            {/* Show feedback after answering */}
            {isAnswered && <p>{feedback}</p>}
        </div>
    );
}
