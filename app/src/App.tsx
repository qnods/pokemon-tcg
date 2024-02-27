import { PostData } from './components/handleChange';
import { AllUser } from './components/allUser';
import { useState } from 'react';

function App() {
  const [showPostData, setShowPostData] = useState<boolean>(false);
  const [showAllUser, setShowAllUser] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setShowPostData(!showPostData)}>
        {showPostData ? 'Hide PostData' : 'Show PostData'}
      </button>
      <button onClick={() => setShowAllUser(!showAllUser)}>
        {showAllUser ? 'Hide AllUser' : 'Show AllUser'}
      </button>
      {showPostData && <PostData />}
      {showAllUser && <AllUser />}
    </div>
  );
}


export default App;
