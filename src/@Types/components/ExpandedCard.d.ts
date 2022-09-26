import { CardDetailsProps } from "./ListPageCard";

export interface ExpandedCardProps {
    cardDetails: CardDetailsProps;
    setCardDetailsModal: React.Dispatch<React.SetStateAction<boolean>>;
}