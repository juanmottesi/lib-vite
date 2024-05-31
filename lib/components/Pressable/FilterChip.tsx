import { ReactNode } from 'react';
import { SizingType } from '../../types/SizingType';
import { Pill } from '../Pill';

interface WithNameInterface {
  name: ReactNode;
}

type FilterChipProps = {
  id: string;
  size?: SizingType;
  options: WithNameInterface[];
  label: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const FilterChip = ({
  id,
  size = 'sm',
  className = '',
  type = 'button',
  label,
  options,
  ...props
}: FilterChipProps) => {
  const elementsAmount = options.length;
  const isSelected = elementsAmount > 0;
  return (
    <button
      id={id}
      type={type}
      className={`pressable filter-chip ${size} font-body-${size} ${isSelected ? 'selected' : ''} ${className}`}
      {...props}
    >
      <span className="label">{`${label}${isSelected ? ':' : ''}`}</span>
      {isSelected ? `${options[0].name}` : ''}
      {elementsAmount > 1 ? <Pill variant="active">+{elementsAmount - 1}</Pill> : ''}
    </button>
  );
};
