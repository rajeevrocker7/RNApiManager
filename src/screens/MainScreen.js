import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-simple-toast';
import ApiSingleton from '../ApiManager/ApiSingleton';
import { CustomLoader } from '../components';
import { connect } from 'react-redux';
import { postRegisterUser, fetchUsersList } from '../redux/actions';

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
    onPostBtnClick = () => {
        Toast.show('POST');
        this.props.postRegisterUser();
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

        const { smallTxt, txts, postTxts, welcome, btns, instructions } = styles;
        const { token, data } = this.props;
        const { data: dataArr } = data;

        console.log(`RENDER: : ->\n\n`);
        console.log(`dataArr: '${JSON.stringify(dataArr)}' `);
        console.log(`token: '${token}' `);


        return (
            <View style={{ flex: 1 }}>
                <Text style={welcome}>Welcome to React Native Parser Test!</Text>
                <Text style={smallTxt}>GET: https://reqres.in/api/users </Text>
                <Text style={smallTxt}>POST: https://reqres.in/api/register </Text>

                <TouchableOpacity style={btns}
                    onPress={this.onGetUsersClick} >
                    <Text style={instructions}>
                        Request a GET API
                     </Text>
                </TouchableOpacity>

                <TouchableOpacity style={btns}
                    onPress={this.onPostBtnClick} >
                    <Text style={instructions}>
                        Request a POST API
                     </Text>
                </TouchableOpacity>

                {this.renderLoader()}

                {
                    (data)
                        ?
                        <Text style={txts}>{JSON.stringify(data)}</Text>
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
        margin: 2,
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
        color: 'black',
        textAlign: 'center',
        alignSelf: 'center',
        margin: 10
    },
    smallTxt: {
        fontSize: 16,
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
        margin: 3
    },
    postTxts: {
        fontSize: 14,
        textAlign: 'center',
        color: '#091f9b',
        padding: 4,
        margin: 3
    },
    instructions: {
        fontSize: 16,
        textAlign: 'center',
        color: '#007FFF',
        padding: 5,
    },
});

//FUNCTION TO CONNECT:
const mapStateToProps = (state) => {
    const {
        data = {},
        token = '',
        isLoadingData = false } = state.test_api_reducer;

    return {
        data: data,
        token: token,
        isLoadingData: isLoadingData
    };
};

export default connect(mapStateToProps,
    {
        postRegisterUser, fetchUsersList
    }
)(MainScreen);
