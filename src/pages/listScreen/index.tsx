import CampaignIcon from '@mui/icons-material/CampaignOutlined';
import QuestionMark from '@mui/icons-material/QuestionMarkOutlined';
import { Avatar, Button, IconButton, TextField, Box, MenuItem } from "@mui/material";
import { ListDashes, MagnifyingGlass, SquareHalfBottom, SquaresFour } from "phosphor-react";
import { useEffect } from "react";
import { useDataHelper } from '../../common/hooks/data';
import useListContext from '../../hooks/List/useListContext';
import { ExpandedCard } from './components/ExpandedCard';
import ListBottomButtons from "./components/ListBottom";
import ListPageCard from "./components/ListCard";
import { ListHeader } from "./components/ListHeader";
import { ListAboveBottomButtonsContainer, ListAboveBottomContainer, ListBottom, ListContainer, ListMain, ListMainCards, ListMainIcons, ListMainTitle, TitleInputs } from "./List.styles";
import { useState } from "react";

export function CurricularUnitsListPage() {

    const [ cardDetails, setCardDetails ] = useState<boolean>(false)

    const { handleGetListData, handleStoreListData, listData, responsibles, page, setPage, inputFilters, setInputFilters, isFirstPage, isLastPage } = useListContext();

    const { listFilterOptions } = useDataHelper();

    const handleLoadListData = async() => {
        await handleGetListData()
    }

    useEffect(() => {
        const handleLoadStoredData = async() => {
            await handleStoreListData()
        }

        handleLoadStoredData()
        handleLoadListData()
    }, [])

    const handleGoToPreviousPage = () => {
        if(page === 0) {
            return
        } else {
            setPage(page -1)
        }
    }

    const handleGoToNextPage = () => {
        if(page === 15) {
            return
        } else {
            setPage(page +1)
        }
    }

    useEffect(() => {
        handleLoadListData()
    }, [page])

    return (
       <ListContainer>
        { cardDetails &&
         <div className='list-card-details-backdrop'>
            <ExpandedCard setCardDetails={setCardDetails}/>
         </div>
         }
        <ListHeader/>
        <ListMain>
            <ListMainTitle>
                <Box className="title-main">
                <b>Arquivados</b>
                <TitleInputs>
                    <TextField className='search-input' variant='standard' label="Título ou ID" />
                    <TextField className='filter-input' 
                    value={inputFilters}
                    onChange={(e) => setInputFilters(e.target.value)}
                    variant='standard'
                    select
                    SelectProps={{ sx:{ fontSize: "1.5rem" }}}
                    label="Filtrar">
                        {listFilterOptions.map((option) => (
                            <MenuItem sx={{ fontSize: "1.5rem"}} key={option} value={option}>
                            {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </TitleInputs>
                </Box>
                    <div className="list-line"></div>
            </ListMainTitle>
            <ListMainIcons>
                <div className="squares-four">
                    <IconButton>
                        <SquaresFour size={32} weight="fill"/>
                    </IconButton>
                </div>
                <div className="list-dashes">
                    <IconButton>
                        <ListDashes size={32} weight="regular" color="#8f8a8a"/>
                    </IconButton>
                </div>
                <div className="square-half-bottom">
                    <IconButton>
                        <SquareHalfBottom size={32} color="#8f8a8a" weight="regular" />
                    </IconButton>
                </div>        
            </ListMainIcons>
            <ListMainCards>
                {listData?.length && listData.map((item: any) => (
                    <ListPageCard setCardDetails={setCardDetails} responsibles={responsibles} key={item.id} cardDate={item.date_limit_edition ? item.date_limit_edition : "Sem data limite"} descOne={item.title} id={item.id} edType={item.modality} extremityColor={item.cached_blox.knowledge_area.color1} middleColor={item.cached_blox.knowledge_area.color2} titleImage={item.cached_blox.blox_profile.icon_url ? item.cached_blox.blox_profile.icon_url : ""}/>
                ))}
                {!listData?.length && <h1>A LISTA ESTÁ VAZIA</h1>}
            </ListMainCards>
        </ListMain>
        <ListAboveBottomContainer>
            <IconButton>
                <Avatar sx={{
                    width: 46, height: 46
                }}className="megaphone-icon"><CampaignIcon fontSize="large"/></Avatar>
            </IconButton>
            <ListAboveBottomButtonsContainer>
                <Button disabled={isFirstPage} onClick={() => handleGoToPreviousPage()} className="pagination-button">anterior</Button>
                <Button disabled={isLastPage} onClick={() => handleGoToNextPage()} className="pagination-button">próximo</Button>
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