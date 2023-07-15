import React from "react";
import exp from "constants";

type ItemType={
    title:string
    value:any
}

type AkordPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: Array<ItemType>
    onClick:(value:any)=>void
}

function Akord(props: AkordPropsType) {
    console.log('Akord rendered')


    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
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

type AkordBodyType = {
    items: Array<ItemType>
    onClick:(value:any)=>void
}

function AccordionBody(props: AkordBodyType) {
    console.log('AccordionBody rendered')
    return <ul>
        {props.items.map((i,index)=> <li onClick={()=>{props.onClick(i.value)}} key={index}>{i.title}</li>)}
    </ul>


}

export default Akord;