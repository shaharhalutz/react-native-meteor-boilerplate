import { handleActions } from 'redux-actions'
import { ADD_NEW_COUNTER ,TOGGLE_JOIN,SELECT,PLAYER_ADD_EFFECT} from './constants'

const initialState = {
  idGen: 0,
  effectIdGen:0,
  players: { },
  selectedPlayersIds:[],
  selectedBattle:null
}

//you can do better here, I was just showing that you need to make a new copy
//of state. It is ok to deep copy of state. It will prevent unseen bugs in the future
//for better performance you can use immutableJS

//handleActions is a helper function to instead of using a switch case statement,
//we just use the regular map with function state attach to it.

export default handleActions({
  [ADD_NEW_COUNTER]: (state, action) => {
    console.log('inside ADD_NEW_COUNTER');
    const { idGen,selectedBattle } = state
    const newId = idGen + 1

    //this reducer basically generate a new id for new counter and
    //assign value 0 to that id.

    return {
      ...state,
      idGen: newId,
      players: {
        ...state.players,
        [newId]: {
                    name:(''+newId),
                    selected:false,
                    effects:{}
                  }
      }
    }
  },
  [TOGGLE_JOIN]: (state, action) => {
    const { payload: { id } } = action

    let newSelectedPlayerIds;
    if(!state.players[id].selected){
      newSelectedPlayerIds = [...state.selectedPlayersIds,id];
    }
    else{
      //state.selectedPlayersIds
      //newSelectedPlayerIds = [...state.selectedPlayersIds,id];
      newSelectedPlayerIds = state.selectedPlayersIds.filter(function(i) {
	       return i != id;
      });
    }
    //because payload contains the id and we already know that we are about
    //to increment the value of that id, we modify only that value by one

    return {
      ...state,
      selectedPlayersIds: newSelectedPlayerIds,
      players: {
        ...state.players,
        [id]: {...state.players[id]  , selected: !state.players[id].selected}
      }
    }
  },
  [SELECT]: (state, action) => {
    const { payload: { id } } = action

    //because payload contains the id and we already know that we are about
    //to increment the value of that id, we modify only that value by one

    return {
      ...state,
      selectedBattle: id
    }
  },
  [PLAYER_ADD_EFFECT]: (state, action) => {
    const { effectIdGen,players,selectedPlayersIds } = state;
    const { payload: { spellId,potency } } = action;
    const newEffectId = effectIdGen + 1

    const processSpell = function(spellId,potency){
      // create spell effect instances:
      return {
        id:newEffectId,
        name:'Mana Regeneration',
        duration:1
      }
    }

    // TBD: get targets:
    let playersToOveride = {};
    for (let playerId of selectedPlayersIds) {
      const newEffect = Object.assign({},processSpell(spellId,potency));
      const oldPlayer = players[playerId];
      playersToOveride[playerId] = Object.assign({},oldPlayer,{effects: {...oldPlayer.effects,[newEffectId]:newEffect} });//   newEffectsArray})
    }

    return {
      ...state,
      effectIdGen:newEffectId,
      players: {
        ...state.players,
        ...playersToOveride
      }
    }
  },
}, initialState)
