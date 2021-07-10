import React from 'react';
import './App.css';
import Home from './pages/';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/home';
import About from './pages/about';
import GiveAWays from './pages/giveaways';
import TwitchLive from './pages/twitchlive';
import YoutubeLive from './pages/youtubelive';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import LoginForm2 from './pages/LoginForm';
import SignIn from './pages/signin';
import Services from './pages/services';
import AdminPanel from './pages/Admin-Dashboard/index';
import MyAccount from './pages/myaccount';
import ContactForm from './pages/contactform';
import ProtectedRoutes from './components/Navbar/ProtectedRoutes';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Switch>
      <Route path='/' exact component={Home} />
        <ProtectedRoutes path='/Dashboard/home' component={Dashboard} />
        <Route path='/about' component={About} />
        <Route path='/give-a-ways' component={GiveAWays} />
        <Route path='/twitch-live' component={TwitchLive} />
        <Route path='/youtube-live' component={YoutubeLive} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/login' component={LoginForm2} />
        <Route path='/services' component={Services} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/Admin-Dashboard/home' component={AdminPanel} />
        <Route path='/my-account' component={MyAccount} />
        <Route path='/contact-form' component={ContactForm} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
