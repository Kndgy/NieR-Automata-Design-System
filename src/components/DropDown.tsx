import React from "react";
import styled from 'styled-components';

type DropDownTypes = {
  Title?: string;
  Content?: React.ReactNode;
}

const Symbol = styled.span`
background-image: linear-gradient(90deg, #57544a 50%, #57544a 50%, #dad4bb 50%, #dad4bb 100%);
background-size: 200%;
color:#b4af9a;
transition: .1s linear;
&:hover{
  background-position: -100%;
  color:#57544a;
}
`

const StyledSummary = styled.summary`
width: 100%;
background-image: linear-gradient(90deg, #b4af9a 50%, #b4af9a 50%, #57544a 50%, #57544a 100%);
background-size: 200%;
color:#57544a;
transition: .2s linear;
display: flex;
flex-direction: row;
align-items: center;
padding: 10px;
gap: 6px;
font-family: 'Manrope', sans-serif;
font-weight: 500;
font-size: 18px;
&:hover{
  background-position: -100%;
  color:#b4af9a;
}
&:hover ${Symbol}{
  background-position: -100%;
  color: #57544a;
}
/* &::before{
  height: 0px;
  width: 100%;
  background-color: #57544a;
  content: "";
  transform: translate(0px, 0px);
  transition: 0.2s;
  pointer-events: none;
}
&::after{
  height: 0px;
  width: 100%;
  background-color: #57544a;
  content: "";
  transform: translate(0px, 0px);
  transition: 0.2s;
  z-index: -1;
  pointer-events: none;
}
&:hover{
  &::before{
    height: 2px;
    width: 100%;
    content: "";
    transform: translate(0px, -8px);
    pointer-events: none;
}
  &::after{
    height: 2px;
    z-index: -1;
    width: 100%;
    content: "";
    transform: translate(0px, 8px);
    pointer-events: none;
  }
} */
`

export const DropDown = ({Title, Content}: DropDownTypes) => {

  const [isActive, setIsActive] = React.useState(false);

  const handleClick = () => {
    setIsActive(current => !current);
  };

  return(
    <details>
      <StyledSummary 
        onClick={handleClick} 
        style={{backgroundPosition: isActive ? '-100%' : '', 
        color: isActive ? '#b4af9a' :''}}
      >
        <Symbol 
          style={{display:"flex", justifyContent:"center", 
          width:"20px", color: isActive ? '#57544a' :'', 
          backgroundPosition: isActive? '-100%' : ''}}
        > 
          {isActive ? "-" : "+"}
        </Symbol> 
        <div>{Title}</div> 
      </StyledSummary>
      {Content}
    </details>
  )
}