import React from 'react';

const CommentsForm = ({
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
          name="name"
          value={item.name}
          type="text"
          placeholder="name"
          onChange={handleField}
        />
        <input
          className="form-input"
          name="email"
          value={item.email}
          type="email"
          placeholder="email"
          onChange={handleField}
        />
        <input
          className="form-input"
          name="body"
          value={item.body}
          type="text"
          placeholder="body"
          onChange={handleField}
        />
        <button type="submit" className="form-button">
          submit
        </button>
      </form>
    </div>
  );
};

export default CommentsForm;
