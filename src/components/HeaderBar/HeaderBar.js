import React from 'react'; 
import './HeaderBar.css' 
import { useNavigate } from 'react-router-dom';

const HeaderBar = () => { 
    const navigate = useNavigate();
    return (
        <div className="header-bar">
              <div onClick={() => navigate(-1)}>
                  <i className="fa fa-arrow-left"></i>
              </div>
            </div>
    );
};

export default HeaderBar; 