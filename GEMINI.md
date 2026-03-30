# Assembly: Endgame

A fun, React-based word-guessing game (Hangman-style) where you must save the programming world from being forced to code in Assembly!

## Project Overview

*   **Goal:** Guess the hidden word letter by letter.
*   **Attempts:** You have 8 attempts (represented by 8 programming languages).
*   **Consequence:** Each wrong guess "eliminates" a programming language. If all languages are gone, you lose and "Assembly" takes over.
*   **Technologies:** React 19, Vite, CSS3.
*   **Dependencies:** `clsx` for dynamic class management, `react-confetti` for victory celebrations.

## Architecture & Structure

*   `src/App.jsx`: The core component. Manages game state (word, guesses, status), keyboard input, and rendering.
*   `src/languages.js`: Defines the list of programming languages, their brand colors, and their order of "elimination".
*   `src/words.js`: A comprehensive list of potential words for the game.
*   `src/utils.js`: Utility functions for selecting random words and generating "farewell" messages for lost languages.
*   `src/index.css`: Contains all styling, including layout for the keyboard, language chips, and the word display.

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
