import { languages } from '../languages'
import { getFarewellText } from '../utils'
import { clsx } from 'clsx'

export default function StatusSection({ 
    isGameOver, 
    isGameWon, 
    isGameLost, 
    isLastGuessIncorrect, 
    wrongGuessCount 
}) {
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
        <section className={gameStatusClass} aria-live='polite' role='status'>
            {renderGameStatus()}
        </section>
    )
}
