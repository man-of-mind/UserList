import React, { useState } from 'react';
import Home from './home';
import { UserContext } from "./new-user";


function App() {
  const [users, setUsers] = useState<Array<Array<string>>>([]);

  const addUser = (userDetail: string[]) => {
    setUsers((prevState) => [...prevState, userDetail]);
  }

  return (
    <UserContext.Provider value={{ users, addUser, setUsers }}>
      <div className="App">
        <Home />
      </div>
    </UserContext.Provider>
  );
}

export default App;
