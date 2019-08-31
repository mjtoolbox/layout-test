import React, { Component } from 'react';
import axios from 'axios';

const baseUrl = 'http://localhost:8080';

export default class TeacherCreate extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      teacher_id: '',
      teacher_name: ''
    };
  }
  onChangeName(e) {
    this.setState({
      teacher_name: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(`The values are ${this.state.teacher_name}`);
    const obj = {
      teacher_name: this.state.teacher_name
    };

    axios.post(baseUrl + '/teachers', obj).then(res => {
      console.log(res.data);
      this.props.history.push('/teachers');
    });
    this.setState({
      teacher_id: '',
      teacher_name: ''
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Add New Teacher</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Teacher Name: </label>
            <input
              type='text'
              className='form-control'
              value={this.state.teacher_name}
              onChange={this.onChangeName}
            />
          </div>
          <div className='form-group'>
            <input
              type='submit'
              value='Add Teacher'
              className='btn btn-primary'
            />
          </div>
        </form>
      </div>
    );
  }
}
