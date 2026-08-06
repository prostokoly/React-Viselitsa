import { useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import KeyBoard from "./KeyBoard";

const getWord = () => {
    return words[Math.floor(Math.random() * words.length)];
};
function App() {
    const [wordToGuess, setWordToGuess] = useState(getWord);

    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const inCorrectedLetters = guessedLetters.filter(
        (letter) => !wordToGuess.includes(letter),
    );

    const isLoser = inCorrectedLetters.length >= 6;
    const isWinner = wordToGuess
        .split("")
        .every((letter) => guessedLetters.includes(letter));

    const addGuessedLetter = useCallback(
        (letter: string) => {
            if (guessedLetters.includes(letter)) return;
            setGuessedLetters((prev) => [...prev, letter]);
        },
        [guessedLetters],
    );

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key;
            if (!key.match(/^[а-яё]$/)) return;

            e.preventDefault();
            addGuessedLetter(key);
        };
        document.addEventListener("keypress", handler);
        return () => {
            document.removeEventListener("keypress", handler);
        };
    }, [guessedLetters]);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key;
            if (key !== "Enter") return;

            e.preventDefault();
            setGuessedLetters([]);
            setWordToGuess(getWord());
        };
        document.addEventListener("keypress", handler);
        return () => {
            document.removeEventListener("keypress", handler);
        };
    });

    console.log(wordToGuess);
    return (
        <div
            style={{
                maxWidth: "800px",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                margin: "0 auto",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    fontSize: "2rem",
                    textAlign: "center",
                }}
            >
                {isWinner && "Победа"}
                {isLoser && " ЛОХ - попробуй снова"}
            </div>
            <HangmanDrawing numberOfGuesses={inCorrectedLetters.length} />
            <HangmanWord
                reveal={isLoser}
                guessedLetters={guessedLetters}
                wordToGuess={wordToGuess}
            />
            <div
                style={{
                    alignSelf: "stretch",
                }}
            >
                <KeyBoard
                    disabled={isLoser || isWinner}
                    activeLetter={guessedLetters.filter((letter) =>
                        wordToGuess.includes(letter),
                    )}
                    inactiveLetter={inCorrectedLetters}
                    addGuessedLetter={addGuessedLetter}
                />
            </div>
        </div>
    );
}

export default App;
