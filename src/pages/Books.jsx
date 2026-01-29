import dogMan from '../assets/books/dog man.jpg'
import helpZoo from '../assets/books/help direren tuin.jpg'
import superDiaperBaby from '../assets/books/super diaper baby.jpg'

const books = [
  {
    title: 'Dog Man',
    text:
      'A super funny comic adventure about a half-dog, half-cop hero who fights crime and learns about friendship.',
    image: dogMan,
  },
  {
    title: 'Help, We Hebben een Dierentuin',
    text: 'A wild zoo story full of surprises and animal chaos.',
    image: helpZoo,
  },
  {
    title: 'Super Diaper Baby',
    text: 'A tiny hero with big powers saving the day in epic ways.',
    image: superDiaperBaby,
  },
]

function Books() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Books</h1>
        <p>Books packed with laughs, action, and heroes for kids only.</p>
      </div>

      <section className="grid">
        {books.map((book) => (
          <article key={book.title} className="card">
            <img className="card-image" src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.text}</p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default Books
