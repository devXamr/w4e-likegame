import SingleGuessRow from "./SingleGuessRow.tsx";

import {range} from './utils.ts'
export default function AllRowHandler({maxNum, content}){

    const answer  = 'SNOWY'

    return <div>
        {range(maxNum).map(eachNum => <SingleGuessRow answer={answer} word={content[eachNum] ? content[eachNum].guess: undefined} key={content[eachNum] ? content[eachNum].id: eachNum}/>)}


    </div>



}