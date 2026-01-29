import iguanaHero from '../assets/iguana.png'
import { useLanguage } from '../i18n/LanguageContext.jsx'

function Home() {
  const { copy } = useLanguage()

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
        <img className="hero-image" src={iguanaHero} alt="Iguana mascot" />
      </section>
    </div>
  )
}

export default Home
