import { useEffect, useState } from 'react';
import { Answers } from '../../../pages/types/answers';
import { LOCAL_STORAGE_ANSWERS } from '../consts/storage';

export const useAnswer = () => {
  const answersFromLocalStorage = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_ANSWERS) ?? '[]'
  );
  const [answers, setAnswers] = useState<Answers[]>(answersFromLocalStorage);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_ANSWERS, JSON.stringify(answers));
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
        LOCAL_STORAGE_ANSWERS,
        JSON.stringify([...prevAnswers, question])
      );
      return [...prevAnswers, question];
    });
  };

  const resetAnswers = () => {
    setAnswers([]);
    localStorage.removeItem(LOCAL_STORAGE_ANSWERS);
  };

  return { answers, onSelectAnswer, resetAnswers };
};
