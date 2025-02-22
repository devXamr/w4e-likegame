export function range(end:  number, start? : number){

    if (!start){
        start = 0
    }
    // 1 to 5 -> 1 to 4
    const arr = []

    for(let i = start; i < end; i++){
        arr.push(i)
    }

    return arr;
}