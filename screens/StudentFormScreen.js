import React from 'react';
import { View, Text, StatusBar, ListView, TouchableWithoutFeedback, BackHandler, AppState,
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
        <View style={{flex: 1}}>

            {/* College Form Container */}
            <View style={[ styles.FormContainer, ]}>

                {/* Dropdown Input College Container */}
                <View style={[ styles.TextInputContainer, ]}>

                    {/* Dropdown College List */}
                    <Text style={[styles.FormLabel,]}>College: </Text>
                    <Picker
                        itemTextStyle={{ fontSize: 15 }}
                        style={[ styles.DropdownInput, ]}
                        selectedValue={this.state.college}
                        onValueChange={(college, collegeIndex) => {
                            this.setState({college: college});
                        }}
                    >
                        <Picker.Item label="CIC" value="CIC"/>
                        <Picker.Item label="CAS" value="CAS"/>
                        <Picker.Item label="CED" value="CED"/>
                        <Picker.Item label="CEC" value="CEC"/>
                        <Picker.Item label="CT" value="CT"/>
                        <Picker.Item label="CBA" value="CBA"/>
                    </Picker>
                </View>

                {/* Dropdown Input Course Container */}
                <View style={[ styles.TextInputContainer, ]}>

                    {/* Dropdown Course List */}
                    <Picker 
                        style={[ styles.DropdownInput, ]}
                        selectedValue={this.state.course}
                        onValueChange={(course, courseIndex) => {
                            this.setState({course: course});
                        }}
                    >
                        <Picker.Item label="CIC" value="CIC"/>
                        <Picker.Item label="CAS" value="CAS"/>
                        <Picker.Item label="CED" value="CED"/>
                        <Picker.Item label="CEC" value="CEC"/>
                        <Picker.Item label="CT" value="CT"/>
                        <Picker.Item label="CBA" value="CBA"/>
                    </Picker>
                </View>
                
            </View>
        </View>
        );
    }
}


const style = StyleSheet.create({
    
});



export default withNavigation(StudentFormScreen);