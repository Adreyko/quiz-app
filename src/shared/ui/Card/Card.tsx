import clsx from 'clsx';
import { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <div
      {...props}
      className={clsx('p-4 rounded-xl bg-[var(--main-color)] ', {}, [
        className,
      ])}
    >
      {children}
    </div>
  );
};

export default Card;
