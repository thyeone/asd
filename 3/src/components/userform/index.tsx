import Input from '@components/common/Input';
import { useState } from 'react';
import { validateName, validatePw } from '@utils/validate';
import { useForm } from '@contexts/FormContext';
import { validate } from '@constants/validate';
import { DeleteButton, Form, FormTitle, TopContainer } from './style';

type UserFormProps = {
  id: number;
  name: string;
  password: string;
  submitForm: Omit<FormType, 'id'>[];
};

const UserForm = ({ id, name, password, submitForm }: UserFormProps) => {
  const { updateForm, dupError, setDupError, userForm, setError, deleteForm } = useForm();

  const [nameError, setNameError] = useState<string>('');
  const [pwError, setPwError] = useState<string>('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    updateForm(value, password, id);

    const allForm = [...userForm, ...submitForm];

    const dup = allForm.filter(({ name }) => name === value).length;

    if (dup) setDupError(validate.duplicateCheck(value));
    else setDupError('');

    if (!validateName(value)) {
      setError(true);
      setNameError(validate.nameLength);
    } else {
      setNameError('');
      setError(false);
    }
  };

  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    updateForm(name, value, id);

    if (!validatePw(value)) {
      setPwError(validate.password);
      setError(true);
    } else {
      setPwError('');
      setError(false);
    }
  };

  return (
    <Form>
      <TopContainer>
        <FormTitle>User - {id}</FormTitle>
        <DeleteButton type="button" onClick={() => deleteForm(id)}>
          X
        </DeleteButton>
      </TopContainer>
      <Input
        id="name-input"
        value={name}
        label="Name"
        error={nameError}
        dupError={dupError.includes(name) ? dupError : ''}
        onChange={handleNameChange}
      />
      <Input
        value={password}
        type="password"
        id="password-input"
        label="Password"
        error={pwError}
        onChange={handlePwChange}
      />
    </Form>
  );
};

export default UserForm;
