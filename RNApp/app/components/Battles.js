import React from 'react';
import { StyleSheet, View } from 'react-native'

import Battle from './Battle'
import Button from './ButtonB'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Battles = (props) => {
  const { children, addFn } = props

  return (
    <View style={styles.container}>
      {children}
      <Button onClick={addFn}>Add New Battle</Button>
    </View>
  )
}

Battles.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.node).isRequired,
  addFn: React.PropTypes.func.isRequired
}

export default Battles
