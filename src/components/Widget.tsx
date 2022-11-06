import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import colors from './colors.json';

//TODO might want to refactor the parent element style/size to fix being pushed by font size

interface WidgetProps {
  dark?: boolean;
  title?: string | number;
  content?: React.ReactNode;
  icon?: boolean;
  lvl?: string | number;
}

// const Icon = styled.div`
//   z-index: 10;
//   width: 10%;
//   height: 10%;
//   min-width: 20px;
//   min-height: 20px;
//   background-color: ${props => props.theme.bg};
//   background-size: 200%;
//   transition: .1s linear;
// `;

const darkIcon = {
  bg: `${colors.colors[0].hex}`
}

const WidgetParent = styled.div`
  width: 100%;
  height: 100%;
  background-color: #dad4bb;
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-between; */
  &::before{
    align-items: center;
    height: 20px;
    width: 20px;
    background-color: ${props => props.theme.bg};;
    content: "";
  }
`

Title.defaultProps = {
  theme: {
    bg: `${colors.colors[2].hex}`
  }
}

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  background-color: ${props => props.theme.main};
  color: ${props => props.theme.color};
  padding: 1rem;
  height: max-content;
  width: 100%;
  font-size: 1.2rem;
  height: 7%;
`;

const Content = styled.div`
  width: 100%;
  height: 90%;
  font-size: 1.2rem;
  color: #3F3D36;
`;

Header.defaultProps = {
  theme: {
    main: `${colors.colors[1].hex}`,
    color: `${colors.colors[2].hex}`
  }
}

const theme = {
  main: `${colors.colors[2].hex}`,
  color:`${colors.colors[0].hex}`
};

export const Widget = ({dark = false , title, content, lvl, icon=true, ...props}: WidgetProps) => {
  const iconChecker = () =>{
    if(icon === true){
      if(dark){
        return(
          <ThemeProvider theme={darkIcon}>
            <Title>
              <span>{title}</span> <span>{lvl}</span>
            </Title>
          </ThemeProvider>
        )
      } else {
        return(
          <Title>
            <span>{title}</span> <span>{lvl}</span>
          </Title>
        )
      }
    } else {
      return <></>;
    }
  }
  const checker = () => {
    if(dark === false){
      return(
        <Header>
            {iconChecker()}
        </Header>
      )
    }else{
      return(
        <ThemeProvider theme={theme}>
          <Header>
              {iconChecker()}
          </Header>
        </ThemeProvider>
      )
    }
  }
  return(
    <WidgetParent>
      {checker()}
        <Content>
          {content}
        </Content>
    </WidgetParent>
  )
}
