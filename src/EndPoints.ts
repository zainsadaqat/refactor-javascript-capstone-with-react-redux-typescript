const APP_ID = 'PmGqiCAY4CG3PZPHNcEG';

export const INVOLVEMENT_API = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}`;

export const POST_LIKE = `${INVOLVEMENT_API}/likes`; // item_id is required
export const GET_LIKES = `${INVOLVEMENT_API}/likes`;

export const POST_COMMENTS = `${INVOLVEMENT_API}/comments`; // item_id, username, comment is required
export const GET_COMMENTS = `${INVOLVEMENT_API}/comments`;

export const GET_IMAGES_LIST = 'https://picsum.photos/v2/list';
