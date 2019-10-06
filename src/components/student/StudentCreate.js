import React, { Component } from 'react';
import axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
import moment from 'moment';
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
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

const baseUrl = 'http://localhost:8080';

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

class StudentCreate extends Component {
  constructor(props) {
    super(props);
    this.onChangePreferredName = this.onChangePreferredName.bind(this);
    this.onChangeLegalName = this.onChangeLegalName.bind(this);
    this.onChangeDateOfBirth = this.onChangeDateOfBirth.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeMembershipType = this.onChangeMembershipType.bind(this);
    this.onChangeGrade = this.onChangeGrade.bind(this);
    this.onChangeDateOfRegistration = this.onChangeDateOfRegistration.bind(
      this
    );
    this.onChangeSchool = this.onChangeSchool.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeCellPhone = this.onChangeCellPhone.bind(this);
    this.onChangeHomePhone = this.onChangeHomePhone.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeProvince = this.onChangeProvince.bind(this);
    this.onChangePostalCode = this.onChangePostalCode.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      guardian_id: '',
      guardian_name: '',
      membership_id: '',
      preferred_name: '',
      legal_name: '',
      date_of_birth: new Date(),
      gender: '',
      membership_type: '',
      grade: '',
      date_of_registration: new Date(),
      school: '',
      email: '',
      cell_phone: '',
      home_phone: '',
      address: '',
      city: '',
      province: '',
      postal_code: ''
    };
  }

  // Load Guardian object from "Add student" in GuardianList or after creation of Student in StudentCreate
  componentDidMount() {
    axios
      .get(baseUrl + '/guardians/' + this.props.match.params.guardian_id, {
        auth: {
          username: 'mymy',
          password: 'hello'
        }
      })
      .then(response => {
        this.setState({
          guardian_id: response.data.guardian_id,
          guardian_name: response.data.guardian_name,
          relationship: response.data.relationship,
          home_phone: response.data.home_phone,
          address: response.data.address,
          city: response.data.city,
          province: response.data.province,
          postal_code: response.data.postal_code
        });
        // }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onChangePreferredName(e) {
    this.setState({
      preferred_name: e.target.value
    });
  }

  onChangeLegalName(e) {
    this.setState({
      legal_name: e.target.value
    });
  }

  onChangeDateOfBirth(date) {
    const dob = moment(date).format('YYYY-MM-DD');
    this.setState({
      date_of_birth: dob
    });
  }

  onChangeGender(e) {
    this.setState({
      gender: e.target.value
    });
  }

  onChangeMembershipType(e) {
    this.setState({
      membership_type: e.target.value
    });
  }

  onChangeGrade(e) {
    this.setState({
      grade: e.target.value
    });
  }

  onChangeDateOfRegistration(date) {
    const registrationDate = moment(date).format('YYYY-MM-DD');
    this.setState({
      date_of_registration: registrationDate
    });
  }

  onChangeSchool(e) {
    this.setState({
      school: e.target.value
    });
  }

  onChangeCellPhone(e) {
    this.setState({
      cell_phone: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeHomePhone(e) {
    this.setState({
      home_phone: e.target.value
    });
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    });
  }

  onChangeCity(e) {
    this.setState({
      city: e.target.value
    });
  }

  onChangeProvince(e) {
    this.setState({
      province: e.target.value
    });
  }

  onChangePostalCode(e) {
    this.setState({
      postal_code: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      preferred_name: this.state.preferred_name,
      legal_name: this.state.legal_name,
      date_of_birth: this.state.date_of_birth,
      gender: this.state.gender,
      membership_type: this.state.membership_type,
      grade: this.state.grade,
      date_of_registration: this.state.date_of_registration,
      school: this.state.school
    };

    const student_contact = {
      email: this.state.email,
      cell_phone: this.state.cell_phone,
      home_phone: this.state.home_phone,
      address: this.state.address,
      city: this.state.city,
      province: this.state.province,
      postal_code: this.state.postal_code
    };

    axios
      .post(
        baseUrl + '/guardians/' + this.state.guardian_id + '/students',
        obj,
        {
          auth: {
            username: 'mymy',
            password: 'hello'
          }
        }
      )
      .then(response => {
        this.setState({ membership_id: response.data.membership_id });

        console.log('student id : ' + response.data.membership_id);

        // /students/{membership_id}/contact
        axios
          .post(
            baseUrl + '/students/' + this.state.membership_id + '/contact',
            student_contact,
            {
              auth: {
                username: 'mymy',
                password: 'hello'
              }
            }
          )
          .then(response => {
            this.setState({
              email: response.data.state.email,
              cell_phone: response.data.cell_phone,
              home_phone: response.data.home_phone,
              address: response.data.address,
              city: response.data.city,
              province: response.data.province,
              postal_code: response.data.postal_code
            });
            this.props.history.push('/oss/students');
          })
          .catch(function(error) {
            console.log(error);
          });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { classes } = this.props;

    return (
      <Card>
        <form onSubmit={this.onSubmit}>
          <CardHeader
            style={{ textAlign: 'center' }}
            subheader='add new student information below'
            title='Create a New Student'
          />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  disabled
                  fullWidth
                  label='Guardian'
                  margin='dense'
                  value={this.state.guardian_name}
                  variant='filled'
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  disabled
                  fullWidth
                  label='Relationship'
                  margin='dense'
                  value={this.state.relationship || ''}
                  variant='filled'
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={5} xs={12}>
                <TextField
                  fullWidth
                  label='Preferred Name'
                  margin='dense'
                  required
                  value={this.state.preferred_name}
                  onChange={this.onChangePreferredName}
                  variant='outlined'
                />
              </Grid>
              <Grid item md={5} xs={12}>
                <TextField
                  fullWidth
                  required
                  label='Legal Name'
                  margin='dense'
                  value={this.state.legal_name}
                  onChange={this.onChangeLegalName}
                  variant='outlined'
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <FormControl className={classes.formControl} variant='outlined'>
                  <InputLabel htmlFor='gender'>Gender</InputLabel>
                  <Select
                    required
                    value={this.state.gender || ''}
                    onChange={this.onChangeGender}
                    inputProps={{
                      name: 'gender',
                      id: 'gender'
                    }}
                    margin='dense'
                    variant='outlined'
                    input={<OutlinedInput labelWidth={80} />}
                  >
                    <MenuItem value=''>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value='Male'>Male</MenuItem>
                    <MenuItem value='Female'>Female</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item md={2} xs={12}>
                  <KeyboardDatePicker
                    disableToolbar
                    inputVariant='outlined'
                    variant='inline'
                    format='MM/dd/yyyy'
                    margin='dense'
                    required
                    label='DOB'
                    value={this.state.date_of_birth || ''}
                    onChange={date => this.onChangeDateOfBirth(date)}
                    KeyboardButtonProps={{
                      'aria-label': 'change date'
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>

              <Grid item md={2} xs={12}>
                <TextField
                  fullWidth
                  required
                  label='Membership'
                  margin='dense'
                  value={this.state.membership_type}
                  onChange={this.onChangeMembershipType}
                  variant='outlined'
                />
              </Grid>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item md={2} xs={12}>
                  <KeyboardDatePicker
                    disableToolbar
                    inputVariant='outlined'
                    variant='inline'
                    format='MM/dd/yyyy'
                    margin='dense'
                    required
                    label='Registration'
                    value={this.state.date_of_registration}
                    onChange={date => this.onChangeDateOfRegistration(date)}
                    KeyboardButtonProps={{
                      'aria-label': 'change date'
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
              <Grid item md={4} xs={12}>
                <TextField
                  fullWidth
                  required
                  label='School'
                  margin='dense'
                  value={this.state.school}
                  onChange={this.onChangeSchool}
                  variant='outlined'
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  fullWidth
                  required
                  label='Grade'
                  margin='dense'
                  value={this.state.grade}
                  onChange={this.onChangeGrade}
                  variant='outlined'
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  fullWidth
                  required
                  label='Email'
                  margin='dense'
                  value={this.state.email}
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
                  value={this.state.cell_phone}
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
                  value={this.state.home_phone}
                  onChange={this.onChangeHomePhone}
                  variant='outlined'
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  fullWidth
                  required
                  label='Address'
                  margin='dense'
                  value={this.state.address}
                  onChange={this.onChangeAddress}
                  variant='outlined'
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  fullWidth
                  required
                  label='City'
                  margin='dense'
                  value={this.state.city}
                  onChange={this.onChangeCity}
                  variant='outlined'
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <FormControl variant='outlined' className={classes.formControl}>
                  {/* Select control variant=outlined doesn't work alone. Needs to combined with OutlinedInput because it requires additional label width. Not a convenient way to draw dropdown list. */}
                  <InputLabel htmlFor='province'>Province</InputLabel>
                  <Select
                    required
                    value={this.state.province}
                    onChange={this.onChangeProvince}
                    inputProps={{
                      name: 'province',
                      id: 'province'
                    }}
                    margin='dense'
                    variant='outlined'
                    input={<OutlinedInput labelWidth={80} />}
                  >
                    <MenuItem value=''>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value='BC'>BC</MenuItem>
                    <MenuItem value='AB'>AB</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  fullWidth
                  label='Postal Code'
                  margin='dense'
                  value={this.state.postal_code}
                  onChange={this.onChangePostalCode}
                  variant='outlined'
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions>
            <input
              type='submit'
              value='Submit Student'
              className='btn btn-primary btn-sm'
            />
          </CardActions>
        </form>
      </Card>
    );
  }
}

export default withStyles(styles)(StudentCreate);
