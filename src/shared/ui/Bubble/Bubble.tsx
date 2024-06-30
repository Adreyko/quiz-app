import clsx from 'clsx';
import React from 'react';

interface BubbleProps {
  label: string;
  icon?: string;
  onSelect?: (select: string) => void;
  selectedBubbles?: string[];
}

interface BubbleContainerProps {
  className?: string;
  content?: BubbleProps[];
  onSelect?: (select: string) => void;
  selectedBubbles?: string[];
}

const BubbleElement: React.FC<BubbleProps> = ({
  label,
  icon,
  onSelect,
  selectedBubbles,
}) => {
  const onSelectBubble = () => {
    onSelect?.(label);
  };

  const isSelected = selectedBubbles?.includes(label);
  return (
    <div
      onClick={onSelectBubble}
      className={clsx(
        `flex flex-col items-center justify-center transition-transform duration-300 bg-[#36173D] h-24 w-24 rounded-full p-4 text-white`,
        {
          'border border-additional': isSelected,
        }
      )}
    >
      <div className='text-2xl'>{icon}</div>
      <div className='text-[13px]/[16px]'>{label}</div>
    </div>
  );
};

const Bubble = ({
  content,
  className,
  onSelect,
  selectedBubbles,
}: BubbleContainerProps) => {
  if (!content) return null;

  const pairedContent = [];

  for (let i = 0; i < content?.length; i += 2) {
    pairedContent.push(content.slice(i, i + 2));
  }

  return (
    <div
      className={`flex ${className} overflow-y-auto items-center justify-center gap-2 pl-20`}
    >
      {pairedContent.map((pair, index) => (
        <div
          key={index}
          className={clsx('flex flex-col items-center', {
            'mt-10': index % 2 !== 0,
            'self-center mt-0': pair.length === 1,
            'gap-2': pair.length !== 1,
          })}
        >
          {pair.map((bubble, bubbleIndex) => (
            <BubbleElement
              selectedBubbles={selectedBubbles}
              onSelect={onSelect}
              key={bubbleIndex}
              {...bubble}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Bubble;
