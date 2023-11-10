import mock from '../../assets/mock_howit.png';

export const HowItWorks = () => {
  return (
    <section className="howit">
      <div className="howit__container">
        <h2 className="howit__title">How it works</h2>
        <h2 className="howit__subtitle">
          Flynanz is an application that will make it easier for you to save the amount of
          money you need.
        </h2>
        <div className="howit__info">
          <picture className="howit__picture">
            <img src={mock} alt="howit" loading="lazy" />
          </picture>
          <aside className="howit__steps">
            <div className="steps">
              <div className="steps__number">01.</div>
              <div className="steps__info">
                <h2 className="steps__title">Sign Up</h2>
                <p className="steps__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="steps">
              <div className="steps__number">02.</div>
              <div className="steps__info">
                <h2 className="steps__title">Sign Up</h2>
                <p className="steps__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="steps">
              <div className="steps__number">03.</div>
              <div className="steps__info">
                <h2 className="steps__title">Sign Up</h2>
                <p className="steps__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
