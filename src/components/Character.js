// Write your Character component here
import React from "react";
import styled, {keyframes} from 'styled-components'

const kf = keyframes`
50% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }

`
const StyledCharacter = styled.div`
width: 60%;
display: flex;
justify-content: space-between;
padding: 8px;
border-bottom: 2px solid black;
`

const Character = (props) => {
    console.log('logging in character', props)
    return (
    <>
        <StyledCharacter>
            <h2>name: {props.name}</h2>
        </StyledCharacter>
    </>) 
}
export default Character;