import React from 'react'
import { capitalizeFirstLetter } from '../../utils/helpers'
import photo from '../../assets/small/commercial/0.jpg'

const Gallery = (props) => {

    const currentCategory = {
        name: 'commercial',
        description: 'Photos of grocery stores, food trucks, and other commercial projects',
    }

    return (
        <div>
            <h1> {capitalizeFirstLetter(currentCategory.name)} </h1>
            <p> {currentCategory.name} </p>
            <div className='flex-row' >
                <img className='img-thumbnail mx-1' src={photo} alt="" />
            </div>
        </div>
    )
}

export default Gallery