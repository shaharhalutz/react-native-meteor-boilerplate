import React, { StyleSheet, View,Text } from 'react-native'


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Effect = (props) => {
  const { effect } = props
  console.dir(effect)


  return (
    <Text>
        {effect.name}
    </Text>
  )

}

Effect.propTypes = {
  effect: React.PropTypes.object.isRequired
}

export default Effect
