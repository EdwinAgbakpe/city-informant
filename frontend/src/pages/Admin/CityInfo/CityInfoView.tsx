import Layout from '@app/components/Layout';
import CityForm from '../components/CityForm';

export const CityInfoView = function () {
  return (
    <Layout isAdmin isProtected>
      <CityForm isAdd={false} />
    </Layout>

  );
};
