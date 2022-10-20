import React from "react";
import styled, { ThemeProvider } from "styled-components";
import {NavLink, useSearchParams} from "react-router-dom"

type YorhaNavLinkProps = {
  text?: string | any;
  to?: string;
  filter?: string;
  className?: string;
  disabled?: boolean;
  filterType?: string;
  variant?:  "button" | "nav" | "transparent" | "neutral";
}

const Icon = styled.div`
  width: 5%;
  height: 5%;
  min-width: 20px;
  min-height: 20px;
  background-image: linear-gradient(90deg, #57544a 50%, #57544a 50%, #dad4bb 50%, #dad4bb 100%);
  background-size: 200%;
  transition: .1s linear;
`;

export const YorhaCustomLink = ({className,text, filter, filterType, to, disabled=false, ...props}:YorhaNavLinkProps)=>{
  let [params] = useSearchParams();
  let isActive = params.get(filterType) === filter;

  return(
    <div className={className}>
      <Button disabled={disabled} {...props}>
        <NavLink className={['mainClass', isActive ? "active" : "inactive"].join(' ')} 
          to={`${to}` + filter}>
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
    font-size: 1rem;
    height: 100%;
    width: 100%;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    color: #57544a;
    align-items: flex-start;
    background-image: ${props => props.theme.backgroundImage};
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
      pointer-events: none;
    }
    &::after{
      height: 0px;
      width: 100%;
      background-color: #57544a;
      content: "";
      transform: translate(0px, 0px);
      transition: 0.2s;
      z-index: -1;
      pointer-events: none;
    }
    &:hover{
      &::before{
        height: 2px;
        width: 100%;
        content: "";
        transform: translate(0px, -8px);
        pointer-events: none;
    }
      &::after{
        height: 2px;
        z-index: -1;
        width: 100%;
        content: "";
        transform: translate(0px, 8px);
        pointer-events: none;
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
  }
  .wrapper{
    padding: 10px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    color: inherit;
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-size: 18px;
  }
  .active > .wrapper{
    color: #b4af9a;
  }
`

CustomNavLink.defaultProps = {
  theme:{
    backgroundImage: `linear-gradient(90deg, #b4af9a 50%, #b4af9a 50%, #57544a 50%, #57544a 100%)`,
    padding: `2rem`,
    width: `100%`
  }
};

const theme = {
  backgroundImage: `linear-gradient(90deg, #b4af9a 50%, #b4af9a 50%, #57544a 50%, #57544a 100%)`,
  width: `110%`,
  padding: `0rem`
};

const transparent = {
  backgroundImage: `linear-gradient(90deg, #b4af9a00 50%, #b4af9a00 50%, #57544a 50%, #57544a 100%)`,
};

const neutral ={
  backgroundImage: `linear-gradient(90deg, #b4af9a 50%, #b4af9a 50%, #57544a 50%, #57544a 100%)`,
  width: `100%`,
  padding: `0rem`
}

export const YorhaNavLink = ({to, filter="", filterType, variant="nav", text, ...props}:YorhaNavLinkProps) =>{

  //TODO refactor for more variants using key value, add pointer events to be used as child, or put it on button, future problems
  const checker = () =>{
    if(variant === "nav"){
      return(
        <CustomNavLink to={to} filter={filter} text={text} filterType={filterType} variant={variant} {...props}/>
      )      
    } else if(variant === "button"){
      return(
        <ThemeProvider theme={theme}>
          <CustomNavLink to={to} filter={filter} filterType={filterType} variant={variant} text={text} {...props}/>
        </ThemeProvider>
      )
    } else if(variant === "transparent"){
      return(
        <ThemeProvider theme={transparent}>
          <CustomNavLink to={to} filter={filter} filterType={filterType} variant={variant} text={text} {...props}/>
        </ThemeProvider>
      )
    } else if(variant === "neutral"){
      return(
        <ThemeProvider theme={neutral}>
          <CustomNavLink to={to} filter={filter} filterType={filterType} variant={variant} text={text} {...props}/>
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