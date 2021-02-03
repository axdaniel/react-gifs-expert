import React, {useState} from 'react';
import { CategoryAdd } from './Components/CategoryAdd';
import { GifGrid } from './Components/GifGrid';


export const GifExpertApp = () => {
    
    // const categories = ['One Punch Man', 'Jujutsu Kaisen', 'Attack on Titan'];

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () =>{
    //     setCategories([...categories, 'Kimetsu no Yaiba']);
    // }
    

    return (
        <>
           <h2>GIF'S Experts!!</h2>
           <CategoryAdd setCategories={setCategories}/>
           <hr/>
           <ol>
               {
                   categories.map(category => <GifGrid key={category} category={category}/>)
               }
           </ol>
        </>
    )
}