import { ReactNode } from "react";
import useListContext from "../../../hooks/List/useListContext";
import ListPageCard from "../components/ListCard";

interface IUseCardList {
    setCardDetailsModal: React.Dispatch<React.SetStateAction<boolean>>
    setCardDetails: React.Dispatch<React.SetStateAction<any>>
}

const useCardList = ({setCardDetailsModal, setCardDetails}: IUseCardList) => {
    const { completeListData, listData, responsibles } = useListContext();

  const cardList = (card: any): ReactNode => {
    return (
        <>
            <ListPageCard onClick={() =>
                {
                    setCardDetailsModal(true)
                    setCardDetails({
                        title: card.title,
                        modality: card.modality,
                        headerColor: card.cached_blox.knowledge_area.color1,
                        hours: card.cached_blox.hours,
                        knowledgeArea: card.cached_blox.knowledge_area.name,
                        competencies: card.cached_blox.competences,
                        functionalArea: card.cached_blox.functional_area.name,
                        profile: card.cached_blox.blox_profile.name
                    })
                }}
                responsibles={responsibles} key={card.id} cardDate={card.date_limit_edition ? card.date_limit_edition : "Sem data limite"} descOne={card.title} id={card.id} edType={card.modality} extremityColor={card.cached_blox.knowledge_area.color1} middleColor={card.cached_blox.knowledge_area.color2} titleImage={card.cached_blox.blox_profile.icon_url ? card.cached_blox.blox_profile.icon_url : ""}/>
        </>
    )
  }

  const cardFilters = {
    allCards: () => listData?.map(cardList),
    cardTitleOrId: (cardTitleOrId?: string) => completeListData?.filter((card: any) => card.title === cardTitleOrId || card.id === Number(cardTitleOrId)).map(cardList)
  }

  return { cardFilters }
}

export default useCardList
