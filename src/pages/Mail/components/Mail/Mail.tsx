import clsx from 'clsx';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRouterThanks } from '../../../../providers/Router/conts/routers';
import { useAnswer } from '../../../../shared/lib/hooks/useAnswer';
import Button from '../../../../shared/ui/Button/Button';
import Card from '../../../../shared/ui/Card/Card';
import Input from '../../../../shared/ui/Input/Input';
import Loader from '../../../../shared/ui/Loader/Loader';
import { validateEmail } from '../../../../shared/lib/helpers/email';

const Mail = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleEmailChange = useCallback((email: string) => {
    setEmail(email);
  }, []);

  const { onSelectAnswer } = useAnswer();

  const onNext = () => {
    if (!validateEmail(email)) return;
    navigate(getRouterThanks());
    onSelectAnswer({ order: 6, answer: email, type: 'email' });
  };

  return (
    <>
      <Loader loadingText='Finding collections for you...' />
      <Card
        className={clsx(
          'flex items-center flex-col  w-full justify-between  py-10 md:w-1/2'
        )}
      >
        <div className='flex items-center flex-col gap-[56px] w-full'>
          <div className='flex flex-col gap-3 items-center'>
            <h3 className='text-[30px]/[38px]'> Email</h3>
            <p className='text-[#C4C8CC] text-[15px]/[22px]'>
              Enter your email to get full access
            </p>
          </div>
          <Input
            errorText='Please enter a valid email address'
            error={!validateEmail(email)}
            type='email'
            placeholder='Your email'
            onChange={handleEmailChange}
          />

          <p className='text-xs/[18px] text-[#C4C8CC]  text-center'>
            By continuing I agree with{' '}
            <span className='text-additional'>Privacy policy </span>and <br />
            <span className='text-additional'>Terms of use.</span>
          </p>
        </div>
        <Button
          onClick={onNext}
          className='w-full'
          variant='secondary'
          disabled={!email.length}
        >
          Next
        </Button>
      </Card>
    </>
  );
};

export default Mail;
