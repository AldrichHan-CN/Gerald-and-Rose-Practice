
import { BrowserRouter as Router, Switch, Route } 
from 'react-router-dom';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Navbar from './components/pages/Navbar';
import Footer from './components/footer/footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
