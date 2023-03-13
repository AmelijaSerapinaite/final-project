import React from 'react';
import './AlbumForm.scss'

const AlbumForm = ({
  loading,
  item,
  setItem,
  create,
  updateData,
  setFormOpen,
  editItem,
}) => {
  const handleField = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };
  return (
    <div className="form">
      <form
        onSubmit={(e) => {
          if (editItem) {
            updateData(e, item.id);
          } else {
            create(e);
          }
        }}
      >
        <div className="df jcfe">
          <i
            className="far fa-times form-close"
            onClick={() => setFormOpen(false)}
          ></i>
        </div>
        {loading && <div className="df jcc">Loading...</div>}
        <input
          className="form-input"
          name="title"
          value={item.title}
          type="text"
          placeholder="title"
          onChange={handleField}
        />
        <button type="submit" className="form-button">
          submit
        </button>
      </form>
    </div>
  );
};

export default AlbumForm;