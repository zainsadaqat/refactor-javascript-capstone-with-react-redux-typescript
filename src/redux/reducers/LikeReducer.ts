import { FetchLikesI, FETCH_LIKES } from '../actions/LikeActionTypes';

export interface LikesI {
  item_id: string;
  likes: number;
}

export interface LikeStateI {
  likes?: LikesI[];
}

const initialState: LikeStateI = { likes: [] };

const LikeReducer = (
  state: LikeStateI = initialState,
  action: FetchLikesI
): LikeStateI => {
  switch (action.type) {
    case FETCH_LIKES:
      return { ...state, likes: action.payload };
    default:
      return state;
  }
};

export default LikeReducer;
