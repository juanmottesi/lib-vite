import { SizingType } from '../../types/SizingType';

type ChoiceChipProps = {
  id: string;
  size?: SizingType;
  selected?: boolean;
  withIcons?: boolean;
  icons?: {
    selected: React.ReactNode; // TODO: Replace with icons
    unselected: React.ReactNode; // TODO: Replace with icons
  };
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ChoiceChip = ({
  id,
  children,
  size = 'sm',
  selected = false,
  withIcons = false,
  className = '',
  type = 'button',
  icons = {
    selected: <span>✓</span>, // TODO: Replace with icons
    unselected: <span>+</span>, // TODO: Replace with icons
  },
  ...props
}: ChoiceChipProps) => {
  return (
    <button
      id={id}
      type={type}
      className={`pressable choice-chip ${size} font-body-${size} ${selected ? 'selected' : ''} ${className}`}
      {...props}
    >
      {children}
      {withIcons && (selected ? icons.selected : icons.unselected)}
    </button>
  );
};
