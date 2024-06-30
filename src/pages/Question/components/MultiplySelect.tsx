import clsx from 'clsx';
import Checkbox from '../../../shared/ui/Checkbox/Checkbox';
import Button from '../../../shared/ui/Button/Button';
import useMultiplySelect from '../../../shared/lib/hooks/useMultiplySelect';
import MultiplySelectWrapper from './MultiSelectWrapper';

interface MultiplySelectProps {
  answer: string;
  onSelect: (answer: string | string[]) => void;
  selectClassName?: string;
}

interface MultiplySelectsProps {
  answers?: string[];
  containerClassName?: string;
  selectProps: Omit<MultiplySelectProps, 'answer'>;
}

const MultiplySelect = ({
  answers,
  selectProps,
  containerClassName,
}: MultiplySelectsProps) => {
  const { onSelect } = selectProps;

  const [selectedAnswers, onSelectAnswer, onNext] = useMultiplySelect(onSelect);

  return (
    <MultiplySelectWrapper
      onNext={onNext}
      disabled={!selectedAnswers?.length}
      containerClassName={containerClassName}
    >
      {answers?.map((answer) => {
        const isChecked = selectedAnswers.includes(answer);
        return (
          <Checkbox
            value={answer}
            key={answer}
            label={answer}
            checked={isChecked}
            onChange={() => onSelectAnswer(answer)}
          />
        );
      })}
    </MultiplySelectWrapper>
  );
};

export default MultiplySelect;
