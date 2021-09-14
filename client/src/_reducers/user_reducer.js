import { 
  SIGNUP,
  SIGNUPSUCCESS,
  SIGNUPFAILURE,
  SIGNIN 
} from '../_actions/type'

export default function user_reducer( state = {} , action) {
  switch(action.type){
    case SIGNUP :
      console.log('reducer : ',state)
      return {...state, signUp : action.payload}
    case SIGNUPSUCCESS :
      return {...state, signUp : action.payload}
    case SIGNUPFAILURE :
      return {...state, signUp : action.payload}

    case SIGNIN :
      console.log(state)
      return state

    default : 
    return state;
  }
}
