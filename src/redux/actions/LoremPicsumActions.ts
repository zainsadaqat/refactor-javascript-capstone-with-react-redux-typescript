import axios from 'axios';
import { Dispatch } from 'redux';
import { GET_IMAGES_LIST } from '../../EndPoints';
import { GetPicsum, GET_PICSUM } from './LoremPicsumActionTypes';

export const GetPicsumAction = () => async (dispatch: Dispatch<GetPicsum>) => {
  try {
    const response = await axios.get(GET_IMAGES_LIST);
    dispatch({ type: GET_PICSUM, payload: response.data });
  } catch (error) {
    console.error('Error while dispatching in GetPicsumAction', error);
  }
};
