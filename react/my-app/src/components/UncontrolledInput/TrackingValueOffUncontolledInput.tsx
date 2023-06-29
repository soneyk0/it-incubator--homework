import React, {useState} from "react";

export const TrackingValueOffUncontolledInput = () => {
    const[value, setValue]=useState('')

    return (
        <div>
                <input onChange={(event)=>{
                    const actualValue = event.currentTarget.value;
                    setValue(actualValue);
                }}/> -{value}
                {/*не контролируемый инпут с выводом текущего значения*/}

        </div>


    )
}