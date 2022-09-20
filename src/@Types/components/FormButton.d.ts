export interface ButtonProps {
    text: string;
    variant?: "text" | "outlined" | "contained";
    width?: string;
    fontSize?: string;
    icon?: boolean;
    size?: "small" | "medium" | "large";
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
}