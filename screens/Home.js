import React from 'react';
import { View, Text, StatusBar, ListView, TouchableWithoutFeedback, BackHandler, AppState,
    Image, TouchableOpacity, StyleSheet, Button, ScrollView} from 'react-native';

import { withNavigation } from 'react-navigation';

class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            id: 0,
            username: '',
            index: 0,
            prev: false,
            next: true,
            SectionName: '',
            FieldName: '',
            form: false,
        },
        this.form = null;
        this.index = 0;
        this.sectionID = 0;
        this.fieldID = 0;
        this.sectionList = [];
        this.listField = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    }

    componentDidMount() {
        this.getSurveyForm();
    }

    submitSurvey = () => {

    }

    getSectionList = () => {
        if(this.form !== null) {
            let sectionTemp = '';
            this.form.map(section => {
                if(sectionTemp !== section.SectionID) {
                    this.sectionList.push(section.SectionID);
                    sectionTemp = section.SectionID;
                } else {
                    sectionTemp = section.SectionID;
                }
            });
            //this.sectionList.splice(1, 1);
        }
    }

    getSurveyForm = () => {
        return fetch('http://192.168.43.229/username/username.php')
        .then((response) => response.json())
        .then((responseJson) => {
            if(responseJson) {
                this.form = responseJson;
                this.sectionID = this.form[0].SectionID;
                this.fieldID = this.form[0].FieldID;
                this.index = 0;
                this.setState({id: this.form[0].FieldID, username: this.form[0].SectionName,
                    SectionName: this.form[0].SectionName, form: true});
                this.getSectionList();
            } else {
                this.props.navigation.navigate('HomeScreen');
            }
        }, function() {
            // Do something here...
        }).catch((error) => {
            alert(error);
        });
    }

    previous = () => {
        if(this.index > 0) {
            this.index = this.index - 1;
            this.sectionID = this.sectionList[this.index];
            this.form.map(section => {
                if(this.sectionID === section.SectionID) {
                    this.setState({id: this.sectionID, username: section.SectionName});
                }
            });
            if(this.index === 0) {
                this.setState({prev: false,});
            }
            if(this.index >= 0) {
                this.setState({next: true,});
            }
            this.refs.scrollview.scrollTo({
                x: 0,
                y: 0,
                animated: false,
            });
        }
    }

    next = () => {
        if(this.index < this.sectionList.length - 1) {
            this.index = this.index + 1;
            this.sectionID = this.sectionList[this.index];
            this.form.map(section => {
                if(this.sectionID === section.SectionID) {
                    this.setState({id: this.sectionID, username: section.SectionName});
                }
            });
            if(this.index > 0) {
                this.setState({prev: true,});
            }
            if(this.index === this.sectionList.length - 1) {
                this.setState({next: false, prev: true});
            }
            this.refs.scrollview.scrollTo({
                x: 0,
                y: 0,
                animated: false,
            });
        }
    }

    setResponse = (fieldID) => {
        alert(fieldID);
    }

    render() {
       
        return (
        <View style={{flex: 1}}>
            <Text style={{
                textAlign: 'left',
                fontSize: 23,
                padding: 15,
            }}>College Survey</Text>
            <Text style={{
                textAlign: 'center',
                fontSize: 23,
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                padding: 10,
            }}>{this.state.id === 0 ? '' : this.state.id + '.)   ' + this.state.username}</Text>
            { this.state.form &&
                <ScrollView ref='scrollview' style={{
                    width: '100%',
                    height: '100%',
                    borderWidth: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                }}>
                    {this.form.map(section => 
                        {
                            if(this.state.id === section.SectionID) {
                                return (
                                    <View key={section.FieldID} style={{
                                        width: '100%', 
                                        height: 300, 
                                        padding: 20,
                                        borderWidth: 1,
                                        flexDirection: 'row',
                                        flexWrap: 'wrap',
                                    }}>
                                        <Text style={{
                                            textAlign: 'center',
                                            padding: 10,
                                            fontSize: 16,
                                            width: '100%',
                                            marginBottom: '10%',
                                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                        }}>{section.FieldName}</Text>

                                        <View style={{width: '5%', height: '25%'}}></View>
                                        <View style={{height: '25%', width: '40%',}}>
                                            <Button title="Very Satisfied" onPress={()=>{
                                                this.setResponse(section.FieldID);
                                            }}></Button>
                                        </View>
                                        <View style={{width: '10%', height: '25%'}}></View>
                                        <View style={{height: '25%', width: '40%',}}>
                                            <Button title="Satisfied" onPress={()=>{
                                                this.setResponse(section.FieldID);
                                            }}></Button>
                                        </View>

                                        <View style={{width: '100%', height: '5%'}}></View>

                                        <View style={{width: '5%', height: '25%'}}></View>
                                        <View style={{height: '25%', width: '40%',}}>
                                            <Button title="Dissatisfied" onPress={()=>{
                                                this.setResponse(section.FieldID);
                                            }}></Button>
                                        </View>
                                        <View style={{width: '10%', height: '25%'}}></View>
                                        <View style={{height: '25%', width: '40%',}}>
                                            <Button title="Very Dissatisfied" onPress={()=>{
                                                this.setResponse(section.FieldID);
                                            }}></Button>
                                        </View>
                                    </View>
                                )
                            } else {

                            }
                        }
                    )}
                </ScrollView>
            }

            { this.state.next && 
                <Button title="Next"  style={{
                    width: 200,
                    height: 50,
                }}onPress={this.next}></Button>
            }
            { this.state.prev && 
                <Button title="Previous"  style={{
                    width: 200,
                    height: 50,
                }}onPress={this.previous}></Button>
            }
        </View>
        );
    }
}


const style = StyleSheet.create({
    
});



export default withNavigation(HomeScreen);