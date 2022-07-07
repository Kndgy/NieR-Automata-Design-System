declare type ButtonProps = {
    text?: string;
    disabled?: boolean;
};
declare const Button: ({ text, disabled, ...props }: ButtonProps) => JSX.Element;

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

export { Bar, Button, Footer, Title, Widget };
