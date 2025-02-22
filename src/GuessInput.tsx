import {useState} from "react";

export default function GuessInput({listAdder, countIncrementer, count}){
    const [guess, setGuess] = useState('')
    const [triggerError, setTriggerError] = useState(false)

    function handleGuessSubmission(e){
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
    }}>
        <label>Enter guess:</label>
        <input disabled={count >= 6} value={guess}  onChange={(e) => {setGuess((e.target.value).toUpperCase())}} type='text' min='5' max='5'/>
        {triggerError && <div className='text-red-600'>The length should be 5</div>}
    </form>
}