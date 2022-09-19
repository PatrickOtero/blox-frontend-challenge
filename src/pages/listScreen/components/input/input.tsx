import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormInputProps } from '../../../../@Types/components/FormInput';
import MenuItem from "@mui/material/MenuItem"

const filters = [
  {
    id: 1,
    label: 'Aberto para edição',
  },
  {
    id: 2,
    label: 'Aguardando revisão',
  },
  {
    id: 3,
    label: 'Aprovado',
  },
  {
    id: 4,
    label: 'Arquivados',
  },
];

export default function ListFilterInput({label, width = "75", size = "small", placeholder, variant, fontSize = "1.2"}: FormInputProps) {
  const [filter, setfilter] = useState('Aberto para edição');

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setfilter(event.target.value);
  };

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
       select
       value={filter}
       onChange={handleChange}
       id="outlined-basic"
       label={label}
       variant={variant}
       size={size}
       placeholder={placeholder}
       InputProps={{ sx: { height: 40 } }}
       InputLabelProps={{ sx: { fontSize: `${fontSize}rem` } }}
        >
          {filters.map((option) => (
            <MenuItem
            key={option.id} value={option.label}>
              {option.label}
            </MenuItem>
          ))}          
        </TextField>
    </Box>
  );
}