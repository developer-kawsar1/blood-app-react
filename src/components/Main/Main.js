import React from "react"; 
import './Main.css' 
import donor from '../../assets/images/donor.png'
import donation from '../../assets/images/donor.png'
import others from '../../assets/images/question.png'
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <div class="grid-container">
        <div class="item">
          <Link to="/find-donor">
          <div class="img-container">
            <img src={donor} width="50" alt="" />
          </div>
          <p>রক্তদাতা খুঁজুন </p>
          </Link>
        </div>
        <div class="item">
          <div class="img-container">
            <img src={donation} width="50" alt="" />
          </div>
          <p>ব্লাড রিকোয়েস্ট</p>
        </div>
        <div class="item">
          <div class="img-container">
            <img src={others} width="50" alt="" />
          </div>
          <p>অন্যন্য</p>
        </div>
        <div class="item">
          <h3>Item 3</h3>
        </div>
        <div class="item">
          <h3>Item one</h3>
        </div>
        <div class="item">
          <h3>Item one</h3>
        </div>
      </div>
    </main>
  );
};

export default Main;
