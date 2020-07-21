import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import AuthService from '../../service/AuthService';

const baseUrl = 'http://localhost:8080';

export default class GuardianRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.Auth = new AuthService();
  }

  delete() {
    axios
      .delete(
        baseUrl + '/guardians/' + this.props.obj.guardian_id,
        this.Auth.getAuthHeader()
      )
      .then((res) => console.log('deleted'))
      .catch((err) => console.log(err));
  }

  render() {
    const registrationDate = moment(this.props.obj.registration_date).format(
      'YYYY-MM-DD'
    );
    const updatedDate = moment(this.props.obj.last_update).format(
      'YYYY-MM-DD HH:MM'
    );

    return (
      <tr>
        <td>{this.props.obj.guardian_id}</td>
        <td>{this.props.obj.guardian_name}</td>
        <td>{this.props.obj.relationship}</td>
        {/* <td>{this.props.obj.student}</td> */}
        <td>To be populated</td>
        <td>{registrationDate}</td>
        <td>
          <Link
            to={{
              pathname: '/oss/guardiandetail',
              state: {
                // teacherProps: this.props.obj.teacher_name
                guardianProps: this.props.obj,
              },
            }}
            className='btn btn-primary btn-sm'
          >
            View Detail
          </Link>
        </td>
        <td>
          <Link
            to={'/oss/guardianedit/' + this.props.obj.guardian_id}
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
        <td>
          <Link
            to={'/oss/studentcreate/' + this.props.obj.guardian_id}
            className='btn btn-outline-primary btn-sm'
          >
            Add Student
          </Link>
        </td>
      </tr>
    );
  }
}
