import GuessInput from "./GuessInput.tsx";
import {use, useEffect, useState} from "react";
import SingleGuessRow from "./SingleGuessRow.tsx";
import AllRowHandler from "./AllRowHandler.tsx";
import {motion} from 'motion/react'

export default function Game(){

    const NUM_OF_ROWS = 6


    const [guessList, setGuessList] = useState([])
    const [submitCount, setSubmitCount] = useState(0)
    const [correctFound, setCorrectFound] = useState(false)
    const [earlyFound, setEarlyFound] = useState(false)

    useEffect(() => {
        if(correctFound && submitCount <= 6){
            setEarlyFound(true)
        }
    }, [correctFound, submitCount]);

    function handleReset(e){
        e.preventDefault()
        setGuessList([])
        setSubmitCount(0)
        setCorrectFound(false)
        setEarlyFound(false)
    }

    return <div className='md:overflow-hidden overflow-scroll h-screen w-screen'>

        <div className='text-center text-4xl font-bold border-b py-4 shadow-sm'>Wordle-ish.</div>

        <AllRowHandler maxNum={NUM_OF_ROWS} content={guessList} correctSetter={setCorrectFound} />


        <GuessInput listAdder={setGuessList} countIncrementer={setSubmitCount} count={submitCount} earlyFound={earlyFound}/>
        {earlyFound && <motion.form initial={{opacity: 0, y: 10}} animate={{opacity: 100, y: 0}} transition={{ease:'easeIn', duration: 0.4}} className='bg-green-600 rounded-lg w-fit mx-auto px-20 py-4 relative top-32 bottom-0' onSubmit={(e) => handleReset(e)}>
            <div className='text-2xl text-white font-medium'>You have found the answer in {submitCount} tries!</div>
            <div className='mx-auto w-fit'>
            <button className='bg-white text-green-600 px-2 py-1 text-sm font-bold animate-pulse hover:cursor-pointer rounded-md mt-2'>CONTINUE</button>
            </div>
        </motion.form>}

        {submitCount === 6 && !correctFound && <motion.form initial={{opacity: 0, y: 10}} animate={{opacity: 100, y: 0}}
                                                            transition={{ease: 'easeIn', duration: 0.4}} className='bg-red-600 rounded-lg w-fit mx-auto px-20 py-4 relative top-32 bottom-0'
                                                            onSubmit={(e) => handleReset(e)}>
            <div className='text-2xl text-white font-medium'>You could not find the correct word!</div>
            <div className='mx-auto w-fit'>
                <button
                    className='bg-white text-red-600 px-2 py-1 text-sm font-bold animate-pulse hover:cursor-pointer rounded-md mt-2'>CONTINUE
                </button>
            </div>
        </motion.form>}

    </div>
}