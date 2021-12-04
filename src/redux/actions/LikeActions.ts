import axios from 'axios';
import { Dispatch } from 'redux';
import { LIKES } from '../../EndPoints';
import { FetchLikesI, FETCH_LIKES } from './LikeActionTypes';

export const LikeAction = () => async (dispatch: Dispatch<FetchLikesI>) => {
  try {
    const response = await axios.get(LIKES);
    dispatch({ type: FETCH_LIKES, payload: response.data });
  } catch (error) {
    console.error('Error while dispatching LikeAction');
  }
};
