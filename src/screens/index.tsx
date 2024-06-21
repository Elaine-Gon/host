import  Button from "../components/button/Button";
import { CardProduct } from "../components/cardProduct";
import { Header } from "../components/header";
import { Container } from "./styled";

export function Dashboard() {
    return (
        <Container>
            <Header/>
            {/* <Button/> */}
            <CardProduct/>
        </Container>
    )
}