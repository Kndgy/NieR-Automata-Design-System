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
    title?: string;
    content?: any;
}
declare const Widget: ({ dark, title, content, ...props }: WidgetProps) => JSX.Element;

declare type TitleProps = {
    text?: string;
};
declare const Title: ({ text, ...props }: TitleProps) => JSX.Element;

declare type FooterProps = {
    text?: string;
};
declare const Footer: ({ text, ...props }: FooterProps) => JSX.Element;

declare type YorhaNavLinkProps = {
    text?: string;
    to?: string;
    filter?: string;
    className?: string;
    disabled?: boolean;
    filterType?: string;
    variant?: "button" | "nav" | "transparent" | "neutral";
};
declare const YorhaNavLink: ({ to, filter, filterType, variant, text, ...props }: YorhaNavLinkProps) => JSX.Element;

export { Bar, Button, Footer, Title, Widget, YorhaNavLink };
