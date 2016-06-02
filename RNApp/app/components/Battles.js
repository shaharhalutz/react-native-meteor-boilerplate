import React from 'react';
import { StyleSheet, View } from 'react-native'

import Battle from './Battle'
import Button from './ButtonB'
import GenericTextInput, { InputWrapper } from './GenericTextInput';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Battles = (props) => {
  const { children, addFn ,titleChangedFn,newBattleTitle} = props

  return (
    <View style={styles.container}>
      {children}
      <InputWrapper>
        <GenericTextInput
          placeholder="new battle title"
          onChangeText={(title) => titleChangedFn( title )}
          value = {newBattleTitle}
        />
        <Button onClick={addFn}>Add New Battle</Button>
      </InputWrapper>
    </View>
  )
}

Battles.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.node).isRequired,
  addFn: React.PropTypes.func.isRequired,
  titleChangedFn: React.PropTypes.func.isRequired
}

export default Battles
