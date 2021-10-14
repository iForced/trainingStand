import {useEffect, useState} from "react";

export const UseEffectClock = () => {

    const [time, setTime] = useState<Date>(new Date())

    useEffect(() => {
        console.log('effect fired')
        const intervalID = setInterval(() => {
            setTime(new Date())
            console.log('tic')
        }, 1000)

        return () => {
            clearInterval(intervalID)
            console.log('effect cleared')
        }
    }, [])

    return (
        <div>
            {`${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`}
        </div>
    )
}