type PillVariant = 'default'
  | 'active'
  | 'success' 
  | 'warning' 
  | 'error' 
  | 'alternative1' 
  | 'alternative2' 
  | 'alternative3' 
  | 'alternative4' 
  | 'alternative5' 
  | 'alternative6';

type PillProps = {
  variant: PillVariant
} & React.HTMLAttributes<HTMLSpanElement>;

export const Pill = ({ variant, className = '', ...rest }: PillProps ) => (
  <span {...rest} className={`pill font-body-xs ${variant} ${className}`} />
);
