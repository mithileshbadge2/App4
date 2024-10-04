import React, { useState } from 'react';

function App5() {
    const [A, setA] = useState(23)
    const [B,setB] = useState(24)
    const [user, setUser] = useState({
        name: "Mithilesh Badge",
        email: "badgemithilesh7@gmail.com",
        age: 24,
      });
    const isLoggedIn = true;

  return (
    <div>
      <h2>User Profile</h2>
      {isLoggedIn && (
        <>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Age:</strong> {user.age}</p>
        </>
      )}
    </div>
  );
}

export default App5;