export interface ListPageCardProps {
    cardDate?: string;
    descOne?: string;
    id?: string;
    edType: string;

    extremityColor: string;
    middleColor: string;
    titleImage: string;

    responsibles: any

    onClick: () => void;
}

interface ICardDetailsCompetencies {
    description: string;
    icon_url: string;
    id: number;
    name: string;
}

export interface CardDetailsProps {
    title: string;
    modality: string;
    hours: number;
    knowledgeArea: string;
    competencies: ICardDetailsCompetencies[]
    functionalArea: string;
    profile: string;

    headerColor: string;
}