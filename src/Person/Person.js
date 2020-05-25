import React, { Component } from 'react';
import styled from 'styled-components';
// import './Person.css';

const StyleDiv = styled.div`
        
                    width: 60%;
                    margin: 16px auto;
                    border: 1px solid #eee;
                    box-shadow: 0 2px 3px #ccc;
                    padding: 16px;
                    text-align: center;

                    @media (min-width: 500px){

                        width: 200px;
                        background-color: salmon;

                    }
                `;
const person = (props) => {

    return(
        <StyleDiv>
        
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} Years old</p>
            <p> {props.children} </p>
            <input type="text"  onChange={props.changed} value={props.name} />
        </StyleDiv>
    )
};


// export the function as default of the file.
export default person;