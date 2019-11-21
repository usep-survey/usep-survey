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

    sexSelection = (sexInput) => {
        this.setState({sex: sexInput});
    }

    render() {
        
        return (
            <View style={style.container}>
                <View style={style.header}>
                    <Text style={style.headerTitle}>Student's Satisfaction Survey Form</Text>
                </View>

                <View style={style.body}>
                    <Text style={style.label}>College:</Text>
                    <Picker
                        selectedValue={this.state.college}
                            onValueChange={(college, courseIndex) => {
                                this.setState({college: college});
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
                    <Text style={style.label}>Course / Program:</Text>
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
                        <View style={{flexDirection: 'row', alignItems: 'center', borderWidth: 0.5}}>
                            <Text>Year Level:</Text>
                            <TextInput maxLength={1} keyboardType={'numeric'} style={style.numericInput} onChangeText={(input) => this.setState({yearlevel: input})}/>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text>Sex:</Text>
                            <View style={{flexDirection: 'row', paddingLeft: 5}}>
                                <TouchableOpacity style={style.sexInput} onPress={()=> this.sexSelection('male')}><Text>Male</Text></TouchableOpacity>
                                <TouchableOpacity style={style.sexInput} onPress={()=> this.sexSelection('female')}><Text>Female</Text></TouchableOpacity>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', borderWidth: 0.5}}>
                            <Text>Age:</Text>
                            <TextInput maxLength={2} keyboardType={'numeric'} style={[style.numericInput, {width: 27}]} onChangeText={(input) => this.setState({age: input})}/>
                        </View>
                    </View>
                    {/* <View style={{flexDirection: 'column', justifyContent: 'space-around'}}>
                        <Text style={style.label}>Year Level:</Text>
                        <TextInput maxLength={1} keyboardType={'numeric'}/>
                        <Text style={style.label}>Gender:</Text>
                            <View style={{flexDirection: 'row', paddingLeft: 5}}>
                                <TouchableOpacity style={style.sexInput} onPress={()=> this.sexSelection('male')}><Text>Male</Text></TouchableOpacity>
                                <TouchableOpacity style={style.sexInput} onPress={()=> this.sexSelection('female')}><Text>Female</Text></TouchableOpacity>
                            </View>
                        <Text style={style.label}>Age:</Text>
                        <TextInput maxLength={2} keyboardType={'numeric'}/>
                    </View> */}
                </View>

                <View style={style.button}>
                    <Button title="PROCEED"
                        onPress={() => Alert.alert(this.state.college + this.state.course + this.state.yearlevel + this.state.sex + this.state.age)}
                        />
                </View>
            </View>
        );
    }
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    header: {
        backgroundColor: '#800000',
        height: 60,
    },
    headerTitle: {
        color: 'white', 
        textAlign: 'center', 
        fontSize: 22, 
        paddingTop: 15
    },
    body: {
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 0.5,
        padding: 10,
        borderRadius: 2,
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
        bottom: 0,
        flex: 1,
        justifyContent: 'flex-end',
    },
    numericInput: {
        // borderWidth: 0.5,
        height: 40, 
        width: 20, 
        marginLeft: 5,
    },
    sexInput: {
        marginRight: 5,
        borderWidth: 0.5,
    }
    
});



export default withNavigation(StudentFormScreen);