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
      .delete(baseUrl + '/students/' + this.props.aStudent.membership_id)
      .then((res) => console.log('deleted'))
      .catch((err) => console.log(err));
  }

  render() {
    const registrationDate = moment(this.props.aStudent.date_of_registration).format(
      'YYYY-MM-DD'
    );
    const updatedDate = moment(this.props.aStudent.last_update).format(
      'YYYY-MM-DD HH:MM'
    );

    // Check if studentContact is empty or not
    const email =
      this.props.aStudent && this.props.aStudent.studentContact
        ? this.props.aStudent.studentContact.email
        : null;

    return (
      <tr>
        <td>{this.props.aStudent.membership_id}</td>
        <td>{this.props.aStudent.preferred_name}</td>
        <td>{this.props.aStudent.membership_type}</td>
        <td>{this.props.aStudent.grade}</td>
        <td>{email}</td>
        <td>{registrationDate}</td>
        <td>{updatedDate}</td>
        <td>
          <Link
            to={{
              pathname: '/oss/studentdetail',
              state: {
                // teacherProps: this.props.aStudent.teacher_name
                studentProps: this.props.aStudent,
              },
            }}
            className='btn btn-primary btn-sm'
          >
            Detail
          </Link>
        </td>
        <td>
          <Link
            to={'/oss/studentedit/' + this.props.aStudent.membership_id}
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
