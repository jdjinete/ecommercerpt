import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import { Button } from '@material-ui/core';
import './styles.scss';

const Example = props => {
    var items = [
        {
            name: "Item 1 ",
            description: "Productos Personalizados"
        },
        {
            name: "Item 2",
            description: "Pidelo ya "
        }
    ]
 
    return (
        <div className="divCarousel" >
        <Carousel className="Carousel" autoPlay={false}  navButtonsAlwaysVisible={true}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        </div>
    )
}
 
function Item(props)
{
    return (
        <Paper className="itemPaper">
            <p>{props.item.name}</p>
 
            <Button className="CheckButton">
              Pedidos 
            </Button>
        </Paper>
    )
}

export default Example;