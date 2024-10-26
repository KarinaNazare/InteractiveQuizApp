import Link from "next/link";

export default function Home() {
  return (
    <div
      className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20`}
    >
      <h1>Take a quiz!</h1>
      <p>
        Welcome to the Quiz App! <br />
        You'll have to choose from three different science subjects and two
        difficulty levels.
      </p>
      <button>
        <Link href="/categories">Click to choose your quiz</Link>
      </button>
    </div>
  );
}
