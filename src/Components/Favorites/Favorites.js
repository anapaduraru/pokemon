import { React, useContext } from 'react';
import Layout from '../../Containers/Layout';
import styles from './Favorites.module.scss';
import pokemon from '../../Media/logo.png';
import { DeleteFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import MainContext from '../../Context/provider/context';


const Favorites = () => {
    const { favorites, changeFavorites } = useContext(MainContext).profile;

    const handleDelete = (name) => {
        let auxList = favorites;
        const index = auxList.indexOf(name);
        if (index > -1) {
            auxList.splice(index, 1);
        }
        changeFavorites(auxList);
    }
    return (
        <Layout>
            <div className={styles.favoritesContainer}>
                <div className={styles.firstContent}>
                    <h1>Favorite characters</h1>
                    <div className={styles.cards}>
                        {favorites && favorites.length > 0 ? (favorites.map((item, index) =>
                        (
                            <div className={styles.column} key={index}>
                                <div className={styles.content}>
                                    <img src={pokemon} alt="pokemon" />
                                    <Link to='/pokemon'><h2>{item}</h2></Link>
                                    <button onClick={() => handleDelete(item)}><DeleteFilled /> Remove from Favorites</button>
                                </div>
                            </div>))) : (null)}
                    </div>
                </div>
            </div>

        </Layout>
    );
};

export default Favorites;
