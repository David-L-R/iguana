import { useLanguage } from '../i18n/LanguageContext.jsx'
import { NavLink } from 'react-router-dom'
import gamesImage from '../assets/votes/games/games.avif'
import youtubeImage from '../assets/votes/youtube_channels/youtube.svg'
import booksImage from '../assets/votes/books/books.webp'
import foodsImage from '../assets/votes/foods/foods.webp'
import vehiclesImage from '../assets/votes/vehicles/cybertruck.webp'
import animalsImage from '../assets/votes/animals/animals.avif'

function Votes() {
  const { copy } = useLanguage()
  const questionnaires = [
    {
      slug: 'games',
      title: copy.votes.games,
      description: copy.votes.gamesDescription,
      image: gamesImage,
    },
    {
      slug: 'youtube-channels',
      title: copy.votes.youtube,
      description: copy.votes.comingSoon,
      image: youtubeImage,
    },
    {
      slug: 'books',
      title: copy.votes.booksCategory,
      description: copy.votes.comingSoon,
      image: booksImage,
    },
    {
      slug: 'foods',
      title: copy.votes.foods,
      description: copy.votes.comingSoon,
      image: foodsImage,
    },
    {
      slug: 'vehicles',
      title: copy.votes.vehicles,
      description: copy.votes.comingSoon,
      image: vehiclesImage,
    },
    {
      slug: 'animals',
      title: copy.votes.animals,
      description: copy.votes.animalsDescription,
      image: animalsImage,
    },
  ]

  return (
    <div className="page">
      <div className="page-header">
        <h1>{copy.votes.title}</h1>
        <p>{copy.votes.intro}</p>
      </div>

      <section className="grid grid-three">
        {questionnaires.map((item) => (
          <NavLink
            key={item.slug}
            to={`/votes/${item.slug}`}
            className="card vote-card-link"
          >
            <img className="card-image" src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </NavLink>
        ))}
      </section>
    </div>
  )
}

export default Votes
