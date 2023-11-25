import styled from 'styled-components';

type StyledButtonProps = {
  $disabled?: boolean;
};

export const BaseButton = styled.button<StyledButtonProps>`
  ${({ $disabled, theme }) => ($disabled ? 'background-color: #06b6d4' : 'backkground-color: ${}')}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 36px;
  border-radius: 100px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ $disabled }) => ($disabled ? '#E8E8E8' : '#06dbd4')};
  font-weight: 600;
`;
