import GuessInput from "./GuessInput.tsx";
import {use, useState} from "react";
import SingleGuessRow from "./SingleGuessRow.tsx";
import AllRowHandler from "./AllRowHandler.tsx";

export default function Game(){

    const NUM_OF_ROWS = 6


    const [guessList, setGuessList] = useState([])





    return <div>

        <AllRowHandler maxNum={NUM_OF_ROWS} content={guessList} />


        <GuessInput listAdder={setGuessList}/>
    </div>
}