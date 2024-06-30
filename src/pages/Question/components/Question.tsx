import Card from '../../../shared/ui/Card/Card';
import { useCallback } from 'react';
import SingleSelect from './SingleSelect';
import { ProgressBar } from '../../../shared/ui/ProgressBar/ProgressBar';

import { IQuestion } from '../../types/question';
import { useNavigate } from 'react-router-dom';
import {
  getRouteQuestion,
  getRouterMail,
} from '../../../providers/Router/conts/routers';
import MultiplySelect from './MultiplySelect';
import BubbleSelect from './BubbleSelect';
import { Answers } from '../../types/answers';
import clsx from 'clsx';
import { textHighlighter } from '../../../shared/lib/helpers/textHighlighter';
import Button from '../../../shared/ui/Button/Button';

interface QuestionProps {
  currentQuestion?: IQuestion;
  steps: number;
  onSelectAnswer: (question: Answers) => void;
}

const Question = ({
  currentQuestion,
  steps,
  onSelectAnswer,
}: QuestionProps) => {
  const navigate = useNavigate();

  const setAnswers = (answer: string | string[]) => {
    const nextQuestion = Number(currentQuestion?.id) + 1;
    if (nextQuestion > steps) {
      navigate(getRouterMail());
    } else {
      navigate(getRouteQuestion(String(nextQuestion)));
    }
    onSelectAnswer({
      order: Number(currentQuestion?.id),
      title: currentQuestion?.question,
      type: currentQuestion?.type,
      answer,
    });
  };

  const onBack = useCallback(() => {
    if (Number(currentQuestion?.id) === 1) return;
    navigate(getRouteQuestion(String(Number(currentQuestion?.id) - 1)));
  }, [currentQuestion?.id, navigate]);

  const renderAnswers = useCallback(() => {
    switch (currentQuestion?.type) {
      case 'single-select':
        return (
          <SingleSelect
            answers={currentQuestion.answers}
            selectProps={{ onSelect: setAnswers }}
          />
        );
      case 'single-select-image':
        return (
          <SingleSelect
            selectProps={{
              onSelect: setAnswers,
              selectClassName:
                'flex flex-col items-center justify-center text-center gap-2.5',
              isImage: true,
              imagesUrls: currentQuestion.imageUrls,
            }}
            containerClassName='grid grid-cols-3 gap-4 w-full '
            answers={currentQuestion.answers}
          />
        );
      case 'multiple-select':
        return (
          <MultiplySelect
            answers={currentQuestion.answers}
            selectProps={{ onSelect: setAnswers }}
          />
        );
      case 'bubble':
        return (
          <BubbleSelect
            answers={currentQuestion.answers}
            selectProps={{
              onSelect: setAnswers,
              imagesUrls: currentQuestion.imageUrls,
            }}
          />
        );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestion?.answers, currentQuestion?.type]);

  if (!currentQuestion) return null;

  const highlightText = textHighlighter(
    currentQuestion.question,
    'hate',
    'text-additional'
  );

  const padding = currentQuestion?.type === 'bubble' ? 'px-5' : 'px-0';

  return (
    <Card
      className={clsx(
        'flex items-center flex-col gap-[45px] py-20 w-full md:w-1/2 relative',
        {
          'px-0': currentQuestion?.type === 'bubble',
          'px-5': currentQuestion?.type !== 'bubble',
        }
      )}
    >
      {Number(currentQuestion?.id) > 1 && (
        <div role='button' onClick={onBack} className='absolute left-6 text-xl'>
          <img src='/assets/caret.png' alt='back' />
        </div>
      )}
      <ProgressBar
        className={clsx(padding)}
        showTitle
        stepsCount={steps}
        currentStep={Number(currentQuestion?.id)}
      />

      <div className='flex flex-col gap-4 items-center text-center'>
        <h1 className='text-3xl'>{highlightText}</h1>
        <p className='text-sm text-[#C4C8CC]'>{currentQuestion?.hint}</p>
      </div>
      {renderAnswers()}
    </Card>
  );
};

export default Question;
