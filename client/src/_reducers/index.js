import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import user from './user_reducer'
import cart from './cart_reducer'
import admin from './admin_reducer'


const persistConfig = {
  key : 'root',
  storage,
}

const rootReducer = combineReducers({
  user,
  cart,
  admin
});

export default persistReducer(persistConfig, rootReducer)