import Button from '@mui/material/Button';
import DescriptionIcon from '@mui/icons-material/Description';
import Stack from '@mui/material/Stack';
import { ButtonProps } from '../../@Types/components/FormButton';

export default function FormButton({ variant="contained", width = "40", fontSize="1.2", text, icon = true, size = "medium", onClick, type = "button" }: ButtonProps) {
  return (
    <Stack direction="row" spacing={2}>
      <Button
      type={type}
      onClick={onClick}
       variant={variant}
        startIcon={icon ? <DescriptionIcon /> : ""}
        style={{
          minWidth: `${width}rem`,
          fontSize: `${fontSize}rem`
        }}
        size={size}
        >
        {text}
      </Button>
    </Stack>
  );
}