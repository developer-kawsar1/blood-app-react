import React from 'react';
import './Donor.css'
const Donor = ({donor}) => {
    return (
        <div className='donor'>
            <div>
                <p> {donor.name} </p>
                <p>age: {donor.age} </p>
            </div>
            <div>
                <p> {donor.address} </p>
                <p> {donor.lastDonation} </p>
            </div>
        </div>
    );
};

export default Donor;