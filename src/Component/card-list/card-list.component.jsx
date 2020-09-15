import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = (props) => {
    return (
    <div className='card-list'>
        {props.spaceDetails.map(spx => <Card key={spx.flight_number} spx={spx}/> )}
    </div>
    )
}