import React, { Component } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { spacing } from '@material-ui/system';
import moment from 'moment';


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

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      teacher_name: this.state.teacher_name
    };
    axios.put(baseUrl + '/teachers/' + this.state.teacher_id, obj).then(res => {
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
            id='outlined-disabled'
            label='ID'
            className={styles.textField}
            value={this.state.teacher_id}
            margin='normal'
            variant='outlined'
            pr={500}
          />
          <br/>
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
            // onChange={this.onChangeSubject}
            margin='normal'
            variant='outlined'
          />
           <br />
          <TextField
            id='outlined-name'
            label='start date'
            className={styles.textField}
            value={startDate}
            // onChange={this.onChangeSubject}
            margin='normal'
            variant='outlined'
          />
           <br />
          <TextField
            id='outlined-name'
            label='cell phone'
            className={styles.textField}
            value={this.state.cell_phone}
            // onChange={this.onChangeSubject}
            margin='normal'
            variant='outlined'
          />
           <br />
          <TextField
            id='outlined-name'
            label='email'
            className={styles.textField}
            value={this.state.email}
            // onChange={this.onChangeSubject}
            margin='normal'
            variant='outlined'
          />
           <br />
          <TextField
            id='outlined-name'
            label='home phone'
            className={styles.textField}
            value={this.state.home_phone}
            // onChange={this.onChangeSubject}
            margin='normal'
            variant='outlined'
          />
           <br />
          <TextField
            id='outlined-name'
            label='address'
            className={styles.textField}
            value={this.state.address}
            // onChange={this.onChangeSubject}
            margin='normal'
            variant='outlined'
          />
           <br />
          <TextField
            id='outlined-name'
            label='city'
            className={styles.textField}
            value={this.state.city}
            // onChange={this.onChangeSubject}
            margin='normal'
            variant='outlined'
          />
           <br />
          <TextField
            id='outlined-name'
            label='province'
            className={styles.textField}
            value={this.state.province}
            // onChange={this.onChangeSubject}
            margin='normal'
            variant='outlined'
          />
           <br />
          <TextField
            id='outlined-name'
            label='postal code'
            className={styles.textField}
            value={this.state.postal_code}
            // onChange={this.onChangeSubject}
            margin='normal'
            variant='outlined'
          />
           <br />
          <TextField
            id='outlined-name'
            label='last updated'
            className={styles.textField}
            value={updatedDate}
            // onChange={this.onChangeSubject}
            margin='normal'
            variant='outlined'
          />

          <div className='form-group'>
            <input
              type='submit'
              value='Update Actor'
              className='btn btn-primary'
            />
          </div>
        </form>
      </div>
    );
  }
}
