import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { quizQuestions } from "@/data/quizData";
import StartScreen from "./StartScreen";
import QuestionScreen from "./QuestionScreen";
import ResultScreen from "./ResultScreen";
import catPaw from "@/assets/cat-paw-new.png";

type QuizState = "start" | "quiz" | "result";

const Quiz = () => {
  const [quizState, setQuizState] = useState<QuizState>("start");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);

  const handleStart = useCallback(() => {
    setQuizState("quiz");
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowResult(false);
  }, []);

  const handleAnswer = useCallback((answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  }, []);

  const handleNext = useCallback(() => {
    if (selectedAnswer === null) return;

    // Update score if answer is correct
    const isCorrect = selectedAnswer === quizQuestions[currentQuestionIndex].correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    // Save answer
    setAnswers((prev) => [...prev, selectedAnswer]);

    // Move to next question or show results
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizState("result");
    }
  }, [selectedAnswer, currentQuestionIndex]);

  const handleRestart = useCallback(() => {
    setQuizState("start");
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowResult(false);
  }, []);

  return (
    <main className="quiz-container" role="main">
      <AnimatePresence mode="wait">
        {quizState === "start" && (
          <StartScreen
            key="start"
            onStart={handleStart}
            totalQuestions={quizQuestions.length}
          />
        )}

        {quizState === "quiz" && (
          <QuestionScreen
            key={`question-${currentQuestionIndex}`}
            question={quizQuestions[currentQuestionIndex]}
            currentIndex={currentQuestionIndex}
            totalQuestions={quizQuestions.length}
            onAnswer={handleAnswer}
            onNext={handleNext}
            selectedAnswer={selectedAnswer}
            showResult={showResult}
          />
        )}

        {quizState === "result" && (
          <ResultScreen
            key="result"
            score={score}
            totalQuestions={quizQuestions.length}
            onRestart={handleRestart}
          />
        )}
      </AnimatePresence>

      {/* Cat paw with speech bubble */}
      <div className="fixed bottom-4 left-8 z-10 flex flex-col items-start">
        {/* Speech bubble */}
        <div className="bg-card px-4 py-2 rounded-2xl shadow-lg border border-border/30 relative mb-2 ml-4">
          <span className="font-serif italic text-primary text-sm whitespace-nowrap">Best of Luck!</span>
          <div className="absolute -bottom-2 left-4 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-card"></div>
        </div>
        
        {/* Cat paw */}
        <motion.img
          src={catPaw}
          alt="Cute cat paw waving"
          className="w-28 h-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
          style={{ animation: "wave 1.5s ease-in-out infinite", transformOrigin: "bottom center" }}
        />
      </div>
    </main>
  );
};

export default Quiz;
