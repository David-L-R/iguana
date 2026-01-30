import marioMovie from "../assets/movies/mario.webp";
import paddingtonMovie from "../assets/movies/paddington.jpg";
import spidermanMovie from "../assets/movies/spiderman.jpg";
import legoMovie from "../assets/movies/lego.webp";
import rutgerThomas from "../assets/movies/rutger_thomas.jpg";
import minecraftMovie from "../assets/movies/minecraft.jpg";
import jurassicPark from "../assets/movies/jurassic park.jpg";
import { useLanguage } from "../i18n/LanguageContext.jsx";

function Movies() {
  const { copy } = useLanguage();
  const movies = [
    {
      title: "The LEGO Movie",
      text: copy.movies.items.lego,
      image: legoMovie,
      url: "https://www.imdb.com/title/tt1490017/",
    },
    {
      title: "Rutger, Thomas and Paco",
      text: copy.movies.items.rutger,
      image: rutgerThomas,
      url: "https://www.imdb.com/title/tt36650010/",
    },
    {
      title: "Minecraft Movie",
      text: copy.movies.items.minecraft,
      image: minecraftMovie,
      url: "https://www.imdb.com/title/tt3566834/",
    },
    {
      title: "Jurassic Park",
      text: copy.movies.items.jurassic,
      image: jurassicPark,
      url: "https://www.imdb.com/title/tt0107290/",
    },
  ];

  return (
    <div className='page'>
      <div className='page-header'>
        <h1>{copy.movies.title}</h1>
        <p>{copy.movies.intro}</p>
      </div>

      <section className='grid'>
        {movies.map((movie) => (
          <a
            key={movie.title}
            className='card youtube-card'
            href={movie.url}
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='card-image youtube-image'
              src={movie.image}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>{movie.text}</p>
          </a>
        ))}
      </section>
    </div>
  );
}

export default Movies;
