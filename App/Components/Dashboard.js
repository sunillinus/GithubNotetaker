var React = require('react-native');
var Profile = require('./Profile');
var Repositories = require('./Repositories');
var remoteApi = require('../Utils/remoteApi');

var {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
} = React;

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

class Dashboard extends React.Component {
  getBtnStyle(btn) {
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    }

    switch (btn) {
      case 'profile':
        obj.backgroundColor = '#48BBEC';
        break;
      case 'repos':
        obj.backgroundColor = '#E77AAE';
        break;
      case 'notes':
        obj.backgroundColor = '#758BF4';
        break;
      default:
        break;
    }

    return obj;
  }

  goToProfile() {
    console.log('goToProfile');
    this.props.navigator.push({
      component: Profile,
      title: 'Profile Page',
      passProps: {userInfo: this.props.userInfo}
    });
  }

  goToRepos() {
    console.log('goToRepos');
    remoteApi.getRepos(this.props.username).then((res) => {
      this.props.navigator.push({
        component: Repositories,
        title: 'Public Repos',
        passProps: {userInfo: this.props.userInfo, repos: res}
      });
    });
  }

  goToNotes() {
    console.log('goToNotes');
  }

  render() {
    return (
        <View style={styles.container}>
          <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image} />
          <TouchableHighlight
            style={this.getBtnStyle('profile')}
            onPress={this.goToProfile.bind(this)}
            underlayColor="#88D4F5">
            <Text style={styles.buttonText}>View Profile</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={this.getBtnStyle('repos')}
            onPress={this.goToRepos.bind(this)}
            underlayColor="#88D4F5">
            <Text style={styles.buttonText}>View Repos</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={this.getBtnStyle('notes')}
            onPress={this.goToNotes.bind(this)}
            underlayColor="#88D4F5">
            <Text style={styles.buttonText}>View Notes</Text>
          </TouchableHighlight>
        </View>
      )
    }
}

module.exports = Dashboard;
