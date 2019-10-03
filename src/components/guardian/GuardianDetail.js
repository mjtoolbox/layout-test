import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default class GuardianDetail extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     teacher_id: this.props.location.state.teacherProps.teacher_id,
  //     teacher_name: this.props.location.state.teacherProps.teacher_name,
  //     subjects: this.props.location.state.teacherProps.subjects,
  //     level: '',
  //     start_date: '',
  //     cell_phone: '',
  //     email: '',
  //     home_phone: '',
  //     address: '',
  //     city: '',
  //     province: '',
  //     postal_code: '',
  //     last_update: ''
  //   };
  // }

  render() {
    function formatEndDate(date) {
      let returnDate = 'n/a';
      if (date != null) {
        returnDate = moment(date).format('YYYY-MM-DD');
      }
      return returnDate;
    }

    const startDate = moment(
      this.props.location.state.guardianProps.start_date
    ).format('YYYY-MM-DD');

    const endDate = formatEndDate(
      this.props.location.state.guardianProps.end_date
    );

    const updatedDate = moment(
      this.props.location.state.guardianProps.last_update
    ).format('YYYY-MM-DD HH:MM');

    return (
        <Card>
          <CardHeader
          style={{ textAlign: 'center' }}
          subheader='Viewing details'
          title='Guardian Information'
        />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label='Name'
                  margin='dense'
                  required
                  value={this.props.location.state.guardianProps.guardian_name}
                  onChange={this.onChangeName}
                  variant='outlined'
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  fullWidth
                  required
                  label='Relationship'
                  margin='dense'
                  value={this.props.location.state.guardianProps.relationship}
                  onChange={this.onChangeRelationship}
                  variant='outlined'
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  fullWidth
                  required
                  label='Email'
                  margin='dense'
                  value={this.props.location.state.guardianProps.email}
                  onChange={this.onChangeEmail}
                  variant='outlined'
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  helperText='e.g. 123-555-5555'
                  fullWidth
                  required
                  label='Cell Phone'
                  margin='dense'
                  value={this.props.location.state.guardianProps.cell_phone}
                  onChange={this.onChangeCellPhone}
                  variant='outlined'
                />
              </Grid>

              <Grid item md={2} xs={12}>
                <TextField
                  helperText='e.g. 123-555-5555'
                  fullWidth
                  label='Home Phone'
                  margin='dense'
                  value={this.props.location.state.guardianProps.home_phone}
                  onChange={this.onChangeHomePhone}
                  variant='outlined'
                />
              </Grid>
              <Grid item md={8} xs={12}>
                <TextField
                  fullWidth
                  required
                  label='Address'
                  margin='dense'
                  value={this.props.location.state.guardianProps.address}
                  onChange={this.onChangeAddress}
                  variant='outlined'
                />
              </Grid>
              <Grid item md={3} xs={12}>
                <TextField
                  fullWidth
                  required
                  label='City'
                  margin='dense'
                  value={this.props.location.state.guardianProps.city}
                  onChange={this.onChangeCity}
                  variant='outlined'
                />
              </Grid>
              <Grid item md={1} xs={12}>
              <TextField
                disabled
                fullWidth
                label='Province'
                margin='dense'
                value={this.props.location.state.guardianProps.province}
                variant='outlined'
              />
            </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  fullWidth
                  label='Postal Code'
                  margin='dense'
                  value={this.props.location.state.guardianProps.postal_code}
                  onChange={this.onChangePostalCode}
                  variant='outlined'
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions>
          <Link
            to={
              '/oss/guardianedit/' +
              this.props.location.state.guardianProps.guardian_id
            }
            className='btn btn-primary btn-sm'
          >
            Edit
          </Link>
          <Button
            title='Cancel'
            className='btn btn-primary btn-sm'
            onClick={() => this.props.history.goBack()}
          >
            Cancel
          </Button>
        </CardActions>
      </Card>
    );
  }
}
