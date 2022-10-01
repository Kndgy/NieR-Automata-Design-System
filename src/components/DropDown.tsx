import React from "react";
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
  return(
    <details>
      <StyledSummary> {Title} </StyledSummary>
      {Content}
    </details>
  )
}