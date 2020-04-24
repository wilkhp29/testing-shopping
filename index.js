/**
 * @format
 */
require('react-native').unstable_enableLogBox();
import 'react-native-gesture-handler';
import MIcons from 'react-native-vector-icons/MaterialIcons';
MIcons.loadFont();
import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
