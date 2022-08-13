import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import colors from './colors.json';


interface WidgetProps {
  dark?: boolean;
  title?: string | number;
  content?: React.ReactNode;
  icon?: boolean;
}

const WidgetParent = styled.div`
  width: 100%;
  height: 100%;
  background-color: #dad4bb;
  display: flex;
  flex-direction: column;
`

const Icon = styled.div`
  z-index: 10;
  width: 5%;
  height: 5%;
  min-width: 20px;
  min-height: 20px;
  background-image: linear-gradient(90deg, #57544a 50%, #57544a 50%, #b4af9a 50%, #b4af9a 100%);
  background-size: 200%;
  transition: .1s linear;
`;


const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* height: 5%; */
  gap: 10px;
  background-color: ${props => props.theme.main};
  color: ${props => props.theme.color};
  padding: 1rem;
  height: max-content;
  width: 100%;
  font-size: 1.2rem;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
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

export const Widget = ({dark = false , title, content, icon=true, ...props}: WidgetProps) => {
  const iconChecker = () =>{
    if(icon === true){
      return(
        <Icon />
      )
    } else if(icon === false){
      return <></>;
    }
  }
  const checker = () => {
    if(dark === false){
      return(
        <Header>
          <div className={'icon'}>
            {iconChecker()}
          </div>
          <div className={'title'}>
            {title}
          </div>
        </Header>
      )
    }else if(dark === true){
      return(
        <ThemeProvider theme={theme}>
          <Header>
            <div className={'icon'}>
              {iconChecker()}
            </div>
            <div className={'title'}>
              {title}
            </div>
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
