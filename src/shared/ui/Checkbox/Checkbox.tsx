import React, { useState } from 'react';
import clsx from 'clsx';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  value: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  value,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const onCheck = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <div
      className={clsx(
        'flex items-center p-2 bg-pr  mb-2 w-full justify-between   px-[21px] py-5 rounded-2xl text-white',
        { 'bg-[#E4229B33] border border-additional': isChecked },
        { 'bg-secondary': !isChecked }
      )}
      onClick={onCheck}
    >
      <span className='text-white'>{label}</span>

      <input
        value={value}
        type='checkbox'
        checked={isChecked}
        // eslint-disable-next-line no-octal-escape
        className="appearance-none text-white h-6 w-6 border-2 border-additional rounded-lg  bg-transparent checked:bg-additional checked:border-transparent focus:outline-none mr-2 relative
                   before:content-[''] before:absolute before:w-full before:h-full before:flex before:items-center before:justify-center before:text-white 
                   checked:before:content-['\2713']  before:bg-[#6D4376] before:rounded-md"
      />
    </div>
  );
};

export default Checkbox;
