import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardProduct } from './';

describe('CardProduct Component', () => {
    it('should render books information correctly', async () => {
        // Renderiza o componente
        render(<CardProduct />);
        
        // Verifica se o título dos livros está sendo exibido
        expect(await screen.findByText('Título: 1984')).toBeInTheDocument();
        expect(await screen.findByText('Título: To Kill a Mockingbird')).toBeInTheDocument();
        
        // Verifica se o autor dos livros está sendo exibido
        expect(await screen.findByText('Autor: George Orwell')).toBeInTheDocument();
        expect(await screen.findByText('Autor: Harper Lee')).toBeInTheDocument();
        
        // Verifica se o ISBN dos livros está sendo exibido
        expect(await screen.findByText('ISBN: 9780451524935')).toBeInTheDocument();
        expect(await screen.findByText('ISBN: 9780060935467')).toBeInTheDocument();
        
        // Verifica se as imagens dos livros estão sendo exibidas
        expect(await screen.findByAltText('1984')).toBeInTheDocument();
        expect(await screen.findByAltText('To Kill a Mockingbird')).toBeInTheDocument();
    });
});
