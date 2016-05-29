//we are using namespaceing to prevent module's action type collision
//every module should have a unique name. the best practice is to set name
//base on module's name

//name of this modules
export const NAME = 'game'

//action types
export const ADD_NEW_COUNTER = `${NAME}/NEW`

export const TOGGLE_JOIN = `${NAME}/TOGGLE_JOIN`
export const SELECT = `${NAME}/SELECT`
export const PLAYER_ADD_EFFECT = `${NAME}/PLAYER_ADD_EFFECT`
//as you can see above, each action is namespaced with module's name.
