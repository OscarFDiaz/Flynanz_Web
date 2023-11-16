import mock from '../../assets/mock_howit.png';
import Steps from '../../helpers/howit.json';
import { HowItStep } from './HowItStep';

type stepType = {
  step: string;
  title: string;
  text: string;
};

export const HowItWorks = () => {
  const step: { [key: string]: stepType } = Steps;

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
            <img src={mock} alt="howit" loading="lazy" className="howit__image" />
          </picture>
          <aside className="howit__steps">
            {Object.keys(step).map((key) => {
              const current = step[key];
              return (
                <HowItStep
                  key={key}
                  step={current.step}
                  title={current.title}
                  text={current.text}
                />
              );
            })}
          </aside>
        </div>
      </div>
    </section>
  );
};
