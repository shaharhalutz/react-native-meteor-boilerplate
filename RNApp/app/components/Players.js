import React, { StyleSheet, View } from 'react-native'

import Player from './Player'
import Button from './ButtonB'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Players = (props) => {
  const { children, addFn } = props

  return (
    <View style={styles.container}>
      {children}
      <Button onClick={addFn}>Add New Player</Button>
    </View>
  )
}

Players.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.node).isRequired,
  addFn: React.PropTypes.func.isRequired
}

export default Players
