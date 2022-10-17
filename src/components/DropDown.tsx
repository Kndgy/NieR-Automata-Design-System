import React from "react";
import styled from 'styled-components';

type DropDownTypes = {
  Title?: string;
  Content?: React.ReactNode;
}

var bg = "";
var color = ""
var test = ""
const StyledSummary = styled.summary`
width: 100%;
background-image: linear-gradient(90deg, #b4af9a 50%, #b4af9a 50%, #57544a 50%, #57544a 100%);
background-size: 200%;
color:#57544a;
transition: .2s linear;
display: flex;
flex-direction: row;
padding: 10px;
font-family: 'Manrope', sans-serif;
font-weight: 500;
font-size: 18px;
&:hover{
  background-position: -100%;
  color:#b4af9a;
}
`

const Switch = styled.label`
  pointer-events: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 10;
`

const SwitchInput = styled.input.attrs({
  type: 'checkbox',
})`
  pointer-events: auto;
width: 0;
height: 0;
opacity: 0;
&:checked + ${StyledSummary}{
  background-position: -100%;
  color:#b4af9a;
}
`

export const DropDown = ({Title, Content}: DropDownTypes) => {
  // var testBool = true;
  // const [isActive, setIsActive] = React.useState(testBool);

  // const handler = ()=>{
  //   setIsActive(current => !current)
  //   console.log(isActive)
  //   if(isActive){
  //     bg = "-100%"
  //     color="#b4af9a"
  //   }else{
  //     bg = ""
  //     color= ""
  //   }
  // }

  // const [isChecked, setIsChecked] = React.useState(false);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(isChecked)
  //   if(event.target.checked === true){
  //     return setIsChecked(true);
  //   } else{
  //     return setIsChecked(false);
  //   }
  // };


  const log =()=>{
    test = "-100%"
    console.log(test)  
  }
  return(
    <details>
      <StyledSummary style={{backgroundPosition:`${test}`}} > <div  >{Title}</div> </StyledSummary>
      {Content}
    </details>
  )
}