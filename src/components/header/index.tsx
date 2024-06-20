import { Container, Title } from "./styled";
import { PiBooksDuotone } from "react-icons/pi";

export function Header() {
    return (
        <Container>
            <Title>
                <PiBooksDuotone size={60} />
                Livraria Leitura Atual  
            </Title>
        </Container>
    )
}