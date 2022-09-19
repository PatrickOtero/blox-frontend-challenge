import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { ListBottomContainer } from './ListBottom.style';

export default function ListBottomButtons() {

  return (
    <ListBottomContainer
    className="box-container"sx={{ width: '100%'}}>
      <Tabs
      className='tabs-container'
        aria-label="wrapped label tabs example"
        textColor='inherit'
        TabIndicatorProps={{ sx: {backgroundColor: "white"}, }}
        sx={{
            backgroundColor: "#5672eb",
            color: "white",
            fontSize: 10,
        }}
      >
        <Tab className="list-tab-button"
          value="one"
          label="Aberto para edição"
          sx={{
            fontSize: 12,
        }}
          wrapped
        />
        <Tab className="list-tab-button"
         value="two"
         label="Aguardando revisão"
          sx={{
            fontSize: 12
        }}/>
        <Tab className="list-tab-button"
         value="two"
         label="Aprovado"
          sx={{
            fontSize: 12
        }}/>
        <Tab className="list-tab-button"
         value="two"
         label="Arquivados"
          sx={{
            fontSize: 12
        }}/>
      </Tabs>
    </ListBottomContainer>
  );
}