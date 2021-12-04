import { LikesI } from '../reducers/LikeReducer';

export const FETCH_LIKES = 'FETCH_LIKES';

export interface FetchLikesI {
  type: typeof FETCH_LIKES;
  payload: LikesI[];
}
