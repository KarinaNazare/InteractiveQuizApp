import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import fs from "fs";
import path from "path";

export async function getServerSideProps(context) {
    const { quizId } = context.params;

    // Load the quiz data from the JSON file
    const filePath = path.join(process.cwd(), 'public', 'quizzes.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const allQuizzes = JSON.parse(fileContent).quizzes;

    // Find the quiz matching the quizId
    const quizData = allQuizzes.find(quiz => quiz.quizId === quizId);

    if (!quizData) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            quizData, // Pass the specific quiz data to the page
        },
    };
}


export default function Question({ quizData }) {
    const router = useRouter();
    const { quizId, id } = router.query;

    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [feedback, setFeedback] = useState("");
    const [isAnswered, setIsAnswered] = useState(false);

    if (!quizId || !id) return <p>Loading...</p>;

    const questionId = Number(id);
    const currentQuestion = quizData.quizQuestions[questionId];

    const handleAnswerSelection = (answer) => {
        setSelectedAnswer(answer);
        setIsAnswered(true);
        
        if (answer === currentQuestion.rightAnswer) {
            setScore((prevScore) => prevScore + 1);
            setFeedback("Correct!");
        } else {
            setFeedback(`Incorrect. The correct answer is ${currentQuestion.rightAnswer}.`);
        }
    };

    const handleNext = () => {
        setIsAnswered(false);
        setSelectedAnswer(null);
        setFeedback("");

        if (questionId < quizData.quizQuestions.length - 1) {
            router.push(`/quiz/${quizId}/question/${questionId + 1}`);
        } else {
            router.push(`/quiz/${quizId}/results?score=${score}`);
        }
    };

    return (
        <div
        className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
>
            <h1>{quizData.quizName}</h1>
            <h4>Question {questionId + 1} of {quizData.quizQuestions.length}</h4>
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
                            onChange={() => handleAnswerSelection(answer)}
                            checked={selectedAnswer === answer}
                            disabled={isAnswered}
                        />
                        <label htmlFor={`answer${index}`}>{answer}</label><br />
                    </div>
                ))}
            </div>

            <button onClick={handleNext} disabled={!isAnswered}>
                {questionId < quizData.quizQuestions.length - 1 ? "Next Question" : "Finish Test"}
            </button>

            {isAnswered && <p>{feedback}</p>}
        </div>
    );
}

