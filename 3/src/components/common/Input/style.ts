import styled from 'styled-components';

type StyledInputProps = {
  $error: string;
  $dupError?: string;
};

export const BaseInput = styled.input<StyledInputProps>`
  border: 1px solid #000000;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  background-color: ${({ $error, $dupError }) => $error || ($dupError && 'rgba(255, 0, 0, 0.5)')};
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 14px;
`;

export const ErrorWrapper = styled.div`
  width: 100%;
  height: 5px;
  margin-top: 5px;
  display: flex;
  column-gap: 5px;
`;

export const Label = styled.label`
  font-weight: 600;
  margin: 20px 0 10px 0;
`;
