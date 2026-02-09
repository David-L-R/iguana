import { useState } from "react";
import iguanaHero from "../assets/iguana.png";
import iguanaHeroAlt from "../assets/iguana2.jpg";
import iguanaHeroAltTwo from "../assets/iguana3.jpg";
import iguanaHeroAltThree from "../assets/iguana4.jpg";
import iguanaHeroAltFour from "../assets/iguana5.jpg";
import iguanaHeroAltFive from "../assets/iguana6.jpg";
import iguanaHeroAltSix from "../assets/iguana7.jpeg";
import iguanaHeroAltSeven from "../assets/iguana8.jpg";
import snakeHero from "../assets/snake.jpg";
import capybaraHero from "../assets/capybara.jpg";
import { useLanguage } from "../i18n/LanguageContext.jsx";

function Home() {
  const { copy } = useLanguage();
  const iguanas = [
    iguanaHero,
    iguanaHeroAlt,
    iguanaHeroAltTwo,
    iguanaHeroAltThree,
    iguanaHeroAltFour,
    iguanaHeroAltFive,
    iguanaHeroAltSix,
    iguanaHeroAltSeven,
    snakeHero,
    capybaraHero,
  ];
  const [iguanaIndex, setIguanaIndex] = useState(0);

  return (
    <div className='page'>
      <section className='hero'>
        <div className='hero-text'>
          <h1>{copy.home.title}</h1>
          <p className='lead'>{copy.home.lead}</p>
          <div className='tag-row'>
            {copy.home.tags.map((tag) => (
              <span key={tag} className='tag'>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <button
          type='button'
          className='hero-image-button'
          onClick={() =>
            setIguanaIndex((prev) => {
              if (iguanas.length <= 1) {
                return prev;
              }
              let next = Math.floor(Math.random() * iguanas.length);
              while (next === prev) {
                next = Math.floor(Math.random() * iguanas.length);
              }
              return next;
            })
          }
          aria-label={copy.home.toggleImageLabel}
        >
          <span className='hero-hint' aria-hidden='true'>
            {copy.home.clickMe}
          </span>
          <span className='hero-squiggle' aria-hidden='true' />
          <img
            className='hero-image'
            src={iguanas[iguanaIndex]}
            alt='Iguana mascot'
          />
        </button>
      </section>
    </div>
  );
}

export default Home;
