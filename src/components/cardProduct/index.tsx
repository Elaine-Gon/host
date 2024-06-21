import React, { useState, useEffect, MouseEventHandler, ReactNode } from 'react';

import { Card, Container, Content, Grid, Text } from "./styled"; 

interface IBook {
    id: string;
    image: string;
    title: string;
    author: string;
    isbn: string;
    pages: number;
    about: string;
    moreBooks: string;
}

const initialBooks: IBook[] = [
    {
        "id": "1",
        "image": "https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788535932966/1984-edicao-especial.jpg",
        "title": "1984",
        "author": "George Orwell",
        "isbn": "9780451524935",
        "pages": 328,
        "about": "Descrição do livro 1984...",
        "moreBooks": "A Revolução dos Bichos, A flor da Inglaterra."
    },
    {
        "id": "2",
        "image": "https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788535932966/1984-edicao-especial.jpg",
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "isbn": "9780060935467",
        "pages": 336,
        "about": "Descrição do livro To Kill a Mockingbird...",
        "moreBooks": "A Revolução dos Bichos, A flor da Inglaterra."
    }
    
];

type ButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function CardProduct({onClick}: ButtonProps) {
    const [books, setBooks] = useState<IBook[]>([]);

    useEffect(() => {
        // Simulando a busca de dados
        console.log('Fetching data...');
        // Em vez de fetch, usamos a constante
        const fetchData = () => {
            console.log('Fetched data:', initialBooks); // Verificar os dados
            setBooks(initialBooks);
        };

        fetchData();
    }, [])


    return (
        <Container>
            <Content>
                <Grid>
                    {books.map(book => (
                        <Card key={book.id} onClick={onClick}>
                            <img className="img" src={book.image} alt={book.title} />
                            <Text>
                                Título: {book.title}
                            </Text>
                            <Text>
                                Autor: {book.author}
                            </Text>
                            <Text>
                                ISBN: {book.isbn}
                            </Text>
                        </Card>
                    ))}
                </Grid>
            </Content>
        </Container>
    )
}