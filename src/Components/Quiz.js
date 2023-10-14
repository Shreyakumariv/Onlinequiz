import React, { useState } from 'react'
import QuizData from '../Data/QuizData'
import QuizResult from './QuizResult';
function Quiz() {
    const [currentQues, setcurrentQues] = useState(0)
    const [score, setscore] = useState(0);
    const [clickopt, setclickopt] = useState(0)
    const [showResult, setshowResult] = useState(false);
    const changeQues = () => {
        updateScore()
        if (currentQues < QuizData.length - 1) {
            setcurrentQues(currentQues + 1);
            setclickopt(0)
        } else {
            setshowResult(true)
        }
    }
    const updateScore = () => {
        if (clickopt === QuizData[currentQues].answer) {
            setscore(score + 1);
        }

    }
    const resetAll = () => {
        setshowResult(false)
        setcurrentQues(0)
        setclickopt(0)
        setscore(0)
    }
    return (
        <div>
            <p className="heading-txt">Quiz App</p>
            <div className="container">
                {showResult ? (
                    <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll} />
                ) : (
                    <>
                        <div className="question">
                            <span id='question-number' >{currentQues + 1}.</span>
                            <span id='question-txt' >{QuizData[currentQues].question}</span>
                        </div>
                        <div className="option-container">
                            {QuizData[currentQues].options.map((option, i) => {
                                return (
                                    <button className={`option-btn ${clickopt == i + 1 ? "checked" : null}`} key={i}
                                        onClick={() => setclickopt(i + 1)}
                                    >
                                        {option}
                                    </button>
                                )
                            })}
                        </div>
                        <input type='button' value="Next" id='next-button' onClick={changeQues} />
                    </>)}
            </div>
        </div>
    )
}

export default Quiz
