import { Dimensions, Platform, AsyncStorage } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';


const myWidth = Dimensions.get('window').width;
const myHeight = Dimensions.get('window').height;
const isPlatformIOS = (Platform.OS == 'ios');
const isPlatformANDROID = (Platform.OS == 'android');
const width = num => myWidth * handleSize(num);
const height = num => myHeight * handleSize(num);
const isiPhoneX = isPlatformIOS && myHeight > 800;
const totalSize = num => Math.sqrt((myHeight * myHeight) + (myWidth * myWidth)) * handleSize(num);
const handleSize = (num) => {
    if (num <= 0) return 0;
    if (num > 100) return 1;

    return num / 100;
};

const standardWidth = 375.0;
const standardHeight = 667.0;

export function widthScale(dimension) {
    return (dimension / standardWidth) * myWidth;
}

export function heightScale(dimension) {
    return (dimension / standardHeight) * myHeight;
}

export {
    width, height, isiPhoneX, totalSize, isPlatformIOS, isPlatformANDROID, myWidth, myHeight
};

export var dismissKeyboard = require('dismissKeyboard');

export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PHONE_REGEX = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;

// export function parsePickerDate(date) {
//      return Moment(date).format("DD MMMM, YYYY");
// }


//METHOD: ASYNCSTORAGE HELPER
/**
It is a method used to store any type of item in JSON string format.
This method is must be used with 'retrieveObjectItem()' method to get value stored with this method.
@param key: must be const String type
@param item: must be any type (boolean, long, custom object)
*/
export const storeObjectItem = async (key, item) => {
    try {
        //we want to wait for the Promise returned by AsyncStorage.setItem()
        //to be resolved to the actual value before returning the value
        console.log('(key, item): ', key, item);
        var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
        return jsonOfItem;
    } catch (error) {
        console.log('storeObjectItem ERR: ', error.message);
    }
};

//METHOD: ASYNCSTORAGE HELPER
/**
It is a method used to get any type of item in real format.
This method is must be used with 'storeObjectItem()' method to store item in string format.
@param key: must be const String type
*/
export const retrieveObjectItem = async (key) => {
    try {
        var jsonObj = await AsyncStorage.getItem(key);
        return JSON.parse(jsonObj);
    } catch (error) {
        console.log('retrieveObjectItem ERR: ', error.message);
    }

};


//METHOD: ASYNCSTORAGE HELPER
export const storeItem = async (key, item) => {
    try {
        //we want to wait for the Promise returned by AsyncStorage.setItem()
        //to be resolved to the actual value before returning the value
        var storedItem = await AsyncStorage.setItem(key, item);
        return storedItem;
    } catch (error) {
        console.log('storeItem ERR: ', error.message);
    }
};

//METHOD: ASYNCSTORAGE HELPER
export const retrieveItem = async (key) => {
    try {
        var foundItem = await AsyncStorage.getItem(key);
        return foundItem;
    } catch (error) {
        console.log('retrieveItem ERR: ', error.message);
    }
};

// // TO RESET TO ANOTHER STACK
// export const resetRoute = (stackName, paramFromW ) => {
//     this.props
//         .navigation
//         .dispatch(StackActions.reset({
//             index: 0,
//             key: null,   //this is Important
//             actions: [
//                 NavigationActions.navigate({
//                     routeName: stackName,
//                     params: { fromWhere: paramFromW }
//                 })
//             ]
//         }));
// };

