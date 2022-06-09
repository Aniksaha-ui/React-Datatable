import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";

const DataList = () => {
  const [userList, setUserList] = useState([]);
  const columns = [
    { dataField: "id", text: "Id", sort: true },
    { dataField: "name", text: "Name", sort: true },
    { dataField: "username", text: "Username", sort: true },
    { dataField: "email", text: "Email", sort: true },
  ];
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => setUserList(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <BootstrapTable keyField="id" columns={columns} data={userList} />

      {/* <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>User Name</th>
          <th>Email</th>
        </tr>
        {userList && userList.length > 0
          ? userList.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))
          : "Loading ...."}
      </table> */}
    </div>
  );
};

export default DataList;
