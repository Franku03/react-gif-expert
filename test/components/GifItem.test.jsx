import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem />', () => {

    const image = {
        id: 1,
        title: 'Gintoki',
        url: 'https://gintama.com/gintoki.png',
    }

    test('Debe hacer match con el snapshot', () => {
        const { container } = render( <GifItem key={ image.id } { ...image } /> );
        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem key={ image.id } { ...image }  />);
        // expect( screen.getByRole('img').src ).toBe(  image.url );

        const { src, alt} = screen.getByRole('img');
        expect( src ).toBe( image.url );
        expect( alt ).toBe( image.title );

    })

    test('Debe de mostrar el título en el componente', () => {
        render( <GifItem key={ image.id } { ...image }  /> );
        expect( screen.getByText( image.title ) ).toBeTruthy();
        // El title del <img/> element no hace conflicto con esta petición de getByText porque en ese elemento title es un atributo, no un texto
    });

});