import clsx from 'clsx';
import Button from '../../../shared/ui/Button/Button';

interface MultiplySelectsWrapperProps {
  containerClassName?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onNext?: () => void;
  buttonContainerClassName?: string;
}

const MultiplySelectWrapper = ({
  containerClassName,
  children,
  disabled,
  buttonContainerClassName,
  onNext,
}: MultiplySelectsWrapperProps) => {
  return (
    <div
      className={clsx(`grid grid-cols-1 gap-4 w-full ${containerClassName}`)}
    >
      {children}
      <div className={clsx('w-full', buttonContainerClassName)}>
        <Button
          onClick={onNext}
          disabled={disabled}
          className='w-full'
          variant='secondary'
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default MultiplySelectWrapper;
