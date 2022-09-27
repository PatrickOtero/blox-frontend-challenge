import CampaignIcon from '@mui/icons-material/CampaignOutlined';
import QuestionMark from '@mui/icons-material/QuestionMarkOutlined';
import { Avatar, Button, IconButton, TextField, Box, MenuItem } from "@mui/material";
import { ListDashes, MagnifyingGlass, SquareHalfBottom, SquaresFour } from "phosphor-react";
import { useEffect } from "react";
import { useDataHelper } from '../../common/hooks/data';
import useListContext from '../../hooks/List/useListContext';
import { ExpandedCard } from './components/ExpandedCard';
import ListBottomButtons from "./components/ListBottom";
import { ListHeader } from "./components/ListHeader";
import { ListAboveBottomButtonsContainer, ListAboveBottomContainer, ListContainer, ListMain, ListMainCards, ListMainIcons, ListMainTitle, TitleInputs } from "./List.styles";
import { useState } from "react";
import { CardDetailsProps } from '../../@Types/components/ListPageCard';
import useLoginContext from '../../hooks/Login/useLoginContext';
import useCardList from './hook/useCardList';

export function CurricularUnitsListPage() {

    const [ cardDetailsModal, setCardDetailsModal ] = useState<boolean>(false)
    const [ cardDetails, setCardDetails ] = useState<CardDetailsProps>({title: "", headerColor: "", modality: "", hours: 0, knowledgeArea: "", competencies: [], functionalArea: "", profile: "" })

    const [ filter, setFilter ] = useState<string>("allCards");

    
    
    const { handleGetListData, handleGetCompleteList, page, setPage, inputFilters, setInputFilters, searchInput, setSearchInput, isFirstPage, isLastPage, completeListData, listData } = useListContext();

    const { loading } = useLoginContext()
    
    const { listFilterOptions } = useDataHelper();
    
    const { cardFilters } = useCardList({setCardDetailsModal, setCardDetails});
    
    const handleLoadListData = async() => {
        await handleGetListData()
    }

    const handleLoadCompleteListData = async() => {
        await handleGetCompleteList()
    }

    useEffect(() => {
        handleLoadListData()
    }, [])

    useEffect(() => {
        handleLoadCompleteListData()
    }, [filter])

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

    const handleChangeFilter = () => {
        if (!searchInput?.length) {
            setFilter("allCards")
            return
        }

        setFilter("cardTitleOrId")
    }

    const handleUseFiltersToRenderList = (filterName: string) => {
        if (filterName === "cardTitleOrId") {
            return cardFilters.cardTitleOrId(searchInput);
        } else if (filterName === "allCards") {
            return cardFilters.allCards();
        }
    }

    return (
       <ListContainer>
        {loading && (
        <div className="backdrop">
          <div className="login-loading">
            <div className="login-loader"></div>
          </div>
        </div>
      )}
        { cardDetailsModal &&
         <div className='backdrop'>
            <ExpandedCard cardDetails={cardDetails} setCardDetailsModal={setCardDetailsModal}/>
         </div>
         }
        <ListHeader/>
        <ListMain>
            <ListMainTitle>
                <Box className="title-main">
                <b>Arquivados</b>
                <TitleInputs>
                    <div className='id-title-container'>
                        <TextField value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className='search-input' variant='standard' label="Título ou ID" />
                        <IconButton>
                            <MagnifyingGlass onClick={() => handleChangeFilter()}
                            className='search-icon' size="26"/>
                        </IconButton>
                    </div>
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
                {(listData?.length || completeListData?.length) && handleUseFiltersToRenderList(filter)}
                {(!listData?.length || ( filter === "cardTitleOrId" && !completeListData?.length)) && <h1>A LISTA ESTÁ VAZIA</h1>}
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
        <div>
            <ListBottomButtons/>
        </div>
       </ListContainer>
    )
}