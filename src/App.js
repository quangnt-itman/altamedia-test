// import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// import { Navbar } from './components/Navbar';
import { routesHome } from './routes';
import HomeTemplate from './templates/HomeTemplate';




function App ( props ) {
  // console.log( props );

  const showHome = ( routes ) => {
    if ( routes && routes.length > 0 ) {
      return routes.map( ( item, index ) => ( <HomeTemplate key={ index } exact={ item.exact } path={ item.path } Component={ item.component } /> ) );
    }
  };

  // console.log( showHome( routesHome ) );


  return (

    <BrowserRouter>
      {/* <Navbar /> */ }
      <Switch>
        { showHome( routesHome ) }
        {/* <Route path="/" exact={ true } component={ HomePage } />
        <Route path="/contact" component={ ContactPage } />
        <Route path="/about" component={ AboutPage } /> */}
      </Switch>
    </BrowserRouter>

  );
}

export default App;
