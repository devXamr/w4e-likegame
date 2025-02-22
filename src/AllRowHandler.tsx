import SingleGuessRow from "./SingleGuessRow.tsx";

import {range} from './utils.ts'
import {RowHandlerTypes} from "./types.ts";

export default function AllRowHandler({maxNum, content, correctSetter}: RowHandlerTypes){

    const answer  = 'SNOWY'

    return <div className='mx-auto w-fit mt-11'>
        {range(maxNum).map(eachNum => <SingleGuessRow correctSetter={correctSetter} answer={answer} word={content[eachNum] ? content[eachNum].guess : undefined} key={content[eachNum] ? content[eachNum].id: eachNum}/>)}


    </div>



}