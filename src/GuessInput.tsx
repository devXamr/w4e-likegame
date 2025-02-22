import {useState} from "react";

export default function GuessInput({listAdder}){
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
            setGuess('')

        }


    }

    return <form onSubmit={(e) => {
       handleGuessSubmission(e)
    }}>
        <label>Enter guess:</label>
        <input value={guess}  onChange={(e) => {setGuess((e.target.value).toUpperCase())}} type='text' min='5' max='5'/>
        {triggerError && <div className='text-red-600'>The length should be 5</div>}
    </form>
}