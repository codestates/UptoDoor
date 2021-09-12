import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import user_reducer from './user_reducer'


const persistConfig = {
  key : 'root',
  storage,
}

const rootReducer = combineReducers({
  user_reducer,

})

export default persistReducer(persistConfig,rootReducer)