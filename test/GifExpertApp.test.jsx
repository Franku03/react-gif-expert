import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => {

    test('deben renderizarse los gifs al cargar la página', async () => {

        render( <GifExpertApp /> );

        await waitFor (
            () => expect ( screen.getAllByRole('img').length ).toBeLessThanOrEqual( 10 )
        );

    });
    
    test('debe agregarse una nueva Categoría all llamar a onAddCategory() ', () => {

        render( <GifExpertApp /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form'); 

        fireEvent.input( input, { target: { value: 'Digimon' } })
        fireEvent.submit( form );

        expect( screen.getByText('Digimon') );

    });

    test('NO debe agregarse una Categoría ya existente', () => {

        render( <GifExpertApp /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form'); 

        fireEvent.input( input, { target: { value: 'Gintama' } })
        fireEvent.submit( form );

        expect( screen.getAllByText('Gintama').length ).toBe( 1 );

    });



    test('deben renderizarse los gifs tras agregar una nueva categoría', async () => {

        render( <GifExpertApp /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form'); 

        fireEvent.input( input, { target: { value: 'Digimon' } })
        fireEvent.submit( form );
        
        await waitFor (
             () => { 
                expect ( screen.getAllByRole('img').length ).toBeGreaterThanOrEqual( 11 );
                expect ( screen.getAllByRole('img').length ).toBeLessThanOrEqual( 20 );
             }
        );

    });


});