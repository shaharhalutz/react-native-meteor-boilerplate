import React, { StyleSheet, View } from 'react-native'

import Effect from './Effect'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Effects = (props) => {
  const { effects } = props

  const renderEffects = function(effects){
    return Object.keys(effects).map((id) => {
      const effect1 = effects[id];
      console.dir(effect1)

      // TBD: why not working ?
      return (
        <Effect effect = {effect1} >
        </Effect>
      )
    })
  }

  console.dir(effects)
  return (
    <View style={styles.container}>
      {renderEffects(effects)}
    </View>
  )
}

Effects.propTypes = {
  effects: React.PropTypes.object.isRequired
}

export default Effects
