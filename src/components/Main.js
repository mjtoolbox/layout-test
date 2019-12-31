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
                {"ABOUT US"}
              </Typography>
              <Typography variant={'h6'} gutterBottom>
              We know that learning is easier when you have an excellent teacher. That's why most of our educators have achieved an advanced degree in their field and years of real industry experience. Our instructors are passionate about the subjects they teach and bring this enthusiasm into their seminars and courses. 
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
