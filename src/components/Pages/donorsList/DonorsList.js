import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import HeadderBar from '../../HeaderBar/HeaderBar'
import HeaderBar from '../../HeaderBar/HeaderBar';

const DonorsList = () => { 
    const a=20
    const {group}=useParams() 
const [donors,setDonors]=useState([])  
const url=`https://donor-server.herokuapp.com/donors/${group}`
useEffect(()=>{ 
  
   fetch(url)
   .then(res=>res.json())
   .then(data=>setDonors(donors))
},[])

    return (
        <div>
           <HeaderBar/>
             <div className="list-container">
                 {group.length}
             </div>
        </div>
    );
};

export default DonorsList;