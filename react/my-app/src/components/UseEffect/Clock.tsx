import React, {useEffect, useState} from "react";
import internal from "stream";



const getTwoNumber = (num: number) => num < 10 ? '0' + num : num

export const Clock = () => {

    const [date, setDate] = useState(new Date())


    useEffect(() => {

        const intervalID=setInterval(() => {
            setDate(new Date());
        }, 1000);

        return ()=>{
            clearInterval(intervalID)
        }

    }, [])


    const hours = getTwoNumber(date.getHours())
    const minutes = getTwoNumber(date.getMinutes())
    const seconds = getTwoNumber(date.getSeconds())

    return <>
        {hours}:{minutes}:{seconds}
    </>
}


