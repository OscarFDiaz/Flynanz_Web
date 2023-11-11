import {
  IconBrandBehance,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from '@tabler/icons-react';
import flynanz_logo from '../../assets/flynanz_logo.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <nav className="footer__nav">
          <picture className="footer__picture">
            <img src={flynanz_logo} alt="Logo" />
          </picture>
          <ul className="footer__nav-ul">
            <li className="footer__nav-li">
              <a href="#HOME">Home</a>
            </li>
            <li className="footer__nav-li">
              <a href="#HOW">How it works</a>
            </li>
            <li className="footer__nav-li">
              <a href="#FEATURES">Features</a>
            </li>
            <li className="footer__nav-li">
              <a href="#REVIEWS">Reviews</a>
            </li>
          </ul>
        </nav>
        <div className="footer__divider"></div>
        <nav className="footer__nav footer__nav--brands">
          <ul className="footer__nav-ul">
            <li className="footer__nav-li">
              <a
                href="https://twitter.com/OscarOFDA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandTwitter />
              </a>
            </li>
            <li className="footer__nav-li">
              <a
                href="https://www.linkedin.com/in/oscarfcodiaz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandLinkedin stroke={1} width={1} />
              </a>
            </li>
            <li className="footer__nav-li">
              <a
                href="https://www.behance.net/oscarofda"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandBehance />
              </a>
            </li>
            <li className="footer__nav-li">
              <a
                href="https://github.com/OscarFDiaz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandGithub />
              </a>
            </li>
          </ul>
          <h2 className="footer__thanks">Made with 💖(code) for me to me an everyone</h2>
        </nav>
      </div>
    </footer>
  );
};
