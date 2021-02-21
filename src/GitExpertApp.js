import React, { useState} from 'react'
import PropTypes from 'prop-types'
import CategoriesAdd from './components/CategoriesAdd';
import { GiftGrid } from './components/GiftGrid';

const GitExpertApp = props => {
     const [categorias, setCategorias] = useState(['One Push']);

    return (
        <>
          
           <h2>Gif Expert</h2> 
           <CategoriesAdd setCategorias = {setCategorias} />
            <hr/>
            <ol>
                {
                    categorias.map( (categoria, i) => {
                        return <GiftGrid 
                                    categoria ={categoria} 
                                    key={categoria}
                                />;
                    })
                }
            </ol>
        </>
    )
}

GitExpertApp.propTypes = {

}

export default GitExpertApp
