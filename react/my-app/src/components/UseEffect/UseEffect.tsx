import React, {useEffect, useState} from "react";


export const UseEffectExample = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('UseEffectExample')

    useEffect(() => {
        console.log('useEffect every render');
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)');
        document.title = counter.toString()
    },[])

    useEffect(() => {
        console.log('useEffect first render and every counter change');
        document.title = counter.toString()
    },[counter])


    return <>
        <button onClick={() => setFake(fake + 1)}>fake+</button> {fake} <br/>
        <button onClick={() => setCounter(counter + 1)}>+</button> {counter}
    </>
}


