import React from 'react';
import HeaderBar from '../../HeaderBar/HeaderBar';
import './FindDonors.css' 
import aPositive from '../../../assets/images/a+.png'
import aNegative from '../../../assets/images/a-.png'
import bPositive from '../../../assets/images/b+.png'
import bNegative from '../../../assets/images/b-.png'
import abPositive from '../../../assets/images/ab+.png'
import abNegative from '../../../assets/images/ab-.png'
import oPositive from '../../../assets/images/o+.png'
import oNegative from '../../../assets/images/o-.png'
const FindDonor = () => { 
    const goApositive=()=>{
            alert("ok jaitase ")
    }
    return ( 
       
        <div>
            <HeaderBar/> 
             <div className="groups-container"> 
                <div className="group" onClick={goApositive}>
                    <img src={aPositive} alt="" />
                </div>
                <div className="group">
                    <img src={aNegative} alt="" />
                </div>
                <div className="group">
                    <img src={bPositive} alt="" />
                </div>
                <div className="group">
                    <img src={bNegative} alt="" />
                </div>
                <div className="group">
                    <img src={abPositive} alt="" />
                </div>
                <div className="group">
                    <img src={abNegative} alt="" />
                </div>
                <div className="group">
                    <img src={oPositive} alt="" />
                </div>
                <div className="group">
                    <img src={oNegative} alt="" />
                </div>
             </div>
        </div>
    );
};

export default FindDonor;