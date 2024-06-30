import { IQuestion } from '../../../pages/types/question';

export const getQuestions = (language: string): IQuestion[] => {
  try {
    const data: IQuestion[] = JSON.parse(localStorage.getItem(language) ?? '');
    return data;
  } catch (error) {
    return [];
  }
};
