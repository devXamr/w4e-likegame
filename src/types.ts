export interface Guess {
    guess: string,
    id: string,
}

export interface RowHandlerTypes {
    maxNum : number,
    content: { guess: string, id: string }[],
    correctSetter: (value: (((prevState: boolean) => boolean) | boolean)) => void,
}

export interface GuessInputProps {
    listAdder:  (value: (((prevState: Guess[]) => Guess[]) | Guess[])) => void,
    countIncrementer:  (value: (((prevState: number) => number) | number)) => void,
    count: number,
    earlyFound: boolean
}

export interface SingleGuessRowProps {
    word: string | undefined,
    answer: string,
    correctSetter: (value: (((prevState: boolean) => boolean) | boolean)) => void,
}