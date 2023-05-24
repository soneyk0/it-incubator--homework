import React from "react";
import exp from "constants";
type AkordPropsType={
    titleValue: string
    collapsed: boolean
}
function Akord(props: AkordPropsType) {
    console.log('Akord rendered')
    if (props.collapsed === true){
        return <AccordionTitle title={props.titleValue}/>
    }
    else {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </div>)
    }
}
type AccordionTitlePropsType={
    title: string
}
function AccordionTitle(props: AccordionTitlePropsType){

    console.log('AccordionTitle rendered')
    return <h3>--- {props.title} ---</h3>
}
function AccordionBody(){
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

export default Akord;