import React from 'react';
import Layout from '../../Containers/Layout';
import styles from './AboutUs.module.scss';
import about from '../../Media/aboutus.svg';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
    AOS.init({ duration: 2500 });
    return (
        <Layout>
            <div className={styles.aboutUsContainer}>
                <p> Enter the world of pokemon and find your favorite characters.
                    We offer you all the means to have fun and find out new things!<br />
                    <Link to="/all">Here</Link> you can find information about all the pokemon and add them
                    to your  <Link to="/favorites">favorites list</Link> for later use.
                </p>
                <img src={about} alt="about" data-aos="zoom-in" />
            </div>
        </Layout>
    );
};

export default AboutUs;
