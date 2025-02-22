import GuessInput from "./GuessInput.tsx";
import {use, useEffect, useState} from "react";
import SingleGuessRow from "./SingleGuessRow.tsx";
import AllRowHandler from "./AllRowHandler.tsx";

export default function Game(){

    const NUM_OF_ROWS = 6


    const [guessList, setGuessList] = useState([])
    const [submitCount, setSubmitCount] = useState(0)
    const [correctFound, setCorrectFound] = useState(false)
    const [earlyFound, setEarlyFound] = useState(false)

    useEffect(() => {
        if(correctFound && submitCount <= 6){
            setEarlyFound(true)
        }
    }, [correctFound, submitCount]);

    function handleReset(e){
        e.preventDefault()
        setGuessList([])
        setSubmitCount(0)
        setCorrectFound(false)
        setEarlyFound(false)
    }

    return <div>

        <AllRowHandler maxNum={NUM_OF_ROWS} content={guessList} correctSetter={setCorrectFound} />


        <GuessInput listAdder={setGuessList} countIncrementer={setSubmitCount} count={submitCount}/>
        {earlyFound && <form onSubmit={(e) => handleReset(e)}>
            <div>you have found the answer in {submitCount} tries!</div>
            <button>okay!</button>
        </form>}

        {submitCount === 6 && !correctFound && <form onSubmit={(e) => handleReset(e)}>
            <div>You could not find the correct one</div>
            <button >okay!</button>
        </form> }

    </div>
}