import React from 'react';
import { View, Text, StatusBar, ListView, TouchableOpacity, BackHandler, AppState,
    Image, Modal, ActivityIndicator, StyleSheet, Button, ScrollView} from 'react-native';

import { withNavigation } from 'react-navigation';
import { styles } from './css/StudentFormCSS';

import VerySatisfied from './images/emojis/very-satisfied.png';
import Satisfied from './images/emojis/gray-satisfied.png';
import Dissatisfied from './images/emojis/gray-dissatisfied.png';
import VeryDissatisfied from './images/emojis/gray-very-dissatisfied.png';
import Information from './images/emojis/question.png';

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
            submit: false,
            loading: true,
            keys: [],
        },
        this.form = null;
        this.index = 0;
        this.sectionID = 0;
        this.fieldID = 0;
        this.sectionList = [];
        this.section = 65;
    }

    componentDidMount() {
        this.getSurveyForm();
        //alert(String.fromCharCode(65));
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
                    SectionName: this.form[0].SectionName, form: true, loading: false});
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
                this.setState({next: true, submit: false,});
            }
            this.section = this.section - 1;
            this.scrollToTop();
        }
    }

    scrollToTop = () => {
        this.refs.scrollview.scrollTo({
            x: 0,
            y: 0,
            animated: false,
        });
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
                this.setState({next: false, prev: true, submit: true});
            }
            this.section = this.section + 1;
            this.scrollToTop();
        }
    }

    setResponse = (fieldID) => {
        alert(fieldID);
    }

    render() {
        let num = 0;
        let tempKeys = [];
        let StudentSurveyForm = this.form !== null ? this.form.map(section => 
            {
                if(this.state.id === section.SectionID) {
                    num = num + 1;
                    return (
                        <View key={section.FieldID} style={{
                            width: '100%',
                            marginTop: 20,
                            marginBottom: 20,
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                        }}>
                            <View style={{
                                width: '100%',
                                marginBottom: 20,
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                                borderRadius: 5,
                            }}>
                                <Text style={{
                                    width: '15%',
                                    fontSize: 17,
                                    padding: 10,
                                    color: '#168F93',
                                }}>
                                    {num + "."}
                                </Text>
                                <Text style={{
                                    textAlign: 'left',
                                    padding: 10,
                                    paddingLeft: 0,
                                    fontSize: 17,
                                    width: '85%',
                                    color: '#168F93',
                                }}>{ section.FieldName + '.'}</Text>
                            </View>

                            <View style={{
                                width: '100%',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                marginBottom: 25,
                            }}>
                                <View style={{width: '2.5%', height: '100%'}}></View>
                                <TouchableOpacity style={{height: '150%', width: '20%', }}>
                                    <Image style={{
                                        width: 50,
                                        height: 50,
                                    }} source={VerySatisfied}></Image>
                                </TouchableOpacity>
                                <View style={{width: '5%', height: '100%'}}></View>
                                <TouchableOpacity style={{height: '150%', width: '20%', }}>
                                    <Image style={{
                                        width: 50,
                                        height: 50,
                                    }} source={Satisfied}></Image>
                                </TouchableOpacity>

                                <View style={{width: '5%', height: '100%'}}></View>
                                <TouchableOpacity style={{height: '150%', width: '20%', }}>
                                    <Image style={{
                                        width: 50,
                                        height: 50,
                                    }} source={Dissatisfied}></Image>
                                </TouchableOpacity>
                                <View style={{width: '5%', height: '100%'}}></View>
                                <TouchableOpacity style={{height: '150%', width: '20%', }}>
                                    <Image style={{
                                        width: 50,
                                        height: 50,
                                    }} source={VeryDissatisfied}></Image>
                                </TouchableOpacity>
                                
                            </View>
                            <View style={{
                                position: 'absolute',
                                bottom: -20,
                                left: '-50%',
                                width: '200%',
                                height: 1,
                                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                            }}></View>
                        </View>
                    )
                } else {

                }
            }
        ): '';
        return (
        <View style={{flex: 1}}>
            <View style={[styles.HeaderSurveyContainer]}>
                <Text style={{
                    textAlign: 'left',
                    fontSize: 20,
                    color: '#FFFFFF',
                }}>Student's Satisfaction Survey</Text>
            </View>

            {/* Loading Survey Form */}
            { this.state.loading && 
                <View style={[styles.ActivityIndicatorContainer]}>
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', }}>
                        <ActivityIndicator size={50} color='#800000'/>
                    </View>
                    <Text>Loading survey form...</Text>
                </View>
            }

            {/* Loaded Survey Form */}
            { this.state.form &&
                <View style={{flex: 1}}>
                    
                    {/* Survey Sections, Label */}
                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    }}>
                        <Text style={[styles.SurveySection, { width: '15%', paddingRight: 0, }]}>
                            {this.state.id === 0 ? '' : String.fromCharCode(this.section) + '.'}
                        </Text>
                        <Text style={[styles.SurveySection, { width: '85%', paddingLeft: 0,}]}>
                            {this.state.id === 0 ? '' : this.state.username}
                        </Text>
                    </View>
                    
                    
                    {/* Section Fields, ScrollView Container */}
                    <ScrollView ref='scrollview' style={[styles.FormFieldScrollContainer]}>
                        {/* Fields of each Section, Survey Form */}
                        { StudentSurveyForm }
                        

                        {/* Navigation buttons, next, prev and submit survey */}
                        <View style={[styles.NavButtonContainer]}>
                            { this.state.prev && 
                                <View style={[styles.NavButton]}>
                                    <Button title="Previous" onPress={this.previous}></Button>
                                </View>
                            }

                            <View style={[styles.NavButton]}>
                            </View>

                            { this.state.next && 
                                <View style={[styles.NavButton]}>
                                    <Button title="Next" onPress={this.next}></Button>
                                </View>
                            }

                            { this.state.submit && 
                                <View style={[styles.NavButton]}>
                                    <Button title="Submit"></Button>
                                </View>
                            }
                        </View>
                    </ScrollView>
                </View>
            }

        </View>
        );
    }
}

export default withNavigation(HomeScreen);