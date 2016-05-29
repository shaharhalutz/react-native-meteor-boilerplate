'use strict';

import React, { Component, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import {app} from '../modules';

const Home = (backgroundColor = '#F5FCFF') => class extends Component {
  render() {
    const { actions, assets } = this.props;

    return (
      <View style={[styles.container, { backgroundColor }]}>
        <Text style={styles.text} onPress={actions.routes.detail()}>Push detail view</Text>

        <app.App/>
      </View>
    );
  }
}

export default Home

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});
