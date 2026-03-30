# Assembly: Endgame

A fun, React-based word-guessing game (Hangman-style) where you must save the programming world from being forced to code in Assembly!

## Project Overview

*   **Goal:** Guess the hidden word letter by letter.
*   **Attempts:** You have 8 attempts (represented by 8 programming languages).
*   **Consequence:** Each wrong guess "eliminates" a programming language. If all languages are gone, you lose and "Assembly" takes over.
*   **Technologies:** React 19, Vite, CSS3.
*   **Dependencies:** `clsx` for dynamic class management, `react-confetti` for victory celebrations.

## Architecture & Structure

The project follows a modular component-based architecture to ensure legibility and maintainability.

*   `src/App.jsx`: The Orchestrator. Manages high-level game state and derived logic using `useMemo` and `useCallback`.
*   `src/components/`:
    *   `StatusSection.jsx`: Renders win/loss/farewell messages.
    *   `LanguageChips.jsx`: Renders the programming language lives.
    *   `WordDisplay.jsx`: Renders the hidden word blanks and revealed letters.
    *   `Keyboard.jsx`: Renders the interactive alphabet keys.
    *   `AriaStatus.jsx`: Manages accessible announcements for screen readers.
*   `src/constants.js`: Holds static values like the alphabet.
*   `src/languages.js`: Defines the list of programming languages and their styles.
*   `src/words.js`: The dictionary of potential words.
*   `src/utils.js`: Helper functions for word generation and text logic.
*   `src/index.css`: Centralized styles using Flexbox and specific utility classes.

## Building and Running

The project uses Vite for development and building.

*   **Development:** `npm run dev` (or `pnpm dev`)
*   **Build:** `npm run build`
*   **Linting:** `npm run lint`
*   **Preview Build:** `npm run preview`

## Development Conventions

*   **State Management:** Uses React `useState` for game flow and letter tracking.
*   **Styling:** Pure CSS with a focus on Flexbox and Grid. Uses the `clsx` utility for conditional styling (e.g., marking correct/wrong letters on the keyboard).
*   **Accessibility:** Includes `aria-live` regions and `role="status"` to ensure screen readers announce game updates (correct/incorrect guesses, attempts left).
*   **Clean Code:** Logic is separated into utilities and data files to keep the main component focused on rendering and user interaction.

## Key Features

*   **Dynamic Keyboard:** Letters change color based on whether they were correct or incorrect guesses.
*   **Farewell Messages:** Randomized humorous messages when a language is "lost".
*   **Responsive Design:** Styled to work across different screen sizes.
*   **Win/Loss States:** Clear visual feedback with "You Win" (Confetti) and "Game Over" messages.
