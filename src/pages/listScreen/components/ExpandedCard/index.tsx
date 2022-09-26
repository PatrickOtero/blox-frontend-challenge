import { Avatar, Card, IconButton } from "@mui/material";
import { Lamp, X } from "phosphor-react";
import { ExpandedCardProps } from "../../../../@Types/components/ExpandedCard";
import { CardMiddle, CardMiddleBottom, CardMiddleTop, CardTop, ExpandedCardContainer } from "./ExpandedCard.style";

export function ExpandedCard({ cardDetails, setCardDetailsModal }: ExpandedCardProps) {
    return (
        <ExpandedCardContainer>
            <Card>
                <CardTop sx={{backgroundColor: `${cardDetails.headerColor}`}}>
                    <Avatar className="subject-icon">Blox</Avatar>
                    <div className="title-and-close-button">
                        <h1 className="subject-title">{cardDetails.title}</h1>
                        <IconButton className="close-icon-button">
                            <X className="close-icon" onClick={() => setCardDetailsModal(false)}/>
                        </IconButton>
                    </div>
                </CardTop>
                <CardMiddle>
                    <CardMiddleTop>
                        <div className="CardMiddleTop-info">
                            <span className="info-span main">Modalidade</span>
                            <span className="info-span secondary">{cardDetails.modality}</span>
                        </div>
                        <div className="CardMiddleTop-info-divisor"/>
                        <div className="CardMiddleTop-info">
                            <span className="info-span main">Carga horária</span>
                            <span className="info-span secondary">{cardDetails.hours}h</span>
                        </div>
                    </CardMiddleTop>
                    <CardMiddleBottom>
                        <div className="area-container">
                            <h1>Área de conhecimento</h1>
                            <div className="knowledge-icon-container">
                                <Avatar className="knowledge-icon" sx={{backgroundColor: `${cardDetails.headerColor}`}}>B</Avatar>
                                    <span>{cardDetails.knowledgeArea}</span>
                            </div>
                        </div>
                        <div className="area-container">
                            <h1>Área funcional</h1>
                            <span>{cardDetails.functionalArea}</span>
                        </div>
                        <div className="area-container">
                            <h1>Perfil</h1>
                            <div className="profile-icon-container">
                                <Lamp size="32"/>
                                <span>{cardDetails.profile}</span>
                            </div>
                        </div>
                        <div className="area-container">
                            <h1>Competências</h1>
                            <div className="competencies-container">
                                {cardDetails.competencies.length > 0 && cardDetails.competencies.map((item: any) => (
                                <p style={{ backgroundColor: `${cardDetails.headerColor}`}}className="competency-name">{item.name}</p>
                            ))}
                                {!cardDetails.competencies.length && <p className="empty-competencies">Nenhuma</p>}    
                            </div>
                        </div>
                    </CardMiddleBottom>
                </CardMiddle>
            </Card>
        </ExpandedCardContainer>
    )
}