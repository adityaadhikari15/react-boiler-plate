import { useEffect, useState } from "react";
import { GetUsers } from "../../../../services/users.service";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    await GetUsers()
      .then((res) => {
        setUsers(res.users);
        console.log(users);
      })
      .catch(() => {});
  };

  return (
    <div>
      <div className="card">
        <h3 className="mb-16px text-underline">Users list</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Contact</th>
              <th scope="col">University</th>
            </tr>
          </thead>
          <tbody>
            {users.map((elem) => {
              return (
                <tr key={elem.id}>
                  <td>
                    <img src={elem.image} style={{ width: "40px" }}></img>
                  </td>
                  <td scope="row">
                    {elem.firstName} {elem.lastName}
                  </td>

                  <td>
                    <div>{elem.email}</div>
                    <div className="text-muted"> {elem.phone}</div>
                  </td>
                  <td>{elem.university}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersList;
