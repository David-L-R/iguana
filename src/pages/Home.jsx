import { useState } from 'react'
import iguanaHero from '../assets/iguana.png'
import iguanaHeroAlt from '../assets/iguana2.jpg'
import iguanaHeroAltTwo from '../assets/iguana3.jpg'
import { useLanguage } from '../i18n/LanguageContext.jsx'

function Home() {
  const { copy } = useLanguage()
  const iguanas = [iguanaHero, iguanaHeroAlt, iguanaHeroAltTwo]
  const [iguanaIndex, setIguanaIndex] = useState(() =>
    Math.floor(Math.random() * iguanas.length),
  )

  return (
    <div className="page">
      <section className="hero">
        <div className="hero-text">
          <h1>{copy.home.title}</h1>
          <p className="lead">
            {copy.home.lead}
          </p>
          <div className="tag-row">
            {copy.home.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="hero-image-button"
          onClick={() =>
            setIguanaIndex((prev) => (prev + 1) % iguanas.length)
          }
          aria-label="Toggle iguana image"
        >
          <img
            className="hero-image"
            src={iguanas[iguanaIndex]}
            alt="Iguana mascot"
          />
        </button>
      </section>
    </div>
  )
}

export default Home
