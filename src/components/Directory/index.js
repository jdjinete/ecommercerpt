import React from 'react';
import Love from './../../assets/amor.jpeg';
import Dani from './../../assets/Dani.jpg';
import Sonic from './../../assets/Sonic.jpeg';
import Romantico from './../../assets/Romantico.png';
import './styles.scss';

const Directory = props => {
    return (
        <div className="directory">
            <div className="wrap">
               
                <div
                    className="item col-sm-4"
                    style={
                        {
                            backgroundImage: `url(${Love})`
                        }
                    }>

                   
                </div>
                <div
                    className="item col-sm-4"
                    style={
                        {
                            backgroundImage: `url(${Dani})`
                        }
                    }>
                    <a> Detalles de cumple</a>
                </div>
                <div
                    className="item col-sm-4"
                    style={
                        {
                            backgroundImage: `url(${Sonic})`
                        }
                    }>
                    <a> Detalles para niños</a>
                </div>
                <div
                    className="item col-sm-4"
                    style={
                        {
                            backgroundImage: `url(${Romantico})`
                        }
                    }>
                    <a> Detalles para niños</a>
                </div>
            </div>
        </div>
    );

};

export default Directory;