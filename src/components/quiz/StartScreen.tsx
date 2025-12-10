import { motion } from "framer-motion";

interface StartScreenProps {
  onStart: () => void;
  totalQuestions: number;
}

const StartScreen = ({ onStart, totalQuestions }: StartScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="quiz-card text-center relative z-10"
    >
      <header>
        <h1 className="quiz-title mb-2">
          Test Your <span className="quiz-title-italic">Knowledge</span>
        </h1>
        <p className="text-muted-foreground font-sans text-sm mb-8">
          Answer all the questions to see the results
        </p>
      </header>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="inline-block border-2 border-quiz-gold rounded-xl px-20 py-6 mb-10"
        role="region"
        aria-label="Quiz information"
      >
        <p className="text-sm text-muted-foreground font-sans">Total Questions</p>
        <p className="text-5xl font-bold text-primary font-serif mt-1">{totalQuestions}</p>
      </motion.div>

      <div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onStart}
          className="quiz-button font-sans px-12"
          aria-label="Start the quiz"
        >
          Start Quiz
        </motion.button>
      </div>
    </motion.div>
  );
};

export default StartScreen;
