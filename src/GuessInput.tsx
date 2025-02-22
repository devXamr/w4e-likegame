import {FormEvent, useState} from "react";
import {GuessInputProps} from "./types.ts";

export default function GuessInput({listAdder, countIncrementer, count, earlyFound}: GuessInputProps){
    const [guess, setGuess] = useState('')
    const [triggerError, setTriggerError] = useState(false)

    function handleGuessSubmission(e : FormEvent<HTMLFormElement>){
        e.preventDefault()

        if( guess.length < 5 || guess.length > 5){
            setTriggerError(true)
            return;
        } else if (guess.length === 5){
            setTriggerError(false)
            listAdder(prev => [...prev, {guess: guess, id: crypto.randomUUID()}])
            countIncrementer(prev => prev + 1)
            setGuess('')

        }


    }

    return <form onSubmit={(e) => {
       handleGuessSubmission(e)
    }} className='w-fit mx-auto mt-10'>
        <label className='text-xl font-light mr-5'>Enter guess:</label>
        <br/>

        <input autoFocus={true} disabled={count >= 6 || earlyFound} value={guess}  onChange={(e) => {setGuess((e.target.value).toUpperCase())}} type='text' min='5' max='5' className={`bg-gray-100 duration-200 w-fit min-w-[300px] py-3 mt-1 text-xl px-3 font-medium rounded-md disabled:bg-gray-50 disabled:cursor-not-allowed`}/>
        {triggerError && <div className='text-red-600'>The length should be 5</div>}
    </form>
}