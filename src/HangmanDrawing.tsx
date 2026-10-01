const HEAD = (
    <div
        key="head"
        className="hangman-head"
        style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            border: "10px solid black",
            position: "absolute",
            boxSizing: "border-box",
        }}
    />
);

const BODY = (
    <div
        key="body"
        className="hangman-body"
        style={{
            width: "10px",
            background: "black",
            position: "absolute",
        }}
    />
);

const RIGHT_ARM = (
    <div
        key="right-arm"
        className="hangman-r-arm"
        style={{
            width: "100px",
            height: "10px",
            background: "black",
            position: "absolute",
            rotate: "-30deg",
            transformOrigin: "left bottom",
        }}
    />
);

const LEFT_ARM = (
    <div
        key="left-arm"
        className="hangman-l-arm"
        style={{
            width: "100px",
            height: "10px",
            background: "black",
            position: "absolute",
            rotate: "30deg",
            transformOrigin: "right bottom",
        }}
    />
);

const RIGHT_LEG = (
    <div
        key="right-leg"
        className="hangman-r-leg"
        style={{
            width: "100px",
            height: "10px",
            background: "black",
            position: "absolute",
            rotate: "60deg",
            transformOrigin: "left top",
        }}
    />
);

const LEFT_LEG = (
    <div
        key="left-leg"
        className="hangman-l-leg"
        style={{
            width: "100px",
            height: "10px",
            background: "black",
            position: "absolute",
            rotate: "-60deg",
            transformOrigin: "right top",
        }}
    />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
    numberOfGuesses: number;
};

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
    return (
        <div className="hangman-wrapper">
            <style>{`
                .hangman-wrapper {
                    position: relative;
                    width: 100%;
                    max-width: 280px;
                    height: 410px;
                    margin: 0 auto;
                }
                
                /* Координаты человечка */
                .hangman-head { top: 50px; left: calc(50% - 25px); }
                .hangman-body { top: 100px; left: calc(50% - 5px); height: 100px; }
                .hangman-r-arm { top: 120px; left: 50%; }
                .hangman-l-arm { top: 120px; right: 50%; }
                .hangman-r-leg { top: 190px; left: 50%; }
                .hangman-l-leg { top: 190px; right: 50%; }

                /* Элементы деревянной конструкции */
                .line-rope { height: 50px; width: 10px; background: black; position: absolute; top: 0; left: calc(50% - 5px); }
                .line-top { height: 10px; width: 100px; background: black; position: absolute; top: 0; right: 50%; }
                .line-bar { height: 400px; width: 10px; background: black; position: absolute; top: 0; left: calc(50% - 100px); }
                .line-base { height: 10px; width: 200px; background: black; position: absolute; bottom: 0; left: calc(50% - 150px); }

                /* 📱 ИДЕАЛЬНОЕ СЖАТИЕ ДЛЯ СМАРТФОНОВ */
                @media (max-width: 600px) {
                    .hangman-wrapper {
                        height: 240px;
                        transform: scale(0.55); /* Чуть сильнее сжимаем каркас */
                        transform-origin: top center;
                        margin-bottom: -150px;
                    }
                }
            `}</style>

            {BODY_PARTS.slice(0, numberOfGuesses)}

            {/* Вся конструкция теперь на классах вместо инлайн-стилей */}
            <div className="line-rope" />
            <div className="line-top" />
            <div className="line-bar" />
            <div className="line-base" />
        </div>
    );
};

export default HangmanDrawing;
