import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {

    test('debe de regresar el estado inicial', () => {

        const { result } = renderHook( () => useFetchGifs('Gintama'));
        const { images, isLoading } = result.current;

        expect( images.length ).toBe( 0 );
        expect( isLoading ).toBeTruthy();

    });

    test('debe de retornar un arreglo de imágenes y isLoading en false', async () => {

        const { result } = renderHook( () => useFetchGifs('Gintama'));

        // Por defecto ya tiene un timeout de un 1s, no es necesario pasarle el segundo argumento
        await waitFor(
            () => expect ( result.current.images.length ).toBeGreaterThan(0),
            { timeout: 2000, }
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan( 0 );
        expect( isLoading ).toBeFalsy();

    });


});