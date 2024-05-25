import React from "react";

function Edituser({
  clicked,
  user,
  setFullName,
  setEmail,
  setPhone,
  handleUpdate,
  cancelEdit,
}) {
  if (!clicked) return null;

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleUpdate}>
        <label>
          Full Name:
          <input
            type="text"
            value={user.fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="text"
            value={user.phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleUpdate}>
          Update
        </button>
        <button type="button" onClick={cancelEdit}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default Edituser;
