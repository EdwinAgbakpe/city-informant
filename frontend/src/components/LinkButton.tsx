import { Link } from 'react-router-dom';

interface ILinkButton {
  to: string,
  text: string,
}
export const LinkButton = function ({ to, text }: ILinkButton) {
  return (
    <Link to={to}>
      <h3 className="text-xl text-center font-semibold text-blue hover:text-green">{text}</h3>
    </Link>
  );
};
