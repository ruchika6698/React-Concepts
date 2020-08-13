import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Observable} from './Component/Observable';
import { Context} from './Component/ContextData';
import { Ref} from './Component/ref';
import { Application} from './Component/HOC/Application';
import { App} from './App'

class Routes extends Component {
  render() {
    return (
      <div>
      <Router>
      
      <Route exact path="/" component={Context} />
      <Route path="/higherOrderComponent" component={Application} />
      <Route path="/observable" component={Observable} />
      <Route path="/errorboundary" component={App} />
      <Route path="/ref" component={Ref} />
      
      </Router>
      </div>
    );
  }
}
export default Routes;