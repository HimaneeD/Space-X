import React from 'react';
import LaunchYear from '../launch/launchyear.component';
import './filter.styles.css';

 export const Filter = ({handleFilterSelection}= this.props) => {
        return(
            <div className = 'filter-card'>
            <h1>Filter</h1>
            <LaunchYear handleFilterSelection={handleFilterSelection}></LaunchYear>
            </div>
        )
    }
    
export default Filter;