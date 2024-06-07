import { SizingType } from '../../types/SizingType';

type ButtonVariantType = 'fill-primary' |
  'outline-primary' | 'outline-neutral' |
  'flat-primary' | 'flat-neutral' |
  'link' | 'link-plain';

type ButtonProps = {
  id: string;
  size?: SizingType;
  variant?: ButtonVariantType;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  id,
  children,
  variant = 'fill-primary',
  size = 'md',
  className = '',
  type = 'button',
  ...props
}: ButtonProps) => {
  const clases: {
    [key in ButtonVariantType]: string;
  } = {
    'fill-primary': 'fill fill-primary',
    'outline-primary': 'outline outline-primary',
    'outline-neutral': 'outline outline-neutral',
    'flat-primary': 'flat flat-primary',
    'flat-neutral': 'flat flat-neutral',
    'link': 'link',
    'link-plain': 'link link-plain',
  };
  
  return (
    <button
      id={id}
      type={type}
      className={`pressable ${size} font-body-${size} ${clases[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
