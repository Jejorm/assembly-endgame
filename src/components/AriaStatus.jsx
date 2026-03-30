export default function AriaStatus({ 
    currentWord, 
    lastGuessedLetter, 
    guessedLettersSet, 
    numGuessesLeft, 
    wordLettersSet 
}) {
    if (!lastGuessedLetter) return null;

    const isCorrect = wordLettersSet.has(lastGuessedLetter);

    return (
        <section className='sr-only' aria-live='polite' role='status'>
            <p>
                {isCorrect
                    ? `Correct! The letter ${lastGuessedLetter} is in the word.`
                    : `Sorry, the letter ${lastGuessedLetter} is not in the word.`}
                You have {numGuessesLeft} attempts left.
            </p>
            <p>
                Current word:{' '}
                {currentWord
                    .map((item) =>
                        guessedLettersSet.has(item.value) ? `${item.value}.` : 'blank.'
                    )
                    .join(' ')}
            </p>
        </section>
    )
}
