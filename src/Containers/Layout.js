import React, { useEffect, useState } from 'react';
import styles from './Layout.module.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = props => {
  const [state, setState] = useState({
    mounted: false
  });

  useEffect(() => {
    if (!state.mounted) {
      setState(prevState => ({
        ...prevState,
        mounted: true
      }));
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [state.mounted]);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
