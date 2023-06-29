import React, {ChangeEvent, useState} from "react";

export const ControlledInput = () => {

    const [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return (
        <div>
            <input value={parentValue} onChange={onChange}/>
            {/* контролируемый инпут*/}

        </div>


    )
}