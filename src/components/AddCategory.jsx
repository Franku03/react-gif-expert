import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState(10);

    const onInputChange = ({ target }) => {
        // let's remember that in the function calling, we are passing it the event object when we do a calling without arguments
        setInputValue(target.value );
    }

    const onSelectChange = ({ target }) => {
        setSelectValue( +target.value );
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        // setCategories( categories => [ inputValue, ...categories ]);
        onNewCategory( inputValue.trim(), selectValue );
        setInputValue('');
        setSelectValue(10);
    }

    return (
       
        <form onSubmit={ onSubmit }>
            <div className="add-category">
                <input 
                    type="text"
                    placeholder="Buscar Gifs"
                    value={ inputValue }
                    onChange={ onInputChange }
                />

                <select
                    name="quantity"
                    onChange={ onSelectChange }
                    value={ selectValue }
                >
                    <option value={ 10 }>10</option>
                    <option value={ 20 }>20</option>
                    <option value={ 30 }>30</option>
                </select>

            </div>
   
        </form>

    )
}
