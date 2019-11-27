import React from 'react';
import { View, Alert, Text, StatusBar, ListView, TouchableWithoutFeedback, BackHandler, AppState, TouchableOpacity,
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
            course: 'BSIT',
            yearlevel: '',
            college: 'CE',
            sex: 'Male',
            age: '',
        }
        
    }

    componentDidMount() {
    }

    setCourse = (course) => {
        this.setState({course: course});
    }

    setYear = (year) => {
        this.setState({year: year});
    }

    setCollege = (college) => {
        this.setState({college: college});
    }

    setSex = (sex) => {
        this.setState({sex: sex});
    }

    setAge = (age) => {
        this.setState({age: age});
    }

    proceedSurvey = () => {
        if(this.state.age !== '') {
            this.props.navigation.navigate('Home');
        }
    }

    render() {
        
        return (
            <View style={style.container}>
                <View style={style.header}>
                    <Text style={style.headerTitle}>Student's Information Form</Text>
                </View>

                <View style={style.formContainer}>
                    <Text style={style.label}>College:</Text>
                    <View style={style.borderField}>
                        <Picker
                            style={style.pickerStyle}
                            selectedValue={this.state.college}
                                onValueChange={(college, courseIndex) => {
                                    this.setCollege(college);
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
                    </View>
                    <Text style={style.label}>Course/Program:</Text>
                    { this.state.college === 'CIC' && 
                        <View style={style.borderField}>
                            <Picker
                                style={style.pickerStyle}
                                selectedValue={this.state.course}
                                    onValueChange={(course, courseIndex) => {
                                        this.setCourse(course);
                                    }}
                                >
                                    <Picker.Item label="BS in Information Technology" value="BSIT"/>
                                    <Picker.Item label="BS in Computer Science" value="BSCS"/>
                                    <Picker.Item label="BS in Information Technology" value="BSIT"/>
                            </Picker>
                        </View>
                    }

                    { this.state.college === 'CE' && 
                        <View style={style.borderField}>
                            <Picker
                                style={style.pickerStyle}
                                selectedValue={this.state.course}
                                    onValueChange={(course, courseIndex) => {
                                        this.setCourse(course);
                                    }}
                                >
                                    {/* For College of Information and Computing */}
                                    <Picker.Item label="BS in Civil Engineering" value="BSCE"/>
                                    <Picker.Item label="BS in Electrical Engineering" value="BSEE"/>
                                    <Picker.Item label="BS in Geodetic Engineering" value="BSGE"/>
                            </Picker>
                        </View>
                    }
                    <Text style={style.label}>Sex:</Text>
                    <View style={style.borderField}>
                        <Picker
                            style={style.pickerStyle}
                            selectedValue={this.state.sex}
                                onValueChange={(sex, sexIndex) => {
                                    this.setSex(sex);
                                }}
                            >
                                {/* For College of Information and Computing */}
                                <Picker.Item label="Male" value="Male"/>
                                <Picker.Item label="Female" value="Female"/>
                        </Picker>
                    </View>
                    <Text style={style.label}>Year Level:</Text>
                    <View style={style.borderField}>
                        <Picker
                            style={style.pickerStyle}
                            selectedValue={this.state.year}
                                onValueChange={(year, yearIndex) => {
                                    this.setYear(year);
                                }}
                            >
                                <Picker.Item label="1st year" value="1st"/>
                                <Picker.Item label="2nd year" value="2nd"/>
                                <Picker.Item label="3rd year" value="3rd"/>
                                <Picker.Item label="4th year" value="4th"/>
                                <Picker.Item label="5th year" value="5th"/>
                                <Picker.Item label="6th year" value="6th"/>
                                <Picker.Item label="7th year" value="7th"/>
                        </Picker>
                    </View>
                    
                    <Text style={style.label}>Age:</Text>
                    <TextInput maxLength={2} keyboardType={'numeric'} 
                        style={[style.numericInput, style.pickerStyle]} 
                        onChangeText={(age) => {
                            this.setAge(age);
                        }}/>
                </View>

                <View style={style.button}>
                    <Button title="PROCEED"
                        color='#168F93'
                        onPress={this.proceedSurvey}
                        />
                </View>
            </View>
        );
    }
}


const style = StyleSheet.create({
    pickerStyle: {
        color: '#168F93',
    },
    formContainer: {
        width: '100%',
        padding: '5%',
    },
    borderField: {
        width: '100%',
        borderBottomWidth: 1,
        marginBottom: '10%',
        borderColor: 'rgba(0, 0, 0, 0.3)',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    header: {
        backgroundColor: '#800000',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: '4%',
        paddingBottom: '4%',
    },
    headerTitle: {
        color: 'white',
        textAlign: 'left', 
        fontSize: 20, 
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    numericInput: {
        marginLeft: 5,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.3)',
    },
});



export default withNavigation(StudentFormScreen);