import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import HeadderBar from '../../HeaderBar/HeaderBar'
import HeaderBar from '../../HeaderBar/HeaderBar';
import Donor from './Donor'; 
import './DonorList.css'

const DonorsList = () => { 
    const a=20
    const {group}=useParams() 
const [donors,setDonors]=useState([])  
const url=`https://donor-server.herokuapp.com/donors/${group}`
useEffect(()=>{ 
  
   fetch(url)
   .then(res=>res.json())
   .then(data=>setDonors(data)) 
},[])

    return (
        <div>
           <HeaderBar/>
             <div className="list-container">
                 {donors.length} 
                 {
                     donors.map(donor=><Donor key={donor._id} donor={donor}/>)
                 }
             </div>
        </div>
    );
};

export default DonorsList;