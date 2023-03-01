import React, { useState, useEffect } from 'react';
import CharacterData from './components/Character';
import axios from 'axios';

const App = (props) => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [ characters, setCharacters ] = useState('')
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(() => {
  
  axios.get('https://swapi.dev/api/people/') 
  .then(res => {
    const resMap = res.data.map(element => {
      // console.log('element console',element)
      const charBirth = element.birth_year;
      const charName = element.name;

      setCharacters(charBirth)
    })
    // console.log('res console', res.data)
      // setCharacters()
  })
  .catch(err => {
      console.error(err)
  })

}, [])
// console.log('this is props console', props)

  return (
    
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharacterData characters={characters}/>
    
    </div>
  );
}

export default App;
