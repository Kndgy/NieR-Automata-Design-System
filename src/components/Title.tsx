import React from "react";
import styled from "styled-components"
import ShuffleText from 'react-shuffle-text';
import colors from './colors.json'

type TitleProps = {
  title?: string;
  subtitle?: string;
}

const TitleParent = styled.div`

  color: ${colors.colors[2].hex};
  letter-spacing: 8px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  text-shadow: 7px 5px #00000030;
  h1{
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 48px;
  }
  h3{
    text-shadow: 6px 4px #00000000;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    letter-spacing: 0px;
    font-size: 24px;
  }
`

export const Title = ({title, subtitle, ...props}: TitleProps) => {
  return(
    <TitleParent {...props}>
        <h1><ShuffleText charIncIntervale={10} charFrames={20} charFrameTime={10} content={title}/></h1>
        <h3><ShuffleText charIncIntervale={10} charFrames={20} charFrameTime={10} content={subtitle}/></h3>
    </TitleParent>
  )
}