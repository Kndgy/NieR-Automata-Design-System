import React from "react";
import styled, { ThemeProvider } from "styled-components";
import {NavLink} from "react-router-dom"

type YorhaNavLinkProps = {
  text?: string;
  to?: string;
  className?: string;
  disabled?: boolean;
  variant?:  "button" | "nav";
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
          <div className='wrapper'>
          <Icon/> {text}
          </div>
        </NavLink>
      </Button>
    </div>
  )
}

const Button = styled.button`
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: none;
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
    flex-direction: column;
    color: #57544a;
    align-items: flex-start;
    background-image: linear-gradient(90deg, #b4af9a 50%, #b4af9a 50%, #57544a 50%, #57544a 100%);
    background-size: 200%;
    transition: .2s linear;
    z-index: 2;
    &:hover{
      background-position: -100%;
      color: #b4af9a;
    }
    &:hover ${Icon}{
      background-position: -100%;
    }
    &::before{
      height: 0px;
      width: 100%;
      background-color: #57544a;
      content: "";
      transform: translate(0px, 0px);
      transition: 0.2s;
    }
    &::after{
      height: 0px;
      width: 100%;
      background-color: #57544a;
      content: "";
      transform: translate(0px, 0px);
      transition: 0.2s;
      z-index: -1;
    }
    &:hover{
      &::before{
        height: 2px;
        width: 100%;
        content: "";
        transform: translate(0px, -8px);
    }
      &::after{
        height: 2px;
        z-index: -1;
        width: 100%;
        content: "";
        transform: translate(0px, 8px);
      }
    }
  }
  .active{
    background-position: -100%;
    width: ${props => props.theme.width};
    padding-bottom: ${props => props.theme.padding};
    color: #b4af9a;
    &:hover{
      &::before{
        height: 0px;
        transform: translate(0px, 0px);
      }
      &::after{
        height: 0px;
        transform: translate(0px, 0px);
      }
    }
  }
  .active ${Icon}{
    background-position: -100%;
    color: #b4af9a;
  }
  .inactive{
    color: #57544a;
  }
  .wrapper{
    padding: 10px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
  }
`

CustomNavLink.defaultProps = {
  theme:{
    padding: `2rem`,
    width: `100%`
  }
};

const theme = {
  width: `140%`,
  padding: `0rem`
};

export const YorhaNavLink = ({to, variant="nav", text, ...props}:YorhaNavLinkProps) =>{
  const checker = () =>{
    if(variant === "nav"){
      return(
        <CustomNavLink to={to} variant={variant} text={text} {...props}/>
      )      
    } else if(variant === "button"){
      return(
        <ThemeProvider theme={theme}>
          <CustomNavLink to={to} variant={variant} text={text} {...props}/>
        </ThemeProvider>
      )
    }
  }
  return(
     <>
     {checker()}
     </>
  )
}