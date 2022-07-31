import React from "react";
import styled from "styled-components";
import { Bar } from "./Bar"
import colors from './colors.json'

type FooterProps = {
  text?: string;
}

const FooterParent = styled.div`
  width: 100%;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${colors.colors[0].hex};
  align-items: center;
`

const TextContainer = styled.div`
font-size: 24px;
  padding: 1rem;
  color: ${colors.colors[2].hex};
  align-items: center;
`

export const Footer = ({text, ...props}: FooterProps) => {
  return(
    <FooterParent {...props}>
        <Bar dark={true}/>
        <TextContainer>
          {text}
        </TextContainer>
    </FooterParent>
  )
}