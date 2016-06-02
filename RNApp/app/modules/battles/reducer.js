import { handleActions } from 'redux-actions'
import { ADD_NEW_COUNTER ,TOGGLE_JOIN,SELECT,RECEIVE_POSTS,SET_NEW_BATTLE_TITLE} from './constants'

const initialState = {
  idGen: 0,
  battles: { },
  selectedBattle:null,
  newBattleTitle:''
}

//you can do better here, I was just showing that you need to make a new copy
//of state. It is ok to deep copy of state. It will prevent unseen bugs in the future
//for better performance you can use immutableJS

//handleActions is a helper function to instead of using a switch case statement,
//we just use the regular map with function state attach to it.

export default handleActions({

  [SET_NEW_BATTLE_TITLE]: (state, action) => {
    const { payload: { title } } = action

    //because payload contains the id and we already know that we are about
    //to increment the value of that id, we modify only that value by one

    return {
      ...state,
      newBattleTitle: title
    }
  },
  [ADD_NEW_COUNTER]: (state, action) => {
    console.log('inside ADD_NEW_COUNTER');
    const { idGen,selectedBattle } = state
    const { payload: { id } } = action
    const newId = idGen + 1

    //this reducer basically generate a new id for new counter and
    //assign value 0 to that id.

    return {
      idGen: newId,
      selectedBattle:selectedBattle,
      newBattleTitle:'',
      battles: {
        ...state.battles,
        [id]: {
                    title:state.newBattleTitle,
                    joined:false
                  }
      }
    }
  },
  [TOGGLE_JOIN]: (state, action) => {
    const { payload: { id } } = action

    //because payload contains the id and we already know that we are about
    //to increment the value of that id, we modify only that value by one

    return {
      ...state,
      battles: {
        ...state.battles,
        [id]: {title:state.battles[id].title  , joined: !state.battles[id].joined}
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
  [RECEIVE_POSTS]: (state, action) => {
    const { posts} = action;
    console.log('posts.len:'+posts.length);

    let battles = {};
    var doubles = posts.map(function(battle) {
      battles[battle._id] = battle;
    });

    //because payload contains the id and we already know that we are about
    //to increment the value of that id, we modify only that value by one

    return {
      ...state,
      battles: {

        ...battles
      }
    }
  },

}, initialState)
