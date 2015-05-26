var React = require('react-native');
var remoteApi = require('../Utils/remoteApi');

var {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
} = React;

class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: false
    };
  }

  handleChange(event) {
    this.setState({username: event.nativeEvent.text.toLowerCase().trim()});
  }

  handleSubmit() {
    var user = this.state.username;
    // update spinner
    this.setState({isLoading: true});
    console.log('SUBMIT', this.state.username);

    remoteApi.getBio(this.state.username).then(function(res) {
      if (res.message === 'Not Found') {
        console.log('ERROR', `User: ${user} Not Found`);
        this.setState({
          error: 'User Not Found',
          isLoading: false,
        });
      } else {
        console.log('SUCCESS', res);
        this.props.navigator.push({
          title: res.name || 'Select an Option',
          component: Dashboard,
          passProps: {userInfo: res}
        });
        this.setState({
          error: false,
          isLoading: false,
          username: ''
        });
      }
    });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Search for a Github User</Text>
        <TextInput style={styles.searchInput} value={this.state.username} onChange={this.handleChange.bind(this)} />
        <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)} underlayColor="white">
          <Text style={styles.buttonText}> SEARCH </Text>
        </TouchableHighlight>
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
    backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});
module.exports = MainView;
