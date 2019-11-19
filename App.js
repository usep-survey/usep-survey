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

const AppNavigator = createStackNavigator( {
  Home: {
      screen: HomeScreen,
  },
  Survey: {
    screen: SurveyScreen,
  },
}, 
  {
      initialRouteName: 'Survey',
  }
);

export default createAppContainer(AppNavigator);