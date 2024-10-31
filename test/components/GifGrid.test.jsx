import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

// ? AKA: Jest, haz un mock completo de este path, o sea, sustituye el original por un sustituto en blanco
jest.mock('../../src/hooks/useFetchGifs');

describe('Preubas en <GifGrid />', () => {

    const category = 'Sakata Gintoki';

    test('debe mostrar el loading inicialmente', () => {

        // ? Ahora que en esta suite se está usando un mock del useFetchGifs, debemos indicarle como funciona
        // ? Simulamos lo que regresa:
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GifGrid key={ category } category={ category }/>);
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ));
        // Igual que el primer expect solo que más complejo
        // expect( screen.getByRole('heading',{ level: 2 }).innerHTML ).toBe('Cargando...');
    });

    test('debe de mostrar items cuando se cargan las imágenes mediante useFetchGifs() ', () => {
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Kagura',
                url: 'https://localhost/kagura.jpg'
            },
            {
                id: '123',
                title: 'Gintoki',
                url: 'https://localhost/gintoki.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true,
        });

        render(<GifGrid key={ category } category={ category }/>);

        expect( screen.getAllByRole('img').length ).toBe( 2 );

    });


});

