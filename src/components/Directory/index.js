import React from 'react';
import Love from './../../assets/amor.jpeg';
import Dani from './../../assets/Dani.jpg';
import Sonic from './../../assets/Sonic.jpeg';

const Directory = props => {
    return (
        <div className="Directory" >
            < div className="wrapper" >
                < div className="item"
                    style={
                        {
                            backgroundImage: `url(${Love})`
                        }
                    } >
                    <a >
                        Detalles de amor </a> </div> <div className="item"
                    style={
                        {
                            backgroundImage: `url(${Dani})`
                        }
                    } >
                    <a >
                        Detalles de cumple </a> </div> <div className="item"
                    style={
                        {
                            backgroundImage: `url(${Sonic})`
                        }
                    } >
                    <a >
                        Detalles para niños </a>
                </div>
            </div>
        </div>
    );

};

export default Directory;