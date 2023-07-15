import React, {useReducer, useState} from "react";
import exp from "constants";
import {reducer, TOGGLE_CONSTANT} from "./Reducer";

type AkordPropsType = {
    titleValue: string
    // collapsed: boolean
}





function UncontrolAkord(props: AkordPropsType) {
    console.log('Akord rendered')


    let [state, dispatch] = useReducer(reducer,{collapsed:false});

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>*/}
            <AccordTitle title={props.titleValue} onClick={()=>{dispatch({type:TOGGLE_CONSTANT})}}/>

            {!state.collapsed  && <AccordBody/>}
        </div>)

}



type AccordionTitlePropsType = {
    title: string
    onClick:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    console.log('AccordionTitle rendered')
    return <h3 onClick={()=>{props.onClick()}}>--- {props.title} ---</h3>
}

const AccordTitle=React.memo(AccordionTitle)

const AccordBody=React.memo(AccordionBody)

function AccordionBody() {
    console.log('AccordionBody rendered')
    return (<>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </>
    )
}

export default UncontrolAkord;