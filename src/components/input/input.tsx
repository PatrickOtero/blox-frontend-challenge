import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormInput({label, width = "75", size = "small", placeholder}: formInputProps) {
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
       variant="outlined"
       size={size}
       placeholder={placeholder}
       InputProps={{ sx: { height: 40 } }}
       InputLabelProps={{ sx: { fontSize: 15 } }}
        />
    </Box>
  );
}