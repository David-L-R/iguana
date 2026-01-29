import rutgerThomas from '../assets/movies/rutger_thomas.jpg'
import minecraftMovie from '../assets/movies/minecraft.jpg'
import jurassicPark from '../assets/movies/jurassic park.jpg'
import { useLanguage } from '../i18n/LanguageContext.jsx'

function Movies() {
  const { copy } = useLanguage()
  const movies = [
    {
      title: 'Rutger, Thomas and Paco',
      text: copy.movies.items.rutger,
      image: rutgerThomas,
      url: 'https://www.imdb.com/title/tt36650010/',
    },
    {
      title: 'Minecraft Movie',
      text: copy.movies.items.minecraft,
      image: minecraftMovie,
      url: 'https://www.imdb.com/title/tt3566834/',
    },
    {
      title: 'Jurassic Park',
      text: copy.movies.items.jurassic,
      image: jurassicPark,
      url: 'https://www.imdb.com/title/tt0107290/',
    },
  ]

  return (
    <div className="page">
      <div className="page-header">
        <h1>{copy.movies.title}</h1>
        <p>{copy.movies.intro}</p>
      </div>

      <section className="grid grid-media">
        {movies.map((movie) => (
          <a
            key={movie.title}
            className="card youtube-card media-card"
            href={movie.url}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="card-image youtube-image media-image"
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
