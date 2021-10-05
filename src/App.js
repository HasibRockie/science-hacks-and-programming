import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import SocialMedia from './Components/SocialMedia/SocialMedia';
import Services from './Components/Services/Services';
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
            {console.log("home")}
          </Route>
          <Route path='/Home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/socialmedia'>
            <SocialMedia></SocialMedia>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route>
            <NotFound> </NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
