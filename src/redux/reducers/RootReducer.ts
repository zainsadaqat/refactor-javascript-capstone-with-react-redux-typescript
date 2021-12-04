import { combineReducers } from 'redux';
import LoremPicsumReducer from './LoremPicsumReducer';
import LikeReducer from './LikeReducer';

const RootReducer = combineReducers({
  lorempicsum: LoremPicsumReducer,
  like: LikeReducer,
});

export default RootReducer;
