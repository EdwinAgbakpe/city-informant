/* eslint-disable react/require-default-props */
import { useState, useEffect } from 'react';
import { loginUser, registerUser } from '@redux/Actions/userActions';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { dashboard } from '@navigation/Constants';
import { AuthFormView } from './AuthFormView';

interface IAuthFormContainer{
  isRegister: boolean,
  UI? :any,
  dispatch? :any,
}

const AuthFormContainer = function ({ isRegister, UI, dispatch }: IAuthFormContainer) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState([] as Error[]);

  useEffect(() => {
    if (UI.errors) {
      setErrors(UI.errors);
    }
  }, [UI]);

  const onChange = (e:any) => {
    e.persist();
    const { name, value } = e.target;
    setErrors([]);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateForm = function () {
    if (!formData.username.match(/^\w+$/)) throw new Error('Invalid username');
    if (!formData.password.match(/^\w+$/)) throw new Error('Invalid password');
    if (isRegister && !(formData.password === formData.confirmPassword)) throw new Error('Passwords do not match');
  };

  const submitAuthForm = (e:any) => {
    e.preventDefault();
    try {
      validateForm();
      const userData = { username: formData.username, password: formData.password };
      if (isRegister) {
        dispatch(registerUser(userData))
          .then(() => navigate(dashboard))
          .catch((err:any) => console.log(err));
      } else {
        dispatch(loginUser(userData))
          .then(() => navigate(dashboard))
          .catch((err:any) => console.log(err));
      }
    } catch (err:any) {
      setErrors((prevErrors):Error[] => ([...prevErrors, err]));
      console.log(err);
    }
  };

  return (
    <div>
      <AuthFormView
        form={formData}
        errors={errors}
        onChange={onChange}
        isRegister={isRegister}
        onSubmit={submitAuthForm}
      />
    </div>
  );
};

// this map the states to our props in this functional component
const mapStateToProps = (state: any) => ({
  user: state.user,
  UI: state.UI,
});

const connectedAuthFormContainer = connect(mapStateToProps)(AuthFormContainer);
export { connectedAuthFormContainer as AuthFormContainer };
