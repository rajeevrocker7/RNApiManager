
import React, { Component } from 'react';
// Navigators
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
//redux, thunk, react-redux
import { Provider } from 'react-redux';
import AppStore from './redux/AppStore';
//screens
import MainScreen from './screens/Main/View/MainScreen';


class App extends Component {

  constructor(props) {
    super(props);
  }

  //SCREEN
  render() {
    return (
      <Provider store={AppStore}>
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
