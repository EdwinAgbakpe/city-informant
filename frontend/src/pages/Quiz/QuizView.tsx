/* eslint-disable no-unused-vars */
import Layout from '@app/components/Layout';
import QACard from './components/QACard';
import { ScoreCard } from './components/ScoreCard';

interface IQuizView{
  showScore: boolean;
  totalQuestions: number,
  questionNumber: number,
  score: number,
  QAObject: {question:string, answerList:{answerText: string | number, isCorrect: boolean}[]},
  handleAnswer: (isCorrect: boolean) => void,
  handlePlay: () => void,
  handleQuit: () => void,
}

export const QuizView = function ({
  showScore,
  totalQuestions,
  questionNumber,
  score,
  QAObject,
  handleAnswer,
  handlePlay,
  handleQuit,
}: IQuizView) {
  return (
    <Layout isAdmin={false} isProtected={false}>
      <div className="flex justify-center">
        {showScore
          ? (
            <ScoreCard
              total={totalQuestions}
              correct={score}
              onPlay={handlePlay}
              onQuit={handleQuit}
            />
          ) : (
            <QACard
              questionNumber={questionNumber}
              totalQuestions={totalQuestions}
              question={QAObject.question}
              answerList={QAObject.answerList}
              handleAnswer={handleAnswer}
            />
          )}
      </div>
    </Layout>
  );
};
