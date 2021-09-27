import React, {useEffect, useState} from 'react';

export const UseEffectWithInterval = () => {
    console.log('component rendered')

    const [time, setTime] = useState(new Date())

    useEffect(() => {

        setInterval(() => {
            setTime(new Date())
        }, 1000)

    }, [])

    return (
        <div>
            <div>{time.getHours()} : {time.getMinutes()} : {time.getSeconds()}</div>
        </div>
    );
};
