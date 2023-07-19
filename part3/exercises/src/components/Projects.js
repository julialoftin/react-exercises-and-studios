import React from 'react'
import data from './../data.JSON'
import { useState } from 'react'

export default function MyProjects() {
    const [index, setIndex] = useState(0);

    const handleClick = () => {
        if (index < data.keyboards.length-1){
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    let keybs = data.keybs;
    let keyboard = keybs[index];

  return (
    <div>
        <button onClick={handleClick}>Next</button>
        <h2>{keyboard.name}</h2>
        <ul>
            <li>{keyboard.layout}</li>
            <li>{keyboard.switches}</li>
            <li>{keyboard.connectivity}</li>
        </ul>
    </div>
  )
}
