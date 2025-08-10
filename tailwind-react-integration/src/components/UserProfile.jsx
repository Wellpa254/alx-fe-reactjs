import React from 'react';
export default function UserProfile() {
  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: '#F9FAFB',
        borderRadius: '12px',
        margin: '20px auto',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        maxWidth: '300px'
      }}
    >
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        style={{
          borderRadius: '50%',
          width: '150px',
          height: '150px',
          objectFit: 'cover',
          border: '3px solid #E5E7EB'
        }}
      />
      <h2
        style={{
          marginTop: '12px',
          fontSize: '22px',
          fontWeight: '600',
          color: '#111827'
        }}
      >
        Muthama Wat
      </h2>
      <p
        style={{
          color: '#6B7280',
          fontSize: '14px',
          marginTop: '4px'
        }}
      >
        Web Developer
      </p>
    </div>
  );
}

