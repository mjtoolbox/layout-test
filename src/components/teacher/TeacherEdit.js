import React, { Component } from 'react';
import axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
import moment from 'moment';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DateFnsUtils from '@date-io/date-fns';
import Button from 'react-bootstrap/Button';
import AuthService from '../../service/AuthService';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  TextField,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  DatePicker,
} from '@material-ui/pickers';

const baseUrl = 'http://localhost:8080';

export default class TeacherEdit extends Component {
  // _isMounted = false;

  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeSubject = this.onChangeSubject.bind(this);
    this.onChangeLevel = this.onChangeLevel.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeCellPhone = this.onChangeCellPhone.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeHomePhone = this.onChangeHomePhone.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeProvince = this.onChangeProvince.bind(this);
    this.onChangeProvince = this.onChangeProvince.bind(this);
    this.onChangePostalCode = this.onChangePostalCode.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeEndDate = this.onChangeEndDate.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      teacher_id: '',
      teacher_name: '',
      subject: '',
      level: '',
      start_date: '',
      cell_phone: '',
      email: '',
      home_phone: '',
      address: '',
      city: '',
      province: '',
      postal_code: '',
      last_update: '',
      status: '',
      end_date: '',
    };
    this.Auth = new AuthService();
  }

  componentDidMount() {
    // this._isMounted = true;
    axios
      .get(
        baseUrl + '/teachers/' + this.props.match.params.teacher_id,
        this.Auth.getAuthHeader()
      )
      .then((response) => {
        // if (this._isMounted) {
        this.setState({
          teacher_id: response.data.teacher_id,
          teacher_name: response.data.teacher_name,
          subject: response.data.subject,
          level: response.data.level,
          start_date: response.data.start_date,
          cell_phone: response.data.cell_phone,
          email: response.data.email,
          home_phone: response.data.home_phone,
          address: response.data.address,
          city: response.data.city,
          province: response.data.province,
          postal_code: response.data.postal_code,
          last_update: response.data.last_update,
          status: response.data.status,
          end_date: response.data.end_date,
        });
        // }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onChangeName(e) {
    this.setState({
      teacher_name: e.target.value,
    });
  }

  onChangeSubject(e) {
    this.setState({
      subject: e.target.value,
    });
  }

  onChangeLevel(e) {
    this.setState({
      level: e.target.value,
    });
  }

  onChangeStartDate(date) {
    const startDate = moment(date).format('YYYY-MM-DD HH:mm:ss');
    console.log(startDate);
    this.setState({
      start_date: date,
    });
  }

  onChangeCellPhone(e) {
    this.setState({
      cell_phone: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangeHomePhone(e) {
    this.setState({
      home_phone: e.target.value,
    });
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  onChangeCity(e) {
    this.setState({
      city: e.target.value,
    });
  }

  onChangeProvince(e) {
    this.setState({
      province: e.target.value,
    });
  }

  onChangePostalCode(e) {
    this.setState({
      postal_code: e.target.value,
    });
  }
  onChangeStatus(e) {
    this.setState({
      status: e.target.value,
    });
  }

  onChangeEndDate(date) {
    const endDate = moment(date).format('YYYY-MM-DD');
    this.setState({
      end_date: endDate,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      teacher_name: this.state.teacher_name,
      subject: this.state.subject,
      level: this.state.level,
      start_date: this.state.start_date,
      cell_phone: this.state.cell_phone,
      email: this.state.email,
      home_phone: this.state.home_phone,
      address: this.state.address,
      city: this.state.city,
      province: this.state.province,
      postal_code: this.state.postal_code,
      status: this.state.status,
      end_date: this.state.end_date,
    };
    axios
      .put('http://localhost:8080/teachers/' + this.state.teacher_id, obj, {
        auth: {
          username: 'mymy',
          password: 'hello',
        },
      })
      .then((res) => {
        this.props.history.push('/teachers');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const startDate = moment(this.state.start_date).format('YYYY-MM-DD');
    const updatedDate = moment(this.state.last_update).format(
      'YYYY-MM-DD HH:MM'
    );

    let datepicker;
    if (this.state.status !== 'active') {
      datepicker = (
        <Grid item md={2} xs={12}>
          <KeyboardDatePicker
            disableToolbar
            disabled
            inputVariant='outlined'
            variant='inline'
            format='yyyy/MM/dd'
            margin='normal'
            label='End Date picker'
            value={this.state.end_date}
            onChange={(date) => this.onChangeEndDate(date)}
          />
        </Grid>
      );
    } else {
      datepicker = (
        <Grid item md={2} xs={12}>
          <KeyboardDatePicker
            disableToolbar
            inputVariant='outlined'
            variant='inline'
            format='yyyy/MM/dd'
            margin='normal'
            label='End Date picker'
            value={this.state.end_date}
            onChange={(date) => this.onChangeEndDate(date)}
          />
        </Grid>
      );
    }

    return (
      <Card>
        <form onSubmit={this.onSubmit}>
          <CardHeader
            style={{ textAlign: 'center' }}
            subheader='Viewing details'
            title='Update Teacher Information'
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
                  value={this.state.teacher_id}
                  variant='outlined'
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  fullWidth
                  label='Name'
                  margin='dense'
                  required
                  value={this.state.teacher_name}
                  onChange={this.onChangeName}
                  variant='outlined'
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  fullWidth
                  label='Subject'
                  margin='dense'
                  value={this.state.subject}
                  onChange={this.onChangeSubject}
                  variant='outlined'
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  fullWidth
                  label='Level'
                  margin='dense'
                  value={this.state.level}
                  onChange={this.onChangeLevel}
                  variant='outlined'
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  fullWidth
                  label='Status'
                  margin='dense'
                  value={this.state.status}
                  onChange={this.onChangeStatus}
                  variant='outlined'
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  fullWidth
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
                  label='Cell Phone'
                  margin='dense'
                  value={this.state.cell_phone || 'n/a'}
                  onChange={this.onChangeCellPhone}
                  variant='outlined'
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  fullWidth
                  label='Home Phone'
                  margin='dense'
                  value={this.state.home_phone || 'n/a'}
                  onChange={this.onChangeHomePhone}
                  variant='outlined'
                />
              </Grid>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item md={2} xs={12}>
                  <DatePicker
                    disableToolbar
                    inputVariant='outlined'
                    variant='inline'
                    format='yyyy/MM/dd'
                    margin='normal'
                    required
                    label='Start Date picker'
                    value={startDate}
                    onChange={(date) => this.onChangeStartDate(date)}
                  />
                </Grid>

                {datepicker}
                {/* <KeyboardDatePicker
                    disableToolbar
                    inputVariant='outlined'
                    variant='inline'
                    format='yyyy/MM/dd'
                    margin='normal'
                    label='End Date picker'
                    value={this.state.end_date || '2050-12-31'}
                    onChange={date => this.onChangeEndDate(date)}
                  /> */}
              </MuiPickersUtilsProvider>

              <Grid item md={4} xs={12}>
                <TextField
                  fullWidth
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
                  label='City'
                  margin='dense'
                  value={this.state.city}
                  onChange={this.onChangeCity}
                  variant='outlined'
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <FormControl>
                  <InputLabel htmlFor='province'>Province</InputLabel>
                  <Select
                    value={this.state.province}
                    onChange={this.onChangeProvince}
                    inputProps={{
                      name: 'province',
                      id: 'province',
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
            <input
              type='submit'
              value='Update Teacher'
              className='btn btn-primary btn-sm'
            />
            <Button
              title='Cancel'
              className='btn btn-primary btn-sm'
              onClick={() => this.props.history.goBack()}
            >
              Cancel
            </Button>
          </CardActions>
        </form>
      </Card>
    );
  }
}
