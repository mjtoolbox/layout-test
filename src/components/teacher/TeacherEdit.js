import React, { Component } from 'react';
import axios from 'axios';

const baseUrl = 'http://localhost:8080';

export default class TeacherEdit extends Component {
  // _isMounted = false;

  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
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
      last_update: ''
    };
  }

  componentDidMount() {
    // this._isMounted = true;
    axios
      .get(
        'http://localhost:8080/teachers/' + this.props.match.params.teacher_id
      )
      .then(response => {
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
            last_update: response.data.last_update
          });
        // }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  // componentWillUnmount() {
  //   this._isMounted = false;
  // }

  onChangeName(e) {
    this.setState({
      first_name: e.target.value
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
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align='center'>Update Actor</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>ID</label>
            <input
              readOnly
              type='text'
              className='form-control'
              value={this.state.teacher_id}
            />
          </div>
          <div className='form-group'>
            <label>First Name: </label>
            <input
              type='text'
              className='form-control'
              value={this.state.teacher_name}
              onChange={this.onChangeFirstName}
            />
          </div>
          <div className='form-group'>
            <label>Last Name: </label>
            <input
              type='text'
              className='form-control'
              value={this.state.last_name}
              onChange={this.onChangeLastName}
            />
          </div>

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
