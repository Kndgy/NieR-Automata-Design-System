import React from "react";
import styled from "styled-components"
import colors from '../colors/colors.json'

type TitleProps = {
  text?: string;
}

const TitleParent = styled.div`
  text-shadow: 6px 4px rgba(0, 0, 0, 0.3);
  color: ${colors.colors[2].hex};
  letter-spacing: 2px;
`

export const Title = ({text, ...props}: TitleProps) => {
  return(
    <TitleParent {...props}>
        <h1>{text}</h1>
    </TitleParent>
  )
}