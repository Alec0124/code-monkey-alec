import './App.css';
import { Header, NavMenu, Home, Footer, About, Portfolio } from './Components';
import {
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';

function App() {
    return <>
        <Header />
        <NavMenu />
        <Route path="/about">
          <About />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/home">
        <Home />
        </Route>
        <Route path="/">
          <Redirect to="/home" />
        </Route>
        <Footer />
    </>
  }

export default App;
