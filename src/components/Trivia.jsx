// import { useState } from "react"
import React, { useState, useEffect } from "react";
// import useSound from "use-sound";
// import play from "../assests/play.wav";
// import correct from "../assests/correct.wav";
// import wrong from "../assests/wrong.wav";
export default function Trivia({
    data,
    setStop,
    questionNumber,
    setQuestionNumber,



}) {
    const[question,setQuestion]=useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");
  // const[letsPlay]=useSound(play);
  // const[correctAnswer]=useSound(correct);
  // const[wrongAnswer]=useSound(wrong);
  
  /*useEffect(() => {
    letsPlay();
  }, [letsPlay ]); */



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
    delay(3000,()=>
      setClassName((prevClassName) =>
              a.correct ? `${prevClassName} correct` : `${prevClassName} wrong`
          )
    );
    delay(6000,()=>
    {
      if(a.correct) {
        setQuestionNumber((prev)=>prev+1);
        setSelectedAnswer(null);
      } else {
        setStop(true);
      }
    }
  );
       
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