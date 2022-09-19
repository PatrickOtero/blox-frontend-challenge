import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormInputProps } from '../../@Types/components/FormInput';

export default function FormInput({label, width = "75", size = "small", placeholder, variant, fontSize = "1.2"}: FormInputProps) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: `${width}ch` },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
       id="outlined-basic"
       label={label}
       variant={variant}
       size={size}
       placeholder={placeholder}
       InputProps={{ sx: { height: 40 } }}
       InputLabelProps={{ sx: { fontSize: `${fontSize}rem` } }}
        />
    </Box>
  );
}