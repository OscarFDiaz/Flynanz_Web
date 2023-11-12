import flynanz_logo from '../../assets/flynanz_logo.svg';
import { ExternalLink } from '../../assets/Icons/ExternalLink';

export const Navbar = () => {
  return (
    <nav className="navigator">
      <div className="navigator__container">
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
