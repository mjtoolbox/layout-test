import React from 'react';
import StudentRow from './StudentRow';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import { Card, CardHeader } from '@material-ui/core';

const baseUrl = 'http://localhost:8080';

export default class StudentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios
      .get(baseUrl + '/students', {
        auth: {
          username: 'mymy',
          password: 'hello'
        }
      })
      .then(response => {
        this.setState({ students: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  tabRow() {
    return this.state.students.map(function(object, i) {
      return <StudentRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <Card>
          <CardHeader
            style={{ textAlign: 'center' }}
            subheader='Student information can be viewed, edited, or deleted'
            title='Student List'
            action={
              <IconButton
                aria-label='add'
                color='primary'
                component={Link}
                to='/oss/studentcreate'
              >
                <AddIcon />
              </IconButton>
            }
          />
          <table className='table table-striped' style={{ marginTop: 5 }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Membership Type</th>
                <th>Grade</th>
                <th>Email</th>
                <th>Registration Date</th>
                <th>Updated</th>
                <th colSpan='3'>Actions</th>
              </tr>
            </thead>
            <tbody>{this.tabRow()}</tbody>
          </table>
        </Card>
      </div>
    );
  }
}
