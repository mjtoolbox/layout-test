import React, { useState } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Root, Header, Nav, Content, Footer, presets } from 'mui-layout';

// import {NavContentEx as Default} from './components/NavContentEx';
import Teacher from './components/Teachers'
import NavHeaderEx from './components/NavHeaderEx';
import HeaderEx from './components/HeaderEx';
import Main from './components/ContentEx';
import FooterEx from './components/FooterEx';

import './styles.css';

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

function App() {
  const [preset, setPreset] = useState('createStandardLayout');
  const [data, setData] = useState({
    header: true,
    nav: true,
    content: true,
    footer: true
  });
  const [index, setIndex] = useState(0);

function RenderContent(index){
  switch(index){
    case 0:
      return <Main/>;
    case 6:
      return <Teacher/>;
  }
}

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
          {data.nav && (
             <List>
             {list.map(({ primaryText, icon, linkUrl }, i) => (
               <ListItem
                 key={primaryText}
                 selected={i === index}
                 button
                 link={linkUrl}
                 onClick={()=> setIndex(i)}
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
          )}
        </Nav>
        <Content>{RenderContent(index)}</Content>
        <Footer>{data.footer && <FooterEx />}</Footer>
      </Root>
    </MuiThemeProvider>
  );
}

export default App;
