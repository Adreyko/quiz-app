import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { cn } from '../../lib/helpers/clsx';

const button = cva(
  'text-[17px]/[24px] leading-5 whitespace-nowrap cursor-pointer font-semibold focus:outline-none  transition duration-150',
  {
    variants: {
      variant: {
        primary: 'border-none bg-secondary text-white  active:ring-8',
        secondary: 'border-0 bg-additional  active:ring-4 ',
      },
      size: {
        normal: 'px-2 py-3',
        large: 'px-[21px] py-5',
      },
      disabled: {
        false: null,
        true: 'opacity-50',
      },
      loading: {
        false: null,
        true: 'pointer-events-none',
      },
    },

    defaultVariants: {
      variant: 'primary',
      size: 'normal',
    },
  }
);

export type ButtonProps = VariantProps<typeof button> & {
  className?: string;
  children?: ReactNode;
  icon?: string;
  iconPlacement?: 'left' | 'right';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  className,
  children,
  variant,
  size = 'large',
  icon,
  iconPlacement = 'left',
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      {...props}
      className={cn(
        button({
          variant,
          size,
          disabled,
          className: cn('rounded-[16px]', className),
        })
      )}
    >
      {icon && iconPlacement === 'left' && (
        <span className={cn('text-xl leading-[0] ', { 'mr-2': children })}>
          <img src={icon} alt='icon' />
        </span>
      )}

      {children}

      {icon && iconPlacement === 'right' && (
        <span className={cn('text-xl leading-[0]', { 'ml-2': children })}>
          <img src={icon} alt='icon' />
        </span>
      )}
    </button>
  );
};

export default Button;
