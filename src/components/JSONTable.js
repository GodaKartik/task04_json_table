import Axios from "axios";
import { useState, useEffect } from "react";

function JSONTable() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("https://dummyjson.com/users")
      .then((resolve) => {
        if (resolve.status === 200) {
          console.log(resolve);
          setData(resolve.data.users);
        } else Promise.reject();
      })
      .catch((error) => console.log(error));
  }, []);

  const fillTable = () => {
    return data.map((user) => {
      return (
        <tr style={{ color: "white" }}>
          <td>{user.id}</td>
          <td>
            <img
              src={user.image}
              alt=""
              style={{
                height: "20px",
              }}
            />
          </td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.gender}</td>
          <td>{user.email}</td>
          <td>{user.username}</td>
          <td>{user.domain}</td>
          <td>{user.ip}</td>
          <td>{user.university}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <h1
        style={{
          width: "fit-content",
          marginLeft: "auto",
          marginRight: "auto",
          color: "white",
        }}
      >
        Dummy Data
      </h1>
      <table
        style={{
          borderSpacing: "16px",
          border: "1px solid white",
          borderRadius: "10px",
          //   padding: "1%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <tr
          style={{
            textDecoration: "underline",
            fontWeight: "bold",
            color: "white",
          }}
        >
          <td>SNo</td>
          <td>PFP</td>
          <td>F Name</td>
          <td>L Name</td>
          <td>Gender</td>
          <td>Email</td>
          <td>Username</td>
          <td>Domain</td>
          <td>IP</td>
          <td>University</td>
        </tr>
        {fillTable()}
      </table>
    </div>
  );
}

export default JSONTable;
