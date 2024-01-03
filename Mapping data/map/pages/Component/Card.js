import React from 'react'
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

function Card(props) {
    const { titleText, descText } = props;
    return (
        <div>
            <h3 className='cardTitle'>{titleText}</h3>
            <p className='cardDesc'>{descText}</p>
            <p>{dateName + "/" + monthName + "/" + currentYear}</p>
        </div>
    )
}

export default Card