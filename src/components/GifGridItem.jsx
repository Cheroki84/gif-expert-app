import React from 'react'

const GifGridItem = ({ title, url }) => {

    return (
        <div>
            <p>{title}</p>
            <img src={url} alt={title} />
        </div>
    )
}

export default GifGridItem;
