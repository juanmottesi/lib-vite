import { ReactNode } from 'react';
import { SizingType } from '../../types/SizingType';

type InputProps = {
  size?: SizingType;
  prefix?: ReactNode;
  postfix?: ReactNode;
  placeholder: string;
  inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search' | undefined;
  disabled?: boolean;
  error?: boolean;
} & React.HTMLAttributes<HTMLInputElement>;

export const Input = ({
  prefix,
  postfix,
  size = 'md',
  placeholder,
  className = '',
  inputMode = 'text',
  disabled = false,
  error = false,
  ...rest
}: InputProps) => {
  return (
    <div className={`input-container font-body-${size} ${size} ${disabled ? 'disabled' : ''} ${error ? 'error' : '' }`}>
      {prefix && <div className="input-prefix">{prefix}</div>}
      <input
        disabled={disabled}
        placeholder={placeholder}
        inputMode={inputMode}
        className={`input font-body-${size} ${className}`}
        {...rest}
      />
      {postfix && <div className="input-postfix">{postfix}</div>}
    </div>
  );
};
