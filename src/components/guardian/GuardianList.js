import React from 'react';
import GuardianRow from './GuardianRow';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import { Card, CardHeader } from '@material-ui/core';
import AuthService from '../../service/AuthService';

const baseUrl = 'http://localhost:8080';

export default class GuardianList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guardians: [],
    };
    this.Auth = new AuthService();
  }

  componentDidMount() {
    axios
      .get(baseUrl + '/guardians', this.Auth.getAuthHeader())
      .then((response) => {
        this.setState({ guardians: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  tabRow() {
    return this.state.guardians.map(function (object, i) {
      return <GuardianRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <Card>
          <CardHeader
            style={{ textAlign: 'center' }}
            subheader='Guardian information can be viewed, edited, or deleted'
            title='Guardian List'
            action={
              <IconButton
                aria-label='add'
                color='primary'
                component={Link}
                to='/oss/guardiancreate'
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
                <th>Relationship</th>
                <th>Student</th>
                <th>Registration Date</th>
                <th colSpan='4'>Actions</th>
              </tr>
            </thead>
            <tbody>{this.tabRow()}</tbody>
          </table>
        </Card>
      </div>
    );
  }
}
