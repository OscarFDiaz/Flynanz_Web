import {
  IconBrandBehance,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from '@tabler/icons-react';
import flynanz_logo from '../../assets/flynanz_logo.svg';

export const Footer = () => {
  return (
    <footer>
      <nav>
        <picture>
          <img src={flynanz_logo} alt="Logo" />
        </picture>
        <ul>
          <li>
            <a href="#HOME">Home</a>
          </li>
          <li>
            <a href="#HOW">How it works</a>
          </li>
          <li>
            <a href="#FEATURES">Features</a>
          </li>
          <li>
            <a href="#REVIEWS">Reviews</a>
          </li>
        </ul>
      </nav>
      <div>divider</div>
      <nav>
        <ul>
          <li>
            <IconBrandTwitter />
          </li>
          <li>
            <IconBrandLinkedin />
          </li>
          <li>
            <IconBrandBehance />
          </li>
          <li>
            <IconBrandGithub />
          </li>
        </ul>
      </nav>
      <h2>Made with 💖(code) for me to me an everyone</h2>
    </footer>
  );
};
