var React = require('react-native');

var {
  View,
  Text,
  StyleSheet
} = React;

class MainView extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>TESTING TESTING</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC',
  },
});

module.exports = MainView;
