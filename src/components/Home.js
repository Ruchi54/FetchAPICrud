import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";

const Home = () => {
  const [user, setUser] = useState([]);

  const loadUser = () => {
    fetch("https://gorest.co.in/public/v2/users", {
      headers: {
        Authorization: `Bearer c46c8176c189a01803d43cac358c36f5f778aff6736d80dd6e0199445626e3fb`,
      },
    }).then((result) => {
      result.json().then((resp) => {
        setUser(resp);
      });
    });
  };
  useEffect(() => {
    loadUser();
  }, []);

  const deleteUser = (id) => {
    const url = `https://gorest.co.in/public/v2/users/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        //Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer c46c8176c189a01803d43cac358c36f5f778aff6736d80dd6e0199445626e3fb`,
      },
      body: JSON.stringify(user),
    })
      .then((resp) => {
        console.log("Resp", resp);
      })
      .catch((e) => {
        console.log("e", e);
      });

    loadUser();
  };

  return (
    <>
      <h2>User Page</h2>
      <div>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Email</td>
              <td>Gender</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>

          {user.map((data) => {
            const color =
              data.status === "active" ? "rgb(76, 178, 76)" : "#ff6fb7";
            const bgcolor =
              data.status === "active"
                ? "rgb(223, 239, 223)"
                : "rgb(239, 197, 233)";
            return (
              <>
                <tbody>
                  <tr>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.gender}</td>
                    <td>
                      <span
                        class="badge "
                        style={{
                          color: `${color}`,
                          backgroundColor: `${bgcolor}`,
                        }}
                      >
                        {data.status}
                      </span>
                    </td>

                    <td>
                      <Link to={`user/edit/${data.id}`}>
                        <button className="edit_button">Edit</button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="delete_button"
                        onClick={() => deleteUser(data.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Home;
