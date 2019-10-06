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
  TextField
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

const baseUrl = 'http://localhost:8080';

export default class GuardianCreate extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeRelationship = this.onChangeRelationship.bind(this);
    this.onChangeCellPhone = this.onChangeCellPhone.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeHomePhone = this.onChangeHomePhone.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeProvince = this.onChangeProvince.bind(this);
    this.onChangeProvince = this.onChangeProvince.bind(this);
    this.onChangePostalCode = this.onChangePostalCode.bind(this);
   
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      guardian_id: '',
      guardian_name: '',
      relationship: '',
      cell_phone: '',
      email: '',
      home_phone: '',
      address: '',
      city: '',
      province: '',
      postal_code: ''
    };
  }

  onChangeName(e) {
    this.setState({
      guardian_name: e.target.value
    });
  }

  onChangeRelationship(e) {
    this.setState({
      relationship: e.target.value
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
      guardian_name: this.state.guardian_name,
      relationship: this.state.relationship,
      cell_phone: this.state.cell_phone,
      email: this.state.email,
      home_phone: this.state.home_phone,
      address: this.state.address,
      city: this.state.city,
      province: this.state.province,
      postal_code: this.state.postal_code
    };

    axios
      .post(baseUrl + '/guardians', obj, {
        auth: {
          username: 'mymy',
          password: 'hello'
        }
      })
      .then(res => {
        this.props.history.push(
          {
            pathname: '/oss/studentcreate',
            state: {
              guardian_id: res.data.guardian_id
            }
          }
        );
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <Card>
        <form onSubmit={this.onSubmit}>
          <CardHeader
            style={{ textAlign: 'center' }}
            subheader='add new guardian information below'
            title='Create a New Guardian'
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
                  value={this.state.guardian_name}
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
                  value={this.state.relationship}
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
              <Grid item md={8} xs={12}>
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
              <Grid item md={3} xs={12}>
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
                <FormControl variant='outlined'>
                  <InputLabel htmlFor='province'>Province</InputLabel>
                  <Select
                    required
                    value={this.state.province}
                    onChange={this.onChangeProvince}
                    inputProps={{
                      name: 'province',
                      id: 'province'
                    }}
                  >
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
              value='Submit Guardian'
              className='btn btn-primary btn-sm'
            />
          </CardActions>
        </form>
      </Card>
    );
  }
}
