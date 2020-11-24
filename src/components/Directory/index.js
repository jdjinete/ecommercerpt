import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Love from './../../assets/amor.jpeg';
import Dani from './../../assets/Dani.jpg';
import Sonic from './../../assets/Sonic.jpeg';
import Romantico from './../../assets/Romantico.png';
import foto1 from './../../assets/foto1.png';
import Carousel from 'react-material-ui-carousel'
import './styles.scss';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 340,
    width: 300,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <div class="directorio">
      <p className="titulo">
        Nuestros productos
      </p>
      <Grid container className={classes.root} >
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {[0, 1, 2].map((value) => (
              <Grid key={value} item>
                <Paper className="prueba" elevation={3}
                  style={
                    {
                      backgroundImage: `url(${foto1})`
                    }
                  } />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>


  )
}