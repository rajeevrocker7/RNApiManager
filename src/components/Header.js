//1. import libs for making a component
import React from 'react';
import { Text, View, Platform } from 'react-native';

//2. make a component
const Header = (nameProps = 'A') => {
  // De-structuring of styles{} object
  const { textStyle, viewStyle } = styles;

  /* 
    Header function component takes a headerText as 'prop' from Parent component
    using headerText as 'prop' , so that we can use Header component anywhere and 
    pass dynamic Text to it as is basic property
    */
  //  return some JSX
  return (
    <View style={viewStyle}>
      <Text style={textStyle}> {nameProps.headerText} </Text>
    </View>
  );
};

//styling
const styles = {
  //1. view/ container or viewgroup
  viewStyle: {
    // backgroundColor: '#F8F8F8', //#C7FFF8
    justifyContent: 'center', // move child in vertical
    alignItems: 'center', // move child in horizontal direction
    // marginTop: 32,
    // height: 56,
    //padding: 15,
    height: Platform.OS === 'android' ? 56 : 100,
    marginTop: Platform.OS === 'ios' ? 0 : 0,
    ...Platform.select({
      ios: { backgroundColor: '#F8F8F8', paddingTop: 24 },
      android: { backgroundColor: '#F8F8F8' }
    }),

    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  //2. inside content i.e Text here
  textStyle: {
    fontSize: 22,
    color: '#000'
  }
};

//3. Make this component available to other parts of app
//export default Header;

export { Header };
// or export { Header: Header };

// For perfect Header in Both ios and android:
// https://medium.com/maestral-solutions/react-native-platform-specific-code-e217db5778f
