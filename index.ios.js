/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var MainView = require('./App/Components/MainView');

var {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
} = React;

class GithubNotetaker extends React.Component {
  render() {
    return (
      <NavigatorIOS
        ref="nav"
        style={styles.container}
        initialRoute={{
          component: MainView,
          title: 'Github Profiler',
        }}
      />
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
});

AppRegistry.registerComponent('GithubNotetaker', () => GithubNotetaker);
