import { SizingType } from '../../types/SizingType';

type ButtonVariantType = 'fill-primary' | 'fill-secondary' |
  'outline-primary' | 'outline-secondary' |
  'flat-primary' | 'flat-secondary' |
  'link' | 'link-secondary';

type ButtonProps = {
  id: string;
  size?: SizingType;
  variant?: ButtonVariantType;
  isChip?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  id,
  children,
  variant = 'fill-primary',
  size = 'md',
  className = '',
  type = 'button',
  isChip = false,
  ...props
}: ButtonProps) => {
  const clases: {
    [key in ButtonVariantType]: string;
  } = {
    'fill-primary': 'fill fill-primary',
    'fill-secondary': 'fill fill-secondary',
    'outline-primary': 'outline outline-primary',
    'outline-secondary': 'outline outline-secondary',
    'flat-primary': 'flat flat-primary',
    'flat-secondary': 'flat flat-secondary',
    'link': 'link',
    'link-secondary': 'link link-secondary',
  };
  
  return (
    <button
      id={id}
      type={type}
      className={`pressable ${size} font-body-${size} ${clases[variant]} ${isChip && 'chip'} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
