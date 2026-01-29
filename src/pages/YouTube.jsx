import haminations from '../assets/youtube/hamination.jpeg'
import aCookieGod from '../assets/youtube/acookiegod.jpg'
import timonVerbeeck from '../assets/youtube/timon-verbeeck.jpeg'

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
  return (
    <div className="page">
      <div className="page-header">
        <h1>YouTube</h1>
        <p>Top channels for kids who love laughs, builds, and chaos.</p>
      </div>

      <section className="grid">
        {channels.map((channel) => (
          <a
            key={channel.name}
            className="card youtube-card"
            href={channel.url}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="card-image youtube-image"
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
