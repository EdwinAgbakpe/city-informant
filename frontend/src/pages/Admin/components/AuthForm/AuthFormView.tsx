/* eslint-disable no-unused-vars */
import { LinkButton } from '@components/LinkButton';
import { Button } from '@components/Button';
import { login, register } from '@navigation/Constants';
import { Form } from '../Form';
import { TextBox } from '../TextBox';

interface IAuthFormView{
  onChange: (e:any)=>void,
  onSubmit: ()=>void,
  form: any,
  isRegister: boolean,
}

export const AuthFormView = function ({
  form, onChange, isRegister, onSubmit,
}: IAuthFormView) {
  return (
    <div className="flex justify-center">
      <Form title={isRegister ? 'Register' : 'Login'}>
        <div className="space-y-6">
          <div className="space-y-3">
            <TextBox
              type="text"
              label="Username"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={onChange}
            />
            <TextBox
              type="password"
              label="Password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={onChange}
            />
            {isRegister
          && (
          <TextBox
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={onChange}
          />
          )}
          </div>
          <div className="flex flex-col flex-wrap content-center space-y-2">
            <Button
              isPrimary
              isCancel={false}
              text={isRegister ? 'Register' : 'Login'}
              onClick={onSubmit}
            />
            <LinkButton
              to={isRegister ? login : register}
              text={isRegister ? 'Login' : 'Register'}
            />
          </div>
        </div>
      </Form>
    </div>
  );
};
