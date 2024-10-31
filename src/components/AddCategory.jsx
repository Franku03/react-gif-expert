import { useState } from "react"
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        // let's remember that in the function calling, we are passing it the event object when we do a calling without arguments
        setInputValue(target.value );
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        // setCategories( categories => [ inputValue, ...categories ]);
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
       
        <form onSubmit={ onSubmit } aria-label="form">
            <input 
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>

    )
}



AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}