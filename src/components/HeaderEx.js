import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { isWidthUp } from '@material-ui/core/withWidth';
import InputBase from '@material-ui/core/InputBase';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Logout from './../Logout';
import Login from './../Login';
import { useSelector } from 'react-redux';
import Tooltip from '@material-ui/core/Tooltip';

// import { connect } from 'react-redux';

const styles = ({ spacing, transitions, breakpoints, palette, shape }) => ({
  header: {
    fontWeight: 900,
    minWidth: 0,
    fontSize: 18,
    color: 'white',
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    marginRight: 8,
    borderRadius: shape.borderRadius,
    background: palette.grey[200],
    '&:hover': {
      background: palette.grey[300],
    },
    marginLeft: 0,
    width: '100%',
    [breakpoints.up('sm')]: {
      marginLeft: spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: spacing(9),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    borderRadius: 4,
    paddingTop: spacing(1),
    paddingRight: spacing(1),
    paddingBottom: spacing(1),
    paddingLeft: spacing(10),
    transition: transitions.create('width'),
    width: '100%',
    [breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

// const onClickLogin = e=> {
//   alert("onClickLogin clicked!")
// }

// const HeaderEx = ({ isLogged, classes, screen }) => (
function HeaderEx({ classes, screen }) {
  // const isLogged = useSelector((state) => state.isLogged);
  const email = useSelector((state) =>
    state.userProfile != null ? state.userProfile.email : ''
  );
  return (
    <>
      <Typography noWrap color={'textSecondary'} className={classes.header}>
        One Small Steps
      </Typography>
      <div className={classes.grow} />
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <Icon>search</Icon>
        </div>
        <InputBase
          placeholder='Search…'
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
        />
      </div>
      {screen === 'xs' && (
        <IconButton>
          <Icon>more_vert</Icon>
        </IconButton>
      )}
      {screen === 'sm' && (
        <>
          <IconButton>
            <Icon>favorite</Icon>
          </IconButton>
          <IconButton>
            <Icon>more_vert</Icon>
          </IconButton>
        </>
      )}
      {isWidthUp('md', screen) && (
        <>
          {email == '' && <Login />}
          {email != '' && <Logout />}
          {email != '' && (
            <Tooltip title='Message'>
              <IconButton>
                <Icon>sms</Icon>
              </IconButton>
            </Tooltip>
          )}
        </>
      )}
    </>
  );
}

HeaderEx.propTypes = {
  screen: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
};
HeaderEx.defaultProps = {
  screen: null,
};

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

// export default connect(mapStateToProps)(withStyles(styles)(HeaderEx));
export default withStyles(styles)(HeaderEx);
