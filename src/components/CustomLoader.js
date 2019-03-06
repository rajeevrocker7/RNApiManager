import React, { Component } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View
} from 'react-native';

class CustomLoader extends Component {
  constructor() {
    super();
  }

  render() {
    const { loaderColor, loaderStr, loaderSize, animating } = this.props;
    const { container, loaderStyle, textStyle } = styles;
    return (
      <View style={[container]}>
        <ActivityIndicator
          animating={animating}
          style={loaderStyle}
          size={loaderSize ? loaderSize : 'large'}
          color={loaderColor ? loaderColor : '#1E88E5'} />
        <Text
          style={textStyle}
          numberOfLines={1}
          ellipsizeMode="middle">
          {loaderStr ? loaderStr : 'Loading...'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    flexDirection: "row",
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 7,
    borderWidth: 1,
    padding: 5,
    borderColor: 'gray',
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3
  },
  loaderStyle: {
    width: 45,
    height: 45,
    padding: 5,
    alignSelf: 'center',
    backgroundColor: 'white'
  },
  textStyle: {
    padding: 5,
    fontSize: 16,
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: 'white'
  }
});

export { CustomLoader };


/**
USAGE: TO MAKE IT IN CENTER OF SCREEN
  return (<View style={styles.containerLoaderStyle}>
              <CustomLoader  />
          </View>);

STYLE OF VIEW HAVING CustomLoader:
  containerLoaderStyle: {
       position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
  }

 */