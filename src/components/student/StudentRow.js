import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

const baseUrl = 'http://localhost:8080';

export default class StudentRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios
      .delete(baseUrl + '/students/' + this.props.obj.membership_id, {
        auth: {
          username: 'mymy',
          password: 'hello'
        }
      })
      .then(res => console.log('deleted'))
      .catch(err => console.log(err));
  }

  render() {
    const registrationDate = moment(this.props.obj.date_of_registration).format(
      'YYYY-MM-DD'
    );
    const updatedDate = moment(this.props.obj.last_update).format(
      'YYYY-MM-DD HH:MM'
    );

    // Check if studentContact is empty or not
    const email =
      this.props.obj && this.props.obj.studentContact
        ? this.props.obj.studentContact.email
        : null;

    return (
      <tr>
        <td>{this.props.obj.membership_id}</td>
        <td>{this.props.obj.preferred_name}</td>
        <td>{this.props.obj.membership_type}</td>
        <td>{this.props.obj.grade}</td>
        <td>{email}</td>
        <td>{registrationDate}</td>
        <td>{updatedDate}</td>
        <td>
          <Link
            to={{
              pathname: '/oss/studentdetail',
              state: {
                // teacherProps: this.props.obj.teacher_name
                studentProps: this.props.obj
              }
            }}
            className='btn btn-primary btn-sm'
          >
            View Detail
          </Link>
        </td>
        <td>
          <Link
            to={'/oss/studentedit/' + this.props.obj.membership_id}
            className='btn btn-primary btn-sm'
          >
            Edit
          </Link>
        </td>
        <td>
          <button onClick={this.delete} className='btn btn-danger btn-sm'>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
