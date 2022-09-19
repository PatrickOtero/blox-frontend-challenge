import FormInput from "../../components/input/input";
import ListFilterInput from "./components/input/input";
import { ListHeader } from "./components/ListHeader";
import { ListAboveBottomButtonsContainer, ListAboveBottomContainer, ListBottom, ListContainer, ListMain, ListMainCards, ListMainIcons, ListMainTitle } from "./List.styles";
import { MagnifyingGlass } from "phosphor-react";
import { SquaresFour, ListDashes, SquareHalfBottom } from "phosphor-react"
import ListPageCard from "./components/ListCard";
import { Avatar, IconButton, Button } from "@mui/material"
import CampaignIcon from '@mui/icons-material/CampaignOutlined';
import QuestionMark from '@mui/icons-material/QuestionMarkOutlined';
import ListHeaderButtons from "./components/ListHeader/ListHeaderButtons";
import ListBottomButtons from "./components/ListBottom";

export function CurricularUnitsListPage() {
    return (
       <ListContainer>
        <ListHeader/>
        <ListMain>
            <ListMainTitle>
                <div className="title-main">
                <b>Arquivados</b>
                    <div>
                        <FormInput label="Título ou ID" width="30" variant="standard" fontSize="1.5"></FormInput>
                        <div className="search-icon">
                            <MagnifyingGlass size={32} />
                        </div>
                        <ListFilterInput label="Filtrar" variant="standard" fontSize="1.5"/>
                    </div>
                </div>
                    <div className="list-line"></div>
            </ListMainTitle>
            <ListMainIcons>
                <div className="squares-four">
                    <SquaresFour size={32} weight="fill"/>
                </div>
                <div className="list-dashes">
                    <ListDashes size={32} weight="regular" color="#8f8a8a"/>
                </div>
                <div className="square-half-bottom">
                    <SquareHalfBottom size={32} color="#8f8a8a" weight="regular" />
                </div>        
            </ListMainIcons>
            <ListMainCards>
                <ListPageCard cardDate="19/08/2022"/>
            </ListMainCards>
        </ListMain>
        <ListAboveBottomContainer>
            <IconButton>
                <Avatar sx={{
                    width: 46, height: 46
                }}className="megaphone-icon"><CampaignIcon fontSize="large"/></Avatar>
            </IconButton>
            <ListAboveBottomButtonsContainer>
                <Button className="pagination-button">anterior</Button>
                <Button className="pagination-button">próximo</Button>
            </ListAboveBottomButtonsContainer>
            <IconButton>
                <Avatar sx={{
                    width: 46, height: 46
                }}className="interrogation-icon"><QuestionMark fontSize="large"/></Avatar>
            </IconButton>
        </ListAboveBottomContainer>
        <ListBottom>
            <ListBottomButtons/>
        </ListBottom>
       </ListContainer>
    )
}