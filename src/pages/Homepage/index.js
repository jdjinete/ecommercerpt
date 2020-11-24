import React from 'react'
import Directory from './../../components/Directory'
import Carrousel from './../../components/Carrousel'
import './styles.scss';
import { Button } from '@material-ui/core';

const Homepage = props => {

    return (
        <section className="homepage">
            <Carrousel/>

           <Directory />
        </section>
    );
};

export default Homepage;