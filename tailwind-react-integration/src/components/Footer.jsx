import React from 'react';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#111827',
        color: 'white',
        padding: '10px',
        textAlign: 'center',
        marginTop: '20px'
      }}
    >
      &copy; {new Date().getFullYear()} My Profile. All rights reserved.
    </footer>
  );
}
