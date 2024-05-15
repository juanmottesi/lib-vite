import { SizingType } from '../../types/SizingType';

type ButtonVariantType = 'fill-primary' | 'fill-secondary' |
  'outline-primary' | 'outline-secondary' | 'outline-tertiary' |
  'flat-primary' | 'flat-secondary';

type ButtonProps = {
  id: string;
  size?: SizingType;
  variant: ButtonVariantType;
  isChip?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  id,
  children,
  variant,
  size = 'md',
  className = '',
  type = 'button',
  isChip = false,
  ...props
}: ButtonProps) => (
  <button
    id={id}
    type={type}
    className={`button ${size} font-body-${size} ${variant} ${isChip && 'chip'} ${className}`}
    {...props}
  >
    {children}
  </button>
);
