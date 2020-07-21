import React from 'react';
import './../App.css';
import libraryImage from './../contempstrip.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    margin: 'auto',
    transition: '0.3s',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)'
    }
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function ClassCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card} variant='outlined'>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          Class
        </Typography>
        <Typography variant='h5' component='h2'>
          Python Introduction
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          Program - Coding
        </Typography>
        <Typography variant='body2' component='p'>
          Introducing Python programming for grade 9 - 11
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Click to see detail</Button>
      </CardActions>
    </Card>
  );
}
