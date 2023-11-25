import Button from '@components/common/Button';
import { ButtonWrapper, Form, SubmitForm, SubmitList, Text } from './style';
import UserForm from '@components/userform';
import { useState } from 'react';
import { INITIAL_STATE, useForm } from '@contexts/FormContext';

const Home = () => {
  const [submitForm, setSubmitForm] = useState<Omit<FormType, 'id'>[]>([]);
  const { userForm, setUserForm, dupError, error, addForm, checkIsEmpty } = useForm();

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!!dupError || checkIsEmpty() || !!error) return;

    setSubmitForm((prev) => {
      const form = userForm.map(({ id, ...rest }) => rest);
      return [...prev, ...form];
    });

    setUserForm([INITIAL_STATE]);
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      {userForm.map(({ id, name, password }) => (
        <UserForm key={id} id={id} name={name} password={password} submitForm={submitForm} />
      ))}
      <ButtonWrapper>
        <Button type="button" text="Add User" onClick={addForm} />
        <Button type="submit" text="Confirm" disabled={!!dupError || checkIsEmpty() || !!error} />
      </ButtonWrapper>
      <SubmitForm>
        {submitForm.map(({ name, password }, index) => (
          <SubmitList key={index}>
            <Text>Name: {name}</Text>
            <Text>Password: {password.slice(3, 6).padStart(password.length, '*')}</Text>
          </SubmitList>
        ))}
      </SubmitForm>
    </Form>
  );
};

export default Home;
