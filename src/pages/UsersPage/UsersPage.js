import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import UserForm from "./UserForm";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [userFormOpen, setUserFormOpen] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const getUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(response.data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const resetUser = () => {
    setUser({
      name: "",
      email: "",
      username: "",
      phone: "",
      website: "",
    });
  };

  const createUser = (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      user.name !== "" &&
      user.email !== "" &&
      user.username !== "" &&
      user.phone !== "" &&
      user.website !== ""
    ) {
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setUsers([...users, json]);
          resetUser();
          setLoading(false);
          setUserFormOpen(false);
        });
    } else {
      alert("please fill all the fields");
      setLoading(false);
    }
  };
  const deleteUser = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    });
    setUsers([...users.filter((user) => user.id !== id)]);
  };
  const updateUser = async (e, id) => {
    e.preventDefault();
    setLoading(true);
    if (
      user.name !== "" &&
      user.email !== "" &&
      user.username !== "" &&
      user.phone !== "" &&
      user.website !== ""
    ) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "PATCH",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setUsers([
            ...users.map((user) => {
              if (user.id === id) {
                return json;
              } else {
                return user;
              }
            }),
          ]);
          resetUser();
          setLoading(false);
          setUserFormOpen(false);
          setEditItem(false);
        });
    } else {
      alert("please fill all the fields");
      setLoading(false);
    }
  };
  return (
    <div className="users">
      <h1 className="heading">Users</h1>
      <div className="add-new-btn">
        <button
          onClick={() => {
            resetUser();
            setUserFormOpen(true);
          }}
        >
          Add
        </button>
      </div>
      {console.log("users", users)}
      {userFormOpen && (
        <UserForm
          loading={loading}
          user={user}
          setUser={setUser}
          createUser={createUser}
          updateUser={updateUser}
          editItem={editItem}
          setUserFormOpen={setUserFormOpen}
        />
      )}
      <div className="wrapper">
        {users.map((user) => (
          <UserCard
            key={user?.id}
            user={user}
            setUser={setUser}
            setUserFormOpen={setUserFormOpen}
            setEditItem={setEditItem}
            deleteUser={deleteUser}
          />
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
