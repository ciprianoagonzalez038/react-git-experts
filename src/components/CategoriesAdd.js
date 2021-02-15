import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CategoriesAdd = ({setCategorias}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const handleSubmint = (e) =>{
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategorias(c => [...c, inputValue]);
            setInputValue('');
        }
            
    }

    return (
        <form onSubmit={handleSubmint}>
            <h2>Add Categoria</h2>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
            <h6>{inputValue}</h6>
        </form>
    )
}

CategoriesAdd.propTypes = {

}

CategoriesAdd.propTypes = {
    setCategorias: PropTypes.func.isRequired

}

export default CategoriesAdd
