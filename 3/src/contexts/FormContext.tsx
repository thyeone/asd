import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useMemo, useState } from 'react';

type FormContextValue = {
  userForm: FormType[];
  setUserForm: Dispatch<SetStateAction<FormType[]>>;
  updateForm: (name: string, password: string, index: number) => void;
  dupError: string;
  setDupError: Dispatch<SetStateAction<string>>;
  error: boolean;
  setError: Dispatch<SetStateAction<boolean>>;
  addForm: () => void;
  checkIsEmpty: () => boolean;
  deleteForm: (id: number) => void;
};

export const INITIAL_STATE = {
  id: 0,
  name: '',
  password: '',
} as const;

export const FormContext = createContext<FormContextValue | null>(null);

export const FormProvider = ({ children }: PropsWithChildren) => {
  const [userForm, setUserForm] = useState<FormType[]>([INITIAL_STATE]);
  const [dupError, setDupError] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const updateForm = (name: string, password: string, id: number) => {
    setUserForm((prev) => {
      const newForm = [...prev];
      newForm[id] = {
        id,
        name,
        password,
      };
      return newForm;
    });
  };

  const addForm = () => {
    setUserForm((prev) => {
      if (!prev.length) return [INITIAL_STATE];

      return [...prev, { id: prev[prev.length - 1]?.id + 1, name: '', password: '' }];
    });
  };

  const deleteForm = (id: number) => {
    setUserForm((prev) => {
      return [...prev.slice(0, id), ...prev.slice(id + 1)];
    });
  };

  const checkIsEmpty = () => {
    if (!userForm.length) return true;

    for (const item of userForm) {
      if (!item?.name.length || !item?.password.length) {
        return true;
      }
    }

    return false;
  };

  const memoizedValue = useMemo(
    () => ({
      userForm,
      setUserForm,
      setDupError,
      dupError,
      updateForm,
      error,
      setError,
      addForm,
      checkIsEmpty,
      deleteForm,
    }),
    [userForm, dupError, error],
  );

  return <FormContext.Provider value={memoizedValue}>{children}</FormContext.Provider>;
};

export const useForm = () => {
  const formContext = useContext(FormContext);
  if (!formContext) throw new Error('부모 트리에서 FormContext를 사용해주세요.');

  const {
    userForm,
    updateForm,
    setUserForm,
    dupError,
    setDupError,
    error,
    setError,
    addForm,
    checkIsEmpty,
    deleteForm,
  } = formContext;

  return {
    userForm,
    updateForm,
    setUserForm,
    dupError,
    setDupError,
    error,
    setError,
    addForm,
    checkIsEmpty,
    deleteForm,
  };
};
