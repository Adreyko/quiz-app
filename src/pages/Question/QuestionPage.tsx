import { useParams } from 'react-router-dom';

import Question from './components/Question';
import { getQuestions } from '../../shared/lib/helpers/getQustions';
import { useAnswer } from '../../shared/lib/hooks/useAnswer';

const QuestionPage = () => {
  const { id } = useParams();
  const { answers, onSelectAnswer } = useAnswer();

  const language = answers?.[0]?.answer ?? 'English';
  const questions = getQuestions(String(language));
  const currentQuestion = questions.find((question) => question.id === id);

  return (
    <Question
      onSelectAnswer={onSelectAnswer}
      currentQuestion={currentQuestion}
      steps={questions.length}
    />
  );
};

export default QuestionPage;
