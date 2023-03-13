import React from 'react';
import './AlbumCard.scss';

const AlbumCard = ({ item, setItem, setFormOpen, deleteItem, setEditItem }) => {
  return (
    <div className="card">
      <p>
        <span>Id:{item.id}</span>
        &nbsp;&nbsp;
        <i
          className="fas fa-edit cup"
          onClick={() => {
            setItem(item);
            setFormOpen(true);
            setEditItem(true);
          }}>
        </i>
        &nbsp;&nbsp;
        <i className="fas fa-trash cup" onClick={() => deleteItem(item.id)}></i>
      </p>
      <p>
        <span>Title:</span>
        <span>{item.title}</span>
      </p>
      <img
        loading={'eager'}
        src={`https://picsum.photos/seed/${item.id}/200`}
        alt={''}
      />
    </div>
  );
};

export default AlbumCard;