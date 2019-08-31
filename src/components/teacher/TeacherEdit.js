import React, { Component } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { spacing } from '@material-ui/system';
import moment from 'moment';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const baseUrl = 'http://localhost:8080';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(30),
    marginRight: theme.spacing(50),
    width: 400
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

export default class TeacherEdit extends Component {
  _isMounted = false;

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

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      teacher_id: '',
      teacher_name: '',
      subjects: '',
      level: '',
      start_date: '',
      cell_phone: '',
      email: '',
      home_phone: '',
      address: '',
      city: '',
      province: '',
      postal_code: '',
      last_update: ''
    };
  }

  componentDidMount() {
    this._isMounted = true;
    axios
      .get(
        'http://localhost:8080/teachers/' + this.props.match.params.teacher_id
      )
      .then(response => {
        if (this._isMounted) {
          this.setState({
            teacher_id: response.data.teacher_id,
            teacher_name: response.data.teacher_name,
            subjects: response.data.subjects,
            level: response.data.level,
            start_date: response.data.start_date,
            cell_phone: response.data.cell_phone,
            email: response.data.email,
            home_phone: response.data.home_phone,
            address: response.data.address,
            city: response.data.city,
            province: response.data.province,
            postal_code: response.data.postal_code,
            last_update: response.data.last_update
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onChangeName(e) {
    this.setState({
      teacher_name: e.target.value
    });
  }

  onChangeSubject(e) {
    this.setState({
      subject: e.target.value
    });
  }

  onChangeLevel(e) {
    this.setState({
      level: e.target.value
    });
  }

  onChangeStartDate(e) {
    this.setState({
      start_date: e.target.value
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
      teacher_name: this.state.teacher_name,
      subjects: this.state.subjects,
      level: this.state.level,
      start_date: this.state.start_date,
      cell_phone: this.state.cell_phone,
      email: this.state.email,
      home_phone: this.state.home_phone,
      address: this.state.address,
      city: this.state.city,
      province: this.state.province,
      postal_code: this.state.postal_code
    };
    axios
      .put('http://localhost:8080/teachers/' + this.state.teacher_id, obj)
      .then(res => {
        this.props.history.push('/teachers');
      });
  }

  render() {
    const startDate = moment(this.state.start_date).format('YYYY-MM-DD');
    const updatedDate = moment(this.state.last_update).format(
      'YYYY-MM-DD HH:MM'
    );

    return (
      <div style={{ marginTop: 10 }}>
        <h3 align='center'>Update Teacher</h3>
        <form className={styles.container} onSubmit={this.onSubmit}>
          <TextField
            disabled
            id='outlined-disabled'
            label='ID'
            className={styles.textField}
            value={this.state.teacher_id}
            margin='normal'
            variant='outlined'
            pr={500}
          />
          <br />
          <TextField
            id='outlined-name'
            label='Name'
            className={styles.textField}
            value={this.state.teacher_name}
            onChange={this.onChangeName}
            margin='normal'
            variant='outlined'
          />
          <br />
          <TextField
            id='outlined-name'
            label='Subject'
            className={styles.textField}
            value={this.state.subjects}
            onChange={this.onChangeSubject}
            margin='normal'
            variant='outlined'
          />
          <br />
          <TextField
            id='outlined-name'
            label='level'
            className={styles.textField}
            value={this.state.level}
            onChange={this.onChangeLevel}
            margin='normal'
            variant='outlined'
          />
          <br />
          <TextField
            id='outlined-name'
            label='start date'
            className={styles.textField}
            value={startDate}
            onChange={this.onChangeStartDate}
            margin='normal'
            variant='outlined'
          />
          <br />
          <TextField
            id='outlined-name'
            label='cell phone'
            className={styles.textField}
            value={this.state.cell_phone}
            onChange={this.onChangeCellPhone}
            margin='normal'
            variant='outlined'
          />
          <br />
          <TextField
            id='outlined-name'
            label='email'
            className={styles.textField}
            value={this.state.email}
            onChange={this.onChangeEmail}
            margin='normal'
            variant='outlined'
          />
          <br />
          <TextField
            id='outlined-name'
            label='home phone'
            className={styles.textField}
            value={this.state.home_phone}
            onChange={this.onChangeHomePhone}
            margin='normal'
            variant='outlined'
          />
          <br />
          <TextField
            id='outlined-name'
            label='address'
            className={styles.textField}
            value={this.state.address}
            onChange={this.onChangeAddress}
            margin='normal'
            variant='outlined'
          />
          <br />
          <TextField
            id='outlined-name'
            label='city'
            className={styles.textField}
            value={this.state.city}
            onChange={this.onChangeCity}
            margin='normal'
            variant='outlined'
          />
          <br />
          <FormControl className={styles.formControl}>
            <InputLabel htmlFor='province'>Province</InputLabel>
            <Select
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
          {/* <TextField
            id='outlined-name'
            label='province'
            className={styles.textField}
            value={this.state.province}
            onChange={this.onChangeProvince}
            margin='normal'
            variant='outlined'
          /> */}
          <br />
          <TextField
            id='outlined-name'
            label='postal code'
            className={styles.textField}
            value={this.state.postal_code}
            onChange={this.onChangePostalCode}
            margin='normal'
            variant='outlined'
          />
          <br />
          <TextField
            disabled
            id='outlined-disabled'
            label='last updated'
            className={styles.textField}
            value={updatedDate}
            margin='normal'
            variant='outlined'
          />

          <div className='form-group'>
            <input
              type='submit'
              value='Update Teacher'
              className='btn btn-primary'
            />
          </div>
        </form>
      </div>
    );
  }
}
