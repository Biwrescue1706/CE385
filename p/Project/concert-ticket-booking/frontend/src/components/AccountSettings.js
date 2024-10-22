import React, { useState } from 'react';

function AccountSettings() {
  const [email, setEmail] = useState('user@example.com');
  const [password, setPassword] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    // Call API to update user details
    alert('Account updated successfully');
  };

  return (
    <div>
      <h1>Account Settings</h1>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled
          />
        </div>
        <div>
          <label>New Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default AccountSettings;