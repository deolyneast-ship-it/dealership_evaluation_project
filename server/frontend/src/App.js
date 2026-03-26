import React from 'react';

function App() {
  const lilacStyle = {
    backgroundColor: '#E6E6FA',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000000',
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <div style={lilacStyle}>
      <h1>Rose Admin Dashboard</h1>
      <p>System is Live. Ready for Login.</p>
      <button style={{padding: '10px 20px', cursor: 'pointer'}}>Login as Rose</button>
    </div>
  );
}

export default App;
