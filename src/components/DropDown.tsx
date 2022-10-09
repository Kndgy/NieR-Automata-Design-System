import React from "react";
import styled from 'styled-components';

type DropDownTypes = {
  Title?: string;
  Content?: React.ReactNode;
}

var bg = "";
var color = ""

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

export const DropDown = ({Title, Content}: DropDownTypes) => {
  const [isActive, setIsActive] = React.useState(true);
  const handler = ()=>{
    setIsActive(current => !current)
    console.log(isActive)
    if(isActive){
      bg = "-100%"
      color="#b4af9a"
    }else{
      bg = ""
      color= ""
    }
  }
  

  return(
    <details>
      <StyledSummary style={{backgroundPosition:`${bg}`, color:`${color}`}} onClick={handler}> {Title} </StyledSummary>
      {Content}
    </details>
  )
}