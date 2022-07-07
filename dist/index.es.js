import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

var colors = [
	{
		name: "light-yellow",
		hex: "#dad4bb"
	},
	{
		name: "light-brown",
		hex: "#b4af9a"
	},
	{
		name: "dark-brown",
		hex: "#57544a"
	},
	{
		name: "dark-brown-strip",
		hex: "#4e4b42"
	},
	{
		name: "red-alert",
		hex: "#cd664d"
	}
];
var colors$1 = {
	colors: colors
};

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
`;
const ButtonParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: left;
  height: 100%;
  width: 100%;
  padding: 10px;
  color: ${colors$1.colors[2].hex};
  background-image: linear-gradient(90deg, #b4af9a 50%, #b4af9a 50%, #57544a 50%, #57544a 100%);
  background-size: 200%;
  transition: .2s linear;
  &:hover{
    background-position: -100%;
    color: ${colors$1.colors[1].hex};
  }
  &:hover ${Icon}{
    background-position: -100%;
  }
`;
const SwitchInput = styled.input.attrs({
  type: "checkbox"
})`
width: 0;
height: 0;
opacity: 0;
&:checked + ${ButtonParent}{
  background-position: -100%;
  color: ${colors$1.colors[1].hex};
}
&:disabled + ${ButtonParent}{
  opacity: 0.6;
  pointer-events: none;
}
`;
ButtonParent.defaultProps = {
  theme: {
    main: `1`
  }
};
const Button = ({ text, disabled = false, ...props }) => {
  const [isChecked, setIsChecked] = React.useState(false);
  const handleChange = (event) => {
    if (event.target.checked == true) {
      console.log("checked");
      return setIsChecked(true);
    } else {
      console.log("unchecked");
      return setIsChecked(false);
    }
  };
  console.log(isChecked);
  const checker = () => {
    if (isChecked == true) {
      return /* @__PURE__ */ React.createElement(IconAlt, null);
    } else {
      return /* @__PURE__ */ React.createElement(Icon, null);
    }
  };
  return /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(SwitchInput, {
    disabled,
    onChange: handleChange,
    ...props
  }), /* @__PURE__ */ React.createElement(ButtonParent, null, checker(), text));
};

const BarParent = styled.div`
display: flex;
flex-direction: row;
height: 100%;
`;
const BarItem = styled.div`
background-color: ${(props) => props.theme.main};
width: 10px;
height: 100%;
margin-right: 5px;
  &:nth-child(2){
    width: 4px;
  }
`;
BarItem.defaultProps = {
  theme: {
    main: `${colors$1.colors[1].hex}`
  }
};
const theme$1 = {
  main: `${colors$1.colors[2].hex}`
};
const Bar = ({ dark = false, ...props }) => {
  const checker = () => {
    if (dark == false) {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(BarItem, null), /* @__PURE__ */ React.createElement(BarItem, null));
    } else if (dark == true) {
      return /* @__PURE__ */ React.createElement(ThemeProvider, {
        theme: theme$1
      }, /* @__PURE__ */ React.createElement(BarItem, null), /* @__PURE__ */ React.createElement(BarItem, null));
    }
  };
  return /* @__PURE__ */ React.createElement(BarParent, {
    ...props
  }, checker());
};

const WidgetParent = styled.div`
  width: 100%;
  height: 100%;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.color};
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
    main: `${colors$1.colors[1].hex}`,
    color: `${colors$1.colors[2].hex}`
  }
};
const theme = {
  main: `${colors$1.colors[2].hex}`,
  color: `${colors$1.colors[0].hex}`
};
const Widget = ({ dark = false, title, content, ...props }) => {
  const checker = () => {
    if (dark == false) {
      return /* @__PURE__ */ React.createElement(Header, null, /* @__PURE__ */ React.createElement("div", {
        className: "icon"
      }, "wip icon"), /* @__PURE__ */ React.createElement("div", {
        className: "title"
      }, title));
    } else if (dark == true) {
      return /* @__PURE__ */ React.createElement(ThemeProvider, {
        theme
      }, /* @__PURE__ */ React.createElement(Header, null, /* @__PURE__ */ React.createElement("div", {
        className: "icon"
      }, "wip icon"), /* @__PURE__ */ React.createElement("div", {
        className: "title"
      }, title)));
    }
  };
  return /* @__PURE__ */ React.createElement(WidgetParent, null, checker(), /* @__PURE__ */ React.createElement(ContentParent, {
    ...props
  }, /* @__PURE__ */ React.createElement(Content, null, content)));
};

const TitleParent = styled.div`
  text-shadow: 6px 4px rgba(0, 0, 0, 0.3);
  color: ${colors$1.colors[2].hex};
  letter-spacing: 2px;
`;
const Title = ({ text, ...props }) => {
  return /* @__PURE__ */ React.createElement(TitleParent, {
    ...props
  }, /* @__PURE__ */ React.createElement("h1", null, text));
};

const FooterParent = styled.div`
  width: 100%;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${colors$1.colors[0].hex};
  align-items: center;
`;
const TextContainer = styled.div`
font-size: 24px;
  padding: 0.5rem;
  color: ${colors$1.colors[2].hex};
`;
const Footer = ({ text, ...props }) => {
  return /* @__PURE__ */ React.createElement(FooterParent, {
    ...props
  }, /* @__PURE__ */ React.createElement(Bar, {
    dark: true
  }), /* @__PURE__ */ React.createElement(TextContainer, null, text));
};

export { Bar, Button, Footer, Title, Widget };
