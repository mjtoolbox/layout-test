import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  TextField,
} from '@material-ui/core';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default class TeacherDetail extends Component {
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
      this.props.location.state.teacherProps.start_date
    ).format('YYYY-MM-DD');

    const endDate = formatEndDate(
      this.props.location.state.teacherProps.end_date
    );

    const updatedDate = moment(
      this.props.location.state.teacherProps.last_update
    ).format('YYYY-MM-DD HH:MM');

    return (
      <Card>
        <CardHeader
          style={{ textAlign: 'center' }}
          subheader='Viewing details'
          title='Teacher Information'
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={2} xs={12}>
              <TextField
                disabled
                fullWidth
                label='ID'
                margin='dense'
                required
                value={this.props.location.state.teacherProps.teacher_id}
                variant='outlined'
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                disabled
                fullWidth
                label='Name'
                margin='dense'
                required
                value={this.props.location.state.teacherProps.teacher_name}
                variant='outlined'
              />
            </Grid>
            <Grid item md={2} xs={12}>
              <TextField
                disabled
                fullWidth
                label='Subject'
                margin='dense'
                value={this.props.location.state.teacherProps.subject}
                variant='outlined'
              />
            </Grid>
            <Grid item md={2} xs={12}>
              <TextField
                disabled
                fullWidth
                label='Level'
                margin='dense'
                value={this.props.location.state.teacherProps.level}
                variant='outlined'
              />
            </Grid>
            <Grid item md={2} xs={12}>
              <TextField
                disabled
                fullWidth
                label='Status'
                margin='dense'
                value={this.props.location.state.teacherProps.status}
                variant='outlined'
              />
            </Grid>

            <Grid item md={4} xs={12}>
              <TextField
                disabled
                fullWidth
                label='Email'
                margin='dense'
                value={this.props.location.state.teacherProps.email}
                variant='outlined'
              />
            </Grid>
            <Grid item md={2} xs={12}>
              <TextField
                disabled
                fullWidth
                label='Cell Phone'
                margin='dense'
                value={
                  this.props.location.state.teacherProps.cell_phone || 'n/a'
                }
                variant='outlined'
              />
            </Grid>

            <Grid item md={2} xs={12}>
              <TextField
                disabled
                fullWidth
                label='Home Phone'
                margin='dense'
                value={
                  this.props.location.state.teacherProps.home_phone || 'n/a'
                }
                variant='outlined'
              />
            </Grid>
            <Grid item md={2} xs={12}>
              <TextField
                disabled
                fullWidth
                label='Start Date'
                margin='dense'
                value={startDate}
                variant='outlined'
              />
            </Grid>
            <Grid item md={2} xs={12}>
              <TextField
                disabled
                fullWidth
                label='End Date'
                margin='dense'
                value={endDate}
                variant='outlined'
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                disabled
                fullWidth
                label='Address'
                margin='dense'
                value={this.props.location.state.teacherProps.address}
                variant='outlined'
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <TextField
                disabled
                fullWidth
                label='City'
                margin='dense'
                value={this.props.location.state.teacherProps.city}
                variant='outlined'
              />
            </Grid>
            <Grid item md={1} xs={12}>
              <TextField
                disabled
                fullWidth
                label='Province'
                margin='dense'
                value={this.props.location.state.teacherProps.province}
                variant='outlined'
              />
            </Grid>
            <Grid item md={2} xs={12}>
              <TextField
                disabled
                fullWidth
                label='Postal Code'
                margin='dense'
                value={this.props.location.state.teacherProps.postal_code}
                variant='outlined'
              />
            </Grid>

            <Grid item md={2} xs={12}>
              <TextField
                disabled
                fullWidth
                label='Last Updated'
                margin='dense'
                value={updatedDate}
                variant='outlined'
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Link
            to={
              '/oss/teacheredit/' +
              this.props.location.state.teacherProps.teacher_id
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
