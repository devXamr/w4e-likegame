
import {checkGuess} from "./game-helpers.ts";
import {range} from "./utils.ts";

export default function SingleGuessRow({word = '', answer, correctSetter}) {

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
            className={`${result && result[eachNum].status === 'misplaced' && 'bg-amber-600'} ${result && result[eachNum].status === 'incorrect' && 'bg-red-600'} ${result && result[eachNum].status === 'correct' && 'bg-green-600'} text-center pt-2 min-w-5 min-h-5 h-10 w-10  ring-1 ring-black mx-3 my-3 font-bold text-white`}>{word[eachNum] ? word[eachNum] : undefined}
        </div>)}

    </div>
}
