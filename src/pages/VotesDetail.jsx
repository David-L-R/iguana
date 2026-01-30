import { useEffect, useMemo, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import gamesImage from '../assets/votes/games/games.avif'
import robloxImage from '../assets/votes/games/roblox.webp'
import minecraftImage from '../assets/votes/games/minecraft.jpg'
import nintendoImage from '../assets/votes/games/nintendo.jpeg'
import ps5Image from '../assets/votes/games/ps5.jpg'
import youtubeImage from '../assets/votes/youtube_channels/youtube.svg'
import booksImage from '../assets/votes/books/books.webp'
import foodsImage from '../assets/votes/foods/foods.webp'
import vehiclesImage from '../assets/votes/vehicles/cybertruck.webp'
import animalsImage from '../assets/votes/animals/animals.avif'

function VotesDetail() {
  const { copy } = useLanguage()
  const { slug } = useParams()

  const questionnaires = useMemo(
    () => [
      {
        slug: 'games',
        title: copy.votes.games,
        description: copy.votes.gamesDescription,
        image: gamesImage,
        questions: [
          {
            text: copy.votes.q1,
            options: [
              {
                label: copy.votes.roblox,
                percent: 48,
                image: robloxImage,
              },
              {
                label: copy.votes.minecraft,
                percent: 52,
                image: minecraftImage,
              },
            ],
          },
          {
            text: copy.votes.q2,
            options: [
              {
                label: copy.votes.nintendo,
                percent: 37,
                image: nintendoImage,
              },
              {
                label: copy.votes.ps5,
                percent: 63,
                image: ps5Image,
              },
            ],
          },
        ],
      },
      {
        slug: 'youtube-channels',
        title: copy.votes.youtube,
        description: copy.votes.comingSoon,
        image: youtubeImage,
        questions: [],
      },
      {
        slug: 'books',
        title: copy.votes.booksCategory,
        description: copy.votes.comingSoon,
        image: booksImage,
        questions: [],
      },
      {
        slug: 'foods',
        title: copy.votes.foods,
        description: copy.votes.comingSoon,
        image: foodsImage,
        questions: [],
      },
      {
        slug: 'vehicles',
        title: copy.votes.vehicles,
        description: copy.votes.comingSoon,
        image: vehiclesImage,
        questions: [],
      },
      {
        slug: 'animals',
        title: copy.votes.animals,
        description: copy.votes.comingSoon,
        image: animalsImage,
        questions: [],
      },
    ],
    [copy],
  )

  const questionnaire = questionnaires.find((item) => item.slug === slug)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selections, setSelections] = useState({})
  const [showAllResults, setShowAllResults] = useState(false)

  useEffect(() => {
    setCurrentIndex(0)
    setSelections({})
    setShowAllResults(false)
  }, [slug])

  if (!questionnaire) {
    return (
      <div className="page">
        <div className="page-header">
          <h1>{copy.votes.title}</h1>
          <p>{copy.votes.notFound}</p>
        </div>
      </div>
    )
  }

  const currentQuestion = questionnaire.questions[currentIndex]
  const hasVoted = selections[currentIndex] !== undefined

  const handleVote = (optionIndex) => {
    if (hasVoted) return
    setSelections((prev) => ({
      ...prev,
      [currentIndex]: optionIndex,
    }))
  }

  const handleNext = () => {
    if (currentIndex < questionnaire.questions.length - 1) {
      setCurrentIndex((prev) => prev + 1)
      return
    }
    setShowAllResults(true)
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1>{questionnaire.title}</h1>
        <p>{questionnaire.description}</p>
      </div>

      <section className="grid">
        <article className="card vote-card">
          {questionnaire.questions.length === 0 ? (
            <div className="vote-empty">
              <p className="vote-title">{copy.votes.noQuestions}</p>
              <p className="vote-hint">{copy.votes.comingSoon}</p>
              <NavLink className="vote-back" to="/votes">
                {copy.votes.backToVotes}
              </NavLink>
            </div>
          ) : !showAllResults ? (
            <div className="vote-questions">
              <div className="vote-question">
                <p className="vote-title">{currentQuestion.text}</p>
                {!hasVoted ? (
                  <p className="vote-hint">{copy.votes.pickOne}</p>
                ) : null}
                <div className="vote-options vote-choice-grid">
                  {currentQuestion.options.map((option, index) => (
                    <button
                      key={option.label}
                      type="button"
                      className={`vote-option-card ${
                        hasVoted ? 'is-disabled' : ''
                      }`}
                      onClick={() => handleVote(index)}
                    >
                      {option.image ? (
                        <img
                          className="vote-option-image"
                          src={option.image}
                          alt={option.label}
                        />
                      ) : null}
                      <span>{option.label}</span>
                    </button>
                  ))}
                </div>

                {hasVoted ? (
                  <div className="vote-results">
                    {currentQuestion.options.map((option, index) => (
                      <div key={option.label} className="vote-option">
                        <div className="vote-label">
                          <span>
                            {option.label}
                            {selections[currentIndex] === index ? (
                              <span className="vote-you">
                                {copy.votes.yourPick}
                              </span>
                            ) : null}
                          </span>
                          <span className="vote-percent">
                            {option.percent}%
                          </span>
                        </div>
                        <div className="vote-bar">
                          <div
                            className="vote-bar-fill"
                            style={{ width: `${option.percent}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}

                {hasVoted ? (
                  <button
                    type="button"
                    className="vote-next"
                    onClick={handleNext}
                  >
                    {currentIndex < questionnaire.questions.length - 1
                      ? copy.votes.next
                      : copy.votes.seeAll}
                  </button>
                ) : null}
              </div>
            </div>
          ) : (
            <div className="vote-questions">
              {questionnaire.questions.map((question, qIndex) => (
                <div key={question.text} className="vote-question">
                  <p className="vote-title">{question.text}</p>
                  <div className="vote-results">
                    {question.options.map((option, index) => (
                      <div key={option.label} className="vote-option">
                        <div className="vote-label">
                          <span>
                            {option.label}
                            {selections[qIndex] === index ? (
                              <span className="vote-you">
                                {copy.votes.yourPick}
                              </span>
                            ) : null}
                          </span>
                          <span className="vote-percent">
                            {option.percent}%
                          </span>
                        </div>
                        <div className="vote-bar">
                          <div
                            className="vote-bar-fill"
                            style={{ width: `${option.percent}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <NavLink className="vote-back" to="/votes">
                {copy.votes.backToVotes}
              </NavLink>
            </div>
          )}
        </article>
      </section>
    </div>
  )
}

export default VotesDetail
