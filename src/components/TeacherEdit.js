import React, { Component } from 'react';
import axios from 'axios';

const baseUrl = 'http://localhost:8080';

export default class TeacherEdit extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      teacher_id: '',
      teacher_name: ''
    };
  }
  componentDidMount() {
    axios
      .get(
        'http://localhost:8080/teachers/' + this.props.match.params.teacher_id
      )
      .then(response => {
        this.setState({
          teacher_id: response.data.teacher_id,
          teacher_name: response.data.teacher_name
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

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
      console.log(res.data);
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
              value={this.state.id}
            />
          </div>
          <div className='form-group'>
            <label>First Name: </label>
            <input
              type='text'
              className='form-control'
              value={this.state.first_name}
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
