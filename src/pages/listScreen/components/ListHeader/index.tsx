import { ListHeaderContainer } from "./ListHeader.style";
import ListHeaderButtons from "./ListHeaderButtons";

export function ListHeader() {
    return (
        <ListHeaderContainer>
            <h1>Gerenciar unidades curriculares</h1>
            <ListHeaderButtons/>
        </ListHeaderContainer>
    )
}