'use strict';

import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import welcome from '../reducers/welcome';

const store = createStore(welcome);

class Welcome extends Component {

  render() {
    return (
      <Provider store={store}>hello</Provider>
    );
  }

}

export default Welcome;
