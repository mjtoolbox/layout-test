import React, { useState } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Root, Header, Nav, Content, Footer, presets } from 'mui-layout';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import Icon from '@material-ui/core/Icon';

import NavContentEx from './components/NavContentEx';
import NavHeaderEx from './components/NavHeaderEx';
import HeaderEx from './components/HeaderEx';
// import ContentEx from './components/ContentEx';
import FooterEx from './components/FooterEx';

// import Main from './components/Main';
import TeacherList from './components/teacher/TeacherList';
import TeacherEdit from './components/teacher/TeacherEdit';
import TeacherCreate from './components/teacher/TeacherCreate';
import TeacherDetail from './components/teacher/TeacherDetail';

import Registration from './components/Registration';

import GuardianList from './components/guardian/GuardianList';
import GuardianCreate from './components/guardian/GuardianCreate';
import GuardianEdit from './components/guardian/GuardianEdit';
import GuardianDetail from './components/guardian/GuardianDetail';


import './styles.css';

import Login from './components/Login';

function ContentFrame() {
  const [preset, setPreset] = useState('createStandardLayout');
  const [data, setData] = useState({
    header: true,
    nav: true,
    content: true,
    footer: true
  });
  // const [index, setIndex] = useState(6);

  // function RenderContent(index) {
  //   switch (index) {
  //     case 0:
  //       return <Main />;
  //     case 6:
  //       return <TeacherList />;
  //     default:
  //       return <ContentEx />;
  //   }
  // }

  // const callback = index => {
  //   setIndex(index);
  // };

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
          {/* {data.nav && <NavContentEx parentCallBack={callback} />} */}
          {data.nav && <NavContentEx />}
        </Nav>
        <Content>
          {/* {RenderContent(index)} */}
          <div className='mt-3 mb-3 ml-2 mr-2'>
            {/* Nagivation */}
            <Route path='/oss/registration' component={Registration} />

            {/* Teacher */}
            <Route exact path='/oss/teachercreate' component={TeacherCreate} />
            <Route
              path='/oss/teacheredit/:teacher_id'
              component={TeacherEdit}
            />
            <Route path='/oss/teachers' component={TeacherList} />
            <Route path='/oss/teacherdetail' component={TeacherDetail} />

            {/* Guardian */}
            <Route path='/oss/guardiancreate' component={GuardianCreate} />
            <Route
              path='/oss/guardianedit/:guardian_id'
              component={GuardianEdit}
            />
            <Route path='/oss/guardians' component={GuardianList} />
            <Route path='/oss/guardiandetail' component={GuardianDetail} />

          </div>
        </Content>
        <Footer>{data.footer && <FooterEx />}</Footer>
      </Root>
    </MuiThemeProvider>
  );
}

export default ContentFrame;
