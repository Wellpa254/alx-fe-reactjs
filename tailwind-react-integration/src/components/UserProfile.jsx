import React from 'react';

export default function UserProfile() {
  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: '#F3F4F6',
        borderRadius: '8px',
        margin: '20px',
        textAlign: 'center'
      }}
    >
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        style={{
          borderRadius: '50%',
          width: '150px',
          height: '150px'
        }}
      />
      <h2 style={{ marginTop: '10px', fontSize: '20px' }}>John Doe</h2>
      <p style={{ color: '#6B7280' }}>Web Developer</p>
    </div>
  );
}
