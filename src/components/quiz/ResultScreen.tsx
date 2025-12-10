import { motion } from "framer-motion";

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ResultScreen = ({ score, totalQuestions, onRestart }: ResultScreenProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getMessage = () => {
    if (percentage >= 80) return "Excellent!";
    if (percentage >= 60) return "Good Job!";
    if (percentage >= 40) return "Nice Try!";
    return "Keep Learning!";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="quiz-card text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <span className="quiz-button-outline inline-block cursor-default font-sans">
          {getMessage()}
        </span>
      </motion.div>

      <header>
        <h1 className="quiz-title mb-4">
          Your <span className="quiz-title-italic">Final score is</span>
        </h1>
      </header>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          delay: 0.4, 
          type: "spring", 
          stiffness: 200, 
          damping: 15 
        }}
        className="mb-8"
        role="status"
        aria-label={`Your final score is ${percentage} percent`}
      >
        <span className="score-display">{percentage}</span>
        <span className="score-percent"> %</span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-muted-foreground mb-8 font-sans"
      >
        You answered {score} out of {totalQuestions} questions correctly
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onRestart}
          className="quiz-button font-sans"
          aria-label="Start the quiz again"
        >
          Start Again
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ResultScreen;
