import { combineReducers } from 'redux';
import user from './user_reducer';
import post from './post_reducer';
import comment from './comment_reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfigure = {
  key: 'root',
  storage,
  whitelist: ['user', 'post'],
};

//action 을 redux에 등록
const rootReducer = combineReducers({
  user,
  post,
  comment,
});

export default persistReducer(persistConfigure, rootReducer);
