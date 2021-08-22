import React from 'react';
import styles from './Header.module.scss';
import logo from '../../Media/logo.png';
import { Link, useLocation } from 'react-router-dom';


const Header = () => {
  const location = useLocation();
  if (location.pathname === "/all") {
    return (
      <div className={styles.headerContainer}>
        <div className={styles.firstLine}>
          <Link to="/"><img src={logo} alt={"logo"} /></Link>
        </div>
        <div className={styles.secondLine}>
          <Link to='/all' style={{ fontWeight: "bold", color: "#EC5151" }}> All </Link>
          <Link to='/favorites'> Favorites </Link>
          <Link to='/aboutus'>About us</Link>
        </div>
      </div>
    );
  } else if (location.pathname === "/favorites") {
    return (
      <div className={styles.headerContainer}>
        <div className={styles.firstLine}>
          <Link to="/"><img src={logo} alt={"logo"} /></Link>
        </div>
        <div className={styles.secondLine}>
          <Link to='/all'> All </Link>
          <Link to='/favorites' style={{ fontWeight: "bold", color: "#EC5151" }}> Favorites </Link>
          <Link to='/aboutus'>About us</Link>
        </div>
      </div>
    );
  } else if (location.pathname === "/aboutus") {
    return (
      <div className={styles.headerContainer}>
        <div className={styles.firstLine}>
          <Link to="/"><img src={logo} alt={"logo"} /></Link>
        </div>
        <div className={styles.secondLine}>
          <Link to='/all'> All </Link>
          <Link to='/favorites'> Favorites </Link>
          <Link to='/aboutus' style={{ fontWeight: "bold", color: "#EC5151" }}>About us</Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.headerContainer}>
        <div className={styles.firstLine}>
          <Link to="/"><img src={logo} alt={"logo"} /></Link>
        </div>
        <div className={styles.secondLine}>
          <Link to='/all'> All </Link>
          <Link to='/favorites'> Favorites </Link>
          <Link to='/aboutus'>About us</Link>
        </div>
      </div>
    );
  }
};

export default Header;
