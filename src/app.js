// import subtract, { square, add } from './utils';
//
// console.log('app.js is running');
// console.log(square(3));
// console.log(add(3, 5));
// console.log(subtract(100, 5));
//
// import isSenior, {isAdult, canDrink} from "./person";
// const age = 19;
// console.log(isAdult(age));
// console.log(canDrink(age));
// console.log(isSenior(65));

// install -> import -> use
import React from 'react'
import ReactDOM from 'react-dom'

const template = React.createElement('p', {}, 'testing 123')

ReactDOM.render(template, document.getElementById('app'));