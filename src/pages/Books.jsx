import dogMan from '../assets/books/dog man.jpg'
import helpZoo from '../assets/books/help direren tuin.jpg'
import superDiaperBaby from '../assets/books/super diaper baby.jpg'
import { useLanguage } from '../i18n/LanguageContext.jsx'

function Books() {
  const { copy } = useLanguage()
  const books = [
    {
      title: 'Dog Man',
      text: copy.books.items.dogMan,
      image: dogMan,
    },
    {
      title: 'Help, We Hebben een Dierentuin',
      text: copy.books.items.zoo,
      image: helpZoo,
    },
    {
      title: 'Super Diaper Baby',
      text: copy.books.items.diaper,
      image: superDiaperBaby,
    },
  ]

  return (
    <div className="page">
      <div className="page-header">
        <h1>{copy.books.title}</h1>
        <p>{copy.books.intro}</p>
      </div>

      <section className="grid">
        {books.map((book) => (
          <article key={book.title} className="card">
            <img className="card-image" src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.text}</p>
          </article>
        ))}
        <article className="card">
          <h3>{copy.books.article.title}</h3>
          <p>{copy.books.article.text}</p>
          <p>
            <a
              href="https://www.webeet.io/articles/stemming-vs-lemmatization-the-battle-of-the-word-choppers"
              target="_blank"
              rel="noreferrer"
            >
              {copy.books.article.linkLabel}
            </a>
          </p>
        </article>
      </section>
    </div>
  )
}

export default Books
