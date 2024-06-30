import Bubble from '../../../shared/ui/Bubble/Bubble';
import useMultiplySelect from '../../../shared/lib/hooks/useMultiplySelect';
import MultiplySelectWrapper from './MultiSelectWrapper';

interface MultiplySelectProps {
  answer: string;
  onSelect: (answer: string | string[]) => void;
  selectClassName?: string;
  imagesUrls?: Record<string, string>;
}

interface MultiplySelectsProps {
  answers?: string[];
  containerClassName?: string;
  selectProps: Omit<MultiplySelectProps, 'answer'>;
}

const BubbleSelect = ({
  answers,
  selectProps,
  containerClassName,
}: MultiplySelectsProps) => {
  const { onSelect, imagesUrls } = selectProps;
  const [selectedAnswers, onSelectAnswer, onNext] = useMultiplySelect(onSelect);

  const bubbleContent = answers?.map((answer) => {
    return {
      label: answer,
      icon: imagesUrls?.[answer],
    };
  });

  return (
    <MultiplySelectWrapper
      buttonContainerClassName='px-5'
      containerClassName={containerClassName}
      onNext={onNext}
      disabled={!selectedAnswers.length}
    >
      <Bubble
        content={bubbleContent}
        onSelect={onSelectAnswer}
        selectedBubbles={selectedAnswers}
      />
    </MultiplySelectWrapper>
  );
};

export default BubbleSelect;
