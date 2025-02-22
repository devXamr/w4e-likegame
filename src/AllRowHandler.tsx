import SingleGuessRow from "./SingleGuessRow.tsx";

import {range} from './utils.ts'
export default function AllRowHandler({maxNum, content, correctSetter}){

    const answer  = 'SNOWY'

    return <div>
        {range(maxNum).map(eachNum => <SingleGuessRow correctSetter={correctSetter} answer={answer} word={content[eachNum] ? content[eachNum].guess: undefined} key={content[eachNum] ? content[eachNum].id: eachNum}/>)}


    </div>



}