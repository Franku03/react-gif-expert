import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState( ['Gintama'] );

  const onAddCategories = ( newCategory ) => {

    if( categories.includes(newCategory) ) return;

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
              key={ category } 
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
