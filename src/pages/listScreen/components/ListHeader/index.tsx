import { Button } from "@mui/material";
import { ListHeaderContainer } from "./ListHeader.style";
import ListHeaderButtons from "./ListHeaderButtons";

export function ListHeader() {
    return (
        <ListHeaderContainer>
            <h1>Gerenciar unidades curriculares</h1>
            <ListHeaderButtons/>
            <Button onClick={() => localStorage.setItem("Token", "")}className="logout-button">Deslogar</Button>
        </ListHeaderContainer>
    )
}