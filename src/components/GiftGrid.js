import React, { useState, useEffect } from 'react';
import { useFetchGifts } from '../hooks/useFetchGifts';
//import { getGifts } from '../helpers/getGift';
import { GifGridItem } from './GifGridItem';

export const GiftGrid = ({categoria}) => {
    

    const {loading, data:images} = useFetchGifts(categoria);

    return (
        <>
            <h3>{categoria}</h3>
            {loading && <p>Loading</p>}
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem 
                            key = {img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>

    )
}
