import {useState, useEffect} from 'react';

interface User {
    id: number;
    name: string;
    }

function AllUser() {
    const [users, setUsers] = useState<User[]>([]);
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data));
    }, []);

    return (
        <div>
          <h2>All Users</h2>
          <ul>
            {users.map((user: User) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      );

}

export {AllUser};