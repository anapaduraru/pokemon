import styles from './Home.module.scss';
import React from 'react';
import Layout from '../../Containers/Layout';
import home from '../../Media/home.svg';
// import firstPokemon from '../../Media/001.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useHistory } from 'react-router-dom';


const Home = () => {

  let history = useHistory();

  AOS.init({ duration: 2500 });

  return (
    <Layout>
      <div className={styles.homeContainer}>
        <div className={styles.introduction}>
          <h1> Welcome to an amazing journey! </h1>
          <p>A place where you can
            discover the mysteries of
            the <em>Pokemon</em> world and its
            characters</p>
          <img src={home} alt={"home"} />
        </div>
        <div className={styles.lists}>
          <p>Find your perfect characters</p>
          <div className={styles.buttons}>

            <button onClick={() => { history.push("/all"); }}>
              All
            </button>

            <button onClick={() => {
              history.push("/favorites");
            }}>
              Favorites
            </button>


          </div>

        </div>


      </div>
    </Layout >

  );
}
export default Home;