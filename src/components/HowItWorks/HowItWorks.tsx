import mock from '../../assets/mock_howit.png';

export const HowItWorks = () => {
  return (
    <section className="howit" id="HOW">
      <div className="howit__container">
        <h2 className="howit__title">How it works</h2>
        <p className="howit__subtitle">
          Flynanz is an application that will make it easier for you to save the amount of
          money you need.
        </p>
        <div className="howit__info">
          <picture className="howit__picture">
            <img src={mock} alt="howit" loading="lazy" />
          </picture>
          <aside className="howit__steps">
            <div className="steps">
              <div className="steps__number">01.</div>
              <div className="steps__info">
                <h2 className="steps__title">Dowload the app</h2>
                <p className="steps__text">
                  Download the app from your device's app store. (Only Playstore)
                </p>
              </div>
            </div>
            <div className="steps">
              <div className="steps__number">02.</div>
              <div className="steps__info">
                <h2 className="steps__title">Use it</h2>
                <p className="steps__text">
                  Set your goals, create your wallets, see your expenses and define your
                  spending limits.
                </p>
              </div>
            </div>
            <div className="steps">
              <div className="steps__number">03.</div>
              <div className="steps__info">
                <h2 className="steps__title">Done!</h2>
                <p className="steps__text">
                  You're all set! Explore all the features and enjoy the experience.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
