import Layout from '@app/components/Layout';
import Logo from '@assets/City.svg';
import { Button } from '@components/Button';

interface IHome{
  title: string,
  handlePlay: ()=>void,
}

const HomeView = function ({ title, handlePlay }: IHome) {
  console.log(title);
  return (
    <Layout isAdmin={false} isProtected={false}>
      <div className="flex flex-wrap flex-col content-center space-y-5">
        <img src={Logo} alt="Logo" className="h-32 object-center" />
        <h1 className="font-hand text-6xl text-green py-2 text-center">City Informant</h1>
        <h2 className="font-hand text-3xl text-blue py-2 mt-5 text-center">How much do you know about famous cities?</h2>
        <div className="flex items-center justify-center">
          <Button
            isPrimary
            isCancel={false}
            onClick={handlePlay}
            text="Play"
          />
        </div>
      </div>
    </Layout>
  );
};
export default HomeView;
