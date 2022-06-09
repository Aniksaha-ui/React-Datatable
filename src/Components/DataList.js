import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";

const DataList = () => {
  const [userList, setUserList] = useState([]);
  const columns = [
    { dataField: "id", text: "Id", sort: true },
    { dataField: "userId", text: "UserId", sort: true },
    { dataField: "title", text: "Title", sort: true },
    { dataField: "body", text: "Body", sort: true },
  ];

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    prePageText: "prev",
    nextPageText: "next",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => setUserList(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mt-5">
      <h2>Please just scroll if want to change the size of post per page.</h2>
      <BootstrapTable
        bootstrap4
        keyField="id"
        columns={columns}
        data={userList}
        pagination={pagination}
      />

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
