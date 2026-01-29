import haminations from '../assets/youtube/hamination.jpeg'
import aCookieGod from '../assets/youtube/acookiegod.jpg'
import timonVerbeeck from '../assets/youtube/timon-verbeeck.jpeg'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const channels = [
  {
    name: 'Haminations',
    url: 'https://www.youtube.com/@Haminations',
    image: haminations,
  },
  {
    name: 'aCookieGod',
    url: 'https://www.youtube.com/@aCookieGod',
    image: aCookieGod,
  },
  {
    name: 'Timon Verbeeck',
    url: 'https://www.youtube.com/@TimonVerbeeck',
    image: timonVerbeeck,
  },
]

function YouTube() {
  const { copy } = useLanguage()

  return (
    <div className="page">
      <div className="page-header">
        <h1>{copy.youtube.title}</h1>
        <p>{copy.youtube.intro}</p>
      </div>

      <section className="grid grid-media">
        {channels.map((channel) => (
          <a
            key={channel.name}
            className="card youtube-card media-card"
            href={channel.url}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="card-image youtube-image media-image"
              src={channel.image}
              alt={`${channel.name} channel`}
            />
            <h3>{channel.name}</h3>
          </a>
        ))}
      </section>
    </div>
  )
}

export default YouTube
