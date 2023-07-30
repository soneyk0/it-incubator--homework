import React, {KeyboardEvent, useState} from 'react';
import './App.css';
import Akord from "./components/Akord/Accordion";
import {Rating, RatingValueType} from './components/Rating/Rating'
import OnOff from "./components/OnOff/OnOff";
import PropTypes from "prop-types";
import {isBooleanObject} from "util/types";
import UncontrolAkord from "./components/UncontrolAkord/UncontrolAccordion";
import {UncontrolRating} from "./components/UncontrolRating/Rating";
import UncontrolOnOff from "./components/UncontrolOnOff/OnOff";
import {UncontrolledInput} from "./components/UncontrolledInput/UncontrolledInput";
import {TrackingValueOffUncontolledInput} from "./components/UncontrolledInput/TrackingValueOffUncontolledInput";
import {
    TrackingValueOffUncontolledInputByButtonPress
} from "./components/UncontrolledInput/TrackingValueOffUncontolledInputByButtonPress";
import {ControlledInput} from "./components/ControlledInput/ControlledInput";
import {ControlledCheckbox} from "./components/ControlledInput/ControlledCheckbox";
import {ControlledSelect} from "./components/ControlledInput/ControlledSelect";
import {Select} from "./components/Select/Select";
import {Example1} from "./components/Memo/ReactMemo";
import {UseMemoDifficultCount} from "./components/Memo/UseMemo";
import {HelpsToReactMemo} from "./components/Memo/UseMemo2";
import {LikeUseCallBack} from "./components/UseCallBack/LikeUseCallBack";
import {UseState} from "./components/UseState/UseState";
import {UseEffectExample} from "./components/UseEffect/UseEffect";

//function declaration

function hello() {
    //debugger //по шагам
    alert('Hello IT-KAMASUTRA')
}

hello();

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [acordCollapsed, setAcordCollapsed] = useState<boolean>(false)


    let [onOffValur, setOnOffValue] = useState<boolean>(true)

    let [value,setValue]=useState(1)


    return (
        // обязана вернуть JSX
        <div className={'App'}>

            <UncontrolOnOff onChange={setOnOffValue}/>{onOffValur.toString()}

            <UncontrolAkord titleValue={'Blabla'}/>
            <UncontrolRating/>

            <Rating value={ratingValue} onClick={setRatingValue}/>

            <Akord titleValue={'Menu'}
                   collapsed={acordCollapsed}
                   onChange={() => {
                       setAcordCollapsed(!acordCollapsed)
                   }}
                   items={[{title:'Yana',value:1}, {title:'Katy',value:2}, {title:'Anna',value:3}, {title:'Sasha',value:4}]}
                   onClick={(value)=>{alert(value)}}/>


            <UncontrolledInput/>
            <TrackingValueOffUncontolledInput/>
            <TrackingValueOffUncontolledInputByButtonPress/>
            <ControlledInput/>
            <ControlledCheckbox/>
            <ControlledSelect/>
            <Select
                value={value}
                onChange={(value:any)=>{setValue(value)}}
                item={[
                    {value:1,title:'Minsk'},
                    {value:2,title:'Moscow'},
                    {value:3,title:'Kiev'}]}/> <hr/>


            <Example1/>
            <hr/>
            <hr/>
            <UseMemoDifficultCount/>
            <hr/>
            <HelpsToReactMemo/>
            <hr/>
            <LikeUseCallBack/>
            <hr/>
            <UseState/>
            <hr/>
            <UseEffectExample/>

        </div>
    );
}

type AppTitlePropsType = {
    title: string
}

function AppTitle(props: AppTitlePropsType) {

    console.log('AppTitle rendered')
    return <h1>{props.title}</h1>
}


export default App;
