import Layout from '@app/components/Layout';
import { ICity } from '@interfaces/ICity';
import Logo from '@assets/City.svg';
import { Button } from '@components/Button';
import { cityInfo } from '@navigation/Constants';
import { CityCard } from './components/CityCard';

interface IDashboardView{
  cities: ICity[],
  errors: any[],
  onAdd: () => void,
}
export const DashboardView = function ({ cities, onAdd, errors }: IDashboardView) {
  console.log(cities);
  return (
    <Layout isAdmin isProtected>
      <div className="flex flex-wrap flex-col content-center space-y-3">
        <div className="space-y-2">
          {errors.map((err, index) => (
            <div className="text-red font-light text-center" key={index}>
              {err}
            </div>
          ))}
        </div>
        <img src={Logo} alt="Logo" className="h-24 object-center" />
        <h1 className="font-hand text-4xl text-green py-2 text-center">City Informant</h1>
        <h2 className="font-hand text-2xl text-blue py-2 text-center">Admin Dashboard</h2>
        <div className="flex items-center justify-center">
          <Button
            isPrimary
            isCancel={false}
            onClick={onAdd}
            text="Add"
          />
        </div>
        <div className="flex flex-wrap gap-4 justify-center w-2/3">
          {cities.map((city, index) => (
            <CityCard to={`${cityInfo}${city.name}`} text={city.name} key={index} />))}
        </div>
      </div>
    </Layout>

  );
};
