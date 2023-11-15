type stepType = {
  step: string;
  title: string;
  text: string;
};

export const HowItStep = ({ step, title, text }: stepType) => {
  return (
    <div className="steps">
      <div className="steps__number">{step}</div>
      <div className="steps__info">
        <h2 className="steps__title">{title}</h2>
        <p className="steps__text">{text}</p>
      </div>
    </div>
  );
};
