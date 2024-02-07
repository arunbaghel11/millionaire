import React, { useState, useEffect } from "react";
// Import the sound files
import playSound from "../assests/play.wav";
import correctSound from "../assests/correct.wav";
import wrongSound from "../assests/wrong.wav";

export default function Trivia({
    data,
    setStop,
    questionNumber,
    setQuestionNumber,
}) {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");

    // Define audio elements for the sound effects
    const playAudio = new Audio(playSound);
    const correctAudio = new Audio(correctSound);
    const wrongAudio = new Audio(wrongSound);

    useEffect(() => {
        setQuestion(data[questionNumber - 1]);
    }, [data, questionNumber]);

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);
    };

    const handleClick = (a) => {
        setSelectedAnswer(a);
        setClassName("answer active");
        playAudio.play(); // Play sound when an answer is selected
        delay(3000, () => {
            setClassName((prevClassName) =>
                a.correct ? `${prevClassName} correct` : `${prevClassName} wrong`
            );
        });
        delay(6000, () => {
            if (a.correct) {
                correctAudio.play(); // Play sound for correct answer
                setQuestionNumber((prev) => prev + 1);
                setSelectedAnswer(null);
            } else {
                wrongAudio.play(); // Play sound for wrong answer
                setStop(true);
            }
        });
    };

    return (
        <div className="trivia">
            {question && (
                <>
                    <div className="question">{question.question}</div>
                    <div className="answers">
                        {question.answers.map((a) => (
                            <div
                                key={a.id}
                                className={selectedAnswer === a ? className : "answer"}
                                onClick={() => handleClick(a)}
                            >
                                {a.text}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
