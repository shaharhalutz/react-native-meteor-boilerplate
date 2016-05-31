import React from 'react';
import { StyleSheet, View ,Text} from 'react-native'
import { connect } from 'react-redux'

import { Battles, Battle } from './../../components'
import * as actions from './actions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'black',
  },
})

const renderCounters = (battles,toggleJoin,select,onPressed) => {
  return Object.keys(battles).map((id) => {
    const battle = battles[id];

    // TBD: why routing doesnt work ?
    const onBattleSelected = function(id){
      console.log('onBattleSelected')
      onPressed();
      select(id);
    }

    return (
      <Battle
        key={id}
        toggleJoinFn={() => toggleJoin(id)}
        selectFn={() => onBattleSelected(id)}
        joined={battle.joined}
        title={battle.title}
        actions = {actions} >
      </Battle>
    )
  })
}

const BattlesMod = (props) => {
  const {
    actions,
    addNewCounter,
    battles,
    toggleJoin,
    select
  } = props

  return (
    <View style={styles.container}>
      <Battles addFn={addNewCounter}>
        {renderCounters(battles,toggleJoin,select,props.onDetailsPress)}
      </Battles>
      <Text style={styles.text} onPress={props.onDetailsPress}>Start Game</Text>

    </View>
  )
}

BattlesMod.displayName = 'BattlesMod'

//it is a good practice to always indicate what type of props does your component
//receive. This is really good for documenting and prevent you from a lot of bug during
//development mode. Remember, all of these will be ignored once you set it to production.
BattlesMod.propTypes = {
  addNewCounter: React.PropTypes.func.isRequired,
  battles: React.PropTypes.object.isRequired,
  toggleJoin: React.PropTypes.func.isRequired,
  select: React.PropTypes.func.isRequired,
  onDetailsPress: React.PropTypes.func.isRequired
}

//Here's the most complex part of our app. connect is a function which selects,
//which part of our state tree you need to pass to your component. also, since
//my App component is pure function, i am injecting addNewCounter, increment and
//decrement functions wrapped with dispatch. I think this is the best and cleanest
//way to seperate your connect and your pure function.
export default connect(
  (state) => ({
    battles: state.battles.battles
  }),
  (dispatch) => ({
    addNewCounter: () => dispatch(actions.newCounter()),
    toggleJoin: (id) => dispatch(actions.toggleJoin(id)),
    select: (id) => dispatch(actions.select(id))
  })
)(BattlesMod)
