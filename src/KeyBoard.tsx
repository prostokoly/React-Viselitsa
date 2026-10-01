import styles from "./KeyBoard.module.css";
const KEYS = [
    "а",
    "б",
    "в",
    "г",
    "д",
    "е",
    "ё",
    "ж",
    "з",
    "и",
    "й",
    "к",
    "л",
    "м",
    "н",
    "о",
    "п",
    "р",
    "с",
    "т",
    "у",
    "ф",
    "х",
    "ц",
    "ч",
    "ш",
    "щ",
    "ъ",
    "ы",
    "ь",
    "э",
    "ю",
    "я",
];
type KeyBoardProps = {
    activeLetter: string[];
    inactiveLetter: string[];
    addGuessedLetter: (letter: string) => void;
    disabled?: boolean;
};
const KeyBoard = ({
    activeLetter,
    inactiveLetter,
    addGuessedLetter,
    disabled = false,
}: KeyBoardProps) => {
    return (
        <div className={styles.keyboardContainer}>
            {KEYS.map((key) => {
                const isActive = activeLetter.includes(key);
                const isInactive = inactiveLetter.includes(key);

                return (
                    <button
                        onClick={() => addGuessedLetter(key)}
                        className={`${styles.btn} 
                          ${isActive ? styles.active : ""}
                            ${isInactive ? styles.inactive : ""}`}
                        disabled={isActive || isInactive || disabled}
                        key={key}
                    >
                        {key}
                    </button>
                );
            })}
        </div>
    );
};

export default KeyBoard;
