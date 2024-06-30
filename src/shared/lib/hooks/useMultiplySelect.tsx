import { useState, useCallback } from 'react';

type UseSelectedAnswers = [string[], (answer: string) => void, () => void];

const useMultiplySelect = (
  onSelect: (selectedAnswers: string[]) => void
): UseSelectedAnswers => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  const onSelectAnswer = useCallback((answer: string) => {
    setSelectedAnswers((prev) => {
      const newSelectedAnswers = prev.includes(answer)
        ? prev.filter((item) => item !== answer)
        : [...prev, answer];

      return newSelectedAnswers;
    });
  }, []);

  const onNext = useCallback(() => {
    onSelect(selectedAnswers);
  }, [onSelect, selectedAnswers]);

  return [selectedAnswers, onSelectAnswer, onNext];
};

export default useMultiplySelect;
