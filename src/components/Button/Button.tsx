import Button from '@mui/material/Button';
import DescriptionIcon from '@mui/icons-material/Description';
import Stack from '@mui/material/Stack';;

export default function FormButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
       variant="contained"
        startIcon={<DescriptionIcon />}
        style={{
          minWidth: "45rem",
          fontSize: "1.2rem"
        }}
        >
        CADASTRAR
      </Button>
    </Stack>
  );
}