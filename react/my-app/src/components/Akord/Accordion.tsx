import React from "react";
import exp from "constants";

type AkordPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}

function Akord(props: AkordPropsType) {
    console.log('Akord rendered')


    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody/>}
        </div>)

}


type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    console.log('AccordionTitle rendered')
    return <h3 onClick={props.onChange}>--- {props.title} ---</h3>
}

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

export default Akord;