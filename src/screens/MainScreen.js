import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-simple-toast';
import ApiSingleton from '../ApiManager/ApiSingleton';
import { CustomLoader } from '../components';
import { connect } from 'react-redux';
import { testMoviesApiAction } from '../redux/actions';

class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        };
    }

    //METHOD: HELPER
    onGetBtnClick = () => {
        let apiIns = ApiSingleton.getInstance();

        console.log(`BEFORE: this.props.test_api_reducer: ->\n\n `);
        console.log(this.props.test_api_reducer);

        this.setState({ isLoading: true });

        apiIns.getMoviesFromApi()
            .then(responseJson => {
                console.log('IN LOGIN: responseJson: ->\n', responseJson);

                //dispatch action   
                this.props.testMoviesApiAction(responseJson);

                console.log(`AFTER: this.props.test_api_reducer: ->\n\n `);
                console.log(this.props.test_api_reducer);

                this.setState({ isLoading: false });
            })
            .catch(err => {
                this.setState({ isLoading: false });
                console.log(err);
            });
    };

    //METHOD: HELPER
    onPostBtnClick = () => {

        Toast.show('POST.');
    };


    renderLoader = () => {
        if (this.state.isLoading) {
            return (
                <View style={styles.containerLoaderStyle}>
                    <CustomLoader />
                </View>);
        }
    };

    //SCREEN
    render() {

        const { txts, welcome, btns, instructions } = styles;
        const { test_api_reducer } = this.props;
        const { response } = test_api_reducer;
        const { title, movies } = response;

        console.log(`RENDER: : ->\n\n`);
        console.log(title);

        return (
            <View style={{ flex: 1 }}>
                <Text style={welcome}>Welcome to React Native Parser Test!</Text>
                <TouchableOpacity style={btns}
                    onPress={this.onGetBtnClick} >
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
                    title
                        ?
                        <Text style={txts}>{title.toString()}</Text>
                        :
                        <Text></Text>
                }
                {
                    movies
                        ?
                        <Text style={txts}>{JSON.stringify(movies)}</Text>
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
        padding: 5,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        alignSelf: 'center',
        margin: 10
    },
    txts: {
        fontSize: 14,
        textAlign: 'center',
        color: '#000000',
        padding: 4,
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
    return {
        test_api_reducer: state.test_api_reducer
    };
};

export default connect(mapStateToProps, { testMoviesApiAction })(MainScreen);
