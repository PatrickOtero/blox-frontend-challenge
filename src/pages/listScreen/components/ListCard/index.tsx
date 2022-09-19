import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { BottomContainer, CardContainer, MiddleContainer, MiddleContainerBottom, MiddleContainerMain, UpperContainer } from './Card.style';
import { ListPageCardProps } from '../../../../@Types/components/ListPageCard';
import {Avatar, IconButton} from "@mui/material"
import MoreVertIcon from "@mui/icons-material/MoreVertOutlined"
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function ListPageCard({ cardDate }: ListPageCardProps) {
  return (
    <CardContainer>
        <Card sx={{ minWidth: 275, borderRadius: 2 }}>
        <CardContent>
            <UpperContainer>
                <Typography sx={{ color: "white" }}>Data Limite</Typography>
                <Typography sx={{ fontSize: 16, color: "white" }} gutterBottom>
                {cardDate}
                </Typography>
                <IconButton className='settings-button' aria-label="settings">
                    <MoreVertIcon fontSize='large'/>
                </IconButton>
                <IconButton className='task-alt-button'>
                    <TaskAltIcon fontSize='large'/>
                </IconButton>
            </UpperContainer>
            <MiddleContainer>
                <MiddleContainerMain>
                    <Avatar alt="blox image" sx={{bgcolor: "#4ebce7"}}>Blox</Avatar>
                    <Typography className='middle-container-main-span'>Competências do Liderança Motivacional</Typography>
                </MiddleContainerMain>
                <MiddleContainerBottom>
                    <Typography className='middle-container-bottom-span'>ID<br/>2714</Typography>
                    <Typography className='middle-container-bottom-span'>Modalidade<br/>EAD</Typography>
                </MiddleContainerBottom>
            </MiddleContainer>
            </CardContent>
        <BottomContainer>
            <CardActions>
                <Avatar sx={{ bgcolor: "#647fc9", border: 1, fontSize: 18 }} aria-label="recipe">
                    JM
                </Avatar>
            </CardActions>
        </BottomContainer>
        </Card>
    </CardContainer>
  );
}