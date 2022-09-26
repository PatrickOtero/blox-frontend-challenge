import MoreVertIcon from "@mui/icons-material/MoreVertOutlined";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Avatar, IconButton } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ListPageCardProps } from '../../../../@Types/components/ListPageCard';
import { initialsObtainer } from '../../../../common/utils/utils';
import { BottomContainer, CardContainer, MiddleContainer, MiddleContainerBottom, MiddleContainerMain, UpperContainer } from './Card.style';

export default function ListPageCard({ cardDate, descOne, id, edType, extremityColor, middleColor, titleImage, responsibles, onClick }: ListPageCardProps) {

  return (
    <CardContainer onClick={onClick}>
        <Card sx={{ minWidth: 275, borderRadius: 2 }}>
        <CardContent>
            <UpperContainer sx={{ backgroundColor: `${extremityColor}`}}>
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
            <MiddleContainer sx={{ backgroundColor: `${middleColor}`}}>
                <MiddleContainerMain>
                    <Avatar src={`${titleImage}`} alt="blox imagem" sx={{bgcolor: "#4ebce7"}}/>
                    <Typography className='middle-container-main-span'>{descOne}</Typography>
                </MiddleContainerMain>
                <MiddleContainerBottom>
                    <Typography className='middle-container-bottom-span'>ID<br/>{id}</Typography>
                    <Typography className='middle-container-bottom-span'>Modalidade<br/>{edType}</Typography>
                </MiddleContainerBottom>
            </MiddleContainer>
            </CardContent>
        <BottomContainer sx={{ backgroundColor: `${extremityColor}`}}>
            <CardActions>
                <Avatar sx={{ bgcolor: "#647fc9", border: 1, fontSize: 18 }} aria-label="recipe">
                    {initialsObtainer(responsibles.name)}
                </Avatar>
            </CardActions>
        </BottomContainer>
        </Card>
    </CardContainer>
  );
}