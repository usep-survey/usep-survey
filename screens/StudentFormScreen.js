import React from 'react';
import { View, Alert, Text, StatusBar, ListView, TouchableWithoutFeedback, BackHandler, AppState,
    Image, TextInput, StyleSheet, Button, Picker} from 'react-native';

import { styles } from './css/StudentFormCSS';

import { withNavigation } from 'react-navigation';
import Setting from './Setting-icon.png';

class StudentFormScreen extends React.Component {
    static navigationOptions = {
        header: null,
    }
    constructor(props) {
        super(props);
        this.state = {
            course: 'Course',
            yearlevel: '',
            college: 'College',
            sex: '',
            age: '',
        }
        
    }

    componentDidMount() {
    }

    gotoCollegeSurvey = () => {
        this.props.navigation.navigate('Home');
    }

    render() {
        
        return (
            <View style={style.container}>
                <View style={style.header}>
                    <Text style={{color: 'white', textAlign: 'center', fontSize: 22, paddingTop: 15}}>Student's Satisfaction Survey Form</Text>
                </View>

                <View style={style.body}>
                    <Text>College:</Text>
                    <Picker
                        selectedValue={this.state.course}
                            onValueChange={(course, courseIndex) => {
                                this.setState({course: course});
                            }}
                        >
                            <Picker.Item label="College of Engineering" value="CE"/>
                            <Picker.Item label="College of Arts and Sciences" value="CAS"/>
                            <Picker.Item label="College of Education" value="CED"/>
                            <Picker.Item label="College of Information and Computing" value="CIC"/>
                            <Picker.Item label="College of Technology" value="CT"/>
                            <Picker.Item label="College of Governance and Business" value="CGB"/>
                            <Picker.Item label="School of Applied Economics" value="SAEC"/>
                    </Picker>
                    <Text>Course / Program:</Text>
                    <Picker
                        selectedValue={this.state.course}
                            onValueChange={(course, courseIndex) => {
                                this.setState({course: course});
                            }}
                        >
                            <Picker.Item label="BS Information Technology" value="BSIT"/>
                            <Picker.Item label="BS Civil Engineering" value="BSCE"/>
                    </Picker>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10,}}>
                        <View style={{flexDirection: 'row'}}>
                            <Text>Year Level:</Text>
                            <Text>0</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text>Sex:</Text>
                            <Text>0</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text>Age:</Text>
                            <Text>0</Text>
                        </View>
                    </View>
                </View>

                <View style={style.button}>
                    <Button title="PROCEED"
                        onPress={() => Alert.alert('Test')}
                        />
                </View>
            </View>
        );
    }
}


const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#800000',
        height: 60,
    },
    body: {
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
    },
    button: {
        bottom: 0,
        flex: 1,
        justifyContent: 'flex-end',
    }
    
});



export default withNavigation(StudentFormScreen);