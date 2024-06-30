import clsx from 'clsx';

interface ProgressBarProps {
  currentStep: number;
  stepsCount: number;
  showTitle?: boolean;
  className?: string;
}

export const ProgressBar = ({
  currentStep,
  stepsCount,
  showTitle,
  className,
}: ProgressBarProps) => {
  const progress = (currentStep / stepsCount) * 100;
  return (
    <div className={clsx('flex flex-col w-full gap-3', className)}>
      {showTitle && (
        <div className='flex self-center text-lg/5 font-extrabold gap-1'>
          <span className='text-additional pr'> {currentStep} </span>{' '}
          <span className='font-medium'> / </span>
          {stepsCount}
        </div>
      )}
      <div className='w-full h-1 bg-[#E8EAF2] rounded-[100px] overflow-hidden'>
        <div
          className={clsx(
            'bg-additional relative h-full duration-300 rounded-[24px] overflow-hidden'
          )}
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
};
