import React, { StyleSheet, View, Text } from 'react-native'
import * as actions from '../modules/battles/actions'

import Button from './ButtonB'
import Effects from './Effects'

import CheckBox from 'react-native-checkbox';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    width: 40,
    textAlign: 'center'
  }
})

const Player = (props) => {
  const { selected,name,toggleJoinFn,selectFn,actions,effects} = props

  // TBD: how do we route from this Component?
  // actions.routes.game();

  return (
    <View style={styles.container}>

      <Text style={styles.label}>{name}</Text>
      <CheckBox label=''
                checked={selected}
                onChange={toggleJoinFn}
      />
      <Effects effects={effects} />

    </View>
  )
}

Player.propTypes = {
  selected: React.PropTypes.bool.isRequired,
  name: React.PropTypes.string.isRequired,
  toggleJoinFn: React.PropTypes.func.isRequired,
  selectFn: React.PropTypes.func.isRequired
}

export default Player
