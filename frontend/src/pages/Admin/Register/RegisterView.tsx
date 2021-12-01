import Layout from '@app/components/Layout';
import AuthForm from '../components/AuthForm';

export const RegisterView = function () {
  return (
    <Layout isAdmin isProtected={false}>
      <AuthForm isRegister />
    </Layout>

  );
};
