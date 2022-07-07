import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom"

type YorhaNavLinkProps = {
  text?: string;
  to?: string;
  className?: string;
  disabled?: boolean;
}

const Icon = styled.div`
  width: 5%;
  height: 5%;
  min-width: 20px;
  min-height: 20px;
  background-image: linear-gradient(90deg, #57544a 50%, #57544a 50%, #b4af9a 50%, #b4af9a 100%);
  background-size: 200%;
  transition: .1s linear;
`;

const YorhaCustomLink = ({className,text, to, disabled=false, ...props}:YorhaNavLinkProps)=>{
  return(
    <div className={className}>
      <Button disabled={disabled} {...props}>
      <NavLink className={['mainClass', ({isActive}) => (isActive ? "active" : "inactive")].join(' ')} 
        to={to!}>
        <Icon/> {text}
      </NavLink>
      </Button>
    </div>

  )
}

const Button = styled.button`
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: row;
    &:disabled{
      opacity: 0.6;
      pointer-events: none;
    }
`

const CustomNavLink = styled(YorhaCustomLink)`
  .mainClass{
    height: 100%;
    width: 100%;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    padding: 10px;
    gap: 10px;
    color: #57544a;
    align-items: center;
    background-image: linear-gradient(90deg, #b4af9a 50%, #b4af9a 50%, #57544a 50%, #57544a 100%);
    background-size: 200%;
    transition: .2s linear;
    &:hover{
      background-position: -100%;
      color: #b4af9a;
    }
    &:hover ${Icon}{
      background-position: -100%;
    }
  }
  .active{
    background-position: -100%;
    color: #b4af9a;
  }
  .active ${Icon}{
    background-position: -100%;
    color: #b4af9a;
  }
  .inactive{
    color: #57544a;
  }
`

export const YorhaNavLink = ({to, text, ...args}:YorhaNavLinkProps) =>{
  return(
    <CustomNavLink to={to} text={text} {...args}/>
  )
}