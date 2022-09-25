import { Avatar, Card, IconButton } from "@mui/material";
import { Lamp, X } from "phosphor-react";
import { ExpandedCardProps } from "../../../../@Types/components/ExpandedCard";
import { CardMiddle, CardMiddleBottom, CardMiddleTop, CardTop, ExpandedCardContainer } from "./ExpandedCard.style";

export function ExpandedCard({ setCardDetails }: ExpandedCardProps) {
    return (
        <ExpandedCardContainer>
            <Card>
                <CardTop>
                    <Avatar className="subject-icon">Blox</Avatar>
                    <h1 className="subject-title">3D para Design</h1>
                    <IconButton className="close-icon-button">
                        <X className="close-icon" onClick={() => setCardDetails(false)}/>
                    </IconButton>
                </CardTop>
                <CardMiddle>
                    <CardMiddleTop>
                        <div className="CardMiddleTop-info">
                            <span className="info-span main">Modalidade</span>
                            <span className="info-span secondary">Presencial</span>
                        </div>
                        <div className="CardMiddleTop-info-divisor"/>
                        <div className="CardMiddleTop-info">
                            <span className="info-span main">Carga horária</span>
                            <span className="info-span secondary">72h</span>
                        </div>
                    </CardMiddleTop>
                    <CardMiddleBottom>
                        <div className="area-container">
                            <h1>Área de conhecimento</h1>
                            <div className="knowledge-icon-container">
                                <Avatar className="knowledge-icon">H</Avatar>
                                <span>Humanidades, Artes e linguagens</span>
                            </div>
                        </div>
                        <div className="area-container">
                            <h1>Área funcional</h1>
                            <span>Graduação</span>
                        </div>
                        <div className="area-container">
                            <h1>Perfil</h1>
                            <div className="profile-icon-container">
                                <Lamp size="32"/>
                                <span>Design</span>
                            </div>
                        </div>
                        <div className="area-container">
                            <h1>Competências</h1>
                            <p>Criatividade</p>
                        </div>
                    </CardMiddleBottom>
                </CardMiddle>
            </Card>
        </ExpandedCardContainer>
    )
}