import { useRouter } from "next/router";

export default function Question() {
    const router = useRouter()
    const { quizId, id } = router.query

    return (<>
    <h1>Question</h1>
    <h3>question.question</h3>
    <div>
    <input type="radio" id="answer1" name="answer1" value="answer1"/>
    <label for="answer1"> question.answers[0] </label><br/>
    <input type="radio" id="answer2" name="answer2" value="answer2"/>
    <label for="answer2"> question.answers[1] </label><br/>
    <input type="radio" id="answer3" name="answer3" value="answer3"/>
    <label for="answer3"> question.answers[2] </label><br/>
    <input type="radio" id="answer4" name="answer4" value="answer4"/>
    <label for="answer4"> question.answers[3] </label><br/>
    </div>
    </>
    )
}

export async function getStaticProps({params}) {
    const req = await fetch(`http://localhost:3000/${params.id}.json`);
    const data = await req.json();

    return {
        props: { question: data }
    }
}

//https://youtu.be/x-Av8AHBJrw?si=r2iKja5rWdIwuIzC&t=2855