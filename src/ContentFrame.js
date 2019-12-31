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
import Main from './components/Main';

// import Main from './components/Main';
import TeacherList from './components/teacher/TeacherList';
import TeacherEdit from './components/teacher/TeacherEdit';
import TeacherCreate from './components/teacher/TeacherCreate';
import TeacherDetail from './components/teacher/TeacherDetail';

import Registration from './components/Registration';
import Programs from './components/Programs';

import GuardianList from './components/guardian/GuardianList';
import GuardianCreate from './components/guardian/GuardianCreate';
import GuardianEdit from './components/guardian/GuardianEdit';
import GuardianDetail from './components/guardian/GuardianDetail';

import StudentList from './components//student/StudentList';
import StudentCreate from './components/student/StudentCreate';
import StudentEdit from './components/student/StudentEdit';
import StudentDetail from './components/student/StudentDetail';

import './styles.css';
import { blue } from '@material-ui/core/colors';

function ContentFrame() {
  const [preset, setPreset] = useState('createStandardLayout');
  const [data, setData] = useState({
    header: true,
    nav: true,
    content: true,
    footer: true
  });

  return (
    <MuiThemeProvider
      theme={createMuiTheme({
        overrides: {
          MuiToolbar: {
            root: {
              fontWeight: 'bold',
              backgroundColor: '#607d8b',
              // margin: '10px'
              // "&:hover": {
              //   backgroundColor: "green"
              // }
            }
          }
        }
      })}
    >
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
            <Route exact path='/' component={Main} />
            <Route exact path='/oss' component={Main} />
            <Route exact path='/oss/main' component={Main} />

            <Route exact path='/oss/programs' component={Programs} />

            <Route exact path='/oss/registration' component={Registration} />

            {/* Teacher */}
            <Route exact path='/oss/teachercreate' component={TeacherCreate} />
            <Route
              exact
              path='/oss/teacheredit/:teacher_id'
              component={TeacherEdit}
            />
            <Route exact path='/oss/teachers' component={TeacherList} />
            <Route exact path='/oss/teacherdetail' component={TeacherDetail} />

            {/* Guardian */}
            <Route
              exact
              path='/oss/guardiancreate'
              component={GuardianCreate}
            />
            <Route
              exact
              path='/oss/guardianedit/:guardian_id'
              component={GuardianEdit}
            />
            <Route exact path='/oss/guardians' component={GuardianList} />
            <Route
              exact
              path='/oss/guardiandetail'
              component={GuardianDetail}
            />

            {/* Student */}
            <Route
              exact
              path='/oss/studentcreate/:guardian_id'
              component={StudentCreate}
            />
            <Route exact path='/oss/students' component={StudentList} />
            <Route exact path='/oss/studentdetail' component={StudentDetail} />
            <Route exact path='/oss/studentedit' component={StudentEdit} />
          </div>
        </Content>
        <Footer>{data.footer && <FooterEx />}</Footer>
      </Root>
    </MuiThemeProvider>
  );
}

export default ContentFrame;
