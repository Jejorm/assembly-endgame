import { ALPHABET } from '../constants'
import { clsx } from 'clsx'

export default function Keyboard({ 
    onGuess, 
    wordLettersSet, 
    guessedLettersSet, 
    isGameOver 
}) {
    const keyboardElements = ALPHABET.split('').map((letter) => {
        const isGuessed = guessedLettersSet.has(letter)
        const isCorrect = isGuessed && wordLettersSet.has(letter)
        const isWrong = isGuessed && !wordLettersSet.has(letter)
        
        const className = clsx({
            correct: isCorrect,
            wrong: isWrong,
        })

        return (
            <button
                type='button'
                className={className}
                onClick={() => onGuess(letter)}
                key={letter}
                disabled={isGuessed || isGameOver}
                aria-disabled={isGameOver}
                aria-label={`Letter ${letter}`}
            >
                {letter.toUpperCase()}
            </button>
        )
    })

    return (
        <section className='keyboard'>
            {keyboardElements}
        </section>
    )
}
