import React from "react";
import styled from "styled-components";

type TabProps = {
  content?: React.ReactNode;
}

const StyledTab = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
  overflow-y: auto;
  overflow-y: visible;
  height: 100%;
  padding: 0.5rem 1rem 0.5rem 0rem;
  &::-webkit-scrollbar{
    width: 0.3rem;
  }
  &::-webkit-scrollbar-track {
    border-top: 8px solid #000000;
    border-right: 6px solid #000000;
    border-bottom: 8px solid #000000;
    border-left: 6px solid #000000;
    background-color: #e1214d;
}
  &::-webkit-scrollbar-thumb {
  background-color: #4e4b42;
}

`

export const ScrollElement = ({content}:TabProps) =>{
  return(
    <StyledTab>
      <SeparatorStyle><Separator/> <Dot/></SeparatorStyle>
        <Content>
          {content}
        </Content>
        <SeparatorStyle><Separator/> <Dot/></SeparatorStyle>
    </StyledTab>
  )
}