/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createAppContainer } from 'react-navigation';
import { createStackNavigator,  } from 'react-navigation-stack';

import HomeScreen from './screens/Home';
import SurveyScreen from './screens/SurveyMenu';
import StudentFormScreen from './screens/StudentFormScreen';

const AppNavigator = createStackNavigator( {
  Home: {
      screen: HomeScreen,
  },
  Survey: {
    screen: SurveyScreen,
  },
  StudentForm: {
    screen: StudentFormScreen,
  },
}, 
  {
      initialRouteName: 'StudentForm',
  }
);

export default createAppContainer(AppNavigator);