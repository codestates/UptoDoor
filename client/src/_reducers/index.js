import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import user_reducer from './user_reducer'
import admin_reducer from './admin_reducer'

const persistConfig = {
  key : 'root',
  storage,
}

const rootReducer = combineReducers({
  user_reducer,
  admin_reducer
})

export default persistReducer(persistConfig,rootReducer)