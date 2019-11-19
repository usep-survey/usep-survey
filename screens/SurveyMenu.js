import React from 'react';
import { View, Text, StatusBar, ListView, TouchableWithoutFeedback, BackHandler, AppState,
    Image, TouchableOpacity, StyleSheet, Button, ScrollView} from 'react-native';

import { withNavigation } from 'react-navigation';
import Setting from './Setting-icon.png';
class SurveyScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    }
    constructor(props) {
        super(props);
        this.state = {
            
        }
        
    }

    componentDidMount() {
    }

    gotoCollegeSurvey = () => {
        this.props.navigation.navigate('Home');
    }

    render() {
        
        return (
        <View style={{flex: 1}}>
            <Button title="College Survey" onPress={this.gotoCollegeSurvey}></Button>
        </View>
        );
    }
}


const style = StyleSheet.create({
    
});



export default withNavigation(SurveyScreen);