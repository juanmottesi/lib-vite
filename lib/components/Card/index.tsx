type CardProps = {
  shadow?: 'none' | 'soft' | 'hard',
  variant?: 'plain' | 'outline-primary' | 'bordered-primary' | 'primary' | 'neutral',
} & React.HTMLAttributes<HTMLDivElement>;

export const Card = ({
  children,
  className = '',
  shadow = 'none',
  variant = 'plain',
  ...props
}: CardProps) => (
  <div {...props} className={`card ${variant} ${shadow} ${className}`}>
    {children}
  </div>
);
