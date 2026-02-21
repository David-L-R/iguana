import { useLanguage } from "../i18n/LanguageContext.jsx";
import dogPants from "../assets/memes/dog pants.jpeg";
import girafTie from "../assets/memes/giraf tie.jpeg";
import manPants from "../assets/memes/man pants.gif";
import octopusPants from "../assets/memes/octopus pants.jpeg";
import amongUsTwerk from "../assets/memes/among-us-twerk.gif";

function Memes() {
  const { copy } = useLanguage();
  const memes = [
    {
      title: copy.memes.amongUs,
      image: amongUsTwerk,
    },
    {
      title: copy.memes.dogPants,
      image: dogPants,
    },
    {
      title: copy.memes.girafeTie,
      image: girafTie,
    },
    {
      title: copy.memes.manPants,
      image: manPants,
    },
    {
      title: copy.memes.octopus,
      image: octopusPants,
    },
    {
      title: copy.memes.spiderfart,
      embedUrl: "https://www.youtube.com/embed/9WFE6Htk_Bk?si=VGrg4oCLlCpLj903",
    },
    {
      title: "YouTube Meme",
      embedUrl: "https://www.youtube.com/embed/hJBWhLq8xgM?si=QguG5j4Io6wxxqpv",
    },
  ];

  return (
    <div className='page'>
      <div className='page-header'>
        <h1>{copy.memes.title}</h1>
        <p>{copy.memes.intro}</p>
      </div>

      <section className='grid grid-media'>
        {memes.map((meme, index) => (
          <article key={`${meme.title}-${index}`} className='card media-card'>
            <h3>{meme.title}</h3>
            {meme.image ? (
              <img
                className='card-image media-image'
                src={meme.image}
                alt={meme.title}
              />
            ) : (
              <div className='video-frame'>
                <iframe
                  src={meme.embedUrl}
                  title={`${meme.title} video`}
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  referrerPolicy='strict-origin-when-cross-origin'
                  allowFullScreen
                />
              </div>
            )}
          </article>
        ))}
      </section>
    </div>
  );
}

export default Memes;
