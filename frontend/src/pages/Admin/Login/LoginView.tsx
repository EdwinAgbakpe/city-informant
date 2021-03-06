import Layout from '@app/components/Layout';
import AuthForm from '../components/AuthForm';

export const LoginView = function () {
  return (
    <Layout isAdmin isProtected={false}>
      <AuthForm isRegister={false} />
    </Layout>

  );
};
