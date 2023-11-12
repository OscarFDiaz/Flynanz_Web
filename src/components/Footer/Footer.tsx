import flynanz_logo from '../../assets/flynanz_logo.svg';
import { Github, LinkedIn, Twitter, Behance } from '../../assets/Icons/';

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
                <Twitter />
              </a>
            </li>
            <li className="footer__nav-li">
              <a
                href="https://www.linkedin.com/in/oscarfcodiaz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn />
              </a>
            </li>
            <li className="footer__nav-li">
              <a
                href="https://www.behance.net/oscarofda"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Behance />
              </a>
            </li>
            <li className="footer__nav-li">
              <a
                href="https://github.com/OscarFDiaz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </a>
            </li>
          </ul>
          <h2 className="footer__thanks">Made with 💖(code) for me to me an everyone</h2>
        </nav>
      </div>
    </footer>
  );
};
