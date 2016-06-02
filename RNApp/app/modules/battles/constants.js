//we are using namespaceing to prevent module's action type collision
//every module should have a unique name. the best practice is to set name
//base on module's name

//name of this modules
export const NAME = 'battles'

//action types
export const ADD_NEW_COUNTER = `${NAME}/NEW`

export const TOGGLE_JOIN = `${NAME}/TOGGLE_JOIN`
export const SELECT = `${NAME}/SELECT`
export const RECEIVE_POSTS = `${NAME}/RECEIVE_POSTS`
export const SET_NEW_BATTLE_TITLE = `${NAME}/SET_NEW_BATTLE_TITLE`



//as you can see above, each action is namespaced with module's name.
