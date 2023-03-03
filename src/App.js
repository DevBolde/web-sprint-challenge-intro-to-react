import React, { useState, useEffect } from 'react';
import Character from './components/Character';
import axios from 'axios';
import styled, {keyframes} from 'styled-components'


const App = (props) => {

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [ characters, setCharacters ] = useState('')
// const [ birth_year, setBirth_Year ] = useState('')

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
 axios.get('https://swapi.dev/api/people/')
.then(res => {
  const charMap = res.data.map((ele) => {
    setCharacters(ele)
    
  })
  return charMap;
})
.catch(err => {
  console.error(err)
})
}, [props.name])

  return (
    
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character characters={characters.name} />
    
    </div>
  );
}

export default App;
