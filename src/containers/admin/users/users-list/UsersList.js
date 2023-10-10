import { useEffect, useState } from "react";
import { GetUsers } from "../../../../services/users.service";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "primereact/button";
import { addUser, allUsers } from "../../../../store/slices/userSlice";
import reactLogo from "../../../../assets/images/react.png";

const UsersList = () => {
  //   const [users, setUsers] = useState([]);

  const users = useSelector((store) => store.user.usersList);
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    await GetUsers()
      .then((res) => {
        dispatch(allUsers(res.users));
        // setUsers(res.users);
      })
      .catch(() => {});
  };

  return (
    <div>
      <div className="card">
        <div className="d-flex justify-content-between">
          <h3 className="mb-16px text-underline">Users list</h3>
          <div>
            <Button
              label="Add User using redux"
              className="btn btn-sm btn-primary w-100 mt-0"
              onClick={() => {
                dispatch(
                  addUser({
                    id: Math.random(),
                    firstName: "Redux User",
                    email: "testredux@react.com",
                    phone: "0987654321",
                    university: "React India",
                    img: { reactLogo },
                  })
                );
              }}
            />
          </div>
        </div>

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
            {users.length &&
              users.map((elem) => {
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
