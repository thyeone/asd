import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  align-items: center;
  row-gap: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const SubmitForm = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  background-color: #e8e8e8;
  width: 100%;
`;

export const SubmitList = styled.li`
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const Text = styled.span`
  font-weight: 600;
`;
