import React, {useState} from 'react';
import './App.css';
import Akord from "./components/Akord/Accordion";
import {Rating, RatingValueType} from './components/Rating/Rating'
import OnOff from "./components/OnOff/OnOff";
import PropTypes from "prop-types";
import {isBooleanObject} from "util/types";
import onOff from "./components/OnOff/OnOff";
import UncontrolAkord from "./components/UncontrolAkord/UncontrolAccordion";
import {UncontrolRating} from "./components/UncontrolRating/Rating";
//function declaration

function hello() {
    //debugger //по шагам
    alert('Hello IT-KAMASUTRA')
}

hello();

function App() {

    let [ratingValue, setRatingValue]=useState<RatingValueType>(0)
    let [acordCollapsed, setAcordCollapsed]=useState<boolean>(false)
    return (
        // обязана вернуть JSX
        <div className={'App'}>
            <OnOff/>

            <UncontrolAkord titleValue={"Меню"}/>
            <UncontrolRating/>

            <Rating value={ratingValue} onClick={setRatingValue}/>

            {/*<OnOff on={true}/>*/}
            {/*<OnOff on={false}/>*/}

            <Akord titleValue={"Меню"} collapsed={acordCollapsed}/>

            {/*<Akord titleValue={"User"} collapsed={false}/>*/}

            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}

type AppTitlePropsType={
    title: string
}
function AppTitle(props: AppTitlePropsType) {

    console.log('AppTitle rendered')
    return <h1>{ props.title }</h1>
}




export default App;
