import React, {useMemo, useState} from "react";


function generateData() {
    console.log('generateData')
    return 425458965135
}

export const UseState = () => {
    console.log('UseState')

    // const initValue = useMemo(generateData,[])

    const [counter, setCounter] = useState(generateData)

    // const changer = (state: number) => {
    //     return state + 1
    // }

    return <>
        <button onClick={() => setCounter(state=>state+1)}>+</button>
        {counter}
    </>
}


