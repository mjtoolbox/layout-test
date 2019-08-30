import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

const baseUrl = 'http://localhost:8080';

export default class TeacherRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios
      .delete(baseUrl + '/teachers/' + this.props.obj.teacher_id)
      .then(res => console.log('deleted'))
      .catch(err => console.log(err));
  }

  render() {
    const startDate = moment(this.props.obj.start_date).format('YYYY-MM-DD');
    const updatedDate = moment(this.props.obj.last_upate).format(
      'YYYY-MM-DD HH:MM'
    );

    return (
      <tr>
        <td>{this.props.obj.teacher_id}</td>
        <td>{this.props.obj.teacher_name}</td>
        <td>{this.props.obj.subjects}</td>
        <td>{this.props.obj.level}</td>
        <td>{startDate}</td>
        <td>{updatedDate}</td>
        <td>
          <Link
            to={'/edit/' + this.props.obj.teacher_id}
            className='btn btn-primary'
          >
            Edit
          </Link>
        </td>
        <td>
          <button onClick={this.delete} className='btn btn-danger'>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
