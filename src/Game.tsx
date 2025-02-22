import GuessInput from "./GuessInput.tsx";
import {use, useState} from "react";

export default function Game(){
    const [guessList, setGuessList] = useState([])



    return <div>
        <div>
            {guessList.map(eachItem => <div key={eachItem.id}>{eachItem.guess}</div>)}
        </div>
        <GuessInput listAdder={setGuessList}/>
    </div>
}