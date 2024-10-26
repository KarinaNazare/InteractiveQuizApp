import { useRouter } from "next/router";
import Link from "next/link";
import {quizzes} from "@/entities/Quiz";

export default function Quiz() {
  const router = useRouter();
  const { quizId } = router.query;

  let currentQuiz;
  quizzes.forEach(element => {
    if(quizId == element.quizId)
        currentQuiz = element;
  });
  
  return (
    < div 
    className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      
      <h1>{currentQuiz.quizName}</h1>
      <div>
      <p>There will be 3 questions, each with a single correct answer.</p>
      <p>Good luck!</p>
      </div>
      <Link key="" href={`/quiz/${quizId}/question/0`}>
        <button>Test your knowledge</button>
      </Link>
    </div>
  );
}
