import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import Toast from 'react-native-simple-toast';
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

    onTestModelsData = () => {

        const { userListModel, userModel, userRegisterModel, apiModel } = this.props;
        try {
            console.log(`userListModel: *****************: `);
            console.log(userListModel);

            console.log(`userModel: *****************: `);
            console.log(userModel);

            console.log(`userRegisterModel: *****************: `);
            console.log(userRegisterModel);

        } catch (error) {
            console.warn(error);
        }
    };


    renderLoader = () => {
        const { apiModel } = this.props;
        if (apiModel.API_IS_LOADING) {
            return (
                <View style={styles.containerLoaderStyle}>
                    <CustomLoader />
                </View>);
        }
    };

    //SCREEN
    render() {

        const { smallTxt, txts, userInfoTxt, postTxts, welcome, btns, getBtn, getUserBtn, postBtn, testMBtn } = styles;
        const { userListModel, userModel, userRegisterModel, apiModel } = this.props;

        const { data: dataArr } = userListModel;
        const { data: userObj } = userModel;
        const { token } = userRegisterModel;
        const { API_IS_LOADING } = apiModel;

        console.log(`RENDER: *****************: : ->\n\n`);
        console.log(`dataArr: '${JSON.stringify(dataArr)}' `);
        console.log(`userObj: '${JSON.stringify(userObj)}' `);
        console.log(`token: '${token}' `);
        console.log(`API_IS_LOADING: '${API_IS_LOADING}' `);


        return (
            <ScrollView showsVerticalScrollIndicator={false}>
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
                        (dataArr)
                            ?
                            <Text style={txts}>{JSON.stringify(dataArr)}</Text>
                            :
                            <Text></Text>
                    }
                    {
                        (userObj)
                            ?
                            <Text style={userInfoTxt}>{JSON.stringify(userObj)}</Text>
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

                    <TouchableOpacity style={btns}
                        onPress={this.onTestModelsData} >
                        <Text style={testMBtn}>
                            Test Data with Models (See Logs)
                     </Text>
                    </TouchableOpacity>

                    {this.renderLoader()}

                </View>
            </ScrollView>
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
    testMBtn: {
        fontSize: 16,
        textAlign: 'center',
        color: '#090d0b',
        padding: 5,
    },
});

//FUNCTION TO CONNECT:
const mapStateToProps = (state) => {
    // from API DATA REDUCERS
    const {
        userListModel,
        userModel,
        userRegisterModel
    } = state.test_api_reducer;
    // from API REDUCERS
    const { apiModel } = state.api_reducer;

    return {
        userListModel: userListModel,
        userModel: userModel,
        userRegisterModel: userRegisterModel,

        apiModel: apiModel
    };
};

export default connect(mapStateToProps,
    {
        postRegisterUser, fetchUsersList, fetchSingleUser
    }
)(MainScreen);
