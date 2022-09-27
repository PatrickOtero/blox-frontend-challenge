import { Box, Button } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useNavigate } from 'react-router-dom';
import useLoginContext from '../../../../../hooks/Login/useLoginContext';

export default function ListHeaderButtons() {

  const { removeToken, removeLoggedName } = useLoginContext()

  const navigate = useNavigate()

  const handleLogOut = () => {
      removeToken()
      removeLoggedName()
      navigate("/");
  }

  return (
    <Box className='headerButtons' sx={{ width: '100%' }}>
      <Tabs
        aria-label="wrapped label tabs example"
        textColor='inherit'
        sx={{
            fontSize: 10,
        }}
      >
        <Tab className="button-tab"
          value="one"
          label="Lista"
          sx={{
            fontSize: 12,
        }}
          wrapped
        />
        <Tab className="button-tab"
         value="two"
         label="Criar novo"
          sx={{
            fontSize: 12
          }}/>
      </Tabs>
          <Button onClick={() => handleLogOut()}className="logout-button">Deslogar</Button>
    </Box>
  );
}
