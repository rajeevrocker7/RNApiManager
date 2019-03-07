import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-simple-toast';
import ApiSingleton from '../apiManager/ApiSingleton';
import { CustomLoader, Header } from '../components';
import { connect } from 'react-redux';
import { postRegisterUser, fetchUsersList, fetchSingleUser } from '../redux/actions';

class MainScreen extends Component {

    constructor(props) {
        super(props);
    }

    //METHOD: HELPER
    onGetUsersClick = () => {
        Toast.show('GET');
        this.props.fetchUsersList();
    };

    //METHOD: HELPER
    onSingleUserClick = () => {
        Toast.show('GET USER INFO');
        this.props.fetchSingleUser(3);
    };

    //METHOD: HELPER
    onPostBtnClick = () => {
        Toast.show('POST');
        let data_obj = {
            "email": "rajeev@algoworks.com",
            "password": "pistol_101"
        };
        this.props.postRegisterUser(data_obj);
    };


    renderLoader = () => {
        const { isLoadingData = false } = this.props;
        if (isLoadingData) {
            return (
                <View style={styles.containerLoaderStyle}>
                    <CustomLoader />
                </View>);
        }
    };

    //SCREEN
    render() {

        const { smallTxt, txts, userInfoTxt, postTxts, welcome, btns, getBtn, getUserBtn, postBtn } = styles;
        const { token, data, userData } = this.props;
        const { data: dataArr } = data;
        const { data: userObj } = userData;

        console.log(`RENDER: : ->\n\n`);
        console.log(`dataArr: '${JSON.stringify(dataArr)}' `);
        console.log(`userObj: '${JSON.stringify(userObj)}' `);
        console.log(`token: '${token}' `);


        return (
            <View style={{ flex: 1 }}>
                <Header headerText={"RNApiManager"}></Header>
                <Text style={welcome}>Welcome to React Native API Manager!</Text>
                <Text style={smallTxt}>GET: https://reqres.in/api/users </Text>
                <Text style={smallTxt}>GET USER INFO: https://reqres.in/api/users/3 </Text>
                <Text style={smallTxt}>POST: https://reqres.in/api/register </Text>

                <TouchableOpacity style={btns}
                    onPress={this.onGetUsersClick} >
                    <Text style={getBtn}>
                        Request a GET API
                     </Text>
                </TouchableOpacity>

                <TouchableOpacity style={btns}
                    onPress={this.onSingleUserClick} >
                    <Text style={getUserBtn}>
                        Request a GET API for User Info
                     </Text>
                </TouchableOpacity>

                <TouchableOpacity style={btns}
                    onPress={this.onPostBtnClick} >
                    <Text style={postBtn}>
                        Request a POST API
                     </Text>
                </TouchableOpacity>

                {
                    (data)
                        ?
                        <Text style={txts}>{JSON.stringify(data)}</Text>
                        :
                        <Text></Text>
                }
                {
                    (userData)
                        ?
                        <Text style={userInfoTxt}>{JSON.stringify(userData)}</Text>
                        :
                        <Text></Text>
                }
                {
                    (token)
                        ?
                        <Text style={postTxts}>Generated Token: {token.toString()}</Text>
                        :
                        <Text></Text>
                }

                {this.renderLoader()}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    containerLoaderStyle: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btns: {
        width: '60%',
        padding: 5,
        margin: 3,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 12,
        borderColor: '#007FFF',
        borderWidth: 1,
    },
    welcome: {
        fontSize: 20,
        color: '#091f9b',
        textAlign: 'center',
        alignSelf: 'center',
        textDecorationLine: 'underline',
        margin: 10
    },
    smallTxt: {
        fontSize: 15,
        color: 'black',
        textAlign: 'center',
        alignSelf: 'center',
        margin: 3
    },
    txts: {
        fontSize: 14,
        textAlign: 'center',
        color: '#026628',
        padding: 4,
        margin: 5
    },
    userInfoTxt: {
        fontSize: 14,
        textAlign: 'center',
        color: '#d6045b',
        padding: 4,
        margin: 5
    },
    postTxts: {
        fontSize: 14,
        textAlign: 'center',
        color: '#091f9b',
        padding: 4,
        margin: 5
    },
    getBtn: {
        fontSize: 16,
        textAlign: 'center',
        color: '#026628',
        padding: 5,
    },
    getUserBtn: {
        fontSize: 16,
        textAlign: 'center',
        color: '#d6045b',
        padding: 5,
    },
    postBtn: {
        fontSize: 16,
        textAlign: 'center',
        color: '#091f9b',
        padding: 5,
    },
});

//FUNCTION TO CONNECT:
const mapStateToProps = (state) => {
    const {
        data = {},
        userData = userInfo,
        token = '' } = state.test_api_reducer;

    const {
        error = '',
        isLoadingData = false } = state.api_reducer;

    // if (error === 'ERR-Something went wrong!') {
    //     userData = { error }
    // }

    return {
        data: data,
        userData: userData,
        token: token,

        error: error,
        isLoadingData: isLoadingData,

    };
};

export default connect(mapStateToProps,
    {
        postRegisterUser, fetchUsersList, fetchSingleUser
    }
)(MainScreen);
