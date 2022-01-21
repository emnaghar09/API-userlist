import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBAr'
import Home from './pages/Home';
import UserList from './components/Lists'
import Footer from './components/footer';
import Error from './pages/Error';
import About from './pages/about';

function App() {
  
  return (
    <div className="App">

      <Router>
        <NavBar />
        <div>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Profile" component={UserList} />
        <Route path="/About" component={About} />
        <Route path="/Error"  component={Error} />
        </Switch>
        </div>

      </Router>
      <Footer/>
    </div>
  );
}

export default App;
