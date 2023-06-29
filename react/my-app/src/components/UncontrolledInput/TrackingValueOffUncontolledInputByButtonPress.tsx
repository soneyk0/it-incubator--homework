import React, {useRef, useState} from "react";

export const TrackingValueOffUncontolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef=useRef<HTMLInputElement>(null)

    const save =()=>{
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return (
        <div>
            <input ref={inputRef}/>
            <button onClick={save}>save</button>
             - actual value: {value}
            {/*не контролируемый инпут с выводом текущего значения*/}

        </div>


    )
}