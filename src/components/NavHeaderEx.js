import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { useSelector } from 'react-redux';

// const NavHeaderEx = ({ collapsed }) => (
function NavHeaderEx({ collapsed }) {
  // const isLogged = useSelector((state) => state.userProfile.logged);
  const email = useSelector((state) =>
    state.userProfile != null ? state.userProfile.email : ''
  );
  const name = useSelector((state) =>
    state.userProfile != null ? state.userProfile.name : ''
  );
  const role = useSelector((state) => state.userProfile.roles[0].authority);

  return (
    <>
      <div style={{ padding: collapsed ? 8 : 16, transition: '0.3s' }}>
        {email && (
          <Avatar
            style={{
              width: collapsed ? 48 : 60,
              height: collapsed ? 48 : 60,
              transition: '0.3s',
            }}
          />
        )}
        {!email && (
          <Typography variant={'overline'} noWrap>
            You are not logged in
          </Typography>
        )}
        <div style={{ paddingBottom: 16 }} />
        <Typography variant={'h6'} noWrap>
          {name}
        </Typography>
        <Typography color={'textSecondary'} noWrap gutterBottom>
          {email}
        </Typography>
        <Typography variant={'h6'} noWrap>
          {role}
        </Typography>
      </div>
      <Divider />
    </>
  );
}

NavHeaderEx.propTypes = {
  collapsed: PropTypes.bool,
};
NavHeaderEx.defaultProps = {
  collapsed: false,
};

export default NavHeaderEx;
