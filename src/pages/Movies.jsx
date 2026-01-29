import rutgerThomas from '../assets/movies/rutger_thomas.jpg'
import minecraftMovie from '../assets/movies/minecraft.jpg'
import jurassicPark from '../assets/movies/jurassic park.jpg'

const movies = [
  {
    title: 'Rutger, Thomas and Paco',
    text: 'A fun friendship adventure with lots of laughs and surprises.',
    image: rutgerThomas,
    url: 'https://www.imdb.com/title/tt36650010/',
  },
  {
    title: 'Minecraft Movie',
    text: 'Crafting, chaos, and blocky action in a world of builds.',
    image: minecraftMovie,
    url: 'https://www.imdb.com/title/tt3566834/',
  },
  {
    title: 'Jurassic Park',
    text: 'Dinosaurs, danger, and a legendary adventure on a wild island.',
    image: jurassicPark,
    url: 'https://www.imdb.com/title/tt0107290/',
  },
]

function Movies() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Movies</h1>
        <p>The coolest movies if you are not a stinky adult.</p>
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
