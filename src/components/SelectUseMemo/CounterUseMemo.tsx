import React, {useMemo, useState} from "react";

export const CounterUseMemo = () => {
    console.log('container rendered')

    const slow = () => {
        for (let i = 0; i < 10000000000; i++) {
        }
        return setA(a + 1)
    }
    const [a, setA] = useState<number>(1)
    const [b, setB] = useState<number>(1)
    return (
        <div>
            <div>{a}</div>
            <div>{b}</div>
            <button onClick={slow}>a</button>
            <button onClick={() => setB(b + 1)}>b</button>
        </div>
    )
}
