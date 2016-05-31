// TBD: pass selected players to add effect action to dispatch with correct player id
// TBD: fix issue with effect gen Id, so all effects have correct and unique ids.


import React from 'react';
import { StyleSheet, View ,Text} from 'react-native'
import { connect } from 'react-redux'

import { Players, Player } from './../../components'

import WandContainer from './containers/wand'

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

const renderCounters = (players,toggleJoin,select,actions) => {
  return Object.keys(players).map((id) => {
    const player = players[id];

    return (
      <Player
        key={id}
        toggleJoinFn={() => toggleJoin(id)}
        selectFn={() => select(id)}
        selected={player.selected}
        name={player.name}
        actions = {actions}
        effects = {player.effects}>
      </Player>
    )
  })
}

const Game = (props) => {
  const {
    actions,
    addNewCounter,
    players,
    toggleJoin,
    select
  } = props

  return (
    <View style={styles.container}>
      <Players addFn={addNewCounter}>
        {renderCounters(players,toggleJoin,select,actions)}
      </Players>
      <WandContainer onSpellSelected = {() => console.log('container spell selected!!')} ></WandContainer>
    </View>
  )
}

Game.displayName = 'Game'

//it is a good practice to always indicate what type of props does your component
//receive. This is really good for documenting and prevent you from a lot of bug during
//development mode. Remember, all of these will be ignored once you set it to production.
Game.propTypes = {
  addNewCounter: React.PropTypes.func.isRequired,
  players: React.PropTypes.object.isRequired,
  toggleJoin: React.PropTypes.func.isRequired,
  select: React.PropTypes.func.isRequired
}

//Here's the most complex part of our app. connect is a function which selects,
//which part of our state tree you need to pass to your component. also, since
//my App component is pure function, i am injecting addNewCounter, increment and
//decrement functions wrapped with dispatch. I think this is the best and cleanest
//way to seperate your connect and your pure function.
export default connect(
  (state) => ({
    players: state.game.players
  }),
  (dispatch) => ({
    addNewCounter: () => dispatch(actions.newCounter()),
    toggleJoin: (id) => dispatch(actions.toggleJoin(id)),
    select: (id) => dispatch(actions.select(id))
  })
)(Game)
