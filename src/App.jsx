import { useState } from 'react'
import { languages } from './languages'
import { clsx } from 'clsx'
import { getFarewellText, getRandomWord } from './utils'
import Confetti from 'react-confetti'

export default function App() {
  const [currentWord, setCurrentWord] = useState(() => getRandomWord())
  const [guessedLetters, setGuessedLetters] = useState([])

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length

  const isGameWon = currentWord
    .split('')
    .every((letter) => guessedLetters.includes(letter))

  const numGuessesLeft = languages.length - 1

  const isGameLost = wrongGuessCount === numGuessesLeft

  const isGameOver = isGameWon || isGameLost

  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]

  const isLastGuessIncorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter)

  const addGuessedLetter = (letter) => {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    )
  }

  const startNewGame = () => {
    setCurrentWord(getRandomWord())
    setGuessedLetters([])
  }

  const languageElements = languages.map((language, index) => {
    const isWrong = index < wrongGuessCount

    const classNames = clsx('chip', isWrong && 'lost')

    const styles = {
      backgroundColor: language.backgroundColor,
      color: language.color,
    }

    return (
      <span key={language.name} className={classNames} style={styles}>
        {language.name}
      </span>
    )
  })

  const letterElements = currentWord.split('').map((letter, index) => {
    const shouldRevealLetter = isGameLost || guessedLetters.includes(letter)
    const className = clsx(
      isGameLost && !guessedLetters.includes(letter) && 'missed-letter'
    )

    return (
      <span className={className} key={index}>
        {shouldRevealLetter ? letter.toUpperCase() : ''}
      </span>
    )
  })

  const keyboardElements = alphabet.split('').map((letter) => {
    const guessedLetter = guessedLetters.includes(letter)
    const correctLetter = guessedLetter && currentWord.includes(letter)
    const isWrongLetter = guessedLetter && !currentWord.includes(letter)
    const className = clsx({
      correct: correctLetter,
      wrong: isWrongLetter,
    })

    return (
      <button
        className={className}
        onClick={() => addGuessedLetter(letter)}
        key={letter}
        disabled={guessedLetters.includes(letter) || isGameOver}
        aria-disabled={isGameOver}
        aria-label={`Letter ${letter}`}
      >
        {letter.toUpperCase()}
      </button>
    )
  })

  const gameStatusClass = clsx('game-status', {
    won: isGameWon,
    lost: isGameLost,
    farewell: !isGameOver && isLastGuessIncorrect,
  })

  const renderGameStatus = () => {
    if (!isGameOver && isLastGuessIncorrect) {
      return (
        <p className='farewell-message'>
          {getFarewellText(languages[wrongGuessCount - 1].name)}
        </p>
      )
    }

    if (isGameWon) {
      return (
        <>
          <h2>You win!</h2>
          <p>Well done! 🎉</p>
        </>
      )
    }
    if (isGameLost) {
      return (
        <>
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      )
    }

    return null
  }

  return (
    <main>
      {isGameWon && <Confetti recycle={false} numberOfPieces={1000} />}
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>

      <section className={gameStatusClass} aria-live='polite' role='status'>
        {renderGameStatus()}
      </section>

      <section className='language-chips'>{languageElements}</section>

      <section className='word'>{letterElements}</section>

      {/* Combined visually-hidden aria-live region for status updates */}
      <section className='sr-only' aria-live='polite' role='status'>
        <p>
          {currentWord.includes(lastGuessedLetter)
            ? `Correct! The letter ${lastGuessedLetter} is in the word.`
            : `Sorry, the letter ${lastGuessedLetter} is not in the word.`}
          You have {numGuessesLeft} attempts left.
        </p>
        <p>
          Current word:{' '}
          {currentWord
            .split('')
            .map((letter) =>
              guessedLetters.includes(letter) ? letter + '.' : 'blank.'
            )
            .join(' ')}
        </p>
      </section>

      <section className='keyboard'>{keyboardElements}</section>

      {isGameOver && (
        <button onClick={startNewGame} className='new-game'>
          New Game
        </button>
      )}
    </main>
  )
}
