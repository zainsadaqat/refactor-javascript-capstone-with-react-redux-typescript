import React, { FC, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

interface IResponse {
  id?: string;
  author?: string;
  width?: number;
  height?: number;
  url?: string;
  download_url?: string;
}

const App: FC = () => {
  const [apiResponse, setApiResponse] = useState<IResponse[]>([]);
  const handleResponse = async () => {
    const response = await axios.get<IResponse[]>(
      'https://picsum.photos/v2/list'
    );
    const data1 = await response.data;
    console.log('Data: ', data1);
    setApiResponse(data1);
  };

  return (
    <div className="App">
      <button type="button" onClick={handleResponse}>
        Click Me to Get Data
      </button>
      <section>
        {apiResponse.map((value: IResponse, key) => (
          <li key={key}>{value.author}</li>
        ))}
      </section>
    </div>
  );
};

export default App;
