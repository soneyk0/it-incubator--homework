import React from 'react';
import './App.css';
import Akord from "./components/Akord/Accordion";
import {Rating} from './components/Rating/Rating'
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
        <div>
            <input/>
            <input type="date"/>
            <AppTitle value={'This is APP component'}/>
            <AppTitle value={'My friends'}/>
            Article 1
            <Rating value={3}/>
            <Akord/>
            Article 2
            <Rating value={4}/>
            <Rating value={0}/>
            <Rating value={5}/>
        </div>
    );
}

function AppTitle(props: any) {
    debugger
    console.log('AppTitle rendered')
    return <h1>{ props.title }</h1>
}




export default App;
