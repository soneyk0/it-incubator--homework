import React, {useState} from 'react';
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
    return (
        // обязана вернуть JSX
        <div className={'App'}>
            {/*<OnOff on={onOffValur} */}
            {/*       onChange={(on)=>{setOnOffValue(!onOffValur)}}/>*/}

            <UncontrolOnOff onChange={setOnOffValue}/>{onOffValur.toString()}

            <UncontrolAkord titleValue={'Blabla'}/>
            <UncontrolRating/>

            <Rating value={ratingValue} onClick={setRatingValue}/>

            {/*<OnOff on={true}/>*/}
            {/*<OnOff on={false}/>*/}

            <Akord titleValue={'Menu'}
                   collapsed={acordCollapsed}
                   onChange={() => {
                       setAcordCollapsed(!acordCollapsed)
                   }}/>


            <UncontrolledInput/>
            <TrackingValueOffUncontolledInput/>
            <TrackingValueOffUncontolledInputByButtonPress/>
            <ControlledInput/>
            <ControlledCheckbox/>
            <ControlledSelect/>
            {/*<Akord titleValue={"User"} collapsed={false}/>*/}

            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
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
