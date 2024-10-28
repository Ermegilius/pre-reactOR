js```
//in main.jsx
export function Box() {
return ...
}

export function Circle() {
return...
}

    //in App.js

import {Box, Circle} from "./main.jsx"

## Class component with state

import React, {Component} from 'react';
class Conuter extends Component {
//initialize state as a class property
state = {
counter: 0
}

    render() {
        return (
            <div>
                <p> Name: {this.props.name}</p>
                <p> Count: {this.state.count}</p>
            </div>
        );
    }

}

## Hooks

const [name, setName] = useState ("Alice") //set default name and a method to change it
