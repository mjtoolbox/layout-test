import React from 'react';
import TeacherRow from './TeacherRow';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField
} from '@material-ui/core';

const baseUrl = 'http://localhost:8080';

export default class TeacherList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: []
    };
  }

  componentDidMount() {
    axios
      .get(baseUrl + '/teachers')
      .then(response => {
        this.setState({ teachers: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  tabRow() {
    return this.state.teachers.map(function(object, i) {
      return <TeacherRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <Card>
          <CardHeader
            style={{ textAlign: 'center' }}
            subheader='Teacher information can be viewed, edited, or deleted'
            title='Teacher List'
            action={
              <IconButton
                aria-label='add'
                color='primary'
                component={Link}
                to='/teachercreate'
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
                <th>Subject</th>
                <th>Level</th>
                <th>Start Date</th>
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
