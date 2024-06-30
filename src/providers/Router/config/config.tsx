import { type RouteProps } from 'react-router-dom';
import { AppRoutes, RouterPath } from '../conts/routers';
import { Question, Start, MailPage, ThanksPage } from '../../../pages';

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.START]: {
    path: RouterPath.start,
    element: <Start />,
  },
  [AppRoutes.QUESTION]: {
    path: RouterPath.question,
    element: <Question />,
  },
  [AppRoutes.MAIL]: {
    path: RouterPath.mail,
    element: <MailPage />,
  },
  [AppRoutes.Thanks]: {
    path: RouterPath.thanks,
    element: <ThanksPage />,
  },
};
