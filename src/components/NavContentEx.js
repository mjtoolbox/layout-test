import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';

const list = [
  {
    primaryText: 'Home',
    icon: 'home'
  },
  {
    primaryText: 'Registration',
    icon: 'input'
  },
  {
    primaryText: 'Programs',
    icon: 'subject'
  },
  {
    primaryText: 'Students',
    icon: 'face'
  },
  {
    primaryText: 'Planning',
    icon: 'calendar_today'
  },
  {
    primaryText: 'Report Card',
    icon: 'assessment'
  },
  {
    primaryText: 'Teachers',
    icon: 'person'
  },
  {
    primaryText: 'Payroll',
    icon: 'account_balance'
  },
  {
    primaryText: 'Management Report',
    icon: 'trending_up'
  }
];

const NavContentEx = ({ parentCallBack }) => {
  return (
    <List>
      {list.map(({ primaryText, icon, linkUrl }, i) => (
        <ListItem
          key={primaryText}
          selected={i === 0}
          button
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
