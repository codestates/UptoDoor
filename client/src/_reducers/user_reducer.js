import { SIGNIN } from '../_actions/type'

const dummy = {
  id : 'sook',
}
export default function ( state = dummy , action) {
  switch(action.type){
    case SIGNIN :
      console.log(state)
      return state
    default : 
    return state;
  }
}