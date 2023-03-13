import React from 'react';

const UserCard = ({
  user,
  setUser,
  setUserFormOpen,
  deleteUser,
  setEditItem,
}) => {
  return (
    <div className="card">
      <p>
        <span><b>ID: </b>{user.id}</span>
        &nbsp;&nbsp;
        <i
          className="fas fa-edit cup"
          onClick={() => {
            setUser(user);
            setUserFormOpen(true);
            setEditItem(true);
          }}
        ></i>
        &nbsp;&nbsp;
        <i className="fas fa-trash cup" onClick={() => deleteUser(user.id)}></i>
      </p>
      <p>
        <span className="userCard-label"><b>Name: </b></span>
        <span className="userCard-value">{user.name}</span>
      </p>
      <p>
        <span className="userCard-label"><b>Email: </b></span>
        <span className="userCard-value">{user.email}</span>
      </p>
      <p>
        <span className="userCard-label"><b>Username: </b></span>
        <span className="userCard-value">{user.username}</span>
      </p>
      <p>
        <span className="userCard-label"><b>Phone: </b></span>
        <span className="userCard-value">{user.phone}</span>
      </p>
      <p>
        <span className="userCard-label"><b>Website: </b></span>
        <span className="userCard-value">{user.website}</span>
      </p>
    </div>
  );
};

export default UserCard;
