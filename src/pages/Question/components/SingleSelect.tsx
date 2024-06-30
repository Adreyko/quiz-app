import clsx from 'clsx';
import Button from '../../../shared/ui/Button/Button';
import { Answers } from '../../types/answers';
interface SingleSelectProps {
  answer: string;
  onSelect: (answer: string | string[]) => void;
  isImage?: boolean;
  selectClassName?: string;
  imagesUrls?: Record<string, string>;
}
interface SingleSelectsProps {
  answers?: string[];
  containerClassName?: string;
  selectProps: Omit<SingleSelectProps, 'answer'>;
}

const SingleSelects = ({
  answers,
  selectProps,
  containerClassName,
}: SingleSelectsProps) => {
  const { onSelect, isImage, selectClassName, imagesUrls } = selectProps;
  return (
    <div
      className={clsx(`grid grid-cols-1 gap-4 w-full ${containerClassName}`)}
    >
      {answers?.map((answer) => (
        <SingleSelect
          imagesUrls={imagesUrls}
          key={answer}
          answer={answer}
          onSelect={onSelect}
          selectClassName={selectClassName}
          isImage={isImage}
        />
      ))}
    </div>
  );
};

const SingleSelect = ({
  answer,
  onSelect,
  isImage,
  selectClassName,
  imagesUrls,
}: SingleSelectProps) => {
  const onSelectAnswer = (question: Answers) => () => {
    onSelect(answer);
  };

  if (isImage) {
    return (
      <Button
        className={clsx(`w-full items-start ${selectClassName}`)}
        variant='primary'
        onClick={onSelectAnswer({ answer })}
      >
        <img src={imagesUrls?.[answer]} alt={answer} />
        {answer}
      </Button>
    );
  }
  return (
    <Button
      className='w-full text-start'
      variant='primary'
      onClick={onSelectAnswer({ answer })}
    >
      {answer}
    </Button>
  );
};

export default SingleSelects;
