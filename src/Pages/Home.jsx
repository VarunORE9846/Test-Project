import React from 'react';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
// import Navbar from '../Components/Navbar';
import '../Pages/styles.css';
export const Home = () => {
  return (
    <>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={image1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={image2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={image3} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={image4} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={image5} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    </>
  )
};

