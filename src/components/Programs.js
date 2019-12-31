import React from 'react';
import './../App.css';
import libraryImage from './../contempstrip.jpg';
import ClassCard from './ClassCard';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { green100 } from 'material-ui/styles/colors';

const classes = {
  root: {
    flexGrow: 1
  },
  paper: {
    // padding: spacing(9),
    textAlign: 'center',
    color: green100
  }
};

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <ClassCard />
      </Grid>
      <Grid item xs={4}>
        <ClassCard />
      </Grid>
      <Grid item xs={4}>
        <ClassCard />
      </Grid>
    </React.Fragment>
  );
}

class Programs extends React.Component {
  render() {
    return (
      <div>
        <div
          className='App'
          style={{ backgroundImage: `url(${libraryImage})` }}
        >
          <div className='App-content'>
            <h1>Program</h1>
            <h6>Multiple classes throughout a year</h6>
          </div>
        </div>
        <br />
        <br />
        <div>
          <Grid container spacing={4}>
            <Grid container item xs={12} spacing={4}>
              <FormRow />
            </Grid>
            <Grid container item xs={12} spacing={4}>
              <FormRow />
            </Grid>
            <Grid container item xs={12} spacing={4}>
              <FormRow />
            </Grid>
          </Grid>
          
        </div>
      </div>
    );
  }
}

export default Programs;
