import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DateFnsUtils from '@date-io/date-fns';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  TextField,
  withStyles,
  OutlinedInput
} from '@material-ui/core';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import { Link } from 'react-router-dom';

const styles = theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
});

class StudentDetail extends Component {
  render() {
    const { classes } = this.props;

    function formatEndDate(date) {
      let returnDate = 'n/a';
      if (date != null) {
        returnDate = moment(date).format('YYYY-MM-DD');
      }
      return returnDate;
    }

    const birthDate = moment(
      this.props.location.state.studentProps.date_of_birth
    ).format('YYYY-MM-DD');

    const registrationDate = formatEndDate(
      this.props.location.state.studentProps.date_of_registration
    );

    const updatedDate = moment(
      this.props.location.state.studentProps.last_update
    ).format('YYYY-MM-DD HH:MM');

    return (
      <Card>
        <CardHeader
          style={{ textAlign: 'center' }}
          subheader='Viewing details'
          title='Student Information'
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
                value={this.props.location.state.studentProps.membership_id}
                variant='outlined'
              />
            </Grid>
            <Grid item md={5} xs={12}>
              <TextField
              disabled
                fullWidth
                label='Preferred Name'
                margin='dense'
                required
                value={this.props.location.state.studentProps.preferred_name}
                variant='outlined'
              />
            </Grid>
            <Grid item md={5} xs={12}>
              <TextField
              disabled
                fullWidth
                label='Legal Name'
                margin='dense'
                required
                value={this.props.location.state.studentProps.legal_name}
                variant='outlined'
              />
            </Grid>
            <Grid item md={2} xs={12}>
              <TextField
              disabled
                fullWidth
                label='Gender'
                margin='dense'
                required
                value={this.props.location.state.studentProps.gender}
                variant='outlined'
              />
            </Grid>
            <Grid item md={2} xs={12}>
              <TextField
                disabled
                fullWidth
                label='Birth Date'
                margin='dense'
                value={this.props.location.state.studentProps.date_of_birth}
                variant='outlined'
              />
            </Grid>

            <Grid item md={2} xs={12}>
              <TextField
              disabled
                fullWidth
                required
                label='Membership'
                margin='dense'
                value={this.props.location.state.studentProps.membership_type}
                onChange={this.onChangeMembershipType}
                variant='outlined'
              />
            </Grid>
            <Grid item md={2} xs={12}>
              <TextField
              disabled
                fullWidth
                required
                label='Registration Date'
                margin='dense'
                value={this.props.location.state.studentProps.date_of_registration}
                variant='outlined'
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
              disabled
                fullWidth
                required
                label='School'
                margin='dense'
                value={this.props.location.state.studentProps.school}
                onChange={this.onChangeSchool}
                variant='outlined'
              />
            </Grid>
            <Grid item md={2} xs={12}>
              <TextField
              disabled
                fullWidth
                required
                label='Grade'
                margin='dense'
                value={this.props.location.state.studentProps.grade}
                onChange={this.onChangeGrade}
                variant='outlined'
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
              disabled
                fullWidth
                required
                label='Email'
                margin='dense'
                value={this.props.location.state.studentProps.email}
                onChange={this.onChangeEmail}
                variant='outlined'
              />
            </Grid>
            <Grid item md={2} xs={12}>
              <TextField
              disabled
                helperText='e.g. 123-555-5555'
                fullWidth
                required
                label='Cell Phone'
                margin='dense'
                value={this.props.location.state.studentProps.cell_phone}
                onChange={this.onChangeCellPhone}
                variant='outlined'
              />
            </Grid>
            <Grid item md={2} xs={12}>
              <TextField
              disabled
                helperText='e.g. 123-555-5555'
                fullWidth
                label='Home Phone'
                margin='dense'
                value={this.props.location.state.studentProps.home_phone}
                onChange={this.onChangeHomePhone}
                variant='outlined'
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
              disabled
                fullWidth
                required
                label='Address'
                margin='dense'
                value={this.props.location.state.studentProps.address}
                onChange={this.onChangeAddress}
                variant='outlined'
              />
            </Grid>
            <Grid item md={2} xs={12}>
              <TextField
              disabled
                fullWidth
                required
                label='City'
                margin='dense'
                value={this.props.location.state.studentProps.city}
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
                value={this.props.location.state.studentProps.province}
                variant='outlined'
              />
            </Grid>
            <Grid item md={2} xs={12}>
              <TextField
              disabled
                fullWidth
                label='Postal Code'
                margin='dense'
                value={this.props.location.state.studentProps.postal_code}
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
              '/oss/studentedit/' +
              this.props.location.state.studentProps.student_id
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
export default withStyles(styles)(StudentDetail);
