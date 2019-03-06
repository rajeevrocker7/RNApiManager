/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, { Component } from 'react';
// Navigators
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
//redux, thunk, react-redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './redux/reducers';
//screens
import MainScreen from './screens/MainScreen';


class App extends Component {

  constructor(props) {
    super(props);
  }

  //SCREEN
  render() {
    //createStore
    const storeApp = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={storeApp}>
        <AppContainer />
      </Provider>
    );
  }

}

//NAVIGATION STACK : ROOT 
const RootStack = createStackNavigator({
  Main: {
    screen: MainScreen
  },

},
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      header: null
    }
  }
);

// FOR REACT-NAVIGATION 3.0.0+
const AppContainer = createAppContainer(RootStack);

export default App;
