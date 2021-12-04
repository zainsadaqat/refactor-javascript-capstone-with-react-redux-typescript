import { GetPicsum, GET_PICSUM } from '../actions/LoremPicsumActionTypes';

export interface ResponseI {
  id?: string;
  author?: string;
  width?: number;
  height?: number;
  url?: string;
  download_url?: string;
}

export interface InitialStateI {
  loremPicsum?: ResponseI[];
}

const initialState: InitialStateI = { loremPicsum: [] };

const LoremPicsumReducer = (
  state: InitialStateI = initialState,
  action: GetPicsum
): InitialStateI => {
  switch (action.type) {
    case GET_PICSUM:
      return { ...state, loremPicsum: action.payload };
    default:
      return state;
  }
};

export default LoremPicsumReducer;
