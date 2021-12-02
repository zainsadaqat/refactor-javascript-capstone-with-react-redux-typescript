import { FC, useState } from 'react';
import axios from 'axios';
import { GET_IMAGES_LIST } from './EndPoints';
import { LIKES } from './EndPoints';

interface IResponse {
  id?: string;
  author?: string;
  width?: number;
  height?: number;
  url?: string;
  download_url?: string;
}

interface IFetchLikes {
  item_id: string;
  likes: number;
}

const App: FC = () => {
  const [apiResponse, setApiResponse] = useState<IResponse[]>([]);
  const [likes, setLikes] = useState<{ item_id: string; likes: number }[]>([]);

  const handleResponse = async (): Promise<void> => {
    const response = await axios.get<IResponse[]>(GET_IMAGES_LIST);
    const data1 = await response.data;
    setApiResponse(data1);
  };

  const fetchLikes = async (): Promise<IFetchLikes[]> => {
    const response = await axios.get<IFetchLikes[]>(LIKES);
    return response.data;
  };

  const getLikes = (): void => {
    fetch(LIKES)
      .then((res) => res.json())
      .then((data) => setLikes(data));
  };

  const handleLikes = (item_id: string | undefined): void => {
    axios.post<{ item_id: string }>(LIKES, { item_id });
  };

  return (
    <div className="App">
      <button type="button" onClick={handleResponse}>
        Click Me to Get Data
      </button>
      <section>
        <ol>
          {apiResponse.map((value: IResponse, key) => (
            <li key={key} onClick={fetchLikes}>
              <br />
              <ol>
                <li>{value.author}</li>
                <li>{value.width}</li>
                <li>{value.height}</li>
                <li>{value.url}</li>
                <li>{value.download_url}</li>
              </ol>
              <button type="button" onClick={() => handleLikes(value.id)}>
                Like
              </button>
              <br />
              <div>
                {likes.map((like, key) => (
                  <li key={key}>{like.likes}</li>
                ))}
              </div>
              <button type="button" onClick={getLikes}>
                Show Likes
              </button>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
};

export default App;
