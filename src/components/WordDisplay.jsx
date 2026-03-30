import { clsx } from 'clsx'

export default function WordDisplay({ 
    currentWord, 
    isGameLost, 
    guessedLettersSet 
}) {
    const letterElements = currentWord.map((item) => {
        const isGuessed = guessedLettersSet.has(item.value)
        const shouldRevealLetter = isGameLost || isGuessed
        const className = clsx(
            isGameLost && !isGuessed && 'missed-letter'
        )

        return (
            <span className={className} key={item.id}>
                {shouldRevealLetter ? item.value.toUpperCase() : ''}
            </span>
        )
    })

    return (
        <section className='word'>
            {letterElements}
        </section>
    )
}
