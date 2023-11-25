import { InputHTMLAttributes } from 'react';
import { BaseInput, ErrorText, ErrorWrapper, Label } from './style';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  error: string;
  dupError?: string;
};

const Input = ({ id, label, error, dupError, ...rest }: InputProps) => {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <BaseInput $error={error} $dupError={dupError} {...rest} />
      <ErrorWrapper>
        <ErrorText>{error}</ErrorText>
        <ErrorText>{dupError}</ErrorText>
      </ErrorWrapper>
    </>
  );
};

export default Input;
