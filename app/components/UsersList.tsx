import React, { useEffect, useState } from 'react';
import { db } from '../firebase'; // Import firebase config
import { collection, getDocs } from 'firebase/firestore';

interface User {
  name: string;
  email: string;
}

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Fetch data from Firestore on component mount
    const fetchUsers = async () => {
      const usersCollection = collection(db, 'Users'); // Adjust this to your collection name
      const userSnapshot = await getDocs(usersCollection);
      const userList = userSnapshot.docs.map(doc => doc.data() as User);
      setUsers(userList);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;