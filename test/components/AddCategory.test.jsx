import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory/>', () => {

    test('debe de cambiar el valor de la caja de texto', () => {

        render( <AddCategory onNewCategory={ () => {} }/> );
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: 'Gintoki' }} );

        expect( input.value ).toBe( 'Gintoki' );
    });

    test('debe de llamar onNewCategory() si el input tiene un valor', () => {

       const inputValue = 'Gintoki'; 
       const onNewCategory = jest.fn(); // ¡ Es un mock => una simulación de la función sobre la cual tengo control absoluto

       render( <AddCategory onNewCategory={ onNewCategory }/> );

       const input = screen.getByRole('textbox');
       const form = screen.getByRole('form'); // Lo obtiene mediante el aria-label

       fireEvent.input( input, { target: { value: inputValue } });
       fireEvent.submit( form );

       expect( input.value ).toBe('');
       expect( onNewCategory ).toHaveBeenCalled();
       expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    
    });

    test('NO debe de llamar onNewCategory() si el input está vacío', () => {

        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory }/>);
        const form = screen.getByRole('form');

        fireEvent.submit( form );

        expect( onNewCategory ).not.toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes( 0 );
    
    });
    
});