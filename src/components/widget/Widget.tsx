import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import colors from '../colors/colors.json';

interface WidgetProps {
  dark?: boolean;
  title?: string;
  content?: any;
}

const WidgetParent = styled.div`
  width: 100%;
  height: 100%;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  background-color: ${props => props.theme.main};
  color: ${props => props.theme.color};
  padding: 10px;
`;

const ContentParent = styled.div`
  width: 100%;
  height: 100%;
  background-color: #dad4bb;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
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

export const Widget = ({dark = false , title, content, ...props}: WidgetProps) => {
  const checker = () => {
    if(dark == false){
      return(
        <Header>
          <div className={'icon'}>
            wip icon
          </div>
          <div className={'title'}>
            {title}
          </div>
        </Header>
      )
    }else if(dark == true){
      return(
        <ThemeProvider theme={theme}>
          <Header>
            <div className={'icon'}>
              wip icon
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
      <ContentParent {...props}>
        <Content>
          {content}
        </Content>
      </ContentParent>
    </WidgetParent>
  )
}
