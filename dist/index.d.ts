import React from 'react';

declare type ButtonProps = {
    text?: string;
    disabled?: boolean;
    variant?: 'checkbox' | 'button';
};
declare const Button: ({ text, variant, disabled, ...props }: ButtonProps) => JSX.Element;

interface BarProps {
    dark?: boolean;
}
declare const Bar: ({ dark, ...props }: BarProps) => JSX.Element;

interface WidgetProps {
    dark?: boolean;
    title?: string | number;
    content?: React.ReactNode;
    icon?: boolean;
    lvl?: string | number;
}
declare const Widget: ({ dark, title, content, lvl, icon, ...props }: WidgetProps) => JSX.Element;

declare type TitleProps = {
    title?: string;
    subtitle?: string;
};
declare const Title: ({ title, subtitle, ...props }: TitleProps) => JSX.Element;

declare type FooterProps = {
    text?: string;
};
declare const Footer: ({ text, ...props }: FooterProps) => JSX.Element;

declare type YorhaNavLinkProps = {
    text?: string | any;
    to?: string;
    filter?: string;
    className?: string;
    disabled?: boolean;
    filterType?: string;
    variant?: "button" | "nav" | "transparent" | "neutral";
};
declare const YorhaNavLink: ({ to, filter, filterType, variant, text, ...props }: YorhaNavLinkProps) => JSX.Element;

declare type TabProps$1 = {
    content?: React.ReactNode;
    className?: string;
};
declare const Tab: ({ content, className }: TabProps$1) => JSX.Element;

declare const Strip: () => JSX.Element;

declare type TabProps = {
    content?: React.ReactNode;
};
declare const ScrollElement: ({ content }: TabProps) => JSX.Element;

declare type DropDownTypes = {
    Title?: string;
    Content?: React.ReactNode;
};
declare const DropDown: ({ Title, Content }: DropDownTypes) => JSX.Element;

export { Bar, Button, DropDown, Footer, ScrollElement, Strip, Tab, Title, Widget, YorhaNavLink };
