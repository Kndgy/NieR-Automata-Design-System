import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useSearchParams, NavLink } from 'react-router-dom';

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

const Icon$1 = styled.div`
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
`;
const Switch = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 10;
`;
const ButtonParent = styled.div`
  pointer-events: auto;
  display: flex;
  height: 100%;
  padding: 10px;
  color: ${colors$1.colors[2].hex};
  background-image: linear-gradient(90deg, #b4af9a 50%, #b4af9a 50%, #57544a 50%, #57544a 100%);
  background-size: 200%;
  transition: .2s linear;
  &:hover{
    background-position: -100%;
    color: ${colors$1.colors[1].hex};
  }
  &:hover ${Icon$1}{
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
  color: ${colors$1.colors[2].hex};
  background-image: linear-gradient(90deg, #b4af9a 50%, #b4af9a 50%, #57544a 50%, #57544a 100%);
  background-size: 200%;
  transition: .2s linear;
  &:hover{
    background-position: -100%;
    color: ${colors$1.colors[1].hex};
  }
  &:hover ${Icon$1}{
    background-position: -100%;
  }
  &:disabled{
    opacity: 0.6;
    pointer-events: none;
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
const Wrapper = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  gap:10px;
  align-items: center;
  justify-content: left;
`;
ButtonParent.defaultProps = {
  theme: {
    main: `1`
  }
};
const Button$1 = ({ text, variant = "button", disabled, ...props }) => {
  const [isChecked, setIsChecked] = React.useState(false);
  const handleChange = (event) => {
    if (event.target.checked === true) {
      return setIsChecked(true);
    } else {
      return setIsChecked(false);
    }
  };
  const checker = () => {
    if (isChecked === true) {
      return /* @__PURE__ */ React.createElement(IconAlt, null);
    } else {
      return /* @__PURE__ */ React.createElement(Icon$1, null);
    }
  };
  const variantChecker = () => {
    if (variant === "button") {
      return /* @__PURE__ */ React.createElement(ParentElement, null, /* @__PURE__ */ React.createElement(ButtonVariant, {
        disabled,
        ...props
      }, /* @__PURE__ */ React.createElement(Wrapper, null, checker(), text)));
    } else if (variant === "checkbox") {
      return /* @__PURE__ */ React.createElement(ParentElement, null, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(SwitchInput, {
        disabled,
        onChange: handleChange,
        ...props
      }), /* @__PURE__ */ React.createElement(ButtonParent, null, /* @__PURE__ */ React.createElement(Wrapper, null, checker(), text))));
    }
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, variantChecker());
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
const theme$2 = {
  main: `${colors$1.colors[2].hex}`
};
const Bar = ({ dark = false, ...props }) => {
  const checker = () => {
    if (dark === false) {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(BarItem, null), /* @__PURE__ */ React.createElement(BarItem, null));
    } else if (dark === true) {
      return /* @__PURE__ */ React.createElement(ThemeProvider, {
        theme: theme$2
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
  align-items: center;
  height: 10%;
  gap: 10px;
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.color};
  padding: 10px;
`;
const Content$1 = styled.div`
  width: 100%;
  height: 90%;
  background-color: #dad4bb;
`;
const ContentWrapper = styled.div`
padding: 10px
`;
Header.defaultProps = {
  theme: {
    main: `${colors$1.colors[1].hex}`,
    color: `${colors$1.colors[2].hex}`
  }
};
const theme$1 = {
  main: `${colors$1.colors[2].hex}`,
  color: `${colors$1.colors[0].hex}`
};
const Widget = ({ dark = false, title, content, ...props }) => {
  const checker = () => {
    if (dark === false) {
      return /* @__PURE__ */ React.createElement(Header, null, /* @__PURE__ */ React.createElement("div", {
        className: "icon"
      }, "wip icon"), /* @__PURE__ */ React.createElement("div", {
        className: "title"
      }, title));
    } else if (dark === true) {
      return /* @__PURE__ */ React.createElement(ThemeProvider, {
        theme: theme$1
      }, /* @__PURE__ */ React.createElement(Header, null, /* @__PURE__ */ React.createElement("div", {
        className: "icon"
      }, "wip icon"), /* @__PURE__ */ React.createElement("div", {
        className: "title"
      }, title)));
    }
  };
  return /* @__PURE__ */ React.createElement(WidgetParent, null, checker(), /* @__PURE__ */ React.createElement(Content$1, null, /* @__PURE__ */ React.createElement(ContentWrapper, null, content)));
};

const TitleParent = styled.div`

  color: ${colors$1.colors[2].hex};
  letter-spacing: 2px;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: baseline;
  text-shadow: 6px 4px #00000050;
  h1{
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  h3{
    text-shadow: 6px 4px #00000000;
  }
`;
const Title = ({ title, subtitle, ...props }) => {
  return /* @__PURE__ */ React.createElement(TitleParent, {
    ...props
  }, /* @__PURE__ */ React.createElement("h1", null, title), /* @__PURE__ */ React.createElement("h3", null, subtitle));
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
  align-items: center;
`;
const Footer = ({ text, ...props }) => {
  return /* @__PURE__ */ React.createElement(FooterParent, {
    ...props
  }, /* @__PURE__ */ React.createElement(Bar, {
    dark: true
  }), /* @__PURE__ */ React.createElement(TextContainer, null, text));
};

const Icon = styled.div`
  width: 5%;
  height: 5%;
  min-width: 20px;
  min-height: 20px;
  background-image: linear-gradient(90deg, #57544a 50%, #57544a 50%, #b4af9a 50%, #b4af9a 100%);
  background-size: 200%;
  transition: .1s linear;
`;
const YorhaCustomLink = ({ className, text, filter, filterType, to, disabled = false, ...props }) => {
  let [params] = useSearchParams();
  let isActive = params.get(filterType) === filter;
  return /* @__PURE__ */ React.createElement("div", {
    className
  }, /* @__PURE__ */ React.createElement(Button, {
    disabled,
    ...props
  }, /* @__PURE__ */ React.createElement(NavLink, {
    className: ["mainClass", isActive ? "active" : "inactive"].join(" "),
    to: `${to}` + filter
  }, /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React.createElement(Icon, null), " ", text))));
};
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
`;
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
    background-image: ${(props) => props.theme.backgroundImage};
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
    width: ${(props) => props.theme.width};
    padding-bottom: ${(props) => props.theme.padding};
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
  }
  .active > .wrapper{
    color: #b4af9a;
  }
`;
CustomNavLink.defaultProps = {
  theme: {
    backgroundImage: `linear-gradient(90deg, #b4af9a 50%, #b4af9a 50%, #57544a 50%, #57544a 100%)`,
    padding: `2rem`,
    width: `100%`
  }
};
const theme = {
  backgroundImage: `linear-gradient(90deg, #b4af9a 50%, #b4af9a 50%, #57544a 50%, #57544a 100%)`,
  width: `140%`,
  padding: `0rem`
};
const transparent = {
  backgroundImage: `linear-gradient(90deg, #b4af9a00 50%, #b4af9a00 50%, #57544a 50%, #57544a 100%)`
};
const neutral = {
  backgroundImage: `linear-gradient(90deg, #b4af9a 50%, #b4af9a 50%, #57544a 50%, #57544a 100%)`,
  width: `100%`,
  padding: `0rem`
};
const YorhaNavLink = ({ to, filter = "", filterType, variant = "nav", text, ...props }) => {
  const checker = () => {
    if (variant === "nav") {
      return /* @__PURE__ */ React.createElement(CustomNavLink, {
        to,
        filter,
        text,
        filterType,
        variant,
        ...props
      });
    } else if (variant === "button") {
      return /* @__PURE__ */ React.createElement(ThemeProvider, {
        theme
      }, /* @__PURE__ */ React.createElement(CustomNavLink, {
        to,
        filter,
        filterType,
        variant,
        text,
        ...props
      }));
    } else if (variant === "transparent") {
      return /* @__PURE__ */ React.createElement(ThemeProvider, {
        theme: transparent
      }, /* @__PURE__ */ React.createElement(CustomNavLink, {
        to,
        filter,
        filterType,
        variant,
        text,
        ...props
      }));
    } else if (variant === "neutral") {
      return /* @__PURE__ */ React.createElement(ThemeProvider, {
        theme: neutral
      }, /* @__PURE__ */ React.createElement(CustomNavLink, {
        to,
        filter,
        filterType,
        variant,
        text,
        ...props
      }));
    }
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, checker());
};

const StyledTab = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0rem 1rem 0rem 1rem;
  background-color: #dad4bb;
  justify-content: space-between;
`;
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
`;
const SeparatorStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 1.2rem;
  align-items: center;

`;
const Dot = styled.div`
  height: 0.3rem;
  width: 0.3rem;
  background-color: #b4af9a;
  border-radius: 50%;
`;
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
`;
const Tab = ({ content }) => {
  return /* @__PURE__ */ React.createElement(StyledTab, null, /* @__PURE__ */ React.createElement(SeparatorStyle, null, /* @__PURE__ */ React.createElement(Separator, null), " ", /* @__PURE__ */ React.createElement(Dot, null)), /* @__PURE__ */ React.createElement(Content, null, content), /* @__PURE__ */ React.createElement(SeparatorStyle, null, /* @__PURE__ */ React.createElement(Separator, null), " ", /* @__PURE__ */ React.createElement(Dot, null)));
};

export { Bar, Button$1 as Button, Footer, Tab, Title, Widget, YorhaNavLink };
