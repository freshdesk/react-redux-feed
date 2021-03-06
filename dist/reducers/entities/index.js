'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = feedEntitiesReducer;

var _actions = require('../../actions');

var _lodash = require('lodash');

// import { uniqBy } from 'lodash'

function feedEntitiesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  var feedName = action.payload && action.payload.feedName;
  var existingItems = state[feedName] || [];
  switch (action.type) {
    case _actions.SUCCESS_RECEIVE_FEED:
      // console.log(`
      //   Number of available items -> ${existingItems.length}
      //   Number of new items -> ${action.payload.items.length}
      //   Number of unique items -> ${uniqBy(existingItems.concat(action.payload.items), 'id').length}
      // `);
      return (0, _lodash.merge)(state, action.payload.entities);
    default:
      return state;
  }
}