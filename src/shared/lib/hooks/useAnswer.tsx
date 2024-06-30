import { useEffect, useState } from 'react';
import { Answers } from '../../../pages/types/answers';

export const useAnswer = () => {
  const answersFromLocalStorage = JSON.parse(
    localStorage.getItem('answers') ?? '[]'
  );
  const [answers, setAnswers] = useState<Answers[]>(answersFromLocalStorage);

  useEffect(() => {
    localStorage.setItem('answers', JSON.stringify(answers));
  }, [answers]);

  const onSelectAnswer = (question: Answers) => {
    setAnswers((prevAnswers) => {
      const isExist = prevAnswers.find(
        (answer) => answer.order === question.order
      );

      if (isExist) {
        return prevAnswers.map((answer) =>
          answer.order === question.order ? question : answer
        );
      }

      localStorage.setItem(
        'answers',
        JSON.stringify([...prevAnswers, question])
      );
      return [...prevAnswers, question];
    });
  };

  const resetAnswers = () => {
    setAnswers([]);
    localStorage.removeItem('answers');
  };

  return { answers, onSelectAnswer, resetAnswers };
};
