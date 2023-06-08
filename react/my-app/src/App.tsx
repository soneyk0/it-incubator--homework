import React from 'react';
import './App.css';
import Akord from "./components/Akord/Accordion";
import {Rating} from './components/Rating/Rating'
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

    // полезное что то
    console.log('App rendered')
    return (
        // обязана вернуть JSX
        <div className={'App'}>
            <OnOff/>

            <UncontrolAkord titleValue={"Меню"}/>
            <UncontrolRating/>

            {/*<OnOff on={true}/>*/}
            {/*<OnOff on={false}/>*/}
            {/*<Akord titleValue={"Меню"} collapsed={true}/>*/}
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
