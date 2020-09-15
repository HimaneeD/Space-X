import React from 'react';
import './card.styles.css';

export const Card = (props) => {

    const listItems = props.spx.mission_id.map((id) =>
        <li key={id.toString()} style={{colour: 'cornflowerblue'}}>{id}</li>);

    return (
        <>
            <div className='card-container'>
                <img alt='spx' src={props.spx.links.mission_patch_small} ></img>
                <div className='card-text'>
                    <h3 className='flight_heading'>{props.spx.mission_name}#{props.spx.flight_number}</h3>
                    <h3> Mission Ids: </h3>
                    <ul style={{ ListStyleType: 'disc'}}>
                        {(listItems.length === 0 ? '{List Mission Ids}': listItems )}
                    </ul>
                    <h4> Launch Year:<span className='text-color'>  {props.spx.launch_year ? props.spx.launch_year : '{launch_year}'}</span></h4>
                    <h4> Successful Launch: <span className='text-color' >{props.spx.launch_success === true ? 'True' : 'False'}</span></h4>
                    <h4> Successful Landing: <span className='text-color'>{props.spx.launch_success === true ? 'True' : 'False'}</span></h4>
                </div>
            </div>
        </>
    )
}
