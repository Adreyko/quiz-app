import { useEffect, useState } from 'react';
const LOADER_TIME = 50;
interface LoaderProps {
  loadingText?: string;
}
const Loader = ({ loadingText }: LoaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, LOADER_TIME);

    return () => clearInterval(interval);
  }, []);

  if (progress === 100) {
    return null;
  }

  return (
    <div className='flex items-center flex-col gap-20 justify-center  absolute bg-main inset-0 z-[999]'>
      <div className='relative flex items-center justify-center'>
        <div className='w-48 h-48'>
          <svg className='w-full h-full'>
            <circle
              className='text-gray-300'
              strokeWidth='8'
              stroke='currentColor'
              fill='transparent'
              r='90'
              cx='50%'
              cy='50%'
            />
            <circle
              className='text-additional'
              strokeWidth='8'
              strokeDasharray='565.48'
              strokeDashoffset={565.48 - (progress / 100) * 565.48}
              strokeLinecap='round'
              stroke='currentColor'
              fill='transparent'
              r='90'
              cx='50%'
              cy='50%'
            />
          </svg>
        </div>
        <div className='absolute text-4xl text-white'>{progress}%</div>
      </div>
      {loadingText && <p className='text-white'>{loadingText}</p>}
    </div>
  );
};

export default Loader;
