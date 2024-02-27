import { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

function PostData() {
    const [postId, setPostId] = useState<number>(0);
    const [user, setUser] = useState<Post | null>(null);
  
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(data => setUser(data));
    }, [postId]); // userId is a dependency
  
    const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPostId(Number(event.target.value));
    };

    return (
        <div>
          <input type="number" value={postId} onChange={handleIdChange} placeholder="Enter ID" />
          {postId === 0 || user === null ? <div>Loading...</div> : <div>{user.title}</div>}
          {postId === 0 || user === null ? <div>Loading...</div> : <div>{user.body}</div>}
        </div>
      );
}

export {PostData};
