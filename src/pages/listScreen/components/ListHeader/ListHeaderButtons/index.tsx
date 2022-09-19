import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ListHeaderButtons() {

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        aria-label="wrapped label tabs example"
        textColor='inherit'
        TabIndicatorProps={{ sx: {backgroundColor: "white"}, }}
        sx={{
            backgroundColor: "#5672eb",
            color: "white",
            fontSize: 10,
        }}
      >
        <Tab
          value="one"
          label="Lista"
          sx={{
            fontSize: 12,
        }}
          wrapped
        />
        <Tab
         value="two"
         label="Criar novo"
          sx={{
            fontSize: 12
        }}/>
      </Tabs>
    </Box>
  );
}
