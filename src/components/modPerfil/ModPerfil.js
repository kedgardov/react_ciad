import React from 'react';

const ModPerfil = () => {
  return (
    <div>
      <h1>Edit Profile</h1>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="bio">Bio:</label>
          <textarea id="bio" name="bio"></textarea>
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default ModPerfil;
