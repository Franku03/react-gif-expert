import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState( [{title: 'Gintama', quantity: 10}] );

  const onAddCategories = ( title, quantity ) => {

    const newCategory = { title, quantity };

    if( categories.find( category => category.title === title )) return;

    setCategories( [ newCategory, ...categories] );  
    
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
         onNewCategory={ onAddCategories }
      />
      
      { 
        categories.map( category => (
            <GifGrid 
              key={ category.title } 
              category={ category } 
            />
        )) 
      }

    </>
  )
}


/*
   ¿ onNewCategory={ onAddCategory }, es igual a:
     onNewCategory = { value => onAddCategories(value) }
*/
