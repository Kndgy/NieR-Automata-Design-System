import React from "react";
import styled from 'styled-components';

type DropDownTypes = {
  Title?: string;
  Content?: React.ReactNode;
}


const StyledSummary = styled.summary`
width: 100%;
background-image: linear-gradient(90deg, #b4af9a 50%, #b4af9a 50%, #57544a 50%, #57544a 100%);
background-size: 200%;
color:#57544a;
transition: .2s linear;
display: flex;
flex-direction: row;
padding: 10px;
gap: 6px;
font-family: 'Manrope', sans-serif;
font-weight: 500;
font-size: 18px;
&:hover{
  background-position: -100%;
  color:#b4af9a;
}
`


export const DropDown = ({Title, Content}: DropDownTypes) => {

  const [isActive, setIsActive] = React.useState(false);

  const handleClick = () => {
    setIsActive(current => !current);
  };

  return(
    <details>
      <StyledSummary onClick={handleClick} style={{backgroundPosition: isActive ? '-100%' : '', color: isActive ? '#b4af9a' :''}} > <span> {isActive ? "-" : "+"} </span> <div >{Title}</div> </StyledSummary>
      {Content}
    </details>
  )
}