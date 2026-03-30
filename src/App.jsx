import { useState, useMemo, useCallback } from 'react'
import Confetti from 'react-confetti'
import { languages } from './languages'
import { generateNewWord } from './utils'

// Components
import StatusSection from './components/StatusSection'
import LanguageChips from './components/LanguageChips'
import WordDisplay from './components/WordDisplay'
import Keyboard from './components/Keyboard'
import AriaStatus from './components/AriaStatus'

export default function App() {
  const [currentWord, setCurrentWord] = useState(generateNewWord)
  const [guessedLetters, setGuessedLetters] = useState([])

  // --- DERIVED STATE (Optimized) ---

  const wordLettersSet = useMemo(() => 
    new Set(currentWord.map(item => item.value)), 
    [currentWord]
  )

  const guessedLettersSet = useMemo(() => 
    new Set(guessedLetters), 
    [guessedLetters]
  )

  const wrongGuessCount = useMemo(() => 
    guessedLetters.filter(letter => !wordLettersSet.has(letter)).length, 
    [guessedLetters, wordLettersSet]
  )

  const numGuessesLeft = languages.length - 1
  const isGameWon = currentWord.every(item => guessedLettersSet.has(item.value))
  const isGameLost = wrongGuessCount === numGuessesLeft
  const isGameOver = isGameWon || isGameLost

  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
  const isLastGuessIncorrect = lastGuessedLetter && !wordLettersSet.has(lastGuessedLetter)

  // --- HANDLERS (Optimized with useCallback) ---

  const addGuessedLetter = useCallback((letter) => {
    if (isGameOver) return;
    setGuessedLetters((prev) => 
      prev.includes(letter) ? prev : [...prev, letter]
    )
  }, [isGameOver])

  const startNewGame = () => {
    setCurrentWord(generateNewWord())
    setGuessedLetters([])
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

      <StatusSection 
        isGameOver={isGameOver}
        isGameWon={isGameWon}
        isGameLost={isGameLost}
        isLastGuessIncorrect={isLastGuessIncorrect}
        wrongGuessCount={wrongGuessCount}
      />

      <LanguageChips wrongGuessCount={wrongGuessCount} />

      <WordDisplay 
        currentWord={currentWord} 
        isGameLost={isGameLost} 
        guessedLettersSet={guessedLettersSet} 
      />

      {/* Visually-hidden aria-live region */}
      <AriaStatus 
        currentWord={currentWord}
        lastGuessedLetter={lastGuessedLetter}
        guessedLettersSet={guessedLettersSet}
        numGuessesLeft={numGuessesLeft - wrongGuessCount}
        wordLettersSet={wordLettersSet}
      />

      <Keyboard 
        onGuess={addGuessedLetter}
        wordLettersSet={wordLettersSet}
        guessedLettersSet={guessedLettersSet}
        isGameOver={isGameOver}
      />

      {isGameOver && (
        <button onClick={startNewGame} className='new-game' type='button'>
          New Game
        </button>
      )}
    </main>
  )
}
