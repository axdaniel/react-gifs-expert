import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const CategoryAdd = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('')

    const handleInputValue = (e) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log('Submit Hecho!');
        if (inputValue.trim().length > 2){
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={inputValue} onChange={handleInputValue} placeholder='Busca un gif!!'></input>
        </form>
    )
}

CategoryAdd.propTypes={
    setCategories:PropTypes.func.isRequired
}