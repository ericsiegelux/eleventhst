import React from 'react';
import './App.css';
import LandingPage from './components/landingpage';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';





class App extends React.Component{
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header" style={{backgroundColor:"#DBE9EE",boxShadow:"none"}}>
          {/* <img src='' alt="logo" /> */}
          <div className="mdl-layout__header-row" style={{height:"70px"}}>
            <div className="mdl-layout-spacer" />
            <Link to="/">
              <img id="logo" src="./logo.svg" alt="logo" />
            </Link>
            <div className="mdl-layout-spacer" />
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                  mdl-textfield--floating-label mdl-textfield--align-right">
                {/* <nav className="mdl-navigation"> */}
                {/*   <a className="mdl-navigation__link" href="/projects">Projects</a> */}
                {/*   <a className="mdl-navigation__link" href="/about">About</a> */}
                {/* </nav> */}
            </div>
          </div>

        </header>

        {/* <div className="mdl-layout__drawer"> */}
        {/*   <span className="mdl-layout-title">Title</span> */}
        {/*   <nav className="mdl-navigation"> */}
        {/*     <a className="mdl-navigation__link" href="/projects">Projects</a> */}
        {/*     <a className="mdl-navigation__link" href="/about">About</a> */}
        {/*   </nav> */}
        {/* </div> */}
        <main className="mdl-layout__content">
          <div className="page-content">
            <div className="page-content" />
               <Main/>
            </div>
        </main>
      </div>

             
        


    );
  }
}

export default App;



