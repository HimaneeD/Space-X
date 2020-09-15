import React from 'react';
import './launchyear.styles.css';

const years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
const values = ['true', 'false'];
const heading = ['Successful Launch', 'Successful Landing']
const year_heading = 'Launch Year';

export const LaunchYear = ({ handleFilterSelection }) => {
    const Headingline = <hr style={{ width: '50%', textAlign: 'left' }}></hr>
    return (
        <>
            <header>{year_heading}</header>
            {Headingline}
            <div className='btnContainer'>
                {years.map(y => <button key={y} className='button button3' onClick={() => { handleFilterSelection(y, year_heading) }}>{y}</button>)}
            </div>

            {heading.map((label,index) =>
                <>
                    <header> {label} </header>
                    {Headingline}
                    <div className='wrapper'>
                        {values.map(val => <button className='button button3' onClick={() => { handleFilterSelection(val, label) }}>{val}</button>)}
                    </div>
                </>
            )}
        </>
    )
}

export default LaunchYear;

