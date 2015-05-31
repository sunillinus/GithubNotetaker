var React = require('react-native');
var Badge = require('./Badge');
var Separator = require('./Separator');

var {
  View,
  Text,
  StyleSheet,
  ScrollView
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  rowContainer: {
    padding: 10
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16
  },
  rowContent: {
    fontSize: 19
  }
});

class Profile extends React.Component {
  titlize(s) {
    var a = s.split('_').map((w) => w[0].toUpperCase() + w.slice(1));
    return a.join(' ');
  }
  render() {
    var userInfo = this.props.userInfo;
    var profileFields = ['company', 'location', 'followers', 'following', 'email', 'bio','public_repos',];
    var list = profileFields.map((item, index) => {
      console.log(item, ': ', userInfo[item]);
      if (!userInfo[item]) {
        return <View key={index} />
      } else {
        return(
          <View key={index}>
            <View style={styles.rowContainer}>
              <Text style={styles.rowTitle}>{this.titlize(item)}</Text>
              <Text style={styles.rowContent}>{userInfo[item]}</Text>
            </View>
            <Separator />
          </View>
        );
      }
    });

    return(
        <ScrollView style={styles.container}>
          <Badge userInfo={this.props.userInfo} />
          {list}
        </ScrollView>
      );
  }
}

module.exports = Profile;
