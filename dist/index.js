'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var reactRouterDom = require('react-router-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

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

const Icon$1 = styled__default["default"].div`
  z-index: 10;
  width: 5%;
  height: 5%;
  min-width: 20px;
  min-height: 20px;
  background-image: linear-gradient(90deg, #57544a 50%, #57544a 50%, #b4af9a 50%, #b4af9a 100%);
  background-size: 200%;
  transition: .1s linear;
`;
const IconAlt = styled__default["default"].div`
  z-index: 10;
  width: 5%;
  height: 5%;
  min-width: 20px;
  min-height: 20px;
  background-image: linear-gradient(90deg, #b4af9a 50%, #b4af9a 50%, #57544a 50%, #57544a 100%);
  background-size: 200%;
  transition: .1s linear;
`;
const Switch = styled__default["default"].label`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 10;
`;
const ButtonParent = styled__default["default"].div`
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
  &:hover ${Icon$1}{
    background-position: -100%;
  }
`;
const SwitchInput = styled__default["default"].input.attrs({
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
const Button$1 = ({ text, variant = "button", disabled = false, ...props }) => {
  const [isChecked, setIsChecked] = React__default["default"].useState(false);
  const handleChange = (event) => {
    if (event.target.checked == true) {
      return setIsChecked(true);
    } else {
      return setIsChecked(false);
    }
  };
  const checker = () => {
    if (isChecked == true) {
      return /* @__PURE__ */ React__default["default"].createElement(IconAlt, null);
    } else {
      return /* @__PURE__ */ React__default["default"].createElement(Icon$1, null);
    }
  };
  const variantChecker = () => {
    if (variant == "button") {
      return /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, /* @__PURE__ */ React__default["default"].createElement(ButtonParent, null, checker(), text));
    } else if (variant == "checkbox") {
      return /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, /* @__PURE__ */ React__default["default"].createElement(SwitchInput, {
        disabled,
        onChange: handleChange,
        ...props
      }), /* @__PURE__ */ React__default["default"].createElement(ButtonParent, null, checker(), text));
    }
  };
  return /* @__PURE__ */ React__default["default"].createElement(Switch, null, variantChecker());
};

const BarParent = styled__default["default"].div`
display: flex;
flex-direction: row;
height: 100%;
`;
const BarItem = styled__default["default"].div`
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
      return /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, /* @__PURE__ */ React__default["default"].createElement(BarItem, null), /* @__PURE__ */ React__default["default"].createElement(BarItem, null));
    } else if (dark === true) {
      return /* @__PURE__ */ React__default["default"].createElement(styled.ThemeProvider, {
        theme: theme$2
      }, /* @__PURE__ */ React__default["default"].createElement(BarItem, null), /* @__PURE__ */ React__default["default"].createElement(BarItem, null));
    }
  };
  return /* @__PURE__ */ React__default["default"].createElement(BarParent, {
    ...props
  }, checker());
};

const WidgetParent = styled__default["default"].div`
  width: 100%;
  height: 100%;
`;
const Header = styled__default["default"].div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.color};
  padding: 10px;
`;
const ContentParent = styled__default["default"].div`
  width: 100%;
  height: 100%;
  background-color: #dad4bb;
`;
const Content = styled__default["default"].div`
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
const theme$1 = {
  main: `${colors$1.colors[2].hex}`,
  color: `${colors$1.colors[0].hex}`
};
const Widget = ({ dark = false, title, content, ...props }) => {
  const checker = () => {
    if (dark == false) {
      return /* @__PURE__ */ React__default["default"].createElement(Header, null, /* @__PURE__ */ React__default["default"].createElement("div", {
        className: "icon"
      }, "wip icon"), /* @__PURE__ */ React__default["default"].createElement("div", {
        className: "title"
      }, title));
    } else if (dark == true) {
      return /* @__PURE__ */ React__default["default"].createElement(styled.ThemeProvider, {
        theme: theme$1
      }, /* @__PURE__ */ React__default["default"].createElement(Header, null, /* @__PURE__ */ React__default["default"].createElement("div", {
        className: "icon"
      }, "wip icon"), /* @__PURE__ */ React__default["default"].createElement("div", {
        className: "title"
      }, title)));
    }
  };
  return /* @__PURE__ */ React__default["default"].createElement(WidgetParent, null, checker(), /* @__PURE__ */ React__default["default"].createElement(ContentParent, {
    ...props
  }, /* @__PURE__ */ React__default["default"].createElement(Content, null, content)));
};

const TitleParent = styled__default["default"].div`
  text-shadow: 6px 4px rgba(0, 0, 0, 0.3);
  color: ${colors$1.colors[2].hex};
  letter-spacing: 2px;
`;
const Title = ({ text, ...props }) => {
  return /* @__PURE__ */ React__default["default"].createElement(TitleParent, {
    ...props
  }, /* @__PURE__ */ React__default["default"].createElement("h1", null, text));
};

const FooterParent = styled__default["default"].div`
  width: 100%;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${colors$1.colors[0].hex};
  align-items: center;
`;
const TextContainer = styled__default["default"].div`
font-size: 24px;
  padding: 0.5rem;
  color: ${colors$1.colors[2].hex};
  align-items: center;
`;
const Footer = ({ text, ...props }) => {
  return /* @__PURE__ */ React__default["default"].createElement(FooterParent, {
    ...props
  }, /* @__PURE__ */ React__default["default"].createElement(Bar, {
    dark: true
  }), /* @__PURE__ */ React__default["default"].createElement(TextContainer, null, text));
};

const Icon = styled__default["default"].div`
  width: 5%;
  height: 5%;
  min-width: 20px;
  min-height: 20px;
  background-image: linear-gradient(90deg, #57544a 50%, #57544a 50%, #b4af9a 50%, #b4af9a 100%);
  background-size: 200%;
  transition: .1s linear;
`;
const YorhaCustomLink = ({ className, text, to, disabled = false, ...props }) => {
  return /* @__PURE__ */ React__default["default"].createElement("div", {
    className
  }, /* @__PURE__ */ React__default["default"].createElement(Button, {
    disabled,
    ...props
  }, /* @__PURE__ */ React__default["default"].createElement(reactRouterDom.NavLink, {
    className: ["mainClass", ({ isActive }) => isActive ? "active" : "inactive"].join(" "),
    to
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React__default["default"].createElement(Icon, null), " ", text))));
};
const Button = styled__default["default"].button`
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
const CustomNavLink = styled__default["default"](YorhaCustomLink)`
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
    color: #57544a;
  }
  .wrapper{
    padding: 10px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
  }
`;
CustomNavLink.defaultProps = {
  theme: {
    padding: `2rem`,
    width: `100%`
  }
};
const theme = {
  width: `140%`,
  padding: `0rem`
};
const YorhaNavLink = ({ to, variant = "nav", text, ...props }) => {
  const checker = () => {
    if (variant === "nav") {
      return /* @__PURE__ */ React__default["default"].createElement(CustomNavLink, {
        to,
        variant,
        text,
        ...props
      });
    } else if (variant === "button") {
      return /* @__PURE__ */ React__default["default"].createElement(styled.ThemeProvider, {
        theme
      }, /* @__PURE__ */ React__default["default"].createElement(CustomNavLink, {
        to,
        variant,
        text,
        ...props
      }));
    }
  };
  return /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, checker());
};

exports.Bar = Bar;
exports.Button = Button$1;
exports.Footer = Footer;
exports.Title = Title;
exports.Widget = Widget;
exports.YorhaNavLink = YorhaNavLink;
