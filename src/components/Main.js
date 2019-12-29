import React from 'react';
import Typography from '@material-ui/core/Typography';
import libraryImage from './../library.jpg';


class Main extends React.Component {
  render() {
    return (
      <>
        <div
          className='App'
          style={{ backgroundImage: `url(${libraryImage})` }}
        >
          <div className='Main-content'>
            <div style={{ padding: 20, transition: '0.3s' }}>
              <Typography weight={'bold'} variant={'h2'} gutterBottom>
                One Small Step
              </Typography>
              
              <br />
              <br />
              <br />
              <Typography weight={'bold'} variant={'h4'} gutterBottom>
                {"Welcome"}
              </Typography>
              <Typography gutterBottom>
                I created this because
                <br />
              </Typography>             
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
