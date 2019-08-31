import React from 'react';
import TeacherRow from './TeacherRow';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import TeacherEdit from './components/TeacherEdit';
import TeacherCreate from './components/TeacherCreate';
import TeacherList from './TeacherList';

export default class Teachers extends React.Component {
  render() {
    return (
      <div>
       {/* <Route exact path='/create' component={<TeacherCreate />} />
        <Route path='/edit/:teacher_id' component={<TeacherEdit />} />
        <Route path='/teachers' component={<TeacherList/>} />  */}
      </div>
    );
  }
}
