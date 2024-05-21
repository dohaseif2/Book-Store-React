import React from 'react';
import '../css/Home.css'; 

export function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to Our Bookstore</h1>
        <p className="home-message">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi magni quos veniam iste facilis ab dolores nam, iusto saepe praesentium quisquam eos eaque repudiandae similique consequatur quae voluptates! Magnam, odio!
        </p>
        <button className="home-button" onClick={() => window.location.href='/books'}>Browse Books</button>
      </div>
    </div>
  );
}
