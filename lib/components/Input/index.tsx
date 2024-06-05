import { ReactNode } from 'react';
import { SizingType } from '../../types/SizingType';
import { FnMask } from '../../utils/masks';

type InputProps = {
  size?: SizingType;
  prefix?: ReactNode;
  postfix?: ReactNode;
  placeholder: string;
  inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search' | undefined;
  disabled?: boolean;
  error?: boolean;
  mask?: FnMask;
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
  mask = undefined,
  onChange,
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
        onChange={(event) => {
          if (mask) {
            const value = event.target.value;
            const maskedValue = mask(value);
            const cursorPosition = (event.target.selectionEnd || 0) + (maskedValue.length - value.length);
            event.target.value = maskedValue;
            event.target.setSelectionRange(cursorPosition, cursorPosition);
          }
          onChange && onChange(event);
        }}
        {...rest}
      />
      {postfix && <div className="input-postfix">{postfix}</div>}
    </div>
  );
};
