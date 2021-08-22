import { React, useState, useContext } from 'react';
import Layout from '../../Containers/Layout';
import styles from './All.module.scss';
import pokemon from '../../Media/logo.png';
import { HeartFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import axios from 'axios';
import MainContext from '../../Context/provider/context';


const All = () => {

    const [minVal] = useState(0);
    const [maxVal] = useState(20);
    const [pokemonList, setPokemonList] = useState(null);
    const [page, setPage] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const { favorites, changeFavorites } = useContext(MainContext).profile;


    const handleNext = () => {
        let string = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=' + (page * 20);
        axios.get(string, {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
        }).then(res => {
            if (res.status === 200) {
                setPokemonList(res.data.results);
            }
        });
        setPage(page + 1);
    }


    if (loaded === false) {
        handleNext();
        setLoaded(true);
    }

    const handlePrev = () => {
        let string = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=' + ((page - 2) * 20);
        axios.get(string, {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
        }).then(res => {
            if (res.status === 200) {
                setPokemonList(res.data.results);
            }
        });
        setPage(page - 1);
    }

    const handleAdd = (name) => {
        let auxList = favorites;
        auxList.push(name);
        changeFavorites(auxList);
    }

    const handlePokemonName = (name) => {
        localStorage.setItem('name', name);
    }

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
            <div className={styles.allContainer}>
                <div className={styles.firstContent}>
                    <h1>All characters</h1>
                    <button onClick={handleNext}>
                        next
                    </button>

                    <button onClick={handlePrev}>
                        prev
                    </button>
                    <div className={styles.cards}>
                        {pokemonList && pokemonList.length > 0 ? (pokemonList.map((item, index) => index >= minVal &&
                            index < maxVal &&
                            (
                                <div className={styles.column} key={index}>
                                    <div className={styles.content}>
                                        <img src={pokemon} alt="pokemon" />
                                        <Link to='/pokemon' onClick={() => handlePokemonName(item.name)} ><h2>{item.name}</h2> </Link>
                                        {favorites.includes(item.name) ? (
                                            <button onClick={() => handleDelete(item.name)}><HeartFilled /> Delete</button>
                                        ) : (<button onClick={() => handleAdd(item.name)}><HeartFilled /> Add to Favorites</button>)}
                                    </div>
                                </div>))) : (null)}
                    </div>
                </div>
            </div>

        </Layout>
    );
};

export default All;
