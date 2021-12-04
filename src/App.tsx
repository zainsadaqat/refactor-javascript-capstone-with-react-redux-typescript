import { FC, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetPicsumAction } from './redux/actions/LoremPicsumActions';
import { RootStore } from './redux/store';
import 'antd/dist/antd.css';
import { Layout, Skeleton, Card, Avatar, Image, Row, Col } from 'antd';
import {
  DownloadOutlined,
  CommentOutlined,
  LikeOutlined,
  HeartFilled,
} from '@ant-design/icons';
import { LikeAction } from './redux/actions/LikeActions';
import { LikesI } from './redux/reducers/LikeReducer';
const { Header, Footer, Content } = Layout;
const { Meta } = Card;

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetPicsumAction());
    dispatch(LikeAction());
  }, []);

  const lorempicsum = useSelector(
    (state: RootStore) => state.lorempicsum.loremPicsum
  );

  const likes = useSelector((state: RootStore) => state.like.likes);
  console.log('Likes1: ', likes);

  return (
    <div>
      <Layout>
        <Header style={{ color: '#f9f9f9', textTransform: 'uppercase' }}>
          Lorem Picsum By Zain Sadaqat
        </Header>
        <Content style={{ padding: 25 }}>
          <Row gutter={16}>
            {lorempicsum?.map((pic, key) => (

                  <Col span={8} key={key}>
                  <Card
                  style={{ width: 450, marginTop: 30 }}
                  actions={[
                    <a href="">
                      <LikeOutlined />
                      90
                    </a>,
                    <CommentOutlined />,
                    <a href={pic.url}>
                      <DownloadOutlined />
                    </a>,
                  ]}
                  >
                  <Image width={400} height={400} src={pic.download_url} />
                  <Skeleton loading={false}>
                  <Meta
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: 6,
                  }}
                  avatar={<Avatar src={pic.download_url} />}
                  title={pic.author}
                  />
                  </Skeleton>
                  </Card>
                  </Col>

            ))}
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          MADE WITH <HeartFilled style={{ color: '#eb2f96' }} /> BY ZAIN SADAQAT
          IN PAKISTAN
        </Footer>
      </Layout>
    </div>
  );
};

export default App;

// import { FC, useState } from 'react';
// import axios from 'axios';
// import { GET_IMAGES_LIST } from './EndPoints';
// import { LIKES } from './EndPoints';

// interface IFetchLikes {
//   item_id: string;
//   likes: number;
// }

// const App: FC = () => {
//   const [apiResponse, setApiResponse] = useState<IResponse[]>([]);
//   const [likes, setLikes] = useState<{ item_id: string; likes: number }[]>([]);

//   const handleResponse = async (): Promise<void> => {
//     const response = await axios.get<IResponse[]>(GET_IMAGES_LIST);
//     const data1 = await response.data;
//     setApiResponse(data1);
//   };

//   const fetchLikes = async (): Promise<IFetchLikes[]> => {
//     const response = await axios.get<IFetchLikes[]>(LIKES);
//     return response.data;
//   };

//   const getLikes = (): void => {
//     fetch(LIKES)
//       .then((res) => res.json())
//       .then((data) => setLikes(data));
//   };

//   const handleLikes = (item_id: string | undefined): void => {
//     axios.post<{ item_id: string }>(LIKES, { item_id });
//   };

//   return (
//     <div className="App">
//       <button type="button" onClick={handleResponse}>
//         Click Me to Get Data
//       </button>
//       <section>
//         <ol>
//           {apiResponse.map((value: IResponse, key) => (
//             <li key={key} onClick={fetchLikes}>
//               <br />
//               <ol>
//                 <li>{value.author}</li>
//                 <li>{value.width}</li>
//                 <li>{value.height}</li>
//                 <li>{value.url}</li>
//                 <li>{value.download_url}</li>
//               </ol>
//               <button type="button" onClick={() => handleLikes(value.id)}>
//                 Like
//               </button>
//               <br />
//               <div>
//                 {likes.map((like, key) => (
//                   <li key={key}>{like.likes}</li>
//                 ))}
//               </div>
//               <button type="button" onClick={getLikes}>
//                 Show Likes
//               </button>
//             </li>
//           ))}
//         </ol>
//       </section>
//     </div>
//   );
// };

// export default App;
