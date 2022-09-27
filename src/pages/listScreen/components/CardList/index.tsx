function Nothing() {
    return <div></div>;
};

// import { useState } from "react";
// import { CardDetailsProps } from "../../../../@Types/components/ListPageCard";
// import { ICompProps } from "../../../../@Types/context/context";
// import useListContext from "../../../../hooks/List/useListContext";
// import ListPageCard from "../ListCard";

// const useCardList = () => {
//     const { listData, responsibles } = useListContext();

//     const [ cardDetailsModal, setCardDetailsModal ] = useState<boolean>(false)
//     const [ cardDetails, setCardDetails ] = useState<CardDetailsProps>({title: "", headerColor: "", modality: "", hours: 0, knowledgeArea: "", competencies: [], functionalArea: "", profile: "" })

//   const cardList = (card: any): React.ReactNode => {
//     return (
//         <>
//             <ListPageCard onClick={() =>
//                 {
//                     setCardDetailsModal(true)
//                     setCardDetails({
//                         title: card.title,
//                         modality: card.modality,
//                         headerColor: card.cached_blox.knowledge_area.color1,
//                         hours: card.cached_blox.hours,
//                         knowledgeArea: card.cached_blox.knowledge_area.name,
//                         competencies: card.cached_blox.competences,
//                         functionalArea: card.cached_blox.functional_area.name,
//                         profile: card.cached_blox.blox_profile.name
//                     })
//                 }}
//                 responsibles={responsibles} key={card.id} cardDate={card.date_limit_edition ? card.date_limit_edition : "Sem data limite"} descOne={card.title} id={card.id} edType={card.modality} extremityColor={card.cached_blox.knowledge_area.color1} middleColor={card.cached_blox.knowledge_area.color2} titleImage={card.cached_blox.blox_profile.icon_url ? card.cached_blox.blox_profile.icon_url : ""}/>
            
//             {!listData?.length && <h1>A LISTA ESTÁ VAZIA</h1>}
//         </>
//     )
//   }

//   const CardFilters = {
//     allCards: () => listData.map(cardList)
//   }

//   return { CardFilters }
// }

// export default useCardList
