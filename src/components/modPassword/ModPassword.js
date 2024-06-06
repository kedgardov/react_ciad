import React from 'react';

const ModPassword = () => {
  return (
    <div>
      <h1>Change Password</h1>
      <form>
        <div>
          <label htmlFor="current-password">Current Password:</label>
          <input type="password" id="current-password" name="current-password" />
        </div>
        <div>
          <label htmlFor="new-password">New Password:</label>
          <input type="password" id="new-password" name="new-password" />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm New Password:</label>
          <input type="password" id="confirm-password" name="confirm-password" />
        </div>
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
};

export default ModPassword;
