import React from "react";
import styled from 'styled-components';
import colors from './colors.json'

type ButtonProps = {
  // icon?: any;
  text?: string;
  disabled?: boolean;
  variant?: 'checkbox' | 'button';
}

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

const IconAlt = styled.div`
  z-index: 10;
  width: 5%;
  height: 5%;
  min-width: 20px;
  min-height: 20px;
  background-image: linear-gradient(90deg, #b4af9a 50%, #b4af9a 50%, #57544a 50%, #57544a 100%);
  background-size: 200%;
  transition: .1s linear;
`;

const ParentElement = styled.div`
  pointer-events: none;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 10;
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
`

const Switch = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 10;
`

const ButtonParent = styled.div`
  pointer-events: auto;
  display: flex;
  height: 100%;
  padding: 10px;
  color: ${colors.colors[2].hex};
  background-image: linear-gradient(90deg, #b4af9a 50%, #b4af9a 50%, #57544a 50%, #57544a 100%);
  background-size: 200%;
  transition: .2s linear;
  &:hover{
    background-position: -100%;
    color: ${colors.colors[1].hex};
  }
  &:hover ${Icon}{
    background-position: -100%;
  }
`;

const ButtonVariant = styled.button`
  pointer-events: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: left;
  height: 100%;
  width: 100%;
  padding: 10px;
  border: none;
  display: flex;
  height: 100%;
  width: 100%;
  color: ${colors.colors[2].hex};
  background-image: linear-gradient(90deg, #b4af9a 50%, #b4af9a 50%, #57544a 50%, #57544a 100%);
  background-size: 200%;
  transition: .2s linear;
  &:hover{
    background-position: -100%;
    color: ${colors.colors[1].hex};
  }
  &:hover ${Icon}{
    background-position: -100%;
  }
  &:disabled{
    opacity: 0.6;
    pointer-events: none;
  }
`


const SwitchInput = styled.input.attrs({
  type: 'checkbox',
})`
width: 0;
height: 0;
opacity: 0;
&:checked + ${ButtonParent}{
  background-position: -100%;
  color: ${colors.colors[1].hex};
}
&:disabled + ${ButtonParent}{
  opacity: 0.6;
  pointer-events: none;
}
`

const Wrapper = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  gap:10px;
  align-items: center;
  justify-content: left;
`

ButtonParent.defaultProps = {
  theme: {
    main: `1`
  }
}

export const Button = ({text, variant='button', disabled, ...props}:ButtonProps) => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    if(event.target.checked === true){
      return setIsChecked(true);
    } else{
      return setIsChecked(false);
    }
  };

  const checker = () =>{
    if(isChecked === true){
      return(
        <IconAlt/>
      )
    }else {
      return(
        <Icon/>
      )
    }
  }

  const variantChecker = () =>{
    if(variant === 'button'){
      return(
          <ParentElement>
            <ButtonVariant disabled={disabled} {...props}>
              <Wrapper>
                {checker()}
                {text}
              </Wrapper>
            </ButtonVariant>
          </ParentElement>
      )
    }else if(variant === 'checkbox'){
      return(
        <ParentElement>
          <Switch>
            <SwitchInput disabled={disabled} onChange={handleChange}  {...props}/>
            <ButtonParent>
              <Wrapper>
                {checker()}
                {text}
              </Wrapper>
            </ButtonParent>
          </Switch>
        </ParentElement>
      )
    }
  }

    return(
        <>
          {variantChecker()}
        </>
    )
}
