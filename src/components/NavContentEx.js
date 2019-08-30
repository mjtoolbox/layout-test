import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';

const list = [
  {
    primaryText: 'Home',
    icon: 'home',
    linkUrl: '/'
  },
  {
    primaryText: 'Registration',
    icon: 'input',
    linkUrl: '/'
  },
  {
    primaryText: 'Programs',
    icon: 'subject',
    linkUrl: '/'
  },
  {
    primaryText: 'Students',
    icon: 'face',
    linkUrl: '/'
  },
  {
    primaryText: 'Planning',
    icon: 'calendar_today',
    linkUrl: '/'
  },
  {
    primaryText: 'Report Card',
    icon: 'assessment',
    linkUrl: '/'
  },
  {
    primaryText: 'Teachers',
    icon: 'person',
    linkUrl: '/Teachers'
  },
  {
    primaryText: 'Payroll',
    icon: 'account_balance',
    linkUrl: '/'
  },
  {
    primaryText: 'Management Report',
    icon: 'trending_up',
    linkUrl: '/'
  }
];

const NavContentEx = ({ parentCallBack }) => {
  // const [index, setIndex] = useState(0);
  return (
    <List>
      {list.map(({ primaryText, icon, linkUrl }, i) => (
        <ListItem
          key={primaryText}
          selected={i === 0}
          button
          link={linkUrl}
          onClick={() => {
            parentCallBack(i);
          }}
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
