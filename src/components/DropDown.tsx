import React, { useState } from "react";
import styled from 'styled-components';

type DropDownTypes = {
  Title?: string;
  Content?: React.ReactNode;
}

const StyledSummary = styled.summary`
  background-color: white;
  display: flex;
  flex-direction: row;
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