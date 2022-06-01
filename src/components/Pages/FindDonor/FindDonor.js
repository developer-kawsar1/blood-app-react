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
import { useNavigate } from 'react-router-dom';
const FindDonor = () => {  
    const navigate=useNavigate()
    const goApositive=()=>{
    
            navigate('./a+')
    }
    const goAnagetive=()=>{
    
            navigate('./a-')
    }
    const goBpositive=()=>{
    
            navigate('./b+')
    }
    const goBnagetive=()=>{
    
            navigate('./b-')
    }
   
    const goaBpositive=()=>{
    
            navigate('./ab+')
    }
    const goaBnagetive=()=>{
    
            navigate('./ab-')
    }
    const goOpositive=()=>{
    
            navigate('./o+')
    }
    const goOnagetive=()=>{
    
            navigate('./o-')
    }
   
 
   
    return ( 
       
        <div>
            <HeaderBar/> 
             <div className="groups-container"> 
                <div className="group" onClick={goApositive}>
                    <img src={aPositive} alt="" />
                </div>
                <div className="group" onClick={goAnagetive}>
                    <img src={aNegative} alt="" />
                </div>
                <div className="group" onClick={goBpositive}>
                    <img src={bPositive} alt="" />
                </div>
                <div className="group" onClick={goBnagetive}>
                    <img src={bNegative} alt="" />
                </div>
                <div className="group" onClick={goaBpositive}>
                    <img src={abPositive} alt="" />
                </div>
                <div className="group" onClick={goaBnagetive}>
                    <img src={abNegative} alt="" />
                </div>
                <div className="group" onClick={goOpositive}>
                    <img src={oPositive} alt="" />
                </div>
                <div className="group" onClick={goOnagetive}>
                    <img src={oNegative} alt="" />
                </div>
             </div>
        </div>
    );
};

export default FindDonor;