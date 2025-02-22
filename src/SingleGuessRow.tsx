
import {checkGuess} from "./game-helpers.ts";
import {range} from "./utils.ts";
import {SingleGuessRowProps} from "./types.ts";

export default function SingleGuessRow({word = '', answer, correctSetter}: SingleGuessRowProps) {

    const result = checkGuess(word, answer)
    console.log(result)


    if (result !== null){
        const arr = result.filter(oneObj => oneObj.status === 'correct')
        if (arr.length === 5) {
            correctSetter(true)
        }

    }




    return <div className='flex'>

        {range(5).map(eachNum => <div
            key={eachNum}
            className={`${result && result[eachNum].status === 'misplaced' && 'bg-amber-600'} ${result && result[eachNum].status === 'incorrect' && 'bg-red-600'} ${result && result[eachNum].status === 'correct' && 'bg-green-600'} text-center  min-w-18 min-h-18 ring ring-gray-500 mx-1 my-1 rounded-sm flex flex-col justify-center font-bold text-white align-center text-2xl`}>{word[eachNum] ? <span>{word[eachNum]}</span> : undefined}
        </div>)}

    </div>
}
