import GuessInput from "./GuessInput.tsx";
import {use, useState} from "react";

export default function Game(){
    const [guessList, setGuessList] = useState([])



    return <div>
        <div>
            {guessList.map(eachItem => <p key={eachItem.id}>{eachItem.guess}</p>)}
        </div>
        <GuessInput listAdder={setGuessList}/>
    </div>
}