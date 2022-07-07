import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import colors from '../colors/colors.json'

type ButtonProps = {
  // icon?: any;
  text?: string;
  disabled?: boolean;
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

const Switch = styled.label`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 10;
`

const ButtonParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: left;
  height: 100%;
  width: 100%;
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

ButtonParent.defaultProps = {
  theme: {
    main: `1`
  }
}

export const Button = ({text, disabled=false, ...props}:ButtonProps) => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    if(event.target.checked == true){
      return setIsChecked(true);
    } else{
      return setIsChecked(false);
    }
  };

  const checker = () =>{
    if(isChecked == true){
      return(
        <IconAlt/>
      )
    }else {
      return(
        <Icon/>
      )
    }
  }

    return(
      <Switch>
        <SwitchInput disabled={disabled} onChange={handleChange}  {...props}/>
          <ButtonParent>
            {checker()}
            {text}
          </ButtonParent>
      </Switch>
    )
}
