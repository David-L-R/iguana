import animalsAddon from '../assets/minecraft/animals.jpg'
import netherite from '../assets/minecraft/netherite.webp'
import nameTag from '../assets/minecraft/nametag.webp'

const minecraftTips = [
  {
    title: 'Cool Add-On: Animals 3.2',
    text:
      'So many animals! You can build a huge zoo (but not bigger than mine).',
    image: animalsAddon,
  },
  {
    title: 'Netherite',
    text: 'You think diamond is the strongest, right? Nope. It is netherite!',
    image: netherite,
  },
  {
    title: 'Name Tag',
    text:
      'If you do not name-tag your favorite animals, they can disappear and break your heart, especially your dog.',
    image: nameTag,
  },
]

function Minecraft() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Minecraft</h1>
        <p>
          Best tips and tricks, secrets, and cool stuff you can build (or
          destroy).
        </p>
      </div>

      <section className="grid">
        {minecraftTips.map((tip) => (
          <article key={tip.title} className="card">
            <img className="card-image" src={tip.image} alt={tip.title} />
            <h3>{tip.title}</h3>
            <p>{tip.text}</p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default Minecraft
