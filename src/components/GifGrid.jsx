import PropTypes from "prop-types";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>

            {
                isLoading && ( <h2>Cargando...</h2> )
            }


            <div className="card-grid">
                {
                    images.map( ( img ) => (
                        <GifItem 
                            key={ img.id } 
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}




/*
    ({ category }) => {
        ? Nos permite disparar efectos secundarios
        Al dejar las dependencias (2do paramétro) vacias, significa que el hook solo se dispara la primera vez que se renderiza el componente
        ¡ Also, useEffect NO permite pasarle una función async, porque debe recibir un callback, no una promesa, que es lo que nos regresa una función async
        Si queremos hacer algo asíncrono debemos usar sintaxis de promises, o llamar a una función asíncrona externa desde el useEffect

        useEffect( () => {
            getGifs( category );
        }, [ ]);

        ! Mala práctica: llamar funciones desde un functional component solo hará que se llamen cada vez que se vuelva a renderizar el componente
        getGifs( category );
    }
*/
