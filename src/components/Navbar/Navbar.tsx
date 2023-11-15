import flynanz_logo from '../../assets/flynanz_logo.svg';
import { ExternalLink } from '../../assets/Icons/ExternalLink';
import NavLinks from '../../helpers/navigation.json';
import { NavItem } from './NavItem';

type Link = {
  anchor: string;
  content: string;
};

export const Navbar = () => {
  const links: { [key: string]: Link } = NavLinks;

  return (
    <nav className="navigator">
      <div className="navigator__container">
        <picture className="navigator__picture">
          <img src={flynanz_logo} alt="Logo" />
        </picture>

        <ul className="navigator__list">
          {Object.keys(links).map((key) => {
            const current = links[key];
            return <NavItem anchor={current.anchor} content={current.content} />;
          })}
        </ul>

        <a
          href="https://play.google.com/store/apps/details?id=com.oscar.diaz"
          target="_blank"
          rel="noreferrer noopener"
          className="list__anchor list__anchor--download"
        >
          Download
          <ExternalLink />
        </a>
      </div>
    </nav>
  );
};
