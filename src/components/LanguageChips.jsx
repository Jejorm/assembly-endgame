import { languages } from '../languages'
import { clsx } from 'clsx'

export default function LanguageChips({ wrongGuessCount }) {
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

    return (
        <section className='language-chips'>
            {languageElements}
        </section>
    )
}
