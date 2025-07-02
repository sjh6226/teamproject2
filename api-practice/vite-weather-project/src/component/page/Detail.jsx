// src/pages/Detail.jsx
import { useParams, useEffect, useState } from 'react';
import axios from 'axios';

function Detail() {
  const { id } = useParams(); // URL에서 id 추출
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`https://api.example.com/data/${id}`)
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <p><strong>ID:</strong> {id}</p>
    </div>
  );
}

export default Detail;
