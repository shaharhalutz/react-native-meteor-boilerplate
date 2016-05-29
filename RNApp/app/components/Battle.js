import React, { StyleSheet, View, Text } from 'react-native'
import * as actions from '../modules/battles/actions'

import Button from './ButtonB'
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

const Battle = (props) => {
  const { joined,title,toggleJoinFn,selectFn,actions} = props

  // TBD: how do we route from this Component?
  // actions.routes.game();

  return (
    <View style={styles.container}>

      <Text style={styles.label}>{title}</Text>
      <CheckBox label=''
                checked={joined}
                onChange={toggleJoinFn}
      />
      <Button onClick={selectFn}>Select Battle</Button>

    </View>
  )
}

Battle.propTypes = {
  joined: React.PropTypes.bool.isRequired,
  title: React.PropTypes.string.isRequired,
  toggleJoinFn: React.PropTypes.func.isRequired,
  selectFn: React.PropTypes.func.isRequired
}

export default Battle
