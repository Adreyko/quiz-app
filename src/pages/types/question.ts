export type AnswerType =
  | 'single-select'
  | 'single-select-image'
  | 'multiple-select'
  | 'bubble'
  | 'email';
export interface IQuestion {
  id?: number | string;
  question?: string;
  hint?: string;
  answers?: string[];
  imageUrls?: Record<string, string>;
  type: AnswerType;
}
