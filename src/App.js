import React, { useState } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Root, Header, Nav, Content, Footer, presets } from 'mui-layout';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Icon from '@material-ui/core/Icon';

import NavContentEx from './components/NavContentEx';
import NavHeaderEx from './components/NavHeaderEx';
import HeaderEx from './components/HeaderEx';
import ContentEx from './components/ContentEx';
import FooterEx from './components/FooterEx';

import Main from './components/Main';
import Teacher from './components/Teachers';

import './styles.css';
import TeacherEdit from './components/TeacherEdit';
import TeacherCreate from './components/TeacherCreate';

function App() {
  const [preset, setPreset] = useState('createStandardLayout');
  const [data, setData] = useState({
    header: true,
    nav: true,
    content: true,
    footer: true
  });
  const [index, setIndex] = useState(6);

  function RenderContent(index) {
    switch (index) {
      case 0:
        return <Main />;
      case 6:
        return <Teacher />;
      default:
        return <ContentEx />;
    }
  }

  const callback = index => {
    setIndex(index);
  };

  return (
    <MuiThemeProvider theme={createMuiTheme()}>
      <Root
        config={presets[preset]({ headerPosition: 'relative' })}
        style={{ minHeight: '100vh' }}
      >
        <CssBaseline />
        <Header
          renderMenuIcon={opened =>
            opened ? <Icon>chevron_left</Icon> : <Icon>menu_rounded</Icon>
          }
        >
          {({ screen, collapsed }) =>
            data.header && <HeaderEx screen={screen} collapsed={collapsed} />
          }
        </Header>
        <Nav
          renderIcon={collapsed =>
            collapsed ? <Icon>chevron_right</Icon> : <Icon>chevron_left</Icon>
          }
          header={({ collapsed }) =>
            data.nav && <NavHeaderEx collapsed={collapsed} />
          }
        >
          {data.nav && <NavContentEx parentCallBack={callback} />}
        </Nav>
        <Content>
          {RenderContent(index)}
          <Route exact path='/create' component={<TeacherCreate />} />
          <Route path='/edit/:teacher_id' component={<TeacherEdit />} />
          <Route path='/teachers' component={<Teacher />} />
        </Content>
        <Footer>{data.footer && <FooterEx />}</Footer>
      </Root>
    </MuiThemeProvider>
  );
}

export default App;
