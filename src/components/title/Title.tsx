import React from "react";
import styled from "styled-components"
import colors from '../colors/colors.json'

type TitleProps = {
  title?: string;
  subtitle?: string;
}

const TitleParent = styled.div`

  color: ${colors.colors[2].hex};
  letter-spacing: 2px;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: baseline;
  text-shadow: 6px 4px #00000050;
  h1{
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  h3{
    text-shadow: 6px 4px #00000000;
  }
`

export const Title = ({title, subtitle, ...props}: TitleProps) => {
  return(
    <TitleParent {...props}>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
    </TitleParent>
  )
}