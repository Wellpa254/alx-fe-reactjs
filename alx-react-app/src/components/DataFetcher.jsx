import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Example API - fetch posts
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  return (
    <div>
      <h2>Fetched Data:</h2>
      {data ? (
        <div>
          <p><strong>Title:</strong> {data.title}</p>
          <p><strong>Body:</strong> {data.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DataFetcher;
