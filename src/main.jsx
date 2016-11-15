import * as redux from 'redux'
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { main } from './redux/reducers'
import * as actions from './redux/actions'
import {Provider, connect} from 'react-redux';
import App from './ReactComponents/App'

let store = redux.createStore(main)

store.dispatch.bind(store)
global.store = store
const Controller = connect(
  (state) => { return {...state} },
  (main) => { return {actions: redux.bindActionCreators(actions, main)} }
)(App)

ReactDOM.render(
  <Provider store={store}><Controller /></Provider>,
  document.getElementById('app')
);
