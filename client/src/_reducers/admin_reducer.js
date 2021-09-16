import ADMIN_POST from '../_actions/post_action'

export default function user_reducer(state = {}, action) {
  // console.log("reducer-action---", action);
  switch (action.type) {
    case ADMIN_POST:
      return {...state, store_img : [...state.store.image,action.payload]};
    default:
      return state;
  }
}