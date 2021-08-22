import React from 'react';
import styles from './Footer.module.scss';
// import { Link } from 'react-router-dom';
import footer from '../../Media/footer.png';
import { YoutubeFilled, FacebookFilled, InstagramFilled, MailFilled } from '@ant-design/icons';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.firstColumn}>
        <div className={styles.rectangle}>
          <div className={styles.firstLine}>
            <button>
              <a href='https://www.youtube.com/channel/UCA698bls2pjQyiqP9N-iaeg'>
                <YoutubeFilled />
              </a>
            </button>
            <button>
              <a href='https://www.facebook.com/PokemonGO/'>
                <FacebookFilled />
              </a>
            </button>
          </div>
          <div className={styles.secondLine}>
            <button>
              <a href='https://www.instagram.com/pokemongoapp/'>
                <InstagramFilled />
              </a>
            </button>
            <button>
              <a href="mailto:pokemongo@gmail.com">
                <MailFilled />
              </a>
            </button>
          </div>


        </div>
      </div>
      <div className={styles.secondColumn}>
        <img src={footer} alt={"footer"} />
        <p>Contact us</p>
      </div>
    </div>
  );
};

export default Footer;
