import React, { MouseEventHandler, ReactNode } from "react";
import { Container } from "./styled";

type ButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children?: ReactNode;
}

function Button({onClick, children}: ButtonProps) {

    return (
        <Container
            onClick={onClick}
        >
            {children}
        </Container>
    )
}

export default Button;