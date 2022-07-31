import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import colors from './colors.json';

interface BarProps {
  dark?: boolean;
}

const BarParent = styled.div
`
display: flex;
flex-direction: row;
height: 100%;
`;

const BarItem = styled.div
`
background-color: ${props => props.theme.main};
width: 10px;
height: 100%;
margin-right: 5px;
  &:nth-child(2){
    width: 4px;
  }
`;

BarItem.defaultProps = {
  theme: {
    main: `${colors.colors[1].hex}`
  }
}

const theme = {
  main: `${colors.colors[2].hex}`
};

export const Bar = ({dark=false, ...props}:BarProps) => {
  const checker = () =>{
    if(dark === false){
      return (
        <>
        <BarItem/>
        <BarItem/>
        </>
      )
    } else if(dark === true){
      return (
        <ThemeProvider theme={theme}>
          <BarItem/>
          <BarItem/>
        </ThemeProvider>
      )
    }
  }
  return(
    <BarParent {...props}>
      {checker()}
    </BarParent>
  )
}
