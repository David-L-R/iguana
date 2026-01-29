import animalsAddon from '../assets/minecraft/animals.jpg'
import netherite from '../assets/minecraft/netherite.webp'
import nameTag from '../assets/minecraft/nametag.webp'
import { useLanguage } from '../i18n/LanguageContext.jsx'

function Minecraft() {
  const { copy } = useLanguage()
  const minecraftTips = [
    {
      title: 'Cool Add-On: Animals 3.2',
      text: copy.minecraft.tips.animals,
      image: animalsAddon,
    },
    {
      title: 'Netherite',
      text: copy.minecraft.tips.netherite,
      image: netherite,
    },
    {
      title: 'Name Tag',
      text: copy.minecraft.tips.nameTag,
      image: nameTag,
    },
  ]

  return (
    <div className="page">
      <div className="page-header">
        <h1>{copy.minecraft.title}</h1>
        <p>{copy.minecraft.intro}</p>
      </div>

      <section className="grid grid-media">
        {minecraftTips.map((tip) => (
          <article key={tip.title} className="card media-card">
            <img
              className="card-image media-image"
              src={tip.image}
              alt={tip.title}
            />
            <h3>{tip.title}</h3>
            <p>{tip.text}</p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default Minecraft
