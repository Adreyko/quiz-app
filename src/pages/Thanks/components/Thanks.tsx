import clsx from 'clsx';
import Card from '../../../shared/ui/Card/Card';
import Button from '../../../shared/ui/Button/Button';
import { useAnswer } from '../../../shared/lib/hooks/useAnswer';
import { CSVLink } from 'react-csv';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { get } from 'http';
import { getRouteStart } from '../../../providers/Router/conts/routers';

const Thanks = () => {
  const { answers, resetAnswers } = useAnswer();
  const navigate = useNavigate();

  const onRetake = useCallback(() => {
    navigate(getRouteStart());
    resetAnswers();
  }, [navigate, resetAnswers]);
  return (
    <Card
      className={clsx(
        'flex items-center flex-col  w-full justify-between py-20'
      )}
    >
      <div className='flex flex-col gap-4 items-center'>
        <h3 className='text-[30px]/[38px]'>Thank you</h3>
        <p>for supporting us and passing quiz</p>
        <img src='/assets/checkmark.png' alt='thanks' className='mt-20' />
      </div>
      <div className='flex flex-col gap-4 w-full'>
        <CSVLink data={answers}>
          <Button
            icon={'/assets/download.png'}
            className='w-full bg-transparent flex items-center justify-center'
          >
            Download my answers
          </Button>
        </CSVLink>

        <Button onClick={onRetake} variant='secondary' className='w-full'>
          Retake quiz
        </Button>
      </div>
    </Card>
  );
};

export default Thanks;
