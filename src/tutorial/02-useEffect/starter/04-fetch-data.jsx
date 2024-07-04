import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getUsers() {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      setUsers(data);
      return data;
    }
    getUsers();
  }, []);
  return (
    <>
      <ul className="users">
        {users.map((user) => {
          return (
            <div key={user.id}>
              <img src={user.avatar_url}></img>
              <p>{user.login}</p>
            </div>
          );
        })}
      </ul>
    </>
  );
};
export default FetchData;
