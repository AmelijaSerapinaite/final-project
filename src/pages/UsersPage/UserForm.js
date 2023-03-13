import React from 'react';

const UserForm = ({
  loading,
  user,
  setUser,
  createUser,
  updateUser,
  setUserFormOpen,
  editItem,
}) => {
  const handleField = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="form">
      <form
        onSubmit={(e) => {
          if (editItem) {
            updateUser(e, user.id);
          } else {
            createUser(e);
          }
        }}
      >
        <div className="df jcfe">
          <i
            className="far fa-times form-close"
            onClick={() => setUserFormOpen(false)}
          ></i>
        </div>
        {loading && <div className="df jcc">Loading...</div>}
        <input
          className="form-input"
          name="name"
          value={user.name}
          type="text"
          placeholder="name"
          onChange={handleField}
        />
        <input
          className="form-input"
          name="email"
          value={user.email}
          type="email"
          placeholder="email"
          onChange={handleField}
        />
        <input
          className="form-input"
          name="username"
          value={user.username}
          type="text"
          placeholder="username"
          onChange={handleField}
        />
        <input
          className="form-input"
          name="phone"
          value={user.phone}
          type="text"
          placeholder="phone"
          onChange={handleField}
        />
        <input
          className="form-input"
          name="website"
          value={user.website}
          type="text"
          placeholder="website"
          onChange={handleField}
        />
        <button type="submit" className="form-button">
          submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
