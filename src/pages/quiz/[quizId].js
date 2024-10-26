import { useRouter } from "next/router";
import Link from "next/link";
import fs from "fs";
import path from "path";

// Fetch the quiz data from the JSON file dynamically
export async function getServerSideProps(context) {
    const { quizId } = context.params;
    
    // Load the quiz data from the JSON file
    const filePath = path.join(process.cwd(), 'public','quizzes.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const allQuizzes = JSON.parse(fileContent).quizzes;

    // Find the quiz matching the quizId
    const currentQuiz = allQuizzes.find(quiz => quiz.quizId === quizId);

    if (!currentQuiz) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            currentQuiz, // Pass the specific quiz data to the page
        },
    };
}

// Use the dynamic quiz data in the component
export default function Quiz({ currentQuiz }) {
  const router = useRouter();
  const { quizId } = router.query;

  return (
    <div 
      className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <h1>{currentQuiz.quizName}</h1>
      <div>
        <p>There will be {currentQuiz.quizQuestions.length} questions, each with a single correct answer.</p>
        <p>Good luck!</p>
      </div>
      <Link href={`/quiz/${quizId}/question/0`}>
        <button>Test your knowledge</button>
      </Link>
    </div>
  );
}
