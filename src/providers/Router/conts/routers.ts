export enum AppRoutes {
  START = 'start',
  QUESTION = 'question',
  MAIL = 'mail',
  Thanks = 'thanks',
}

export const getRouteStart = () => '/';
export const getRouteQuestion = (id: string) => `/question/${id}`;
export const getRouterMail = () => '/mail';
export const getRouterThanks = () => '/thanks';

export const RouterPath: Record<AppRoutes, string> = {
  [AppRoutes.START]: getRouteStart(),
  [AppRoutes.QUESTION]: getRouteQuestion(':id'),
  [AppRoutes.MAIL]: getRouterMail(),
  [AppRoutes.Thanks]: getRouterThanks(),
};
