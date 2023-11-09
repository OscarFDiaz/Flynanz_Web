import { IconExternalLink } from '@tabler/icons-react';
import flynanz_logo from '../../assets/flynanz_logo.svg';

export const Navbar = () => {
  return (
    <nav className="navigator">
      <picture className="navigator__picture">
        <img src={flynanz_logo} alt="Logo" />
      </picture>

      <ul className="navigator__list">
        <li className="list__item">
          <a href="#HOME" className="list__anchor">
            Home
          </a>
        </li>
        <li className="list__item">
          <a href="#HOW" className="list__anchor">
            How it works
          </a>
        </li>
        <li className="list__item">
          <a href="#FEATURES" className="list__anchor">
            Features
          </a>
        </li>
        <li className="list__item">
          <a href="#REVIEWS" className="list__anchor">
            Reviews
          </a>
        </li>
      </ul>

      <a href="#DOWNLOAD" className="list__anchor list__anchor--download">
        Download
        <IconExternalLink />
      </a>
    </nav>
  );
};
