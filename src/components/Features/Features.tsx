import {
  IconAdCircleFilled,
  IconCurrencyDollarOff,
  IconSpyOff,
  IconWorldWww,
  IconMoonFilled,
  IconArrowUp,
} from '@tabler/icons-react';

export const Features = () => {
  return (
    <section className="features" id="FEATURES">
      <div className="features__container">
        <header className="features__header">
          <h2 className="features__title">Features</h2>
          <p className="features__subtitle">
            Discover all the features Flynanz can deliver, see why Flynanz is the best
            option for your savings.
          </p>
        </header>
        <div className="features__list">
          <div className="features__item">
            <div className="features__item-icon features__item-icon--deg1">
              <IconWorldWww />
            </div>
            <h3 className="features__item-title">NO internet connection required</h3>
            <p className="features__item-description">
              Get the best of our app anytime, anywhere – even without internet. Stay
              connected on the go!
            </p>
          </div>
          <div className="features__item">
            <div className="features__item-icon features__item-icon--deg2">
              <IconAdCircleFilled />
            </div>
            <h3 className="features__item-title">It will NEVER have ads</h3>
            <p className="features__item-description">
              Enjoy an ad-free experience – no interruptions now or in the future!
            </p>
          </div>
          <div className="features__item">
            <div className="features__item-icon features__item-icon--deg3">
              <IconCurrencyDollarOff />
            </div>
            <h3 className="features__item-title">It will ALWAYS be free</h3>
            <p className="features__item-description">
              It's free now and forever – no strings attached!
            </p>
          </div>
          <div className="features__item">
            <div className="features__item-icon features__item-icon--deg4">
              <IconSpyOff />
            </div>
            <h3 className="features__item-title">NO data collection</h3>
            <p className="features__item-description">
              The data entered are NOT processed, they are stored on your cell phone and
              it will always be this way.
            </p>
          </div>
          <div className="features__item">
            <div className="features__item-icon features__item-icon--deg5">
              <IconMoonFilled />
            </div>
            <h3 className="features__item-title">Dark and Light mode</h3>
            <p className="features__item-description">
              Switch effortlessly between dark and light modes for a personalized and
              comfortable app experience.
            </p>
          </div>
          <div className="features__item">
            <div className="features__item-icon features__item-icon--deg6">
              <IconArrowUp />
            </div>
            <h3 className="features__item-title">Always updated</h3>
            <p className="features__item-description">
              We keep it fresh and up-to-date with regular updates, ensuring you always
              have the latest features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
