/* eslint-disable react/require-default-props */
/* eslint-disable camelcase */
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import createQuestions from '@services/Questions';
import { getCities } from '@redux/Actions/citiesActions';
import { ICity } from '@interfaces/ICity';
import { IQAObject } from '@interfaces/IQAObject';
import { connect } from 'react-redux';
import { QuizView } from './QuizView';

interface IDashboardContainer{
  UI?: any,
  cities?: ICity[],
  dispatch?: any,
}

const QuizContainer = function ({ UI, cities, dispatch }: IDashboardContainer) {
  const [QAList, setQAList] = useState<IQAObject[]>();
  const [errors, setErrors] = useState([] as any[]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCities())
      .catch((err:any) => console.log(err));
    if (UI.errors) {
      setErrors(UI.errors);
    }
  }, [UI]);
  useDidMountEffect(() => {
    console.log('Cities updated', cities);
    setQAList(createQuestions(cities as ICity[]));
  }, [cities]);

  const handleAnswer = (isCorrect: boolean) => {
    if (QAList) {
      if (isCorrect) {
        setScore(score + 1);
      }

      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < QAList.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    }
  };

  const handlePlay = () => {
    window.location.reload();
  };

  const handleQuit = () => {
    navigate('/');
  };

  return (
    <div>
      {QAList && (
      <QuizView
        showScore={showScore}
        errors={errors}
        totalQuestions={QAList.length}
        questionNumber={currentQuestion + 1}
        score={score}
        QAObject={QAList[currentQuestion]}
        handleAnswer={handleAnswer}
        handlePlay={handlePlay}
        handleQuit={handleQuit}
      />
      )}
    </div>
  );
};

const useDidMountEffect = (func:any, deps:any) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};

const mapStateToProps = (state: any) => ({
  cities: state.cities,
  UI: state.UI,
});

const connectedQuizContainer = connect(mapStateToProps)(QuizContainer);
export { connectedQuizContainer as QuizContainer };
