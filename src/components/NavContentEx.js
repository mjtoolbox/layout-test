import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

const list = [
  {
    primaryText: 'Home',
    icon: 'home',
    linkUrl: '/main'
  },
  {
    primaryText: 'Registration',
    icon: 'input',
    linkUrl: '/registration'
  },
  {
    primaryText: 'Programs',
    icon: 'subject',
    linkUrl: '/programs'
  },
  {
    primaryText: 'Students',
    icon: 'face',
    linkUrl: '/students'
  },
  {
    primaryText: 'Planning',
    icon: 'calendar_today',
    linkUrl: '/planning'
  },
  {
    primaryText: 'Report Card',
    icon: 'assessment',
    linkUrl: '/reports'
  },
  {
    primaryText: 'Teachers',
    icon: 'person',
    linkUrl: '/teachers'
  },
  {
    primaryText: 'Payroll',
    icon: 'account_balance',
    linkUrl: '/payrolls'
  },
  {
    primaryText: 'Management Report',
    icon: 'trending_up',
    linkUrl: '/management'
  }
];

// const NavContentEx = ({ parentCallBack }) => {
const NavContentEx = () => {
  return (
    <List>
      {list.map(({ primaryText, icon, linkUrl }, i) => (
        <ListItem
          key={primaryText}
          selected={i === 0}
          button
          // onClick={() => {
          //   parentCallBack(i);
          // }}
          component={Link}
          to={linkUrl}
        >
          <ListItemIcon>
            <Icon>{icon}</Icon>
          </ListItemIcon>
          <ListItemText
            primary={primaryText}
            primaryTypographyProps={{ noWrap: true }}
          />
        </ListItem>
      ))}
      <Divider style={{ margin: '12px 0' }} />
      <ListItem button>
        <ListItemIcon>
          <Icon>settings</Icon>
        </ListItemIcon>
        <ListItemText
          primary={'Settings & account'}
          primaryTypographyProps={{ noWrap: true }}
        />
      </ListItem>
    </List>
  );
};

NavContentEx.propTypes = {};
NavContentEx.defaultProps = {};

export default NavContentEx;
