import React from "react";
import exp from "constants";

function Akord() {
    console.log('Akord rendered')
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody title={props.title}/>
        </div>)

}
function AccordionTitle(){
    console.log('AccordionTitle rendered')
    return <h3>Меню</h3>
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