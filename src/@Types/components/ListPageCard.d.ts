export interface ListPageCardProps {
    cardDate?: string | undefined;
    descOne?: string | undefined;
    id?: string | undefined;
    edType: string | undefined;

    extremityColor: string;
    middleColor: string;
    titleImage: string;

    responsibles: any

    onClick: () => void;
}

interface ICardDetailsCompetencies {
    description: string | undefined;
    icon_url: string | undefined;
    id: number | undefined;
    name: string | undefined;
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