import React, { useState, useContext } from 'react';
import Layout from '../../Containers/Layout';
import styles from './Pokemon.module.scss';
import pokemon from '../../Media/pokemon.png';
import { HeartFilled } from '@ant-design/icons';
import axios from 'axios';
import { Form, Input, Button } from 'antd';
import MainContext from '../../Context/provider/context';

const Pokemon = () => {
    const [loaded, setLoaded] = useState(false);
    const [info, setInfo] = useState(null);
    const [state, setState] = useState({
        name: '', number: '', description: ''
    });
    const [comments, setComments] = useState(null);
    const { favorites, changeFavorites } = useContext(MainContext).profile;

    const handleDelete = (name) => {
        let auxList = favorites;
        const index = auxList.indexOf(name);
        if (index > -1) {
            auxList.splice(index, 1);
        }
        changeFavorites(auxList);
    }

    const handleAdd = (name) => {
        let auxList = favorites;
        auxList.push(name);
        changeFavorites(auxList);
    }

    if (loaded === false) {
        axios.get("https://pokeapi.co/api/v2/pokemon/" + localStorage.getItem('name'),
            {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                }
            }
        ).then(res => {
            if (res.status === 200) {
                setInfo(res.data);
            }
        });
        setLoaded(true);
    }
    const handleChangeInputs = (event, field) => {
        event.persist();
        setState(prevState => {
            return {
                ...prevState,
                [field]: event.target.value
            };
        });
    };

    const handleSubmit = () => {
        if (state.name !== '' && state.number !== '' && state.description !== '') {
            let obj = {};
            obj['name'] = state.name;
            obj['number'] = state.number;
            obj['description'] = state.description;
            var today = new Date();
            var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear() + ' ' + today.getHours() + ":" + today.getMinutes();
            obj['date'] = date;
            let auxList = comments ? (JSON.parse(JSON.stringify(comments))) : ([]);
            auxList.push(obj);
            setComments(auxList);
        }
    }

    return (
        <Layout>
            <div className={styles.pokemonContainer}>
                <div className={styles.firstContainer}>
                    <h1>{info ? (info.name) : (' ')}</h1>
                    <div className={styles.info}>
                        <div className={styles.firstColumn}>
                            <img src={info ? (info.sprites[Object.keys(info.sprites)[0]]) : (pokemon)} alt="pokemon" />
                        </div>
                        <div className={styles.secondColumn}>
                            <p>Weight: </p> <h3>{info ? (info.weight) : (' ')}</h3>
                            <p>Height:</p> <h3>{info ? (info.height) : (' ')}</h3>
                            <p>Moves</p>
                            <div className={styles.moves}>
                                <h3>{info ? (info.moves[0].move.name) : (null)}</h3>
                                <h3>{info ? (info.moves[1].move.name) : (null)}</h3>
                                <h3>{info ? (info.moves[2].move.name) : (null)}</h3>
                            </div>
                            <p>All stats:</p>
                            {info ? (info.stats && info.stats.length > 0 ? (info.stats.map((item, index) => {
                                return (<div className={styles.stats} key={index}>
                                    <div className={styles.stat}>
                                        <h2>Stat:</h2>
                                        <h3>{item.stat.name}</h3>
                                        <h3>{item.base_stat}</h3>
                                    </div>
                                </div>);
                            })) : (null)) : (null)}

                        </div>
                    </div>
                </div>
                <div className={styles.secondContainer}>
                    {info && favorites.includes(info.name) ? (<button onClick={() => handleDelete(info.name)}><HeartFilled /> Delete</button>) :
                        (<button onClick={() => handleAdd(info.name)}><HeartFilled /> Add to Favorites</button>)}
                </div>
                <div className={styles.thirdContainer}>
                    <Form >
                        <Form.Item
                            label="Name"
                        >
                            <Input onChange={event => handleChangeInputs(event, 'name')} />
                        </Form.Item>

                        <Form.Item
                            label="Number of pokemons"
                            rules={[
                                {
                                    type: 'number',
                                },
                            ]}
                        >
                            <Input onChange={event => handleChangeInputs(event, 'number')} />
                        </Form.Item>

                        <Form.Item label="Description">
                            <Input.TextArea onChange={event => handleChangeInputs(event, 'description')} />
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                {comments && comments.length > 0 ? (comments.map((item, index) => {
                    return (
                        <div key={index}>
                            <h2>cacat</h2>
                            <p> {item.name}</p>
                            <p>{item.number}</p>
                            <p>{item.description}</p>
                            <p>{item.date}</p>

                        </div>
                    )
                })) : (null)}
            </div>

        </Layout >
    );
};

export default Pokemon;
