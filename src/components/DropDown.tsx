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
  &:hover{
    background-position: -100%;
    color:#b4af9a;
  }
`



export const DropDown = ({Title, Content}: DropDownTypes) => {
  const [isActive, setIsActive] = React.useState(false);

  const handler = ()=>{
    setIsActive(current => !current)
    return console.log(isActive)
  }
  return(
    <details>
      <StyledSummary onClick={handler}>  <div> aaaa</div> <div>taest</div> </StyledSummary>
      {Content}
    </details>
  )
}