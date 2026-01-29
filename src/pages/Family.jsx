const familyMoments = [
  'Sunday pancake breakfasts and kitchen dance parties.',
  'Weekend walks with silly jokes and big smiles.',
  'Game nights with teamwork, snacks, and friendly competition.',
]

function Family() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>My Family</h1>
        <p>
          My family is my team. We cheer each other on, help each other grow,
          and always make time for fun.
        </p>
      </div>

      <section className="grid two-col">
        <article className="card">
          <h3>Who is in my family?</h3>
          <p>
            Mom, Dad, me, and our awesome crew. We&apos;re a mix of jokes, hugs,
            and high fives.
          </p>
        </article>
        <article className="card">
          <h3>Favorite Family Moments</h3>
          <ul className="list">
            {familyMoments.map((moment) => (
              <li key={moment}>{moment}</li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  )
}

export default Family
