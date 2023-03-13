import React from 'react';
import './ItemCard.scss';

const ItemCard = ({ item, setItem, setFormOpen, deleteItem, setEditItem }) => {
  return (
    <div className="userCard">
      <p className="userCard-top-line df jcsb aic">
        <span className="userCard-label">Id:{item.id}</span>
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
        <span className="userCard-label">Title:</span>
        <span className="userCard-value">{item.title}</span>
      </p>
      <img
        loading={'eager'}
        src={`https://picsum.photos/seed/${item.id}/200`}
        alt={''}
      />
    </div>
  );
};

export default ItemCard;
