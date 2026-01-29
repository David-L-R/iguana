import marioMovie from '../assets/movies/mario.webp'
import paddingtonMovie from '../assets/movies/paddington.jpg'
import spidermanMovie from '../assets/movies/spiderman.jpg'
import legoMovie from '../assets/movies/lego.webp'
import { useLanguage } from '../i18n/LanguageContext.jsx'

function Movies() {
  const { copy } = useLanguage()
  const movies = [
    {
      title: 'The Super Mario Bros. Movie',
      text: copy.movies.items.mario,
      image: marioMovie,
      url: 'https://www.imdb.com/title/tt6718170/',
    },
    {
      title: 'Paddington',
      text: copy.movies.items.paddington,
      image: paddingtonMovie,
      url: 'https://www.imdb.com/title/tt1109624/',
    },
    {
      title: 'Spider-Man: Into the Spider-Verse',
      text: copy.movies.items.spider,
      image: spidermanMovie,
      url: 'https://www.imdb.com/title/tt4633694/',
    },
    {
      title: 'The LEGO Movie',
      text: copy.movies.items.lego,
      image: legoMovie,
      url: 'https://www.imdb.com/title/tt1490017/',
    },
  ]

  return (
    <div className="page">
      <div className="page-header">
        <h1>{copy.movies.title}</h1>
        <p>{copy.movies.intro}</p>
      </div>

      <section className="grid">
        {movies.map((movie) => (
          <a
            key={movie.title}
            className="card youtube-card"
            href={movie.url}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="card-image youtube-image"
              src={movie.image}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>{movie.text}</p>
          </a>
        ))}
      </section>
    </div>
  )
}

export default Movies
