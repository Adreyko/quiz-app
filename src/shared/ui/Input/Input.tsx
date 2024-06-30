/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, InputHTMLAttributes, memo, useRef, useState } from 'react';

import clsx from 'clsx';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readOnly?: boolean;
  error?: boolean;
  errorText: string;
}

const Input: FC<InputProps> = memo((props: InputProps) => {
  const {
    value,
    onChange,
    className = '',
    type = 'text',
    placeholder = '',
    autofocus,
    readOnly = false,
    errorText,
    error,
    ...otherProps
  } = props;

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [touched, setTouched] = useState(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className='flex flex-col w-full gap-4'>
      <input
        ref={inputRef}
        type={type}
        value={value}
        onBlur={() => {
          setTouched(true);
        }}
        placeholder={placeholder}
        onChange={onChangeHandler}
        className={clsx(
          'bg-secondary px-[21px] py-5 rounded-[16px] w-full placeholder:text-[#C4C8CC80] outline-none',
          {
            'border border-red-500': error && touched,
          }
        )}
        readOnly={readOnly}
        {...otherProps}
      />
      {touched && error && errorText && (
        <span className='text-[14px] text-[#FF3939] font-medium '>
          {errorText}
        </span>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
