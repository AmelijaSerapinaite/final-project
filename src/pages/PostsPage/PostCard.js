import React from 'react';

const PostCard = ({ item, setItem, setFormOpen, deleteItem, setEditItem }) => {
  return (
    <div className="card">
      <p>
        <span className="userCard-label"><b>ID: </b>{item.id}</span>
        &nbsp;&nbsp;
        <i
          className="fas fa-edit cup"
          onClick={() => {
            setItem(item);
            setFormOpen(true);
            setEditItem(true);
          }}
        ></i>
        &nbsp;&nbsp;
        <i className="fas fa-trash cup" onClick={() => deleteItem(item.id)}></i>
      </p>
      <p>
        <span><b>Title: </b></span>
        <span>{item.title}</span>
      </p>
      <p>
        <span><b>Body: </b></span>
        <span>{item.body}</span>
      </p>
    </div>
  );
};

export default PostCard;
