export interface FormInputProps {
    label: string;
    width?: string;
    size?: "small" | "medium" | undefined;
    placeholder?: string;
    variant?: "standard" | "filled" | "outlined" | undefined;
    fontSize?: string;
    value?: string;
    type?: string;
    onChange?: (e: any) => void;
}