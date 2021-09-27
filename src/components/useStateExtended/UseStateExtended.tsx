import React, {useState} from "react";

const difficultCounting = () => {
    console.log('difficult')
    //difficult counting
    return 1
}

export const UseStateExtended =() => {
    console.log('use state rendered')

    const [counter, setCounter] = useState(difficultCounting)

    const increment = (value: number) => value + 1

    return (
        <div>
            <button onClick={() => setCounter(increment)}>+</button>
            {counter}
        </div>
    )
}