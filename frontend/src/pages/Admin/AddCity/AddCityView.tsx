import Layout from '@app/components/Layout';
import CityForm from '../components/CityForm';

export const AddCityView = function () {
  return (
    <Layout isAdmin isProtected>
      <CityForm isAdd />
    </Layout>

  );
};
