import iguanaHero from '../assets/iguana.png'

function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow">Iguana</p>
          <h1>Awesome website for everything kids.</h1>
          <p className="lead">
            This is a place to share funny things and Minecraft secrets. No
            parents allowed!
          </p>
          <div className="tag-row">
            <span className="tag">Kids Only</span>
            <span className="tag">Funny Stuff</span>
            <span className="tag">Minecraft</span>
            <span className="tag">YouTube</span>
            <span className="tag">Books</span>
          </div>
        </div>
        <img className="hero-image" src={iguanaHero} alt="Iguana mascot" />
      </section>
    </div>
  )
}

export default Home
