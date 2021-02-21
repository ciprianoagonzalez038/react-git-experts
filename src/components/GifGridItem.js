import React from 'react'

export const GifGridItem = ({image, title}) => {

    console.log(image);
    return (
        <div className="card">
           <img src={image} alt={title}></img>
           <p>{title}</p>
        </div>
    )
}
