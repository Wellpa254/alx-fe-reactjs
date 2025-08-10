import React from 'react';

export default function MainContent() {
  return (
    <main
      style={{
        padding: '20px',
        backgroundColor: '#FFFFFF',
        margin: '20px',
        border: '1px solid #E5E7EB',
        borderRadius: '8px'
      }}
    >
      <h1 style={{ fontSize: '22px', fontWeight: 'bold' }}>About Me</h1>
      <p style={{ marginTop: '10px', color: '#4B5563' }}>
        I am a passionate web developer with experience in building dynamic and responsive web applications.
      </p>
    </main>
  );
}
