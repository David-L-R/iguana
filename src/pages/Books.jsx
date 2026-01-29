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

      <section className="grid grid-media">
        {books.map((book) => (
          <article key={book.title} className="card media-card">
            <img
              className="card-image media-image"
              src={book.image}
              alt={book.title}
            />
            <h3>{book.title}</h3>
            <p>{book.text}</p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default Books
