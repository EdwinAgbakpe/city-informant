import { Link } from 'react-router-dom';

interface ICityCard{
  to: string,
  text: string,
}
export const CityCard = function ({ to, text }: ICityCard) {
  return (
    <Link to={to}>
      <div className="bg-white text-center
        text-black font-hand transition transform duration-500
        ease-in-out hover:scale-110 text-2xl w-48 px-4 py-6 rounded-xl shadow"
      >
        <h3>{text}</h3>
      </div>
    </Link>
  );
};
