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
import artisImage from '../assets/votes/animals/Artis.jpg'
import centralParkZooImage from '../assets/votes/animals/central_park_zoo.jpg'
import pandaImage from '../assets/votes/animals/panda.jpeg'
import polarBearImage from '../assets/votes/animals/polar_bear.avif'
import pythonImage from '../assets/votes/animals/python.webp'
import boaImage from '../assets/votes/animals/boa.jpg'
import lionImage from '../assets/votes/animals/lion.webp'
import tigerImage from '../assets/votes/animals/tiger.webp'
import raccoonImage from '../assets/votes/animals/raccoon.jpeg'
import crocodileImage from '../assets/votes/animals/crocodile.webp'
import sharkImage from '../assets/votes/animals/shark.avif'

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
            type: 'quiz',
            text: copy.votes.q1,
            fact: copy.votes.gamesFact1,
            options: [
              {
                label: copy.votes.roblox,
                image: robloxImage,
                isCorrect: false,
              },
              {
                label: copy.votes.minecraft,
                image: minecraftImage,
                isCorrect: true,
              },
            ],
          },
          {
            type: 'quiz',
            text: copy.votes.q2,
            fact: copy.votes.gamesFact2,
            options: [
              {
                label: copy.votes.nintendo,
                image: nintendoImage,
                isCorrect: true,
              },
              {
                label: copy.votes.ps5,
                image: ps5Image,
                isCorrect: false,
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
        description: copy.votes.animalsDescription,
        image: animalsImage,
        questions: [
          {
            type: 'quiz',
            text: copy.votes.animalsQ1,
            fact: copy.votes.animalsFact1,
            options: [
              {
                label: copy.votes.artis,
                image: artisImage,
                isCorrect: true,
              },
              {
                label: copy.votes.centralParkZoo,
                image: centralParkZooImage,
                isCorrect: false,
              },
            ],
          },
          {
            type: 'quiz',
            text: copy.votes.animalsQ2,
            fact: copy.votes.animalsFact2,
            options: [
              {
                label: copy.votes.panda,
                image: pandaImage,
                isCorrect: false,
              },
              {
                label: copy.votes.polarBear,
                image: polarBearImage,
                isCorrect: true,
              },
            ],
          },
          {
            type: 'quiz',
            text: copy.votes.animalsQ3,
            fact: copy.votes.animalsFact3,
            options: [
              {
                label: copy.votes.python,
                image: pythonImage,
                isCorrect: true,
              },
              {
                label: copy.votes.boa,
                image: boaImage,
                isCorrect: false,
              },
            ],
          },
          {
            type: 'quiz',
            text: copy.votes.animalsQ4,
            fact: copy.votes.animalsFact4,
            options: [
              {
                label: copy.votes.lion,
                image: lionImage,
                isCorrect: false,
              },
              {
                label: copy.votes.tiger,
                image: tigerImage,
                isCorrect: true,
              },
            ],
          },
          {
            type: 'quiz',
            text: copy.votes.animalsQ5,
            fact: copy.votes.animalsFact5,
            options: [
              {
                label: copy.votes.panda,
                image: pandaImage,
                isCorrect: false,
              },
              {
                label: copy.votes.raccoon,
                image: raccoonImage,
                isCorrect: true,
              },
            ],
          },
          {
            type: 'quiz',
            text: copy.votes.animalsQ6,
            fact: copy.votes.animalsFact6,
            options: [
              {
                label: copy.votes.crocodile,
                image: crocodileImage,
                isCorrect: true,
              },
              {
                label: copy.votes.shark,
                image: sharkImage,
                isCorrect: false,
              },
            ],
          },
        ],
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
  const isQuiz = currentQuestion?.type === 'quiz'
  const quizTotal = useMemo(
    () => questionnaire.questions.filter((question) => question.type === 'quiz')
      .length,
    [questionnaire.questions],
  )
  const quizScore = useMemo(
    () =>
      questionnaire.questions.reduce((count, question, index) => {
        if (question.type !== 'quiz') {
          return count
        }
        const selectedOption = question.options?.[selections[index]]
        return selectedOption?.isCorrect ? count + 1 : count
      }, 0),
    [questionnaire.questions, selections],
  )

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

  const renderPercentResults = (question, selectedIndex) => (
    <div className="vote-results">
      {question.options.map((option, index) => (
        <div key={option.label} className="vote-option">
          <div className="vote-label">
            <span>
              {option.label}
              {selectedIndex === index ? (
                <span className="vote-you">{copy.votes.yourPick}</span>
              ) : null}
            </span>
            <span className="vote-percent">{option.percent}%</span>
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
  )

  const renderQuizResults = (question, selectedIndex) => {
    const selectedOption = question.options[selectedIndex]
    const correctOption = question.options.find((option) => option.isCorrect)
    const isCorrect = selectedOption?.isCorrect
    return (
      <div className="vote-results">
        <p className={`vote-feedback ${isCorrect ? 'is-correct' : 'is-wrong'}`}>
          {isCorrect ? copy.votes.correct : copy.votes.wrong}
          {correctOption
            ? ` ${copy.votes.correctAnswer} ${correctOption.label}`
            : ''}
        </p>
        {question.fact ? <p className="vote-fact">{question.fact}</p> : null}
      </div>
    )
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
                  isQuiz
                    ? renderQuizResults(currentQuestion, selections[currentIndex])
                    : renderPercentResults(
                        currentQuestion,
                        selections[currentIndex],
                      )
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
              {quizTotal > 0 ? (
                <p className="vote-score">
                  {copy.votes.scoreLabel} {quizScore}/{quizTotal}
                </p>
              ) : null}
              {questionnaire.questions.map((question, qIndex) => (
                <div key={question.text} className="vote-question">
                  <p className="vote-title">{question.text}</p>
                  {question.type === 'quiz'
                    ? renderQuizResults(question, selections[qIndex])
                    : renderPercentResults(question, selections[qIndex])}
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
