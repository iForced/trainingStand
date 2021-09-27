import React, {useEffect, useState} from 'react';

export const UseEffectDemo = () => {
    console.log('component rendered')
    const [counter, setCounter] = useState<number>(0)
    const [fake, setFake] = useState<number>(0)

    useEffect(() => {
        console.log('useEffect on every rendering')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect on first rendering')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect on every counter changing')
        document.title = counter.toString()
    }, [counter])

    const increment = (value: number) => value + 1
    return (
        <div>
            <div>counter: {counter}, fake: {fake}</div>
            <button onClick={() => setCounter(increment)}>set counter</button>
            <button onClick={() => setFake(increment)}>set fake</button>
        </div>
    );
};
