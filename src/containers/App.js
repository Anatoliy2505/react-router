import React, { Component } from 'react';
import {Router, Link} from '../components/Router'
import Admin from '../components/Admin'
import Genre from '../components/Genre'
import Home from '../components/Home'
import '../App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      route: window.location.hash.substr(1)
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      // this.setState({
      //   route: window.location.hash.substr(1)
      // })
    })
  }

  render() {
    // let Child

    // switch (this.state.route) {
    //   case '/admin': Child = Admin; break;
    //   case '/genre': Child = Genre; break;
    //   default: Child = Home;
    // }
    let urls = ['guest.json', 'user.json'];
    let results = [];

    let promise = new Promise((resolve, reject) => {
      urls.map(url => {
        return results.push(url);
      })
      resolve(results)
    });

    promise.then(results => console.log(results));

    return (
      <div className='container'>
        <h1>App</h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/admin'>Admin</Link></li>
          <li><Link to='/genre'>Genre</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
        {/* <Child /> */}
        <hr></hr>

        <Router exact path='/' component={ Home }/>
        <Router path='/admin' component={ Admin }/>
        <Router path='/genre' component={ Genre }/>
        <Router path='/about' render={() => <p>Это функция</p>}/>
      </div>
    )
  }
}

export default App;
