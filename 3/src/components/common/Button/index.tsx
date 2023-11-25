import { BaseButton } from './style';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  disabled?: boolean;
};

const Button = ({ text, disabled, ...rest }: ButtonProps) => {
  return (
    <BaseButton {...rest} $disabled={disabled}>
      {text}
    </BaseButton>
  );
};

export default Button;
