import React, {useState} from "react";

type PropsType = {
    onChange:(on:boolean)=>void
}

function UncontrolOnOff(props: PropsType) {

    let[on, setOn] = useState(true);

    const onStyle={
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display:'inline-block',
        padding:'2px',
        backgroundColor:on ? 'green' : 'white'
    };
    const offStyle={
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display:'inline-block',
        marginLeft:'2px',
        padding:'2px',
        backgroundColor:on ? 'white': 'red'
    };
    const indicatorStyle={
        width:'10px',
        height:'10px',
        borderRadius:'5px',
        border:'1px solid black',
        display:'inline-block',
        marginLeft:'5px',
        background: on ? 'green': 'red'
    };

    const onClick =()=>{
        setOn(true)
        props.onChange(true)
    }

    const offClick =()=>{
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClick}>On</div>
            <div style={offStyle} onClick={offClick}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )

}

export default UncontrolOnOff;