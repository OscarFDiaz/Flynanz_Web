import mock from '../../assets/mock_hero.png';

export const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero__title">Personal finances made simple</h1>
      <h2 className="hero__subtitle">
        Be in control of your expenses and effectively manage your personal finances.
      </h2>
      <picture className="hero__picture">
        <img src={mock} alt="Flynanz mockup" />
      </picture>
    </section>
  );
};
