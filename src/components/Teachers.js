import React from 'react';
import TeacherRow from './TeacherRow';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typography from '@material-ui/core/Typography';


const baseUrl = 'http://localhost:8080';

const styles = ({ breakpoints }) => ({
  root: {
    padding: 16,
    [breakpoints.up('sm')]: {
      padding: 24,
      maxWidth: 500,
      margin: 'auto'
    },
    [breakpoints.up('md')]: {
      maxWidth: 700
    }
  }
});

export default class Teachers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: []
    };
  }

  componentDidUpdate(prevProps, prevState) {
    axios
      .get(baseUrl + '/teachers')
      .then(response => {
        const { teachers } = this.state;
        if (teachers !== prevState.teachers) {
          this.setState({ teachers: response.data });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
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
      <div className='mt-3 mb-3 ml-2 mr-2'>
        <Typography weight={'bold'} variant={'h5'} gutterBottom align={'center'}>Teachers List</Typography>
        <table className='table table-striped' style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Subject</th>
              <th>Level</th>
              <th>Start Date</th>
              <th>Updated</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}
