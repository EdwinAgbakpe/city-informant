import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dashboard } from '@navigation/Constants';
import { AuthFormView } from './AuthFormView';

interface IAuthFormContainer{
  isRegister: boolean;
}

export const AuthFormContainer = function ({ isRegister }: IAuthFormContainer) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const onChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const submitAuthForm = () => {
    console.log(formData);
    navigate(dashboard, { replace: true });
  };

  return (
    <div>
      <AuthFormView
        form={formData}
        onChange={onChange}
        isRegister={isRegister}
        onSubmit={submitAuthForm}
      />
    </div>
  );
};
