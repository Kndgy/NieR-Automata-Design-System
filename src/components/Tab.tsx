import React from "react";
import styled from "styled-components";

type TabProps = {
  content?: React.ReactNode;
  className?: string;
}

const StyledTab = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0rem 1rem 0rem 1rem;
  background-color: #dad4bb;
  justify-content: space-between;
`

const Separator = styled.div`
  width: 100%;
  height: 2px;
  margin: 1rem 0rem 1rem 0rem;
  background-color: #b4af9a;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &::after{
    content: ".";
    opacity: 0;
    width: 0;
  }
`

const SeparatorStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 1.2rem;
  align-items: center;

`

const Dot = styled.div`
  height: 0.3rem;
  width: 0.3rem;
  background-color: #b4af9a;
  border-radius: 50%;
`

const Content = styled.div`
  overflow-y: scroll;
  height: 100%;
  padding: 0.5rem 1rem 0.5rem 0rem;
  &::-webkit-scrollbar{
    width: 0.3rem;
  }
  &::-webkit-scrollbar-track {
    
}
  &::-webkit-scrollbar-thumb {
  background-color: #4e4b42;

}
`

export const Tab = ({content, className}:TabProps) =>{
  return(
    <StyledTab>
      <SeparatorStyle><Separator/> <Dot/></SeparatorStyle>
        <Content className={className}>
          {content}
        </Content>
        <SeparatorStyle><Separator/> <Dot/></SeparatorStyle>
    </StyledTab>
  )
}