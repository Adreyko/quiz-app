import { AnswerType } from './question';

export interface Answers {
  order?: number;
  title?: string;
  type?: AnswerType;
  answer?: string[] | string;
}
