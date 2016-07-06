'use strict';

import {combineReducers} from 'redux';

const example = function(state = 0, action) {
  switch (action.type) {
    default:
      return state;
  }
};

const welcome = combineReducers({
  example
});

export default welcome;
