import React, { Component } from 'react';
import './Person.css';
import Radium from 'radium';
//- no need import Component cause this is not extend component
//- Lets make it modern with ES6 syntax
//- this variable wont be change

// ================= Lesson 2: configurable content with attributes ===================

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px',
            backgroundColor: 'salmon'
        }
    }
    return(
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} Years old</p>
            <p> {props.children} </p>
            <input type="text"  onChange={props.changed} value={props.name} />
        </div>
    )
};

// class Person extends Component{
//     render(){
//     return <p>My name is {this.props.name} </p>
//     }
// }

// ================= Lesson 2: dynamic content ===================
// const person = () => {
//     return <p>I'm a person and I am {Math.floor(Math.random() * 30)} Years old</p>
// };

// ================= Lesson 1: static content ===================
// const person = () => {
//     return <p>I'm a person</p>
// };



// export the function as default of the file.
export default Radium(person);