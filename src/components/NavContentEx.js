import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from './../actions';

const list = [
  {
    index: 0,
    title: 'Home page',
    primaryText: 'Home',
    icon: 'home',
    linkUrl: '/oss/main',
    hidden: false
  },
  {
    index: 1,
    title: 'Register yourself to the program',
    primaryText: 'Registration',
    icon: 'person_add',
    linkUrl: '/oss/registration',
    hidden: false
  },
  {
    index: 2,
    title: 'Programs and curriculums',
    primaryText: 'Programs',
    icon: 'subject',
    linkUrl: '/oss/programs',
    hidden: false
  },
  {
    index: 3,
    title: 'Student Management',
    primaryText: 'Students',
    icon: 'face',
    linkUrl: '/oss/students',
    hidden: true
  },
  {
    index: 4,
    title: 'Guardian Management',
    primaryText: 'Guardians',
    icon: 'person',
    linkUrl: '/oss/guardians',
    hidden: true
  },
  {
    index: 5,
    title: 'Class Planning for Admin',
    primaryText: 'Curriculum Planning',
    icon: 'calendar_today',
    linkUrl: '/oss/planning',
    hidden: true
  },
  {
    index: 6,
    title: 'Students Report Cards',
    primaryText: 'Report Card',
    icon: 'assessment',
    linkUrl: '/oss/reports',
    hidden: true
  },
  {
    index: 7,
    title: 'Teacher Management',
    primaryText: 'Teachers',
    icon: 'school',
    linkUrl: '/oss/teachers',
    hidden: true
  },
  {
    index: 8,
    title: 'Staff Timesheet & Payroll',
    primaryText: 'Payroll',
    icon: 'account_balance',
    linkUrl: '/oss/payrolls',
    hidden: true
  },
  {
    index: 9,
    title: 'Reports',
    primaryText: 'Management Report',
    icon: 'trending_up',
    linkUrl: '/oss/management',
    hidden: true
  }
];

// const NavContentEx = ({ parentCallBack }) => {
const NavContentEx = () => {
  const isLogged = useSelector(state => state.isLogged);
  const role = useSelector(state => state.role);
  const navSelectedIndex = useSelector(state => state.navSelectedIndex);

  const dispatch = useDispatch();


  // Re-assign left navigation menu based on login & role
  if (isLogged && role === 'ADMIN') {
    list[3].hidden = false;
    list[4].hidden = false;
    list[5].hidden = false;
    list[7].hidden = false;
    list[9].hidden = false;
  }
  if (isLogged && (role === 'STAFF' || role === 'ADMIN')) {
    list[8].hidden = false;
  }
  if (isLogged) {
    list[6].hidden = false;
  }

  return (
    <List>
      {list.map(({ title, primaryText, icon, linkUrl, hidden }, i) => (
        <Tooltip title={title}>
          <ListItem
            onClick={e=>dispatch(userActions.setSelectedIndex(i))}
            key={primaryText}
            selected={i === navSelectedIndex}
            button
            component={Link}
            to={linkUrl}
            hidden={hidden}
          >
            <ListItemIcon>
              <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText
              primary={primaryText}
              primaryTypographyProps={{ noWrap: true }}
            />
          </ListItem>
        </Tooltip>
      ))}
      {isLogged && role === 'ADMIN' && (
        <div>
          <Divider style={{ margin: '12px 0' }} />
          <Tooltip title='Setting for Admin'>
            <ListItem button>
              <ListItemIcon>
                <Icon>settings</Icon>
              </ListItemIcon>
              <ListItemText
                primary={'Settings & account'}
                primaryTypographyProps={{ noWrap: true }}
              />
            </ListItem>
          </Tooltip>
        </div>
      )}
    </List>
  );
};

NavContentEx.propTypes = {};
NavContentEx.defaultProps = {};

// function mapStateToProps(state) {
//   if (state.isLogged == true) {
//     const { isLogged, userProfile, role } = state;
//     const { email, name } = userProfile;
//     return {
//       isLogged,
//       name,
//       role,
//       email
//     };
//   }
// }
export default NavContentEx;
