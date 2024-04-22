import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import '../styles/HomeStyles.css'

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url("https://imgs.search.brave.com/9twBLP1R7DJ4A-vL5gytS9_7XTjCpFj4JubXlJZWZrs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS8yOS8z/Ny9Ua011QkwuanBn")` }}>
        <div className="headerContainer">
          <h1>CafeZilla</h1>
          <p>Mumbai, IN</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
