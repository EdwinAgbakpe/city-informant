import { useNavigate } from 'react-router';
import HomeView from './HomeView';

export const HomeContainer = function () {
  const navigate = useNavigate();
  const handlePlay = () => {
    navigate('/quiz');
  };
  return (
    <div>
      <HomeView handlePlay={handlePlay} />
    </div>
  );
};
