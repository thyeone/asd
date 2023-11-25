import styled from 'styled-components';

export const Form = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  max-width: 700px;
  border: 1px solid #000000;
`;

export const FormTitle = styled.h1`
  font-weight: 600;
  font-size: 24px;
`;

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 4px;
  background-color: rgba(232, 232, 232, 1);
  transition: all;
  transition-duration: 300ms;
  &:hover {
    background-color: rgba(232, 232, 232, 0.5);
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
