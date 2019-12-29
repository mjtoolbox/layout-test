import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

class Registration extends React.Component {
  render() {
    return (
      <>
        <div style={{ padding: 20, transition: '0.3s' }}>
          <Typography variant={'overline'}>REGISTRATION</Typography>
          <Typography weight={'bold'} variant={'h5'} gutterBottom>
            Registration
          </Typography>
          <Typography>
            In order to register student, Guardian must create an account in the
            system first. Please click below to proceed.
          </Typography>
          <br />
          <br />
          <Divider />
          <Card md={6} xs={12}>
            <CardActions>
              <Link
                to={'/oss/guardiancreate'}
                className='btn btn-primary btn-sm'
              >
                Create Account
              </Link>
            </CardActions>
          </Card>
        </div>
      </>
    );
  }
}

export default Registration;
