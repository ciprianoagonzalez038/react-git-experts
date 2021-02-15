import React, { useState} from 'react'
import PropTypes from 'prop-types'
import CategoriesAdd from './components/CategoriesAdd';

const GitExpertApp = props => {
    //const categorias = ['One Push', 'Samurai x', 'Drago ball']
     const [categorias, setCategorias] = useState(['One Push', 'Samurai x', 'Drago ball']);
/*
    const handleAdd = ()=>{
       
        setCategorias(c => [...c, 'yyyyyy']);
    } 
    */

    return (
        <>
          
           <h2>Gif Expert</h2> 
           <CategoriesAdd setCategorias = {setCategorias} />
            <hr/>
            <ol>
                {
                    categorias.map( (categoria, i) => {
                        return <li key={categoria}>{categoria}</li>;
                    })
                }
            </ol>
        </>
    )
}

GitExpertApp.propTypes = {

}

export default GitExpertApp
