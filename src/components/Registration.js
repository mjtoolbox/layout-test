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

class Registration extends React.Component {
  render() {
    return (
      <>
        <h1>Registration page</h1>
        <div>
          In order to register, guardian information must be captured first.
        </div>
        <br></br>
        <Divider />
        <Card md={6} xs={12}>
          <CardActions>
            <Link to={'/oss/guardiancreate'} className='btn btn-primary btn-sm'>
              Start Registration
            </Link>
          </CardActions>
        </Card>
      </>
    );
  }
}

export default Registration;
